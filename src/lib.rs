mod utils;

use js_sys::Math::random;
use std::fmt;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Debug, Clone)]
pub struct Cell {
    is_hidden: bool,
    is_bomb: bool,
    is_flag: bool,
    adjacent_bombs: u8,
}

impl Cell {
    pub fn new(is_bomb: bool) -> Self {
        Self {
            is_hidden: true,
            is_bomb,
            is_flag: false,
            adjacent_bombs: 0,
        }
    }

    fn reveal(&mut self) {
        self.is_hidden = false;
    }

    fn toggle_flag(&mut self) {
        self.is_flag = !self.is_flag;
    }
}

impl fmt::Display for Cell {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        if self.is_flag {
            write!(f, "🚩")?;
        } else if self.is_hidden {
            write!(f, "🟦")?;
        } else if self.is_bomb {
            write!(f, "💣")?;
        } else {
            let emoji_number = match self.adjacent_bombs {
                0 => "⬜",
                1 => "1️⃣",
                2 => "2️⃣",
                3 => "3️⃣",
                4 => "4️⃣",
                5 => "5️⃣",
                6 => "6️⃣",
                7 => "7️⃣",
                8 => "8️⃣",
                _ => "",
            };
            write!(f, "{}", emoji_number)?;
            // write!(f, " {}", self.adjacent_bombs)?;
        }
        Ok(())
    }
}

#[wasm_bindgen]
pub struct Board {
    width: usize,
    height: usize,
    cells: Vec<Vec<Cell>>,
    bomb_positions: Vec<(i32, i32)>,
    pub number_of_flags: usize,
}

#[wasm_bindgen]
impl Board {
    pub fn new(width: usize, height: usize) -> Self {
        let mut cells = vec![vec![Cell::new(false); width]; height];
        let mut bomb_positions: Vec<(i32, i32)> = vec![];

        for y in 0..height {
            for x in 0..width {
                let is_bomb = 0.13 > random();
                if is_bomb {
                    bomb_positions.push((x as i32, y as i32));
                    cells[y][x].is_bomb = true;
                }
            }
        }

        for (bomb_x, bomb_y) in &bomb_positions {
            // Increment bomb counters of all cells surrounding the bomb
            for cell_y in bomb_y - 1..=bomb_y + 1 {
                for cell_x in bomb_x - 1..=bomb_x + 1 {
                    // Don't increment cells outside of bounds
                    if cell_y < 0 || cell_x < 0 || cell_x >= width as i32 || cell_y >= height as i32
                    {
                        continue;
                    }

                    cells[cell_y as usize][cell_x as usize].adjacent_bombs += 1;
                }
            }
        }

        Self {
            width,
            height,
            cells,
            bomb_positions,
            number_of_flags: 0,
        }
    }

    fn reveal_single(&mut self, x: i32, y: i32) -> bool {
        let u_x = x as usize;
        let u_y = y as usize;
        self.cells[u_y][u_x].reveal();
        return self.cells[u_y][u_x].is_bomb;
    }

    pub fn reveal(&mut self, x: i32, y: i32) -> bool {
        let u_x = x as usize;
        let u_y = y as usize;
        let was_bomb = self.reveal_single(x, y);

        if was_bomb {
            return was_bomb;
        }

        if self.cells[u_y][u_x].adjacent_bombs == 0 {
            for cell_y in y - 1..=y + 1 {
                for cell_x in x - 1..=x + 1 {
                    // Don't reveal cells outside of bounds
                    if cell_y < 0
                        || cell_x < 0
                        || cell_x >= self.width as i32
                        || cell_y >= self.height as i32
                    {
                        continue;
                    }
                    // self.reveal_single(cell_x, cell_y);
                    if self.cells[cell_y as usize][cell_x as usize].is_hidden {
                        self.reveal(cell_x, cell_y);
                    }
                }
            }
        }

        return false;
    }

    pub fn reveal_bombs(&mut self) {
        for (x, y) in self.bomb_positions.clone() {
            self.reveal_single(x, y);
        }
    }

    pub fn toggle_flag(&mut self, x: i32, y: i32) {
        self.cells[y as usize][x as usize].toggle_flag();
        if self.cells[y as usize][x as usize].is_flag {
            self.number_of_flags += 1;
        } else {
            self.number_of_flags -= 1;
        }
    }

    pub fn render(&self) -> String {
        return self.to_string();
    }

    pub fn check_win_condition(&self) -> bool {
        for column in &self.cells {
            for cell in column {
                if cell.is_hidden && !cell.is_flag {
                    return false;
                }
            }
        }

        return true;
    }

    pub fn number_of_bombs(&self) -> usize {
        return self.bomb_positions.len()
    }
}

impl fmt::Display for Board {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for column in &self.cells {
            for cell in column {
                write!(f, "<span class='c'>{}</span>", cell)?;
            }
            write!(f, "<br>")?;
        }
        Ok(())
    }
}

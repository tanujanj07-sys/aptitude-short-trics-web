// =========================
// QUESTION DATA (with answers, shortcuts, explanations, examples)
// =========================
const questionsData = [
  {
    id: 1,
    question: "What is 25% of 200?",
    category: "Percentage",
    answer: "50",
    shortcut: "x% of y = (x × y) / 100",
    explanation: [
      "Use the percentage formula: x% of y = (x × y) / 100.",
      "Here x = 25 and y = 200.",
      "So, 25% of 200 = (25 × 200) / 100 = 5000 / 100 = 50."
    ],
    example: "Similarly, 20% of 150 = (20 × 150) / 100 = 30."
  },
  {
    id: 2,
    question: "If cost price is 400 and selling price is 500, what is the profit percentage?",
    category: "Profit and Loss",
    answer: "25%",
    shortcut: "Profit% = (Profit / Cost Price) × 100, where Profit = SP − CP",
    explanation: [
      "First find profit: Profit = SP − CP = 500 − 400 = 100.",
      "Then apply profit percentage formula: Profit% = (Profit / CP) × 100.",
      "So, Profit% = (100 / 400) × 100 = 0.25 × 100 = 25%."
    ],
    example: "If CP = 800 and SP = 1000, profit = 200, profit% = (200/800)×100 = 25%."
  },
  {
    id: 3,
    question: "A can do a work in 10 days and B in 15 days. In how many days will they finish the work together?",
    category: "Time and Work",
    answer: "6 days",
    shortcut: "Together time = (x × y) / (x + y), where x and y are individual times",
    explanation: [
      "A’s one-day work = 1/10.",
      "B’s one-day work = 1/15.",
      "Together one-day work = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6.",
      "So together they finish in 6 days.",
      "Shortcut: (10 × 15) / (10 + 15) = 150 / 25 = 6 days."
    ],
    example: "If A takes 12 days and B takes 18 days, together time = (12×18)/(12+18) = 216/30 = 7.2 days."
  },
  {
    id: 4,
    question: "A train covers 300 km in 5 hours. What is its speed?",
    category: "Speed and Distance",
    answer: "60 km/h",
    shortcut: "Speed = Distance / Time",
    explanation: [
      "Use the formula: Speed = Distance / Time.",
      "Distance = 300 km, Time = 5 hours.",
      "Speed = 300 / 5 = 60 km/h."
    ],
    example: "If a car travels 180 km in 3 hours, speed = 180/3 = 60 km/h."
  },
  {
    id: 5,
    question: "Find the average of 10, 20 and 30.",
    category: "Average",
    answer: "20",
    shortcut: "Average = Sum of values / Number of values",
    explanation: [
      "Sum of values = 10 + 20 + 30 = 60.",
      "Number of values = 3.",
      "Average = 60 / 3 = 20."
    ],
    example: "Average of 5, 15, 25 = (5+15+25)/3 = 45/3 = 15."
  },
  {
    id: 6,
    question: "Is 123 divisible by 3?",
    category: "Number System",
    answer: "Yes",
    shortcut: "A number is divisible by 3 if the sum of its digits is divisible by 3",
    explanation: [
      "Sum of digits of 123 = 1 + 2 + 3 = 6.",
      "6 is divisible by 3, so 123 is also divisible by 3."
    ],
    example: "For 246: 2+4+6 = 12, which is divisible by 3, so 246 is divisible by 3."
  },
  {
    id: 7,
    question: "What is 20% of 150?",
    category: "Percentage",
    answer: "30",
    shortcut: "x% of y = (x × y) / 100",
    explanation: [
      "Use x% of y = (x × y) / 100.",
      "Here x = 20, y = 150.",
      "20% of 150 = (20 × 150) / 100 = 3000 / 100 = 30."
    ],
    example: "15% of 200 = (15 × 200) / 100 = 30."
  },
  {
    id: 8,
    question: "If CP is 500 and loss is 10%, find SP.",
    category: "Profit and Loss",
    answer: "450",
    shortcut: "SP = CP × (100 − Loss%) / 100",
    explanation: [
      "Loss% = 10, CP = 500.",
      "SP = CP × (100 − Loss%) / 100 = 500 × (100 − 10) / 100.",
      "SP = 500 × 90 / 100 = 45000 / 100 = 450."
    ],
    example: "If CP = 800 and loss = 20%, SP = 800 × 80 / 100 = 640."
  },
  {
    id: 9,
    question: "What is 15% of 300?",
    category: "Percentage",
    answer: "45",
    shortcut: "x% of y = (x × y) / 100",
    explanation: [
      "x = 15, y = 300.",
      "15% of 300 = (15 × 300) / 100 = 4500 / 100 = 45."
    ],
    example: "10% of 250 = (10 × 250)/100 = 25."
  },
  {
    id: 10,
    question: "If SP is 600 and profit is 20%, find CP.",
    category: "Profit and Loss",
    answer: "500",
    shortcut: "CP = (SP × 100) / (100 + Profit%)",
    explanation: [
      "Profit% = 20, SP = 600.",
      "CP = (600 × 100) / (100 + 20) = 60000 / 120 = 500."
    ],
    example: "If SP = 1200 and profit = 20%, CP = (1200×100)/120 = 1000."
  },
  {
    id: 11,
    question: "A can do a piece of work in 8 days. What is A’s one-day work?",
    category: "Time and Work",
    answer: "1/8",
    shortcut: "One-day work = 1 / Number of days",
    explanation: [
      "If A can complete the work in 8 days, then in 1 day A does 1/8 of the work."
    ],
    example: "If B can do work in 12 days, one-day work = 1/12."
  },
  {
    id: 12,
    question: "A car travels at 40 km/h. How far will it go in 3 hours?",
    category: "Speed and Distance",
    answer: "120 km",
    shortcut: "Distance = Speed × Time",
    explanation: [
      "Speed = 40 km/h, Time = 3 hours.",
      "Distance = 40 × 3 = 120 km."
    ],
    example: "At 60 km/h for 2.5 hours, distance = 60 × 2.5 = 150 km."
  },
  {
    id: 13,
    question: "Find the average of 8, 12, 16 and 20.",
    category: "Average",
    answer: "14",
    shortcut: "Average = Sum of values / Number of values",
    explanation: [
      "Sum = 8 + 12 + 16 + 20 = 56.",
      "Count = 4.",
      "Average = 56 / 4 = 14."
    ],
    example: "Average of 2, 4, 6 = (2+4+6)/3 = 12/3 = 4."
  },
  {
    id: 14,
    question: "Is 245 divisible by 5?",
    category: "Number System",
    answer: "Yes",
    shortcut: "A number is divisible by 5 if its last digit is 0 or 5",
    explanation: [
      "Last digit of 245 is 5, so it is divisible by 5."
    ],
    example: "370 ends with 0, so it is divisible by 5."
  },
  {
    id: 15,
    question: "What is 30% of 250?",
    category: "Percentage",
    answer: "75",
    shortcut: "x% of y = (x × y) / 100",
    explanation: [
      "x = 30, y = 250.",
      "30% of 250 = (30 × 250) / 100 = 7500 / 100 = 75."
    ],
    example: "40% of 150 = (40 × 150)/100 = 60."
  },
  {
    id: 16,
    question: "If CP is 1000 and SP is 800, what is the loss percentage?",
    category: "Profit and Loss",
    answer: "20%",
    shortcut: "Loss% = (Loss / CP) × 100, where Loss = CP − SP",
    explanation: [
      "Loss = CP − SP = 1000 − 800 = 200.",
      "Loss% = (200 / 1000) × 100 = 20%."
    ],
    example: "If CP = 500, SP = 400, loss = 100, loss% = (100/500)×100 = 20%."
  },
  {
    id: 17,
    question: "A and B together can do a work in 6 days. A alone can do it in 10 days. In how many days can B alone do it?",
    category: "Time and Work",
    answer: "15 days",
    shortcut: "1/B = 1/(Together) − 1/A",
    explanation: [
      "(A + B) one-day work = 1/6.",
      "A’s one-day work = 1/10.",
      "B’s one-day work = 1/6 − 1/10 = (5 − 3)/30 = 2/30 = 1/15.",
      "So B alone takes 15 days."
    ],
    example: "If (A+B) take 4 days and A takes 6 days, then B takes 12 days."
  },
  {
    id: 18,
    question: "A bus travels 180 km in 4 hours. What is its average speed?",
    category: "Speed and Distance",
    answer: "45 km/h",
    shortcut: "Speed = Distance / Time",
    explanation: [
      "Distance = 180 km, Time = 4 hours.",
      "Speed = 180 / 4 = 45 km/h."
    ],
    example: "200 km in 5 hours → 200/5 = 40 km/h."
  },
  {
    id: 19,
    question: "Find the average of the first 5 natural numbers.",
    category: "Average",
    answer: "3",
    shortcut: "Average of first n natural numbers = (n + 1) / 2",
    explanation: [
      "First 5 natural numbers: 1, 2, 3, 4, 5.",
      "Sum = 15, count = 5, average = 15/5 = 3.",
      "Shortcut: (5 + 1)/2 = 3."
    ],
    example: "First 9 natural numbers average = (9+1)/2 = 5."
  },
  {
    id: 20,
    question: "Is 312 divisible by 4?",
    category: "Number System",
    answer: "Yes",
    shortcut: "A number is divisible by 4 if the number formed by its last two digits is divisible by 4",
    explanation: [
      "Last two digits of 312 are 12.",
      "12 is divisible by 4, so 312 is divisible by 4."
    ],
    example: "516: last two digits 16, divisible by 4, so 516 is divisible by 4."
  },
  {
    id: 21,
    question: "Find simple interest on ₹2000 at 5% per annum for 3 years.",
    category: "Simple Interest",
    answer: "₹300",
    shortcut: "SI = (P × R × T) / 100",
    explanation: [
      "P = 2000, R = 5, T = 3.",
      "SI = (2000 × 5 × 3) / 100 = 30000 / 100 = 300."
    ],
    example: "₹1000 at 10% for 2 years → SI = (1000×10×2)/100 = 200."
  },
  {
    id: 22,
    question: "Divide ₹600 in the ratio 2:3. What is the larger share?",
    category: "Ratio and Proportion",
    answer: "₹360",
    shortcut: "Share = (Part / Total parts) × Total amount",
    explanation: [
      "Total parts = 2 + 3 = 5.",
      "Larger share corresponds to 3 parts.",
      "Larger share = (3/5) × 600 = 1800/5 = 360."
    ],
    example: "₹800 in ratio 1:3 → larger share = (3/4)×800 = 600."
  },
  {
    id: 23,
    question: "In how many ways can 3 books be arranged on a shelf?",
    category: "Permutation and Combination",
    answer: "6",
    shortcut: "Number of arrangements of n distinct items = n!",
    explanation: [
      "Here n = 3.",
      "Number of arrangements = 3! = 3 × 2 × 1 = 6."
    ],
    example: "4 books can be arranged in 4! = 24 ways."
  },
  {
    id: 24,
    question: "A bag has 3 red and 2 blue balls. What is the probability of drawing a red ball?",
    category: "Probability",
    answer: "3/5",
    shortcut: "Probability = Favorable outcomes / Total outcomes",
    explanation: [
      "Favorable outcomes (red) = 3.",
      "Total outcomes = 3 + 2 = 5.",
      "Probability = 3/5."
    ],
    example: "4 red, 6 blue → P(red) = 4/10 = 2/5."
  }
];

// =========================
// SHORTCUT RULES DATA (formulas and rules, not tied to specific questions)
// =========================
const shortcutsData = [
  // ---------- Percentage ----------
  {
    title: "Percentage of a Number",
    category: "Percentage",
    formula: "x% of y = (x × y) / 100",
    example: "25% of 200 = (25 × 200)/100 = 50"
  },
  {
    title: "Successive Percentage Change",
    category: "Percentage",
    formula: "Net change = a + b + (ab / 100)",
    example: "20% increase then 10% increase → 20 + 10 + (20×10)/100 = 32% increase"
  },
  {
    title: "Express Fraction as Percentage",
    category: "Percentage",
    formula: "Fraction a/b as % = (a / b) × 100%",
    example: "3/5 = (3/5)×100% = 60%"
  },
  {
    title: "Percentage Increase",
    category: "Percentage",
    formula: "% Increase = [(New − Old) / Old] × 100",
    example: "Salary from 8000 to 10000 → (2000/8000)×100 = 25% increase"
  },
  {
    title: "Percentage Decrease",
    category: "Percentage",
    formula: "% Decrease = [(Old − New) / Old] × 100",
    example: "Price from 500 to 400 → (100/500)×100 = 20% decrease"
  },

  // ---------- Profit and Loss ----------
  {
    title: "Profit Percentage",
    category: "Profit and Loss",
    formula: "Profit% = (Profit / CP) × 100, Profit = SP − CP",
    example: "CP = 400, SP = 500 → Profit = 100 → Profit% = 25%"
  },
  {
    title: "Loss Percentage",
    category: "Profit and Loss",
    formula: "Loss% = (Loss / CP) × 100, Loss = CP − SP",
    example: "CP = 500, SP = 450 → Loss = 50 → Loss% = 10%"
  },
  {
    title: "Selling Price from Profit%",
    category: "Profit and Loss",
    formula: "SP = CP × (100 + Profit%) / 100",
    example: "CP = 600, Profit = 20% → SP = 600 × 120 / 100 = 720"
  },
  {
    title: "Selling Price from Loss%",
    category: "Profit and Loss",
    formula: "SP = CP × (100 − Loss%) / 100",
    example: "CP = 500, Loss = 10% → SP = 500 × 90 / 100 = 450"
  },
  {
    title: "Cost Price from SP and Profit%",
    category: "Profit and Loss",
    formula: "CP = (SP × 100) / (100 + Profit%)",
    example: "SP = 600, Profit = 20% → CP = 600×100/120 = 500"
  },
  {
    title: "Cost Price from SP and Loss%",
    category: "Profit and Loss",
    formula: "CP = (SP × 100) / (100 − Loss%)",
    example: "SP = 450, Loss = 10% → CP = 450×100/90 = 500"
  },
  {
    title: "Marked Price and Discount",
    category: "Profit and Loss",
    formula: "SP = MP × (100 − Discount%) / 100",
    example: "MP = 1000, Discount = 15% → SP = 1000×85/100 = 850"
  },
  {
    title: "Discount Percentage",
    category: "Profit and Loss",
    formula: "Discount% = [(MP − SP) / MP] × 100",
    example: "MP = 800, SP = 680 → Discount = 120 → Discount% = (120/800)×100 = 15%"
  },

  // ---------- Time and Work ----------
  {
    title: "Two People Working Together",
    category: "Time and Work",
    formula: "Together time = (x × y) / (x + y)",
    example: "A = 10 days, B = 15 days → Together = 150/25 = 6 days"
  },
  {
    title: "One-Day Work",
    category: "Time and Work",
    formula: "One-day work = 1 / Number of days",
    example: "A takes 8 days → one-day work = 1/8"
  },
  {
    title: "B’s Time from Together and A",
    category: "Time and Work",
    formula: "1/B = 1/(Together) − 1/A",
    example: "Together = 6 days, A = 10 days → 1/B = 1/6 − 1/10 = 1/15 → B = 15 days"
  },
  {
    title: "Work Done in Given Days",
    category: "Time and Work",
    formula: "Work done in d days = d × (One-day work)",
    example: "If one-day work = 1/12, in 5 days work done = 5/12"
  },
  {
    title: "Men-Days-Work Relation",
    category: "Time and Work",
    formula: "M1 × D1 × W2 = M2 × D2 × W1",
    example: "10 men do a work in 15 days; 15 men will do it in (10×15)/15 = 10 days"
  },

  // ---------- Speed and Distance ----------
  {
    title: "Speed Formula",
    category: "Speed and Distance",
    formula: "Speed = Distance / Time",
    example: "300 km in 5 hours → Speed = 300/5 = 60 km/h"
  },
  {
    title: "Distance Formula",
    category: "Speed and Distance",
    formula: "Distance = Speed × Time",
    example: "40 km/h for 3 hours → Distance = 120 km"
  },
  {
    title: "Time Formula",
    category: "Speed and Distance",
    formula: "Time = Distance / Speed",
    example: "180 km at 60 km/h → Time = 180/60 = 3 hours"
  },
  {
    title: "km/h to m/s",
    category: "Speed and Distance",
    formula: "m/s = km/h × 5/18",
    example: "36 km/h = 36 × 5/18 = 10 m/s"
  },
  {
    title: "m/s to km/h",
    category: "Speed and Distance",
    formula: "km/h = m/s × 18/5",
    example: "10 m/s = 10 × 18/5 = 36 km/h"
  },
  {
    title: "Average Speed for Two Equal Distances",
    category: "Speed and Distance",
    formula: "Average speed = 2xy / (x + y)",
    example: "Go at 40 km/h, return at 60 km/h → Avg = 2×40×60/(40+60) = 48 km/h"
  },

  // ---------- Average ----------
  {
    title: "Average",
    category: "Average",
    formula: "Average = Sum of values / Number of values",
    example: "10, 20, 30 → (10+20+30)/3 = 20"
  },
  {
    title: "Average of First n Natural Numbers",
    category: "Average",
    formula: "Average = (n + 1) / 2",
    example: "First 5 natural numbers → (5+1)/2 = 3"
  },
  {
    title: "Average of First n Even Numbers",
    category: "Average",
    formula: "Average = n + 1",
    example: "First 4 even numbers: 2,4,6,8 → average = 4+1 = 5"
  },
  {
    title: "Average of First n Odd Numbers",
    category: "Average",
    formula: "Average = n",
    example: "First 5 odd numbers: 1,3,5,7,9 → average = 5"
  },
  {
    title: "New Average After Adding a Value",
    category: "Average",
    formula: "New average = (Old sum + new value) / (Old count + 1)",
    example: "Avg of 4 numbers is 10 → sum = 40; add 20 → new avg = (40+20)/5 = 12"
  },

  // ---------- Number System ----------
  {
    title: "Divisibility by 2",
    category: "Number System",
    formula: "Last digit is even (0,2,4,6,8)",
    example: "246 ends with 6 → divisible by 2"
  },
  {
    title: "Divisibility by 3",
    category: "Number System",
    formula: "Sum of digits divisible by 3",
    example: "123 → 1+2+3=6 → divisible by 3"
  },
  {
    title: "Divisibility by 4",
    category: "Number System",
    formula: "Last two digits form a number divisible by 4",
    example: "312 → last two digits 12 → divisible by 4"
  },
  {
    title: "Divisibility by 5",
    category: "Number System",
    formula: "Last digit is 0 or 5",
    example: "245 ends with 5 → divisible by 5"
  },
  {
    title: "Divisibility by 9",
    category: "Number System",
    formula: "Sum of digits divisible by 9",
    example: "324 → 3+2+4=9 → divisible by 9"
  },
  {
    title: "Divisibility by 10",
    category: "Number System",
    formula: "Last digit is 0",
    example: "730 ends with 0 → divisible by 10"
  },
  {
    title: "Divisibility by 11",
    category: "Number System",
    formula: "Difference between sum of digits at odd and even places is 0 or multiple of 11",
    example: "121 → (1+1) − 2 = 0 → divisible by 11"
  },
  {
    title: "Sum of First n Natural Numbers",
    category: "Number System",
    formula: "Sum = n(n + 1) / 2",
    example: "First 10 natural numbers → 10×11/2 = 55"
  },
  {
    title: "Sum of Squares of First n Natural Numbers",
    category: "Number System",
    formula: "Sum = n(n + 1)(2n + 1) / 6",
    example: "n = 3 → 1²+2²+3² = 3×4×7/6 = 14"
  },
  {
    title: "Sum of Cubes of First n Natural Numbers",
    category: "Number System",
    formula: "Sum = [n(n + 1) / 2]²",
    example: "n = 3 → (1+2+3)² = 6² = 36"
  },

  // ---------- Simple Interest ----------
  {
    title: "Simple Interest",
    category: "Simple Interest",
    formula: "SI = (P × R × T) / 100",
    example: "₹2000 at 5% for 3 years → SI = (2000×5×3)/100 = 300"
  },
  {
    title: "Amount in Simple Interest",
    category: "Simple Interest",
    formula: "A = P + SI",
    example: "P = 2000, SI = 300 → A = 2300"
  },
  {
    title: "Principal from SI, R, T",
    category: "Simple Interest",
    formula: "P = (SI × 100) / (R × T)",
    example: "SI = 300, R = 5, T = 3 → P = (300×100)/(5×3) = 2000"
  },
  {
    title: "Rate from SI, P, T",
    category: "Simple Interest",
    formula: "R = (SI × 100) / (P × T)",
    example: "SI = 300, P = 2000, T = 3 → R = (300×100)/(2000×3) = 5%"
  },
  {
    title: "Time from SI, P, R",
    category: "Simple Interest",
    formula: "T = (SI × 100) / (P × R)",
    example: "SI = 300, P = 2000, R = 5 → T = (300×100)/(2000×5) = 3 years"
  },

  // ---------- Compound Interest ----------
  {
    title: "Compound Interest Amount",
    category: "Compound Interest",
    formula: "A = P(1 + R/100)ⁿ",
    example: "₹1000 at 10% for 2 years → A = 1000(1.1)² = 1210"
  },
  {
    title: "Compound Interest",
    category: "Compound Interest",
    formula: "CI = A − P",
    example: "A = 1210, P = 1000 → CI = 210"
  },
  {
    title: "CI for 2 Years Shortcut",
    category: "Compound Interest",
    formula: "CI for 2 years = P[(1 + R/100)² − 1]",
    example: "P = 1000, R = 10 → CI = 1000[(1.1)² − 1] = 210"
  },

  // ---------- Ratio and Proportion ----------
  {
    title: "Ratio Share",
    category: "Ratio and Proportion",
    formula: "Share = (Part / Total parts) × Total amount",
    example: "₹600 in 2:3 → larger share = (3/5)×600 = 360"
  },
  {
    title: "Combine Two Ratios",
    category: "Ratio and Proportion",
    formula: "If A:B = a:b and B:C = c:d, then A:B:C = ac : bc : bd",
    example: "A:B = 2:3, B:C = 3:4 → A:B:C = 2×3 : 3×3 : 3×4 = 6:9:12"
  },
  {
    title: "Proportion Cross-Multiplication",
    category: "Ratio and Proportion",
    formula: "If a/b = c/d, then ad = bc",
    example: "2/3 = 4/6 → 2×6 = 3×4 = 12"
  },

  // ---------- Permutation and Combination ----------
  {
    title: "Permutations of n Distinct Items",
    category: "Permutation and Combination",
    formula: "Number of arrangements = n!",
    example: "3 books → 3! = 6 ways"
  },
  {
    title: "Permutations of n Items Taking r at a Time",
    category: "Permutation and Combination",
    formula: "nPr = n! / (n − r)!",
    example: "5P2 = 5! / 3! = (5×4) = 20"
  },
  {
    title: "Combinations of n Items Taking r at a Time",
    category: "Permutation and Combination",
    formula: "nCr = n! / [r! (n − r)!]",
    example: "5C2 = 5! / (2! 3!) = 10"
  },
  {
    title: "Relation Between nPr and nCr",
    category: "Permutation and Combination",
    formula: "nPr = nCr × r!",
    example: "5P2 = 5C2 × 2! = 10 × 2 = 20"
  },

  // ---------- Probability ----------
  {
    title: "Basic Probability",
    category: "Probability",
    formula: "P(E) = Favorable outcomes / Total outcomes",
    example: "3 red, 2 blue → P(red) = 3/5"
  },
  {
    title: "Probability of Complement",
    category: "Probability",
    formula: "P(not E) = 1 − P(E)",
    example: "P(red) = 3/5 → P(not red) = 1 − 3/5 = 2/5"
  },
  {
    title: "Probability of Two Independent Events",
    category: "Probability",
    formula: "P(A and B) = P(A) × P(B)",
    example: "P(A) = 1/2, P(B) = 1/3 → P(A and B) = 1/6"
  },
  {
    title: "Probability of Either of Two Mutually Exclusive Events",
    category: "Probability",
    formula: "P(A or B) = P(A) + P(B)",
    example: "P(A) = 1/4, P(B) = 1/4 → P(A or B) = 1/2"
  },

  // ---------- Additional Useful Shortcuts ----------
  {
    title: "LCM and HCF Relation",
    category: "Number System",
    formula: "LCM × HCF = Product of two numbers",
    example: "Numbers 12 and 18 → HCF = 6, LCM = 36 → 6×36 = 12×18 = 216"
  },
  {
    title: "Sum of Interior Angles of a Polygon",
    category: "Geometry",
    formula: "Sum = (n − 2) × 180°",
    example: "Hexagon (n = 6) → Sum = (6−2)×180 = 720°"
  },
  {
    title: "Area of Triangle",
    category: "Geometry",
    formula: "Area = (1/2) × base × height",
    example: "Base = 10, height = 6 → Area = 30 sq units"
  },
  {
    title: "Area of Rectangle",
    category: "Geometry",
    formula: "Area = length × breadth",
    example: "Length = 8, breadth = 5 → Area = 40 sq units"
  },
  {
    title: "Perimeter of Rectangle",
    category: "Geometry",
    formula: "Perimeter = 2 × (length + breadth)",
    example: "Length = 8, breadth = 5 → Perimeter = 26 units"
  },
  {
    title: "Area of Square",
    category: "Geometry",
    formula: "Area = side²",
    example: "Side = 7 → Area = 49 sq units"
  },
  {
    title: "Perimeter of Square",
    category: "Geometry",
    formula: "Perimeter = 4 × side",
    example: "Side = 7 → Perimeter = 28 units"
  },
  {
    title: "Area of Circle",
    category: "Geometry",
    formula: "Area = πr²",
    example: "r = 7 → Area = π×49 ≈ 154 sq units"
  },
  {
    title: "Circumference of Circle",
    category: "Geometry",
    formula: "Circumference = 2πr",
    example: "r = 7 → Circumference = 2π×7 ≈ 44 units"
  },
  {
    title: "Volume of Cuboid",
    category: "Geometry",
    formula: "Volume = length × breadth × height",
    example: "l=4, b=3, h=5 → Volume = 60 cubic units"
  },
  {
    title: "Volume of Cube",
    category: "Geometry",
    formula: "Volume = side³",
    example: "Side = 5 → Volume = 125 cubic units"
  },
  {
    title: "Surface Area of Cube",
    category: "Geometry",
    formula: "Surface area = 6 × side²",
    example: "Side = 5 → Surface area = 150 sq units"
  }
];

// =========================
// QUIZ DATA
// =========================
const quizQuestions = [
  {
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: "50"
  },
  {
    question: "What is the formula for distance?",
    options: [
      "Speed / Time",
      "Speed × Time",
      "Time / Speed",
      "Speed + Time"
    ],
    answer: "Speed × Time"
  },
  {
    question: "What is the average of 10, 20 and 30?",
    options: ["10", "15", "20", "30"],
    answer: "20"
  },
  {
    question: "If CP = 400 and SP = 500, what is profit%?",
    options: ["10%", "20%", "25%", "30%"],
    answer: "25%"
  },
  {
    question: "A takes 10 days, B takes 15 days. Together they finish in?",
    options: ["5 days", "6 days", "8 days", "12 days"],
    answer: "6 days"
  },
  {
    question: "What is the formula for simple interest?",
    options: [
      "P × R × T",
      "(P × R × T) / 100",
      "P + R + T",
      "P × (1 + R/100)ⁿ"
    ],
    answer: "(P × R × T) / 100"
  },
  {
    question: "What is the area of a rectangle with length 8 and breadth 5?",
    options: ["13", "26", "40", "45"],
    answer: "40"
  },
  {
    question: "What is 5C2?",
    options: ["5", "10", "20", "60"],
    answer: "10"
  }
];

// =========================
// DOM ELEMENTS
// =========================
const resultContainer = document.getElementById("resultContainer");
const shortcutsContainer = document.getElementById("shortcutsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const clearBtn = document.getElementById("clearBtn");

// =========================
// DISPLAY FUNCTIONS
// =========================

function displayResults(data) {
  resultContainer.innerHTML = "";

  if (data.length === 0) {
    resultContainer.innerHTML = "<p>No matching questions found. Try another search.</p>";
    return;
  }

  data.forEach(item => {
    const card = document.createElement("article");
    card.className = "result-card";

    const explanationHTML = item.explanation
      .map(step => `<li>${step}</li>`)
      .join("");

    card.innerHTML = `
      <span class="category">${item.category}</span>
      <h3>${item.question}</h3>

      <div class="answer">Answer: ${item.answer}</div>

      <div class="shortcut">
        <strong>Shortcut Rule:</strong> ${item.shortcut}
      </div>

      <div class="explanation">
        <strong>Explanation:</strong>
        <ol>${explanationHTML}</ol>
      </div>

      <div class="example">
        <strong>Solved Example:</strong> ${item.example}
      </div>
    `;

    resultContainer.appendChild(card);
  });
}

function displayShortcuts(data) {
  shortcutsContainer.innerHTML = "";

  if (data.length === 0) {
    shortcutsContainer.innerHTML = "<p>No shortcut rules found.</p>";
    return;
  }

  data.forEach(item => {
    const card = document.createElement("article");
    card.className = "shortcut-card";

    card.innerHTML = `
      <span class="category">${item.category}</span>
      <h3>${item.title}</h3>

      <div class="shortcut">
        <strong>Formula / Rule:</strong> ${item.formula}
      </div>

      <div class="example">
        <strong>Example:</strong> ${item.example}
      </div>
    `;

    shortcutsContainer.appendChild(card);
  });
}

// =========================
// FILTER & SEARCH LOGIC
// =========================

function filterAndSearch() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  // Filter questions
  const filteredQuestions = questionsData.filter(item => {
    const searchableText = `
      ${item.question}
      ${item.category}
      ${item.answer}
      ${item.shortcut}
      ${item.explanation.join(" ")}
      ${item.example}
    `.toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Filter shortcuts
  const filteredShortcuts = shortcutsData.filter(item => {
    const searchableText = `
      ${item.title}
      ${item.category}
      ${item.formula}
      ${item.example}
    `.toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // If there is some search text, show both results and shortcuts
  // If no search text, still show all shortcuts but no question results
  if (searchText === "" && selectedCategory === "All") {
    displayResults([]);
    displayShortcuts(shortcutsData);
  } else {
    displayResults(filteredQuestions);
    displayShortcuts(filteredShortcuts);
  }
}

searchInput.addEventListener("input", filterAndSearch);
categoryFilter.addEventListener("change", filterAndSearch);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "All";
  filterAndSearch();
});

// =========================
// QUIZ LOGIC
// =========================
let currentQuestionIndex = 0;
let userScore = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function loadQuizQuestion() {
  const current = quizQuestions[currentQuestionIndex];

  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";
  scoreElement.textContent = `Score: ${userScore}/${quizQuestions.length}`;

  current.options.forEach(option => {
    const button = document.createElement("button");

    button.textContent = option;
    button.className = "option";

    button.addEventListener("click", () => {
      if (option === current.answer) {
        userScore++;
        scoreElement.textContent = "Correct answer!";
      } else {
        scoreElement.textContent = `Wrong answer. Correct answer: ${current.answer}`;
      }

      document.querySelectorAll(".option").forEach(btn => {
        btn.disabled = true;
      });
    });

    optionsElement.appendChild(button);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex >= quizQuestions.length) {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";
    scoreElement.textContent = `Final Score: ${userScore}/${quizQuestions.length}`;
    return;
  }

  loadQuizQuestion();
});

// Initial load
filterAndSearch();
loadQuizQuestion();
const quizData = [
  // ===== REGULAR EXPRESSIONS / AUTOMATA =====
  {
    contextType: "none",
    context: "",
    q: "Which language is not regular?",
    options: [
      "{ w ∈ {0,1}* | w ends with 01 }",
      "{ w ∈ {a,b}* | number of a's is even }",
      "{ a^n b^n | n ≥ 0 }",
      "{ w ∈ {0,1}* | w contains substring 101 }",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "If two regular expressions describe the same language, then:",
    options: [
      "They must be syntactically identical",
      "They must be equivalent",
      "They must generate the same DFA states",
      "They must use the same operators",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which RE describes the same language as (a*)* ?",
    options: ["ε", "(aa)*", "a+", "a*"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which pair of regular expressions are not equivalent?",
    options: [
      "(ab)* and (ba)*",
      "a* and (aa)*",
      "(ab)* and a(ba)* | ε",
      "(a*)* and a*",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Given two regular expressions r and s, which of the following is always true?",
    options: ["rs = sr", "r|s = s|r", "r* s* = (r | s)*", "r* s* = r s*"],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Given three regular expressions r, s, t, which of the following is valid?",
    options: [
      "(rs)t = r(st)",
      "(r|s)t = r | (st)",
      "(r|s)t = r (s|t)",
      "rst = tsr",
    ],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Regular expression (s|t)r is equal to:",
    options: ["st | r", "sr | rt", "s(t|r)", "tr | sr"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which feature makes an NFA different from a DFA?",
    options: [
      "It can recognize more languages",
      "It allows ε-transitions",
      "It always has fewer states",
      "It cannot be converted to a DFA",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which statement is true?",
    options: [
      "Not every NFA has an equivalent DFA",
      "DFA is a special case of NFA",
      "NFAs accept fewer languages than DFAs",
      "NFAs are more powerful than DFAs",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which conversion is always possible?",
    options: ["DFA → NFA", "NFA → DFA", "RE → DFA", "All of the above"],
    answer: 3,
    explanation: "",
  },

  // ===== CHOMSKY HIERARCHY / CFG =====
  {
    contextType: "none",
    context: "",
    q: "Which statement is true?",
    options: [
      "Every context-free language is regular",
      "Context-sensitive languages are undecidable",
      "Type-0 languages are always finite",
      "Every regular language is context-free",
    ],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which grammar type allows length-decreasing productions?",
    options: ["Type-3 only", "Type-2 only", "Type-1 only", "Type-0"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which language is CFG but not regular?",
    options: [
      "{ a^n b^n | n ≥ 0 }",
      "{ a^n | n ≥ 0 }",
      "{ (ab)^n | n ≥ 0 }",
      "{ ε }",
    ],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which language is context sensitive but not context free?",
    options: [
      "{ a^n b^n | n ≥ 0 }",
      "{ a^n b^n c^n | n ≥ 0 }",
      "{ (ab)^n | n ≥ 0 }",
      "{ a^n | n ≥ 0 }",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which grammar type corresponds exactly to Turing Machines?",
    options: ["Type-3", "Type-2", "Type-1", "Type-0"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which generate the language of matching parentheses?",
    options: ["S → (S) | ε", "S → (S( | ε", "S → ()S | ε", "S → SS | (S) | ε"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "How many parse trees does ()() have for grammar S → SS | (S) | ε ?",
    options: ["1", "2", "3", "0"],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "How many parse trees does ()() have for grammar S → (S)S | ε ?",
    options: ["1", "2", "3", "0"],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which of the following define L = { a^n b^m | n ≥ m ≥ 0 }?",
    options: [
      "S → aSb | aaSb | ε",
      "S → aS | bS | ε",
      "S → aSb | ε",
      "S → aSb | aS | ε",
    ],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which of the following generate the language { a^n b^n | n ≥ 0 }?",
    options: ["S → aSb", "S → aS | bS | ε", "S → aSb | ε", "S → aSb | ab"],
    answer: 2,
    explanation: "",
  },

  // ===== AMBIGUITY / PARSE TREES =====
  {
    contextType: "none",
    context: "",
    q: "How many parse trees does ()() have for grammar S → SS | (S) | ε ?",
    options: ["1", "2", "3", "0", "infinite"],
    answer: 4,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "How many parse trees does ()() have for grammar S → (S)S | ε ?",
    options: ["1", "2", "3", "0", "infinite"],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which grammar is ambiguous?",
    options: ["S → aSb | ε", "S → aS | b", "S → abS | ε", "S → SS | a"],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which string demonstrates ambiguity in grammar S → SS | a ?",
    options: ["a", "aa", "aaa", "all above"],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which property is NOT sufficient to prove ambiguity?",
    options: [
      "Two distinct parse trees",
      "Two different leftmost derivations",
      "Two different rightmost derivations",
      "Two different derivations",
      "None of the above",
    ],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "If a grammar is ambiguous, then:",
    options: [
      "All equivalent grammars are ambiguous",
      "No equivalent unambiguous grammar exists",
      "There may exist an equivalent unambiguous grammar",
      "The language itself is ambiguous",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Give the corresponding regular grammar for S → SS | a",
    options: [
      "S → aS | a",
      "S → aS | epsilon",
      "S → aaS | a",
      "S → aaS | epsilon",
    ],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which of the following CFGs can be transformed into a regular grammar?",
    options: [
      "S → aSb | ε",
      "S → aaS | aa",
      "S → aSa | bSb | a | b",
      "S → SaSb | a",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Given a parse tree of string s, s can be obtained from the tree by:",
    options: [
      "Preorder traversal",
      "Postorder traversal",
      "Inorder traversal",
      "Concatenating leaf nodes left to right",
    ],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "image",
    context: "trees/tree.png",
    q: "Given the parse tree shown, which is the yield of the parse tree?",
    options: ["abc", "aSSbc", "SaSbc", "aSbSc"],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "image",
    context: "trees/tree.png",
    q: "Given the parse tree shown, which may not be in the corresponding grammar?",
    options: ["S → aS", "S → bc", "S → aSbc", "More than one answer"],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "The accept action happens when",
    options: [
      "The stack is empty",
      "The input is empty regardless of stack",
      "ACTION[state, $] = accept",
      "GOTO[state, S] = accept",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "A shift/reduce conflict occurs when",
    options: [
      "Two reductions are possible",
      "Both shift and reduce are possible on same (state, lookahead)",
      "No action is defined",
      "GOTO leads to multiple states",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "In an item like A → α · β, the dot indicates",
    options: [
      "The end of input",
      "How many symbols of the RHS have been seen",
      "The lookahead position",
      "The next state number",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "The closure operation on a set of items mainly adds",
    options: [
      "Items for productions whose LHS appears after the dot",
      "Only completed items",
      "Only items with $ lookahead",
      "Items for terminals only",
    ],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "The next four questions are based on the following grammar:\n\n(0) E' → E\n(1) E  → E + T\n(2) E  → T\n(3) T  → id",
    options: [
      "{ T → id• }",
      "{ T → id•, E → T• }",
      "{ E → id• }",
      "{ E → T•, T → id•, E' → E• }",
    ],
    answer: 0,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Suppose a state contains the item E → E• + T. What is GOTO(thatState,+)?",
    options: [
      "{ E → E + •T }",
      "{ E → E + •T, T → •id }",
      "{ T → id• }",
      "{ E → •T, T → •id }",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which state is a reduce state?",
    options: [
      "{ T → •id }",
      "{ E' → E•, E → E• + T }",
      "{ E → T• }",
      "{ E → E + •T, T → •id }",
      "more than one answer",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which item indicates the accept configuration?",
    options: ["E → E + T•", "E' → E•", "E → T•", "T → id•"],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "A shift-reduce conflict in LR(0) happens when:",
    options: [
      "A state has two completed items",
      "A state has both a completed item and a shift possibility",
      "A state has two shift entries",
      "Grammar is left recursive",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "In LR(0), a reduce action is entered:",
    options: [
      "For specific lookahead terminals",
      "For all terminals in FOLLOW",
      "For all terminals in grammar",
      "Only for $",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "In A3, In what order must you run the build commands?",
    options: [
      "javac → java JLex.Main → java java_cup.Main",
      "java java_cup.Main → java JLex.Main → javac",
      "java JLex.Main → java java_cup.Main → javac",
      "javac → java A3User → java JLex.Main",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "in A3,  Why can't you compile calc.lex.java immediately after running JLex?",
    options: [
      "JLex has a bug that produces broken Java",
      "calc.lex.java references CalcSymbol, which hasn't been generated yet",
      "You need to rename it to A3Scanner first",
      "The JDK version is incompatible",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Is BEGIN END a valid Block in the TINY grammar?",
    options: [
      "Yes, empty blocks are always allowed",
      "No, because\n\nBlock → BEGIN Statement+ END\n\nrequires at least one statement",
      "Yes, if it's inside a method",
      "No, because BEGIN must be followed by a semicolon",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Which identifier definition is correct for TINY?",
    options: [
      "[a-zA-Z_][a-zA-Z0-9_]* — letters, digits, underscores",
      "[a-zA-Z][a-zA-Z0-9]* — letters and digits only, no underscore",
      "[0-9][a-zA-Z]* — starts with a digit",
      "[a-z][a-zA-Z0-9_]* — lowercase start only",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "When renaming calc to A3, which of the following changes is NOT required?",
    options: [
      "Renaming the file calc.lex to A3.lex",
      "Changing CalcScanner to A3Scanner inside the lex file",
      "Changing CalcSymbol to A3Symbol inside the lex file",
      "Changing the JDK installation folder name",
    ],
    answer: 3,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "What should happen when the scanner encounters an unknown symbol like @?",
    options: [
      "Silently discard it with {}",
      "Print an error message to stdout and continue",
      "Return new Symbol(A3Symbol.error) so the parser rejects the program",
      "Throw a Java exception immediately",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "Why do we need to  remove the RESULT assignment in most rules of A3.cup ?",
    options: [
      "It makes the parser faster by skipping evaluation",
      "It changes the parser from evaluating expressions to only recognizing syntax",
      "It removes the need for terminal declarations",
      "It prevents the parser from building a parse tree",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "What is wrong with this rule in A3.cup?\n\nassignStmt ::= ID ASSIGN expr",
    options: [
      "ID should be lowercase",
      "ASSIGN is not a valid terminal name",
      "The rule is missing a semicolon at the end",
      "expr must be wrapped in parentheses",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "LR parsers are classified as",
    options: [
      "Top-down parsers using leftmost derivation",
      "Bottom-up parsers using rightmost derivation in reverse",
      "Top-down parsers using rightmost derivation",
      "Bottom-up parsers using leftmost derivation",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "The stack of an LR parser stores",
    options: [
      "Only terminals",
      "Only nonterminals",
      "States (and usually grammar symbols interleaved)",
      "Only input symbols",
    ],
    answer: 2,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "In an LR parsing table, the ACTION part is indexed by",
    options: [
      "(state, nonterminal)",
      "(state, terminal)",
      "(nonterminal, terminal)",
      "(terminal, state)",
    ],
    answer: 1,
    explanation: "",
  },
  {
    contextType: "none",
    context: "",
    q: "In an LR parsing table, the GOTO part is indexed by",
    options: [
      "(state, terminal)",
      "(state, nonterminal)",
      "(nonterminal, terminal)",
      "(nonterminal, state)",
    ],
    answer: 1,
    explanation: "",
  },
];

const LAST_TWELVE_START = Math.max(0, quizData.length - 12);
const ALL_QUESTIONS_LABEL = "All Questions";

function makeSectionRange(start, end) {
  const normalizedStart = Math.max(0, start);
  const normalizedEnd = Math.min(quizData.length - 1, end);
  const section = [];

  for (let idx = normalizedStart; idx <= normalizedEnd; idx += 1) {
    section.push(idx);
  }

  return section;
}

const QUIZ_SECTIONS = [
  {
    id: "all",
    label: ALL_QUESTIONS_LABEL,
    description: "All topics combined",
    questionIndexes: makeSectionRange(0, quizData.length - 1),
  },
  {
    id: "regex",
    label: "RE and FSM",
    description: "Questions 1 - 10",
    questionIndexes: makeSectionRange(0, 9),
  },
  {
    id: "cfg",
    label: "Grammar",
    description: "Questions 11 - 20",
    questionIndexes: makeSectionRange(10, 19),
  },
  {
    id: "ambiguity",
    label: "Ambiguous Grammar",
    description: "Questions 21 - 31",
    questionIndexes: makeSectionRange(20, 30),
  },
  {
    id: "lr",
    label: "LR(0)",
    description: "Questions 32 - 41",
    questionIndexes: makeSectionRange(31, 40),
  },
  {
    id: "a3",
    label: "A3 and LR(0)",
    description: `Last ${quizData.length - LAST_TWELVE_START} questions`,
    questionIndexes: makeSectionRange(LAST_TWELVE_START, quizData.length - 1),
  },
];

const SECTION_BY_ID = Object.fromEntries(
  QUIZ_SECTIONS.map((section) => [section.id, section]),
);

const state = {
  currentIndex: 0,
  order: [],
  activePool: [],
  activeSections: ["all"],
  activeSetLabel: ALL_QUESTIONS_LABEL,
  selectedSectionIds: [],
  questionStates: [],
  score: 0,
  correct: 0,
  wrong: 0,
  selectedIndex: null,
};

const els = {
  setupScreen: document.getElementById("setup-screen"),
  quizSession: document.getElementById("quiz-session"),
  quizSetList: document.getElementById("quiz-set-list"),
  setupError: document.getElementById("setup-error"),
  setupShuffle: document.getElementById("shuffle-toggle-setup"),
  startSelectedBtn: document.getElementById("start-selected-btn"),
  clearSelectionBtn: document.getElementById("clear-selection-btn"),
  changeSetBtn: document.getElementById("change-set-btn"),
  backToPickerBtn: document.getElementById("back-to-picker-btn"),
  setBadge: document.getElementById("set-badge"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  explanation: document.getElementById("explanation"),
  nextBtn: document.getElementById("next-btn"),
  prevBtn: document.getElementById("prev-btn"),
  submitBtn: document.getElementById("submit-btn"),
  scorePercent: document.getElementById("score-percent"),
  skipBtn: document.getElementById("skip-btn"),
  progressBar: document.getElementById("progress"),
  contextArea: document.getElementById("context-area"),
  quizScreen: document.getElementById("quiz-screen"),
  resultsScreen: document.getElementById("results-screen"),
  finalScore: document.getElementById("final-score"),
  finalMsg: document.getElementById("final-msg"),
  questionCounter: document.getElementById("question-counter"),
  correctCount: document.getElementById("correct-count"),
  wrongCount: document.getElementById("wrong-count"),
  retakeBtn: document.getElementById("retake-btn"),
  shuffleToggle: document.getElementById("shuffle-toggle"),
};

function labelFor(index) {
  return String.fromCharCode(65 + index);
}

function isShuffleEnabled() {
  return els.quizSession.classList.contains("hidden")
    ? els.setupShuffle.checked
    : els.shuffleToggle.checked;
}

function activeQuestionCount() {
  return state.order.length;
}

function getScorePercentage() {
  const total = state.correct + state.wrong;
  if (total <= 0) {
    return 0;
  }

  return Math.round((state.correct / total) * 100);
}

function updateScoreDisplay() {
  if (els.scorePercent) {
    els.scorePercent.textContent = `${getScorePercentage(activeQuestionCount())}%`;
  }
}

function buildSectionSelector() {
  if (!els.quizSetList) {
    return;
  }

  els.quizSetList.replaceChildren();

  QUIZ_SECTIONS.forEach((section) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "section-card set-card";
    card.dataset.sectionId = section.id;
    card.setAttribute("aria-pressed", "false");

    const text = document.createElement("div");
    text.className = "section-info";
    text.innerHTML = `
      <p class="section-title">${section.label}</p>
      <p class="section-count">${section.description}</p>
    `;

    const check = document.createElement("span");
    check.className = "section-check";
    check.setAttribute("aria-hidden", "true");

    card.appendChild(text);
    card.appendChild(check);
    card.addEventListener("click", () => toggleSectionSelection(section.id));
    els.quizSetList.appendChild(card);
  });

  updateSectionSelectionUI();
}

function updateSectionSelectionUI() {
  const selectedSet = new Set(state.selectedSectionIds);

  if (els.quizSetList) {
    Array.from(els.quizSetList.children).forEach((card) => {
      const sectionId = card.dataset.sectionId;
      const isSelected = selectedSet.has(sectionId);
      card.classList.toggle("selected", isSelected);
      card.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });
  }

  if (els.startSelectedBtn) {
    const count = state.selectedSectionIds.length;
    els.startSelectedBtn.disabled = count === 0;
    if (count === 0) {
      els.startSelectedBtn.textContent = "Start Selected Sets";
    } else if (count === 1) {
      els.startSelectedBtn.textContent = "Start 1 Set";
    } else {
      els.startSelectedBtn.textContent = `Start ${count} Sets`;
    }
  }

  if (els.clearSelectionBtn) {
    els.clearSelectionBtn.classList.toggle(
      "hidden",
      state.selectedSectionIds.length === 0,
    );
  }
}

function clearSectionSelection() {
  state.selectedSectionIds = [];
  updateSectionSelectionUI();
}

function toggleSectionSelection(sectionId) {
  const selected = new Set(state.selectedSectionIds);
  if (selected.has(sectionId)) {
    selected.delete(sectionId);
  } else {
    selected.add(sectionId);
  }

  state.selectedSectionIds = Array.from(selected);
  updateSectionSelectionUI();
}

function startSelectedSet() {
  if (state.selectedSectionIds.length === 0) {
    els.setupError.textContent = "Pick at least one set to continue.";
    return;
  }

  const selection = getSectionSelectionFromIds(state.selectedSectionIds);
  const started = setQuestionSet(
    selection.label,
    selection.indexes,
    selection.ids,
  );

  if (!started) {
    els.setupError.textContent = "Could not start that quiz set.";
  }
}

function getSectionSelectionFromIds(sectionIds) {
  const selectedSections = (sectionIds || [])
    .map((id) => SECTION_BY_ID[id] && id)
    .filter(Boolean);

  const normalizedSectionIds = Array.from(new Set(selectedSections));

  const orderedIndexes = [];
  const seen = new Set();
  const seenIds = [];

  normalizedSectionIds.forEach((sectionId) => {
    const section = SECTION_BY_ID[sectionId];
    if (!section) {
      return;
    }

    seenIds.push(sectionId);
    section.questionIndexes.forEach((index) => {
      if (!seen.has(index)) {
        seen.add(index);
        orderedIndexes.push(index);
      }
    });
  });

  return {
    ids: seenIds,
    indexes: orderedIndexes,
    label: seenIds
      .map((sectionId) => SECTION_BY_ID[sectionId]?.label || sectionId)
      .join(" + "),
  };
}

function setQuestionSet(sectionLabels, selectedIndexes, selectedIds = []) {
  if (selectedIndexes.length === 0) {
    return false;
  }

  state.activePool = selectedIndexes.slice();
  state.activeSections =
    selectedIds.length > 0 ? selectedIds : sectionLabels.split(" + ");
  const shuffleEnabled = isShuffleEnabled();
  els.setBadge.textContent = `Mode: ${sectionLabels}`;
  state.selectedIndex = null;
  state.currentIndex = 0;
  state.order = createOrder(state.activePool, shuffleEnabled);
  state.questionStates = new Array(state.order.length).fill(null);
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;

  updateScoreDisplay();
  els.correctCount.textContent = "0";
  els.wrongCount.textContent = "0";
  els.setupError.textContent = "";

  els.setupScreen.classList.add("hidden");
  els.quizSession.classList.remove("hidden");
  els.quizScreen.classList.remove("hidden");
  els.resultsScreen.classList.add("hidden");
  els.setupShuffle.checked = shuffleEnabled;
  els.shuffleToggle.checked = shuffleEnabled;

  renderQuestion();
  return true;
}

function showSetup() {
  els.setupScreen.classList.remove("hidden");
  els.quizSession.classList.add("hidden");
  if (els.shuffleToggle) {
    els.setupShuffle.checked = false;
  }
  if (els.shuffleToggle) {
    els.shuffleToggle.checked = false;
  }
  updateSectionSelectionUI();
  if (els.setupError) {
    els.setupError.textContent = "";
  }
}

function createOrder(seedIndexes, shuffle) {
  const order = seedIndexes.slice();

  if (!shuffle) {
    return order;
  }

  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  return order;
}

function currentQuestion() {
  return quizData[state.order[state.currentIndex]];
}

function clearNodes(node) {
  node.replaceChildren();
}

function renderContext(data) {
  clearNodes(els.contextArea);
  if (!data.context) {
    return;
  }

  if (data.contextType === "code") {
    const pre = document.createElement("pre");
    pre.className = "code-block";
    pre.textContent = data.context;
    els.contextArea.appendChild(pre);
    return;
  }

  if (data.contextType === "tree") {
    const pre = document.createElement("pre");
    pre.className = "code-block tree-block";
    const treeText = data.context.replace(/^\n/, "").replace(/\n\s*$/, "");
    pre.textContent = treeText;
    els.contextArea.appendChild(pre);
    return;
  }

  if (data.contextType === "image") {
    const img = document.createElement("img");
    img.src = data.context;
    img.alt = "Question figure";
    img.loading = "lazy";

    img.onerror = () => {
      const fallback = document.createElement("div");
      fallback.className = "context-box";
      fallback.textContent = `Image failed to load: ${data.context}`;
      els.contextArea.appendChild(fallback);
    };

    els.contextArea.appendChild(img);
    return;
  }

  const textCtx = document.createElement("div");
  textCtx.className = "context-box";
  textCtx.textContent = data.context;
  els.contextArea.appendChild(textCtx);
}

function renderQuestion() {
  const data = currentQuestion();
  state.selectedIndex = null;

  clearNodes(els.optionsContainer);
  els.explanation.classList.remove("show");
  els.explanation.textContent = "";
  els.submitBtn.disabled = true;
  els.submitBtn.style.display = "inline-flex";
  els.nextBtn.style.display = "none";
  els.skipBtn.style.display = "inline-flex";
  els.skipBtn.disabled = false;
  if (els.prevBtn) {
    els.prevBtn.disabled = state.currentIndex === 0;
  }

  const totalQuestions = activeQuestionCount();
  if (state.currentIndex === totalQuestions - 1) {
    els.nextBtn.textContent = "Finish Exam";
  } else {
    els.nextBtn.textContent = "Next Question";
  }

  const currentNumber = state.currentIndex + 1;
  const total = totalQuestions;
  const remaining = total - currentNumber;
  els.questionCounter.textContent = `Question ${currentNumber} of ${total} (${remaining} left)`;
  els.progressBar.style.width = `${(state.currentIndex / total) * 100}%`;

  renderContext(data);

  els.questionText.textContent = data.q;

  data.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = `${labelFor(index)}.`;
    button.appendChild(letter);
    button.append(" ", optionText);
    button.addEventListener("click", () => selectOption(index));
    els.optionsContainer.appendChild(button);
  });

  const options = Array.from(els.optionsContainer.children);
  const savedState = state.questionStates[state.currentIndex];

  if (!savedState) {
    updateScoreDisplay();
    return;
  }

  disableOptions();
  state.selectedIndex = savedState.selectedIndex;

  if (state.selectedIndex !== null && options[state.selectedIndex]) {
    options[state.selectedIndex].classList.add("selected");
  }

  if (savedState.isCorrect) {
    if (options[state.selectedIndex]) {
      options[state.selectedIndex].classList.add("correct");
    }
  } else {
    if (savedState.selectedIndex !== null && options[state.selectedIndex]) {
      options[state.selectedIndex].classList.add("wrong");
    }
    if (options[data.answer]) {
      options[data.answer].classList.add("correct");
    }
  }

  els.submitBtn.style.display = "none";
  els.nextBtn.style.display = "inline-flex";
  els.skipBtn.disabled = true;

  if (data.explanation) {
    if (savedState.skipped) {
      els.explanation.textContent = `Skipped. Correct: ${labelFor(
        data.answer,
      )}. ${data.explanation}`;
    } else {
      els.explanation.textContent = `Why: ${data.explanation}`;
    }
    els.explanation.classList.add("show");
  } else {
    if (savedState.skipped) {
      els.explanation.textContent = `Skipped. Correct: ${labelFor(data.answer)}.`;
      els.explanation.classList.add("show");
    } else {
      els.explanation.textContent = "";
      els.explanation.classList.remove("show");
    }
  }
}

function selectOption(index) {
  Array.from(els.optionsContainer.children).forEach((btn) => {
    btn.classList.remove("selected");
  });

  const selected = els.optionsContainer.children[index];
  if (selected) {
    selected.classList.add("selected");
    state.selectedIndex = index;
    els.submitBtn.disabled = false;
  }
}

function disableOptions() {
  Array.from(els.optionsContainer.children).forEach((button) => {
    button.disabled = true;
  });
}

function checkAnswer() {
  const savedState = state.questionStates[state.currentIndex];
  if (savedState?.answered) {
    return;
  }

  if (state.selectedIndex === null) {
    els.explanation.textContent = "Please select an answer first.";
    els.explanation.classList.add("show");
    return;
  }

  const data = currentQuestion();
  const options = Array.from(els.optionsContainer.children);
  disableOptions();
  els.submitBtn.style.display = "none";
  els.nextBtn.style.display = "inline-flex";
  els.skipBtn.disabled = true;
  const isCorrect = state.selectedIndex === data.answer;

  if (isCorrect) {
    state.score += 1;
    state.correct += 1;
    options[state.selectedIndex].classList.add("correct");
    els.correctCount.textContent = String(state.correct);
    updateScoreDisplay();
  } else {
    state.wrong += 1;
    options[state.selectedIndex].classList.add("wrong");
    options[data.answer].classList.add("correct");
    els.wrongCount.textContent = String(state.wrong);
    updateScoreDisplay();
  }

  state.questionStates[state.currentIndex] = {
    answered: true,
    selectedIndex: state.selectedIndex,
    isCorrect,
  };

  if (data.explanation) {
    els.explanation.textContent = `Why: ${data.explanation}`;
    els.explanation.classList.add("show");
  } else {
    els.explanation.textContent = "";
    els.explanation.classList.remove("show");
  }
}

function skipQuestion() {
  const savedState = state.questionStates[state.currentIndex];
  if (savedState?.answered) {
    return;
  }

  const data = currentQuestion();
  const options = Array.from(els.optionsContainer.children);
  disableOptions();
  els.submitBtn.style.display = "none";
  els.nextBtn.style.display = "inline-flex";
  els.skipBtn.disabled = true;

  if (state.selectedIndex !== null && options[state.selectedIndex]) {
    options[state.selectedIndex].classList.add("wrong");
  }
  if (options[data.answer]) {
    options[data.answer].classList.add("correct");
  }

  state.wrong += 1;
  state.questionStates[state.currentIndex] = {
    answered: true,
    selectedIndex: state.selectedIndex,
    isCorrect: false,
    skipped: true,
  };

  els.wrongCount.textContent = String(state.wrong);
  updateScoreDisplay();

  if (data.explanation) {
    els.explanation.textContent = `Skipped. Correct: ${labelFor(data.answer)}. ${
      data.explanation
    }`;
    els.explanation.classList.add("show");
  } else {
    els.explanation.textContent = `Skipped. Correct: ${labelFor(data.answer)}.`;
    els.explanation.classList.add("show");
  }
}

function handleKeyboardShortcuts(event) {
  if (els.quizSession.classList.contains("hidden")) {
    return;
  }

  const activeTag = event.target?.tagName?.toLowerCase();
  if (activeTag === "input" || activeTag === "textarea") {
    return;
  }

  if (/^[1-9]$/.test(event.key)) {
    const index = Number(event.key) - 1;
    if (index < els.optionsContainer.children.length) {
      selectOption(index);
      return;
    }
  }

  if (event.key !== "Enter") {
    if (event.key === "ArrowLeft" && els.prevBtn && !els.prevBtn.disabled) {
      goPrevQuestion();
      return;
    }
    return;
  }

  if (els.submitBtn.style.display !== "none" && !els.submitBtn.disabled) {
    checkAnswer();
    return;
  }

  if (els.nextBtn.style.display !== "none") {
    goNextQuestion();
  }
}

function goNextQuestion() {
  if (state.currentIndex < activeQuestionCount() - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function goPrevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function showResults() {
  els.quizScreen.classList.add("hidden");
  els.resultsScreen.classList.remove("hidden");
  const total = activeQuestionCount();
  const percent = Math.round((state.score / total) * 100);
  els.finalScore.textContent = `${percent}%`;
  els.finalMsg.textContent = `You got ${state.score} out of ${total} correct.`;
}

function restartQuiz() {
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.order = createOrder(state.activePool, isShuffleEnabled());
  state.questionStates = new Array(state.order.length).fill(null);
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  updateScoreDisplay();
  els.correctCount.textContent = "0";
  els.wrongCount.textContent = "0";
  els.quizScreen.classList.remove("hidden");
  els.resultsScreen.classList.add("hidden");
  els.quizScreen.scrollIntoView({ behavior: "smooth", block: "start" });
  renderQuestion();
}

function initQuiz() {
  buildSectionSelector();

  if (els.setupShuffle) {
    els.setupShuffle.checked = false;
  }

  els.shuffleToggle.addEventListener("change", () => {
    els.setupShuffle.checked = els.shuffleToggle.checked;
    restartQuiz();
  });

  els.changeSetBtn.addEventListener("click", showSetup);
  if (els.backToPickerBtn) {
    els.backToPickerBtn.addEventListener("click", showSetup);
  }
  els.submitBtn.addEventListener("click", checkAnswer);
  els.skipBtn.addEventListener("click", skipQuestion);
  els.startSelectedBtn?.addEventListener("click", startSelectedSet);
  els.clearSelectionBtn?.addEventListener("click", clearSectionSelection);
  els.nextBtn.addEventListener("click", goNextQuestion);
  els.prevBtn.addEventListener("click", goPrevQuestion);
  els.retakeBtn.addEventListener("click", restartQuiz);

  if (els.setupShuffle) {
    els.setupShuffle.addEventListener("change", () => {
      if (els.shuffleToggle) {
        els.shuffleToggle.checked = els.setupShuffle.checked;
      }
      if (!els.quizSession.classList.contains("hidden")) {
        restartQuiz();
      }
    });
  }

  document.addEventListener("keydown", handleKeyboardShortcuts);

  showSetup();
}

document.addEventListener("DOMContentLoaded", initQuiz);

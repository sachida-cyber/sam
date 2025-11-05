/*
  KnowledgeFlow Engine — script.js
  Edited DATA for: Sachida — Python (Beginner) Learning Root Map
  Users: ONLY edit the DATA constant below to customize topics.
*/

// ---------------------
// DATA: Sachida - Python Beginner Root Map
// ---------------------
const DATA = {
  name: "Sachida — Python (Beginner)",
  description: "A beginner-first, hands-on roadmap for learning Python — commands, examples, tools, and small projects to practice.",
  tags: ["Sachida","Python","Beginner","Roadmap"],
  children: [
    {
      name: "Getting Started",
      description: "Install Python, verify environment, run your first script.",
      children: [
        {
          name: "Install Python",
          description: "Download & install from python.org or use package manager. Command examples:\n• Windows: `choco install python` or installer from python.org\n• macOS: `brew install python@3.11`\n• Linux (Ubuntu): `sudo apt update && sudo apt install python3 python3-pip`",
          link: "https://www.python.org/downloads/",
          tags: ["install","env","python.org"]
        },
        {
          name: "Check Version",
          description: "Verify installation and PATH.\nCommand: `python --version` or `python3 --version`",
          tags: ["command","verify"]
        },
        {
          name: "Run Script",
          description: "Create `hello.py` with `print('Hello Sachida!')` then run:\n`python hello.py` or `python3 hello.py`",
          tags: ["run","script","hello-world"]
        },
        {
          name: "pip — Package Manager",
          description: "Install packages: `pip install requests`.\nShow installed packages: `pip list`.\nUpgrade pip: `python -m pip install --upgrade pip`",
          tags: ["pip","packages","installer"],
          link: "https://pip.pypa.io/"
        },
        {
          name: "Virtual Environments",
          description: "Create isolated envs: `python -m venv .venv`\nActivate Windows: `.\\.venv\\Scripts\\activate`  macOS/Linux: `source .venv/bin/activate`",
          tags: ["venv","env","isolation"],
          link: "https://docs.python.org/3/library/venv.html"
        }
      ]
    },

    {
      name: "Core Syntax & Basics",
      description: "Essential language building blocks with quick command/snippet examples.",
      children: [
        {
          name: "Variables & Types",
          description: "Numbers, strings, booleans. Example: `x = 10`, `name = 'Sachida'`.\nUseful commands: interactive REPL `python` then try `type(x)`.",
          tags: ["variables","types","repl"]
        },
        {
          name: "Strings",
          description: "Concatenation, f-strings: `f'Hello {name}'`. Useful methods: `.split()`, `.strip()`, `.format()`.",
          tags: ["strings","f-string"]
        },
        {
          name: "Numbers & Math",
          description: "Integers/float arithmetic: `//` (floor), `%` (mod), `**` (power). Use `math` module for functions.",
          link: "https://docs.python.org/3/library/math.html",
          tags: ["math","operators"]
        },
        {
          name: "Lists, Tuples, Sets",
          description: "Mutable lists `[]`, immutable tuples `()`, sets `{}`. Examples: `lst.append(1)`, `tup = (1,2)`.",
          tags: ["list","tuple","set"]
        },
        {
          name: "Dictionaries",
          description: "Key-value store: `d = {'a':1}`. Access `d['a']`, iterate `for k,v in d.items()`.",
          tags: ["dict","map"]
        },
        {
          name: "Control Flow",
          description: "If/elif/else, loops. Example:\n```\nif x>0:\n  print('pos')\nfor i in range(5):\n  print(i)\n```",
          tags: ["if","for","while"]
        },
        {
          name: "Functions",
          description: "Define with `def`. Example: `def add(a,b): return a+b`.\nUse docstrings and type hints `def f(x: int) -> int:`.",
          tags: ["functions","def","type-hints"]
        }
      ]
    },

    {
      name: "Developer Tools & Workflow",
      description: "Editor/IDE, REPLs, debugging, and common developer commands.",
      children: [
        {
          name: "Code Editor — VS Code",
          description: "Install VS Code and Python extension. Useful shortcuts and commands: `Ctrl+Shift+P` to open command palette, `Run Python File`.",
          link: "https://code.visualstudio.com/",
          tags: ["vscode","ide"]
        },
        {
          name: "Jupyter / Notebooks",
          description: "Interactive notebooks great for learning. Install: `pip install notebook` then `jupyter notebook` or `jupyter lab`.",
          link: "https://jupyter.org/",
          tags: ["jupyter","notebook","interactive"]
        },
        {
          name: "Debugging",
          description: "Use `pdb` or IDE built-in debuggers. Quick: `python -m pdb script.py`.\nVSCode provide breakpoints and variable inspection.",
          tags: ["debug","pdb"]
        },
        {
          name: "Formatting & Linting",
          description: "Formatter: `black .`  Linter: `flake8` or `pylint`.\nInstall example: `pip install black flake8`",
          tags: ["black","flake8","pylint","style"]
        },
        {
          name: "Version Control (Git)",
          description: "Track projects with git: `git init`, `git add .`, `git commit -m 'init'`.\nHost on GitHub for portfolio.",
          tags: ["git","github"]
        }
      ]
    },

    {
      name: "Standard Library & Built-ins",
      description: "Commonly used standard modules and small commands.",
      children: [
        { name: "os & sys", description: "`os.listdir('.')`, `sys.argv` to parse CLI args." , tags:["os","sys"]},
        { name: "pathlib", description: "Modern file paths: `from pathlib import Path`.", tags:["pathlib","files"]},
        { name: "json", description: "Serialize: `json.dump` / `json.load`.", tags:["json","io"] },
        { name: "datetime", description: "Work with dates: `from datetime import datetime`.", tags:["datetime"] }
      ]
    },

    {
      name: "Data Handling & Libraries",
      description: "Key packages for data tasks; common commands to install & quick examples.",
      children: [
        {
          name: "Requests (HTTP)",
          description: "HTTP requests: `pip install requests`. Example: `requests.get('https://api.github.com').json()`",
          link: "https://docs.python-requests.org/",
          tags: ["requests","http","api"]
        },
        {
          name: "Pandas (tabular data)",
          description: "Install: `pip install pandas`. Quick use: `df = pd.read_csv('data.csv')`.",
          link: "https://pandas.pydata.org/",
          tags: ["pandas","dataframe"]
        },
        {
          name: "NumPy (arrays)",
          description: "Install: `pip install numpy`. Example: `np.array([1,2,3])`.",
          link: "https://numpy.org/",
          tags: ["numpy","arrays"]
        },
        {
          name: "Matplotlib / Plotting",
          description: "Plot simple charts: `pip install matplotlib` then `plt.plot(x,y)`.",
          tags: ["plot","visualization"]
        }
      ]
    },

    {
      name: "Files, IO & CLI",
      description: "Common tasks for scripts and command-line tools.",
      children: [
        {
          name: "Read / Write Files",
          description: "Open and read: `with open('file.txt') as f: s = f.read()`.\nWrite: `with open('out.txt','w') as f: f.write('hi')`.",
          tags: ["fileio"]
        },
        {
          name: "Command-line Arguments",
          description: "Use `argparse` for CLI: `python script.py --input data.csv`.\nQuick example: `import argparse` and define flags.",
          tags: ["argparse","cli"]
        },
        {
          name: "Packaging & __main__",
          description: "Make scripts runnable: `if __name__ == '__main__': main()`.\nSimple packaging: `python setup.py` or modern `pyproject.toml` + `poetry`.",
          tags: ["packaging","main","entrypoint"]
        }
      ]
    },

    {
      name: "OOP & Intermediate Concepts",
      description: "Objects, classes, inheritance, and common design patterns for Python.",
      children: [
        { name: "Classes & Objects", description: "Define `class Dog: def __init__(self,name): self.name = name`.", tags:["class","oop"] },
        { name: "Exceptions", description: "Handle errors: `try/except/finally`. Create custom exceptions by subclassing `Exception`.", tags:["exceptions"] },
        { name: "Context Managers", description: "Use `with` or create `__enter__/__exit__` for safe resource handling.", tags:["context","with"] }
      ]
    },

    {
      name: "Testing & Quality",
      description: "Write tests and run them to enforce stability.",
      children: [
        { name: "unittest", description: "Built-in: `python -m unittest discover`", tags:["unittest","tests"] },
        { name: "pytest", description: "Popular third-party test runner: `pip install pytest` then `pytest`.", link: "https://docs.pytest.org/", tags:["pytest","testing"] },
        { name: "Type Checking", description: "Use `mypy` for static type checks: `pip install mypy`", tags:["mypy","typing"] }
      ]
    },

    {
      name: "Practical Projects (Beginner)",
      description: "Small project ideas to practice commands & flow.",
      children: [
        {
          name: "Todo CLI App",
          description: "Create a command-line todo manager using file storage or JSON. Commands: add, list, remove.",
          tags: ["project","cli"]
        },
        {
          name: "Web Scraper",
          description: "Use `requests` + `BeautifulSoup` to scrape a page and save data to CSV.\nInstall: `pip install beautifulsoup4`",
          tags: ["scraper","requests","bs4"]
        },
        {
          name: "Simple Web App (Flask)",
          description: "Build a tiny web server: `pip install flask`\nRun: `flask run` (or `python app.py`).",
          link: "https://flask.palletsprojects.com/",
          tags: ["flask","web"]
        },
        {
          name: "Data Analysis Notebook",
          description: "Use Jupyter + pandas to analyze a dataset (CSV) and plot charts.",
          tags: ["notebook","pandas","analysis"]
        }
      ]
    },

    {
      name: "Next Steps & Ecosystem",
      description: "Paths to grow after basics: web, data, automation, and machine learning.",
      children: [
        { name: "Web Development", description: "Django / Flask / FastAPI for building web backends.", tags:["django","fastapi"] },
        { name: "Data Science", description: "Learn pandas, NumPy, scikit-learn, matplotlib / seaborn.", tags:["ml","data-science"] },
        { name: "Automation & Scripting", description: "Automate daily tasks with scripts, cron jobs, and CLI tools.", tags:["automation","scripting"] },
        { name: "DevOps / Deployment", description: "Containerize apps with Docker, deploy to cloud or platforms like Heroku.", tags:["docker","deploy"] }
      ]
    },

    {
      name: "Cheat Sheet & Common Commands",
      description: "Quick reference: essential commands every beginner should memorize.",
      children: [
        { name: "Run file", description: "`python file.py` or `python3 file.py`", tags:["command"]},
        { name: "Install package", description: "`pip install <package>`", tags:["pip"]},
        { name: "Create venv", description: "`python -m venv .venv`", tags:["venv"]},
        { name: "Activate venv", description: "Windows: `.\\.venv\\Scripts\\activate`  macOS/Linux: `source .venv/bin/activate`", tags:["venv","activate"]},
        { name: "Freeze deps", description: "`pip freeze > requirements.txt`", tags:["requirements"]},
        { name: "Install from requirements", description: "`pip install -r requirements.txt`", tags:["pip","requirements"] }
      ]
    }
  ]
};

// ---------------------
// Config (unchanged)
// ---------------------
const CONFIG = {
  widthMargin: 240,
  nodeWidth: 180,
  nodeHeight: 48,
  horizontalSpacing: 22,
  verticalSpacing: 14,
  colors: ["#0ea5e9", "#06b6d4", "#10b981", "#f59e0b", "#8b5cf6"]
};

// ---------------------
// (The remainder of the original KFE script is unchanged.)
// For brevity, paste the rest of your original script.js logic below this line
// if you are replacing only the DATA block inside an existing script.
// If you need, I can provide the full original script.js with this DATA already embedded.
// ---------------------

// NOTE: If you are replacing the whole file use the original KFE functions from your earlier version.
// To keep the site offline, host fonts and d3 locally or remove remote links.
window.KFE = { DATA };

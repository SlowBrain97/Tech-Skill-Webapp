export const typescript_fresher_questions = [
  {
    _id: "ts-f-001",
    difficulty: "fresher",
    tags: ["basic", "definition"],
    content: {
      en: {
        title: "What is TypeScript?",
        body: "What is the primary benefit of using TypeScript over plain JavaScript?",
        solution:
          "TypeScript is a superset of JavaScript that adds static typing. The primary benefit is catching errors early during development (compile-time) and improving code maintainability."
      },
      jp: {
        title: "TypeScriptとは何ですか？",
        body: "プレーンなJavaScriptと比較してTypeScriptを使用する主な利点は何ですか？",
        solution:
          "TypeScriptは静的型付けを追加するJavaScriptのスーパーセットです。主な利点は、開発中（コンパイル時）に早期にエラーを検出し、コードの保守性を向上させることです。"
      },
      vi: {
        title: "TypeScript là gì?",
        body: "Lợi ích chính của việc sử dụng TypeScript so với JavaScript thuần túy là gì?",
        solution:
          "TypeScript là một siêu tập hợp của JavaScript, bổ sung thêm tính năng gõ tĩnh (static typing). Lợi ích chính là phát hiện lỗi sớm trong quá trình phát triển (thời gian biên dịch) và cải thiện khả năng bảo trì mã nguồn."
      }
    }
  },
  {
    _id: "ts-f-002",
    difficulty: "fresher",
    tags: ["compilation", "runtime"],
    content: {
      en: {
        title: "What does the TypeScript compiler (tsc) do?",
        body: "What is the output of the TypeScript compiler?",
        solution:
          "The TypeScript compiler (tsc) transpiles TypeScript code (.ts files) into plain JavaScript code (.js files) that can be run by browsers or Node.js."
      },
      jp: {
        title: "TypeScriptコンパイラ (tsc) は何をしますか？",
        body: "TypeScriptコンパイラの出力は何ですか？",
        solution:
          "TypeScriptコンパイラ (tsc) は、TypeScriptコード (.tsファイル) を、ブラウザやNode.jsで実行できるプレーンなJavaScriptコード (.jsファイル) にトランスパイルします。"
      },
      vi: {
        title: "Trình biên dịch TypeScript (tsc) làm gì?",
        body: "Đầu ra của trình biên dịch TypeScript là gì?",
        solution:
          "Trình biên dịch TypeScript (tsc) chuyển đổi mã TypeScript (các file .ts) thành mã JavaScript thuần túy (các file .js) có thể chạy được bởi trình duyệt hoặc Node.js."
      }
    }
  },
  {
    _id: "ts-f-003",
    difficulty: "fresher",
    tags: ["types", "primitive"],
    content: {
      en: {
        title: "What are the three main primitive types in TypeScript?",
        body: "Name three basic primitive types supported by TypeScript.",
        solution: "The three main primitive types are: `number`, `string`, and `boolean`."
      },
      jp: {
        title: "TypeScriptの主な3つのプリミティブ型は何ですか？",
        body: "TypeScriptがサポートする基本的なプリミティブ型を3つ挙げてください。",
        solution: "主な3つのプリミティブ型は、`number`、`string`、`boolean`です。"
      },
      vi: {
        title: "Ba kiểu nguyên thủy chính trong TypeScript là gì?",
        body: "Kể tên ba kiểu nguyên thủy cơ bản mà TypeScript hỗ trợ.",
        solution: "Ba kiểu nguyên thủy chính là: `number`, `string`, và `boolean`."
      }
    }
  },
  {
    _id: "ts-f-004",
    difficulty: "fresher",
    tags: ["type_annotation", "variable"],
    content: {
      en: {
        title: "How do you declare a variable of type string in TypeScript?",
        body: "Write the syntax for declaring a variable named 'username' and explicitly typing it as a string.",
        solution: "The syntax is: `let username: string = 'Alice';`"
      },
      jp: {
        title: "TypeScriptでstring型の変数を宣言するにはどうしますか？",
        body: "変数名 'username' を宣言し、明示的にstring型として型付けする構文を記述してください。",
        solution: "構文は: `let username: string = 'Alice';`"
      },
      vi: {
        title: "Làm thế nào để khai báo một biến kiểu chuỗi (string) trong TypeScript?",
        body: "Viết cú pháp khai báo một biến tên là 'username' và gán kiểu rõ ràng cho nó là string.",
        solution: "Cú pháp là: `let username: string = 'Alice';`"
      }
    }
  },
  {
    _id: "ts-f-005",
    difficulty: "fresher",
    tags: ["any", "avoidance"],
    content: {
      en: {
        title: "What is the `any` type?",
        body: "What is the role of the `any` type, and why should its use be minimized?",
        solution:
          "The `any` type can represent any value and allows you to opt-out of type checking. It should be minimized because it defeats the purpose of using TypeScript's static type checking."
      },
      jp: {
        title: "`any`型とは何ですか？",
        body: "`any`型の役割は何ですか、またその使用を最小限に抑えるべき理由は何ですか？",
        solution:
          "`any`型は任意の値を表すことができ、型チェックをオプトアウトできます。TypeScriptの静的型チェックの目的を損なうため、使用を最小限に抑えるべきです。"
      },
      vi: {
        title: "Kiểu `any` là gì?",
        body: "Vai trò của kiểu `any` là gì và tại sao nên hạn chế sử dụng nó?",
        solution:
          "Kiểu `any` có thể đại diện cho bất kỳ giá trị nào và cho phép bạn bỏ qua việc kiểm tra kiểu. Nên hạn chế sử dụng vì nó làm mất đi mục đích của việc sử dụng tính năng kiểm tra kiểu tĩnh của TypeScript."
      }
    }
  },
  {
    _id: "ts-f-006",
    difficulty: "fresher",
    tags: ["arrays", "syntax"],
    content: {
      en: {
        title: "How do you define an array of numbers in TypeScript?",
        body: "Write the syntax to define an array variable that can only hold numbers.",
        solution: "The two common syntaxes are: `let numbers: number[] = [1, 2, 3];` or `let numbers: Array<number> = [1, 2, 3];`"
      },
      jp: {
        title: "TypeScriptで数値の配列を定義するにはどうしますか？",
        body: "数値のみを保持できる配列変数を定義する構文を記述してください。",
        solution:
          "一般的な2つの構文は: `let numbers: number[] = [1, 2, 3];` または `let numbers: Array<number> = [1, 2, 3];`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một mảng số trong TypeScript?",
        body: "Viết cú pháp để định nghĩa một biến mảng chỉ có thể chứa các số.",
        solution:
          "Hai cú pháp phổ biến là: `let numbers: number[] = [1, 2, 3];` hoặc `let numbers: Array<number> = [1, 2, 3];`"
      }
    }
  },
  {
    _id: "ts-f-007",
    difficulty: "fresher",
    tags: ["functions", "return_type"],
    content: {
      en: {
        title: "How do you specify the return type of a function?",
        body: "Write a function signature that takes two numbers and returns a number, explicitly showing the return type.",
        solution: "The syntax is: `function add(a: number, b: number): number { return a + b; }`"
      },
      jp: {
        title: "関数の戻り値の型をどのように指定しますか？",
        body: "2つの数値を受け取り、数値を返す関数シグネチャを、戻り値の型を明示的に示して記述してください。",
        solution: "構文は: `function add(a: number, b: number): number { return a + b; }`"
      },
      vi: {
        title: "Làm thế nào để chỉ định kiểu trả về của một hàm?",
        body: "Viết một chữ ký hàm nhận vào hai số và trả về một số, thể hiện rõ kiểu trả về.",
        solution: "Cú pháp là: `function add(a: number, b: number): number { return a + b; }`"
      }
    }
  },
  {
    _id: "ts-f-008",
    difficulty: "fresher",
    tags: ["interfaces", "objects"],
    content: {
      en: {
        title: "What is an `interface` used for?",
        body: "Explain the main purpose of an `interface` in TypeScript.",
        solution:
          "An `interface` is used to define the **shape** (structure) of an object, specifying its required properties and their types. It enforces a contract on objects."
      },
      jp: {
        title: "`interface`は何に使用されますか？",
        body: "TypeScriptにおける`interface`の主な目的を説明してください。",
        solution:
          "`interface`は、オブジェクトの**形状**（構造）を定義するために使用され、必要なプロパティとその型を指定します。オブジェクトに契約を強制します。"
      },
      vi: {
        title: "`interface` được sử dụng để làm gì?",
        body: "Giải thích mục đích chính của `interface` trong TypeScript.",
        solution:
          "`interface` được sử dụng để định nghĩa **hình dạng** (cấu trúc) của một đối tượng, chỉ rõ các thuộc tính bắt buộc và kiểu của chúng. Nó áp đặt một giao ước lên các đối tượng."
      }
    }
  },
  {
    _id: "ts-f-009",
    difficulty: "fresher",
    tags: ["type_inference", "automatic"],
    content: {
      en: {
        title: "What is Type Inference?",
        body: "Describe Type Inference and provide an example.",
        solution:
          "Type Inference is TypeScript's ability to automatically deduce the type of a variable based on its assigned value, without explicit type annotation. Example: `let x = 10;` (TypeScript infers `x` is a `number`)."
      },
      jp: {
        title: "型推論（Type Inference）とは何ですか？",
        body: "型推論を説明し、例を挙げてください。",
        solution:
          "型推論は、明示的な型注釈なしで、割り当てられた値に基づいて変数の型を自動的に推測するTypeScriptの機能です。例: `let x = 10;` (TypeScriptは`x`が`number`であると推論します)。"
      },
      vi: {
        title: "Suy luận kiểu (Type Inference) là gì?",
        body: "Mô tả Suy luận kiểu và cung cấp một ví dụ.",
        solution:
          "Suy luận kiểu là khả năng của TypeScript tự động suy ra kiểu của một biến dựa trên giá trị được gán cho nó, mà không cần chú thích kiểu rõ ràng. Ví dụ: `let x = 10;` (TypeScript suy ra `x` là `number`)."
      }
    }
  },
  {
    _id: "ts-f-010",
    difficulty: "fresher",
    tags: ["tuple", "fixed_array"],
    content: {
      en: {
        title: "What is a `Tuple` in TypeScript?",
        body: "How does a `tuple` differ from a regular array?",
        solution:
          "A `tuple` is an array with a fixed number of elements whose types are known, but don't have to be the same. Unlike a regular array, the **order** and **type** of elements at specific indices are strictly defined."
      },
      jp: {
        title: "TypeScriptにおける`Tuple`（タプル）とは何ですか？",
        body: "`tuple`は通常の配列とどのように異なりますか？",
        solution:
          "`tuple`は、要素の数が固定されており、その型が既知であるが、同じである必要がない配列です。通常の配列とは異なり、特定のインデックスにある要素の**順序**と**型**が厳密に定義されています。"
      },
      vi: {
        title: "`Tuple` trong TypeScript là gì?",
        body: "`Tuple` khác với một mảng thông thường như thế nào?",
        solution:
          "`Tuple` là một mảng có số lượng phần tử cố định và kiểu của chúng đã được biết, nhưng không nhất thiết phải giống nhau. Khác với mảng thông thường, **thứ tự** và **kiểu** của các phần tử ở các chỉ mục cụ thể được định nghĩa nghiêm ngặt."
      }
    }
  },
  {
    _id: "ts-f-011",
    difficulty: "fresher",
    tags: ["union_type", "multiple_types"],
    content: {
      en: {
        title: "What is a `Union Type`?",
        body: "Show the syntax for a variable that can hold either a `string` or a `number`.",
        solution:
          "A `Union Type` allows a value to be one of several types. Syntax: `let id: string | number;`"
      },
      jp: {
        title: "`Union Type`（共用型）とは何ですか？",
        body: "`string`または`number`のいずれかを保持できる変数の構文を示してください。",
        solution:
          "`Union Type`は、値がいくつかの型のいずれかであることを許可します。構文: `let id: string | number;`"
      },
      vi: {
        title: "`Union Type` (Kiểu hợp nhất) là gì?",
        body: "Trình bày cú pháp cho một biến có thể chứa cả `string` hoặc `number`.",
        solution:
          "`Union Type` cho phép một giá trị là một trong số các kiểu. Cú pháp: `let id: string | number;`"
      }
    }
  },
  {
    _id: "ts-f-012",
    difficulty: "fresher",
    tags: ["literal_types", "fixed_value"],
    content: {
      en: {
        title: "What is a `Literal Type`?",
        body: "Define a variable `direction` that can only be the string 'north', 'south', 'east', or 'west'.",
        solution:
          "A `Literal Type` is a subtype of a general type that restricts the value to an exact string, number, or boolean. Syntax: `let direction: 'north' | 'south' | 'east' | 'west';`"
      },
      jp: {
        title: "`Literal Type`（リテラル型）とは何ですか？",
        body: "変数`direction`が文字列 'north'、'south'、'east'、'west' のいずれかのみであるように定義してください。",
        solution:
          "`Literal Type`は、値が厳密な文字列、数値、またはブール値に制限される一般的な型のサブタイプです。構文: `let direction: 'north' | 'south' | 'east' | 'west';`"
      },
      vi: {
        title: "`Literal Type` (Kiểu cố định) là gì?",
        body: "Định nghĩa một biến `direction` chỉ có thể là chuỗi 'north', 'south', 'east', hoặc 'west'.",
        solution:
          "`Literal Type` là một kiểu con của kiểu chung, giới hạn giá trị ở một chuỗi, số, hoặc boolean chính xác. Cú pháp: `let direction: 'north' | 'south' | 'east' | 'west';`"
      }
    }
  },
  {
    _id: "ts-f-013",
    difficulty: "fresher",
    tags: ["void", "functions"],
    content: {
      en: {
        title: "When is the `void` type used?",
        body: "Explain the purpose of the `void` type, especially regarding function return values.",
        solution:
          "The `void` type is used to indicate that a function does not return any value. It is often used for functions that perform an action or have side effects."
      },
      jp: {
        title: "`void`型はいつ使用されますか？",
        body: "特に、関数の戻り値に関して、`void`型の目的を説明してください。",
        solution:
          "`void`型は、関数が値を返さないことを示すために使用されます。アクションを実行したり、副作用を持つ関数によく使用されます。"
      },
      vi: {
        title: "Kiểu `void` được sử dụng khi nào?",
        body: "Giải thích mục đích của kiểu `void`, đặc biệt là đối với giá trị trả về của hàm.",
        solution:
          "Kiểu `void` được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào. Nó thường được dùng cho các hàm thực hiện một hành động hoặc có tác dụng phụ (side effects)."
      }
    }
  },
  {
    _id: "ts-f-014",
    difficulty: "fresher",
    tags: ["enum", "constants"],
    content: {
      en: {
        title: "What is an `Enum`?",
        body: "Provide a simple example of a numeric `enum` called `Color` with values `Red` (0) and `Green` (1).",
        solution:
          "An `Enum` (enumeration) is a way of defining a set of named constants. Example: `enum Color { Red, Green };`"
      },
      jp: {
        title: "`Enum`（列挙型）とは何ですか？",
        body: "値が`Red` (0) と `Green` (1) である`Color`という数値`enum`の簡単な例を挙げてください。",
        solution:
          "`Enum`（列挙型）は、名前付き定数のセットを定義する方法です。例: `enum Color { Red, Green };`"
      },
      vi: {
        title: "`Enum` (Kiểu liệt kê) là gì?",
        body: "Cung cấp một ví dụ đơn giản về một `enum` số tên là `Color` với các giá trị `Red` (0) và `Green` (1).",
        solution:
          "`Enum` (Kiểu liệt kê) là một cách để định nghĩa một tập hợp các hằng số được đặt tên. Ví dụ: `enum Color { Red, Green };`"
      }
    }
  },
  {
    _id: "ts-f-015",
    difficulty: "fresher",
    tags: ["objects", "optional_property"],
    content: {
      en: {
        title: "How do you make a property optional in an interface?",
        body: "Show the syntax for an interface `User` with an optional property `age` (number).",
        solution:
          "Use the `?` symbol after the property name. Example: `interface User { name: string; age?: number; }`"
      },
      jp: {
        title: "インターフェースでプロパティをオプションにするにはどうしますか？",
        body: "オプションのプロパティ`age` (number) を持つインターフェース`User`の構文を示してください。",
        solution:
          "プロパティ名の後に`?`記号を使用します。例: `interface User { name: string; age?: number; }`"
      },
      vi: {
        title: "Làm thế nào để làm cho một thuộc tính là tùy chọn trong một interface?",
        body: "Trình bày cú pháp cho một interface `User` với một thuộc tính tùy chọn `age` (kiểu số).",
        solution:
          "Sử dụng ký hiệu `?` sau tên thuộc tính. Ví dụ: `interface User { name: string; age?: number; }`"
      }
    }
  },
  {
    _id: "ts-f-016",
    difficulty: "fresher",
    tags: ["classes", "access_modifiers"],
    content: {
      en: {
        title: "Name the three access modifiers in TypeScript classes.",
        body: "What are the three keywords used to control access to class members?",
        solution:
          "The three access modifiers are: `public`, `private`, and `protected`."
      },
      jp: {
        title: "TypeScriptのクラスにおける3つのアクセス修飾子を挙げてください。",
        body: "クラスメンバーへのアクセスを制御するために使用される3つのキーワードは何ですか？",
        solution: "3つのアクセス修飾子は: `public`、`private`、および `protected`です。"
      },
      vi: {
        title: "Kể tên ba bổ ngữ truy cập (access modifiers) trong các lớp TypeScript.",
        body: "Ba từ khóa được sử dụng để kiểm soát quyền truy cập vào các thành viên lớp là gì?",
        solution:
          "Ba bổ ngữ truy cập là: `public`, `private`, và `protected`."
      }
    }
  },
  {
    _id: "ts-f-017",
    difficulty: "fresher",
    tags: ["readonly", "immutability"],
    content: {
      en: {
        title: "What is the purpose of the `readonly` keyword?",
        body: "When applied to a property, what does the `readonly` keyword prevent?",
        solution:
          "The `readonly` keyword prevents a property from being reassigned after it has been initialized, typically in the constructor. It enforces immutability."
      },
      jp: {
        title: "`readonly`キーワードの目的は何ですか？",
        body: "プロパティに適用された場合、`readonly`キーワードは何を防ぎますか？",
        solution:
          "`readonly`キーワードは、プロパティが初期化された後（通常はコンストラクター内）に再割り当てされるのを防ぎます。これにより、不変性が強制されます。"
      },
      vi: {
        title: "Mục đích của từ khóa `readonly` là gì?",
        body: "Khi được áp dụng cho một thuộc tính, từ khóa `readonly` ngăn chặn điều gì?",
        solution:
          "Từ khóa `readonly` ngăn chặn một thuộc tính bị gán lại sau khi nó đã được khởi tạo, thường là trong hàm tạo (constructor). Nó đảm bảo tính bất biến (immutability)."
      }
    }
  },
  {
    _id: "ts-f-018",
    difficulty: "fresher",
    tags: ["null", "undefined"],
    content: {
      en: {
        title: "What is the difference between `null` and `undefined` in TypeScript's type system?",
        body: "Explain how TypeScript treats `null` and `undefined` by default (without strict null checks).",
        solution:
          "By default (`--strictNullChecks` off), both `null` and `undefined` are assignable to any type. With strict checks on, they are only assignable to `any`, their respective types, and `void`."
      },
      jp: {
        title: "TypeScriptの型システムにおける`null`と`undefined`の違いは何ですか？",
        body: "TypeScriptがデフォルトで（厳密なnullチェックなしで）`null`と`undefined`をどのように扱うかを説明してください。",
        solution:
          "デフォルトでは（`--strictNullChecks`がオフの場合）、`null`と`undefined`の両方が任意の型に代入可能です。厳密なチェックがオンの場合、それらは`any`、それぞれの型、および`void`にのみ代入可能です。"
      },
      vi: {
        title: "Sự khác biệt giữa `null` và `undefined` trong hệ thống kiểu của TypeScript là gì?",
        body: "Giải thích cách TypeScript xử lý `null` và `undefined` theo mặc định (khi không có strict null checks).",
        solution:
          "Theo mặc định (khi `--strictNullChecks` tắt), cả `null` và `undefined` đều có thể gán cho bất kỳ kiểu nào. Với kiểm tra nghiêm ngặt bật, chúng chỉ có thể được gán cho `any`, kiểu tương ứng của chúng, và `void`."
      }
    }
  },
  {
    _id: "ts-f-019",
    difficulty: "fresher",
    tags: ["type_alias", "custom_types"],
    content: {
      en: {
        title: "What is a `Type Alias`?",
        body: "Show how to create a type alias named `Point` for an object with `x` (number) and `y` (number) properties.",
        solution:
          "A `Type Alias` allows you to create a new name for a type. Example: `type Point = { x: number; y: number; };`"
      },
      jp: {
        title: "`Type Alias`（型エイリアス）とは何ですか？",
        body: "`x` (number) と `y` (number) のプロパティを持つオブジェクトに対して、`Point`という名前の型エイリアスを作成する方法を示してください。",
        solution:
          "`Type Alias`は、型に新しい名前を作成することを可能にします。例: `type Point = { x: number; y: number; };`"
      },
      vi: {
        title: "`Type Alias` (Bí danh kiểu) là gì?",
        body: "Trình bày cách tạo một bí danh kiểu tên là `Point` cho một đối tượng có các thuộc tính `x` (số) và `y` (số).",
        solution:
          "`Type Alias` cho phép bạn tạo một tên mới cho một kiểu. Ví dụ: `type Point = { x: number; y: number; };`"
      }
    }
  },
  {
    _id: "ts-f-020",
    difficulty: "fresher",
    tags: ["type_vs_interface", "fresher"],
    content: {
      en: {
        title: "What is one main difference between a `type` and an `interface` in simple terms?",
        body: "State one key difference, focusing on a beginner-friendly concept like declaration merging.",
        solution:
          "Interfaces can be **re-opened** (or 'merged') to add new properties later, while Type Aliases are final and cannot be re-opened for further modification."
      },
      jp: {
        title: "簡単に言って、`type`と`interface`の主な違いは何ですか？",
        body: "宣言マージのような初心者向けの概念に焦点を当てて、1つの重要な違いを述べてください。",
        solution:
          "インターフェースは後で新しいプロパティを追加するために**再オープン**（または 'マージ'）できますが、型エイリアスは最終的であり、それ以上の変更のために再オープンすることはできません。"
      },
      vi: {
        title: "Một khác biệt chính giữa `type` và `interface` một cách đơn giản là gì?",
        body: "Nêu một khác biệt chính, tập trung vào một khái niệm thân thiện với người mới như việc hợp nhất khai báo.",
        solution:
          "Các interface có thể được **mở lại** (hoặc 'hợp nhất') để thêm các thuộc tính mới sau này, trong khi Type Alias là cố định và không thể mở lại để sửa đổi thêm."
      }
    }
  },
  {
    _id: "ts-f-021",
    difficulty: "fresher",
    tags: ["config", "tsconfig"],
    content: {
      en: {
        title: "What is the purpose of the `tsconfig.json` file?",
        body: "What configuration does the `tsconfig.json` file hold?",
        solution:
          "The `tsconfig.json` file specifies the root files and the compiler options required to compile a TypeScript project (e.g., target JS version, module system, strictness flags)."
      },
      jp: {
        title: "`tsconfig.json`ファイルの目的は何ですか？",
        body: "`tsconfig.json`ファイルにはどのような設定が保持されていますか？",
        solution:
          "`tsconfig.json`ファイルは、TypeScriptプロジェクトをコンパイルするために必要なルートファイルとコンパイラオプション（例：ターゲットJSバージョン、モジュールシステム、厳密性フラグ）を指定します。"
      },
      vi: {
        title: "Mục đích của file `tsconfig.json` là gì?",
        body: "File `tsconfig.json` chứa cấu hình gì?",
        solution:
          "File `tsconfig.json` chỉ định các file gốc và các tùy chọn trình biên dịch cần thiết để biên dịch một dự án TypeScript (ví dụ: phiên bản JS mục tiêu, hệ thống module, cờ nghiêm ngặt)."
      }
    }
  },
  {
    _id: "ts-f-022",
    difficulty: "fresher",
    tags: ["target", "compilation"],
    content: {
      en: {
        title: "What does the `target` option in `tsconfig.json` control?",
        body: "If `target` is set to 'es5', what does that mean for the output JavaScript?",
        solution:
          "The `target` option specifies the ECMAScript target version for the output JavaScript code. Setting it to 'es5' means the TypeScript compiler will generate JavaScript compatible with ES5 environments."
      },
      jp: {
        title: "`tsconfig.json`の`target`オプションは何を制御しますか？",
        body: "`target`が 'es5' に設定されている場合、出力JavaScriptにとってそれは何を意味しますか？",
        solution:
          "`target`オプションは、出力JavaScriptコードのECMAScriptターゲットバージョンを指定します。 'es5' に設定すると、TypeScriptコンパイラはES5環境と互換性のあるJavaScriptを生成します。"
      },
      vi: {
        title: "Tùy chọn `target` trong `tsconfig.json` kiểm soát điều gì?",
        body: "Nếu `target` được đặt thành 'es5', điều đó có ý nghĩa gì đối với JavaScript đầu ra?",
        solution:
          "Tùy chọn `target` chỉ định phiên bản ECMAScript mục tiêu cho mã JavaScript đầu ra. Đặt nó thành 'es5' có nghĩa là trình biên dịch TypeScript sẽ tạo ra JavaScript tương thích với môi trường ES5."
      }
    }
  },
  {
    _id: "ts-f-023",
    difficulty: "fresher",
    tags: ["strictness", "config"],
    content: {
      en: {
        title: "What is the benefit of setting `strict: true` in `tsconfig.json`?",
        body: "What does the `strict: true` flag enable?",
        solution:
          "`strict: true` enables a broad range of type checking behavioral options, including `noImplicitAny`, `strictNullChecks`, and `strictFunctionTypes`, which promotes safer and more robust code."
      },
      jp: {
        title: "`tsconfig.json`で`strict: true`を設定する利点は何ですか？",
        body: "`strict: true`フラグは何を有効にしますか？",
        solution:
          "`strict: true`は、`noImplicitAny`、`strictNullChecks`、`strictFunctionTypes`など、幅広い型チェック動作オプションを有効にし、より安全で堅牢なコードを促進します。"
      },
      vi: {
        title: "Lợi ích của việc đặt `strict: true` trong `tsconfig.json` là gì?",
        body: "Cờ `strict: true` kích hoạt điều gì?",
        solution:
          "`strict: true` kích hoạt một loạt các tùy chọn hành vi kiểm tra kiểu, bao gồm `noImplicitAny`, `strictNullChecks`, và `strictFunctionTypes`, giúp thúc đẩy mã nguồn an toàn và mạnh mẽ hơn."
      }
    }
  },
  {
    _id: "ts-f-024",
    difficulty: "fresher",
    tags: ["type_assertion", "conversion"],
    content: {
      en: {
        title: "What is Type Assertion?",
        body: "Show an example of Type Assertion using the 'as' syntax to treat a variable `value` as a `string`.",
        solution:
          "Type Assertion is a way to tell the TypeScript compiler 'trust me, I know this is a string'. Example: `let strLength: number = (value as string).length;`"
      },
      jp: {
        title: "Type Assertion（型アサーション）とは何ですか？",
        body: "'as' 構文を使用して、変数`value`を`string`として扱うType Assertionの例を示してください。",
        solution:
          "Type Assertionは、TypeScriptコンパイラに「これはstringだと私を信頼してください」と伝える方法です。例: `let strLength: number = (value as string).length;`"
      },
      vi: {
        title: "Type Assertion (Khẳng định kiểu) là gì?",
        body: "Trình bày một ví dụ về Type Assertion sử dụng cú pháp 'as' để coi một biến `value` là kiểu `string`.",
        solution:
          "Type Assertion là một cách để nói với trình biên dịch TypeScript 'tin tôi đi, tôi biết đây là một chuỗi'. Ví dụ: `let strLength: number = (value as string).length;`"
      }
    }
  },
  {
    _id: "ts-f-025",
    difficulty: "fresher",
    tags: ["non-null_assertion", "operator"],
    content: {
      en: {
        title: "What does the Non-null assertion operator (`!`) do?",
        body: "Explain the effect of using the `!` operator after a variable name.",
        solution:
          "The `!` operator tells the TypeScript compiler that the value is definitely **not null** or **not undefined**, allowing access to properties that would otherwise be blocked by strict null checks."
      },
      jp: {
        title: "Non-null assertion operator (`!`) は何をしますか？",
        body: "変数名の後に`!`演算子を使用することの効果を説明してください。",
        solution:
          "`!`演算子は、その値が間違いなく**nullではない**または**undefinedではない**ことをTypeScriptコンパイラに伝えます。これにより、厳密なnullチェックによってブロックされる可能性のあるプロパティへのアクセスが可能になります。"
      },
      vi: {
        title: "Toán tử khẳng định không null (`!`) làm gì?",
        body: "Giải thích tác dụng của việc sử dụng toán tử `!` sau tên biến.",
        solution:
          "Toán tử `!` báo cho trình biên dịch TypeScript rằng giá trị đó chắc chắn **không phải null** hoặc **không phải undefined**, cho phép truy cập vào các thuộc tính mà lẽ ra sẽ bị chặn bởi kiểm tra null nghiêm ngặt."
      }
    }
  },
  {
    _id: "ts-f-026",
    difficulty: "fresher",
    tags: ["functions", "optional_parameters"],
    content: {
      en: {
        title: "How do you define an optional parameter in a function?",
        body: "Write a function signature for `greet` that takes a mandatory `name` (string) and an optional `greeting` (string).",
        solution:
          "Use the `?` symbol after the parameter name. Example: `function greet(name: string, greeting?: string): void {}`"
      },
      jp: {
        title: "関数でオプションのパラメーターを定義するにはどうしますか？",
        body: "必須の`name` (string) とオプションの`greeting` (string) を受け取る関数`greet`のシグネチャを記述してください。",
        solution:
          "パラメーター名の後に`?`記号を使用します。例: `function greet(name: string, greeting?: string): void {}`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một tham số tùy chọn trong một hàm?",
        body: "Viết chữ ký hàm cho `greet` nhận một `name` (string) bắt buộc và một `greeting` (string) tùy chọn.",
        solution:
          "Sử dụng ký hiệu `?` sau tên tham số. Ví dụ: `function greet(name: string, greeting?: string): void {}`"
      }
    }
  },
  {
    _id: "ts-f-027",
    difficulty: "fresher",
    tags: ["classes", "constructor"],
    content: {
      en: {
        title: "What is the purpose of the `constructor` in a TypeScript class?",
        body: "Explain what happens when a class instance is created.",
        solution:
          "The `constructor` is a special method called when an instance of a class is created (using `new`). Its purpose is to initialize the object's properties."
      },
      jp: {
        title: "TypeScriptクラスにおける`constructor`の目的は何ですか？",
        body: "クラスのインスタンスが作成されたときに何が起こるかを説明してください。",
        solution:
          "`constructor`は、クラスのインスタンスが作成されたとき（`new`を使用して）に呼び出される特別なメソッドです。その目的は、オブジェクトのプロパティを初期化することです。"
      },
      vi: {
        title: "Mục đích của `constructor` trong một lớp TypeScript là gì?",
        body: "Giải thích điều gì xảy ra khi một thể hiện (instance) của một lớp được tạo.",
        solution:
          "`constructor` là một phương thức đặc biệt được gọi khi một thể hiện của lớp được tạo (sử dụng `new`). Mục đích của nó là để khởi tạo các thuộc tính của đối tượng."
      }
    }
  },
  {
    _id: "ts-f-028",
    difficulty: "fresher",
    tags: ["inheritance", "classes"],
    content: {
      en: {
        title: "How do classes achieve inheritance in TypeScript?",
        body: "What keyword is used for one class to inherit from another class?",
        solution: "The `extends` keyword is used to establish an inheritance relationship, where a derived class inherits properties and methods from a base class."
      },
      jp: {
        title: "TypeScriptでは、クラスはどのように継承を実現しますか？",
        body: "あるクラスが別のクラスから継承するために使用されるキーワードは何ですか？",
        solution:
          "`extends`キーワードは、派生クラスが基底クラスからプロパティとメソッドを継承する継承関係を確立するために使用されます。"
      },
      vi: {
        title: "Các lớp đạt được tính kế thừa trong TypeScript bằng cách nào?",
        body: "Từ khóa nào được sử dụng để một lớp kế thừa từ một lớp khác?",
        solution:
          "Từ khóa `extends` được sử dụng để thiết lập mối quan hệ kế thừa, trong đó một lớp con (derived class) kế thừa các thuộc tính và phương thức từ một lớp cơ sở (base class)."
      }
    }
  },
  {
    _id: "ts-f-029",
    difficulty: "fresher",
    tags: ["static", "classes"],
    content: {
      en: {
        title: "What is a `static` property or method in a class?",
        body: "How do you access a static member of a class?",
        solution:
          "A `static` member belongs to the class itself, not to any instance of the class. You access it directly using the class name: `ClassName.staticMethod()`."
      },
      jp: {
        title: "クラスにおける`static`プロパティまたはメソッドとは何ですか？",
        body: "クラスの静的メンバーにはどのようにアクセスしますか？",
        solution:
          "`static`メンバーは、クラスのインスタンスではなく、クラス自体に属します。クラス名を使用して直接アクセスします: `ClassName.staticMethod()`。"
      },
      vi: {
        title: "Thuộc tính hoặc phương thức `static` trong một lớp là gì?",
        body: "Làm thế nào để truy cập một thành viên static của một lớp?",
        solution:
          "Một thành viên `static` thuộc về bản thân lớp, chứ không phải bất kỳ thể hiện nào của lớp đó. Bạn truy cập nó trực tiếp bằng cách sử dụng tên lớp: `ClassName.staticMethod()`."
      }
    }
  },
  {
    _id: "ts-f-030",
    difficulty: "fresher",
    tags: ["module", "import_export"],
    content: {
      en: {
        title: "What is the primary way TypeScript handles modules?",
        body: "What two keywords are fundamental for sharing code between different files in TypeScript/JavaScript?",
        solution:
          "TypeScript uses the standard JavaScript module system, relying on the `import` and `export` keywords to share code between files."
      },
      jp: {
        title: "TypeScriptがモジュールを処理する主な方法は何ですか？",
        body: "TypeScript/JavaScriptで異なるファイル間でコードを共有するために不可欠な2つのキーワードは何ですか？",
        solution:
          "TypeScriptは標準のJavaScriptモジュールシステムを使用し、ファイル間でコードを共有するために`import`と`export`キーワードに依存しています。"
      },
      vi: {
        title: "Phương pháp chính TypeScript xử lý module là gì?",
        body: "Hai từ khóa cơ bản nào được dùng để chia sẻ mã giữa các file khác nhau trong TypeScript/JavaScript?",
        solution:
          "TypeScript sử dụng hệ thống module JavaScript tiêu chuẩn, dựa vào các từ khóa `import` và `export` để chia sẻ mã giữa các file."
      }
    }
  },
  {
    _id: "ts-f-031",
    difficulty: "fresher",
    tags: ["unknown", "safe_any"],
    content: {
      en: {
        title: "What is the `unknown` type?",
        body: "How does `unknown` differ from `any`?",
        solution:
          "`unknown` is a type-safe counterpart of `any`. You can assign anything to `unknown`, but you **must** perform a type check or assertion before you can use or operate on it, preventing accidental runtime errors."
      },
      jp: {
        title: "`unknown`型とは何ですか？",
        body: "`unknown`は`any`とどのように異なりますか？",
        solution:
          "`unknown`は`any`の型安全な対応物です。何でも`unknown`に代入できますが、それを使用したり操作したりする前に、型チェックまたはアサーションを**実行しなければなりません**。これにより、偶発的な実行時エラーを防ぎます。"
      },
      vi: {
        title: "Kiểu `unknown` là gì?",
        body: "`unknown` khác với `any` như thế nào?",
        solution:
          "`unknown` là một kiểu an toàn hơn của `any`. Bạn có thể gán bất cứ thứ gì cho `unknown`, nhưng bạn **phải** thực hiện kiểm tra kiểu hoặc khẳng định kiểu trước khi bạn có thể sử dụng hoặc thao tác trên nó, ngăn ngừa lỗi runtime ngẫu nhiên."
      }
    }
  },
  {
    _id: "ts-f-032",
    difficulty: "fresher",
    tags: ["never", "error_handling"],
    content: {
      en: {
        title: "When is the `never` type used?",
        body: "Describe a scenario where a function's return type would be inferred as `never`.",
        solution:
          "The `never` type represents the type of values that **never** occur. It is used for functions that always throw an exception or functions that contain an infinite loop (i.e., the function never returns normally)."
      },
      jp: {
        title: "`never`型はいつ使用されますか？",
        body: "関数の戻り値の型が`never`と推論されるシナリオを説明してください。",
        solution:
          "`never`型は、**決して**発生しない値の型を表します。常に例外をスローする関数や、無限ループを含む関数（つまり、関数が正常に戻らない）に使用されます。"
      },
      vi: {
        title: "Kiểu `never` được sử dụng khi nào?",
        body: "Mô tả một kịch bản mà kiểu trả về của một hàm sẽ được suy luận là `never`.",
        solution:
          "Kiểu `never` đại diện cho kiểu của các giá trị **không bao giờ** xảy ra. Nó được sử dụng cho các hàm luôn ném ra một ngoại lệ (exception) hoặc các hàm chứa vòng lặp vô hạn (tức là hàm không bao giờ trả về bình thường)."
      }
    }
  },
  {
    _id: "ts-f-033",
    difficulty: "fresher",
    tags: ["generics", "basic"],
    content: {
      en: {
        title: "What is the main purpose of `Generics`?",
        body: "What symbol is commonly used in TypeScript to denote a type variable in a generic?",
        solution:
          "The main purpose of Generics is to create reusable components that can work with a variety of types rather than a single one. The common symbol used is `T` (for Type), enclosed in angle brackets: `<T>`."
      },
      jp: {
        title: "`Generics`（ジェネリクス）の主な目的は何ですか？",
        body: "ジェネリクスで型変数を表すためにTypeScriptで一般的に使用される記号は何ですか？",
        solution:
          "ジェネリクスの主な目的は、単一の型ではなく、さまざまな型で機能する再利用可能なコンポーネントを作成することです。一般的に使用される記号は、山括弧で囲まれた`T`（Typeを表す）です: `<T>`。"
      },
      vi: {
        title: "Mục đích chính của `Generics` (Kiểu chung) là gì?",
        body: "Ký hiệu nào thường được sử dụng trong TypeScript để biểu thị một biến kiểu trong generic?",
        solution:
          "Mục đích chính của Generics là tạo ra các thành phần có thể tái sử dụng, hoạt động với nhiều loại kiểu khác nhau thay vì chỉ một kiểu duy nhất. Ký hiệu phổ biến được sử dụng là `T` (viết tắt của Type), đặt trong dấu ngoặc nhọn: `<T>`."
      }
    }
  },
  {
    _id: "ts-f-034",
    difficulty: "fresher",
    tags: ["decorators", "annotation"],
    content: {
      en: {
        title: "What is a `Decorator` (in the context of classes)?",
        body: "What character symbol is used to denote a decorator?",
        solution:
          "A Decorator is a special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters. They are functions that modify or annotate classes and their members. The symbol is the at sign: `@`."
      },
      jp: {
        title: "`Decorator`（デコレーター）とは何ですか（クラスの文脈で）？",
        body: "デコレーターを示すために使用される文字記号は何ですか？",
        solution:
          "Decoratorは、クラス、メソッド、アクセサー、プロパティ、またはパラメーターに付加できる特別な種類の宣言です。これらは、クラスとそのメンバーを変更または注釈付けする関数です。記号はアットマークです: `@`。"
      },
      vi: {
        title: "`Decorator` (Bộ trang trí) là gì (trong ngữ cảnh của các lớp)?",
        body: "Ký hiệu nào được sử dụng để biểu thị một decorator?",
        solution:
          "Decorator là một loại khai báo đặc biệt có thể được đính kèm vào các lớp, phương thức, bộ truy cập, thuộc tính hoặc tham số. Chúng là các hàm dùng để sửa đổi hoặc chú thích các lớp và thành viên của chúng. Ký hiệu là dấu a còng: `@`."
      }
    }
  },
  {
    _id: "ts-f-035",
    difficulty: "fresher",
    tags: ["type_checking", "compile_time"],
    content: {
      en: {
        title: "When does TypeScript perform type checking?",
        body: "Does TypeScript perform type checking at runtime or compile-time?",
        solution:
          "TypeScript performs type checking primarily at **compile-time** (when the code is being transpiled to JavaScript). Since JavaScript has no type information, TypeScript cannot enforce types at runtime."
      },
      jp: {
        title: "TypeScriptはいつ型チェックを実行しますか？",
        body: "TypeScriptは実行時とコンパイル時のどちらで型チェックを実行しますか？",
        solution:
          "TypeScriptは、主に**コンパイル時**に（コードがJavaScriptにトランスパイルされているときに）型チェックを実行します。JavaScriptには型情報がないため、TypeScriptは実行時に型を強制することはできません。"
      },
      vi: {
        title: "TypeScript thực hiện kiểm tra kiểu khi nào?",
        body: "TypeScript thực hiện kiểm tra kiểu ở thời điểm chạy (runtime) hay thời điểm biên dịch (compile-time)?",
        solution:
          "TypeScript thực hiện kiểm tra kiểu chủ yếu ở **thời điểm biên dịch** (khi mã đang được chuyển đổi sang JavaScript). Vì JavaScript không có thông tin kiểu, TypeScript không thể bắt buộc các kiểu ở thời điểm chạy."
      }
    }
  },
  {
    _id: "ts-f-036",
    difficulty: "fresher",
    tags: ["rest_parameters", "functions"],
    content: {
      en: {
        title: "How do you define `Rest Parameters` in TypeScript functions?",
        body: "Show the syntax for a function `logNames` that accepts an arbitrary number of string arguments.",
        solution:
          "Use the spread operator (`...`) before the parameter name, followed by an array type. Example: `function logNames(...names: string[]): void {}`"
      },
      jp: {
        title: "TypeScript関数で`Rest Parameters`をどのように定義しますか？",
        body: "任意の数の文字列引数を受け入れる関数`logNames`の構文を示してください。",
        solution:
          "パラメーター名の前にスプレッド演算子 (`...`) を使用し、その後に配列型を続けます。例: `function logNames(...names: string[]): void {}`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa `Rest Parameters` (Tham số còn lại) trong các hàm TypeScript?",
        body: "Trình bày cú pháp cho một hàm `logNames` chấp nhận một số lượng tùy ý các đối số chuỗi.",
        solution:
          "Sử dụng toán tử spread (`...`) trước tên tham số, theo sau là kiểu mảng. Ví dụ: `function logNames(...names: string[]): void {}`"
      }
    }
  },
  {
    _id: "ts-f-037",
    difficulty: "fresher",
    tags: ["object_types", "index_signature"],
    content: {
      en: {
        title: "What is an `Index Signature` in an object type?",
        body: "Show the syntax for an object type that allows any number of string properties with number values.",
        solution:
          "An Index Signature allows the definition of properties for which the names are unknown until runtime. Syntax: `interface Scores { [key: string]: number; }`"
      },
      jp: {
        title: "オブジェクト型における`Index Signature`（インデックスシグネチャ）とは何ですか？",
        body: "数値を持つ任意の数の文字列プロパティを許可するオブジェクト型の構文を示してください。",
        solution:
          "Index Signatureは、実行時まで名前が不明なプロパティの定義を可能にします。構文: `interface Scores { [key: string]: number; }`"
      },
      vi: {
        title: "`Index Signature` (Chữ ký chỉ mục) trong kiểu đối tượng là gì?",
        body: "Trình bày cú pháp cho một kiểu đối tượng cho phép bất kỳ số lượng thuộc tính chuỗi nào với giá trị kiểu số.",
        solution:
          "Index Signature cho phép định nghĩa các thuộc tính mà tên của chúng không được biết cho đến thời điểm chạy. Cú pháp: `interface Scores { [key: string]: number; }`"
      }
    }
  },
  {
    _id: "ts-f-038",
    difficulty: "fresher",
    tags: ["type_guards", "typeof"],
    content: {
      en: {
        title: "What is a `Type Guard`?",
        body: "Provide the simplest example of a built-in Type Guard keyword.",
        solution:
          "A `Type Guard` is a mechanism that narrows down the type of a variable within a conditional block. The simplest built-in example is the `typeof` operator (e.g., `if (typeof value === 'string')`)."
      },
      jp: {
        title: "`Type Guard`（型ガード）とは何ですか？",
        body: "組み込みのType Guardキーワードの最も簡単な例を挙げてください。",
        solution:
          "`Type Guard`は、条件付きブロック内で変数の型を絞り込むメカニズムです。最も簡単な組み込みの例は、`typeof`演算子です（例: `if (typeof value === 'string')`）。"
      },
      vi: {
        title: "`Type Guard` (Bộ bảo vệ kiểu) là gì?",
        body: "Cung cấp ví dụ đơn giản nhất về một từ khóa Type Guard có sẵn (built-in).",
        solution:
          "`Type Guard` là một cơ chế thu hẹp kiểu của một biến trong một khối điều kiện. Ví dụ tích hợp đơn giản nhất là toán tử `typeof` (ví dụ: `if (typeof value === 'string')`)."
      }
    }
  },
  {
    _id: "ts-f-039",
    difficulty: "fresher",
    tags: ["type_guards", "instanceof"],
    content: {
      en: {
        title: "When is the `instanceof` Type Guard used?",
        body: "Explain the purpose of the `instanceof` operator in Type Guarding.",
        solution:
          "The `instanceof` operator is used to check if an object is an instance of a particular **class**. It is useful for narrowing down the type of an object to a specific class type within a conditional block."
      },
      jp: {
        title: "`instanceof` Type Guardはいつ使用されますか？",
        body: "Type Guardにおける`instanceof`演算子の目的を説明してください。",
        solution:
          "`instanceof`演算子は、オブジェクトが特定の**クラス**のインスタンスであるかどうかをチェックするために使用されます。条件付きブロック内でオブジェクトの型を特定のクラス型に絞り込むのに役立ちます。"
      },
      vi: {
        title: "Type Guard `instanceof` được sử dụng khi nào?",
        body: "Giải thích mục đích của toán tử `instanceof` trong Type Guarding.",
        solution:
          "Toán tử `instanceof` được sử dụng để kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một **lớp** cụ thể hay không. Nó hữu ích cho việc thu hẹp kiểu của một đối tượng xuống một kiểu lớp cụ thể trong một khối điều kiện."
      }
    }
  },
  {
    _id: "ts-f-040",
    difficulty: "fresher",
    tags: ["declaration_files", "d.ts"],
    content: {
      en: {
        title: "What is a `.d.ts` file?",
        body: "What is the primary function of TypeScript Declaration files?",
        solution:
          "A `.d.ts` file is a TypeScript declaration file. Its primary function is to provide type information (interfaces, types, functions signatures) for existing JavaScript code, allowing TypeScript to use libraries without their original source."
      },
      jp: {
        title: "`.d.ts`ファイルとは何ですか？",
        body: "TypeScript宣言ファイルの主な機能は何ですか？",
        solution:
          "`.d.ts`ファイルはTypeScript宣言ファイルです。その主な機能は、既存のJavaScriptコードに型情報（インターフェース、型、関数シグネチャ）を提供し、TypeScriptが元のソースなしでライブラリを使用できるようにすることです。"
      },
      vi: {
        title: "File `.d.ts` là gì?",
        body: "Chức năng chính của các file Khai báo TypeScript (Declaration files) là gì?",
        solution:
          "File `.d.ts` là file khai báo TypeScript. Chức năng chính của nó là cung cấp thông tin kiểu (interfaces, types, function signatures) cho mã JavaScript hiện có, cho phép TypeScript sử dụng các thư viện mà không cần mã nguồn gốc của chúng."
      }
    }
  },
  {
    _id: "ts-f-041",
    difficulty: "fresher",
    tags: ["strict_null_checks", "config"],
    content: {
      en: {
        title: "What does the `strictNullChecks` flag prevent?",
        body: "When `strictNullChecks` is enabled, what happens if you try to assign `null` or `undefined` to a non-nullable type?",
        solution:
          "The `strictNullChecks` flag prevents the accidental use of `null` and `undefined` in places where a non-nullable type (like `string` or `number`) is expected. It will result in a compile-time error."
      },
      jp: {
        title: "`strictNullChecks`フラグは何を防ぎますか？",
        body: "`strictNullChecks`が有効になっている場合、null許容でない型に`null`または`undefined`を割り当てようとするとどうなりますか？",
        solution:
          "`strictNullChecks`フラグは、null許容でない型（`string`や`number`など）が期待される場所で、`null`や`undefined`が誤って使用されるのを防ぎます。これはコンパイル時エラーになります。"
      },
      vi: {
        title: "Cờ `strictNullChecks` ngăn chặn điều gì?",
        body: "Khi `strictNullChecks` được bật, điều gì xảy ra nếu bạn cố gắng gán `null` hoặc `undefined` cho một kiểu không cho phép null?",
        solution:
          "Cờ `strictNullChecks` ngăn chặn việc sử dụng ngẫu nhiên `null` và `undefined` ở những nơi mà một kiểu không cho phép null (như `string` hoặc `number`) được mong đợi. Nó sẽ dẫn đến lỗi thời gian biên dịch."
      }
    }
  },
  {
    _id: "ts-f-042",
    difficulty: "fresher",
    tags: ["module_systems", "commonjs"],
    content: {
      en: {
        title: "Which `module` option in `tsconfig.json` is typically used for Node.js projects?",
        body: "Name the common module system used by Node.js that TypeScript can target.",
        solution:
          "The `CommonJS` module system is typically used for Node.js projects. You would set the `module` option in `tsconfig.json` to `'CommonJS'`."
      },
      jp: {
        title: "`tsconfig.json`のどの`module`オプションがNode.jsプロジェクトで一般的に使用されますか？",
        body: "TypeScriptがターゲットとすることができる、Node.jsで一般的に使用されるモジュールシステムを挙げてください。",
        solution:
          "`CommonJS`モジュールシステムは、Node.jsプロジェクトで一般的に使用されます。`tsconfig.json`の`module`オプションを`'CommonJS'`に設定します。"
      },
      vi: {
        title: "Tùy chọn `module` nào trong `tsconfig.json` thường được sử dụng cho các dự án Node.js?",
        body: "Kể tên hệ thống module phổ biến được Node.js sử dụng mà TypeScript có thể nhắm tới.",
        solution:
          "Hệ thống module `CommonJS` thường được sử dụng cho các dự án Node.js. Bạn sẽ đặt tùy chọn `module` trong `tsconfig.json` thành `'CommonJS'`."
      }
    }
  },
  {
    _id: "ts-f-043",
    difficulty: "fresher",
    tags: ["type_coercion", "explicit"],
    content: {
      en: {
        title: "What is `Explicit Typing`?",
        body: "Explain how explicit typing differs from type inference.",
        solution:
          "Explicit Typing is when the programmer **manually** specifies the type of a variable, function parameter, or return value using a type annotation (e.g., `: number`). Type inference is automatic."
      },
      jp: {
        title: "`Explicit Typing`（明示的な型付け）とは何ですか？",
        body: "明示的な型付けが型推論とどのように異なるかを説明してください。",
        solution:
          "明示的な型付けは、プログラマが型注釈（例: `: number`）を使用して、変数、関数パラメーター、または戻り値の型を**手動で**指定することです。型推論は自動的です。"
      },
      vi: {
        title: "`Explicit Typing` (Gán kiểu rõ ràng) là gì?",
        body: "Giải thích cách gán kiểu rõ ràng khác với suy luận kiểu.",
        solution:
          "Gán kiểu rõ ràng là khi lập trình viên **tự tay** chỉ định kiểu của một biến, tham số hàm hoặc giá trị trả về bằng cách sử dụng chú thích kiểu (ví dụ: `: number`). Suy luận kiểu là tự động."
      }
    }
  },
  {
    _id: "ts-f-044",
    difficulty: "fresher",
    tags: ["alias", "import"],
    content: {
      en: {
        title: "How can you create an alias when importing a module in TypeScript?",
        body: "Show the syntax to import `Component` from the `react` library and rename it to `RComponent`.",
        solution:
          "Use the `as` keyword during import. Example: `import { Component as RComponent } from 'react';`"
      },
      jp: {
        title: "TypeScriptでモジュールをインポートする際、エイリアスをどのように作成できますか？",
        body: "`react`ライブラリから`Component`をインポートし、それを`RComponent`に名前変更する構文を示してください。",
        solution:
          "インポート中に`as`キーワードを使用します。例: `import { Component as RComponent } from 'react';`"
      },
      vi: {
        title: "Làm thế nào để tạo một bí danh khi import một module trong TypeScript?",
        body: "Trình bày cú pháp để import `Component` từ thư viện `react` và đổi tên nó thành `RComponent`.",
        solution:
          "Sử dụng từ khóa `as` trong quá trình import. Ví dụ: `import { Component as RComponent } from 'react';`"
      }
    }
  },
  {
    _id: "ts-f-045",
    difficulty: "fresher",
    tags: ["function_overloads", "signatures"],
    content: {
      en: {
        title: "What are `Function Overloads` in TypeScript?",
        body: "What is the relationship between the overload signatures and the final function implementation?",
        solution:
          "`Function Overloads` allow a function to have multiple call signatures (different parameter types/counts) but only one implementation signature. The overload signatures are only for type checking; the implementation signature must be compatible with all overloads."
      },
      jp: {
        title: "TypeScriptにおける`Function Overloads`（関数オーバーロード）とは何ですか？",
        body: "オーバーロードのシグネチャと最終的な関数実装との関係は何ですか？",
        solution:
          "`Function Overloads`は、関数が複数の呼び出しシグネチャ（異なるパラメーターの型/数）を持つことを可能にしますが、実装シグネチャは1つだけです。オーバーロードのシグネチャは型チェックのためだけであり、実装シグネチャはすべてのオーバーロードと互換性がある必要があります。"
      },
      vi: {
        title: "`Function Overloads` (Nạp chồng hàm) trong TypeScript là gì?",
        body: "Mối quan hệ giữa các chữ ký nạp chồng (overload signatures) và phần triển khai hàm cuối cùng là gì?",
        solution:
          "`Function Overloads` cho phép một hàm có nhiều chữ ký gọi (các kiểu/số lượng tham số khác nhau) nhưng chỉ có một chữ ký triển khai. Các chữ ký nạp chồng chỉ dành cho việc kiểm tra kiểu; chữ ký triển khai phải tương thích với tất cả các nạp chồng."
      }
    }
  },
  {
    _id: "ts-f-046",
    difficulty: "fresher",
    tags: ["unknown", "safe_casting"],
    content: {
      en: {
        title: "Why is casting from `unknown` to another type considered safer than casting from `any`?",
        body: "What must you do to a variable of type `unknown` before you can access its properties?",
        solution:
          "Casting from `unknown` requires a **type check** or **assertion**, enforcing type safety. With `any`, you can directly access properties without checks, which can lead to runtime errors."
      },
      jp: {
        title: "`unknown`から別の型へのキャストが、`any`からのキャストよりも安全であると考えられるのはなぜですか？",
        body: "`unknown`型の変数にアクセスする前に何をする必要がありますか？",
        solution:
          "`unknown`からのキャストには、**型チェック**または**アサーション**が必要であり、型安全性が強制されます。`any`では、チェックなしで直接プロパティにアクセスでき、実行時エラーにつながる可能性があります。"
      },
      vi: {
        title: "Tại sao việc ép kiểu từ `unknown` sang một kiểu khác được coi là an toàn hơn so với ép kiểu từ `any`?",
        body: "Bạn phải làm gì với một biến kiểu `unknown` trước khi có thể truy cập các thuộc tính của nó?",
        solution:
          "Việc ép kiểu từ `unknown` yêu cầu một **kiểm tra kiểu** hoặc **khẳng định**, đảm bảo an toàn kiểu. Với `any`, bạn có thể truy cập trực tiếp các thuộc tính mà không cần kiểm tra, điều này có thể dẫn đến lỗi thời gian chạy."
      }
    }
  },
  {
    _id: "ts-f-047",
    difficulty: "fresher",
    tags: ["compilation", "watch_mode"],
    content: {
      en: {
        title: "What command is used to run the TypeScript compiler in 'watch' mode?",
        body: "Explain the purpose of 'watch' mode in development.",
        solution:
          "The command is `tsc --watch` or `tsc -w`. Watch mode automatically recompiles the TypeScript files whenever a change is saved, speeding up the development feedback loop."
      },
      jp: {
        title: "TypeScriptコンパイラを 'watch' モードで実行するために使用されるコマンドは何ですか？",
        body: "開発における 'watch' モードの目的を説明してください。",
        solution:
          "コマンドは`tsc --watch`または`tsc -w`です。Watchモードは、変更が保存されるたびにTypeScriptファイルを自動的に再コンパイルし、開発フィードバックループを高速化します。"
      },
      vi: {
        title: "Lệnh nào được sử dụng để chạy trình biên dịch TypeScript ở chế độ 'watch'?",
        body: "Giải thích mục đích của chế độ 'watch' trong quá trình phát triển.",
        solution:
          "Lệnh là `tsc --watch` hoặc `tsc -w`. Chế độ watch tự động biên dịch lại các file TypeScript bất cứ khi nào có thay đổi được lưu, giúp vòng lặp phản hồi phát triển nhanh hơn."
      }
    }
  },
  {
    _id: "ts-f-048",
    difficulty: "fresher",
    tags: ["aliasing", "modules"],
    content: {
      en: {
        title: "What is an `import * as name` declaration used for?",
        body: "Describe the effect of `import * as Logger from './logger';`",
        solution:
          "This syntax is used to import all exports from a module and place them into a single variable (called a **Module Object**) named `name`. In the example, all exports from `./logger` are accessed via `Logger.exportName`."
      },
      jp: {
        title: "`import * as name`宣言は何に使用されますか？",
        body: "`import * as Logger from './logger';`の効果を説明してください。",
        solution:
          "この構文は、モジュールからのすべてのエクスポートをインポートし、それらを`name`という名前の単一の変数（**モジュールオブジェクト**と呼ばれる）に配置するために使用されます。例では、`./logger`からのすべてのエクスポートは`Logger.exportName`を介してアクセスされます。"
      },
      vi: {
        title: "Khai báo `import * as name` được sử dụng để làm gì?",
        body: "Mô tả tác dụng của `import * as Logger from './logger';`",
        solution:
          "Cú pháp này được sử dụng để import tất cả các export từ một module và đặt chúng vào một biến duy nhất (được gọi là **Đối tượng Module**) có tên là `name`. Trong ví dụ, tất cả các export từ `./logger` được truy cập thông qua `Logger.exportName`."
      }
    }
  },
  {
    _id: "ts-f-049",
    difficulty: "fresher",
    tags: ["compiler_option", "outDir"],
    content: {
      en: {
        title: "What does the `outDir` compiler option in `tsconfig.json` specify?",
        body: "What is the benefit of using `outDir`?",
        solution:
          "`outDir` specifies the output directory for the compiled JavaScript files. The benefit is keeping the source TypeScript files separate from the generated JavaScript files, making project structure cleaner."
      },
      jp: {
        title: "`tsconfig.json`の`outDir`コンパイラオプションは何を指定しますか？",
        body: "`outDir`を使用する利点は何ですか？",
        solution:
          "`outDir`は、コンパイルされたJavaScriptファイルの出力ディレクトリを指定します。利点は、ソースのTypeScriptファイルを生成されたJavaScriptファイルから分離し、プロジェクト構造をよりきれいに保つことです。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `outDir` trong `tsconfig.json` chỉ định điều gì?",
        body: "Lợi ích của việc sử dụng `outDir` là gì?",
        solution:
          "`outDir` chỉ định thư mục đầu ra cho các file JavaScript đã được biên dịch. Lợi ích là giữ các file TypeScript nguồn tách biệt khỏi các file JavaScript được tạo ra, làm cho cấu trúc dự án sạch sẽ hơn."
      }
    }
  },
  {
    _id: "ts-f-050",
    difficulty: "fresher",
    tags: ["data_types", "symbol"],
    content: {
      en: {
        title: "What is the `symbol` primitive type in TypeScript used for?",
        body: "Briefly explain the nature of values of type `symbol`.",
        solution:
          "The `symbol` type represents the Symbol primitive value in JavaScript, which is a unique and immutable data type primarily used to create unique object property keys."
      },
      jp: {
        title: "TypeScriptの`symbol`プリミティブ型は何に使用されますか？",
        body: "`symbol`型の値の性質を簡単に説明してください。",
        solution:
          "`symbol`型は、JavaScriptのSymbolプリミティブ値を表し、主に一意のオブジェクトプロパティキーを作成するために使用される一意で不変のデータ型です。"
      },
      vi: {
        title: "Kiểu nguyên thủy `symbol` trong TypeScript được sử dụng để làm gì?",
        body: "Giải thích ngắn gọn bản chất của các giá trị kiểu `symbol`.",
        solution:
          "Kiểu `symbol` đại diện cho giá trị nguyên thủy Symbol trong JavaScript, là một kiểu dữ liệu độc nhất và bất biến, chủ yếu được sử dụng để tạo các khóa thuộc tính đối tượng duy nhất."
      }
    }
  }
];
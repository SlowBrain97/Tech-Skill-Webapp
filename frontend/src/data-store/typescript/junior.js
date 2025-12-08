export const typescript_junior_questions = [
  {
    _id: "ts-j-001",
    difficulty: "junior",
    tags: ["generics", "functions"],
    content: {
      en: {
        title: "How do you write a generic function that returns the input value?",
        body: "Define a function 'identity' that takes an argument of type T and returns it, maintaining the original type.",
        solution:
          "function identity<T>(arg: T): T { return arg; } Generics allow the function to work with any type while preserving type information."
      },
      jp: {
        title: "入力値を返すジェネリック関数をどのように記述しますか？",
        body: "T型の引数を受け取り、元の型を維持したままそれを返す関数 'identity' を定義してください。",
        solution:
          "function identity<T>(arg: T): T { return arg; } ジェネリクスにより、関数は型情報を保持しながら任意の型で動作できます。"
      },
      vi: {
        title: "Làm thế nào để viết một hàm generic trả về giá trị đầu vào?",
        body: "Định nghĩa một hàm 'identity' nhận một đối số kiểu T và trả về nó, duy trì kiểu gốc.",
        solution:
          "function identity<T>(arg: T): T { return arg; } Generics cho phép hàm hoạt động với bất kỳ kiểu nào trong khi vẫn giữ lại thông tin kiểu."
      }
    }
  },
  {
    _id: "ts-j-002",
    difficulty: "junior",
    tags: ["generics", "constraints"],
    content: {
      en: {
        title: "How do you add constraints to a generic type?",
        body: "Show the syntax for a generic type T that must have a 'length' property (e.g., be a string or array).",
        solution:
          "Use the 'extends' keyword: function logLength<T extends { length: number }>(arg: T): void { console.log(arg.length); }"
      },
      jp: {
        title: "ジェネリック型に制約を追加するにはどうしますか？",
        body: "'length' プロパティを持つ必要があるジェネリック型T（例：文字列または配列）の構文を示してください。",
        solution:
          "'extends' キーワードを使用します: function logLength<T extends { length: number }>(arg: T): void { console.log(arg.length); }"
      },
      vi: {
        title: "Làm thế nào để thêm ràng buộc (constraints) vào một kiểu generic?",
        body: "Trình bày cú pháp cho một kiểu generic T mà bắt buộc phải có thuộc tính 'length' (ví dụ: là chuỗi hoặc mảng).",
        solution:
          "Sử dụng từ khóa 'extends': function logLength<T extends { length: number }>(arg: T): void { console.log(arg.length); }"
      }
    }
  },
  {
    _id: "ts-j-003",
    difficulty: "junior",
    tags: ["interface", "inheritance"],
    content: {
      en: {
        title: "How does one interface inherit from another?",
        body: "Define an interface 'Circle' that inherits all properties from an interface 'Shape'.",
        solution:
          "Use the 'extends' keyword. interface Shape { color: string; } interface Circle extends Shape { radius: number; }"
      },
      jp: {
        title: "あるインターフェースが別のインターフェースからどのように継承しますか？",
        body: "インターフェース 'Shape' のすべてのプロパティを継承するインターフェース 'Circle' を定義してください。",
        solution:
          "'extends' キーワードを使用します。 interface Shape { color: string; } interface Circle extends Shape { radius: number; }"
      },
      vi: {
        title: "Làm thế nào để một interface kế thừa từ một interface khác?",
        body: "Định nghĩa một interface 'Circle' kế thừa tất cả các thuộc tính từ một interface 'Shape'.",
        solution:
          "Sử dụng từ khóa 'extends'. interface Shape { color: string; } interface Circle extends Shape { radius: number; }"
      }
    }
  },
  {
    _id: "ts-j-004",
    difficulty: "junior",
    tags: ["type_alias", "interface", "difference"],
    content: {
      en: {
        title: "What key feature is unique to Type Aliases compared to Interfaces?",
        body: "Name one scenario where you must use a Type Alias instead of an Interface.",
        solution:
          "Type Aliases can be used to name primitive types, union types, intersection types, and tuples. You MUST use a Type Alias when defining a Union or Intersection type (e.g., type ID = number | string;)."
      },
      jp: {
        title: "インターフェースと比較して、Type Aliasに固有の主要な機能は何ですか？",
        body: "インターフェースの代わりにType Aliasを使用しなければならないシナリオを1つ挙げてください。",
        solution:
          "Type Aliasesは、プリミティブ型、共用型、交差型、タプルに名前を付けるために使用できます。共用型または交差型を定義する場合、Type Aliasを**使用しなければなりません** (例: type ID = number | string;)。"
      },
      vi: {
        title: "Tính năng quan trọng nào là độc quyền của Type Alias so với Interfaces?",
        body: "Nêu một kịch bản mà bạn bắt buộc phải sử dụng Type Alias thay vì Interface.",
        solution:
          "Type Aliases có thể được sử dụng để đặt tên cho các kiểu nguyên thủy, kiểu hợp nhất (union types), kiểu giao (intersection types) và tuples. Bạn **phải** sử dụng Type Alias khi định nghĩa kiểu Hợp nhất (Union) hoặc Giao (Intersection) (ví dụ: type ID = number | string;)."
      }
    }
  },
  {
    _id: "ts-j-005",
    difficulty: "junior",
    tags: ["intersection_type", "combining"],
    content: {
      en: {
        title: "What is an `Intersection Type`?",
        body: "Show the syntax for a type 'AdminUser' that combines all properties of 'User' and 'Permissions'.",
        solution:
          "An Intersection Type combines multiple types into one, meaning an object must satisfy ALL combined types. Syntax: `type AdminUser = User & Permissions;`"
      },
      jp: {
        title: "`Intersection Type`（交差型）とは何ですか？",
        body: "'User' と 'Permissions' のすべてのプロパティを組み合わせた型 'AdminUser' の構文を示してください。",
        solution:
          "Intersection Typeは複数の型を1つに結合し、オブジェクトが結合された**すべて**の型を満たす必要があることを意味します。構文: `type AdminUser = User & Permissions;`"
      },
      vi: {
        title: "`Intersection Type` (Kiểu giao) là gì?",
        body: "Trình bày cú pháp cho một kiểu 'AdminUser' kết hợp tất cả các thuộc tính của 'User' và 'Permissions'.",
        solution:
          "Intersection Type kết hợp nhiều kiểu thành một, có nghĩa là một đối tượng phải thỏa mãn **TẤT CẢ** các kiểu được kết hợp. Cú pháp: `type AdminUser = User & Permissions;`"
      }
    }
  },
  {
    _id: "ts-j-006",
    difficulty: "junior",
    tags: ["utility_types", "partial"],
    content: {
      en: {
        title: "What is the purpose of the `Partial<T>` utility type?",
        body: "If `T` has required properties, what does `Partial<T>` do to them?",
        solution:
          "The `Partial<T>` utility type constructs a type with all properties of `T` set to optional. It's often used when updating an object, where not all fields are required."
      },
      jp: {
        title: "`Partial<T>`ユーティリティ型の目的は何ですか？",
        body: "`T`が必須プロパティを持っている場合、`Partial<T>`はそれらをどうしますか？",
        solution:
          "`Partial<T>`ユーティリティ型は、`T`のすべてのプロパティがオプションに設定された型を構築します。すべてのフィールドが必須ではないオブジェクトを更新するときによく使用されます。"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích `Partial<T>` là gì?",
        body: "Nếu `T` có các thuộc tính bắt buộc, `Partial<T>` làm gì với chúng?",
        solution:
          "Kiểu tiện ích `Partial<T>` xây dựng một kiểu mà tất cả các thuộc tính của `T` được đặt thành tùy chọn (optional). Nó thường được sử dụng khi cập nhật một đối tượng, nơi không phải tất cả các trường đều bắt buộc."
      }
    }
  },
  {
    _id: "ts-j-007",
    difficulty: "junior",
    tags: ["utility_types", "readonly"],
    content: {
      en: {
        title: "What is the purpose of the `Readonly<T>` utility type?",
        body: "If you apply `Readonly<T>` to an interface, can you modify the property values of an object of that type?",
        solution:
          "The `Readonly<T>` utility type constructs a type with all properties of `T` set to `readonly`. You cannot reassign the property values of an object of that type after initialization."
      },
      jp: {
        title: "`Readonly<T>`ユーティリティ型の目的は何ですか？",
        body: "インターフェースに`Readonly<T>`を適用した場合、その型のオブジェクトのプロパティ値を変更できますか？",
        solution:
          "`Readonly<T>`ユーティリティ型は、`T`のすべてのプロパティが`readonly`に設定された型を構築します。初期化後、その型のオブジェクトのプロパティ値を再割り当てすることはできません。"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích `Readonly<T>` là gì?",
        body: "Nếu bạn áp dụng `Readonly<T>` cho một interface, bạn có thể sửa đổi giá trị thuộc tính của một đối tượng thuộc kiểu đó không?",
        solution:
          "Kiểu tiện ích `Readonly<T>` xây dựng một kiểu mà tất cả các thuộc tính của `T` được đặt thành `readonly`. Bạn không thể gán lại giá trị thuộc tính của một đối tượng thuộc kiểu đó sau khi khởi tạo."
      }
    }
  },
  {
    _id: "ts-j-008",
    difficulty: "junior",
    tags: ["utility_types", "pick"],
    content: {
      en: {
        title: "How do you select specific properties from an existing type?",
        body: "Use a utility type to create a new type `UserPreview` containing only the `id` and `name` properties from an existing type `User`.",
        solution:
          "Use the `Pick<T, K>` utility type. Syntax: `type UserPreview = Pick<User, 'id' | 'name'>;`"
      },
      jp: {
        title: "既存の型から特定のプロパティを選択するにはどうしますか？",
        body: "ユーティリティ型を使用して、既存の型`User`から`id`と`name`プロパティのみを含む新しい型`UserPreview`を作成してください。",
        solution:
          "`Pick<T, K>`ユーティリティ型を使用します。構文: `type UserPreview = Pick<User, 'id' | 'name'>;`"
      },
      vi: {
        title: "Làm thế nào để chọn các thuộc tính cụ thể từ một kiểu hiện có?",
        body: "Sử dụng một kiểu tiện ích để tạo một kiểu mới `UserPreview` chỉ chứa các thuộc tính `id` và `name` từ một kiểu `User` hiện có.",
        solution:
          "Sử dụng kiểu tiện ích `Pick<T, K>`. Cú pháp: `type UserPreview = Pick<User, 'id' | 'name'>;`"
      }
    }
  },
  {
    _id: "ts-j-009",
    difficulty: "junior",
    tags: ["type_guards", "custom"],
    content: {
      en: {
        title: "How do you create a custom **User-Defined Type Guard**?",
        body: "What special syntax must the type guard function return for TypeScript to narrow the type?",
        solution:
          "The function must return a **Type Predicate** in the form of `parameterName is TypeName`. Example: `function isString(x: any): x is string { return typeof x === 'string'; }`"
      },
      jp: {
        title: "カスタムの**ユーザー定義型ガード**をどのように作成しますか？",
        body: "TypeScriptが型を絞り込むために、型ガード関数はどのような特別な構文を返す必要がありますか？",
        solution:
          "関数は、`parameterName is TypeName`の形式の**型述語**を返す必要があります。例: `function isString(x: any): x is string { return typeof x === 'string'; }`"
      },
      vi: {
        title: "Làm thế nào để tạo một **Type Guard do người dùng định nghĩa** (Custom User-Defined Type Guard)?",
        body: "Hàm type guard phải trả về cú pháp đặc biệt nào để TypeScript thu hẹp kiểu?",
        solution:
          "Hàm phải trả về một **Vị từ kiểu** (Type Predicate) dưới dạng `parameterName is TypeName`. Ví dụ: `function isString(x: any): x is string { return typeof x === 'string'; }`"
      }
    }
  },
  {
    _id: "ts-j-010",
    difficulty: "junior",
    tags: ["enum", "const"],
    content: {
      en: {
        title: "What is a `const enum`, and what is its main advantage?",
        body: "How does a `const enum` differ from a regular `enum` in the resulting JavaScript code?",
        solution:
          "A `const enum` is completely removed during compilation (tree-shaken). Its values are inlined directly into the usage site in the output JavaScript, preventing the creation of a runtime object and resulting in smaller, faster code."
      },
      jp: {
        title: "`const enum`とは何ですか、またその主な利点は何ですか？",
        body: "結果として生成されるJavaScriptコードにおいて、`const enum`は通常の`enum`とどのように異なりますか？",
        solution:
          "`const enum`はコンパイル中に完全に削除されます（ツリーシェイク）。その値は出力JavaScriptの使用箇所に直接インライン化され、実行時オブジェクトの作成を防ぎ、より小さく、より高速なコードになります。"
      },
      vi: {
        title: "`const enum` là gì và lợi thế chính của nó là gì?",
        body: "`const enum` khác với `enum` thông thường như thế nào trong mã JavaScript được tạo ra?",
        solution:
          "`const enum` bị loại bỏ hoàn toàn trong quá trình biên dịch (tree-shaken). Các giá trị của nó được nội tuyến (inlined) trực tiếp vào nơi sử dụng trong JavaScript đầu ra, ngăn chặn việc tạo ra một đối tượng runtime và giúp mã nguồn nhỏ hơn, nhanh hơn."
      }
    }
  },
  {
    _id: "ts-j-011",
    difficulty: "junior",
    tags: ["namespaces", "module_systems"],
    content: {
      en: {
        title: "What are `Namespaces` and why are they discouraged in modern TypeScript?",
        body: "What is the recommended alternative to Namespaces for structuring code?",
        solution:
          "Namespaces (formerly Internal Modules) group related code, but they add variables to the global scope or use the old `/// <reference>` syntax. They are discouraged in favor of **ES Modules** (using `import`/`export`), which provide better dependency management and tool support."
      },
      jp: {
        title: "`Namespaces`とは何ですか、またなぜ最新のTypeScriptでは非推奨なのですか？",
        body: "コードを構造化するためのNamespacesの推奨される代替手段は何ですか？",
        solution:
          "Namespaces（以前は内部モジュール）は関連するコードをグループ化しますが、グローバルスコープに変数を追加したり、古い `/// <reference>` 構文を使用したりします。より良い依存関係管理とツールサポートを提供する**ESモジュール**（`import`/`export`を使用）が推奨される代替手段です。"
      },
      vi: {
        title: "`Namespaces` là gì và tại sao chúng bị khuyến cáo không nên dùng trong TypeScript hiện đại?",
        body: "Giải pháp thay thế được đề xuất cho Namespaces để cấu trúc mã là gì?",
        solution:
          "Namespaces (trước đây là Internal Modules) nhóm các mã liên quan lại với nhau, nhưng chúng thêm biến vào phạm vi toàn cục hoặc sử dụng cú pháp cũ `/// <reference>`. Chúng bị khuyến cáo không nên dùng để ưu tiên cho **ES Modules** (sử dụng `import`/`export`), vốn cung cấp khả năng quản lý dependency và hỗ trợ công cụ tốt hơn."
      }
    }
  },
  {
    _id: "ts-j-012",
    difficulty: "junior",
    tags: ["declaration_merging", "interface"],
    content: {
      en: {
        title: "Explain `Declaration Merging` in the context of Interfaces.",
        body: "If you define the same interface `Settings` in two different places, what is the resulting interface?",
        solution:
          "Declaration Merging is a feature where TypeScript merges two or more declarations with the same name (e.g., interfaces) into a single, combined declaration. The resulting `Settings` interface will contain all properties defined across both declarations."
      },
      jp: {
        title: "インターフェースの文脈における`Declaration Merging`（宣言マージ）を説明してください。",
        body: "同じインターフェース`Settings`を2つの異なる場所で定義した場合、結果のインターフェースはどうなりますか？",
        solution:
          "Declaration Mergingは、同じ名前の2つ以上の宣言（例：インターフェース）を単一の結合された宣言にマージするTypeScriptの機能です。結果の`Settings`インターフェースには、両方の宣言で定義されたすべてのプロパティが含まれます。"
      },
      vi: {
        title: "Giải thích `Declaration Merging` (Hợp nhất khai báo) trong ngữ cảnh của Interfaces.",
        body: "Nếu bạn định nghĩa cùng một interface `Settings` ở hai nơi khác nhau, interface kết quả sẽ là gì?",
        solution:
          "Declaration Merging là một tính năng mà TypeScript hợp nhất hai hoặc nhiều khai báo có cùng tên (ví dụ: interfaces) thành một khai báo duy nhất, kết hợp. Interface `Settings` kết quả sẽ chứa tất cả các thuộc tính được định nghĩa trên cả hai khai báo."
      }
    }
  },
  {
    _id: "ts-j-013",
    difficulty: "junior",
    tags: ["type_assertion", "vs_casting"],
    content: {
      en: {
        title: "Why does TypeScript use the term 'Type Assertion' instead of 'Type Casting'?",
        body: "Does a Type Assertion create a runtime conversion of the data type?",
        solution:
          "TypeScript uses 'Type Assertion' because it's a compile-time instruction to the compiler and **does not** perform any runtime type checking or data conversion (casting), unlike in languages like Java or C#."
      },
      jp: {
        title: "TypeScriptが 'Type Casting' の代わりに 'Type Assertion' という用語を使用するのはなぜですか？",
        body: "Type Assertionは、データ型の実行時変換を作成しますか？",
        solution:
          "TypeScriptが 'Type Assertion' を使用するのは、JavaやC#のような言語とは異なり、コンパイラへのコンパイル時命令であり、実行時の型チェックやデータ変換（キャスティング）を**実行しない**ためです。"
      },
      vi: {
        title: "Tại sao TypeScript sử dụng thuật ngữ 'Type Assertion' thay vì 'Type Casting'?",
        body: "Type Assertion có tạo ra sự chuyển đổi kiểu dữ liệu tại thời điểm chạy (runtime conversion) không?",
        solution:
          "TypeScript sử dụng 'Type Assertion' vì đó là một lệnh thời điểm biên dịch (compile-time instruction) gửi đến trình biên dịch và **không** thực hiện bất kỳ kiểm tra kiểu hay chuyển đổi dữ liệu (casting) nào tại thời điểm chạy, khác với các ngôn ngữ như Java hay C#."
      }
    }
  },
  {
    _id: "ts-j-014",
    difficulty: "junior",
    tags: ["config", "rootDir"],
    content: {
      en: {
        title: "What is the function of the `rootDir` compiler option?",
        body: "If `rootDir` is set, where must all non-declaration input files reside?",
        solution:
          "`rootDir` specifies the root directory of all source files in the project. It ensures that all non-declaration input files are contained within this directory, helping to maintain a consistent project structure and output directory."
      },
      jp: {
        title: "`rootDir`コンパイラオプションの機能は何ですか？",
        body: "`rootDir`が設定されている場合、すべての非宣言入力ファイルはどこに存在する必要がありますか？",
        solution:
          "`rootDir`は、プロジェクト内のすべてのソースファイルのルートディレクトリを指定します。これにより、すべての非宣言入力ファイルがこのディレクトリ内に含まれていることが保証され、一貫したプロジェクト構造と出力ディレクトリの維持に役立ちます。"
      },
      vi: {
        title: "Chức năng của tùy chọn trình biên dịch `rootDir` là gì?",
        body: "Nếu `rootDir` được đặt, tất cả các file đầu vào không phải là file khai báo phải nằm ở đâu?",
        solution:
          "`rootDir` chỉ định thư mục gốc của tất cả các file nguồn trong dự án. Nó đảm bảo rằng tất cả các file đầu vào không phải là file khai báo đều nằm trong thư mục này, giúp duy trì cấu trúc dự án và thư mục đầu ra nhất quán."
      }
    }
  },
  {
    _id: "ts-j-015",
    difficulty: "junior",
    tags: ["literal_types", "enum_alternative"],
    content: {
      en: {
        title: "Why are `string literal types` often preferred over string enums by modern TypeScript developers?",
        body: "What is the primary benefit of using string literals (with union types) instead of string enums?",
        solution:
          "String literal types (e.g., `'a' | 'b'`) are **tree-shakable** and only require an `import` if they are in a separate file. String enums create additional code/objects at runtime and are generally larger and harder to optimize."
      },
      jp: {
        title: "最新のTypeScript開発者によって、`string literal types`がstring enumsよりも好まれることが多いのはなぜですか？",
        body: "string enumsの代わりに文字列リテラル（共用型と組み合わせて）を使用する主な利点は何ですか？",
        solution:
          "文字列リテラル型（例: `'a' | 'b'`）は**ツリーシェイカブル**であり、別のファイルにある場合でも`import`のみが必要です。String enumsは実行時に追加のコード/オブジェクトを作成し、一般的に大きく、最適化が困難です。"
      },
      vi: {
        title: "Tại sao `kiểu chuỗi cố định` (string literal types) thường được các nhà phát triển TypeScript hiện đại ưa chuộng hơn kiểu enum chuỗi?",
        body: "Lợi ích chính của việc sử dụng các kiểu chuỗi cố định (kết hợp với union types) thay vì enum chuỗi là gì?",
        solution:
          "Các kiểu chuỗi cố định (ví dụ: `'a' | 'b'`) có thể được **tree-shake** và chỉ yêu cầu `import` nếu chúng nằm trong một file riêng biệt. Enum chuỗi tạo ra mã/đối tượng bổ sung tại thời điểm chạy và thường lớn hơn và khó tối ưu hóa hơn."
      }
    }
  },
  {
    _id: "ts-j-016",
    difficulty: "junior",
    tags: ["functions", "this_type"],
    content: {
      en: {
        title: "How can you explicitly specify the type of `this` within a function or method?",
        body: "Show the syntax for a function `onClick` that requires `this` to be of type `Button`.",
        solution:
          "The `this` type is specified as the very first parameter (it's a fake parameter that is not actually passed). Example: `function onClick(this: Button, event: Event): void {}`"
      },
      jp: {
        title: "関数またはメソッド内で`this`の型を明示的に指定するにはどうすればよいですか？",
        body: "`this`が`Button`型である必要がある関数`onClick`の構文を示してください。",
        solution:
          "`this`型は最初のパラメーターとして指定されます（実際には渡されない偽のパラメーターです）。例: `function onClick(this: Button, event: Event): void {}`"
      },
      vi: {
        title: "Làm thế nào để chỉ định rõ ràng kiểu của `this` bên trong một hàm hoặc phương thức?",
        body: "Trình bày cú pháp cho một hàm `onClick` yêu cầu `this` phải có kiểu là `Button`.",
        solution:
          "Kiểu `this` được chỉ định là tham số đầu tiên (đó là một tham số giả không thực sự được truyền). Ví dụ: `function onClick(this: Button, event: Event): void {}`"
      }
    }
  },
  {
    _id: "ts-j-017",
    difficulty: "junior",
    tags: ["type_guards", "in"],
    content: {
      en: {
        title: "When is the `in` operator used as a Type Guard?",
        body: "Explain how `if ('prop' in obj)` narrows down the type of `obj`.",
        solution:
          "The `in` operator is used to check if an object has a certain property. If the check passes, TypeScript narrows the type of `obj` to include any type in a union that *might* have that property."
      },
      jp: {
        title: "`in`演算子はType Guardとしていつ使用されますか？",
        body: "`if ('prop' in obj)`が`obj`の型をどのように絞り込むかを説明してください。",
        solution:
          "`in`演算子は、オブジェクトが特定のプロパティを持っているかどうかをチェックするために使用されます。チェックが成功した場合、TypeScriptは`obj`の型を、そのプロパティを**持つ可能性のある**共用体内の任意の型を含むように絞り込みます。"
      },
      vi: {
        title: "Toán tử `in` được sử dụng như một Type Guard khi nào?",
        body: "Giải thích cách `if ('prop' in obj)` thu hẹp kiểu của `obj`.",
        solution:
          "Toán tử `in` được sử dụng để kiểm tra xem một đối tượng có thuộc tính nhất định hay không. Nếu kiểm tra thành công, TypeScript sẽ thu hẹp kiểu của `obj` để bao gồm bất kỳ kiểu nào trong một union **có thể** có thuộc tính đó."
      }
    }
  },
  {
    _id: "ts-j-018",
    difficulty: "junior",
    tags: ["functions", "overloading"],
    content: {
      en: {
        title: "What is the purpose of the **implementation signature** in function overloading?",
        body: "What types of parameters and return value must the implementation signature use?",
        solution:
          "The implementation signature is the *actual* function body. It must have parameter types and a return type that are compatible with **all** of the preceding overload signatures, often using union types or `any` (though union types are preferred)."
      },
      jp: {
        title: "関数オーバーロードにおける**実装シグネチャ**の目的は何ですか？",
        body: "実装シグネチャはどのような型のパラメーターと戻り値を使用する必要がありますか？",
        solution:
          "実装シグネチャは*実際*の関数本体です。それは、先行する**すべて**のオーバーロードシグネチャと互換性のあるパラメーター型と戻り値の型を持たなければなりません（多くの場合、共用型または`any`を使用しますが、共用型が好まれます）。"
      },
      vi: {
        title: "Mục đích của **chữ ký triển khai** (implementation signature) trong nạp chồng hàm là gì?",
        body: "Chữ ký triển khai phải sử dụng các kiểu tham số và giá trị trả về như thế nào?",
        solution:
          "Chữ ký triển khai là phần thân hàm *thực tế*. Nó phải có các kiểu tham số và kiểu trả về tương thích với **tất cả** các chữ ký nạp chồng đứng trước đó, thường sử dụng kiểu hợp nhất (union types) hoặc `any` (mặc dù kiểu hợp nhất được ưu tiên hơn)."
      }
    }
  },
  {
    _id: "ts-j-019",
    difficulty: "junior",
    tags: ["decorators", "usage"],
    content: {
      en: {
        title: "When are Decorators executed in the TypeScript lifecycle?",
        body: "Are decorators run at compile-time or runtime?",
        solution:
          "Decorators are executed at **runtime** when the decorated declaration is encountered. They are functions that are called with information about the declaration they decorate."
      },
      jp: {
        title: "DecoratorはTypeScriptのライフサイクルにおいていつ実行されますか？",
        body: "デコレーターはコンパイル時と実行時のどちらで実行されますか？",
        solution:
          "Decoratorは、装飾された宣言に遭遇したときに**実行時**に実行されます。それらは、装飾する宣言に関する情報とともに呼び出される関数です。"
      },
      vi: {
        title: "Decorators được thực thi khi nào trong vòng đời của TypeScript?",
        body: "Decorators chạy ở thời điểm biên dịch (compile-time) hay thời điểm chạy (runtime)?",
        solution:
          "Decorators được thực thi tại **thời điểm chạy (runtime)** khi khai báo được trang trí được gặp. Chúng là các hàm được gọi với thông tin về khai báo mà chúng trang trí."
      }
    }
  },
  {
    _id: "ts-j-020",
    difficulty: "junior",
    tags: ["keyof", "operator"],
    content: {
      en: {
        title: "What does the `keyof` operator return?",
        body: "If `interface User { id: number; name: string; }`, what type does `keyof User` result in?",
        solution:
          "The `keyof` operator takes an object type and returns a **union type** of its string or numeric literal property names. Result: `'id' | 'name'`"
      },
      jp: {
        title: "`keyof`演算子は何を返しますか？",
        body: "`interface User { id: number; name: string; }` の場合、`keyof User`はどのような型になりますか？",
        solution:
          "`keyof`演算子はオブジェクト型を受け取り、その文字列または数値リテラルプロパティ名の**共用型**を返します。結果: `'id' | 'name'`"
      },
      vi: {
        title: "Toán tử `keyof` trả về gì?",
        body: "Nếu `interface User { id: number; name: string; }`, `keyof User` sẽ cho ra kiểu gì?",
        solution:
          "Toán tử `keyof` nhận một kiểu đối tượng và trả về một **kiểu hợp nhất** (union type) của các tên thuộc tính chuỗi hoặc số cố định của nó. Kết quả: `'id' | 'name'`"
      }
    }
  },
  {
    _id: "ts-j-021",
    difficulty: "junior",
    tags: ["typeof", "type_system"],
    content: {
      en: {
        title: "How is the `typeof` operator used in the TypeScript type system?",
        body: "What is the purpose of `type T = typeof someValue;`?",
        solution:
          "When used in the type position, `typeof` is a type operator that extracts the TypeScript type of a variable or property. It allows you to reuse the type of an existing variable without having to explicitly define it."
      },
      jp: {
        title: "`typeof`演算子はTypeScriptの型システムでどのように使用されますか？",
        body: "`type T = typeof someValue;`の目的は何ですか？",
        solution:
          "型位置で使用される場合、`typeof`は変数またはプロパティのTypeScript型を抽出する型演算子です。これにより、既存の変数の型を明示的に定義することなく再利用できます。"
      },
      vi: {
        title: "Toán tử `typeof` được sử dụng như thế nào trong hệ thống kiểu TypeScript?",
        body: "Mục đích của `type T = typeof someValue;` là gì?",
        solution:
          "Khi được sử dụng ở vị trí kiểu, `typeof` là một toán tử kiểu dùng để trích xuất kiểu TypeScript của một biến hoặc thuộc tính. Nó cho phép bạn tái sử dụng kiểu của một biến hiện có mà không cần phải định nghĩa rõ ràng nó."
      }
    }
  },
  {
    _id: "ts-j-022",
    difficulty: "junior",
    tags: ["index_type", "lookup"],
    content: {
      en: {
        title: "How do you define a type that is a property's value type?",
        body: "If `interface User { id: number; name: string; }`, how do you extract the type of the `name` property?",
        solution:
          "Use an **Indexed Access Type** (or Lookup Type). Syntax: `type NameType = User['name'];` which results in `string`."
      },
      jp: {
        title: "プロパティの値の型である型をどのように定義しますか？",
        body: "`interface User { id: number; name: string; }` の場合、`name`プロパティの型をどのように抽出しますか？",
        solution:
          "**Indexed Access Type**（または Lookup Type）を使用します。構文: `type NameType = User['name'];` で、結果は`string`になります。"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu là kiểu giá trị của một thuộc tính?",
        body: "Nếu `interface User { id: number; name: string; }`, làm thế nào để trích xuất kiểu của thuộc tính `name`?",
        solution:
          "Sử dụng **Kiểu truy cập theo chỉ mục** (Indexed Access Type hay Lookup Type). Cú pháp: `type NameType = User['name'];` kết quả là `string`."
      }
    }
  },
  {
    _id: "ts-j-023",
    difficulty: "junior",
    tags: ["utility_types", "omit"],
    content: {
      en: {
        title: "What is the function of the `Omit<T, K>` utility type?",
        body: "Show the syntax to create a type `UserNoID` that removes the `id` property from type `User`.",
        solution:
          "`Omit<T, K>` constructs a type by picking all properties from `T` and then removing `K` (the properties to omit). Syntax: `type UserNoID = Omit<User, 'id'>;`"
      },
      jp: {
        title: "`Omit<T, K>`ユーティリティ型の機能は何ですか？",
        body: "型`User`から`id`プロパティを削除した型`UserNoID`を作成する構文を示してください。",
        solution:
          "`Omit<T, K>`は、`T`からすべてのプロパティを選択し、次に`K`（省略するプロパティ）を削除することによって型を構築します。構文: `type UserNoID = Omit<User, 'id'>;`"
      },
      vi: {
        title: "Chức năng của kiểu tiện ích `Omit<T, K>` là gì?",
        body: "Trình bày cú pháp để tạo một kiểu `UserNoID` loại bỏ thuộc tính `id` khỏi kiểu `User`.",
        solution:
          "`Omit<T, K>` xây dựng một kiểu bằng cách chọn tất cả các thuộc tính từ `T` và sau đó loại bỏ `K` (các thuộc tính cần bỏ qua). Cú pháp: `type UserNoID = Omit<User, 'id'>;`"
      }
    }
  },
  {
    _id: "ts-j-024",
    difficulty: "junior",
    tags: ["utility_types", "record"],
    content: {
      en: {
        title: "What is the purpose of the `Record<K, T>` utility type?",
        body: "Show the syntax for a type `CountriesPopulation` where keys are country codes (string literals) and values are numbers.",
        solution:
          "The `Record<K, T>` utility type constructs an object type with property keys of type `K` and property values of type `T`. Syntax: `type CountryCode = 'VN' | 'US'; type CountriesPopulation = Record<CountryCode, number>;`"
      },
      jp: {
        title: "`Record<K, T>`ユーティリティ型の目的は何ですか？",
        body: "キーが国コード（文字列リテラル）で、値が数値である型`CountriesPopulation`の構文を示してください。",
        solution:
          "`Record<K, T>`ユーティリティ型は、`K`型のプロパティキーと`T`型のプロパティ値を持つオブジェクト型を構築します。構文: `type CountryCode = 'VN' | 'US'; type CountriesPopulation = Record<CountryCode, number>;`"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích `Record<K, T>` là gì?",
        body: "Trình bày cú pháp cho một kiểu `CountriesPopulation` trong đó các khóa là mã quốc gia (kiểu chuỗi cố định) và các giá trị là số.",
        solution:
          "Kiểu tiện ích `Record<K, T>` xây dựng một kiểu đối tượng với các khóa thuộc tính có kiểu `K` và giá trị thuộc tính có kiểu `T`. Cú pháp: `type CountryCode = 'VN' | 'US'; type CountriesPopulation = Record<CountryCode, number>;`"
      }
    }
  },
  {
    _id: "ts-j-025",
    difficulty: "junior",
    tags: ["config", "esModuleInterop"],
    content: {
      en: {
        title: "What is the purpose of the `esModuleInterop` compiler option?",
        body: "Why is setting `esModuleInterop: true` generally recommended in modern projects?",
        solution:
          "`esModuleInterop: true` is for compatibility between CommonJS/AMD modules and ES Modules. It allows you to use the standard ES module `import defaultExport from 'module';` syntax even if the imported module only has a `module.exports` (CommonJS default export)."
      },
      jp: {
        title: "`esModuleInterop`コンパイラオプションの目的は何ですか？",
        body: "最新のプロジェクトで`esModuleInterop: true`を設定することが一般的に推奨されるのはなぜですか？",
        solution:
          "`esModuleInterop: true`は、CommonJS/AMDモジュールとESモジュールの互換性のためのものです。これにより、インポートされたモジュールが`module.exports`（CommonJSのデフォルトエクスポート）のみを持っている場合でも、標準のESモジュール構文`import defaultExport from 'module';`を使用できます。"
      },
      vi: {
        title: "Mục đích của tùy chọn trình biên dịch `esModuleInterop` là gì?",
        body: "Tại sao việc đặt `esModuleInterop: true` thường được khuyến nghị trong các dự án hiện đại?",
        solution:
          "`esModuleInterop: true` dùng để tương thích giữa các module CommonJS/AMD và ES Modules. Nó cho phép bạn sử dụng cú pháp module ES tiêu chuẩn `import defaultExport from 'module';` ngay cả khi module được import chỉ có `module.exports` (export mặc định của CommonJS)."
      }
    }
  },
  {
    _id: "ts-j-026",
    difficulty: "junior",
    tags: ["declaration_files", "ambient"],
    content: {
      en: {
        title: "What is an **Ambient Declaration** in a `.d.ts` file?",
        body: "What keyword is used to declare variables, modules, or classes that exist outside of the current file's scope (e.g., global libraries)?",
        solution:
          "An Ambient Declaration is used to describe the shape of existing JavaScript code. They are defined using the `declare` keyword. This tells TypeScript 'this variable/class exists somewhere else'."
      },
      jp: {
        title: "`.d.ts`ファイルにおける**Ambient Declaration**（アンビエント宣言）とは何ですか？",
        body: "現在のファイルのスコープ外に存在する変数、モジュール、またはクラス（例：グローバルライブラリ）を宣言するために使用されるキーワードは何ですか？",
        solution:
          "Ambient Declarationは、既存のJavaScriptコードの形状を記述するために使用されます。これらは`declare`キーワードを使用して定義されます。これはTypeScriptに「この変数/クラスはどこか別の場所に存在する」と伝えます。"
      },
      vi: {
        title: "**Khai báo môi trường** (Ambient Declaration) trong file `.d.ts` là gì?",
        body: "Từ khóa nào được sử dụng để khai báo các biến, module hoặc lớp tồn tại bên ngoài phạm vi của file hiện tại (ví dụ: các thư viện toàn cục)?",
        solution:
          "Khai báo môi trường được sử dụng để mô tả hình dạng của mã JavaScript hiện có. Chúng được định nghĩa bằng từ khóa `declare`. Điều này cho TypeScript biết 'biến/lớp này tồn tại ở đâu đó khác'."
      }
    }
  },
  {
    _id: "ts-j-027",
    difficulty: "junior",
    tags: ["config", "skipLibCheck"],
    content: {
      en: {
        title: "Why might a project set `skipLibCheck: true`?",
        body: "What potential issue does this setting resolve, especially when dealing with third-party libraries?",
        solution:
          "Setting `skipLibCheck: true` skips type checking of all declaration files (`.d.ts`) that are part of an included library. This speeds up compilation and avoids errors caused by minor incompatibilities or issues within third-party library types."
      },
      jp: {
        title: "プロジェクトが`skipLibCheck: true`を設定するのはなぜですか？",
        body: "この設定は、特にサードパーティライブラリを扱う際に、どのような潜在的な問題を解決しますか？",
        solution:
          "`skipLibCheck: true`を設定すると、含まれているライブラリの一部であるすべての宣言ファイル（`.d.ts`）の型チェックがスキップされます。これにより、コンパイルが高速化され、サードパーティライブラリの型内のわずかな非互換性や問題によって引き起こされるエラーが回避されます。"
      },
      vi: {
        title: "Tại sao một dự án có thể đặt `skipLibCheck: true`?",
        body: "Cài đặt này giải quyết vấn đề tiềm ẩn nào, đặc biệt khi xử lý các thư viện bên thứ ba?",
        solution:
          "Việc đặt `skipLibCheck: true` sẽ bỏ qua việc kiểm tra kiểu của tất cả các file khai báo (`.d.ts`) là một phần của thư viện được bao gồm. Điều này giúp tăng tốc độ biên dịch và tránh các lỗi do sự không tương thích nhỏ hoặc các vấn đề trong các kiểu của thư viện bên thứ ba gây ra."
      }
    }
  },
  {
    _id: "ts-j-028",
    difficulty: "junior",
    tags: ["classes", "abstract"],
    content: {
      en: {
        title: "What is an `abstract class`?",
        body: "What two things must a subclass do with an abstract method it inherits?",
        solution:
          "An `abstract class` is a base class that cannot be instantiated directly. A subclass must **extend** the abstract class and **implement** all inherited abstract methods."
      },
      jp: {
        title: "`abstract class`（抽象クラス）とは何ですか？",
        body: "サブクラスは継承した抽象メソッドに対して何をすべきですか（2つのこと）？",
        solution:
          "`abstract class`は直接インスタンス化できない基底クラスです。サブクラスは抽象クラスを**拡張**し、継承したすべての抽象メソッドを**実装**する必要があります。"
      },
      vi: {
        title: "`abstract class` (Lớp trừu tượng) là gì?",
        body: "Một lớp con (subclass) phải làm hai điều gì với một phương thức trừu tượng mà nó kế thừa?",
        solution:
          "`abstract class` là một lớp cơ sở không thể được khởi tạo trực tiếp. Một lớp con phải **kế thừa (extend)** lớp trừu tượng đó và **triển khai (implement)** tất cả các phương thức trừu tượng được kế thừa."
      }
    }
  },
  {
    _id: "ts-j-029",
    difficulty: "junior",
    tags: ["private", "js_private"],
    content: {
      en: {
        title: "What is the difference between `private` and the ECMAScript private field (`#property`)?",
        body: "Which one provides a 'true' runtime encapsulation that is preserved in the JavaScript output?",
        solution:
          "The TypeScript `private` keyword is only enforced at compile-time and is removed in the JS output. The **ECMAScript private field (`#property`)** is a **true** runtime private mechanism that is preserved and enforced by the JavaScript engine itself."
      },
      jp: {
        title: "`private`とECMAScriptプライベートフィールド（`#property`）の違いは何ですか？",
        body: "JavaScript出力で保持される「真の」実行時カプセル化を提供するものはどちらですか？",
        solution:
          "TypeScriptの`private`キーワードはコンパイル時にのみ強制され、JS出力では削除されます。**ECMAScriptプライベートフィールド (`#property`)** は、JavaScriptエンジン自体によって保持および強制される**真の**実行時プライベートメカニズムです。"
      },
      vi: {
        title: "Sự khác biệt giữa `private` của TypeScript và trường private của ECMAScript (`#property`) là gì?",
        body: "Cái nào cung cấp sự đóng gói (encapsulation) 'thực sự' tại thời điểm chạy được giữ lại trong đầu ra JavaScript?",
        solution:
          "Từ khóa `private` của TypeScript chỉ được thực thi tại thời điểm biên dịch và bị loại bỏ trong đầu ra JS. **Trường private của ECMAScript (`#property`)** là một cơ chế private **thực sự** tại thời điểm chạy, được giữ lại và thực thi bởi chính engine JavaScript."
      }
    }
  },
  {
    _id: "ts-j-030",
    difficulty: "junior",
    tags: ["this_type", "return_type"],
    content: {
      en: {
        title: "What is the `this` type used for in class methods?",
        body: "How is returning `this` useful for method chaining?",
        solution:
          "Returning the `this` type allows methods to return the specific instance of the class they are running on. This is crucial for **method chaining** (or fluent interfaces), as each method call returns the object itself, allowing the next method to be called immediately."
      },
      jp: {
        title: "クラスメソッドにおける`this`型は何に使用されますか？",
        body: "`this`を返すことはメソッドチェーンにとってどのように役立ちますか？",
        solution:
          "`this`型を返すことで、メソッドは実行されているクラスの特定のインスタンスを返すことができます。これは、メソッドチェーン（または流暢なインターフェース）にとって不可欠です。なぜなら、各メソッド呼び出しがオブジェクト自体を返すため、次のメソッドをすぐに呼び出すことができるからです。"
      },
      vi: {
        title: "Kiểu `this` được sử dụng để làm gì trong các phương thức của lớp?",
        body: "Việc trả về `this` hữu ích như thế nào cho việc chuỗi phương thức (method chaining)?",
        solution:
          "Việc trả về kiểu `this` cho phép các phương thức trả về thể hiện cụ thể của lớp mà chúng đang chạy trên đó. Điều này rất quan trọng đối với **chuỗi phương thức (method chaining)** (hoặc fluent interfaces), vì mỗi lần gọi phương thức sẽ trả về chính đối tượng đó, cho phép gọi phương thức tiếp theo ngay lập tức."
      }
    }
  },
  {
    _id: "ts-j-031",
    difficulty: "junior",
    tags: ["functions", "default_parameters"],
    content: {
      en: {
        title: "How do default parameters affect function types?",
        body: "If a function parameter has a default value, does the type system consider it optional or required?",
        solution:
          "If a function parameter has a default value, it is considered **optional** by the type system. TypeScript automatically infers the parameter's type based on the default value, and the parameter does not need to be passed when calling the function."
      },
      jp: {
        title: "デフォルトパラメーターは関数型にどのように影響しますか？",
        body: "関数パラメーターにデフォルト値がある場合、型システムはそれをオプションと見なしますか、それとも必須と見なしますか？",
        solution:
          "関数パラメーターにデフォルト値がある場合、型システムによって**オプション**と見なされます。TypeScriptはデフォルト値に基づいてパラメーターの型を自動的に推論し、関数を呼び出すときにパラメーターを渡す必要はありません。"
      },
      vi: {
        title: "Tham số mặc định ảnh hưởng đến kiểu hàm như thế nào?",
        body: "Nếu một tham số hàm có giá trị mặc định, hệ thống kiểu coi nó là tùy chọn hay bắt buộc?",
        solution:
          "Nếu một tham số hàm có giá trị mặc định, nó được hệ thống kiểu coi là **tùy chọn (optional)**. TypeScript tự động suy luận kiểu của tham số dựa trên giá trị mặc định và tham số đó không cần phải được truyền khi gọi hàm."
      }
    }
  },
  {
    _id: "ts-j-032",
    difficulty: "junior",
    tags: ["decorators", "parameters"],
    content: {
      en: {
        title: "What three types of decorations can be applied to a class method?",
        body: "Name the three types of declarations within a class that can be decorated with `@`.",
        solution:
          "The three types of declarations that can be decorated are: **Methods**, **Accessors** (`get`/`set`), and **Properties** (including static members)."
      },
      jp: {
        title: "クラスメソッドに適用できる3種類のデコレーションは何ですか？",
        body: "クラス内で`@`で装飾できる3種類の宣言を挙げてください。",
        solution:
          "装飾できる3種類の宣言は、**メソッド**、**アクセサー**（`get`/`set`）、および**プロパティ**（静的メンバーを含む）です。"
      },
      vi: {
        title: "Ba loại trang trí nào có thể được áp dụng cho một phương thức lớp?",
        body: "Kể tên ba loại khai báo trong một lớp có thể được trang trí bằng `@`.",
        solution:
          "Ba loại khai báo có thể được trang trí là: **Phương thức (Methods)**, **Bộ truy cập (Accessors)** (`get`/`set`), và **Thuộc tính (Properties)** (bao gồm cả thành viên static)."
      }
    }
  },
  {
    _id: "ts-j-033",
    difficulty: "junior",
    tags: ["type_guards", "discriminating_unions"],
    content: {
      en: {
        title: "What is a **Discriminated Union** (or Tagged Union)?",
        body: "What is the key element required in every member of a union type for it to be discriminated?",
        solution:
          "A Discriminated Union is a union type where every member shares a **common literal property** (the 'discriminant' or 'tag'). This tag allows TypeScript to easily narrow the type of a union member using a simple `switch` statement or `if` check."
      },
      jp: {
        title: "**Discriminated Union**（識別された共用体、またはタグ付き共用体）とは何ですか？",
        body: "共用型が識別されるために、そのすべてのメンバーに必要とされる重要な要素は何ですか？",
        solution:
          "Discriminated Unionは、すべてのメンバーが**共通のリテラルプロパティ**（「識別子」または「タグ」）を共有する共用型です。このタグにより、TypeScriptは単純な`switch`ステートメントまたは`if`チェックを使用して、共用メンバーの型を容易に絞り込むことができます。"
      },
      vi: {
        title: "**Discriminated Union** (Kiểu hợp nhất phân biệt) là gì?",
        body: "Yếu tố quan trọng nào được yêu cầu trong mọi thành viên của một kiểu hợp nhất để nó có thể được phân biệt?",
        solution:
          "Discriminated Union là một kiểu hợp nhất trong đó mọi thành viên đều chia sẻ một **thuộc tính cố định chung** (gọi là 'discriminant' hay 'tag'). Thẻ này cho phép TypeScript dễ dàng thu hẹp kiểu của một thành viên hợp nhất bằng cách sử dụng một câu lệnh `switch` đơn giản hoặc kiểm tra `if`."
      }
    }
  },
  {
    _id: "ts-j-034",
    difficulty: "junior",
    tags: ["module", "default_export"],
    content: {
      en: {
        title: "What is the difference between a **default export** and a **named export**?",
        body: "How does the import syntax differ for a default export versus a named export?",
        solution:
          "A **default export** is the single main export from a module (imported without `{}`). **Named exports** allow exporting multiple values (imported with `{}`). A module can only have one default export."
      },
      jp: {
        title: "**default export**と**named export**の違いは何ですか？",
        body: "default exportとnamed exportでは、インポート構文はどのように異なりますか？",
        solution:
          "**default export**はモジュールからの単一の主要なエクスポートです（`{}`なしでインポートされます）。**Named exports**は複数の値をエクスポートすることを可能にします（`{}`でインポートされます）。モジュールはdefault exportを1つしか持つことができません。"
      },
      vi: {
        title: "Sự khác biệt giữa **export mặc định** (default export) và **export có tên** (named export) là gì?",
        body: "Cú pháp import khác nhau như thế nào đối với export mặc định so với export có tên?",
        solution:
          "**Export mặc định** là export chính duy nhất từ một module (được import mà không có `{}`). **Export có tên** cho phép export nhiều giá trị (được import với `{}`). Một module chỉ có thể có một export mặc định."
      }
    }
  },
  {
    _id: "ts-j-035",
    difficulty: "junior",
    tags: ["type_guards", "assertion_function"],
    content: {
      en: {
        title: "What is the purpose of an **Assertion Function** in Type Guarding?",
        body: "What special return type signature is used for an assertion function?",
        solution:
          "An assertion function is used when a runtime check ensures something about a value *after* the function returns. The signature is `asserts condition` or `asserts value is type`. It tells the compiler to assume the condition is true for the rest of the scope after the function call."
      },
      jp: {
        title: "Type Guardingにおける**Assertion Function**の目的は何ですか？",
        body: "Assertion Functionにはどのような特別な戻り値型シグネチャが使用されますか？",
        solution:
          "Assertion Functionは、実行時のチェックが関数が戻った*後*の値について何かを保証するときに使用されます。シグネチャは `asserts condition` または `asserts value is type` です。これは、関数呼び出し後の残りのスコープで条件が真であると仮定するようにコンパイラに伝えます。"
      },
      vi: {
        title: "Mục đích của **Hàm Khẳng định** (Assertion Function) trong Type Guarding là gì?",
        body: "Chữ ký kiểu trả về đặc biệt nào được sử dụng cho một hàm khẳng định?",
        solution:
          "Hàm khẳng định được sử dụng khi một kiểm tra tại thời điểm chạy đảm bảo điều gì đó về một giá trị *sau khi* hàm trả về. Chữ ký là `asserts condition` hoặc `asserts value is type`. Nó yêu cầu trình biên dịch giả định điều kiện là đúng cho phần còn lại của phạm vi sau khi gọi hàm."
      }
    }
  },
  {
    _id: "ts-j-036",
    difficulty: "junior",
    tags: ["utility_types", "nonnullable"],
    content: {
      en: {
        title: "What is the function of the `NonNullable<T>` utility type?",
        body: "If `T = string | null | undefined`, what type does `NonNullable<T>` result in?",
        solution:
          "The `NonNullable<T>` utility type constructs a type by excluding `null` and `undefined` from `T`. Result: `string`."
      },
      jp: {
        title: "`NonNullable<T>`ユーティリティ型の機能は何ですか？",
        body: "`T = string | null | undefined` の場合、`NonNullable<T>`はどのような型になりますか？",
        solution:
          "`NonNullable<T>`ユーティリティ型は、`T`から`null`と`undefined`を除外することによって型を構築します。結果: `string`。"
      },
      vi: {
        title: "Chức năng của kiểu tiện ích `NonNullable<T>` là gì?",
        body: "Nếu `T = string | null | undefined`, `NonNullable<T>` sẽ cho ra kiểu gì?",
        solution:
          "Kiểu tiện ích `NonNullable<T>` xây dựng một kiểu bằng cách loại trừ `null` và `undefined` khỏi `T`. Kết quả: `string`."
      }
    }
  },
  {
    _id: "ts-j-037",
    difficulty: "junior",
    tags: ["type_guards", "in"],
    content: {
      en: {
        title: "When using the `in` operator as a Type Guard, what type of values does it NOT work on?",
        body: "Does the `in` operator narrow down the type of primitive values (e.g., string, number)?",
        solution:
          "The `in` operator only works on **object types** (including arrays and functions). It will throw a runtime error if the left-hand side is a primitive value other than `null` or `undefined` (which are exceptions and are handled by the compiler)."
      },
      jp: {
        title: "Type Guardとして`in`演算子を使用する場合、どのような型の値には機能しませんか？",
        body: "`in`演算子はプリミティブ値（例：文字列、数値）の型を絞り込みますか？",
        solution:
          "`in`演算子は**オブジェクト型**（配列や関数を含む）でのみ機能します。左辺が`null`または`undefined`以外のプリミティブ値である場合、実行時エラーが発生します（これらは例外であり、コンパイラによって処理されます）。"
      },
      vi: {
        title: "Khi sử dụng toán tử `in` như một Type Guard, nó không hoạt động trên những loại giá trị nào?",
        body: "Toán tử `in` có thu hẹp kiểu của các giá trị nguyên thủy (ví dụ: chuỗi, số) không?",
        solution:
          "Toán tử `in` chỉ hoạt động trên **các kiểu đối tượng** (bao gồm mảng và hàm). Nó sẽ ném ra lỗi runtime nếu bên trái là một giá trị nguyên thủy khác ngoài `null` hoặc `undefined` (là các trường hợp ngoại lệ và được xử lý bởi trình biên dịch)."
      }
    }
  },
  {
    _id: "ts-j-038",
    difficulty: "junior",
    tags: ["mapped_types", "basic"],
    content: {
      en: {
        title: "What is a **Mapped Type** and what is its purpose?",
        body: "What special syntax is used to iterate over properties of a type in a Mapped Type?",
        solution:
          "A Mapped Type is a generic type that creates new types by iterating over the properties of an old type and applying a modification to them. It uses the `[K in keyof T]` syntax."
      },
      jp: {
        title: "**Mapped Type**とは何ですか、またその目的は何ですか？",
        body: "Mapped Typeで型のプロパティを反復処理するために使用される特別な構文は何ですか？",
        solution:
          "Mapped Typeは、古い型のプロパティを反復処理し、それらに変更を適用することによって新しい型を作成するジェネリック型です。それは`[K in keyof T]`構文を使用します。"
      },
      vi: {
        title: "**Mapped Type** (Kiểu ánh xạ) là gì và mục đích của nó là gì?",
        body: "Cú pháp đặc biệt nào được sử dụng để lặp qua các thuộc tính của một kiểu trong Mapped Type?",
        solution:
          "Mapped Type là một kiểu generic tạo ra các kiểu mới bằng cách lặp qua các thuộc tính của một kiểu cũ và áp dụng một sửa đổi cho chúng. Nó sử dụng cú pháp `[K in keyof T]`."
      }
    }
  },
  {
    _id: "ts-j-039",
    difficulty: "junior",
    tags: ["utility_types", "return_type"],
    content: {
      en: {
        title: "How do you extract the return type of a function type?",
        body: "Use a utility type to get the return type of `type MyFunction = () => number;`.",
        solution:
          "Use the `ReturnType<T>` utility type. Example: `type Result = ReturnType<MyFunction>;` which results in `number`."
      },
      jp: {
        title: "関数型の戻り値の型をどのように抽出しますか？",
        body: "ユーティリティ型を使用して、`type MyFunction = () => number;` の戻り値の型を取得してください。",
        solution:
          "`ReturnType<T>`ユーティリティ型を使用します。例: `type Result = ReturnType<MyFunction>;` で、結果は`number`になります。"
      },
      vi: {
        title: "Làm thế nào để trích xuất kiểu trả về của một kiểu hàm?",
        body: "Sử dụng một kiểu tiện ích để lấy kiểu trả về của `type MyFunction = () => number;`.",
        solution:
          "Sử dụng kiểu tiện ích `ReturnType<T>`. Ví dụ: `type Result = ReturnType<MyFunction>;` kết quả là `number`."
      }
    }
  },
  {
    _id: "ts-j-040",
    difficulty: "junior",
    tags: ["config", "strictFunctionTypes"],
    content: {
      en: {
        title: "What does `strictFunctionTypes: true` enforce?",
        body: "Explain the kind of error this flag helps prevent, related to function parameter types.",
        solution:
          "It enforces **contravariance** for function arguments, meaning the type of function parameters is checked more strictly. This prevents a common source of bugs where a function expecting a general type is replaced by one expecting a more specific type (which can lead to runtime errors)."
      },
      jp: {
        title: "`strictFunctionTypes: true`は何を強制しますか？",
        body: "このフラグが防ぐのに役立つ、関数パラメーターの型に関連するエラーの種類を説明してください。",
        solution:
          "関数引数に対して**反変性**を強制します。つまり、関数パラメーターの型がより厳密にチェックされます。これにより、より一般的な型を期待する関数が、より具体的な型を期待する関数に置き換えられるという一般的なバグの原因を防ぎます（これは実行時エラーにつながる可能性があります）。"
      },
      vi: {
        title: "`strictFunctionTypes: true` bắt buộc điều gì?",
        body: "Giải thích loại lỗi mà cờ này giúp ngăn chặn, liên quan đến các kiểu tham số hàm.",
        solution:
          "Nó bắt buộc **tính đối biến (contravariance)** cho các đối số hàm, nghĩa là kiểu của các tham số hàm được kiểm tra nghiêm ngặt hơn. Điều này ngăn chặn một nguồn lỗi phổ biến khi một hàm mong đợi một kiểu chung bị thay thế bởi một hàm mong đợi một kiểu cụ thể hơn (điều này có thể dẫn đến lỗi runtime)."
      }
    }
  },
  {
    _id: "ts-j-041",
    difficulty: "junior",
    tags: ["ambient", "global"],
    content: {
      en: {
        title: "How do you declare a new global variable that exists in the runtime environment?",
        body: "Show the syntax to declare a global variable `MY_APP_CONFIG` of type `Config`.",
        solution:
          "Use the `declare var` or `declare const` syntax outside of any module, or use a global ambient module. Example: `declare const MY_APP_CONFIG: Config;`"
      },
      jp: {
        title: "実行時環境に存在する新しいグローバル変数をどのように宣言しますか？",
        body: "`Config`型のグローバル変数`MY_APP_CONFIG`を宣言する構文を示してください。",
        solution:
          "モジュールの外で`declare var`または`declare const`構文を使用するか、グローバルアンビエントモジュールを使用します。例: `declare const MY_APP_CONFIG: Config;`"
      },
      vi: {
        title: "Làm thế nào để khai báo một biến toàn cục mới tồn tại trong môi trường runtime?",
        body: "Trình bày cú pháp để khai báo một biến toàn cục `MY_APP_CONFIG` có kiểu là `Config`.",
        solution:
          "Sử dụng cú pháp `declare var` hoặc `declare const` bên ngoài bất kỳ module nào, hoặc sử dụng một module môi trường toàn cục. Ví dụ: `declare const MY_APP_CONFIG: Config;`"
      }
    }
  },
  {
    _id: "ts-j-042",
    difficulty: "junior",
    tags: ["module", "default_import"],
    content: {
      en: {
        title: "What is the key difference between `import { default as X } from 'm';` and `import X from 'm';`?",
        body: "Are these two import styles functionally equivalent for modules compiled with `esModuleInterop: true`?",
        solution:
          "They are functionally equivalent. `import X from 'm';` is syntactic sugar for `import { default as X } from 'm';` when working with ES modules. They both import the module's default export."
      },
      jp: {
        title: "`import { default as X } from 'm';` と `import X from 'm';` の主な違いは何ですか？",
        body: "`esModuleInterop: true`でコンパイルされたモジュールの場合、これら2つのインポートスタイルは機能的に同等ですか？",
        solution:
          "それらは機能的に同等です。`import X from 'm';` は、ESモジュールを扱う際の `import { default as X } from 'm';` のための構文糖衣（syntactic sugar）です。どちらもモジュールのデフォルトエクスポートをインポートします。"
      },
      vi: {
        title: "Sự khác biệt chính giữa `import { default as X } from 'm';` và `import X from 'm';` là gì?",
        body: "Hai kiểu import này có tương đương về mặt chức năng đối với các module được biên dịch với `esModuleInterop: true` không?",
        solution:
          "Chúng tương đương về mặt chức năng. `import X from 'm';` là đường cú pháp (syntactic sugar) cho `import { default as X } from 'm';` khi làm việc với các module ES. Cả hai đều import export mặc định của module."
      }
    }
  },
  {
    _id: "ts-j-043",
    difficulty: "junior",
    tags: ["functions", "call_signatures"],
    content: {
      en: {
        title: "What is a **Call Signature** in an interface or type alias?",
        body: "Show the syntax for an interface `StringProcessor` that describes a function taking a string and returning a number.",
        solution:
          "A Call Signature defines the structure of a function (parameters and return type). Syntax: `interface StringProcessor { (input: string): number; }`"
      },
      jp: {
        title: "インターフェースまたは型エイリアスにおける**Call Signature**（呼び出しシグネチャ）とは何ですか？",
        body: "文字列を受け取り、数値を返す関数を記述するインターフェース`StringProcessor`の構文を示してください。",
        solution:
          "Call Signatureは関数の構造（パラメーターと戻り値の型）を定義します。構文: `interface StringProcessor { (input: string): number; }`"
      },
      vi: {
        title: "**Chữ ký gọi** (Call Signature) trong một interface hoặc type alias là gì?",
        body: "Trình bày cú pháp cho một interface `StringProcessor` mô tả một hàm nhận một chuỗi và trả về một số.",
        solution:
          "Call Signature định nghĩa cấu trúc của một hàm (các tham số và kiểu trả về). Cú pháp: `interface StringProcessor { (input: string): number; }`"
      }
    }
  },
  {
    _id: "ts-j-044",
    difficulty: "junior",
    tags: ["mapped_types", "modifier"],
    content: {
      en: {
        title: "How do you remove the `readonly` modifier from all properties of a type using a Mapped Type?",
        body: "What modifier prefix is used to remove a property modifier?",
        solution:
          "Use the minus sign (`-`) prefix before the modifier. Example: `type Writable<T> = { -readonly [P in keyof T]: T[P]; };`"
      },
      jp: {
        title: "Mapped Typeを使用して、型のすべてのプロパティから`readonly`修飾子を削除するにはどうすればよいですか？",
        body: "プロパティ修飾子を削除するために使用される修飾子接頭辞は何ですか？",
        solution:
          "修飾子の前にマイナス記号 (`-`) の接頭辞を使用します。例: `type Writable<T> = { -readonly [P in keyof T]: T[P]; };`"
      },
      vi: {
        title: "Làm thế nào để loại bỏ bổ ngữ `readonly` khỏi tất cả các thuộc tính của một kiểu bằng cách sử dụng Mapped Type?",
        body: "Tiền tố bổ ngữ nào được sử dụng để loại bỏ bổ ngữ thuộc tính?",
        solution:
          "Sử dụng tiền tố dấu trừ (`-`) trước bổ ngữ. Ví dụ: `type Writable<T> = { -readonly [P in keyof T]: T[P]; };`"
      }
    }
  },
  {
    _id: "ts-j-045",
    difficulty: "junior",
    tags: ["utility_types", "parameters"],
    content: {
      en: {
        title: "How do you extract the parameter types of a function type?",
        body: "Use a utility type to get the parameter types of `type MyFunction = (a: string, b: number) => void;`.",
        solution:
          "Use the `Parameters<T>` utility type. Example: `type Params = Parameters<MyFunction>;` which results in the tuple `[a: string, b: number]`."
      },
      jp: {
        title: "関数型のパラメーターの型をどのように抽出しますか？",
        body: "ユーティリティ型を使用して、`type MyFunction = (a: string, b: number) => void;` のパラメーターの型を取得してください。",
        solution:
          "`Parameters<T>`ユーティリティ型を使用します。例: `type Params = Parameters<MyFunction>;` で、結果はタプル `[a: string, b: number]` になります。"
      },
      vi: {
        title: "Làm thế nào để trích xuất các kiểu tham số của một kiểu hàm?",
        body: "Sử dụng một kiểu tiện ích để lấy các kiểu tham số của `type MyFunction = (a: string, b: number) => void;`.",
        solution:
          "Sử dụng kiểu tiện ích `Parameters<T>`. Ví dụ: `type Params = Parameters<MyFunction>;` kết quả là tuple `[a: string, b: number]`."
      }
    }
  },
  {
    _id: "ts-j-046",
    difficulty: "junior",
    tags: ["config", "allowSyntheticDefaultImports"],
    content: {
      en: {
        title: "What does `allowSyntheticDefaultImports: true` enable?",
        body: "Why is this option often used in conjunction with `esModuleInterop: false`?",
        solution:
          "It allows default imports from modules that don't explicitly declare a default export (without generating a runtime helper like `esModuleInterop`). It is used when a toolchain handles the CommonJS/ESM compatibility, but the developer still wants the cleaner ES module import syntax."
      },
      jp: {
        title: "`allowSyntheticDefaultImports: true`は何を可能にしますか？",
        body: "このオプションが`esModuleInterop: false`と組み合わせてよく使用されるのはなぜですか？",
        solution:
          "デフォルトエクスポートを明示的に宣言しないモジュールからのデフォルトインポートを可能にします（`esModuleInterop`のような実行時ヘルパーを生成せずに）。これは、ツールチェーンがCommonJS/ESMの互換性を処理するが、開発者が依然としてクリーンなESモジュールインポート構文を望む場合に使用されます。"
      },
      vi: {
        title: "`allowSyntheticDefaultImports: true` cho phép điều gì?",
        body: "Tại sao tùy chọn này thường được sử dụng cùng với `esModuleInterop: false`?",
        solution:
          "Nó cho phép import mặc định từ các module không khai báo rõ ràng export mặc định (mà không tạo ra một trình trợ giúp runtime như `esModuleInterop`). Nó được sử dụng khi một bộ công cụ (toolchain) xử lý khả năng tương thích CommonJS/ESM, nhưng nhà phát triển vẫn muốn có cú pháp import module ES sạch hơn."
      }
    }
  },
  {
    _id: "ts-j-047",
    difficulty: "junior",
    tags: ["type_guards", "nullish_coalescing"],
    content: {
      en: {
        title: "How does the Nullish Coalescing operator (`??`) act as a Type Guard?",
        body: "If `let x = value ?? defaultValue;`, how does TypeScript narrow the type of `value` inside the `defaultValue` expression?",
        solution:
          "If the expression following the `??` is executed (meaning `value` is `null` or `undefined`), TypeScript narrows the type of `value` to be `null | undefined` inside the right-hand side expression."
      },
      jp: {
        title: "Nullish Coalescing operator (`??`) はType Guardとしてどのように機能しますか？",
        body: "`let x = value ?? defaultValue;` の場合、TypeScriptは`defaultValue`式内で`value`の型をどのように絞り込みますか？",
        solution:
          "`??`に続く式が実行された場合（つまり、`value`が`null`または`undefined`である場合）、TypeScriptは右側の式内で`value`の型を`null | undefined`に絞り込みます。"
      },
      vi: {
        title: "Toán tử Nullish Coalescing (`??`) hoạt động như một Type Guard như thế nào?",
        body: "Nếu `let x = value ?? defaultValue;`, TypeScript thu hẹp kiểu của `value` bên trong biểu thức `defaultValue` như thế nào?",
        solution:
          "Nếu biểu thức theo sau `??` được thực thi (nghĩa là `value` là `null` hoặc `undefined`), TypeScript sẽ thu hẹp kiểu của `value` thành `null | undefined` bên trong biểu thức phía bên phải."
      }
    }
  },
  {
    _id: "ts-j-048",
    difficulty: "junior",
    tags: ["classes", "parameter_properties"],
    content: {
      en: {
        title: "What are **Parameter Properties** in a class constructor?",
        body: "Show a simplified constructor signature that uses a parameter property to define and initialize a private property `id` (number).",
        solution:
          "Parameter Properties are shorthand for declaring a property and initializing it from a constructor parameter in one location. Example: `class User { constructor(private id: number) {} }`"
      },
      jp: {
        title: "クラスコンストラクターにおける**Parameter Properties**（パラメータープロパティ）とは何ですか？",
        body: "プライベートプロパティ`id` (number) を定義および初期化するためにパラメータープロパティを使用する簡略化されたコンストラクターシグネチャを示してください。",
        solution:
          "Parameter Propertiesは、プロパティを宣言し、コンストラクターパラメーターからそれを初期化するためのショートカットです。例: `class User { constructor(private id: number) {} }`"
      },
      vi: {
        title: "**Parameter Properties** (Thuộc tính tham số) trong hàm tạo (constructor) của lớp là gì?",
        body: "Trình bày chữ ký hàm tạo được đơn giản hóa sử dụng thuộc tính tham số để định nghĩa và khởi tạo một thuộc tính private `id` (kiểu số).",
        solution:
          "Parameter Properties là cú pháp viết tắt để khai báo một thuộc tính và khởi tạo nó từ một tham số hàm tạo tại cùng một vị trí. Ví dụ: `class User { constructor(private id: number) {} }`"
      }
    }
  },
  {
    _id: "ts-j-049",
    difficulty: "junior",
    tags: ["utility_types", "instance_type"],
    content: {
      en: {
        title: "How do you extract the instance type of a class constructor type?",
        body: "If you have `type T = typeof MyClass;`, what utility type do you use to get the type of an object created by `new MyClass()`?",
        solution:
          "Use the `InstanceType<T>` utility type. Example: `type User = InstanceType<typeof MyClass>;` where `MyClass` is the class name."
      },
      jp: {
        title: "クラスコンストラクター型のインスタンス型をどのように抽出しますか？",
        body: "`type T = typeof MyClass;` がある場合、`new MyClass()`によって作成されたオブジェクトの型を取得するためにどのユーティリティ型を使用しますか？",
        solution:
          "`InstanceType<T>`ユーティリティ型を使用します。例: `type User = InstanceType<typeof MyClass>;` （`MyClass`はクラス名）。"
      },
      vi: {
        title: "Làm thế nào để trích xuất kiểu thể hiện (instance type) của một kiểu hàm tạo lớp?",
        body: "Nếu bạn có `type T = typeof MyClass;`, bạn sử dụng kiểu tiện ích nào để lấy kiểu của một đối tượng được tạo bởi `new MyClass()`?",
        solution:
          "Sử dụng kiểu tiện ích `InstanceType<T>`. Ví dụ: `type User = InstanceType<typeof MyClass>;` trong đó `MyClass` là tên lớp."
      }
    }
  },
  {
    _id: "ts-j-050",
    difficulty: "junior",
    tags: ["compiler_option", "resolveJsonModule"],
    content: {
      en: {
        title: "What does the `resolveJsonModule` compiler option allow you to do?",
        body: "When this option is enabled, what does the resulting import of a JSON file look like, in terms of type?",
        solution:
          "It allows you to import `.json` files directly into your TypeScript code. The imported object is automatically given the correct type, based on the JSON file structure, enabling type-safe access to its properties."
      },
      jp: {
        title: "`resolveJsonModule`コンパイラオプションは何を可能にしますか？",
        body: "このオプションが有効になっている場合、JSONファイルのインポート結果は型に関してどのように見えますか？",
        solution:
          "`.json`ファイルをTypeScriptコードに直接インポートすることを可能にします。インポートされたオブジェクトは、JSONファイルの構造に基づいて自動的に正しい型が与えられ、そのプロパティへの型安全なアクセスが可能になります。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `resolveJsonModule` cho phép bạn làm gì?",
        body: "Khi tùy chọn này được bật, việc import một file JSON sẽ trông như thế nào, về mặt kiểu?",
        solution:
          "Nó cho phép bạn import các file `.json` trực tiếp vào mã TypeScript của mình. Đối tượng được import sẽ tự động được gán kiểu chính xác, dựa trên cấu trúc file JSON, cho phép truy cập an toàn kiểu vào các thuộc tính của nó."
      }
    }
  }
];
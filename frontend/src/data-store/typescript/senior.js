export const typescript_senior_questions = [
  {
    _id: "ts-s-001",
    difficulty: "senior",
    tags: ["conditional_types", "infer", "extends"],
    content: {
      en: {
        title: "Explain the use of the `infer` keyword within a Conditional Type.",
        body: "How does `infer` help in extracting a type from another type, such as extracting the element type of an array?",
        solution:
          "The `infer` keyword is used within the `extends` clause of a Conditional Type to declare a type variable. This variable can hold the inferred type if the condition is met, allowing complex type transformations, like extracting a function's return type or an array's element type."
      },
      jp: {
        title: "Conditional Type内での`infer`キーワードの使用法を説明してください。",
        body: "`infer`は、配列の要素型を抽出するなど、ある型から別の型を抽出するのにどのように役立ちますか？",
        solution:
          "`infer`キーワードは、Conditional Typeの`extends`句内で型変数を宣言するために使用されます。この変数は、条件が満たされた場合、推論された型を保持でき、関数の戻り値の型や配列の要素型を抽出するなど、複雑な型変換を可能にします。"
      },
      vi: {
        title: "Giải thích cách sử dụng từ khóa `infer` trong Kiểu điều kiện (Conditional Type).",
        body: "`infer` giúp trích xuất một kiểu từ một kiểu khác như thế nào, ví dụ trích xuất kiểu phần tử của một mảng?",
        solution:
          "Từ khóa `infer` được sử dụng trong mệnh đề `extends` của Kiểu điều kiện để khai báo một biến kiểu. Biến này có thể giữ kiểu được suy luận nếu điều kiện được đáp ứng, cho phép các biến đổi kiểu phức tạp, như trích xuất kiểu trả về của một hàm hoặc kiểu phần tử của một mảng."
      }
    }
  },
  {
    _id: "ts-s-002",
    difficulty: "senior",
    tags: ["utility_types", "awaited", "promises"],
    content: {
      en: {
        title: "What is the purpose of the `Awaited<T>` utility type?",
        body: "If `T` is a Promise of a Promise (e.g., `Promise<Promise<number>>`), what is the resulting type of `Awaited<T>`?",
        solution:
          "`Awaited<T>` recursively unwraps the type of a Promise, including nested Promises. If `T = Promise<Promise<number>>`, `Awaited<T>` results in `number`. It simulates what `await` does in JavaScript."
      },
      jp: {
        title: "`Awaited<T>`ユーティリティ型の目的は何ですか？",
        body: "`T`がPromiseのPromise（例: `Promise<Promise<number>>`）である場合、`Awaited<T>`の結果の型は何ですか？",
        solution:
          "`Awaited<T>`は、ネストされたPromiseを含むPromiseの型を再帰的に展開します。`T = Promise<Promise<number>>`の場合、`Awaited<T>`の結果は`number`になります。これは、JavaScriptでの`await`の動作をシミュレートします。"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích `Awaited<T>` là gì?",
        body: "Nếu `T` là một Promise của một Promise (ví dụ: `Promise<Promise<number>>`), kiểu kết quả của `Awaited<T>` là gì?",
        solution:
          "`Awaited<T>` đệ quy giải nén kiểu của một Promise, bao gồm cả các Promise lồng nhau. Nếu `T = Promise<Promise<number>>`, `Awaited<T>` cho ra `number`. Nó mô phỏng những gì `await` làm trong JavaScript."
      }
    }
  },
  {
    _id: "ts-s-003",
    difficulty: "senior",
    tags: ["config", "compiler_options", "isolatedModules"],
    content: {
      en: {
        title: "Why is `isolatedModules: true` often required in environments like Babel or swc?",
        body: "What is the core restriction this setting enforces to ensure safe single-file transpilation?",
        solution:
          "`isolatedModules: true` ensures that every file can be safely compiled without needing type information from other files. It requires all files to be **modules** (have `import`/`export`) and disallows non-module constructs that rely on global type checking, like using `const enum` without being inline or accessing imported members that are only types."
      },
      jp: {
        title: "Babelやswcなどの環境で`isolatedModules: true`がしばしば要求されるのはなぜですか？",
        body: "この設定が強制する核となる制限は何ですか、それは安全な単一ファイルでのトランスパイルを保証するためです。",
        solution:
          "`isolatedModules: true`は、他のファイルからの型情報を必要とせずに、すべてのファイルが安全にコンパイルできることを保証します。すべてのファイルが**モジュール**であること（`import`/`export`を持つこと）を要求し、インラインではない`const enum`の使用や、型のみであるインポートされたメンバーへのアクセスなど、グローバルな型チェックに依存する非モジュール構造を禁止します。"
      },
      vi: {
        title: "Tại sao `isolatedModules: true` thường được yêu cầu trong các môi trường như Babel hoặc swc?",
        body: "Hạn chế cốt lõi mà cài đặt này bắt buộc để đảm bảo quá trình chuyển đổi (transpilation) an toàn trên từng file đơn lẻ là gì?",
        solution:
          "`isolatedModules: true` đảm bảo rằng mọi file có thể được biên dịch an toàn mà không cần thông tin kiểu từ các file khác. Nó yêu cầu tất cả các file phải là **module** (có `import`/`export`) và không cho phép các cấu trúc phi module dựa vào kiểm tra kiểu toàn cục, như sử dụng `const enum` mà không được nội tuyến hoặc truy cập các thành viên được import chỉ là kiểu."
      }
    }
  },
  {
    _id: "ts-s-004",
    difficulty: "senior",
    tags: ["template_literals", "mapped_types"],
    content: {
      en: {
        title: "How can **Template Literal Types** be used with Mapped Types for dynamic key creation?",
        body: "Define a Mapped Type that takes a type `T` and creates a new type where every key `K` in `T` is prefixed with 'get'.",
        solution:
          "They enable dynamic string manipulation in type definitions. `type Getters<T> = { [K in keyof T & string as `get${Capitalize<K>}`]: T[K] };` (Note: Using `Capitalize<K>` is a common advanced utility for this pattern.)"
      },
      jp: {
        title: "**Template Literal Types**は、動的なキー作成のためにMapped Typesとどのように使用できますか？",
        body: "型`T`を受け取り、`T`内のすべてのキー`K`に 'get' をプレフィックスとして付けて新しい型を作成するMapped Typeを定義してください。",
        solution:
          "これらは、型定義での動的な文字列操作を可能にします。 `type Getters<T> = { [K in keyof T & string as `get${Capitalize<K>}`]: T[K] };` （注: このパターンのために`Capitalize<K>`を使用することは一般的な高度なユーティリティです。）"
      },
      vi: {
        title: "Các **Kiểu chuỗi mẫu** (Template Literal Types) có thể được sử dụng với Mapped Types để tạo khóa động như thế nào?",
        body: "Định nghĩa một Mapped Type nhận kiểu `T` và tạo ra một kiểu mới trong đó mọi khóa `K` trong `T` được thêm tiền tố 'get'.",
        solution:
          "Chúng cho phép thao tác chuỗi động trong các định nghĩa kiểu. `type Getters<T> = { [K in keyof T & string as `get${Capitalize<K>}`]: T[K] };` (Lưu ý: Sử dụng `Capitalize<K>` là một tiện ích nâng cao phổ biến cho mẫu này.)"
      }
    }
  },
  {
    _id: "ts-s-005",
    difficulty: "senior",
    tags: ["utility_types", "extract", "exclude"],
    content: {
      en: {
        title: "What is the fundamental difference between `Extract<T, U>` and `Exclude<T, U>`?",
        body: "If `T = 'a' | 'b' | 'c'` and `U = 'a' | 'd'`, what are the results of both utility types?",
        solution:
          "`Extract<T, U>` keeps the types in `T` that are assignable to `U`. `Exclude<T, U>` removes the types in `T` that are assignable to `U`. Results: `Extract` is `'a'`, `Exclude` is `'b' | 'c'`."
      },
      jp: {
        title: "`Extract<T, U>`と`Exclude<T, U>`の根本的な違いは何ですか？",
        body: "`T = 'a' | 'b' | 'c'`、`U = 'a' | 'd'`の場合、両方のユーティリティ型の結果は何ですか？",
        solution:
          "`Extract<T, U>`は、`T`内の型で`U`に割り当て可能な型を保持します。`Exclude<T, U>`は、`T`内の型で`U`に割り当て可能な型を削除します。結果: `Extract`は`'a'`、`Exclude`は`'b' | 'c'`です。"
      },
      vi: {
        title: "Sự khác biệt cơ bản giữa `Extract<T, U>` và `Exclude<T, U>` là gì?",
        body: "Nếu `T = 'a' | 'b' | 'c'` và `U = 'a' | 'd'`, kết quả của cả hai kiểu tiện ích này là gì?",
        solution:
          "`Extract<T, U>` giữ lại các kiểu trong `T` có thể gán cho `U`. `Exclude<T, U>` loại bỏ các kiểu trong `T` có thể gán cho `U`. Kết quả: `Extract` là `'a'`, `Exclude` là `'b' | 'c'`."
      }
    }
  },
  {
    _id: "ts-s-006",
    difficulty: "senior",
    tags: ["declaration_files", "module_augmentation"],
    content: {
      en: {
        title: "What is **Module Augmentation** (or Declaration Merging) used for in declaration files?",
        body: "How would you add a new, type-safe method `myCustomMethod` to the express `Request` object without modifying the original library's code?",
        solution:
          "Module Augmentation is used to extend the types of an existing module, especially a third-party module, in a `.d.ts` file. You use `declare module 'module-name' { ... }` to add new properties/methods to existing interfaces within that module."
      },
      jp: {
        title: "宣言ファイルで**Module Augmentation**（モジュール拡張、または宣言マージ）は何に使用されますか？",
        body: "元のライブラリのコードを変更せずに、expressの`Request`オブジェクトに新しい型安全なメソッド`myCustomMethod`を追加するにはどうすればよいですか？",
        solution:
          "Module Augmentationは、既存のモジュール、特にサードパーティモジュールの型を拡張するために、`.d.ts`ファイルで使用されます。`declare module 'module-name' { ... }`を使用して、そのモジュール内の既存のインターフェースに新しいプロパティ/メソッドを追加します。"
      },
      vi: {
        title: "**Mở rộng Module** (Module Augmentation) được sử dụng để làm gì trong các file khai báo?",
        body: "Làm thế nào bạn có thể thêm một phương thức mới, an toàn kiểu `myCustomMethod` vào đối tượng `Request` của express mà không cần sửa đổi mã của thư viện gốc?",
        solution:
          "Mở rộng Module được sử dụng để mở rộng các kiểu của một module hiện có, đặc biệt là module bên thứ ba, trong một file `.d.ts`. Bạn sử dụng `declare module 'module-name' { ... }` để thêm các thuộc tính/phương thức mới vào các interface hiện có bên trong module đó."
      }
    }
  },
  {
    _id: "ts-s-007",
    difficulty: "senior",
    tags: ["decorators", "reflection", "metadata"],
    content: {
      en: {
        title: "What compiler option is required to enable Decorator Metadata reflection, and which standard is it based on?",
        body: "Which module provides the runtime mechanism for reading decorator metadata?",
        solution:
          "The compiler option is **`emitDecoratorMetadata: true`**. It is based on the **ES Stage 3 Decorators** and relies on the `reflect-metadata` library (which must be imported once) to provide the runtime reflection API."
      },
      jp: {
        title: "Decorator Metadataの反射を有効にするために必要なコンパイラオプションは何ですか、またそれはどの標準に基づいていますか？",
        body: "どのモジュールがDecoratorメタデータを読み取るための実行時メカニズムを提供しますか？",
        solution:
          "コンパイラオプションは**`emitDecoratorMetadata: true`**です。これは**ES Stage 3 Decorators**に基づいており、実行時反射APIを提供するために`reflect-metadata`ライブラリ（一度インポートする必要がある）に依存しています。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch nào là bắt buộc để bật tính năng phản chiếu (reflection) Decorator Metadata, và tiêu chuẩn này dựa trên tiêu chuẩn nào?",
        body: "Module nào cung cấp cơ chế runtime để đọc metadata của decorator?",
        solution:
          "Tùy chọn trình biên dịch là **`emitDecoratorMetadata: true`**. Nó dựa trên **ES Stage 3 Decorators** và phụ thuộc vào thư viện `reflect-metadata` (cần được import một lần) để cung cấp API phản chiếu runtime."
      }
    }
  },
  {
    _id: "ts-s-008",
    difficulty: "senior",
    tags: ["utility_types", "required", "optional"],
    content: {
      en: {
        title: "How do you create a type where all properties are optional *except* for one specific property?",
        body: "Use utility types to define `RequiredID<T>` which makes all properties of `T` optional, but forces the `id` property to be required (assuming `id` exists in `T`).",
        solution:
          "`type RequiredID<T> = Partial<T> & Required<Pick<T, 'id'>>;` This intersects the `Partial` version of the type with a `Required` version of only the 'id' property."
      },
      jp: {
        title: "1つの特定のプロパティを**除く**すべてのプロパティがオプションである型をどのように作成しますか？",
        body: "ユーティリティ型を使用して、`T`のすべてのプロパティをオプションにするが、`id`プロパティを必須にする（`id`が`T`に存在すると仮定）`RequiredID<T>`を定義してください。",
        solution:
          "`type RequiredID<T> = Partial<T> & Required<Pick<T, 'id'>>;` これは、型の`Partial`バージョンと、'id'プロパティのみの`Required`バージョンを交差させます。"
      },
      vi: {
        title: "Làm thế nào để tạo một kiểu mà tất cả các thuộc tính là tùy chọn *ngoại trừ* một thuộc tính cụ thể?",
        body: "Sử dụng các kiểu tiện ích để định nghĩa `RequiredID<T>` làm cho tất cả các thuộc tính của `T` là tùy chọn, nhưng buộc thuộc tính `id` phải là bắt buộc (giả sử `id` tồn tại trong `T`).",
        solution:
          "`type RequiredID<T> = Partial<T> & Required<Pick<T, 'id'>>;` Điều này giao kiểu phiên bản `Partial` với phiên bản `Required` của chỉ thuộc tính 'id'."
      }
    }
  },
  {
    _id: "ts-s-009",
    difficulty: "senior",
    tags: ["type_inference", "best_common_type"],
    content: {
      en: {
        title: "Explain the **Best Common Type** algorithm in TypeScript.",
        body: "Given `let arr = [1, 'hello', true];`, what is the inferred type of `arr`, and why?",
        solution:
          "The Best Common Type algorithm infers the resulting type of an array or expression by considering the types of all candidates and picking the type that is compatible with all of them. For the example, the inferred type is `(string | number | boolean)[]` because it's the union type that covers all elements."
      },
      jp: {
        title: "TypeScriptにおける**Best Common Type**アルゴリズムを説明してください。",
        body: "`let arr = [1, 'hello', true];`が与えられた場合、`arr`の推論される型は何ですか、またその理由は何ですか？",
        solution:
          "Best Common Typeアルゴリズムは、すべての候補の型を考慮し、それらすべてと互換性のある型を選択することによって、配列または式の結果の型を推論します。例の場合、推論される型は`(string | number | boolean)[]`です。なぜなら、それはすべての要素をカバーする共用型だからです。"
      },
      vi: {
        title: "Giải thích thuật toán **Kiểu chung tốt nhất** (Best Common Type) trong TypeScript.",
        body: "Cho `let arr = [1, 'hello', true];`, kiểu được suy luận của `arr` là gì và tại sao?",
        solution:
          "Thuật toán Best Common Type suy luận kiểu kết quả của một mảng hoặc biểu thức bằng cách xem xét các kiểu của tất cả các ứng cử viên và chọn kiểu tương thích với tất cả chúng. Đối với ví dụ, kiểu được suy luận là `(string | number | boolean)[]` vì đó là kiểu hợp nhất bao trùm tất cả các phần tử."
      }
    }
  },
  {
    _id: "ts-s-010",
    difficulty: "senior",
    tags: ["config", "strictBindCallApply"],
    content: {
      en: {
        title: "What problem does the `strictBindCallApply: true` compiler option solve?",
        body: "How does it improve type safety when using the `bind`, `call`, and `apply` methods on functions?",
        solution:
          "It enables stricter checking of the built-in methods `bind`, `call`, and `apply` on functions. Without it, these methods accept any number of arguments. With it, TypeScript correctly models the method's signature and the required `this` context and arguments, preventing incorrect usage."
      },
      jp: {
        title: "`strictBindCallApply: true`コンパイラオプションはどのような問題を解決しますか？",
        body: "関数で`bind`、`call`、`apply`メソッドを使用する際、型安全性をどのように向上させますか？",
        solution:
          "関数における組み込みメソッド`bind`、`call`、`apply`のより厳密なチェックを有効にします。これがないと、これらのメソッドは任意の数の引数を受け入れます。これがあると、TypeScriptはメソッドのシグネチャ、必要な`this`コンテキスト、および引数を正しくモデル化し、誤った使用を防ぎます。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `strictBindCallApply: true` giải quyết vấn đề gì?",
        body: "Nó cải thiện tính an toàn kiểu (type safety) như thế nào khi sử dụng các phương thức `bind`, `call` và `apply` trên các hàm?",
        solution:
          "Nó cho phép kiểm tra nghiêm ngặt hơn các phương thức tích hợp `bind`, `call` và `apply` trên các hàm. Nếu không có nó, các phương thức này chấp nhận bất kỳ số lượng đối số nào. Với nó, TypeScript mô hình hóa chính xác chữ ký của phương thức và ngữ cảnh `this` cùng các đối số cần thiết, ngăn chặn việc sử dụng không đúng."
      }
    }
  },
  {
    _id: "ts-s-011",
    difficulty: "senior",
    tags: ["polymorphic_this", "classes"],
    content: {
      en: {
        title: "Explain the concept of the **Polymorphic `this` type** in classes.",
        body: "Why is it essential for correctly typing methods in base classes that return `this` and are extended by subclasses?",
        solution:
          "The polymorphic `this` type refers to the actual class instance on which the method is called, allowing methods to return the derived type (subclass) instead of just the base class type. This is crucial for maintaining type safety in **method chaining** across an inheritance hierarchy."
      },
      jp: {
        title: "クラスにおける**多態的な`this`型**の概念を説明してください。",
        body: "`this`を返し、サブクラスによって拡張される基底クラスのメソッドを正しく型付けするために、これが不可欠なのはなぜですか？",
        solution:
          "多態的な`this`型は、メソッドが呼び出される実際のクラスインスタンスを参照し、メソッドが基底クラスの型だけでなく、派生型（サブクラス）を返すことを可能にします。これは、継承階層全体での**メソッドチェーン**における型安全性を維持するために重要です。"
      },
      vi: {
        title: "Giải thích khái niệm **Kiểu `this` đa hình** (Polymorphic `this` type) trong các lớp.",
        body: "Tại sao nó lại cần thiết để gán kiểu chính xác cho các phương thức trong các lớp cơ sở trả về `this` và được mở rộng bởi các lớp con?",
        solution:
          "Kiểu `this` đa hình đề cập đến thể hiện lớp thực tế mà phương thức được gọi, cho phép các phương thức trả về kiểu dẫn xuất (lớp con) thay vì chỉ kiểu lớp cơ sở. Điều này rất quan trọng để duy trì tính an toàn kiểu trong **chuỗi phương thức** (method chaining) trên một hệ thống kế thừa."
      }
    }
  },
  {
    _id: "ts-s-012",
    difficulty: "senior",
    tags: ["generics", "default_type_parameters"],
    content: {
      en: {
        title: "How do **Default Type Parameters** work in generic functions or interfaces?",
        body: "Show the syntax for a generic interface `Box<T = unknown>` where the default type is `unknown`.",
        solution:
          "Default Type Parameters allow you to specify a default type if the consumer of the generic does not explicitly pass one. The syntax is: `interface Box<T = unknown> { value: T; }`"
      },
      jp: {
        title: "ジェネリック関数またはインターフェースにおける**Default Type Parameters**（デフォルト型パラメーター）はどのように機能しますか？",
        body: "デフォルトの型が`unknown`であるジェネリックインターフェース`Box<T = unknown>`の構文を示してください。",
        solution:
          "Default Type Parametersを使用すると、ジェネリックの利用者が明示的に型を渡さなかった場合に、デフォルトの型を指定できます。構文は: `interface Box<T = unknown> { value: T; }` です。"
      },
      vi: {
        title: "**Tham số kiểu mặc định** (Default Type Parameters) hoạt động như thế nào trong các hàm hoặc interface generic?",
        body: "Trình bày cú pháp cho một interface generic `Box<T = unknown>` trong đó kiểu mặc định là `unknown`.",
        solution:
          "Tham số kiểu mặc định cho phép bạn chỉ định một kiểu mặc định nếu người tiêu thụ generic không truyền kiểu một cách rõ ràng. Cú pháp là: `interface Box<T = unknown> { value: T; }`"
      }
    }
  },
  {
    _id: "ts-s-013",
    difficulty: "senior",
    tags: ["type_utility", "deep_readonly"],
    content: {
      en: {
        title: "How would you implement a **Deep Readonly** utility type?",
        body: "What conditional check is required inside the mapped type to ensure that nested objects are also made readonly?",
        solution:
          "A Deep Readonly recursively applies `readonly` to all properties, including nested object properties. The required check is to see if the property type is an object (using `keyof T[P] extends never` for primitives or `T[P] extends object`): `type DeepReadonly<T> = { readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; };`"
      },
      jp: {
        title: "**Deep Readonly**ユーティリティ型をどのように実装しますか？",
        body: "ネストされたオブジェクトもreadonlyになるようにするために、マップされた型内でどのような条件チェックが必要ですか？",
        solution:
          "Deep Readonlyは、ネストされたオブジェクトのプロパティを含むすべてのプロパティに`readonly`を再帰的に適用します。必要なチェックは、プロパティ型がオブジェクトであるかどうかを確認することです（プリミティブには`keyof T[P] extends never`、または`T[P] extends object`を使用）: `type DeepReadonly<T> = { readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; };`"
      },
      vi: {
        title: "Làm thế nào bạn sẽ triển khai một kiểu tiện ích **Deep Readonly**?",
        body: "Kiểm tra điều kiện nào là bắt buộc bên trong mapped type để đảm bảo rằng các đối tượng lồng nhau cũng được làm readonly?",
        solution:
          "Deep Readonly đệ quy áp dụng `readonly` cho tất cả các thuộc tính, bao gồm cả các thuộc tính đối tượng lồng nhau. Kiểm tra bắt buộc là để xem kiểu thuộc tính có phải là đối tượng không (sử dụng `keyof T[P] extends never` cho kiểu nguyên thủy hoặc `T[P] extends object`): `type DeepReadonly<T> = { readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; };`"
      }
    }
  },
  {
    _id: "ts-s-014",
    difficulty: "senior",
    tags: ["config", "type_checking", "noUncheckedIndexedAccess"],
    content: {
      en: {
        title: "What is the consequence of setting `noUncheckedIndexedAccess: true`?",
        body: "How does this setting change the inferred type of accessing an element in an array or an object property by index?",
        solution:
          "It forces TypeScript to include `undefined` in the type when accessing an array element by index (`arr[i]`) or an object property by an unknown key (`obj[key]`). This helps prevent potential runtime errors when developers assume an indexed access will always return a value."
      },
      jp: {
        title: "`noUncheckedIndexedAccess: true`を設定することの結果は何ですか？",
        body: "この設定は、配列の要素またはオブジェクトのプロパティをインデックスでアクセスする際の推論される型をどのように変更しますか？",
        solution:
          "インデックスで配列要素（`arr[i]`）または不明なキーでオブジェクトプロパティ（`obj[key]`）にアクセスする際に、TypeScriptに型に`undefined`を含めることを強制します。これは、開発者がインデックス付きアクセスが常に値を返すと想定している場合の潜在的な実行時エラーを防ぐのに役立ちます。"
      },
      vi: {
        title: "Hệ quả của việc đặt `noUncheckedIndexedAccess: true` là gì?",
        body: "Cài đặt này thay đổi kiểu được suy luận khi truy cập một phần tử trong mảng hoặc một thuộc tính đối tượng bằng chỉ mục như thế nào?",
        solution:
          "Nó buộc TypeScript phải bao gồm `undefined` trong kiểu khi truy cập một phần tử mảng bằng chỉ mục (`arr[i]`) hoặc một thuộc tính đối tượng bằng một khóa không xác định (`obj[key]`). Điều này giúp ngăn chặn các lỗi runtime tiềm ẩn khi nhà phát triển cho rằng việc truy cập theo chỉ mục sẽ luôn trả về một giá trị."
      }
    }
  },
  {
    _id: "ts-s-015",
    difficulty: "senior",
    tags: ["generics", "higher_kinded_types", "simulating"],
    content: {
      en: {
        title: "How does TypeScript *simulate* Higher-Kinded Types (HKTs)?",
        body: "Explain the common pattern involving type placeholders or type-level functions used to represent HKTs.",
        solution:
          "TypeScript doesn't natively support HKTs, but they can be simulated using interfaces/types that take a generic parameter but whose properties always use that parameter in a fixed structure. The common pattern involves a 'container' type (like `Box<T>`) and conditional types to perform transformations on the inner type (`T`)."
      },
      jp: {
        title: "TypeScriptはHigher-Kinded Types（HKT、高階型）をどのように*シミュレート*しますか？",
        body: "HKTを表すために使用される型プレースホルダーまたは型レベルの関数を含む一般的なパターンを説明してください。",
        solution:
          "TypeScriptはHKTをネイティブにはサポートしていませんが、ジェネリックパラメーターを取るが、そのプロパティが常にそのパラメーターを固定構造で使用するインターフェース/型を使用してシミュレートできます。一般的なパターンには、「コンテナ」型（`Box<T>`など）と、内側の型（`T`）に対して変換を実行するためのConditional Typeが含まれます。"
      },
      vi: {
        title: "TypeScript *mô phỏng* Kiểu Bậc cao (Higher-Kinded Types - HKTs) như thế nào?",
        body: "Giải thích mẫu phổ biến liên quan đến các trình giữ chỗ kiểu (type placeholders) hoặc các hàm cấp kiểu được sử dụng để đại diện cho HKTs.",
        solution:
          "TypeScript không hỗ trợ HKTs một cách tự nhiên, nhưng chúng có thể được mô phỏng bằng cách sử dụng các interface/kiểu nhận tham số generic nhưng các thuộc tính của chúng luôn sử dụng tham số đó trong một cấu trúc cố định. Mẫu phổ biến bao gồm một kiểu 'container' (như `Box<T>`) và các kiểu điều kiện (conditional types) để thực hiện các phép biến đổi trên kiểu bên trong (`T`)."
      }
    }
  },
  {
    _id: "ts-s-016",
    difficulty: "senior",
    tags: ["generics", "tuple_manipulation", "rest_elements"],
    content: {
      en: {
        title: "How do you define a generic type that prepends a type element to an existing tuple type?",
        body: "Define `Prepend<T extends any[], A>` that takes a tuple `T` and a type `A` and returns a new tuple with `A` as the first element.",
        solution:
          "Use a Rest Element (`...T`) in a tuple type: `type Prepend<T extends any[], A> = [A, ...T];`"
      },
      jp: {
        title: "既存のタプル型に型要素を前置するジェネリック型をどのように定義しますか？",
        body: "タプル`T`と型`A`を受け取り、`A`を最初の要素とする新しいタプルを返す`Prepend<T extends any[], A>`を定義してください。",
        solution:
          "タプル型でRest Element (`...T`) を使用します: `type Prepend<T extends any[], A> = [A, ...T];`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu generic thêm một phần tử kiểu vào đầu một kiểu tuple hiện có?",
        body: "Định nghĩa `Prepend<T extends any[], A>` nhận một tuple `T` và một kiểu `A` và trả về một tuple mới với `A` là phần tử đầu tiên.",
        solution:
          "Sử dụng một Rest Element (`...T`) trong kiểu tuple: `type Prepend<T extends any[], A> = [A, ...T];`"
      }
    }
  },
  {
    _id: "ts-s-017",
    difficulty: "senior",
    tags: ["keyof", "index_signatures"],
    content: {
      en: {
        title: "What is the result of `keyof T` if `T` only has a string **index signature** (`[key: string]: any;`)?",
        body: "Does `keyof T` return `string` or something else in this scenario, and why?",
        solution:
          "It returns **`string | number`**. TypeScript considers `number` keys to be convertible to `string` keys, so `keyof` of a type with only a string index signature includes both string and number literal types."
      },
      jp: {
        title: "`T`が文字列の**インデックスシグネチャ**（`[key: string]: any;`）のみを持つ場合、`keyof T`の結果は何ですか？",
        body: "このシナリオでは、`keyof T`は`string`を返しますか、それとも何か別のものを返しますか？また、その理由は何ですか？",
        solution:
          "それは**`string | number`**を返します。TypeScriptは`number`キーが`string`キーに変換可能であると見なすため、文字列インデックスシグネチャのみを持つ型の`keyof`には、文字列リテラル型と数値リテラル型の両方が含まれます。"
      },
      vi: {
        title: "Kết quả của `keyof T` là gì nếu `T` chỉ có một **chữ ký chỉ mục** chuỗi (`[key: string]: any;`)?",
        body: "Trong kịch bản này, `keyof T` trả về `string` hay thứ gì khác, và tại sao?",
        solution:
          "Nó trả về **`string | number`**. TypeScript coi các khóa `number` có thể chuyển đổi thành các khóa `string`, vì vậy `keyof` của một kiểu chỉ có chữ ký chỉ mục chuỗi bao gồm cả kiểu chuỗi cố định và kiểu số cố định."
      }
    }
  },
  {
    _id: "ts-s-018",
    difficulty: "senior",
    tags: ["utility_types", "constructor", "instance_type"],
    content: {
      en: {
        title: "How do you extract the constructor parameters type of a class or constructor function?",
        body: "Use a utility type with `infer` to define `ConstructorParameters<T>` that returns a tuple of the constructor's parameters.",
        solution:
          "Use the `ConstructorParameters<T>` utility type (which uses `infer` internally): `type Params = ConstructorParameters<typeof MyClass>;`"
      },
      jp: {
        title: "クラスまたはコンストラクター関数のコンストラクターパラメーター型をどのように抽出しますか？",
        body: "`infer`を使用したユーティリティ型を使用して、コンストラクターのパラメーターのタプルを返す`ConstructorParameters<T>`を定義してください。",
        solution:
          "`ConstructorParameters<T>`ユーティリティ型を使用します（内部で`infer`を使用します）: `type Params = ConstructorParameters<typeof MyClass>;`"
      },
      vi: {
        title: "Làm thế nào để trích xuất kiểu tham số hàm tạo (constructor parameters type) của một lớp hoặc hàm tạo?",
        body: "Sử dụng một kiểu tiện ích với `infer` để định nghĩa `ConstructorParameters<T>` trả về một tuple các tham số của hàm tạo.",
        solution:
          "Sử dụng kiểu tiện ích `ConstructorParameters<T>` (sử dụng `infer` bên trong): `type Params = ConstructorParameters<typeof MyClass>;`"
      }
    }
  },
  {
    _id: "ts-s-019",
    difficulty: "senior",
    tags: ["config", "type_checking", "exactOptionalPropertyTypes"],
    content: {
      en: {
        title: "What is the purpose of the `exactOptionalPropertyTypes: true` compiler option?",
        body: "How does it change the assignment rules for optional properties (`prop?: string`)?",
        solution:
          "When enabled, an optional property `prop?: string` is treated as `string | undefined`. It prevents you from assigning **`undefined`** to an optional property that hasn't been explicitly assigned `undefined` in its type, enforcing that optionality means 'may be present or absent', not 'may be present and explicitly undefined'."
      },
      jp: {
        title: "`exactOptionalPropertyTypes: true`コンパイラオプションの目的は何ですか？",
        body: "これは、オプションのプロパティ（`prop?: string`）の割り当てルールをどのように変更しますか？",
        solution:
          "有効にすると、オプションのプロパティ`prop?: string`は`string | undefined`として扱われます。これにより、型で明示的に`undefined`が割り当てられていないオプションのプロパティに**`undefined`**を割り当てることを防ぎ、オプション性は「存在するかもしれないし、存在しないかもしれない」ことを意味し、「存在するかもしれないし、明示的にundefinedかもしれない」ことを意味しないことを強制します。"
      },
      vi: {
        title: "Mục đích của tùy chọn trình biên dịch `exactOptionalPropertyTypes: true` là gì?",
        body: "Nó thay đổi các quy tắc gán cho các thuộc tính tùy chọn (`prop?: string`) như thế nào?",
        solution:
          "Khi được bật, một thuộc tính tùy chọn `prop?: string` được coi là `string | undefined`. Nó ngăn bạn gán **`undefined`** cho một thuộc tính tùy chọn chưa được gán `undefined` một cách rõ ràng trong kiểu của nó, bắt buộc rằng tùy chọn có nghĩa là 'có thể có hoặc không có mặt', chứ không phải 'có thể có mặt và rõ ràng là undefined'."
      }
    }
  },
  {
    _id: "ts-s-020",
    difficulty: "senior",
    tags: ["template_literals", "recursion"],
    content: {
      en: {
        title: "How can Template Literal Types be used to implement **type-level recursion**?",
        body: "Give a theoretical example of a recursive Template Literal Type, like a type that reverses a string literal.",
        solution:
          "Type-level recursion is achieved through Conditional Types that check the structure of a string literal using `infer`, and then call themselves on the remaining parts. Example: `type ReverseString<S> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : '';`"
      },
      jp: {
        title: "Template Literal Typesは、**型レベルの再帰**を実装するためにどのように使用できますか？",
        body: "文字列リテラルを反転する型など、再帰的なTemplate Literal Typeの理論的な例を挙げてください。",
        solution:
          "型レベルの再帰は、`infer`を使用して文字列リテラルの構造をチェックし、残りの部分で自身を呼び出すConditional Typeによって実現されます。例: `type ReverseString<S> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : '';`"
      },
      vi: {
        title: "Template Literal Types có thể được sử dụng để triển khai **đệ quy cấp kiểu** (type-level recursion) như thế nào?",
        body: "Đưa ra một ví dụ lý thuyết về một Template Literal Type đệ quy, như một kiểu đảo ngược một chuỗi cố định.",
        solution:
          "Đệ quy cấp kiểu được thực hiện thông qua các Kiểu điều kiện kiểm tra cấu trúc của một chuỗi cố định bằng cách sử dụng `infer`, và sau đó tự gọi lại chính nó trên các phần còn lại. Ví dụ: `type ReverseString<S> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : '';`"
      }
    }
  },
  {
    _id: "ts-s-021",
    difficulty: "senior",
    tags: ["advanced_types", "nominal_typing", "brands"],
    content: {
      en: {
        title: "How do you simulate **Nominal Typing** in TypeScript using 'brands'?",
        body: "What must be added to a type alias (`type UserID = string;`) to prevent it from being freely assignable to a plain `string`?",
        solution:
          "Nominal Typing is simulated by adding a unique, non-existent property (the 'brand') to the type, often using an intersection type. Example: `type UserID = string & { __brand: 'UserID' };` This prevents a regular `string` from being assigned to `UserID`, enforcing type distinction."
      },
      jp: {
        title: "TypeScriptで「ブランド」を使用して**Nominal Typing**（公称型付け）をどのようにシミュレートしますか？",
        body: "型エイリアス（`type UserID = string;`）がプレーンな`string`に自由に割り当てられるのを防ぐために、何を追加する必要がありますか？",
        solution:
          "Nominal Typingは、交差型を使用して、型に一意で存在しないプロパティ（「ブランド」）を追加することでシミュレートされます。例: `type UserID = string & { __brand: 'UserID' };` これにより、通常の`string`が`UserID`に割り当てられるのを防ぎ、型の区別を強制します。"
      },
      vi: {
        title: "Làm thế nào bạn mô phỏng **Kiểu định danh** (Nominal Typing) trong TypeScript bằng cách sử dụng 'brands'?",
        body: "Điều gì phải được thêm vào một type alias (`type UserID = string;`) để ngăn nó được gán tự do cho một `string` thuần túy?",
        solution:
          "Kiểu định danh được mô phỏng bằng cách thêm một thuộc tính duy nhất, không tồn tại (cái 'brand') vào kiểu, thường sử dụng kiểu giao (intersection type). Ví dụ: `type UserID = string & { __brand: 'UserID' };` Điều này ngăn một `string` thông thường được gán cho `UserID`, buộc phải có sự phân biệt kiểu."
      }
    }
  },
  {
    _id: "ts-s-022",
    difficulty: "senior",
    tags: ["config", "composite", "incremental"],
    content: {
      en: {
        title: "Explain the purpose of the `composite: true` compiler option.",
        body: "What feature does it enable, and why is it used in large, multi-package monorepos?",
        solution:
          "`composite: true` is required for a project to be a **Project Reference** target. It enables cross-project dependencies and ensures the project builds all necessary files (`.d.ts` and maps). It is crucial for **Incremental Builds** (`--incremental`), allowing the compiler to only recompile dependent files when sources change, speeding up large monorepo builds."
      },
      jp: {
        title: "`composite: true`コンパイラオプションの目的を説明してください。",
        body: "それはどのような機能を有効にし、なぜ大規模なマルチパッケージモノレポで使用されるのですか？",
        solution:
          "`composite: true`は、プロジェクトが**Project Reference**のターゲットであるために必要です。これにより、クロスプロジェクトの依存関係が可能になり、プロジェクトが必要なすべてのファイル（`.d.ts`とマップ）をビルドすることが保証されます。これは**Incremental Builds**（`--incremental`）にとって不可欠であり、ソースが変更されたときにコンパイラが依存ファイルのみを再コンパイルできるようにすることで、大規模なモノレポのビルドを高速化します。"
      },
      vi: {
        title: "Giải thích mục đích của tùy chọn trình biên dịch `composite: true`.",
        body: "Tính năng nào nó cho phép, và tại sao nó được sử dụng trong các monorepos lớn, nhiều package?",
        solution:
          "`composite: true` là bắt buộc để một project trở thành mục tiêu của **Tham chiếu Project** (Project Reference). Nó cho phép các dependency giữa các project và đảm bảo project xây dựng tất cả các file cần thiết (`.d.ts` và maps). Nó rất quan trọng đối với **Biên dịch tăng dần** (`--incremental`), cho phép trình biên dịch chỉ biên dịch lại các file phụ thuộc khi các nguồn thay đổi, tăng tốc độ xây dựng monorepo lớn."
      }
    }
  },
  {
    _id: "ts-s-023",
    difficulty: "senior",
    tags: ["utility_types", "union", "distribution"],
    content: {
      en: {
        title: "Explain **Distributive Conditional Types**.",
        body: "Why does `type MaybeArray<T> = T extends any[] ? T[number] : T;` distribute over a union, and what is the result for `MaybeArray<string | number[]>`?",
        solution:
          "Conditional Types where the checked type (`T`) is a naked type parameter distribute over union types. The compiler applies the condition to each member of the union individually and then combines the results. Result: `string | number` (because it is computed as `MaybeArray<string> | MaybeArray<number[]>`)."
      },
      jp: {
        title: "**Distributive Conditional Types**（分配的な条件型）を説明してください。",
        body: "なぜ`type MaybeArray<T> = T extends any[] ? T[number] : T;`は共用体上に分配され、`MaybeArray<string | number[]>`の結果は何ですか？",
        solution:
          "チェックされる型（`T`）がネイキッド型パラメーターであるConditional Typeは、共用型上に分配されます。コンパイラは共用体の各メンバーに個別に条件を適用し、その後結果を結合します。結果: `string | number` （`MaybeArray<string> | MaybeArray<number[]>`として計算されるため）。"
      },
      vi: {
        title: "Giải thích **Kiểu điều kiện phân phối** (Distributive Conditional Types).",
        body: "Tại sao `type MaybeArray<T> = T extends any[] ? T[number] : T;` lại phân phối trên một union, và kết quả của `MaybeArray<string | number[]>` là gì?",
        solution:
          "Các Kiểu điều kiện mà kiểu được kiểm tra (`T`) là một tham số kiểu trần (naked type parameter) sẽ phân phối trên các kiểu hợp nhất. Trình biên dịch áp dụng điều kiện cho từng thành viên của union riêng lẻ và sau đó kết hợp các kết quả. Kết quả: `string | number` (bởi vì nó được tính toán là `MaybeArray<string> | MaybeArray<number[]>`)."
      }
    }
  },
  {
    _id: "ts-s-024",
    difficulty: "senior",
    tags: ["this_type", "type_guards", "this_is_type"],
    content: {
      en: {
        title: "How does `this is TypeName` work in class methods?",
        body: "What is the purpose of using a `this` type predicate in a method, such as `function isInitialized(this: MyClass): this is InitializedMyClass`?",
        solution:
          "The `this is TypeName` return type tells TypeScript that if the method returns true, the object instance (`this`) is guaranteed to be of the specified `TypeName` (or a more narrowed type) for the rest of the scope, allowing the developer to safely access properties that might have been optional before the check."
      },
      jp: {
        title: "クラスメソッドで`this is TypeName`はどのように機能しますか？",
        body: "`function isInitialized(this: MyClass): this is InitializedMyClass`のように、メソッドで`this`型述語を使用する目的は何ですか？",
        solution:
          "`this is TypeName`という戻り値の型は、メソッドがtrueを返した場合、オブジェクトインスタンス（`this`）が残りのスコープで指定された`TypeName`（またはより絞り込まれた型）であることが保証されることをTypeScriptに伝えます。これにより、開発者はチェック前はオプションだった可能性のあるプロパティに安全にアクセスできます。"
      },
      vi: {
        title: "`this is TypeName` hoạt động như thế nào trong các phương thức của lớp?",
        body: "Mục đích của việc sử dụng vị từ kiểu `this` trong một phương thức, chẳng hạn như `function isInitialized(this: MyClass): this is InitializedMyClass` là gì?",
        solution:
          "Kiểu trả về `this is TypeName` cho TypeScript biết rằng nếu phương thức trả về true, thể hiện đối tượng (`this`) được đảm bảo là thuộc `TypeName` được chỉ định (hoặc một kiểu hẹp hơn) trong phần còn lại của phạm vi, cho phép nhà phát triển truy cập an toàn các thuộc tính có thể là tùy chọn trước khi kiểm tra."
      }
    }
  },
  {
    _id: "ts-s-025",
    difficulty: "senior",
    tags: ["utility_types", "constructor", "abstract"],
    content: {
      en: {
        title: "How do you define a type that represents a **constructable class/constructor**?",
        body: "Show the syntax for a generic type `Constructable<T>` that represents a constructor that returns an instance of type `T`.",
        solution:
          "Use the `new` keyword in the function signature: `type Constructable<T> = new (...args: any[]) => T;` This ensures that only classes or functions that can be instantiated with `new` can be passed."
      },
      jp: {
        title: "**構築可能なクラス/コンストラクター**を表す型をどのように定義しますか？",
        body: "型`T`のインスタンスを返すコンストラクターを表すジェネリック型`Constructable<T>`の構文を示してください。",
        solution:
          "関数シグネチャで`new`キーワードを使用します: `type Constructable<T> = new (...args: any[]) => T;` これにより、`new`でインスタンス化できるクラスまたは関数のみが渡されることが保証されます。"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu đại diện cho một **lớp/hàm tạo có thể xây dựng** (constructable class/constructor)?",
        body: "Trình bày cú pháp cho một kiểu generic `Constructable<T>` đại diện cho một hàm tạo trả về một thể hiện có kiểu `T`.",
        solution:
          "Sử dụng từ khóa `new` trong chữ ký hàm: `type Constructable<T> = new (...args: any[]) => T;` Điều này đảm bảo rằng chỉ các lớp hoặc hàm có thể được khởi tạo bằng `new` mới có thể được truyền vào."
      }
    }
  },
  {
    _id: "ts-s-026",
    difficulty: "senior",
    tags: ["config", "compiler_options", "target"],
    content: {
      en: {
        title: "How does the `target` compiler option interact with the types available in the global scope?",
        body: "If `target` is set to 'ES5', what global types are typically *not* available without polyfills or lib declarations?",
        solution:
          "Setting `target` determines which ECMAScript features TypeScript transpiles *down to*. However, it also dictates which **built-in APIs** TypeScript assumes are available. If `target` is 'ES5', global types like `Promise`, `Map`, `Set`, and modern array methods like `Array.prototype.includes` are often missing from the default `lib` and require explicit inclusion or polyfills."
      },
      jp: {
        title: "`target`コンパイラオプションは、グローバルスコープで利用可能な型とどのように相互作用しますか？",
        body: "`target`が 'ES5' に設定されている場合、ポリフィルまたはlib宣言なしでは、どのグローバル型が通常*利用できません*か？",
        solution:
          "`target`を設定すると、TypeScriptがトランスパイル*ダウン*するECMAScript機能が決まります。ただし、TypeScriptが利用可能であると想定する**組み込みAPI**も決定されます。`target`が 'ES5' の場合、`Promise`、`Map`、`Set`、および`Array.prototype.includes`のような最新の配列メソッドなどのグローバル型は、デフォルトの`lib`から欠落していることが多く、明示的な含めることまたはポリフィルが必要です。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `target` tương tác với các kiểu có sẵn trong phạm vi toàn cục như thế nào?",
        body: "Nếu `target` được đặt thành 'ES5', những kiểu toàn cục nào thường *không* có sẵn nếu không có polyfill hoặc khai báo lib?",
        solution:
          "Việc đặt `target` xác định các tính năng ECMAScript mà TypeScript chuyển đổi *xuống* phiên bản nào. Tuy nhiên, nó cũng chỉ định những **API tích hợp sẵn** nào TypeScript giả định là có sẵn. Nếu `target` là 'ES5', các kiểu toàn cục như `Promise`, `Map`, `Set` và các phương thức mảng hiện đại như `Array.prototype.includes` thường bị thiếu trong `lib` mặc định và yêu cầu đưa vào rõ ràng hoặc polyfill."
      }
    }
  },
  {
    _id: "ts-s-027",
    difficulty: "senior",
    tags: ["decorators", "property"],
    content: {
      en: {
        title: "What are the arguments passed to a **Property Decorator**?",
        body: "List the two arguments received by a Property Decorator function.",
        solution:
          "A Property Decorator receives two arguments: 1. The **target** (either the constructor function for static members or the prototype for instance members). 2. The **property key** (name) of the member."
      },
      jp: {
        title: "**Property Decorator**に渡される引数とは何ですか？",
        body: "Property Decorator関数が受け取る2つの引数をリストしてください。",
        solution:
          "Property Decoratorは2つの引数を受け取ります: 1. **ターゲット**（静的メンバーの場合はコンストラクター関数、インスタンスメンバーの場合はプロトタイプ）。 2. メンバーの**プロパティキー**（名前）。"
      },
      vi: {
        title: "Các đối số được truyền cho **Property Decorator** là gì?",
        body: "Liệt kê hai đối số mà hàm Property Decorator nhận được.",
        solution:
          "Property Decorator nhận hai đối số: 1. **Mục tiêu (target)** (là hàm tạo cho các thành viên static hoặc prototype cho các thành viên thể hiện). 2. **Khóa thuộc tính** (tên) của thành viên."
      }
    }
  },
  {
    _id: "ts-s-028",
    difficulty: "senior",
    tags: ["declaration_files", "triple_slash"],
    content: {
      en: {
        title: "When should a developer use a **Triple-Slash Directive** (`/// <reference.../>`) instead of a regular `import`?",
        body: "What is the primary use case for `/// <reference types=\"...\" />`?",
        solution:
          "Triple-slash directives are primarily used for specifying dependencies in **non-module** files (legacy scripts) or, most commonly, to instruct the compiler to include type definitions from a specific package via `/// <reference types=\"...\" />` where the package is not explicitly imported in the file, or for external module references."
      },
      jp: {
        title: "開発者は通常の`import`の代わりに**Triple-Slash Directive**（`/// <reference.../>`）をいつ使用すべきですか？",
        body: "`/// <reference types=\"...\" />`の主なユースケースは何ですか？",
        solution:
          "Triple-slash directiveは、主に**非モジュール**ファイル（レガシースクリプト）での依存関係を指定するために使用されます。または、最も一般的には、パッケージがファイル内で明示的にインポートされていない場合に、`/// <reference types=\"...\" />`を介して特定のパッケージからの型定義を含めるようにコンパイラに指示するために使用されます。または、外部モジュール参照のためです。"
      },
      vi: {
        title: "Khi nào một nhà phát triển nên sử dụng **Chỉ thị ba dấu gạch chéo** (Triple-Slash Directive - `/// <reference.../>`) thay vì một `import` thông thường?",
        body: "Trường hợp sử dụng chính cho `/// <reference types=\"...\" />` là gì?",
        solution:
          "Chỉ thị ba dấu gạch chéo chủ yếu được sử dụng để chỉ định các dependency trong các file **phi-module** (script cũ) hoặc, phổ biến nhất, để hướng dẫn trình biên dịch đưa vào các định nghĩa kiểu từ một package cụ thể thông qua `/// <reference types=\"...\" />` trong đó package không được import rõ ràng trong file, hoặc cho các tham chiếu module bên ngoài."
      }
    }
  },
  {
    _id: "ts-s-029",
    difficulty: "senior",
    tags: ["advanced_types", "covariant", "contravariant"],
    content: {
      en: {
        title: "In the context of subtyping and function types, explain the difference between **Covariance** and **Contravariance**.",
        body: "Which type relationship (input or output) in function signatures is typically covariant and which is contravariant?",
        solution:
          "**Covariance** means the type relationship is preserved (if $A \subseteq B$, then $F(A) \subseteq F(B)$). **Contravariance** means the type relationship is reversed (if $A \subseteq B$, then $F(B) \subseteq F(A)$). Function **return types** are typically covariant, while function **parameter types** are typically contravariant (enforced by `strictFunctionTypes`)."
      },
      jp: {
        title: "サブタイピングと関数型の文脈において、**Covariance**（共変性）と**Contravariance**（反変性）の違いを説明してください。",
        body: "関数シグネチャのどの型関係（入力または出力）が通常共変であり、どれが反変ですか？",
        solution:
          "**共変性**とは、型関係が維持されることを意味します（$A \subseteq B$の場合、$F(A) \subseteq F(B)$）。**反変性**とは、型関係が逆転することを意味します（$A \subseteq B$の場合、$F(B) \subseteq F(A)$）。関数の**戻り値の型**は通常共変であり、関数の**パラメーター型**は通常反変です（`strictFunctionTypes`によって強制されます）。"
      },
      vi: {
        title: "Trong ngữ cảnh của phân kiểu con (subtyping) và kiểu hàm, giải thích sự khác biệt giữa **Hiệp biến** (Covariance) và **Nghịch biến** (Contravariance).",
        body: "Mối quan hệ kiểu nào (đầu vào hay đầu ra) trong chữ ký hàm thường là hiệp biến và mối quan hệ nào là nghịch biến?",
        solution:
          "**Hiệp biến** có nghĩa là mối quan hệ kiểu được bảo toàn (nếu $A \subseteq B$, thì $F(A) \subseteq F(B)$). **Nghịch biến** có nghĩa là mối quan hệ kiểu bị đảo ngược (nếu $A \subseteq B$, thì $F(B) \subseteq F(A)$). **Kiểu trả về** của hàm thường là hiệp biến, trong khi **kiểu tham số** của hàm thường là nghịch biến (được bắt buộc bởi `strictFunctionTypes`)."
      }
    }
  },
  {
    _id: "ts-s-030",
    difficulty: "senior",
    tags: ["mapped_types", "remapping"],
    content: {
      en: {
        title: "What is **Key Remapping** in Mapped Types?",
        body: "Show the syntax used in a Mapped Type to rename keys, for instance, appending 'Id' to every key.",
        solution:
          "Key Remapping uses the `as` clause to change the names of the resulting properties based on the key name being iterated over. Syntax: `type KeysWithId<T> = { [K in keyof T as `${string & K}Id`]: T[K] };`"
      },
      jp: {
        title: "Mapped Typesにおける**Key Remapping**（キー再マッピング）とは何ですか？",
        body: "Mapped Typeで使用される構文を示し、たとえば、すべてのキーに 'Id' を追加してキーの名前を変更する方法を示してください。",
        solution:
          "Key Remappingは、`as`句を使用して、反復処理されているキー名に基づいて結果のプロパティの名前を変更します。構文: `type KeysWithId<T> = { [K in keyof T as `${string & K}Id`]: T[K] };`"
      },
      vi: {
        title: "**Ánh xạ lại Khóa** (Key Remapping) trong Mapped Types là gì?",
        body: "Trình bày cú pháp được sử dụng trong Mapped Type để đổi tên khóa, ví dụ: thêm 'Id' vào mọi khóa.",
        solution:
          "Ánh xạ lại Khóa sử dụng mệnh đề `as` để thay đổi tên của các thuộc tính kết quả dựa trên tên khóa đang được lặp lại. Cú pháp: `type KeysWithId<T> = { [K in keyof T as `${string & K}Id`]: T[K] };`"
      }
    }
  },
  {
    _id: "ts-s-031",
    difficulty: "senior",
    tags: ["decorators", "method", "this"],
    content: {
      en: {
        title: "When writing a **Method Decorator**, how can you modify the method's behavior at runtime?",
        body: "Which property of the Descriptor object must be manipulated to intercept the function call?",
        solution:
          "You must manipulate the `value` property of the Property Descriptor (which is the third argument passed to the decorator). You typically save the original method, replace the `value` with a new function that performs custom logic, and then calls the original method."
      },
      jp: {
        title: "**Method Decorator**を作成する際、実行時にメソッドの動作をどのように変更できますか？",
        body: "関数呼び出しを傍受するために、Descriptorオブジェクトのどのプロパティを操作する必要がありますか？",
        solution:
          "Property Descriptor（デコレーターに渡される3番目の引数）の`value`プロパティを操作する必要があります。通常、元のメソッドを保存し、`value`をカスタムロジックを実行する新しい関数に置き換え、その後元のメソッドを呼び出します。"
      },
      vi: {
        title: "Khi viết **Method Decorator**, làm thế nào bạn có thể sửa đổi hành vi của phương thức tại thời điểm chạy (runtime)?",
        body: "Thuộc tính nào của đối tượng Descriptor phải được thao túng để chặn cuộc gọi hàm?",
        solution:
          "Bạn phải thao túng thuộc tính `value` của Property Descriptor (là đối số thứ ba được truyền cho decorator). Bạn thường lưu phương thức gốc, thay thế `value` bằng một hàm mới thực hiện logic tùy chỉnh, sau đó gọi phương thức gốc."
      }
    }
  },
  {
    _id: "ts-s-032",
    difficulty: "senior",
    tags: ["config", "type_system", "noImplicitReturns"],
    content: {
      en: {
        title: "What error does the `noImplicitReturns: true` compiler option prevent?",
        body: "Why is this setting useful for maintaining code quality, especially in functions with conditional logic?",
        solution:
          "It ensures that every code path in a function that is expected to return a value actually returns one. It prevents bugs where a conditional branch might implicitly return `undefined` (because there is no explicit `return`) when the function's type signature implies a value should always be returned."
      },
      jp: {
        title: "`noImplicitReturns: true`コンパイラオプションはどのようなエラーを防ぎますか？",
        body: "この設定は、特に条件付きロジックを持つ関数において、コード品質を維持するためにどのように役立ちますか？",
        solution:
          "値を返すことが期待される関数のすべてのコードパスが実際に値を返すことを保証します。関数の型シグネチャが常に値が返されるべきであることを示唆している場合に、条件付きブランチが暗黙的に`undefined`を返す可能性があるバグを防ぎます（明示的な`return`がないため）。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `noImplicitReturns: true` ngăn chặn lỗi gì?",
        body: "Tại sao cài đặt này hữu ích cho việc duy trì chất lượng mã, đặc biệt trong các hàm có logic điều kiện?",
        solution:
          "Nó đảm bảo rằng mọi đường dẫn mã trong một hàm được mong đợi trả về một giá trị thực sự trả về một giá trị. Nó ngăn chặn lỗi khi một nhánh điều kiện có thể ngầm định trả về `undefined` (vì không có `return` rõ ràng) trong khi chữ ký kiểu của hàm ngụ ý rằng một giá trị phải luôn được trả về."
      }
    }
  },
  {
    _id: "ts-s-033",
    difficulty: "senior",
    tags: ["mapped_types", "filter", "keyof"],
    content: {
      en: {
        title: "How do you implement a type that **filters** properties based on their value type?",
        body: "Define `Filter<T, ValueType>` that keeps only the keys of `T` whose corresponding property value is assignable to `ValueType`.",
        solution:
          "Use a Conditional Type within a Mapped Type with the `as` clause, mapping away the unwanted keys to `never`. `type Filter<T, ValueType> = { [K in keyof T as T[K] extends ValueType ? K : never]: T[K] };`"
      },
      jp: {
        title: "値の型に基づいてプロパティを**フィルタリング**する型をどのように実装しますか？",
        body: "対応するプロパティ値が`ValueType`に割り当て可能な`T`のキーのみを保持する`Filter<T, ValueType>`を定義してください。",
        solution:
          "Mapped Type内でConditional Typeを`as`句とともに使用し、不要なキーを`never`にマッピングして取り除きます。 `type Filter<T, ValueType> = { [K in keyof T as T[K] extends ValueType ? K : never]: T[K] };`"
      },
      vi: {
        title: "Làm thế nào bạn triển khai một kiểu **lọc** các thuộc tính dựa trên kiểu giá trị của chúng?",
        body: "Định nghĩa `Filter<T, ValueType>` chỉ giữ lại các khóa của `T` mà giá trị thuộc tính tương ứng có thể gán cho `ValueType`.",
        solution:
          "Sử dụng Kiểu điều kiện trong Mapped Type với mệnh đề `as`, ánh xạ các khóa không mong muốn thành `never`. `type Filter<T, ValueType> = { [K in keyof T as T[K] extends ValueType ? K : never]: T[K] };`"
      }
    }
  },
  {
    _id: "ts-s-034",
    difficulty: "senior",
    tags: ["advanced_types", "template_literals", "capitalization"],
    content: {
      en: {
        title: "What are the four built-in **String Manipulation Utility Types** for Template Literal Types?",
        body: "Name the utility types that handle casing transformations.",
        solution:
          "The four types are: **`Uppercase<S>`**, **`Lowercase<S>`**, **`Capitalize<S>`**, and **`Uncapitalize<S>`**. They allow string literal types to be manipulated at the type level."
      },
      jp: {
        title: "Template Literal Typesのための4つの組み込みの**String Manipulation Utility Types**は何ですか？",
        body: "大文字・小文字の変換を処理するユーティリティ型の名前を挙げてください。",
        solution:
          "4つの型は: **`Uppercase<S>`**、**`Lowercase<S>`**、**`Capitalize<S>`**、および**`Uncapitalize<S>`**です。これらにより、文字列リテラル型を型レベルで操作できます。"
      },
      vi: {
        title: "Bốn **Kiểu tiện ích thao tác chuỗi** (String Manipulation Utility Types) tích hợp sẵn cho Template Literal Types là gì?",
        body: "Kể tên các kiểu tiện ích xử lý các phép biến đổi chữ hoa/thường.",
        solution:
          "Bốn kiểu là: **`Uppercase<S>`**, **`Lowercase<S>`**, **`Capitalize<S>`**, và **`Uncapitalize<S>`**. Chúng cho phép các kiểu chuỗi cố định được thao túng ở cấp độ kiểu."
      }
    }
  },
  {
    _id: "ts-s-035",
    difficulty: "senior",
    tags: ["utility_types", "non_distributive"],
    content: {
      en: {
        title: "How do you prevent a Conditional Type from being **distributive**?",
        body: "Show the syntax used to wrap the type parameter to stop distribution over unions.",
        solution:
          "To prevent distribution, the type parameter being checked must be made 'non-naked' by wrapping it in a tuple or array type. Example: `type NonDistributive<T> = [T] extends [any[]] ? T[number] : T;` (Note the brackets around `T`)."
      },
      jp: {
        title: "Conditional Typeが**分配的**になるのを防ぐにはどうすればよいですか？",
        body: "共用体上での分配を停止するために、型パラメーターをラップするために使用される構文を示してください。",
        solution:
          "分配を防ぐには、チェックされている型パラメーターをタプルまたは配列型でラップすることにより、「非ネイキッド」にする必要があります。例: `type NonDistributive<T> = [T] extends [any[]] ? T[number] : T;` （`T`の周りの角括弧に注意）。"
      },
      vi: {
        title: "Làm thế nào để ngăn một Kiểu điều kiện không bị **phân phối** (distributive)?",
        body: "Trình bày cú pháp được sử dụng để bao bọc tham số kiểu nhằm ngăn chặn sự phân phối trên các union.",
        solution:
          "Để ngăn chặn sự phân phối, tham số kiểu đang được kiểm tra phải được làm cho 'phi-trần' (non-naked) bằng cách bao bọc nó trong một kiểu tuple hoặc mảng. Ví dụ: `type NonDistributive<T> = [T] extends [any[]] ? T[number] : T;` (Lưu ý dấu ngoặc vuông xung quanh `T`)."
      }
    }
  },
  {
    _id: "ts-s-036",
    difficulty: "senior",
    tags: ["generics", "parameter_overloading"],
    content: {
      en: {
        title: "When using function overloads, how can you ensure the generic type arguments are correctly inferred across all signatures?",
        body: "What is the key rule for the relationships between the overload signatures and the final implementation signature?",
        solution:
          "The most specific overloads should be listed first, and the final implementation signature must be a **supertype** of all overload signatures. The implementation signature is for the compiler's internal checking only and should never be called directly by consumers."
      },
      jp: {
        title: "関数オーバーロードを使用する場合、すべてのシグネチャでジェネリック型引数が正しく推論されることをどのように保証できますか？",
        body: "オーバーロードシグネチャと最終的な実装シグネチャの関係に関する重要なルールは何ですか？",
        solution:
          "最も具体的なオーバーロードを最初にリストし、最終的な実装シグネチャはすべてのオーバーロードシグネチャの**スーパータイプ**でなければなりません。実装シグネチャはコンパイラの内部チェック専用であり、利用者が直接呼び出すべきではありません。"
      },
      vi: {
        title: "Khi sử dụng nạp chồng hàm, làm thế nào bạn có thể đảm bảo các đối số kiểu generic được suy luận chính xác trên tất cả các chữ ký?",
        body: "Quy tắc chính cho mối quan hệ giữa các chữ ký nạp chồng và chữ ký triển khai cuối cùng là gì?",
        solution:
          "Các nạp chồng cụ thể nhất nên được liệt kê trước, và chữ ký triển khai cuối cùng phải là một **kiểu cha** (supertype) của tất cả các chữ ký nạp chồng. Chữ ký triển khai chỉ dành cho việc kiểm tra nội bộ của trình biên dịch và không bao giờ nên được gọi trực tiếp bởi người tiêu dùng."
      }
    }
  },
  {
    _id: "ts-s-037",
    difficulty: "senior",
    tags: ["config", "type_checking", "noPropertyAccessFromIndexSignature"],
    content: {
      en: {
        title: "What does the `noPropertyAccessFromIndexSignature: true` compiler option prevent?",
        body: "Why is it generally considered a good practice in codebases that heavily use index signatures?",
        solution:
          "It prevents accessing properties of a type with an index signature (e.g., `{[key: string]: string}`) using dot notation (e.g., `obj.name`) when the property is not explicitly declared. It enforces the use of bracket notation (`obj['name']`) for indexed properties, improving clarity and preventing accidental access to potentially non-existent properties."
      },
      jp: {
        title: "`noPropertyAccessFromIndexSignature: true`コンパイラオプションは何を防ぎますか？",
        body: "インデックスシグネチャを多用するコードベースで、これが一般的に良い習慣と見なされるのはなぜですか？",
        solution:
          "明示的に宣言されていないプロパティがドット表記（例: `obj.name`）を使用してインデックスシグネチャを持つ型（例: `{[key: string]: string}`）のプロパティにアクセスすることを防ぎます。これにより、インデックス付きプロパティにブラケット表記（`obj['name']`）の使用が強制され、明確さが向上し、潜在的に存在しないプロパティへの偶発的なアクセスを防ぎます。"
      },
      vi: {
        title: "Tùy chọn trình biên dịch `noPropertyAccessFromIndexSignature: true` ngăn chặn điều gì?",
        body: "Tại sao nó thường được coi là một thực hành tốt trong các codebase sử dụng nhiều chữ ký chỉ mục?",
        solution:
          "Nó ngăn việc truy cập các thuộc tính của một kiểu có chữ ký chỉ mục (ví dụ: `{[key: string]: string}`) bằng cách sử dụng ký hiệu dấu chấm (ví dụ: `obj.name`) khi thuộc tính không được khai báo rõ ràng. Nó bắt buộc sử dụng ký hiệu dấu ngoặc vuông (`obj['name']`) cho các thuộc tính được đánh chỉ mục, cải thiện sự rõ ràng và ngăn chặn việc vô tình truy cập vào các thuộc tính có khả năng không tồn tại."
      }
    }
  },
  {
    _id: "ts-s-038",
    difficulty: "senior",
    tags: ["advanced_types", "lookup", "path"],
    content: {
      en: {
        title: "How do you implement a type-safe **Deep Property Lookup** (dot notation access) on an object type?",
        body: "Define `DeepGet<T, K>` that takes a type `T` and a dot-separated key literal `K` (e.g., 'user.address.street') and returns the resulting type.",
        solution:
          "This requires a recursive conditional type that splits the key literal using `infer`, checks the existence of the first part, and then calls itself on the rest. `type DeepGet<T, K> = K extends keyof T ? T[K] : K extends `${infer First}.${infer Rest}` ? First extends keyof T ? DeepGet<T[First], Rest> : never : never;`"
      },
      jp: {
        title: "オブジェクト型で型安全な**Deep Property Lookup**（ドット表記アクセス）をどのように実装しますか？",
        body: "型`T`とドット区切りのキーリテラル`K`（例: 'user.address.street'）を受け取り、結果の型を返す`DeepGet<T, K>`を定義してください。",
        solution:
          "これは、`infer`を使用してキーリテラルを分割し、最初の部分の存在をチェックし、その後残りの部分で自身を呼び出す再帰的なConditional Typeが必要です。 `type DeepGet<T, K> = K extends keyof T ? T[K] : K extends `${infer First}.${infer Rest}` ? First extends keyof T ? DeepGet<T[First], Rest> : never : never;`"
      },
      vi: {
        title: "Làm thế nào bạn triển khai **Tra cứu thuộc tính sâu** (Deep Property Lookup - truy cập ký hiệu dấu chấm) an toàn kiểu trên một kiểu đối tượng?",
        body: "Định nghĩa `DeepGet<T, K>` nhận một kiểu `T` và một chuỗi cố định khóa được phân tách bằng dấu chấm `K` (ví dụ: 'user.address.street') và trả về kiểu kết quả.",
        solution:
          "Điều này yêu cầu một kiểu điều kiện đệ quy phân tách chuỗi cố định khóa bằng `infer`, kiểm tra sự tồn tại của phần đầu tiên, và sau đó tự gọi lại chính nó trên phần còn lại. `type DeepGet<T, K> = K extends keyof T ? T[K] : K extends `${infer First}.${infer Rest}` ? First extends keyof T ? DeepGet<T[First], Rest> : never : never;`"
      }
    }
  },
  {
    _id: "ts-s-039",
    difficulty: "senior",
    tags: ["decorators", "accessor"],
    content: {
      en: {
        title: "When creating an **Accessor Decorator** (`@` on `get` or `set`), what is included in the Property Descriptor passed to the decorator?",
        body: "Which property (`value`, `get`, or `set`) is definitely *not* present in the descriptor if you decorate the accessor?",
        solution:
          "The descriptor for an accessor will have `get`, `set`, `enumerable`, and `configurable` properties, but it will **not** have the `value` or `writable` properties, as it is an accessor, not a data property."
      },
      jp: {
        title: "**Accessor Decorator**（`get`または`set`への`@`）を作成する場合、デコレーターに渡されるProperty Descriptorには何が含まれますか？",
        body: "アクセサーを装飾する場合、Descriptorに確実に*存在しない*プロパティ（`value`、`get`、または`set`）は何ですか？",
        solution:
          "アクセサーのDescriptorには、`get`、`set`、`enumerable`、および`configurable`プロパティがありますが、アクセサーでありデータプロパティではないため、`value`または`writable`プロパティは**ありません**。"
      },
      vi: {
        title: "Khi tạo một **Accessor Decorator** (`@` trên `get` hoặc `set`), điều gì được bao gồm trong Property Descriptor được truyền cho decorator?",
        body: "Thuộc tính nào (`value`, `get`, hay `set`) chắc chắn *không* có trong descriptor nếu bạn trang trí accessor?",
        solution:
          "Descriptor cho một accessor sẽ có các thuộc tính `get`, `set`, `enumerable`, và `configurable`, nhưng nó sẽ **không** có các thuộc tính `value` hoặc `writable`, vì nó là một accessor, không phải là một thuộc tính dữ liệu."
      }
    }
  },
  {
    _id: "ts-s-040",
    difficulty: "senior",
    tags: ["utility_types", "this_parameter"],
    content: {
      en: {
        title: "How do you define a function type that **removes** the explicit `this` parameter?",
        body: "Define `RemoveThis<T>` that takes a function type `T` and returns a new function type without the initial `this` parameter.",
        solution:
          "Use the built-in `OmitThisParameter<T>` utility type: `type NewFunction = OmitThisParameter<MyFunctionType>;` (which internally uses `infer` on the function signature.)"
      },
      jp: {
        title: "明示的な`this`パラメーターを**削除**する関数型をどのように定義しますか？",
        body: "関数型`T`を受け取り、最初の`this`パラメーターのない新しい関数型を返す`RemoveThis<T>`を定義してください。",
        solution:
          "組み込みの`OmitThisParameter<T>`ユーティリティ型を使用します: `type NewFunction = OmitThisParameter<MyFunctionType>;` （内部的には関数シグネチャで`infer`を使用します。）"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu hàm **loại bỏ** tham số `this` rõ ràng?",
        body: "Định nghĩa `RemoveThis<T>` nhận một kiểu hàm `T` và trả về một kiểu hàm mới không có tham số `this` ban đầu.",
        solution:
          "Sử dụng kiểu tiện ích tích hợp sẵn `OmitThisParameter<T>`: `type NewFunction = OmitThisParameter<MyFunctionType>;` (mà bên trong sử dụng `infer` trên chữ ký hàm.)"
      }
    }
  },
  {
    _id: "ts-s-041",
    difficulty: "senior",
    tags: ["type_utility", "deep_partial"],
    content: {
      en: {
        title: "How would you implement a **Deep Partial** utility type?",
        body: "What conditional check is required inside the mapped type to ensure that nested properties are also made optional?",
        solution:
          "A Deep Partial recursively applies `Partial` to all properties. The check is to see if the property type is an object (excluding arrays/functions/nulls, which is often implicitly handled). `type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };`"
      },
      jp: {
        title: "**Deep Partial**ユーティリティ型をどのように実装しますか？",
        body: "ネストされたプロパティもオプションになるようにするために、マップされた型内でどのような条件チェックが必要ですか？",
        solution:
          "Deep Partialは、すべてのプロパティに`Partial`を再帰的に適用します。チェックは、プロパティ型がオブジェクトであるかどうかを確認することです（配列/関数/nullを除く、これはしばしば暗黙的に処理されます）。 `type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };`"
      },
      vi: {
        title: "Làm thế nào bạn sẽ triển khai một kiểu tiện ích **Deep Partial**?",
        body: "Kiểm tra điều kiện nào là bắt buộc bên trong mapped type để đảm bảo rằng các thuộc tính lồng nhau cũng được làm tùy chọn?",
        solution:
          "Deep Partial đệ quy áp dụng `Partial` cho tất cả các thuộc tính. Kiểm tra là để xem kiểu thuộc tính có phải là đối tượng không (loại trừ mảng/hàm/null, điều này thường được xử lý ngầm). `type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };`"
      }
    }
  },
  {
    _id: "ts-s-042",
    difficulty: "senior",
    tags: ["type_guards", "in", "keyof"],
    content: {
      en: {
        title: "Why can the `in` operator sometimes be problematic when narrowing types of object literals?",
        body: "What common TypeScript pattern is often preferred over `if ('key' in obj)` when dealing with unions of interfaces?",
        solution:
          "The `in` operator only checks for the property's *existence* and may not fully narrow the type if the property exists in multiple union members. **Discriminated Unions** (using a common literal property/tag) are preferred, as they provide a much stronger, single-branch narrowing guarantee."
      },
      jp: {
        title: "オブジェクトリテラルの型を絞り込む際に、`in`演算子が問題となることがあるのはなぜですか？",
        body: "インターフェースの共用体を扱う際に、`if ('key' in obj)`よりも一般的に好まれるTypeScriptの一般的なパターンは何ですか？",
        solution:
          "`in`演算子はプロパティの*存在*のみをチェックし、プロパティが複数の共用体メンバーに存在する場合、型を完全に絞り込めないことがあります。**Discriminated Unions**（共通のリテラルプロパティ/タグを使用）は、はるかに強力な、単一ブランチの絞り込み保証を提供するため、好まれます。"
      },
      vi: {
        title: "Tại sao toán tử `in` đôi khi có thể gây ra vấn đề khi thu hẹp kiểu của các đối tượng cố định?",
        body: "Mẫu TypeScript phổ biến nào thường được ưu tiên hơn `if ('key' in obj)` khi xử lý các union của các interface?",
        solution:
          "Toán tử `in` chỉ kiểm tra *sự tồn tại* của thuộc tính và có thể không thu hẹp hoàn toàn kiểu nếu thuộc tính tồn tại trong nhiều thành viên union. **Discriminated Unions** (sử dụng một thuộc tính/thẻ cố định chung) được ưu tiên hơn, vì chúng cung cấp một đảm bảo thu hẹp đơn nhánh, mạnh mẽ hơn nhiều."
      }
    }
  },
  {
    _id: "ts-s-043",
    difficulty: "senior",
    tags: ["advanced_types", "unknown", "any"],
    content: {
      en: {
        title: "How does using `unknown` in a function signature help maintain type safety more effectively than `any`?",
        body: "What must you do to a variable of type `unknown` before you can perform operations on it (like calling a method)?",
        solution:
          "Unlike `any`, which allows *any* operation without type checking, `unknown` is type-safe. To perform operations (call, construct, access properties) on an `unknown` variable, you must first **narrow its type** using a type guard (e.g., `typeof`, `instanceof`, or a custom type predicate)."
      },
      jp: {
        title: "関数シグネチャで`unknown`を使用することは、`any`よりも型安全性を維持するのにどのように役立ちますか？",
        body: "操作（メソッドの呼び出しなど）を実行する前に、`unknown`型の変数に対して何をする必要がありますか？",
        solution:
          "型チェックなしで*任意の*操作を許可する`any`とは異なり、`unknown`は型安全です。`unknown`型の変数に対して操作（呼び出し、構築、プロパティへのアクセス）を実行するには、最初に型ガード（例: `typeof`、`instanceof`、またはカスタム型述語）を使用して**その型を絞り込む**必要があります。"
      },
      vi: {
        title: "Việc sử dụng `unknown` trong chữ ký hàm giúp duy trì tính an toàn kiểu hiệu quả hơn `any` như thế nào?",
        body: "Bạn phải làm gì với một biến có kiểu `unknown` trước khi bạn có thể thực hiện các thao tác trên nó (như gọi một phương thức)?",
        solution:
          "Không giống như `any`, cho phép *bất kỳ* thao tác nào mà không cần kiểm tra kiểu, `unknown` là an toàn kiểu. Để thực hiện các thao tác (gọi, xây dựng, truy cập thuộc tính) trên một biến `unknown`, bạn phải **thu hẹp kiểu của nó** trước bằng cách sử dụng type guard (ví dụ: `typeof`, `instanceof`, hoặc một vị từ kiểu tùy chỉnh)."
      }
    }
  },
  {
    _id: "ts-s-044",
    difficulty: "senior",
    tags: ["declaration_files", "ambient", "global"],
    content: {
      en: {
        title: "How do you add types to the **global scope** from within a module-level declaration file (i.e., a file with `import`/`export`)?",
        body: "What special syntax must be used to declare types in the global namespace in a file that is otherwise a module?",
        solution:
          "You must use the `declare global` block. This allows you to augment the global scope while still keeping the file itself as an ES module. Example: `declare global { interface Window { myProp: number; } }`"
      },
      jp: {
        title: "モジュールレベルの宣言ファイル（つまり、`import`/`export`を持つファイル）内から**グローバルスコープ**に型を追加するにはどうすればよいですか？",
        body: "それ以外はモジュールであるファイル内で、グローバル名前空間に型を宣言するために使用する必要がある特別な構文は何ですか？",
        solution:
          "`declare global`ブロックを使用する必要があります。これにより、ファイル自体をESモジュールとして保持しながら、グローバルスコープを拡張できます。例: `declare global { interface Window { myProp: number; } }`"
      },
      vi: {
        title: "Làm thế nào để thêm các kiểu vào **phạm vi toàn cục** (global scope) từ bên trong một file khai báo cấp module (tức là một file có `import`/`export`)?",
        body: "Cú pháp đặc biệt nào phải được sử dụng để khai báo kiểu trong không gian tên toàn cục trong một file mà bản thân nó là một module?",
        solution:
          "Bạn phải sử dụng khối `declare global`. Điều này cho phép bạn mở rộng phạm vi toàn cục trong khi vẫn giữ file đó là một module ES. Ví dụ: `declare global { interface Window { myProp: number; } }`"
      }
    }
  },
  {
    _id: "ts-s-045",
    difficulty: "senior",
    tags: ["utility_types", "this_type", "type_guards"],
    content: {
      en: {
        title: "How do you extract the type of the `this` parameter from a function signature?",
        body: "Use a conditional type with `infer` to define `GetThisType<T>` that infers the `this` type.",
        solution:
          "Use a Conditional Type: `type GetThisType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;`"
      },
      jp: {
        title: "関数シグネチャから`this`パラメーターの型をどのように抽出しますか？",
        body: "`infer`を使用したConditional Typeを使用して、`this`型を推論する`GetThisType<T>`を定義してください。",
        solution:
          "Conditional Typeを使用します: `type GetThisType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;`"
      },
      vi: {
        title: "Làm thế nào để trích xuất kiểu của tham số `this` từ một chữ ký hàm?",
        body: "Sử dụng một kiểu điều kiện với `infer` để định nghĩa `GetThisType<T>` suy luận kiểu `this`.",
        solution:
          "Sử dụng Kiểu điều kiện: `type GetThisType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;`"
      }
    }
  },
  {
    _id: "ts-s-046",
    difficulty: "senior",
    tags: ["generics", "parameter_constraints"],
    content: {
      en: {
        title: "When defining generic constraints (`T extends U`), what relationship must exist between the type argument and the constraint?",
        body: "If `T` is the type argument and `U` is the constraint, how must `T` relate to `U`?",
        solution:
          "The type argument `T` must be **assignable** to the constraint `U` (i.e., `T` must be a subtype of `U`). This ensures that all required properties or behaviors of `U` are present in `T`."
      },
      jp: {
        title: "ジェネリック制約（`T extends U`）を定義する際、型引数と制約の間にはどのような関係が存在する必要がありますか？",
        body: "`T`が型引数で`U`が制約である場合、`T`は`U`とどのように関連している必要がありますか？",
        solution:
          "型引数`T`は制約`U`に**割り当て可能**でなければなりません（つまり、`T`は`U`のサブタイプでなければなりません）。これにより、`U`のすべての必要なプロパティまたは動作が`T`に存在することが保証されます。"
      },
      vi: {
        title: "Khi định nghĩa các ràng buộc generic (`T extends U`), mối quan hệ nào phải tồn tại giữa đối số kiểu và ràng buộc?",
        body: "Nếu `T` là đối số kiểu và `U` là ràng buộc, `T` phải liên quan đến `U` như thế nào?",
        solution:
          "Đối số kiểu `T` phải **có thể gán** cho ràng buộc `U` (nghĩa là `T` phải là một kiểu con (subtype) của `U`). Điều này đảm bảo rằng tất cả các thuộc tính hoặc hành vi bắt buộc của `U` đều có mặt trong `T`."
      }
    }
  },
  {
    _id: "ts-s-047",
    difficulty: "senior",
    tags: ["config", "strict_mode", "strictPropertyInitialization"],
    content: {
      en: {
        title: "What specific scenario does `strictPropertyInitialization: true` address in classes?",
        body: "How can you bypass this check for a property that is guaranteed to be initialized later (e.g., in a lifecycle hook)?",
        solution:
          "It ensures that all non-optional class properties are initialized either in their declaration or within the constructor. To bypass it for properties initialized outside the constructor, use the **Definite Assignment Assertion** (`!`) after the property name. Example: `myProp!: string;`"
      },
      jp: {
        title: "`strictPropertyInitialization: true`はクラスのどのような特定のシナリオに対処しますか？",
        body: "後で初期化されることが保証されているプロパティ（例：ライフサイクルフック内）について、このチェックをどのようにバイパスできますか？",
        solution:
          "すべての非オプションのクラスプロパティが宣言内またはコンストラクター内で初期化されることを保証します。コンストラクター外で初期化されるプロパティについてこれをバイパスするには、プロパティ名の後に**Definite Assignment Assertion**（`!`）を使用します。例: `myProp!: string;`"
      },
      vi: {
        title: "Kịch bản cụ thể nào mà `strictPropertyInitialization: true` giải quyết trong các lớp?",
        body: "Làm thế nào bạn có thể bỏ qua kiểm tra này cho một thuộc tính được đảm bảo sẽ được khởi tạo sau (ví dụ: trong một lifecycle hook)?",
        solution:
          "Nó đảm bảo rằng tất cả các thuộc tính lớp không tùy chọn đều được khởi tạo trong khai báo của chúng hoặc bên trong hàm tạo. Để bỏ qua nó cho các thuộc tính được khởi tạo bên ngoài hàm tạo, hãy sử dụng **Khẳng định gán xác định** (Definite Assignment Assertion - `!`) sau tên thuộc tính. Ví dụ: `myProp!: string;`"
      }
    }
  },
  {
    _id: "ts-s-048",
    difficulty: "senior",
    tags: ["mapped_types", "template_literals", "optionality"],
    content: {
      en: {
        title: "How do you define a Mapped Type that renames keys and makes the new properties optional?",
        body: "Define `OptionalPrefixed<T>` that renames key `K` to `prefix_K` and makes the new property optional.",
        solution:
          "Combine key remapping with the optional modifier (`?`). `type OptionalPrefixed<T> = { [K in keyof T as `prefix_${string & K}`]?: T[K] };`"
      },
      jp: {
        title: "キーの名前を変更し、新しいプロパティをオプションにするMapped Typeをどのように定義しますか？",
        body: "キー`K`を`prefix_K`に名前変更し、新しいプロパティをオプションにする`OptionalPrefixed<T>`を定義してください。",
        solution:
          "キー再マッピングとオプション修飾子（`?`）を組み合わせます。 `type OptionalPrefixed<T> = { [K in keyof T as `prefix_${string & K}`]?: T[K] };`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một Mapped Type đổi tên khóa và làm cho các thuộc tính mới là tùy chọn?",
        body: "Định nghĩa `OptionalPrefixed<T>` đổi tên khóa `K` thành `prefix_K` và làm cho thuộc tính mới là tùy chọn.",
        solution:
          "Kết hợp ánh xạ lại khóa với bổ ngữ tùy chọn (`?`). `type OptionalPrefixed<T> = { [K in keyof T as `prefix_${string & K}`]?: T[K] };`"
      }
    }
  },
  {
    _id: "ts-s-049",
    difficulty: "senior",
    tags: ["utility_types", "non_callable"],
    content: {
      en: {
        title: "How do you define a type that is a function *without* the ability to be constructed with `new`?",
        body: "Define a type `SimpleFunction` that can be called but cannot be used as a constructor (i.e., not a class or constructor function type).",
        solution:
          "A simple function type without a construct signature (the `new` keyword) is defined as: `type SimpleFunction = (...args: any[]) => any;` If you need to ensure it's specifically non-constructable, you must use a conditional type to filter out types with a construct signature."
      },
      jp: {
        title: "`new`で構築する機能の*ない*関数である型をどのように定義しますか？",
        body: "呼び出すことはできるが、コンストラクターとして使用できない（つまり、クラスやコンストラクター関数型ではない）型`SimpleFunction`を定義してください。",
        solution:
          "構築シグネチャ（`new`キーワード）のない単純な関数型は、次のように定義されます: `type SimpleFunction = (...args: any[]) => any;` 特に構築不可能であることを保証する必要がある場合は、Conditional Typeを使用して構築シグネチャを持つ型を除外する必要があります。"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu là một hàm *không* có khả năng được xây dựng bằng `new`?",
        body: "Định nghĩa một kiểu `SimpleFunction` có thể được gọi nhưng không thể được sử dụng như một hàm tạo (tức là không phải là kiểu lớp hoặc kiểu hàm tạo).",
        solution:
          "Một kiểu hàm đơn giản không có chữ ký xây dựng (từ khóa `new`) được định nghĩa là: `type SimpleFunction = (...args: any[]) => any;` Nếu bạn cần đảm bảo rằng nó cụ thể là không thể xây dựng, bạn phải sử dụng một kiểu điều kiện để lọc ra các kiểu có chữ ký xây dựng."
      }
    }
  },
  {
    _id: "ts-s-050",
    difficulty: "senior",
    tags: ["type_utility", "function_composition"],
    content: {
      en: {
        title: "How do you define the type for a generic function **`compose`** that takes two functions (`f` and `g`) and returns a new function that calls them in sequence (`f(g(x))`?)",
        body: "Show the type signature for `compose(f, g)` where the return type of `g` is the argument type of `f`.",
        solution:
          "Use two generic types with constraints: `declare function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C;` This ensures the types match up correctly: `g` takes `A` and returns `B`, which is the input for `f`, which returns `C`."
      },
      jp: {
        title: "2つの関数（`f`と`g`）を受け取り、それらを順次呼び出す（`f(g(x))`）新しい関数を返すジェネリック関数**`compose`**の型をどのように定義しますか？",
        body: "`g`の戻り値の型が`f`の引数の型である`compose(f, g)`の型シグネチャを示してください。",
        solution:
          "制約付きの2つのジェネリック型を使用します: `declare function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C;` これにより、型が正しく一致することが保証されます: `g`は`A`を受け取り`B`を返し、それが`f`への入力となり、`C`を返します。"
      },
      vi: {
        title: "Làm thế nào để định nghĩa kiểu cho một hàm generic **`compose`** nhận hai hàm (`f` và `g`) và trả về một hàm mới gọi chúng theo trình tự (`f(g(x))`?)",
        body: "Trình bày chữ ký kiểu cho `compose(f, g)` trong đó kiểu trả về của `g` là kiểu đối số của `f`.",
        solution:
          "Sử dụng hai kiểu generic với các ràng buộc: `declare function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C;` Điều này đảm bảo các kiểu khớp đúng: `g` nhận `A` và trả về `B`, là đầu vào cho `f`, và `f` trả về `C`."
      }
    }
  }
];
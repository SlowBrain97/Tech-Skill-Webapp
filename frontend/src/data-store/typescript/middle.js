export const typescript_middle_questions = [
  {
    _id: "ts-m-001",
    difficulty: "middle",
    tags: ["interface", "type_alias", "difference"],
    content: {
      en: {
        title: "What is the key difference between a TypeScript `interface` and a `type` alias?",
        body: "Which one supports declaration merging (augmentation)?",
        solution:
          "The key difference is that **interfaces** support **declaration merging** (bạn có thể khai báo cùng một tên nhiều lần và chúng sẽ tự động kết hợp lại), while **type aliases** do not and must be defined once. Type aliases are generally more flexible for complex types (union, intersection, tuples)."
      },
      jp: {
        title: "TypeScriptの`interface`と`type`エイリアスの主な違いは何ですか？",
        body: "どちらが宣言マージ（拡張）をサポートしていますか？",
        solution:
          "主な違いは、**interface**が**宣言マージ**をサポートしているのに対し（同じ名前を複数回宣言でき、自動的に結合されます）、**type aliases**はサポートしておらず、一度だけ定義する必要があります。Type aliasesは一般的に、複雑な型（共用型、交差型、タプル）に対してより柔軟です。"
      },
      vi: {
        title: "Sự khác biệt chính giữa `interface` và `type` alias của TypeScript là gì?",
        body: "Kiểu nào hỗ trợ hợp nhất khai báo (declaration merging)?",
        solution:
          "Sự khác biệt chính là **interface** hỗ trợ **hợp nhất khai báo** (bạn có thể khai báo cùng một tên nhiều lần và chúng sẽ tự động kết hợp lại), trong khi **type alias** thì không và phải được định nghĩa một lần. Type alias thường linh hoạt hơn cho các kiểu phức tạp (union, intersection, tuples)."
      }
    }
  },
  {
    _id: "ts-m-002",
    difficulty: "middle",
    tags: ["generics", "usage"],
    content: {
      en: {
        title: "What is the primary purpose of using **Generics** in TypeScript?",
        body: "Explain how generics help you write reusable functions while maintaining type safety.",
        solution:
          "Generics allow you to write functions, classes, or interfaces that work with a variety of types, instead of a single one. By capturing the type passed to them as a parameter (`<T>`), they ensure the input type matches the output type or internal usage, preventing type errors and maximizing code reuse."
      },
      jp: {
        title: "TypeScriptで**Generics**を使用する主な目的は何ですか？",
        body: "型安全性を維持しながら、Genericsが再利用可能な関数を作成するのにどのように役立つか説明してください。",
        solution:
          "Genericsを使用すると、単一の型ではなく、さまざまな型で動作する関数、クラス、またはインターフェースを作成できます。渡された型をパラメーター（`<T>`）としてキャプチャすることで、入力型が出力型または内部使用と一致することを保証し、型エラーを防ぎ、コードの再利用を最大化します。"
      },
      vi: {
        title: "Mục đích chính của việc sử dụng **Generics** trong TypeScript là gì?",
        body: "Giải thích cách generics giúp bạn viết các hàm có thể tái sử dụng trong khi vẫn duy trì tính an toàn kiểu (type safety).",
        solution:
          "Generics cho phép bạn viết các hàm, lớp hoặc interface hoạt động với nhiều loại kiểu khác nhau, thay vì chỉ một kiểu duy nhất. Bằng cách nắm bắt kiểu được truyền vào chúng dưới dạng tham số (`<T>`), chúng đảm bảo kiểu đầu vào khớp với kiểu đầu ra hoặc cách sử dụng nội bộ, ngăn ngừa lỗi kiểu và tối đa hóa việc tái sử dụng mã."
      }
    }
  },
  {
    _id: "ts-m-003",
    difficulty: "middle",
    tags: ["union", "intersection", "difference"],
    content: {
      en: {
        title: "Differentiate between a **Union Type** (`A | B`) and an **Intersection Type** (`A & B`).",
        body: "If `A` has property `a` and `B` has property `b`, which type must have *both* properties?",
        solution:
          "A **Union Type** (`A | B`) means a value can be *either* type A *or* type B. An **Intersection Type** (`A & B`) means a value must be *both* type A *and* type B simultaneously. The **Intersection Type** (`A & B`) must have *both* properties `a` and `b`."
      },
      jp: {
        title: "**共用型**（`A | B`）と**交差型**（`A & B`）の違いを区別してください。",
        body: "`A`がプロパティ`a`を持ち、`B`がプロパティ`b`を持つ場合、どちらの型が*両方の*プロパティを持つ必要がありますか？",
        solution:
          "**共用型**（`A | B`）は、値が型A*または*型Bの*いずれか*であることを意味します。**交差型**（`A & B`）は、値が型A*および*型Bの*両方*であることを意味します。**交差型**（`A & B`）は、プロパティ`a`と`b`の*両方*を持つ必要があります。"
      },
      vi: {
        title: "Phân biệt giữa **Union Type** (`A | B`) và **Intersection Type** (`A & B`).",
        body: "Nếu `A` có thuộc tính `a` và `B` có thuộc tính `b`, kiểu nào phải có *cả hai* thuộc tính?",
        solution:
          "**Union Type** (`A | B`) có nghĩa là một giá trị có thể là *hoặc* kiểu A *hoặc* kiểu B. **Intersection Type** (`A & B`) có nghĩa là một giá trị phải là *cả hai* kiểu A *và* kiểu B đồng thời. **Intersection Type** (`A & B`) phải có *cả hai* thuộc tính `a` và `b`."
      }
    }
  },
  {
    _id: "ts-m-004",
    difficulty: "middle",
    tags: ["mapped_types", "utility_types", "partial"],
    content: {
      en: {
        title: "Explain the concept of **Mapped Types** in TypeScript.",
        body: "How is the built-in utility type `Partial<T>` implemented using a Mapped Type?",
        solution:
          "Mapped Types are a feature that allows you to create new types based on old types by iterating over the keys of the old type and applying transformations. `Partial<T>` is implemented by iterating over all keys `K` in `T` and adding the optional modifier (`?`): `type Partial<T> = { [K in keyof T]?: T[K]; };`"
      },
      jp: {
        title: "TypeScriptにおける**Mapped Types**の概念を説明してください。",
        body: "組み込みのユーティリティ型`Partial<T>`は、Mapped Typeを使用してどのように実装されていますか？",
        solution:
          "Mapped Typesは、古い型のキーを反復処理し、変換を適用することで、古い型に基づいて新しい型を作成できる機能です。`Partial<T>`は、`T`内のすべてのキー`K`を反復処理し、オプション修飾子（`?`）を追加することで実装されています: `type Partial<T> = { [K in keyof T]?: T[K]; };`"
      },
      vi: {
        title: "Giải thích khái niệm về **Mapped Types** trong TypeScript.",
        body: "Kiểu tiện ích tích hợp sẵn `Partial<T>` được triển khai như thế nào bằng cách sử dụng Mapped Type?",
        solution:
          "Mapped Types là một tính năng cho phép bạn tạo các kiểu mới dựa trên các kiểu cũ bằng cách lặp lại trên các khóa của kiểu cũ và áp dụng các phép biến đổi. `Partial<T>` được triển khai bằng cách lặp lại trên tất cả các khóa `K` trong `T` và thêm bổ ngữ tùy chọn (`?`): `type Partial<T> = { [K in keyof T]?: T[K]; };`"
      }
    }
  },
  {
    _id: "ts-m-005",
    difficulty: "middle",
    tags: ["utility_types", "pick", "omit"],
    content: {
      en: {
        title: "Compare and contrast the `Pick<T, K>` and `Omit<T, K>` utility types.",
        body: "If `T = {a: string, b: number, c: boolean}`, what are the results of `Pick<T, 'a' | 'b'>` and `Omit<T, 'a' | 'b'>`?",
        solution:
          "`Pick<T, K>` creates a type by selecting a set of properties `K` from type `T`. `Omit<T, K>` creates a type by removing a set of properties `K` from type `T`. Results: `Pick` is `{a: string, b: number}`, `Omit` is `{c: boolean}`."
      },
      jp: {
        title: "ユーティリティ型`Pick<T, K>`と`Omit<T, K>`を比較し、対比してください。",
        body: "`T = {a: string, b: number, c: boolean}`の場合、`Pick<T, 'a' | 'b'>`と`Omit<T, 'a' | 'b'>`の結果は何ですか？",
        solution:
          "`Pick<T, K>`は、型`T`からプロパティのセット`K`を選択して型を作成します。`Omit<T, K>`は、型`T`からプロパティのセット`K`を削除して型を作成します。結果: `Pick`は`{a: string, b: number}`、`Omit`は`{c: boolean}`です。"
      },
      vi: {
        title: "So sánh và đối chiếu các kiểu tiện ích `Pick<T, K>` và `Omit<T, K>`.",
        body: "Nếu `T = {a: string, b: number, c: boolean}`, kết quả của `Pick<T, 'a' | 'b'>` và `Omit<T, 'a' | 'b'>` là gì?",
        solution:
          "`Pick<T, K>` tạo ra một kiểu bằng cách chọn một tập hợp các thuộc tính `K` từ kiểu `T`. `Omit<T, K>` tạo ra một kiểu bằng cách loại bỏ một tập hợp các thuộc tính `K` khỏi kiểu `T`. Kết quả: `Pick` là `{a: string, b: number}`, `Omit` là `{c: boolean}`."
      }
    }
  },
  {
    _id: "ts-m-006",
    difficulty: "middle",
    tags: ["enum", "const_enum", "js_output"],
    content: {
      en: {
        title: "What is the key difference in the compiled JavaScript output between a regular `enum` and a `const enum`?",
        body: "When should you prefer using `const enum`?",
        solution:
          "A regular `enum` generates runtime JavaScript code (an object mapping names to values). A **`const enum`** is completely removed during compilation (tree-shaken), replaced by the actual literal values wherever it is used. Prefer `const enum` when you need smaller bundle sizes and don't need the runtime object."
      },
      jp: {
        title: "通常の`enum`と`const enum`の間で、コンパイルされたJavaScript出力の主な違いは何ですか？",
        body: "`const enum`の使用をいつ優先すべきですか？",
        solution:
          "通常の`enum`はランタイムJavaScriptコード（名前と値をマッピングするオブジェクト）を生成します。**`const enum`**はコンパイル中に完全に削除され（ツリーシェイクされ）、使用されている場所で実際のLiteral値に置き換えられます。バンドルサイズを小さくしたい場合や、ランタイムオブジェクトが必要ない場合は、`const enum`を優先してください。"
      },
      vi: {
        title: "Sự khác biệt chính trong đầu ra JavaScript đã biên dịch giữa `enum` thông thường và `const enum` là gì?",
        body: "Khi nào bạn nên ưu tiên sử dụng `const enum`?",
        solution:
          "Một `enum` thông thường tạo ra mã JavaScript runtime (một đối tượng ánh xạ tên thành giá trị). Một **`const enum`** được loại bỏ hoàn toàn trong quá trình biên dịch (tree-shaken), được thay thế bằng các giá trị cố định thực tế bất cứ nơi nào nó được sử dụng. Ưu tiên `const enum` khi bạn cần kích thước gói nhỏ hơn và không cần đối tượng runtime."
      }
    }
  },
  {
    _id: "ts-m-007",
    difficulty: "middle",
    tags: ["generics", "constraints", "extends"],
    content: {
      en: {
        title: "How do you add a **constraint** to a generic type parameter `T`?",
        body: "Show the syntax for a generic function that ensures the type `T` must have a `name: string` property.",
        solution:
          "Constraints are added using the `extends` keyword. Syntax: `function printName<T extends { name: string }>(obj: T) { console.log(obj.name); }` This ensures the type parameter `T` is a subtype of the constraint."
      },
      jp: {
        title: "ジェネリック型パラメーター`T`に**制約**を追加するにはどうすればよいですか？",
        body: "型`T`が`name: string`プロパティを持つことを保証するジェネリック関数の構文を示してください。",
        solution:
          "制約は`extends`キーワードを使用して追加されます。構文: `function printName<T extends { name: string }>(obj: T) { console.log(obj.name); }` これにより、型パラメーター`T`が制約のサブタイプであることが保証されます。"
      },
      vi: {
        title: "Làm thế nào để thêm một **ràng buộc** (constraint) vào một tham số kiểu generic `T`?",
        body: "Trình bày cú pháp cho một hàm generic đảm bảo kiểu `T` phải có thuộc tính `name: string`.",
        solution:
          "Các ràng buộc được thêm bằng cách sử dụng từ khóa `extends`. Cú pháp: `function printName<T extends { name: string }>(obj: T) { console.log(obj.name); }` Điều này đảm bảo tham số kiểu `T` là một kiểu con của ràng buộc."
      }
    }
  },
  {
    _id: "ts-m-008",
    difficulty: "middle",
    tags: ["keyof", "lookup_types"],
    content: {
      en: {
        title: "Explain the `keyof` operator in TypeScript.",
        body: "If `interface User { id: number; name: string; }`, what type does `keyof User` evaluate to?",
        solution:
          "The `keyof` operator takes an object type and returns a **union type** of its known, public property names (keys). For `User`, `keyof User` evaluates to the string literal union type: `'id' | 'name'`."
      },
      jp: {
        title: "TypeScriptの`keyof`演算子を説明してください。",
        body: "`interface User { id: number; name: string; }`の場合、`keyof User`はどのような型に評価されますか？",
        solution:
          "`keyof`演算子はオブジェクト型を受け取り、その既知のパブリックプロパティ名（キー）の**共用型**を返します。`User`の場合、`keyof User`は文字列リテラル共用型`'id' | 'name'`に評価されます。"
      },
      vi: {
        title: "Giải thích toán tử `keyof` trong TypeScript.",
        body: "Nếu `interface User { id: number; name: string; }`, `keyof User` đánh giá thành kiểu gì?",
        solution:
          "Toán tử `keyof` nhận một kiểu đối tượng và trả về một **kiểu hợp nhất** các tên thuộc tính công khai, đã biết của nó (các khóa). Đối với `User`, `keyof User` đánh giá thành kiểu hợp nhất chuỗi cố định: `'id' | 'name'`."
      }
    }
  },
  {
    _id: "ts-m-009",
    difficulty: "middle",
    tags: ["utility_types", "return_type", "function"],
    content: {
      en: {
        title: "How do you extract the **Return Type** of a function type?",
        body: "Use a built-in utility type to get the return type of `type MyFunc = () => Promise<string>`.",
        solution:
          "Use the **`ReturnType<T>`** utility type. For `MyFunc`, `ReturnType<MyFunc>` evaluates to `Promise<string>`. (Note: To get `string`, you would then use `Awaited<ReturnType<MyFunc>>`)."
      },
      jp: {
        title: "関数型の**戻り値の型**をどのように抽出しますか？",
        body: "組み込みのユーティリティ型を使用して、`type MyFunc = () => Promise<string>`の戻り値の型を取得してください。",
        solution:
          "**`ReturnType<T>`**ユーティリティ型を使用します。`MyFunc`の場合、`ReturnType<MyFunc>`は`Promise<string>`に評価されます。（注: `string`を取得するには、次に`Awaited<ReturnType<MyFunc>>`を使用します）。"
      },
      vi: {
        title: "Làm thế nào để trích xuất **Kiểu trả về** (Return Type) của một kiểu hàm?",
        body: "Sử dụng một kiểu tiện ích tích hợp sẵn để lấy kiểu trả về của `type MyFunc = () => Promise<string>`.",
        solution:
          "Sử dụng kiểu tiện ích **`ReturnType<T>`**. Đối với `MyFunc`, `ReturnType<MyFunc>` đánh giá thành `Promise<string>`. (Lưu ý: Để lấy `string`, bạn sẽ sử dụng `Awaited<ReturnType<MyFunc>>`)."
      }
    }
  },
  {
    _id: "ts-m-010",
    difficulty: "middle",
    tags: ["declaration_files", "d_ts", "ambient"],
    content: {
      en: {
        title: "What is the purpose of a **`.d.ts`** file in a TypeScript project?",
        body: "Explain its role when integrating a third-party JavaScript library that lacks TypeScript support.",
        solution:
          "A **`.d.ts`** (declaration) file contains only type definitions and no executable code. Its purpose is to describe the shape of existing JavaScript code. When integrating a JS library without TS support, you write a `.d.ts` file to provide the type information so TypeScript can check the usage of the library correctly."
      },
      jp: {
        title: "TypeScriptプロジェクトにおける**`.d.ts`**ファイルの目的は何ですか？",
        body: "TypeScriptのサポートがないサードパーティのJavaScriptライブラリを統合する際の、その役割を説明してください。",
        solution:
          "**`.d.ts`**（宣言）ファイルには、型定義のみが含まれ、実行可能なコードは含まれていません。その目的は、既存のJavaScriptコードの形状を記述することです。TSサポートのないJSライブラリを統合する場合、`.d.ts`ファイルを作成して型情報を提供し、TypeScriptがライブラリの使用を正しくチェックできるようにします。"
      },
      vi: {
        title: "Mục đích của một file **`.d.ts`** trong một dự án TypeScript là gì?",
        body: "Giải thích vai trò của nó khi tích hợp một thư viện JavaScript bên thứ ba mà không có hỗ trợ TypeScript.",
        solution:
          "Một file **`.d.ts`** (khai báo) chỉ chứa các định nghĩa kiểu và không có mã thực thi. Mục đích của nó là mô tả hình dạng của mã JavaScript hiện có. Khi tích hợp một thư viện JS không có hỗ trợ TS, bạn viết một file `.d.ts` để cung cấp thông tin kiểu để TypeScript có thể kiểm tra việc sử dụng thư viện một cách chính xác."
      }
    }
  },
  {
    _id: "ts-m-011",
    difficulty: "middle",
    tags: ["type_guards", "instanceof"],
    content: {
      en: {
        title: "Explain how the `instanceof` operator acts as a **Type Guard**.",
        body: "How does TypeScript narrow the type of a variable inside an `if (x instanceof MyClass)` block?",
        solution:
          "The `instanceof` operator checks if an object is an instance of a specific class or constructor function. If the condition is true, TypeScript narrows the type of the variable `x` within that block to the specific class type (`MyClass`), allowing safe access to its properties and methods."
      },
      jp: {
        title: "`instanceof`演算子が**Type Guard**としてどのように機能するか説明してください。",
        body: "TypeScriptは`if (x instanceof MyClass)`ブロック内で変数の型をどのように絞り込みますか？",
        solution:
          "`instanceof`演算子は、オブジェクトが特定のクラスまたはコンストラクター関数のインスタンスであるかどうかをチェックします。条件がtrueの場合、TypeScriptはそのブロック内で変数`x`の型を特定のクラス型（`MyClass`）に絞り込み、そのプロパティやメソッドへの安全なアクセスを可能にします。"
      },
      vi: {
        title: "Giải thích cách toán tử `instanceof` hoạt động như một **Type Guard**.",
        body: "TypeScript thu hẹp kiểu của một biến bên trong khối `if (x instanceof MyClass)` như thế nào?",
        solution:
          "Toán tử `instanceof` kiểm tra xem một đối tượng có phải là một thể hiện của một lớp hoặc hàm tạo cụ thể hay không. Nếu điều kiện là đúng, TypeScript sẽ thu hẹp kiểu của biến `x` trong khối đó thành kiểu lớp cụ thể (`MyClass`), cho phép truy cập an toàn vào các thuộc tính và phương thức của nó."
      }
    }
  },
  {
    _id: "ts-m-012",
    difficulty: "middle",
    tags: ["config", "compiler_options", "strictNullChecks"],
    content: {
      en: {
        title: "What is the primary effect of enabling the **`strictNullChecks: true`** compiler option?",
        body: "Which two values are no longer implicitly allowed in variables unless explicitly included in a union type?",
        solution:
          "`strictNullChecks: true` prevents `null` and `undefined` from being implicitly assigned to variables that are not explicitly typed as having them (e.g., `string`, `number`). It forces developers to handle these two values explicitly via union types (e.g., `string | null`) or type guards."
      },
      jp: {
        title: "**`strictNullChecks: true`**コンパイラオプションを有効にすることの主な効果は何ですか？",
        body: "共用型に明示的に含まれていない限り、どの2つの値が変数に暗黙的に許可されなくなりますか？",
        solution:
          "`strictNullChecks: true`は、`null`と`undefined`が、それらを持つように明示的に型付けされていない変数（例: `string`、`number`）に暗黙的に割り当てられるのを防ぎます。これにより、開発者は共用型（例: `string | null`）または型ガードを介してこれら2つの値を明示的に処理することが強制されます。"
      },
      vi: {
        title: "Tác động chính của việc bật tùy chọn trình biên dịch **`strictNullChecks: true`** là gì?",
        body: "Hai giá trị nào không còn được phép ngầm định trong các biến trừ khi được bao gồm rõ ràng trong một kiểu hợp nhất?",
        solution:
          "`strictNullChecks: true` ngăn `null` và `undefined` bị gán ngầm cho các biến không được kiểu hóa rõ ràng để có chúng (ví dụ: `string`, `number`). Nó buộc các nhà phát triển phải xử lý hai giá trị này một cách rõ ràng thông qua kiểu hợp nhất (ví dụ: `string | null`) hoặc type guard."
      }
    }
  },
  {
    _id: "ts-m-013",
    difficulty: "middle",
    tags: ["optional_chaining", "nullish_coalescing", "es2020"],
    content: {
      en: {
        title: "How do **Optional Chaining** (`?.`) and **Nullish Coalescing** (`??`) improve TypeScript code?",
        body: "Explain the main difference in how `??` handles falsy values compared to the traditional `||` operator.",
        solution:
          "Optional Chaining allows safe access to nested properties that may be `null` or `undefined`. Nullish Coalescing provides a default value only when the expression is `null` or `undefined`. The key difference is that `??` does *not* treat `0`, `''` (empty string), or `false` as falsy, unlike `||`."
      },
      jp: {
        title: "**Optional Chaining** (`?.`)と**Nullish Coalescing** (`??`)は、TypeScriptコードをどのように改善しますか？",
        body: "`??`が従来の`||`演算子と比較してfalsy値をどのように処理するかの主な違いを説明してください。",
        solution:
          "Optional Chainingは、`null`または`undefined`である可能性のあるネストされたプロパティへの安全なアクセスを可能にします。Nullish Coalescingは、式が`null`または`undefined`の場合にのみデフォルト値を提供します。主な違いは、`||`とは異なり、`??`は`0`、`''`（空文字列）、または`false`をfalsyとして*扱わない*ことです。"
      },
      vi: {
        title: "**Optional Chaining** (`?.`) và **Nullish Coalescing** (`??`) cải thiện mã TypeScript như thế nào?",
        body: "Giải thích sự khác biệt chính trong cách `??` xử lý các giá trị falsy so với toán tử `||` truyền thống.",
        solution:
          "Optional Chaining cho phép truy cập an toàn vào các thuộc tính lồng nhau có thể là `null` hoặc `undefined`. Nullish Coalescing cung cấp một giá trị mặc định chỉ khi biểu thức là `null` hoặc `undefined`. Sự khác biệt chính là `??` *không* coi `0`, `''` (chuỗi rỗng), hoặc `false` là falsy, không giống như `||`."
      }
    }
  },
  {
    _id: "ts-m-014",
    difficulty: "middle",
    tags: ["readonly", "immutability"],
    content: {
      en: {
        title: "What is the purpose of the **`readonly`** modifier in TypeScript interfaces and classes?",
        body: "What type of mutation does the `readonly` modifier prevent?",
        solution:
          "The `readonly` modifier marks a property as one that can only be assigned a value during initialization (at the property declaration or in the constructor). It prevents the property from being **reassigned** or **modified** after the object has been constructed, enforcing a form of immutability."
      },
      jp: {
        title: "TypeScriptのインターフェースとクラスにおける**`readonly`**修飾子の目的は何ですか？",
        body: "`readonly`修飾子が防ぐミューテーションのタイプは何ですか？",
        solution:
          "`readonly`修飾子は、初期化中（プロパティ宣言時またはコンストラクター内）にのみ値を割り当てることができるプロパティとしてマークします。オブジェクトが構築された後、プロパティが**再割り当て**または**変更**されるのを防ぎ、ある種の不変性を強制します。"
      },
      vi: {
        title: "Mục đích của bổ ngữ **`readonly`** trong interface và lớp TypeScript là gì?",
        body: "Bổ ngữ `readonly` ngăn chặn loại đột biến (mutation) nào?",
        solution:
          "Bổ ngữ `readonly` đánh dấu một thuộc tính là thuộc tính chỉ có thể được gán giá trị trong quá trình khởi tạo (tại khai báo thuộc tính hoặc trong hàm tạo). Nó ngăn thuộc tính bị **gán lại** hoặc **sửa đổi** sau khi đối tượng đã được xây dựng, bắt buộc một dạng bất biến."
      }
    }
  },
  {
    _id: "ts-m-015",
    difficulty: "middle",
    tags: ["utility_types", "parameters", "function"],
    content: {
      en: {
        title: "How do you extract the parameter types of a function type?",
        body: "Use a built-in utility type to get the tuple of parameter types from `type MyFunc = (a: number, b: string) => void`.",
        solution:
          "Use the **`Parameters<T>`** utility type. For `MyFunc`, `Parameters<MyFunc>` evaluates to the tuple type: `[a: number, b: string]`."
      },
      jp: {
        title: "関数型のパラメーター型をどのように抽出しますか？",
        body: "組み込みのユーティリティ型を使用して、`type MyFunc = (a: number, b: string) => void`からパラメーター型のタプルを取得してください。",
        solution:
          "**`Parameters<T>`**ユーティリティ型を使用します。`MyFunc`の場合、`Parameters<MyFunc>`はタプル型`[a: number, b: string]`に評価されます。"
      },
      vi: {
        title: "Làm thế nào để trích xuất các kiểu tham số của một kiểu hàm?",
        body: "Sử dụng một kiểu tiện ích tích hợp sẵn để lấy tuple các kiểu tham số từ `type MyFunc = (a: number, b: string) => void`.",
        solution:
          "Sử dụng kiểu tiện ích **`Parameters<T>`**. Đối với `MyFunc`, `Parameters<MyFunc>` đánh giá thành kiểu tuple: `[a: number, b: string]`."
      }
    }
  },
  {
    _id: "ts-m-016",
    difficulty: "middle",
    tags: ["non-null_assertion", "!", "when_to_use"],
    content: {
      en: {
        title: "When should you use the **Non-Null Assertion Operator** (`!`)?",
        body: "What risk does using `!` carry, and what does its usage tell the TypeScript compiler?",
        solution:
          "The `!` operator tells the compiler to **ignore** potential `null` or `undefined` values for the expression, asserting that the value is definitely present at runtime. You should use it only when you have external knowledge (outside of TypeScript's analysis) that the value will be defined. The risk is bypassing type safety, leading to runtime errors if the value is actually `null` or `undefined`."
      },
      jp: {
        title: "**Non-Null Assertion Operator** (`!`)をいつ使用すべきですか？",
        body: "`!`を使用することに伴うリスクは何ですか、またその使用はTypeScriptコンパイラに何を伝えますか？",
        solution:
          "`!`演算子は、コンパイラに式に対する潜在的な`null`または`undefined`の値を**無視**するように指示し、値がランタイムで確実に存在することを断言します。外部の知識（TypeScriptの分析外）があり、値が定義されていることがわかっている場合にのみ使用する必要があります。リスクは型安全性をバイパスすることであり、値が実際に`null`または`undefined`である場合にランタイムエラーにつながります。"
      },
      vi: {
        title: "Khi nào bạn nên sử dụng **Toán tử Khẳng định không null** (`!`)?",
        body: "Rủi ro khi sử dụng `!` là gì, và việc sử dụng nó báo cho trình biên dịch TypeScript biết điều gì?",
        solution:
          "Toán tử `!` yêu cầu trình biên dịch **bỏ qua** các giá trị `null` hoặc `undefined` tiềm năng cho biểu thức, khẳng định rằng giá trị chắc chắn có mặt tại thời điểm chạy. Bạn chỉ nên sử dụng nó khi bạn có kiến thức bên ngoài (ngoài phân tích của TypeScript) rằng giá trị sẽ được xác định. Rủi ro là bỏ qua tính an toàn kiểu, dẫn đến lỗi runtime nếu giá trị thực sự là `null` hoặc `undefined`."
      }
    }
  },
  {
    _id: "ts-m-017",
    difficulty: "middle",
    tags: ["type_alias", "tuple", "destructuring"],
    content: {
      en: {
        title: "How do you define a **Tuple Type** using a `type` alias?",
        body: "Define a type `Coords` that represents a tuple of two numbers (latitude and longitude) and demonstrate its usage.",
        solution:
          "A Tuple Type is defined by specifying the exact types and order within an array literal. `type Coords = [number, number]; const position: Coords = [34.05, -118.24];`"
      },
      jp: {
        title: "`type`エイリアスを使用して**Tuple Type**をどのように定義しますか？",
        body: "2つの数値（緯度と経度）のタプルを表す型`Coords`を定義し、その使用法を示してください。",
        solution:
          "Tuple Typeは、配列リテラル内で正確な型と順序を指定することで定義されます。 `type Coords = [number, number]; const position: Coords = [34.05, -118.24];`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một **Kiểu Tuple** bằng cách sử dụng `type` alias?",
        body: "Định nghĩa một kiểu `Coords` đại diện cho một tuple gồm hai số (vĩ độ và kinh độ) và chứng minh cách sử dụng nó.",
        solution:
          "Một Kiểu Tuple được định nghĩa bằng cách chỉ định các kiểu và thứ tự chính xác bên trong một chuỗi cố định mảng. `type Coords = [number, number]; const position: Coords = [34.05, -118.24];`"
      }
    }
  },
  {
    _id: "ts-m-018",
    difficulty: "middle",
    tags: ["config", "type_checking", "noImplicitAny"],
    content: {
      en: {
        title: "What is the primary benefit of enabling the **`noImplicitAny: true`** compiler option?",
        body: "Provide an example of code that would fail compilation with this option enabled.",
        solution:
          "It flags any variable, parameter, or return type that TypeScript cannot infer and defaults to `any` as a compilation error. This drastically improves code quality by preventing developers from accidentally opting out of type checking. Example: `function add(a, b) { return a + b; }` (Parameters `a` and `b` would implicitly be `any`)."
      },
      jp: {
        title: "**`noImplicitAny: true`**コンパイラオプションを有効にすることの主な利点は何ですか？",
        body: "このオプションを有効にするとコンパイルが失敗するコードの例を提供してください。",
        solution:
          "TypeScriptが推論できず、デフォルトで`any`になる変数、パラメーター、または戻り値の型をコンパイルエラーとしてフラグ付けします。これにより、開発者が誤って型チェックをオプトアウトするのを防ぎ、コード品質が大幅に向上します。例: `function add(a, b) { return a + b; }` （パラメーター`a`と`b`は暗黙的に`any`になります）。"
      },
      vi: {
        title: "Lợi ích chính của việc bật tùy chọn trình biên dịch **`noImplicitAny: true`** là gì?",
        body: "Cung cấp một ví dụ về mã sẽ thất bại trong việc biên dịch khi tùy chọn này được bật.",
        solution:
          "Nó gắn cờ bất kỳ biến, tham số hoặc kiểu trả về nào mà TypeScript không thể suy luận và mặc định là `any` là lỗi biên dịch. Điều này cải thiện đáng kể chất lượng mã bằng cách ngăn các nhà phát triển vô tình bỏ qua kiểm tra kiểu. Ví dụ: `function add(a, b) { return a + b; }` (Các tham số `a` và `b` sẽ ngầm định là `any`)."
      }
    }
  },
  {
    _id: "ts-m-019",
    difficulty: "middle",
    tags: ["decorators", "classes", "experimental"],
    content: {
      en: {
        title: "What is a **Decorator** in TypeScript and what is its primary use case?",
        body: "Which compiler option is required to enable the experimental support for decorators?",
        solution:
          "A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Their primary use is to add annotations or modify existing behavior at **design time**. The required compiler option is **`experimentalDecorators: true`**."
      },
      jp: {
        title: "TypeScriptにおける**Decorator**とは何ですか、またその主なユースケースは何ですか？",
        body: "Decoratorの実験的なサポートを有効にするために必要なコンパイラオプションは何ですか？",
        solution:
          "Decoratorは、クラス宣言、メソッド、アクセサー、プロパティ、またはパラメーターにアタッチできる特別な種類の宣言です。それらの主な用途は、**設計時**に注釈を追加したり、既存の動作を変更したりすることです。必要なコンパイラオプションは**`experimentalDecorators: true`**です。"
      },
      vi: {
        title: "**Decorator** trong TypeScript là gì và trường hợp sử dụng chính của nó?",
        body: "Tùy chọn trình biên dịch nào là bắt buộc để bật hỗ trợ thử nghiệm cho decorator?",
        solution:
          "Decorator là một loại khai báo đặc biệt có thể được đính kèm vào khai báo lớp, phương thức, accessor, thuộc tính hoặc tham số. Công dụng chính của chúng là thêm các chú thích hoặc sửa đổi hành vi hiện có tại **thời điểm thiết kế**. Tùy chọn trình biên dịch bắt buộc là **`experimentalDecorators: true`**."
      }
    }
  },
  {
    _id: "ts-m-020",
    difficulty: "middle",
    tags: ["type_guards", "typeof", "literal"],
    content: {
      en: {
        title: "How can you narrow a Union Type using the **`typeof`** operator?",
        body: "If `let data: string | number;`, write a type guard to ensure `data` is treated as a string.",
        solution:
          "The `typeof` operator is a simple type guard for primitive types (string, number, boolean, undefined, object, function, bigint, symbol). Type guard: `if (typeof data === 'string') { // data is now string }`"
      },
      jp: {
        title: "**`typeof`**演算子を使用して共用型をどのように絞り込むことができますか？",
        body: "`let data: string | number;`の場合、`data`が文字列として扱われるようにする型ガードを記述してください。",
        solution:
          "`typeof`演算子は、プリミティブ型（string、number、boolean、undefined、object、function、bigint、symbol）のための単純な型ガードです。型ガード: `if (typeof data === 'string') { // data is now string }`"
      },
      vi: {
        title: "Làm thế nào bạn có thể thu hẹp một Union Type bằng cách sử dụng toán tử **`typeof`**?",
        body: "Nếu `let data: string | number;`, hãy viết một type guard để đảm bảo `data` được coi là một chuỗi.",
        solution:
          "Toán tử `typeof` là một type guard đơn giản cho các kiểu nguyên thủy (string, number, boolean, undefined, object, function, bigint, symbol). Type guard: `if (typeof data === 'string') { // data is now string }`"
      }
    }
  },
  {
    _id: "ts-m-021",
    difficulty: "middle",
    tags: ["generics", "classes", "static"],
    content: {
      en: {
        title: "Can a **static member** of a generic class access the generic type parameter `T`?",
        body: "Explain why or why not, and how static properties are tied to the class.",
        solution:
          "No, a static member **cannot** access the generic type parameter `T`. Static members are associated with the **class itself** (the constructor function), not with specific instances or their type arguments. The generic parameter is only available on instance members, which are dependent on the specific type used during instantiation."
      },
      jp: {
        title: "ジェネリッククラスの**staticメンバー**は、ジェネリック型パラメーター`T`にアクセスできますか？",
        body: "その理由を説明し、staticプロパティがクラスにどのように結びついているか説明してください。",
        solution:
          "いいえ、staticメンバーはジェネリック型パラメーター`T`に**アクセスできません**。Staticメンバーは特定のインスタンスやそれらの型引数ではなく、**クラス自体**（コンストラクター関数）に関連付けられています。ジェネリックパラメーターは、インスタンス化中に使用される特定の型に依存するインスタンスメンバーでのみ利用可能です。"
      },
      vi: {
        title: "Một **thành viên static** của một lớp generic có thể truy cập tham số kiểu generic `T` không?",
        body: "Giải thích tại sao có hoặc tại sao không, và cách các thuộc tính static được gắn với lớp.",
        solution:
          "Không, một thành viên static **không thể** truy cập tham số kiểu generic `T`. Các thành viên static được liên kết với **chính lớp đó** (hàm tạo), chứ không phải với các thể hiện cụ thể hoặc đối số kiểu của chúng. Tham số generic chỉ có sẵn trên các thành viên thể hiện, những thành viên này phụ thuộc vào kiểu cụ thể được sử dụng trong quá trình khởi tạo."
      }
    }
  },
  {
    _id: "ts-m-022",
    difficulty: "middle",
    tags: ["utility_types", "record", "indexed_access"],
    content: {
      en: {
        title: "What is the purpose of the **`Record<K, T>`** utility type?",
        body: "Show how to define a type where the keys are specific user IDs ('user1' | 'user2') and the values are `number`.",
        solution:
          "`Record<K, T>` constructs an object type whose property keys are keys in `K` and whose property values are of type `T`. Example: `type UserScores = Record<'user1' | 'user2', number>;` This provides a type-safe way to define dictionary-like objects with specific keys."
      },
      jp: {
        title: "**`Record<K, T>`**ユーティリティ型の目的は何ですか？",
        body: "キーが特定のユーザーID（'user1' | 'user2'）で、値が`number`である型を定義する方法を示してください。",
        solution:
          "`Record<K, T>`は、プロパティキーが`K`内のキーであり、プロパティ値が型`T`であるオブジェクト型を構築します。例: `type UserScores = Record<'user1' | 'user2', number>;` これは、特定のキーを持つ辞書のようなオブジェクトを定義するための型安全な方法を提供します。"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích **`Record<K, T>`** là gì?",
        body: "Trình bày cách định nghĩa một kiểu trong đó các khóa là các ID người dùng cụ thể ('user1' | 'user2') và các giá trị là `number`.",
        solution:
          "`Record<K, T>` xây dựng một kiểu đối tượng có các khóa thuộc tính là các khóa trong `K` và các giá trị thuộc tính là kiểu `T`. Ví dụ: `type UserScores = Record<'user1' | 'user2', number>;` Điều này cung cấp một cách an toàn kiểu để định nghĩa các đối tượng giống từ điển với các khóa cụ thể."
      }
    }
  },
  {
    _id: "ts-m-023",
    difficulty: "middle",
    tags: ["type_guards", "custom", "predicate"],
    content: {
      en: {
        title: "What is a **User-Defined Type Guard** and what special return type does it use?",
        body: "Show the signature of a function `isNumberArray` that acts as a type guard for `(x: any): x is number[]`.",
        solution:
          "A User-Defined Type Guard is a function that uses a **type predicate** as its return type (`parameterName is TypeName`). When this function returns true, TypeScript narrows the type of the parameter within the block. Signature: `function isNumberArray(arg: any): arg is number[] { ... }`"
      },
      jp: {
        title: "**User-Defined Type Guard**とは何ですか、またそれはどのような特別な戻り値の型を使用しますか？",
        body: "`isNumberArray`という関数が`(x: any): x is number[]`という型ガードとして機能するシグネチャを示してください。",
        solution:
          "User-Defined Type Guardは、戻り値の型として**型述語**（`parameterName is TypeName`）を使用する関数です。この関数がtrueを返すと、TypeScriptはそのブロック内でパラメーターの型を絞り込みます。シグネチャ: `function isNumberArray(arg: any): arg is number[] { ... }`"
      },
      vi: {
        title: "**User-Defined Type Guard** là gì và nó sử dụng kiểu trả về đặc biệt nào?",
        body: "Trình bày chữ ký của một hàm `isNumberArray` hoạt động như một type guard cho `(x: any): x is number[]`.",
        solution:
          "User-Defined Type Guard là một hàm sử dụng **vị từ kiểu** (type predicate) làm kiểu trả về của nó (`parameterName is TypeName`). Khi hàm này trả về true, TypeScript sẽ thu hẹp kiểu của tham số trong khối đó. Chữ ký: `function isNumberArray(arg: any): arg is number[] { ... }`"
      }
    }
  },
  {
    _id: "ts-m-024",
    difficulty: "middle",
    tags: ["type_alias", "interface", "extending"],
    content: {
      en: {
        title: "How do you achieve **inheritance/extension** with `type` aliases?",
        body: "Show how to create a `type AdminUser` that extends `interface User` using an intersection type.",
        solution:
          "Type aliases achieve extension using an **intersection type** (`&`). `interface User { id: number; } type AdminProps = { role: 'admin' }; type AdminUser = User & AdminProps;`"
      },
      jp: {
        title: "`type`エイリアスを使用して**継承/拡張**をどのように実現しますか？",
        body: "交差型を使用して`interface User`を拡張する`type AdminUser`をどのように作成するか示してください。",
        solution:
          "Type aliasesは、**交差型**（`&`）を使用して拡張を実現します。 `interface User { id: number; } type AdminProps = { role: 'admin' }; type AdminUser = User & AdminProps;`"
      },
      vi: {
        title: "Làm thế nào bạn đạt được **kế thừa/mở rộng** với `type` alias?",
        body: "Trình bày cách tạo một `type AdminUser` mở rộng `interface User` bằng cách sử dụng kiểu giao.",
        solution:
          "Type alias đạt được sự mở rộng bằng cách sử dụng một **kiểu giao** (`&`). `interface User { id: number; } type AdminProps = { role: 'admin' }; type AdminUser = User & AdminProps;`"
      }
    }
  },
  {
    _id: "ts-m-025",
    difficulty: "middle",
    tags: ["module_system", "default_import", "named_import"],
    content: {
      en: {
        title: "How does TypeScript handle type resolution for JavaScript's **default** vs. **named** module imports?",
        body: "If a module exports `export default MyClass` and `export function helper()`, what are the corresponding import syntaxes?",
        solution:
          "**Default exports** are imported via `import MyClass from './module';`. **Named exports** are imported via `import { helper } from './module';`. TypeScript correctly resolves the types regardless of whether the source file is `.js` or `.ts`, relying on the corresponding module's declaration file (`.d.ts`) if available."
      },
      jp: {
        title: "TypeScriptは、JavaScriptの**デフォルト**と**名前付き**モジュールインポートの型解決をどのように処理しますか？",
        body: "モジュールが`export default MyClass`と`export function helper()`をエクスポートする場合、対応するインポート構文は何ですか？",
        solution:
          "**デフォルトエクスポート**は`import MyClass from './module';`を介してインポートされます。**名前付きエクスポート**は`import { helper } from './module';`を介してインポートされます。TypeScriptは、ソースファイルが`.js`か`.ts`かに関係なく、対応するモジュールの宣言ファイル（`.d.ts`）がある場合はそれに依存して、型を正しく解決します。"
      },
      vi: {
        title: "TypeScript xử lý việc phân giải kiểu cho các **default** và **named** import module của JavaScript như thế nào?",
        body: "Nếu một module xuất `export default MyClass` và `export function helper()`, cú pháp import tương ứng là gì?",
        solution:
          "**Default export** được import thông qua `import MyClass from './module';`. **Named export** được import thông qua `import { helper } from './module';`. TypeScript giải quyết kiểu chính xác bất kể file nguồn là `.js` hay `.ts`, dựa vào file khai báo (`.d.ts`) tương ứng của module nếu có."
      }
    }
  },
  {
    _id: "ts-m-026",
    difficulty: "middle",
    tags: ["utility_types", "nonnullable", "null"],
    content: {
      en: {
        title: "What is the purpose of the **`NonNullable<T>`** utility type?",
        body: "What is the result of `NonNullable<string | null | undefined | number[]>`?",
        solution:
          "`NonNullable<T>` constructs a type by excluding `null` and `undefined` from type `T`. It's commonly used when you have successfully performed a type guard and want to communicate that the value is no longer nullish. Result: `string | number[]`."
      },
      jp: {
        title: "**`NonNullable<T>`**ユーティリティ型の目的は何ですか？",
        body: "`NonNullable<string | null | undefined | number[]>`の結果は何ですか？",
        solution:
          "`NonNullable<T>`は、型`T`から`null`と`undefined`を除外して型を構築します。型ガードを正常に実行し、値がもはやnullishではないことを伝えたい場合によく使用されます。結果: `string | number[]`。"
      },
      vi: {
        title: "Mục đích của kiểu tiện ích **`NonNullable<T>`** là gì?",
        body: "Kết quả của `NonNullable<string | null | undefined | number[]>` là gì?",
        solution:
          "`NonNullable<T>` xây dựng một kiểu bằng cách loại trừ `null` và `undefined` khỏi kiểu `T`. Nó thường được sử dụng khi bạn đã thực hiện thành công một type guard và muốn thông báo rằng giá trị không còn là nullish. Kết quả: `string | number[]`."
      }
    }
  },
  {
    _id: "ts-m-027",
    difficulty: "middle",
    tags: ["literal_types", "string_literal", "numeric_literal"],
    content: {
      en: {
        title: "Explain **Literal Types** and how they enable stricter typing.",
        body: "Define a type `CardinalDirection` that only allows the values 'North', 'South', 'East', or 'West'.",
        solution:
          "Literal Types allow you to specify the *exact* value a string, number, or boolean must have, rather than just the general type. They are often used as members of Union Types to restrict choices. Example: `type CardinalDirection = 'North' | 'South' | 'East' | 'West';`"
      },
      jp: {
        title: "**Literal Types**と、それらがより厳密な型付けをどのように可能にするか説明してください。",
        body: "値'North'、'South'、'East'、または'West'のみを許可する型`CardinalDirection`を定義してください。",
        solution:
          "Literal Typesを使用すると、文字列、数値、またはブール値が持つ必要のある*正確な*値を指定でき、一般的な型だけではありません。これらは、選択肢を制限するために共用型のメンバーとしてよく使用されます。例: `type CardinalDirection = 'North' | 'South' | 'East' | 'West';`"
      }
    }
  },
  {
    _id: "ts-m-028",
    difficulty: "middle",
    tags: ["type_assertion", "angle_bracket", "as_keyword"],
    content: {
      en: {
        title: "What is the purpose of **Type Assertion** in TypeScript?",
        body: "Show two syntaxes for asserting that a variable `value` of type `any` is actually a `string`.",
        solution:
          "Type Assertion is a way to tell the compiler, 'Trust me, I know this is a **more specific type** than you currently think.' It does not perform runtime checks. Syntaxes: **Angle-bracket** (JSX-incompatible): `(<string>value)`. **`as` keyword** (preferred): `(value as string)`."
      },
      jp: {
        title: "TypeScriptにおける**Type Assertion**の目的は何ですか？",
        body: "`any`型の変数`value`が実際には`string`であることをアサートする2つの構文を示してください。",
        solution:
          "Type Assertionは、コンパイラに「私を信じて、これは現在あなたが考えているよりも**より具体的な型**であることを知っています」と伝える方法です。ランタイムチェックは実行しません。構文: **山括弧**（JSX非互換）: `(<string>value)`. **`as`キーワード**（推奨）: `(value as string)`。"
      },
      vi: {
        title: "Mục đích của **Khẳng định kiểu** (Type Assertion) trong TypeScript là gì?",
        body: "Trình bày hai cú pháp để khẳng định rằng một biến `value` có kiểu `any` thực sự là một `string`.",
        solution:
          "Khẳng định kiểu là một cách để nói với trình biên dịch, 'Hãy tin tôi, tôi biết đây là một **kiểu cụ thể hơn** so với những gì bạn đang nghĩ.' Nó không thực hiện kiểm tra runtime. Cú pháp: **Dấu ngoặc nhọn** (không tương thích với JSX): `(<string>value)`. **Từ khóa `as`** (được ưu tiên): `(value as string)`."
      }
    }
  },
  {
    _id: "ts-m-029",
    difficulty: "middle",
    tags: ["indexing", "indexed_access_types"],
    content: {
      en: {
        title: "Explain **Indexed Access Types** (or Lookup Types).",
        body: "If `interface User { id: number; name: string; }`, how do you extract the type of the `name` property?",
        solution:
          "Indexed Access Types allow you to look up the type of a property on another type using bracket notation. You pass a type (the index/key) inside the brackets. Example: `User['name']` evaluates to the type `string`."
      },
      jp: {
        title: "**Indexed Access Types**（インデックス付きアクセス型、またはルックアップ型）を説明してください。",
        body: "`interface User { id: number; name: string; }`の場合、`name`プロパティの型をどのように抽出しますか？",
        solution:
          "Indexed Access Typesを使用すると、ブラケット表記を使用して別の型のプロパティの型をルックアップできます。ブラケット内に型（インデックス/キー）を渡します。例: `User['name']`は型`string`に評価されます。"
      },
      vi: {
        title: "Giải thích **Indexed Access Types** (hoặc Lookup Types).",
        body: "Nếu `interface User { id: number; name: string; }`, làm thế nào bạn trích xuất kiểu của thuộc tính `name`?",
        solution:
          "Indexed Access Types cho phép bạn tra cứu kiểu của một thuộc tính trên một kiểu khác bằng cách sử dụng ký hiệu dấu ngoặc vuông. Bạn truyền một kiểu (chỉ mục/khóa) bên trong dấu ngoặc vuông. Ví dụ: `User['name']` đánh giá thành kiểu `string`."
      }
    }
  },
  {
    _id: "ts-m-030",
    difficulty: "middle",
    tags: ["structural_typing", "duck_typing"],
    content: {
      en: {
        title: "Explain TypeScript's concept of **Structural Typing** (Duck Typing).",
        body: "If `interface A { x: number; }` and `interface B { x: number; y: number; }`, can a value of type `B` be assigned to a variable of type `A`, and why?",
        solution:
          "Structural Typing means that two types are considered compatible if they have the same shape/structure, regardless of their nominal name. Yes, a value of type `B` can be assigned to a variable of type `A` because `B` has all the required members of `A` (`x: number`). This is known as the **'subtyping'** rule."
      },
      jp: {
        title: "TypeScriptの**Structural Typing**（ダックタイピング）の概念を説明してください。",
        body: "`interface A { x: number; }`および`interface B { x: number; y: number; }`の場合、型`B`の値は型`A`の変数に割り当てることができますか、またその理由は何ですか？",
        solution:
          "Structural Typingとは、2つの型が、その名目上の名前に関係なく、同じ形状/構造を持っていれば互換性があると見なされることを意味します。はい、型`B`の値は型`A`の変数に割り当てることができます。なぜなら、`B`は`A`の必要なすべてのメンバー（`x: number`）を持っているからです。これは**'サブタイピング'**ルールとして知られています。"
      },
      vi: {
        title: "Giải thích khái niệm **Kiểu cấu trúc** (Structural Typing - Duck Typing) của TypeScript.",
        body: "Nếu `interface A { x: number; }` và `interface B { x: number; y: number; }`, một giá trị kiểu `B` có thể được gán cho một biến kiểu `A` không, và tại sao?",
        solution:
          "Kiểu cấu trúc có nghĩa là hai kiểu được coi là tương thích nếu chúng có cùng hình dạng/cấu trúc, bất kể tên định danh của chúng. Có, một giá trị kiểu `B` có thể được gán cho một biến kiểu `A` vì `B` có tất cả các thành viên bắt buộc của `A` (`x: number`). Điều này được gọi là quy tắc **'kiểu con'** (subtyping)."
      }
    }
  },
  {
    _id: "ts-m-031",
    difficulty: "middle",
    tags: ["ambient_declaration", "declare", "js_libraries"],
    content: {
      en: {
        title: "What is the function of the **`declare`** keyword in TypeScript?",
        body: "When using the `declare` keyword, what does TypeScript expect to exist at runtime?",
        solution:
          "The `declare` keyword is used to describe the shape of code that exists **elsewhere** (usually in plain JavaScript files or external libraries) without generating any JavaScript output. TypeScript expects the declared entity (variable, function, class, module) to exist in the global scope or be imported at runtime."
      },
      jp: {
        title: "TypeScriptにおける**`declare`**キーワードの機能は何ですか？",
        body: "`declare`キーワードを使用する場合、TypeScriptはランタイムで何が存在することを期待しますか？",
        solution:
          "`declare`キーワードは、**他の場所**に存在するコード（通常はプレーンなJavaScriptファイルまたは外部ライブラリ）の形状を記述するために使用され、JavaScript出力を生成しません。TypeScriptは、宣言されたエンティティ（変数、関数、クラス、モジュール）がランタイムでグローバルスコープに存在するか、インポートされることを期待します。"
      },
      vi: {
        title: "Chức năng của từ khóa **`declare`** trong TypeScript là gì?",
        body: "Khi sử dụng từ khóa `declare`, TypeScript mong đợi điều gì tồn tại tại thời điểm chạy (runtime)?",
        solution:
          "Từ khóa `declare` được sử dụng để mô tả hình dạng của mã tồn tại **ở nơi khác** (thường là trong các file JavaScript thuần hoặc thư viện bên ngoài) mà không tạo ra bất kỳ đầu ra JavaScript nào. TypeScript mong đợi thực thể được khai báo (biến, hàm, lớp, module) tồn tại trong phạm vi toàn cục hoặc được import tại thời điểm chạy."
      }
    }
  },
  {
    _id: "ts-m-032",
    difficulty: "middle",
    tags: ["utility_types", "awaited", "promises"],
    content: {
      en: {
        title: "How does the **`Awaited<T>`** utility type work?",
        body: "If `T = Promise<string>`, what type is yielded by `Awaited<T>`?",
        solution:
          "`Awaited<T>` is a utility type that is intended to model the operation of the JavaScript `await` operator. It recursively unwraps the Promise type and returns the resolved value type. If `T = Promise<string>`, `Awaited<T>` yields `string`."
      },
      jp: {
        title: "**`Awaited<T>`**ユーティリティ型はどのように機能しますか？",
        body: "`T = Promise<string>`の場合、`Awaited<T>`によって生成される型は何ですか？",
        solution:
          "`Awaited<T>`は、JavaScriptの`await`演算子の操作をモデル化することを目的としたユーティリティ型です。Promise型を再帰的に展開し、解決された値の型を返します。`T = Promise<string>`の場合、`Awaited<T>`は`string`を生成します。"
      },
      vi: {
        title: "Kiểu tiện ích **`Awaited<T>`** hoạt động như thế nào?",
        body: "Nếu `T = Promise<string>`, kiểu nào được tạo ra bởi `Awaited<T>`?",
        solution:
          "`Awaited<T>` là một kiểu tiện ích nhằm mô hình hóa hoạt động của toán tử `await` của JavaScript. Nó đệ quy giải nén kiểu Promise và trả về kiểu giá trị đã được giải quyết. Nếu `T = Promise<string>`, `Awaited<T>` tạo ra `string`."
      }
    }
  },
  {
    _id: "ts-m-033",
    difficulty: "middle",
    tags: ["classes", "access_modifiers", "protected"],
    content: {
      en: {
        title: "Explain the accessibility of a **`protected`** class member.",
        body: "Can a `protected` member be accessed from an instance of the class, or only from subclasses?",
        solution:
          "A `protected` member can be accessed from **within the defining class** and from **subclasses** (derived classes). It cannot be accessed from outside the class hierarchy, including from instances of the class itself (`new MyClass().protectedMember` is an error)."
      },
      jp: {
        title: "**`protected`**クラスメンバーのアクセシビリティを説明してください。",
        body: "`protected`メンバーはクラスのインスタンスからアクセスできますか、それともサブクラスからのみアクセスできますか？",
        solution:
          "`protected`メンバーは、**定義するクラス内**および**サブクラス**（派生クラス）からアクセスできます。クラス階層外からはアクセスできません。これには、クラス自体のインスタンスからのアクセスも含まれます（`new MyClass().protectedMember`はエラーです）。"
      },
      vi: {
        title: "Giải thích khả năng truy cập của một thành viên lớp **`protected`**.",
        body: "Một thành viên `protected` có thể được truy cập từ một thể hiện của lớp đó không, hay chỉ từ các lớp con?",
        solution:
          "Một thành viên `protected` có thể được truy cập từ **bên trong lớp định nghĩa** và từ **các lớp con** (lớp dẫn xuất). Nó không thể được truy cập từ bên ngoài hệ thống phân cấp lớp, bao gồm từ các thể hiện của chính lớp đó (`new MyClass().protectedMember` là một lỗi)."
      }
    }
  },
  {
    _id: "ts-m-034",
    difficulty: "middle",
    tags: ["optional_properties", "optional_parameter", "difference"],
    content: {
      en: {
        title: "What is the key difference in runtime behavior between an **Optional Property** and an **Optional Parameter**?",
        body: "How does the type of an optional parameter differ from its non-optional counterpart in strict mode?",
        solution:
          "An **Optional Property** (`prop?: T`) means the property might not exist on the object, but if it does, it's of type `T`. An **Optional Parameter** (`param?: T`) means the argument might be omitted in the function call. In strict mode, the optional parameter's type is implicitly a union with `undefined`: `T | undefined`."
      },
      jp: {
        title: "**Optional Property**と**Optional Parameter**の間で、ランタイムの動作における主な違いは何ですか？",
        body: "厳密モードでは、オプションパラメーターの型は非オプションの対応物とどのように異なりますか？",
        solution:
          "**Optional Property** (`prop?: T`)は、プロパティがオブジェクト上に存在しない可能性があることを意味しますが、存在する場合は型`T`です。**Optional Parameter** (`param?: T`)は、関数呼び出しで引数が省略される可能性があることを意味します。厳密モードでは、オプションパラメーターの型は暗黙的に`undefined`との共用型になります: `T | undefined`。"
      },
      vi: {
        title: "Sự khác biệt chính trong hành vi runtime giữa một **Thuộc tính tùy chọn** và một **Tham số tùy chọn** là gì?",
        body: "Kiểu của một tham số tùy chọn khác với đối tác không tùy chọn của nó trong chế độ nghiêm ngặt như thế nào?",
        solution:
          "Một **Thuộc tính tùy chọn** (`prop?: T`) có nghĩa là thuộc tính có thể không tồn tại trên đối tượng, nhưng nếu có, nó có kiểu `T`. Một **Tham số tùy chọn** (`param?: T`) có nghĩa là đối số có thể bị bỏ qua trong lời gọi hàm. Trong chế độ nghiêm ngặt, kiểu của tham số tùy chọn ngầm định là một union với `undefined`: `T | undefined`."
      }
    }
  },
  {
    _id: "ts-m-035",
    difficulty: "middle",
    tags: ["type_guards", "in", "property_check"],
    content: {
      en: {
        title: "How does the **`in`** operator act as a Type Guard?",
        body: "If you have a union type `A | B`, and only type `A` has a property `a`, how would you use `in` to narrow the type to `A`?",
        solution:
          "The `in` operator checks if a property exists on an object. TypeScript uses this knowledge to narrow a Union Type to only the members that potentially contain that property. Example: `if ('a' in obj) { // obj is now type A }`"
      },
      jp: {
        title: "**`in`**演算子はType Guardとしてどのように機能しますか？",
        body: "共用型`A | B`があり、型`A`のみがプロパティ`a`を持つ場合、`in`を使用して型を`A`に絞り込むにはどうすればよいですか？",
        solution:
          "`in`演算子は、オブジェクト上にプロパティが存在するかどうかをチェックします。TypeScriptはこの知識を使用して、共用型をそのプロパティを潜在的に含むメンバーにのみ絞り込みます。例: `if ('a' in obj) { // obj is now type A }`"
      },
      vi: {
        title: "Toán tử **`in`** hoạt động như một Type Guard như thế nào?",
        body: "Nếu bạn có một kiểu union `A | B`, và chỉ kiểu `A` có thuộc tính `a`, bạn sẽ sử dụng `in` như thế nào để thu hẹp kiểu thành `A`?",
        solution:
          "Toán tử `in` kiểm tra xem một thuộc tính có tồn tại trên một đối tượng hay không. TypeScript sử dụng kiến thức này để thu hẹp Union Type chỉ còn các thành viên có khả năng chứa thuộc tính đó. Ví dụ: `if ('a' in obj) { // obj is now type A }`"
      }
    }
  },
  {
    _id: "ts-m-036",
    difficulty: "middle",
    tags: ["config", "js_integration", "allowJs"],
    content: {
      en: {
        title: "What is the role of the **`allowJs: true`** compiler option?",
        body: "What is the benefit of using this option when migrating a large JavaScript codebase to TypeScript?",
        solution:
          "`allowJs: true` permits JavaScript files (`.js`) to be included in a TypeScript project and compiled/checked alongside `.ts` files. This is crucial for **incremental migration**, as you can gradually introduce TypeScript into a large existing JS codebase without rewriting everything at once."
      },
      jp: {
        title: "**`allowJs: true`**コンパイラオプションの役割は何ですか？",
        body: "大規模なJavaScriptコードベースをTypeScriptに移行する際に、このオプションを使用する利点は何ですか？",
        solution:
          "`allowJs: true`は、JavaScriptファイル（`.js`）をTypeScriptプロジェクトに含め、`.ts`ファイルと一緒にコンパイル/チェックすることを許可します。これは、**段階的な移行**にとって不可欠です。既存の大規模なJSコードベースにすべてを一度に書き直すことなく、徐々にTypeScriptを導入できるためです。"
      },
      vi: {
        title: "Vai trò của tùy chọn trình biên dịch **`allowJs: true`** là gì?",
        body: "Lợi ích của việc sử dụng tùy chọn này khi di chuyển một codebase JavaScript lớn sang TypeScript là gì?",
        solution:
          "`allowJs: true` cho phép các file JavaScript (`.js`) được đưa vào một dự án TypeScript và được biên dịch/kiểm tra cùng với các file `.ts`. Điều này rất quan trọng cho **quá trình di chuyển tăng dần**, vì bạn có thể dần dần giới thiệu TypeScript vào một codebase JS lớn hiện có mà không cần viết lại mọi thứ cùng một lúc."
      }
    }
  },
  {
    _id: "ts-m-037",
    difficulty: "middle",
    tags: ["generics", "default_types"],
    content: {
      en: {
        title: "How do you provide a **default type** for a generic parameter in an interface?",
        body: "Define a generic interface `Box<T>` where `T` defaults to `string` if not provided.",
        solution:
          "Default types are specified using the `=` sign in the generic parameter list. Example: `interface Box<T = string> { value: T; }`"
      },
      jp: {
        title: "インターフェースのジェネリックパラメーターに**デフォルトの型**をどのように提供しますか？",
        body: "`T`が提供されない場合にデフォルトで`string`になるジェネリックインターフェース`Box<T>`を定義してください。",
        solution:
          "デフォルトの型は、ジェネリックパラメーターリストで`=`記号を使用して指定されます。例: `interface Box<T = string> { value: T; }`"
      },
      vi: {
        title: "Làm thế nào để cung cấp một **kiểu mặc định** cho một tham số generic trong một interface?",
        body: "Định nghĩa một interface generic `Box<T>` trong đó `T` mặc định là `string` nếu không được cung cấp.",
        solution:
          "Các kiểu mặc định được chỉ định bằng cách sử dụng dấu `=` trong danh sách tham số generic. Ví dụ: `interface Box<T = string> { value: T; }`"
      }
    }
  },
  {
    _id: "ts-m-038",
    difficulty: "middle",
    tags: ["type_guards", "assertion_functions"],
    content: {
      en: {
        title: "Explain the role of **Assertion Functions** (using `asserts`) in TypeScript.",
        body: "How do they differ from a User-Defined Type Guard in their effect on code flow?",
        solution:
          "An Assertion Function is one whose return type is `asserts condition` or `asserts value is TypeName`. Unlike a type guard, which narrows the type inside an `if` block, an assertion function tells TypeScript that if the function **returns without throwing an error**, the condition/type is guaranteed to be true from that point on, causing the compiler to halt flow analysis if an error is thrown."
      },
      jp: {
        title: "TypeScriptにおける**Assertion Functions**（`asserts`の使用）の役割を説明してください。",
        body: "コードフローへの影響において、これらはUser-Defined Type Guardとどのように異なりますか？",
        solution:
          "Assertion Functionは、戻り値の型が`asserts condition`または`asserts value is TypeName`である関数です。`if`ブロック内で型を絞り込むType Guardとは異なり、Assertion Functionは、関数が**エラーをスローせずに戻った場合**、その時点から条件/型が真であることが保証されることをTypeScriptに伝えます。これにより、エラーがスローされた場合、コンパイラはフロー分析を停止します。"
      },
      vi: {
        title: "Giải thích vai trò của **Hàm khẳng định** (Assertion Functions - sử dụng `asserts`) trong TypeScript.",
        body: "Chúng khác với User-Defined Type Guard như thế nào về tác động của chúng đối với luồng mã?",
        solution:
          "Hàm khẳng định là một hàm có kiểu trả về là `asserts condition` hoặc `asserts value is TypeName`. Không giống như type guard, thu hẹp kiểu bên trong khối `if`, hàm khẳng định cho TypeScript biết rằng nếu hàm **trả về mà không ném lỗi**, điều kiện/kiểu được đảm bảo là đúng từ thời điểm đó trở đi, khiến trình biên dịch dừng phân tích luồng nếu một lỗi được ném ra."
      }
    }
  },
  {
    _id: "ts-m-039",
    difficulty: "middle",
    tags: ["config", "sourceMap", "debugging"],
    content: {
      en: {
        title: "What is the purpose of the **`sourceMap: true`** compiler option in production environments?",
        body: "How does it help during debugging of compiled JavaScript?",
        solution:
          "`sourceMap: true` generates `.map` files alongside the compiled JavaScript files. These source maps map the compiled JS code back to the original TypeScript source code. This is essential for **debugging**, as it allows developers to set breakpoints and inspect variables in the original TS code, even when the browser is running the compiled JS."
      },
      jp: {
        title: "本番環境における**`sourceMap: true`**コンパイラオプションの目的は何ですか？",
        body: "コンパイルされたJavaScriptのデバッグ中に、これはどのように役立ちますか？",
        solution:
          "`sourceMap: true`は、コンパイルされたJavaScriptファイルと並行して`.map`ファイルを生成します。これらのソースマップは、コンパイルされたJSコードを元のTypeScriptソースコードにマッピングします。これは**デバッグ**に不可欠であり、ブラウザがコンパイルされたJSを実行している場合でも、開発者が元のTSコードでブレークポイントを設定したり、変数を検査したりすることを可能にします。"
      },
      vi: {
        title: "Mục đích của tùy chọn trình biên dịch **`sourceMap: true`** trong môi trường sản xuất là gì?",
        body: "Nó giúp ích như thế nào trong quá trình debug mã JavaScript đã biên dịch?",
        solution:
          "`sourceMap: true` tạo ra các file `.map` cùng với các file JavaScript đã biên dịch. Các source map này ánh xạ mã JS đã biên dịch trở lại mã nguồn TypeScript gốc. Điều này rất cần thiết cho **việc debug**, vì nó cho phép các nhà phát triển đặt breakpoint và kiểm tra các biến trong mã TS gốc, ngay cả khi trình duyệt đang chạy JS đã biên dịch."
      }
    }
  },
  {
    _id: "ts-m-040",
    difficulty: "middle",
    tags: ["never", "exhaustiveness", "error_handling"],
    content: {
      en: {
        title: "What is the **`never`** type and its primary use case?",
        body: "How can `never` be used with Union Types to enforce **exhaustiveness checks**?",
        solution:
          "The `never` type represents the type of values that **never occur**. Its primary use is in functions that never return (e.g., functions that throw an error or contain infinite loops) or as an exhaustiveness check. If a function that handles a Union Type reaches a point where all members of the union should have been handled, assigning the remaining type to a `never` variable ensures a compilation error if a new union member is added later."
      },
      jp: {
        title: "**`never`**型とその主なユースケースは何ですか？",
        body: "**網羅性チェック**を強制するために、`never`を共用型と組み合わせてどのように使用できますか？",
        solution:
          "`never`型は、**決して発生しない**値の型を表します。その主な用途は、決して戻らない関数（例：エラーをスローする関数や無限ループを含む関数）や、網羅性チェックとしての使用です。共用型を処理する関数が、共用体のすべてのメンバーが処理されたはずのポイントに達した場合、残りの型を`never`変数に割り当てることで、後で新しい共用体メンバーが追加された場合にコンパイルエラーが強制されます。"
      },
      vi: {
        title: "Kiểu **`never`** là gì và trường hợp sử dụng chính của nó?",
        body: "Làm thế nào `never` có thể được sử dụng với Union Types để bắt buộc **kiểm tra tính đầy đủ** (exhaustiveness checks)?",
        solution:
          "Kiểu `never` đại diện cho kiểu của các giá trị **không bao giờ xảy ra**. Công dụng chính của nó là trong các hàm không bao giờ trả về (ví dụ: các hàm ném lỗi hoặc chứa vòng lặp vô hạn) hoặc như một kiểm tra tính đầy đủ. Nếu một hàm xử lý một Union Type đạt đến điểm mà tất cả các thành viên của union lẽ ra đã được xử lý, việc gán kiểu còn lại cho một biến `never` sẽ đảm bảo một lỗi biên dịch nếu một thành viên union mới được thêm vào sau này."
      }
    }
  },
  {
    _id: "ts-m-041",
    difficulty: "middle",
    tags: ["utility_types", "instance_type", "classes"],
    content: {
      en: {
        title: "How do you extract the **instance type** from a class constructor type?",
        body: "Use a built-in utility type to get the instance type from `typeof MyClass`.",
        solution:
          "Use the **`InstanceType<T>`** utility type. If `T` is a constructor function type (like `typeof MyClass`), `InstanceType<T>` returns the type of its instance. Example: `type MyInstance = InstanceType<typeof MyClass>;`"
      },
      jp: {
        title: "クラスコンストラクター型から**インスタンス型**をどのように抽出しますか？",
        body: "組み込みのユーティリティ型を使用して、`typeof MyClass`からインスタンス型を取得してください。",
        solution:
          "**`InstanceType<T>`**ユーティリティ型を使用します。`T`がコンストラクター関数型（`typeof MyClass`など）の場合、`InstanceType<T>`はそのインスタンスの型を返します。例: `type MyInstance = InstanceType<typeof MyClass>;`"
      },
      vi: {
        title: "Làm thế nào để trích xuất **kiểu thể hiện** (instance type) từ kiểu hàm tạo lớp?",
        body: "Sử dụng một kiểu tiện ích tích hợp sẵn để lấy kiểu thể hiện từ `typeof MyClass`.",
        solution:
          "Sử dụng kiểu tiện ích **`InstanceType<T>`**. Nếu `T` là một kiểu hàm tạo (như `typeof MyClass`), `InstanceType<T>` trả về kiểu của thể hiện của nó. Ví dụ: `type MyInstance = InstanceType<typeof MyClass>;`"
      }
    }
  },
  {
    _id: "ts-m-042",
    difficulty: "middle",
    tags: ["generics", "multiple_parameters"],
    content: {
      en: {
        title: "How do you define a generic function with **multiple type parameters** and constraints?",
        body: "Write a function signature for `merge<T, U>` that takes two objects of types `T` and `U` and returns their intersection, ensuring both `T` and `U` are objects.",
        solution:
          "Multiple generic parameters are comma-separated. The constraint is applied to each one. Signature: `function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U;`"
      },
      jp: {
        title: "**複数の型パラメーター**と制約を持つジェネリック関数をどのように定義しますか？",
        body: "型`T`と`U`の2つのオブジェクトを受け取り、それらの交差型を返す`merge<T, U>`の関数シグネチャを記述し、`T`と`U`の両方がオブジェクトであることを保証してください。",
        solution:
          "複数のジェネリックパラメーターはカンマで区切られます。制約はそれぞれに適用されます。シグネチャ: `function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U;`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một hàm generic với **nhiều tham số kiểu** và ràng buộc?",
        body: "Viết chữ ký hàm cho `merge<T, U>` nhận hai đối tượng có kiểu `T` và `U` và trả về kiểu giao của chúng, đảm bảo cả `T` và `U` đều là đối tượng.",
        solution:
          "Nhiều tham số generic được phân tách bằng dấu phẩy. Ràng buộc được áp dụng cho từng tham số. Chữ ký: `function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U;`"
      }
    }
  },
  {
    _id: "ts-m-043",
    difficulty: "middle",
    tags: ["enum", "reverse_mapping", "numeric"],
    content: {
      en: {
        title: "Explain the concept of **Reverse Mapping** in TypeScript's numeric `enum`s.",
        body: "What is the value of `ColorEnum[0]` given `enum ColorEnum { Red, Green, Blue }`?",
        solution:
          "Numeric enums, by default, generate a bidirectional mapping object in JavaScript, allowing you to look up both the name by the value and the value by the name. **Reverse Mapping** is the ability to look up the string name from the numeric value. Value: `ColorEnum[0]` is the string `'Red'`."
      },
      jp: {
        title: "TypeScriptの数値`enum`における**Reverse Mapping**の概念を説明してください。",
        body: "`enum ColorEnum { Red, Green, Blue }`が与えられた場合、`ColorEnum[0]`の値は何ですか？",
        solution:
          "数値enumは、デフォルトでJavaScriptで双方向マッピングオブジェクトを生成し、値による名前のルックアップと名前による値のルックアップの両方を可能にします。**Reverse Mapping**は、数値から文字列名をルックアップする機能です。値: `ColorEnum[0]`は文字列`'Red'`です。"
      },
      vi: {
        title: "Giải thích khái niệm **Ánh xạ ngược** (Reverse Mapping) trong `enum` số học của TypeScript.",
        body: "Giá trị của `ColorEnum[0]` là gì với `enum ColorEnum { Red, Green, Blue }`?",
        solution:
          "Các enum số học, theo mặc định, tạo ra một đối tượng ánh xạ hai chiều trong JavaScript, cho phép bạn tra cứu cả tên theo giá trị và giá trị theo tên. **Ánh xạ ngược** là khả năng tra cứu tên chuỗi từ giá trị số. Giá trị: `ColorEnum[0]` là chuỗi `'Red'`."
      }
    }
  },
  {
    _id: "ts-m-044",
    difficulty: "middle",
    tags: ["config", "rootDir", "outDir"],
    content: {
      en: {
        title: "What is the purpose of the `rootDir` and `outDir` compiler options?",
        body: "How do these options typically relate to your source code structure and build process?",
        solution:
          "`rootDir` specifies the root folder containing the source files (usually where all `.ts` files reside). `outDir` specifies the output directory for the compiled JavaScript files. They maintain the directory structure from `rootDir` inside `outDir`, organizing the compiled output cleanly."
      },
      jp: {
        title: "`rootDir`と`outDir`コンパイラオプションの目的は何ですか？",
        body: "これらのオプションは、ソースコード構造とビルドプロセスに通常どのように関連していますか？",
        solution:
          "`rootDir`はソースファイルを含むルートフォルダー（通常、すべての`.ts`ファイルが存在する場所）を指定します。`outDir`はコンパイルされたJavaScriptファイルの出力ディレクトリを指定します。これらは`rootDir`からのディレクトリ構造を`outDir`内に維持し、コンパイルされた出力をきれいに整理します。"
      },
      vi: {
        title: "Mục đích của các tùy chọn trình biên dịch `rootDir` và `outDir` là gì?",
        body: "Các tùy chọn này thường liên quan đến cấu trúc mã nguồn và quy trình xây dựng của bạn như thế nào?",
        solution:
          "`rootDir` chỉ định thư mục gốc chứa các file nguồn (thường là nơi tất cả các file `.ts` cư trú). `outDir` chỉ định thư mục đầu ra cho các file JavaScript đã biên dịch. Chúng duy trì cấu trúc thư mục từ `rootDir` bên trong `outDir`, tổ chức đầu ra đã biên dịch một cách sạch sẽ."
      }
    }
  },
  {
    _id: "ts-m-045",
    difficulty: "middle",
    tags: ["utility_types", "required"],
    content: {
      en: {
        title: "What is the function of the **`Required<T>`** utility type?",
        body: "If `T` has optional properties, how does `Required<T>` transform those properties?",
        solution:
          "`Required<T>` constructs a type consisting of all properties of `T` set to required (not optional). It does this by iterating over the keys of `T` and removing the optional modifier (`?`). `type Required<T> = { [P in keyof T]-?: T[P] };`"
      },
      jp: {
        title: "**`Required<T>`**ユーティリティ関数の機能は何ですか？",
        body: "`T`がオプションのプロパティを持っている場合、`Required<T>`はそれらのプロパティをどのように変換しますか？",
        solution:
          "`Required<T>`は、`T`のすべてのプロパティが必須（オプションではない）に設定された型を構築します。これは、`T`のキーを反復処理し、オプション修飾子（`?`）を削除することによって行われます。 `type Required<T> = { [P in keyof T]-?: T[P] };`"
      },
      vi: {
        title: "Chức năng của kiểu tiện ích **`Required<T>`** là gì?",
        body: "Nếu `T` có các thuộc tính tùy chọn, `Required<T>` biến đổi các thuộc tính đó như thế nào?",
        solution:
          "`Required<T>` xây dựng một kiểu bao gồm tất cả các thuộc tính của `T` được đặt thành bắt buộc (không tùy chọn). Nó thực hiện điều này bằng cách lặp lại trên các khóa của `T` và loại bỏ bổ ngữ tùy chọn (`?`). `type Required<T> = { [P in keyof T]-?: T[P] };`"
      }
    }
  },
  {
    _id: "ts-m-046",
    difficulty: "middle",
    tags: ["type_guards", "equality", "discrimination"],
    content: {
      en: {
        title: "Explain **Discriminated Unions** and why they are effective for type narrowing.",
        body: "What is the requirement for a union to be considered a Discriminated Union?",
        solution:
          "A Discriminated Union is a Union Type where every member shares a common, single literal property (the discriminant/tag). Using an **equality check** (`===`) on this common property (`if (shape.kind === 'circle')`) acts as a powerful type guard, allowing TypeScript to narrow the union to the specific member type, enabling safe access to member-specific properties."
      },
      jp: {
        title: "**Discriminated Unions**を説明し、型絞り込みに効果的な理由を説明してください。",
        body: "共用体がDiscriminated Unionと見なされるための要件は何ですか？",
        solution:
          "Discriminated Unionは、すべてのメンバーが共通の単一のLiteralプロパティ（判別子/タグ）を共有する共用型です。この共通プロパティに対する**等価性チェック**（`===`）（`if (shape.kind === 'circle')`）を使用すると、強力な型ガードとして機能し、TypeScriptが共用体を特定のメンバー型に絞り込むことを可能にし、メンバー固有のプロパティへの安全なアクセスを可能にします。"
      },
      vi: {
        title: "Giải thích **Discriminated Unions** và tại sao chúng hiệu quả cho việc thu hẹp kiểu.",
        body: "Yêu cầu đối với một union để được coi là Discriminated Union là gì?",
        solution:
          "Discriminated Union là một Union Type trong đó mọi thành viên chia sẻ một thuộc tính cố định chung, duy nhất (phân biệt/thẻ). Việc sử dụng một **kiểm tra bằng** (`===`) trên thuộc tính chung này (`if (shape.kind === 'circle')`) hoạt động như một type guard mạnh mẽ, cho phép TypeScript thu hẹp union thành kiểu thành viên cụ thể, cho phép truy cập an toàn vào các thuộc tính dành riêng cho thành viên."
      }
    }
  },
  {
    _id: "ts-m-047",
    difficulty: "middle",
    tags: ["classes", "abstract", "inheritance"],
    content: {
      en: {
        title: "What is the purpose of an **`abstract`** class or method?",
        body: "Can you create an instance of an `abstract` class directly?",
        solution:
          "An `abstract` class is a base class that cannot be instantiated directly; it must be subclassed. An `abstract` method is a method signature defined in an abstract class that must be implemented (provided a body) by any non-abstract subclass. You **cannot** create an instance of an `abstract` class directly."
      },
      jp: {
        title: "**`abstract`**クラスまたはメソッドの目的は何ですか？",
        body: "`abstract`クラスのインスタンスを直接作成できますか？",
        solution:
          "`abstract`クラスは、直接インスタンス化できない基底クラスであり、サブクラス化する必要があります。`abstract`メソッドは、abstractクラスで定義されたメソッドシグネチャであり、非抽象サブクラスによって実装（本体を提供）される必要があります。`abstract`クラスのインスタンスを直接作成することは**できません**。"
      },
      vi: {
        title: "Mục đích của một lớp hoặc phương thức **`abstract`** là gì?",
        body: "Bạn có thể tạo một thể hiện của một lớp `abstract` trực tiếp không?",
        solution:
          "Một lớp `abstract` là một lớp cơ sở không thể được khởi tạo trực tiếp; nó phải được làm lớp con. Một phương thức `abstract` là một chữ ký phương thức được định nghĩa trong một lớp abstract mà phải được triển khai (cung cấp nội dung) bởi bất kỳ lớp con không abstract nào. Bạn **không thể** tạo một thể hiện của một lớp `abstract` trực tiếp."
      }
    }
  },
  {
    _id: "ts-m-048",
    difficulty: "middle",
    tags: ["utility_types", "partial", "readonly"],
    content: {
      en: {
        title: "How do you define a type that is both **`Partial`** and **`Readonly`**?",
        body: "If `T` is your base type, show the type alias that makes all properties optional and immutable.",
        solution:
          "You apply the utility types sequentially, usually nesting them. `type ImmutablePartial<T> = Readonly<Partial<T>>;` (or vice versa: `Partial<Readonly<T>>` - both yield the same result)."
      },
      jp: {
        title: "**`Partial`**と**`Readonly`**の両方である型をどのように定義しますか？",
        body: "`T`が基本型である場合、すべてのプロパティをオプションかつ不変にする型エイリアスを示してください。",
        solution:
          "ユーティリティ型を順番に適用し、通常はネストします。 `type ImmutablePartial<T> = Readonly<Partial<T>>;` （またはその逆: `Partial<Readonly<T>>` - どちらも同じ結果になります）。"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu vừa là **`Partial`** vừa là **`Readonly`**?",
        body: "Nếu `T` là kiểu cơ sở của bạn, hãy trình bày type alias làm cho tất cả các thuộc tính là tùy chọn và bất biến.",
        solution:
          "Bạn áp dụng các kiểu tiện ích tuần tự, thường là lồng chúng. `type ImmutablePartial<T> = Readonly<Partial<T>>;` (hoặc ngược lại: `Partial<Readonly<T>>` - cả hai đều cho cùng một kết quả)."
      }
    }
  },
  {
    _id: "ts-m-049",
    difficulty: "middle",
    tags: ["config", "esModuleInterop", "module"],
    content: {
      en: {
        title: "What is the role of the **`esModuleInterop: true`** compiler option?",
        body: "How does it simplify the process of importing CommonJS modules into an ES Module TypeScript project?",
        solution:
          "`esModuleInterop: true` adds helper code to generated JavaScript to enable compatibility between CommonJS and ES Modules. It allows you to use the standard ES Module import syntax (`import * as fs from 'fs'`) even for libraries that only provide a CommonJS export (like `module.exports = ...`), making imports behave more naturally."
      },
      jp: {
        title: "**`esModuleInterop: true`**コンパイラオプションの役割は何ですか？",
        body: "CommonJSモジュールをES Module TypeScriptプロジェクトにインポートするプロセスをどのように簡素化しますか？",
        solution:
          "`esModuleInterop: true`は、CommonJSとES Module間の互換性を有効にするために、生成されたJavaScriptにヘルパーコードを追加します。これにより、CommonJSエクスポートのみを提供するライブラリ（`module.exports = ...`など）に対しても、標準のES Moduleインポート構文（`import * as fs from 'fs'`）を使用できるようになり、インポートの動作がより自然になります。"
      },
      vi: {
        title: "Vai trò của tùy chọn trình biên dịch **`esModuleInterop: true`** là gì?",
        body: "Nó đơn giản hóa quá trình import các module CommonJS vào một dự án TypeScript ES Module như thế nào?",
        solution:
          "`esModuleInterop: true` thêm mã trợ giúp vào JavaScript được tạo ra để kích hoạt khả năng tương thích giữa CommonJS và ES Module. Nó cho phép bạn sử dụng cú pháp import ES Module tiêu chuẩn (`import * as fs from 'fs'`) ngay cả đối với các thư viện chỉ cung cấp export CommonJS (như `module.exports = ...`), làm cho việc import hoạt động tự nhiên hơn."
      }
    }
  },
  {
    _id: "ts-m-050",
    difficulty: "middle",
    tags: ["utility_types", "constructor_signature"],
    content: {
      en: {
        title: "How do you define a type that represents a **constructable function/class**?",
        body: "Define a type `Factory<T>` that describes a function that can be called with `new` and returns an instance of type `T`.",
        solution:
          "A construct signature uses the `new` keyword in the function signature. Example: `type Factory<T> = new (...args: any[]) => T;`"
      },
      jp: {
        title: "**構築可能な関数/クラス**を表す型をどのように定義しますか？",
        body: "`new`で呼び出すことができ、型`T`のインスタンスを返す関数を表す型`Factory<T>`を定義してください。",
        solution:
          "構築シグネチャは、関数シグネチャで`new`キーワードを使用します。例: `type Factory<T> = new (...args: any[]) => T;`"
      },
      vi: {
        title: "Làm thế nào để định nghĩa một kiểu đại diện cho một **hàm/lớp có thể xây dựng**?",
        body: "Định nghĩa một kiểu `Factory<T>` mô tả một hàm có thể được gọi bằng `new` và trả về một thể hiện kiểu `T`.",
        solution:
          "Một chữ ký xây dựng sử dụng từ khóa `new` trong chữ ký hàm. Ví dụ: `type Factory<T> = new (...args: any[]) => T;`"
      }
    }
  }
];
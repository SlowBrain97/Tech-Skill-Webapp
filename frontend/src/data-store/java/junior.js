export const javaJuniorQuestions = [
  {
    _id: "java-j-001",
    difficulty: "junior",
    tags: ["oop", "polymorphism", "runtime"],
    content: {
      en: {
        title: "Runtime Polymorphism (Dynamic Method Dispatch)",
        body: "Explain how Runtime Polymorphism is achieved in Java, focusing on Method Overriding and the use of the superclass reference pointing to a subclass object.",
        solution: "Runtime Polymorphism (Dynamic Method Dispatch) is achieved through **Method Overriding**. The JVM determines which version of an overridden method to call at runtime, based on the **actual object type** (subclass), not the reference type (superclass). This allows a superclass reference variable to hold a subclass object, and the method call is resolved dynamically."
      },
      jp: {
        title: "実行時ポリモーフィズム",
        body: "Javaで実行時ポリモーフィズムがどのように達成されるか、メソッドのオーバーライドとスーパークラス参照がサブクラスオブジェクトを指すことに焦点を当てて説明してください。",
        solution: "実行時ポリモーフィズム（動的メソッドディスパッチ）は**メソッドのオーバーライド**を通じて達成されます。JVMは、オーバーライドされたメソッドのどのバージョンを呼び出すかを、参照型（スーパークラス）ではなく、**実際のオブジェクト型**（サブクラス）に基づいて実行時に決定します。これにより、スーパークラスの参照変数がサブクラスのオブジェクトを保持し、メソッド呼び出しが動的に解決されます。"
      },
      vi: {
        title: "Đa hình Runtime (Dynamic Method Dispatch)",
        body: "Giải thích cách Đa hình Runtime (Runtime Polymorphism) được thực hiện trong Java, tập trung vào Method Overriding và việc sử dụng tham chiếu của superclass trỏ đến đối tượng của subclass.",
        solution: "Đa hình Runtime (Dynamic Method Dispatch) được đạt được thông qua **Method Overriding**. JVM xác định phiên bản nào của phương thức bị ghi đè sẽ được gọi tại thời điểm chạy, dựa trên **kiểu đối tượng thực tế** (subclass), chứ không phải kiểu tham chiếu (superclass). Điều này cho phép biến tham chiếu của superclass giữ một đối tượng subclass, và lời gọi phương thức được giải quyết động."
      }
    }
  },
  {
    _id: "java-j-002",
    difficulty: "junior",
    tags: ["collections", "list", "arraylist"],
    content: {
      en: {
        title: "ArrayList vs LinkedList",
        body: "What is the key difference in internal structure between `ArrayList` and `LinkedList`, and how does this affect performance for element access and insertion/deletion?",
        solution: "**`ArrayList`** uses a dynamically resizable **Array** internally. It provides fast **random access** (O(1)) but slow **insertion/deletion** in the middle (O(n)). **`LinkedList`** uses a **Doubly Linked List** structure. It provides fast **insertion/deletion** (O(1)) but slow **random access** (O(n)) as it must traverse the list."
      },
      jp: {
        title: "ArrayList vs LinkedList",
        body: "`ArrayList`と`LinkedList`の内部構造の主な違いは何ですか、またそれは要素へのアクセスと挿入/削除のパフォーマンスにどのように影響しますか？",
        solution: "**`ArrayList`**は内部的に動的にサイズ変更可能な**配列**を使用します。これは高速な**ランダムアクセス**（O(1)）を提供しますが、中間での**挿入/削除**は遅い（O(n)）です。**`LinkedList`**は**双方向連結リスト**構造を使用します。これは高速な**挿入/削除**（O(1)）を提供しますが、リストをたどる必要があるため**ランダムアクセス**は遅い（O(n)）です。"
      },
      vi: {
        title: "ArrayList và LinkedList",
        body: "Sự khác biệt chính về cấu trúc nội bộ giữa `ArrayList` và `LinkedList` là gì, và điều này ảnh hưởng như thế nào đến hiệu suất khi truy cập và chèn/xóa phần tử?",
        solution: "**`ArrayList`** sử dụng **Mảng** có thể thay đổi kích thước động bên trong. Nó cung cấp **truy cập ngẫu nhiên** nhanh (O(1)) nhưng **chèn/xóa** ở giữa chậm (O(n)). **`LinkedList`** sử dụng cấu trúc **Danh sách liên kết đôi** (Doubly Linked List). Nó cung cấp **chèn/xóa** nhanh (O(1)) nhưng **truy cập ngẫu nhiên** chậm (O(n)) vì nó phải duyệt qua danh sách."
      }
    }
  },
  {
    _id: "java-j-003",
    difficulty: "junior",
    tags: ["exception", "try-catch-finally"],
    content: {
      en: {
        title: "The `finally` block execution",
        body: "Under what circumstances will the `finally` block NOT execute in a `try-catch-finally` structure?",
        solution: "The `finally` block is **always executed**, even if an exception occurs or the `try` block is exited by a `return`, `break`, or `continue`. It will **NOT** execute only under extremely rare circumstances, such as: 1. The JVM crashes or the machine shuts down. 2. The program calls `System.exit()`. 3. The thread executing the `try`/`catch` block is killed."
      },
      jp: {
        title: "`finally`ブロックの実行",
        body: "どのような状況下で、`try-catch-finally`構造の`finally`ブロックは実行されませんか？",
        solution: "`finally`ブロックは、例外が発生したり、`try`ブロックが`return`、`break`、または`continue`で終了したりしても、**常に実行されます**。実行**されない**のは、以下のような非常にまれな状況のみです: 1. JVMがクラッシュするか、マシンがシャットダウンする。 2. プログラムが`System.exit()`を呼び出す。 3. `try`/`catch`ブロックを実行しているスレッドが強制終了される。"
      },
      vi: {
        title: "Thực thi khối `finally`",
        body: "Trong trường hợp nào khối `finally` trong cấu trúc `try-catch-finally` SẼ KHÔNG được thực thi?",
        solution: "Khối `finally` **luôn luôn được thực thi**, ngay cả khi một ngoại lệ xảy ra hoặc khối `try` bị thoát bởi `return`, `break`, hoặc `continue`. Nó **SẼ KHÔNG** được thực thi chỉ trong các trường hợp cực kỳ hiếm, chẳng hạn như: 1. JVM bị lỗi (crash) hoặc máy bị tắt. 2. Chương trình gọi `System.exit()`. 3. Luồng (thread) đang thực thi khối `try`/`catch` bị hủy."
      }
    }
  },
  {
    _id: "java-j-004",
    difficulty: "junior",
    tags: ["keyword", "this", "constructor"],
    content: {
      en: {
        title: "Constructor chaining using `this()`",
        body: "How can the `this()` keyword be used within a class's constructor, and what is the rule regarding its placement?",
        solution: "The `this()` keyword is used to **call another constructor in the same class** (Constructor Chaining). The rule is that the call to `this()` must be the **very first statement** in the constructor where it is used. It is primarily used to avoid code duplication in constructors."
      },
      jp: {
        title: "`this()`を使用したコンストラクターチェーン",
        body: "`this()`キーワードはクラスのコンストラクター内でどのように使用できますか、またその配置に関するルールは何ですか？",
        solution: "`this()`キーワードは、**同じクラス内の別のコンストラクターを呼び出す**ために使用されます（コンストラクターチェーン）。ルールは、`this()`への呼び出しが、それが使用されるコンストラクター内の**最初のステートメント**でなければならないということです。主にコンストラクターでのコードの重複を避けるために使用されます。"
      },
      vi: {
        title: "Constructor chaining bằng `this()`",
        body: "Từ khóa `this()` có thể được sử dụng trong constructor của một class như thế nào, và quy tắc về vị trí của nó là gì?",
        solution: "Từ khóa `this()` được sử dụng để **gọi một constructor khác trong cùng class** (Constructor Chaining). Quy tắc là lời gọi `this()` phải là **câu lệnh đầu tiên** trong constructor nơi nó được sử dụng. Nó chủ yếu được dùng để tránh trùng lặp code trong các constructor."
      }
    }
  },
  {
    _id: "java-j-005",
    difficulty: "junior",
    tags: ["design", "immutable"],
    content: {
      en: {
        title: "Creating Immutable Class",
        body: "List the necessary steps to create a truly immutable class in Java (besides `String`).",
        solution: "1. Declare the class as **`final`** (to prevent subclassing). 2. Make all fields **`private`** and **`final`**. 3. Don't provide **setter** methods. 4. If fields are mutable objects, perform **deep cloning** in the getter methods and the constructor to prevent external modification."
      },
      jp: {
        title: "不変クラスの作成",
        body: "Javaで真に不変なクラスを作成するために必要な手順（`String`以外）をリストアップしてください。",
        solution: "1. クラスを**`final`**として宣言する（サブクラス化を防ぐ）。 2. すべてのフィールドを**`private`**かつ**`final`**にする。 3. **setter**メソッドを提供しない。 4. フィールドが可変オブジェクトである場合、外部からの変更を防ぐために、getterメソッドとコンストラクターで**ディープクローン**を実行する。"
      },
      vi: {
        title: "Tạo Immutable Class",
        body: "Liệt kê các bước cần thiết để tạo một class bất biến (immutable) thực sự trong Java (ngoài `String`).",
        solution: "1. Khai báo class là **`final`** (để ngăn chặn việc kế thừa). 2. Đặt tất cả các trường (field) là **`private`** và **`final`**. 3. Không cung cấp các phương thức **setter**. 4. Nếu các trường là đối tượng có thể thay đổi (mutable), hãy thực hiện **deep cloning** trong các phương thức getter và constructor để ngăn chặn sự sửa đổi từ bên ngoài."
      }
    }
  },
  {
    _id: "java-j-006",
    difficulty: "junior",
    tags: ["keyword", "static", "block"],
    content: {
      en: {
        title: "Static Block usage",
        body: "What is a static initialization block in Java, and when does the code inside it execute?",
        solution: "A static block is a block of statements inside a class, preceded by the `static` keyword. Its main purpose is to **initialize static variables**. The code inside the static block executes **only once**, the very first time the class is loaded into the memory by the JVM."
      },
      jp: {
        title: "静的ブロックの使用",
        body: "Javaの静的初期化ブロックとは何ですか、またその中のコードはいつ実行されますか？",
        solution: "静的ブロックは、`static`キーワードが前置されたクラス内のステートメントのブロックです。その主な目的は、**静的変数を初期化する**ことです。静的ブロック内のコードは、JVMによってクラスがメモリにロードされる**最初の1回だけ**実行されます。"
      },
      vi: {
        title: "Sử dụng Static Block",
        body: "Static initialization block trong Java là gì, và code bên trong nó được thực thi khi nào?",
        solution: "Static block là một khối câu lệnh bên trong một class, đứng trước bởi từ khóa `static`. Mục đích chính của nó là **khởi tạo các biến static**. Code bên trong static block chỉ được thực thi **một lần duy nhất**, ngay khi class được JVM tải vào bộ nhớ lần đầu tiên."
      }
    }
  },
  {
    _id: "java-j-007",
    difficulty: "junior",
    tags: ["collections", "hashmap", "equals", "hashcode"],
    content: {
      en: {
        title: "Contract for `equals()` and `hashCode()`",
        body: "When using a custom object as a key in a `HashMap`, what is the necessary contract that must be followed regarding the `equals()` and `hashCode()` methods?",
        solution: "The contract states: **If two objects are equal according to the `equals(Object)` method, then calling the `hashCode` method on each of the two objects must produce the same integer result.** Failing to adhere to this contract will result in inconsistent and incorrect retrieval of objects from Hash-based collections."
      },
      jp: {
        title: "`equals()`と`hashCode()`の契約",
        body: "カスタムオブジェクトを`HashMap`のキーとして使用する場合、`equals()`メソッドと`hashCode()`メソッドに関して従うべき必要な契約は何ですか？",
        solution: "契約は次のとおりです: **`equals(Object)`メソッドに従って2つのオブジェクトが等しい場合、両方のオブジェクトで`hashCode`メソッドを呼び出すと、同じ整数結果が生成されなければなりません。**この契約に従わないと、Hashベースのコレクションからのオブジェクトの取得が矛盾し、不正になります。"
      },
      vi: {
        title: "Hợp đồng `equals()` và `hashCode()`",
        body: "Khi sử dụng một đối tượng tùy chỉnh làm khóa trong `HashMap`, hợp đồng cần thiết nào phải được tuân theo liên quan đến các phương thức `equals()` và `hashCode()`?",
        solution: "Hợp đồng nêu rõ: **Nếu hai đối tượng bằng nhau theo phương thức `equals(Object)`, thì việc gọi phương thức `hashCode` trên mỗi đối tượng phải tạo ra cùng một kết quả số nguyên.** Việc không tuân thủ hợp đồng này sẽ dẫn đến việc truy xuất đối tượng từ các collection dựa trên Hash bị mâu thuẫn và không chính xác."
      }
    }
  },
  {
    _id: "java-j-008",
    difficulty: "junior",
    tags: ["threading", "runnable", "thread"],
    content: {
      en: {
        title: "Creating a Thread (Two Ways)",
        body: "What are the two primary ways to create a Thread in Java?",
        solution: "1. **Implementing the `Runnable` interface** (preferred method, as the class can still extend another class). 2. **Extending the `Thread` class**."
      },
      jp: {
        title: "スレッドの作成（2つの方法）",
        body: "Javaでスレッドを作成する主な2つの方法は何ですか？",
        solution: "1. **`Runnable`インターフェースを実装する**（推奨される方法、クラスが他のクラスを継承できるため）。 2. **`Thread`クラスを拡張する**。"
      },
      vi: {
        title: "Tạo Thread (Hai cách)",
        body: "Hai cách chính để tạo một Thread (luồng) trong Java là gì?",
        solution: "1. **Implement interface `Runnable`** (phương pháp được ưu tiên, vì class vẫn có thể kế thừa một class khác). 2. **Kế thừa (Extend) class `Thread`**."
      }
    }
  },
  {
    _id: "java-j-009",
    difficulty: "junior",
    tags: ["io", "serializable"],
    content: {
      en: {
        title: "`Serializable` interface",
        body: "What is the purpose of the `Serializable` interface in Java? Does it have any methods to implement?",
        solution: "The `Serializable` interface is a **marker interface** used to indicate that an instance of a class can be **serialized** (converted into a byte stream for storage or transmission). It **does not have any methods** to implement; its sole purpose is to mark the class."
      },
      jp: {
        title: "`Serializable`インターフェース",
        body: "Javaにおける`Serializable`インターフェースの目的は何ですか？実装すべきメソッドはありますか？",
        solution: "`Serializable`インターフェースは、クラスのインスタンスが**シリアル化**（ストレージまたは送信用のバイトストリームに変換）できることを示すために使用される**マーカーインターフェース**です。実装すべき**メソッドはありません**。その唯一の目的はクラスをマークすることです。"
      },
      vi: {
        title: "Interface `Serializable`",
        body: "Mục đích của interface `Serializable` trong Java là gì? Nó có phương thức nào cần phải implement không?",
        solution: "Interface `Serializable` là một **marker interface** (interface đánh dấu) được sử dụng để chỉ ra rằng một thể hiện của class có thể được **tuần tự hóa (serialized)** (chuyển đổi thành một luồng byte để lưu trữ hoặc truyền đi). Nó **không có bất kỳ phương thức nào** để implement; mục đích duy nhất của nó là đánh dấu class."
      }
    }
  },
  {
    _id: "java-j-010",
    difficulty: "junior",
    tags: ["string", "stringbuilder", "stringbuffer"],
    content: {
      en: {
        title: "StringBuilder vs StringBuffer",
        body: "What is the key difference between `StringBuilder` and `StringBuffer` (in terms of thread safety/synchronization)? When should you choose one over the other?",
        solution: "**`StringBuffer`** is **thread-safe** (synchronized), meaning only one thread can access the methods at a time, making it suitable for multi-threaded environments but slower. **`StringBuilder`** is **not thread-safe** (unsynchronized), making it faster and suitable for single-threaded environments."
      },
      jp: {
        title: "StringBuilder vs StringBuffer",
        body: "`StringBuilder`と`StringBuffer`の主な違いは何ですか（スレッドセーフ/同期に関して）？どちらをいつ選択すべきですか？",
        solution: "**`StringBuffer`**は**スレッドセーフ**（同期されている）であり、一度に1つのスレッドのみがメソッドにアクセスできるため、マルチスレッド環境に適していますが、低速です。**`StringBuilder`**は**スレッドセーフではない**（非同期）ため、高速であり、シングルスレッド環境に適しています。"
      },
      vi: {
        title: "StringBuilder và StringBuffer",
        body: "Sự khác biệt chính giữa `StringBuilder` và `StringBuffer` là gì (về tính an toàn luồng/đồng bộ hóa)? Khi nào bạn nên chọn cái này thay vì cái kia?",
        solution: "**`StringBuffer`** là **thread-safe** (được đồng bộ hóa), nghĩa là chỉ một luồng có thể truy cập các phương thức tại một thời điểm, làm cho nó phù hợp với môi trường đa luồng nhưng chậm hơn. **`StringBuilder`** **không phải là thread-safe** (không đồng bộ hóa), làm cho nó nhanh hơn và phù hợp với môi trường đơn luồng."
      }
    }
  },
  {
    _id: "java-j-011",
    difficulty: "junior",
    tags: ["collections", "map", "hashmap"],
    content: {
      en: {
        title: "`Map` vs `List` vs `Set`",
        body: "How does the `Map` interface conceptually differ from the `List` and `Set` interfaces in the Collections Framework?",
        solution: "`List` and `Set` are implementations of the `Collection` interface, storing single elements. A **`Map`** is not a true collection; it stores elements as **key-value pairs**. Each key must be unique (like a Set), and each key is mapped to one value. `List` stores ordered, non-unique elements. `Set` stores unordered, unique elements."
      },
      jp: {
        title: "`Map` vs `List` vs `Set`",
        body: "Collections Frameworkにおいて、`Map`インターフェースは`List`インターフェースおよび`Set`インターフェースと概念的にどのように異なりますか？",
        solution: "`List`と`Set`は`Collection`インターフェースの実装であり、単一の要素を格納します。**`Map`**は真のコレクションではなく、要素を**キーと値のペア**として格納します。各キーは一意である必要があり（Setのように）、各キーは1つの値にマッピングされます。`List`は順序付けられた非一意の要素を格納し、`Set`は順序付けられていない一意の要素を格納します。"
      },
      vi: {
        title: "`Map`, `List` và `Set`",
        body: "Interface `Map` khác biệt về mặt khái niệm như thế nào so với các interface `List` và `Set` trong Collections Framework?",
        solution: "`List` và `Set` là các triển khai của interface `Collection`, lưu trữ các phần tử đơn lẻ. **`Map`** không phải là một collection thực sự; nó lưu trữ các phần tử dưới dạng **cặp khóa-giá trị (key-value pairs)**. Mỗi khóa phải là duy nhất (giống như Set), và mỗi khóa được ánh xạ tới một giá trị. `List` lưu trữ các phần tử có thứ tự, không duy nhất. `Set` lưu trữ các phần tử không có thứ tự, duy nhất."
      }
    }
  },
  {
    _id: "java-j-012",
    difficulty: "junior",
    tags: ["keyword", "abstract", "interface"],
    content: {
      en: {
        title: "Abstract Class vs Interface (Methods)",
        body: "Regarding methods, what is the main functional difference between an `abstract` class and an `interface` (in modern Java, post-Java 8)?",
        solution: "An **`interface`** can contain **only abstract methods** (by default, though it can now include `default` and `static` methods with implementation). An **`abstract` class** can contain **both abstract methods** (must be implemented by subclasses) **and concrete methods** (with implementation), providing a partial implementation."
      },
      jp: {
        title: "抽象クラス vs インターフェース（メソッド）",
        body: "メソッドに関して、抽象クラスとインターフェース（最新のJava、Java 8以降）の主な機能的な違いは何ですか？",
        solution: "**`interface`**は**抽象メソッドのみ**を含めることができます（デフォルトでは、実装を持つ`default`および`static`メソッドを含めることもできます）。**`abstract`クラス**は、**抽象メソッド**（サブクラスで実装する必要がある）と**具象メソッド**（実装を持つ）の**両方**を含めることができ、部分的な実装を提供します。"
      },
      vi: {
        title: "Abstract Class và Interface (Phương thức)",
        body: "Liên quan đến các phương thức, sự khác biệt chức năng chính giữa `abstract` class và `interface` là gì (trong Java hiện đại, sau Java 8)?",
        solution: "Một **`interface`** chỉ có thể chứa **các phương thức trừu tượng** (mặc dù giờ đây nó có thể bao gồm các phương thức `default` và `static` có phần thân). Một **`abstract` class** có thể chứa **cả hai loại phương thức trừu tượng** (phải được class con implement) **và các phương thức cụ thể** (có phần thân), cung cấp một triển khai một phần."
      }
    }
  },
  {
    _id: "java-j-013",
    difficulty: "junior",
    tags: ["exception", "throws", "throw"],
    content: {
      en: {
        title: "`throws` vs `throw`",
        body: "Explain the difference between the `throws` keyword and the `throw` keyword in Java exception handling.",
        solution: "**`throws`** is used in the **method signature** to declare the exceptions that the method *might* throw (Checked Exceptions must be declared). **`throw`** is used **inside the method body** to explicitly *throw* an exception instance (either checked or unchecked)."
      },
      jp: {
        title: "`throws` vs `throw`",
        body: "Javaの例外処理における`throws`キーワードと`throw`キーワードの違いを説明してください。",
        solution: "**`throws`**は、メソッドがスローする*可能性のある*例外を宣言するために**メソッドのシグネチャ**で使用されます（Checked Exceptionは宣言が必須）。**`throw`**は、例外インスタンスを明示的に*スローする*ために**メソッドの本体内**で使用されます（CheckedまたはUncheckedのどちらでも）。"
      },
      vi: {
        title: "`throws` và `throw`",
        body: "Giải thích sự khác biệt giữa từ khóa `throws` và từ khóa `throw` trong xử lý ngoại lệ của Java.",
        solution: "**`throws`** được sử dụng trong **chữ ký phương thức** để khai báo các ngoại lệ mà phương thức đó *có thể* ném ra (Checked Exception phải được khai báo). **`throw`** được sử dụng **bên trong phần thân phương thức** để *ném* ra một thể hiện ngoại lệ (exception instance) một cách rõ ràng (cả checked và unchecked)."
      }
    }
  },
  {
    _id: "java-j-014",
    difficulty: "junior",
    tags: ["access-modifier", "protected"],
    content: {
      en: {
        title: "`protected` access",
        body: "Describe the scope of access for a member declared with the `protected` access modifier.",
        solution: "A `protected` member is accessible: 1. **Within the same class.** 2. **Within all classes in the same package.** 3. **Within subclasses** (even if the subclass is in a different package)."
      },
      jp: {
        title: "`protected`アクセス",
        body: "`protected`アクセス修飾子で宣言されたメンバーのアクセスのスコープを説明してください。",
        solution: "`protected`メンバーは以下からアクセス可能です: 1. **同じクラス内**。 2. **同じパッケージ内のすべてのクラス内**。 3. **サブクラス内**（サブクラスが別のパッケージにある場合でも）。"
      },
      vi: {
        title: "Phạm vi truy cập `protected`",
        body: "Mô tả phạm vi truy cập cho một thành viên được khai báo bằng `protected` access modifier.",
        solution: "Một thành viên `protected` có thể truy cập được: 1. **Bên trong cùng class.** 2. **Bên trong tất cả các class trong cùng package.** 3. **Bên trong các class con** (ngay cả khi class con nằm trong một package khác)."
      }
    }
  },
  {
    _id: "java-j-015",
    difficulty: "junior",
    tags: ["design", "dependency-injection"],
    content: {
      en: {
        title: "Inversion of Control (IoC)",
        body: "What is Inversion of Control (IoC) and how does it relate to Dependency Injection (DI)?",
        solution: "**IoC** is a design principle where the flow of control is inverted; instead of the user code calling library code, the framework/system calls back into the user code. **DI** is a specific design pattern used to implement IoC, where the dependencies of a component are injected (supplied) externally rather than being created by the component itself."
      },
      jp: {
        title: "制御の反転 (IoC)",
        body: "制御の反転（IoC）とは何ですか、また依存性注入（DI）とどのように関連していますか？",
        solution: "**IoC**は、制御の流れが反転する設計原則です。ユーザーコードがライブラリコードを呼び出す代わりに、フレームワーク/システムがユーザーコードを呼び戻します。**DI**はIoCを実装するために使用される特定の設計パターンであり、コンポーネントの依存関係が、コンポーネント自体によって作成されるのではなく、外部から注入（提供）されます。"
      },
      vi: {
        title: "Inversion of Control (IoC)",
        body: "Inversion of Control (IoC) là gì và nó liên quan đến Dependency Injection (DI) như thế nào?",
        solution: "**IoC** là một nguyên tắc thiết kế, trong đó luồng điều khiển bị đảo ngược; thay vì mã người dùng gọi mã thư viện, framework/hệ thống gọi lại mã người dùng. **DI** là một design pattern cụ thể được sử dụng để implement IoC, trong đó các dependency của một component được injection (cung cấp) từ bên ngoài thay vì được component tự tạo ra."
      }
    }
  },
  {
    _id: "java-j-016",
    difficulty: "junior",
    tags: ["generic", "collections"],
    content: {
      en: {
        title: "Generics purpose",
        body: "What is the main purpose of using Generics in Java, particularly with collections?",
        solution: "The main purpose of Generics is to provide **Type Safety** at compile time and eliminate the need for **type casting** at runtime. When used with collections (like `List<String>`), it ensures that the collection can only hold objects of the specified type, preventing `ClassCastException` errors."
      },
      jp: {
        title: "ジェネリクスの目的",
        body: "Javaで、特にコレクションでジェネリクスを使用する主な目的は何ですか？",
        solution: "ジェネリクスの主な目的は、コンパイル時に**型安全性**を提供し、実行時の**型キャスト**の必要性を排除することです。コレクション（`List<String>`など）で使用すると、コレクションが指定された型のオブジェクトのみを保持することを保証し、`ClassCastException`エラーを防ぎます。"
      },
      vi: {
        title: "Mục đích của Generics",
        body: "Mục đích chính của việc sử dụng Generics trong Java là gì, đặc biệt là với collections?",
        solution: "Mục đích chính của Generics là cung cấp **Tính an toàn kiểu (Type Safety)** tại thời điểm biên dịch và loại bỏ nhu cầu **ép kiểu (type casting)** tại thời điểm chạy. Khi được sử dụng với các collection (như `List<String>`), nó đảm bảo rằng collection chỉ có thể chứa các đối tượng của kiểu được chỉ định, ngăn chặn lỗi `ClassCastException`."
      }
    }
  },
  {
    _id: "java-j-017",
    difficulty: "junior",
    tags: ["threading", "synchronization", "deadlock"],
    content: {
      en: {
        title: "Deadlock definition",
        body: "In the context of multi-threading and synchronization, what is a Deadlock?",
        solution: "A Deadlock is a situation where **two or more threads are blocked forever, waiting for each other to release a resource** (lock). For example, Thread A holds Lock X and waits for Lock Y, while Thread B holds Lock Y and waits for Lock X."
      },
      jp: {
        title: "デッドロックの定義",
        body: "マルチスレッドと同期の文脈において、デッドロックとは何ですか？",
        solution: "デッドロックとは、**2つ以上のスレッドが互いにリソース（ロック）を解放するのを待って、永遠にブロックされる**状況です。たとえば、スレッドAがロックXを保持し、ロックYを待機し、スレッドBがロックYを保持し、ロックXを待機している状況です。"
      },
      vi: {
        title: "Định nghĩa Deadlock",
        body: "Trong bối cảnh đa luồng (multi-threading) và đồng bộ hóa (synchronization), Deadlock (tắc nghẽn) là gì?",
        solution: "Deadlock là một tình huống trong đó **hai hoặc nhiều luồng bị chặn vĩnh viễn, chờ đợi nhau giải phóng một tài nguyên** (lock). Ví dụ, Luồng A giữ Lock X và chờ Lock Y, trong khi Luồng B giữ Lock Y và chờ Lock X."
      }
    }
  },
  {
    _id: "java-j-018",
    difficulty: "junior",
    tags: ["keyword", "volatile"],
    content: {
      en: {
        title: "`volatile` keyword",
        body: "What is the purpose of the `volatile` keyword, and how does it differ from the `final` keyword?",
        solution: "The `volatile` keyword is used to indicate that a variable's value should be **read from main memory** (not CPU cache) every time, and any write should be flushed immediately to main memory. It ensures visibility across threads. **`final`** makes the variable a constant; **`volatile`** ensures memory visibility among threads."
      },
      jp: {
        title: "`volatile`キーワード",
        body: "`volatile`キーワードの目的は何ですか、また`final`キーワードとどのように異なりますか？",
        solution: "`volatile`キーワードは、変数の値が毎回**メインメモリから読み込まれる**べきであること（CPUキャッシュからではない）、および書き込みがすぐにメインメモリにフラッシュされるべきであることを示すために使用されます。これにより、スレッド間での可視性が保証されます。**`final`**は変数を定数にしますが、**`volatile`**はスレッド間でのメモリの可視性を保証します。"
      },
      vi: {
        title: "Từ khóa `volatile`",
        body: "Mục đích của từ khóa `volatile` là gì, và nó khác với từ khóa `final` như thế nào?",
        solution: "Từ khóa `volatile` được sử dụng để chỉ ra rằng giá trị của một biến nên được **đọc từ bộ nhớ chính** (main memory, không phải bộ nhớ cache của CPU) mỗi lần, và bất kỳ thao tác ghi nào cũng nên được đẩy ngay lập tức vào bộ nhớ chính. Nó đảm bảo tính hiển thị (visibility) giữa các luồng. **`final`** làm cho biến thành hằng số; **`volatile`** đảm bảo tính hiển thị bộ nhớ giữa các luồng."
      }
    }
  },
  {
    _id: "java-j-019",
    difficulty: "junior",
    tags: ["garbage-collection", "finalize"],
    content: {
      en: {
        title: "Garbage Collection and `finalize()`",
        body: "What is the `finalize()` method, and why is it generally discouraged to rely on it for resource cleanup?",
        solution: "The `finalize()` method is called by the Garbage Collector (GC) just **before an object is completely destroyed** to perform cleanup operations. It is discouraged because: 1. There is **no guarantee** when or if `finalize()` will be executed. 2. It can be a performance hit. 3. Exceptions thrown in `finalize()` can be ignored. Resource cleanup should be done using **`try-with-resources`** or `finally` blocks."
      },
      jp: {
        title: "ガベージコレクションと`finalize()`",
        body: "`finalize()`メソッドとは何ですか、またリソースのクリーンアップのためにそれに依存することが一般的に推奨されないのはなぜですか？",
        solution: "`finalize()`メソッドは、クリーンアップ操作を実行するために、オブジェクトが完全に破棄される**直前に**ガベージコレクター（GC）によって呼び出されます。推奨されない理由は次のとおりです: 1. `finalize()`がいつ実行されるか、または実行されるかどうかに**保証がない**。 2. パフォーマンスに影響を与える可能性がある。 3. `finalize()`でスローされた例外が無視される可能性がある。リソースのクリーンアップは**`try-with-resources`**または`finally`ブロックを使用して行うべきです。"
      },
      vi: {
        title: "Garbage Collection và `finalize()`",
        body: "Phương thức `finalize()` là gì, và tại sao thường không nên dựa vào nó để dọn dẹp tài nguyên (resource cleanup)?",
        solution: "Phương thức `finalize()` được Garbage Collector (GC) gọi **ngay trước khi một đối tượng bị hủy hoàn toàn** để thực hiện các thao tác dọn dẹp. Nó không được khuyến khích vì: 1. **Không có gì đảm bảo** về thời điểm hoặc liệu `finalize()` có được thực thi hay không. 2. Nó có thể ảnh hưởng đến hiệu suất. 3. Các ngoại lệ được ném ra trong `finalize()` có thể bị bỏ qua. Việc dọn dẹp tài nguyên nên được thực hiện bằng cách sử dụng **`try-with-resources`** hoặc khối `finally`."
      }
    }
  },
  {
    _id: "java-j-020",
    difficulty: "junior",
    tags: ["design", "singleton"],
    content: {
      en: {
        title: "Singleton Pattern",
        body: "Describe the purpose of the Singleton design pattern and list two essential steps to implement it.",
        solution: "The **Singleton** pattern ensures that a class has **only one instance** and provides a global point of access to that instance. Two essential steps: 1. Make the **constructor `private`** (to restrict instantiation from outside the class). 2. Provide a **`public static` method** that returns the single instance of the class."
      },
      jp: {
        title: "シングルトンパターン",
        body: "シングルトンデザインパターンの目的を説明し、それを実装するための2つの必須の手順をリストアップしてください。",
        solution: "**シングルトン**パターンは、クラスが**ただ1つのインスタンス**しか持たないことを保証し、そのインスタンスへのグローバルなアクセスポイントを提供します。2つの必須の手順: 1. **コンストラクターを`private`にする**（クラス外からのインスタンス化を制限する）。 2. クラスの単一のインスタンスを返す**`public static`メソッド**を提供する。"
      },
      vi: {
        title: "Singleton Pattern",
        body: "Mô tả mục đích của Singleton design pattern và liệt kê hai bước thiết yếu để triển khai nó.",
        solution: "Mẫu **Singleton** đảm bảo rằng một class chỉ có **một thể hiện duy nhất** và cung cấp một điểm truy cập toàn cục đến thể hiện đó. Hai bước thiết yếu: 1. Đặt **constructor là `private`** (để hạn chế khởi tạo từ bên ngoài class). 2. Cung cấp một **phương thức `public static`** trả về thể hiện duy nhất của class."
      }
    }
  },
  {
    _id: "java-j-021",
    difficulty: "junior",
    tags: ["collections", "hashmap"],
    content: {
      en: {
        title: "Internal workings of `HashMap`",
        body: "Briefly describe the underlying data structure of a `HashMap` and how it determines where to store a key-value pair.",
        solution: "A `HashMap` uses an **array of buckets (or bins)**, where each bucket holds a **linked list** (or a **balanced tree**, in recent Java versions, for large buckets). The location of a key-value pair is determined by the key's **`hashCode()`** method, which is then used to calculate the array index (bucket)."
      },
      jp: {
        title: "`HashMap`の内部動作",
        body: "`HashMap`の基になるデータ構造を簡単に説明し、キーと値のペアをどこに格納するかをどのように決定するかを説明してください。",
        solution: "`HashMap`は、各バケットが**連結リスト**（または大規模なバケットの場合は最新のJavaバージョンでは**バランスの取れたツリー**）を保持する**バケット（またはビン）の配列**を使用します。キーと値のペアの場所は、キーの**`hashCode()`**メソッドによって決定され、それが配列のインデックス（バケット）を計算するために使用されます。"
      },
      vi: {
        title: "Cơ chế hoạt động bên trong của `HashMap`",
        body: "Mô tả ngắn gọn cấu trúc dữ liệu cơ bản của `HashMap` và cách nó xác định nơi lưu trữ một cặp khóa-giá trị.",
        solution: "Một `HashMap` sử dụng một **mảng các thùng chứa (buckets or bins)**, trong đó mỗi thùng chứa giữ một **danh sách liên kết (linked list)** (hoặc **cây cân bằng (balanced tree)**, trong các phiên bản Java gần đây, đối với các thùng chứa lớn). Vị trí của một cặp khóa-giá trị được xác định bởi phương thức **`hashCode()`** của khóa, sau đó được sử dụng để tính toán chỉ mục mảng (thùng chứa)."
      }
    }
  },
  {
    _id: "java-j-022",
    difficulty: "junior",
    tags: ["oop", "coupling", "cohesion"],
    content: {
      en: {
        title: "Coupling and Cohesion goal",
        body: "In software design, what is the desired relationship regarding Coupling and Cohesion?",
        solution: "The goal is to achieve **Low Coupling** and **High Cohesion**. **Low Coupling** means modules are relatively independent. **High Cohesion** means elements within a module work together closely to achieve a single, well-defined purpose."
      },
      jp: {
        title: "結合度と凝集度の目標",
        body: "ソフトウェア設計において、結合度（Coupling）と凝集度（Cohesion）に関して望ましい関係は何ですか？",
        solution: "目標は**低い結合度（Low Coupling）**と**高い凝集度（High Cohesion）**を達成することです。**低い結合度**とは、モジュールが比較的独立していることを意味します。**高い凝集度**とは、モジュール内の要素が単一の明確に定義された目的を達成するために密接に連携することを意味します。"
      },
      vi: {
        title: "Mục tiêu Coupling và Cohesion",
        body: "Trong thiết kế phần mềm, mối quan hệ mong muốn đối với Coupling (Liên kết) và Cohesion (Gắn kết) là gì?",
        solution: "Mục tiêu là đạt được **Low Coupling (Liên kết thấp)** và **High Cohesion (Gắn kết cao)**. **Low Coupling** có nghĩa là các module tương đối độc lập. **High Cohesion** có nghĩa là các phần tử bên trong một module hoạt động chặt chẽ với nhau để đạt được một mục đích duy nhất, được xác định rõ ràng."
      }
    }
  },
  {
    _id: "java-j-023",
    difficulty: "junior",
    tags: ["wrapper", "autoboxing", "performance"],
    content: {
      en: {
        title: "Autoboxing Performance Pitfall",
        body: "Explain why excessive use of Autoboxing (especially in loops) can lead to significant performance issues and memory waste.",
        solution: "Autoboxing involves converting a primitive value into its corresponding wrapper object (e.g., `int` to `Integer`). This conversion creates a **new object** on the heap for every operation. In a loop, this leads to the creation of **thousands of unnecessary objects**, consuming heap memory rapidly and putting pressure on the Garbage Collector, severely degrading performance."
      },
      jp: {
        title: "オートボクシングのパフォーマンスの落とし穴",
        body: "オートボクシングの過度の使用（特にループ内）が、重大なパフォーマンスの問題とメモリの浪費につながる可能性がある理由を説明してください。",
        solution: "オートボクシングには、プリミティブ値を対応するラッパーオブジェクトに変換する（例：`int`から`Integer`へ）ことが含まれます。この変換は、操作ごとにヒープ上に**新しいオブジェクト**を作成します。ループ内では、これにより**数千の不要なオブジェクト**が作成され、ヒープメモリを急速に消費し、ガベージコレクターに負担をかけ、パフォーマンスを著しく低下させます。"
      },
      vi: {
        title: "Cạm bẫy hiệu suất của Autoboxing",
        body: "Giải thích tại sao việc sử dụng quá mức Autoboxing (đặc biệt trong các vòng lặp) có thể dẫn đến các vấn đề hiệu suất đáng kể và lãng phí bộ nhớ.",
        solution: "Autoboxing liên quan đến việc chuyển đổi một giá trị primitive thành đối tượng wrapper tương ứng (ví dụ: `int` sang `Integer`). Sự chuyển đổi này tạo ra một **đối tượng mới** trên heap cho mỗi thao tác. Trong một vòng lặp, điều này dẫn đến việc tạo ra **hàng ngàn đối tượng không cần thiết**, tiêu thụ bộ nhớ heap nhanh chóng và tạo áp lực lên Garbage Collector, làm giảm hiệu suất nghiêm trọng."
      }
    }
  },
  {
    _id: "java-j-024",
    difficulty: "junior",
    tags: ["collections", "iterator", "fail-fast"],
    content: {
      en: {
        title: "Fail-Fast Iterators",
        body: "What does it mean for a Java Collection Iterator to be 'Fail-Fast,' and what exception is thrown when this condition is met?",
        solution: "A **Fail-Fast** iterator throws a **`ConcurrentModificationException`** immediately upon detecting that the underlying collection has been **structurally modified** (elements added, removed, or size changed) after the iterator was created, by any means other than the iterator's own `remove()` method. They are primarily used to ensure data consistency in single-threaded environments."
      },
      jp: {
        title: "Fail-Fastイテレーター",
        body: "Javaコレクションイテレーターが『Fail-Fast』であるとはどういう意味ですか、またこの条件が満たされたときにスローされる例外は何ですか？",
        solution: "**Fail-Fast**イテレーターは、イテレーター自身の`remove()`メソッド以外の方法で、イテレーターが作成された後に基になるコレクションが**構造的に変更された**（要素が追加、削除、またはサイズが変更された）ことを検出すると、すぐに**`ConcurrentModificationException`**をスローします。これらは主にシングルスレッド環境でのデータの一貫性を保証するために使用されます。"
      },
      vi: {
        title: "Fail-Fast Iterators",
        body: "Một Java Collection Iterator là 'Fail-Fast' có nghĩa là gì, và ngoại lệ nào được ném ra khi điều kiện này được đáp ứng?",
        solution: "Một iterator **Fail-Fast** ném ra một **`ConcurrentModificationException`** ngay lập tức khi phát hiện ra rằng collection cơ bản đã bị **sửa đổi cấu trúc** (thêm, xóa phần tử hoặc thay đổi kích thước) sau khi iterator được tạo, bằng bất kỳ phương tiện nào khác ngoài phương thức `remove()` của chính iterator đó. Chúng chủ yếu được sử dụng để đảm bảo tính nhất quán của dữ liệu trong môi trường đơn luồng."
      }
    }
  },
  {
    _id: "java-j-025",
    difficulty: "junior",
    tags: ["keyword", "final", "oop"],
    content: {
      en: {
        title: "`final` class limitation",
        body: "What is the key limitation of a class declared as `final`? Provide an example of a built-in Java final class.",
        solution: "A class declared as **`final` cannot be inherited** (cannot have subclasses). This prevents the class's behavior from being altered by subclassing. Example: **`String`**, **`Integer`**, and **`System`** classes are all final."
      },
      jp: {
        title: "`final`クラスの制限",
        body: "`final`として宣言されたクラスの主な制限は何ですか？組み込みのJava finalクラスの例を挙げてください。",
        solution: "**`final`**として宣言されたクラスは**継承できません**（サブクラスを持つことができません）。これにより、サブクラス化によるクラスの動作の変更が防止されます。例:**`String`**、**`Integer`**、および**`System`**クラスはすべてfinalです。"
      },
      vi: {
        title: "Giới hạn của `final` class",
        body: "Hạn chế chính của một class được khai báo là `final` là gì? Cung cấp một ví dụ về một class final có sẵn trong Java.",
        solution: "Một class được khai báo là **`final` không thể được kế thừa** (không thể có class con). Điều này ngăn chặn hành vi của class bị thay đổi bởi việc kế thừa. Ví dụ: các class **`String`**, **`Integer`**, và **`System`** đều là final."
      }
    }
  },
  {
    _id: "java-j-026",
    difficulty: "junior",
    tags: ["exception", "error", "throwable"],
    content: {
      en: {
        title: "Exception vs Error",
        body: "In the Java Exception Hierarchy, what is the fundamental difference between an `Exception` and an `Error`?",
        solution: "**`Exception`** (and its subclasses) represents conditions that an application **should catch and handle** (e.g., `IOException`). **`Error`** (and its subclasses) represents serious problems that are generally **not expected to be caught** by application code, as they usually indicate external system issues (e.g., `OutOfMemoryError`, `StackOverflowError`)."
      },
      jp: {
        title: "Exception vs Error",
        body: "Javaの例外階層において、`Exception`と`Error`の根本的な違いは何ですか？",
        solution: "**`Exception`**（およびそのサブクラス）は、アプリケーションが**キャッチして処理すべき**状況を表します（例：`IOException`）。**`Error`**（およびそのサブクラス）は、通常、外部システムの問題を示すため、アプリケーションコードによって**キャッチされることが一般的に期待されない**深刻な問題を表します（例：`OutOfMemoryError`、`StackOverflowError`）。"
      },
      vi: {
        title: "Exception và Error",
        body: "Trong Cây phân cấp Exception của Java, sự khác biệt cơ bản giữa một `Exception` và một `Error` là gì?",
        solution: "**`Exception`** (và các class con của nó) đại diện cho các điều kiện mà một ứng dụng **nên bắt và xử lý** (ví dụ: `IOException`). **`Error`** (và các class con của nó) đại diện cho các vấn đề nghiêm trọng mà thông thường **không nên được bắt** bởi mã ứng dụng, vì chúng thường chỉ ra các vấn đề hệ thống bên ngoài (ví dụ: `OutOfMemoryError`, `StackOverflowError`)."
      }
    }
  },
  {
    _id: "java-j-027",
    difficulty: "junior",
    tags: ["collections", "list", "vector"],
    content: {
      en: {
        title: "`ArrayList` vs `Vector`",
        body: "What is the main difference between `ArrayList` and `Vector`, which makes one generally preferred in modern Java?",
        solution: "The main difference is **Synchronization**. **`Vector`** is **synchronized** (thread-safe), while **`ArrayList`** is **not** synchronized. `Vector` is generally slower due to the overhead of synchronization and is considered a legacy class. `ArrayList` is preferred in single-threaded scenarios for better performance."
      },
      jp: {
        title: "`ArrayList` vs `Vector`",
        body: "`ArrayList`と`Vector`の主な違いは何ですか、またそのうちの1つが最新のJavaで一般的に好まれるのはなぜですか？",
        solution: "主な違いは**同期**です。**`Vector`**は**同期されている**（スレッドセーフ）のに対し、**`ArrayList`**は同期されていません。`Vector`は同期のオーバーヘッドのために一般的に遅く、レガシークラスと見なされます。`ArrayList`は、パフォーマンス向上のためにシングルスレッドのシナリオで好まれます。"
      },
      vi: {
        title: "`ArrayList` và `Vector`",
        body: "Sự khác biệt chính giữa `ArrayList` và `Vector` là gì, điều gì làm cho một trong số chúng thường được ưu tiên hơn trong Java hiện đại?",
        solution: "Sự khác biệt chính là **Đồng bộ hóa (Synchronization)**. **`Vector`** được **đồng bộ hóa** (thread-safe), trong khi **`ArrayList`** **không** được đồng bộ hóa. `Vector` thường chậm hơn do chi phí đồng bộ hóa và được coi là một legacy class. `ArrayList` được ưu tiên trong các kịch bản đơn luồng để có hiệu suất tốt hơn."
      }
    }
  },
  {
    _id: "java-j-028",
    difficulty: "junior",
    tags: ["io", "try-with-resources"],
    content: {
      en: {
        title: "Try-with-resources",
        body: "What is the purpose of the `try-with-resources` statement (introduced in Java 7), and what interface must a resource implement to be used in it?",
        solution: "The `try-with-resources` statement is used to **automatically manage resources** (like streams or connections), ensuring that they are closed after the `try` block finishes, regardless of whether an exception occurred. The resource must implement the **`java.lang.AutoCloseable`** interface."
      },
      jp: {
        title: "Try-with-resources",
        body: "Java 7で導入された`try-with-resources`ステートメントの目的は何ですか、またリソースがそれに使用されるために実装しなければならないインターフェースは何ですか？",
        solution: "`try-with-resources`ステートメントは、例外が発生したかどうかにかかわらず、`try`ブロックが終了した後にリソース（ストリームや接続など）が確実に閉じられるように、**リソースを自動的に管理する**ために使用されます。リソースは**`java.lang.AutoCloseable`**インターフェースを実装する必要があります。"
      },
      vi: {
        title: "Try-with-resources",
        body: "Mục đích của câu lệnh `try-with-resources` (được giới thiệu trong Java 7) là gì, và một tài nguyên phải implement interface nào để được sử dụng trong đó?",
        solution: "Câu lệnh `try-with-resources` được sử dụng để **tự động quản lý tài nguyên** (như stream hoặc kết nối), đảm bảo rằng chúng được đóng sau khi khối `try` kết thúc, bất kể có ngoại lệ xảy ra hay không. Tài nguyên phải implement interface **`java.lang.AutoCloseable`**."
      }
    }
  },
  {
    _id: "java-j-029",
    difficulty: "junior",
    tags: ["method", "overriding", "covariance"],
    content: {
      en: {
        title: "Covariant Return Types",
        body: "What are Covariant Return Types in the context of Method Overriding in Java?",
        solution: "Covariant Return Types, allowed since Java 5, mean that when overriding a method in a subclass, the overriding method's return type can be a **subclass** of the return type declared in the superclass's overridden method. For example, if the superclass method returns `Object`, the subclass method can return `String`."
      },
      jp: {
        title: "共変戻り値型",
        body: "Javaのメソッドのオーバーライドの文脈における共変戻り値型（Covariant Return Types）とは何ですか？",
        solution: "Java 5以降で許可されている共変戻り値型は、サブクラスでメソッドをオーバーライドするときに、オーバーライドするメソッドの戻り値の型が、スーパークラスのオーバーライドされたメソッドで宣言された戻り値の型の**サブクラス**であってもよいことを意味します。たとえば、スーパークラスのメソッドが`Object`を返す場合、サブクラスのメソッドは`String`を返すことができます。"
      },
      vi: {
        title: "Covariant Return Types",
        body: "Covariant Return Types (Kiểu trả về hiệp biến) là gì trong bối cảnh Method Overriding trong Java?",
        solution: "Covariant Return Types, được phép kể từ Java 5, có nghĩa là khi ghi đè một phương thức trong một class con, kiểu trả về của phương thức ghi đè có thể là một **class con** của kiểu trả về được khai báo trong phương thức bị ghi đè của class cha. Ví dụ, nếu phương thức của class cha trả về `Object`, phương thức của class con có thể trả về `String`."
      }
    }
  },
  {
    _id: "java-j-030",
    difficulty: "junior",
    tags: ["interface", "default-method"],
    content: {
      en: {
        title: "`default` methods in Interface",
        body: "What is the purpose of `default` methods (introduced in Java 8) in an Interface?",
        solution: "`default` methods allow developers to **add new methods to an interface** without breaking the binary compatibility of existing classes that already implement that interface. The `default` keyword provides a **default implementation** of the method within the interface itself."
      },
      jp: {
        title: "インターフェースの`default`メソッド",
        body: "インターフェースにおける`default`メソッド（Java 8で導入）の目的は何ですか？",
        solution: "`default`メソッドを使用すると、開発者は、そのインターフェースを既に実装している既存のクラスのバイナリ互換性を損なうことなく、**インターフェースに新しいメソッドを追加する**ことができます。`default`キーワードは、インターフェース自体の中にメソッドの**デフォルトの実装**を提供します。"
      },
      vi: {
        title: "Phương thức `default` trong Interface",
        body: "Mục đích của các phương thức `default` (được giới thiệu trong Java 8) trong một Interface là gì?",
        solution: "Các phương thức `default` cho phép các nhà phát triển **thêm các phương thức mới vào một interface** mà không làm hỏng tính tương thích nhị phân (binary compatibility) của các class hiện có đã implement interface đó. Từ khóa `default` cung cấp một **triển khai mặc định** của phương thức ngay trong interface đó."
      }
    }
  },
  {
    _id: "java-j-031",
    difficulty: "junior",
    tags: ["collections", "sort", "comparator", "comparable"],
    content: {
      en: {
        title: "`Comparable` vs `Comparator`",
        body: "What is the difference between the `Comparable` interface and the `Comparator` interface, and when do you use each?",
        solution: "**`Comparable`** provides the **natural ordering** of a class and must be implemented by the class itself (uses the `compareTo()` method). **`Comparator`** provides **custom ordering** and is implemented by a separate class; it's used when you need multiple sorting criteria or cannot modify the source class (uses the `compare()` method)."
      },
      jp: {
        title: "`Comparable` vs `Comparator`",
        body: "`Comparable`インターフェースと`Comparator`インターフェースの違いは何ですか、またそれぞれをいつ使用しますか？",
        solution: "**`Comparable`**は、クラスの**自然な順序付け**を提供し、クラス自体によって実装される必要があります（`compareTo()`メソッドを使用）。**`Comparator`**は**カスタムの順序付け**を提供し、別のクラスによって実装されます。複数のソート基準が必要な場合や、ソースクラスを変更できない場合に使用されます（`compare()`メソッドを使用）。"
      },
      vi: {
        title: "`Comparable` và `Comparator`",
        body: "Sự khác biệt giữa interface `Comparable` và interface `Comparator` là gì, và khi nào bạn sử dụng từng cái?",
        solution: "**`Comparable`** cung cấp **thứ tự tự nhiên** của một class và phải được class đó tự implement (sử dụng phương thức `compareTo()`). **`Comparator`** cung cấp **thứ tự tùy chỉnh** và được implement bởi một class riêng biệt; nó được sử dụng khi bạn cần nhiều tiêu chí sắp xếp hoặc không thể sửa đổi class nguồn (sử dụng phương thức `compare()`)."
      }
    }
  },
  {
    _id: "java-j-032",
    difficulty: "junior",
    tags: ["design", "dependency-injection", "spring"],
    content: {
      en: {
        title: "DI Types (Constructor vs Setter)",
        body: "What are the two most common ways to implement Dependency Injection (DI) in Java, and which one is generally preferred for mandatory dependencies?",
        solution: "The two common ways are **Constructor Injection** and **Setter Injection**. **Constructor Injection** is generally preferred for **mandatory dependencies**, as it ensures the object is always created in a valid state (dependencies are guaranteed to be present). Setter Injection is better for optional dependencies."
      },
      jp: {
        title: "DIの種類（コンストラクター vs セッター）",
        body: "Javaで依存性注入（DI）を実装する最も一般的な2つの方法は何ですか、また必須の依存関係に対して一般的に好まれるのはどちらですか？",
        solution: "一般的な2つの方法は**コンストラクターインジェクション**と**セッターインジェクション**です。**コンストラクターインジェクション**は、オブジェクトが常に有効な状態で作成されることを保証するため（依存関係が存在することが保証される）、**必須の依存関係**に対して一般的に好まれます。セッターインジェクションはオプションの依存関係に適しています。"
      },
      vi: {
        title: "Các loại DI (Constructor vs Setter)",
        body: "Hai cách phổ biến nhất để triển khai Dependency Injection (DI) trong Java là gì, và cách nào thường được ưu tiên cho các dependency bắt buộc?",
        solution: "Hai cách phổ biến là **Constructor Injection** và **Setter Injection**. **Constructor Injection** thường được ưu tiên cho **các dependency bắt buộc**, vì nó đảm bảo đối tượng luôn được tạo ra ở trạng thái hợp lệ (các dependency được đảm bảo phải có mặt). Setter Injection tốt hơn cho các dependency tùy chọn."
      }
    }
  },
  {
    _id: "java-j-033",
    difficulty: "junior",
    tags: ["threading", "synchronization", "method"],
    content: {
      en: {
        title: "Synchronized Method",
        body: "What lock does a non-static `synchronized` method acquire when it is executed by a thread?",
        solution: "A non-static `synchronized` method acquires the **intrinsic lock (monitor lock) of the object instance** (`this`) that the method is invoked on. Only one thread can hold this lock at a time, preventing other threads from executing any other synchronized methods of the same object."
      },
      jp: {
        title: "Synchronizedメソッド",
        body: "非静的な`synchronized`メソッドがスレッドによって実行されるとき、どのようなロックを取得しますか？",
        solution: "非静的な`synchronized`メソッドは、そのメソッドが呼び出されている**オブジェクトインスタンス**（`this`）**の内在ロック（モニターロック）**を取得します。一度に1つのスレッドのみがこのロックを保持でき、他のスレッドが同じオブジェクトの他の同期メソッドを実行するのを防ぎます。"
      },
      vi: {
        title: "Synchronized Method",
        body: "Một phương thức `synchronized` không tĩnh (non-static) chiếm giữ khóa nào khi nó được thực thi bởi một luồng?",
        solution: "Một phương thức `synchronized` không tĩnh chiếm giữ **khóa nội tại (intrinsic lock hay monitor lock) của thể hiện đối tượng** (`this`) mà phương thức đó được gọi trên. Chỉ một luồng có thể giữ khóa này tại một thời điểm, ngăn các luồng khác thực thi bất kỳ phương thức synchronized nào khác của cùng đối tượng đó."
    }
    }
  },
  {
    _id: "java-j-034",
    difficulty: "junior",
    tags: ["lambda", "functional-interface"],
    content: {
      en: {
        title: "Functional Interface",
        body: "What is a 'Functional Interface' in Java 8+, and what is the one essential requirement it must meet?",
        solution: "A Functional Interface is any interface that has **exactly one abstract method**. It is primarily used to be the target type for **lambda expressions** and **method references**. Common examples include `Runnable` and `Comparator`. It is often annotated with `@FunctionalInterface`."
      },
      jp: {
        title: "関数型インターフェース",
        body: "Java 8以降の『関数型インターフェース』とは何ですか、またそれが満たさなければならない1つの本質的な要件は何ですか？",
        solution: "関数型インターフェースとは、**抽象メソッドをちょうど1つだけ**持つ任意のインターフェースです。主に**ラムダ式**や**メソッド参照**のターゲット型として使用されます。一般的な例には`Runnable`や`Comparator`があります。しばしば`@FunctionalInterface`で注釈されます。"
      },
      vi: {
        title: "Functional Interface",
        body: "Functional Interface (Giao diện hàm) trong Java 8+ là gì, và yêu cầu thiết yếu duy nhất nó phải đáp ứng là gì?",
        solution: "Functional Interface là bất kỳ interface nào có **chính xác một phương thức trừu tượng**. Nó chủ yếu được sử dụng làm kiểu mục tiêu cho **biểu thức lambda** và **tham chiếu phương thức**. Các ví dụ phổ biến bao gồm `Runnable` và `Comparator`. Nó thường được chú thích bằng `@FunctionalInterface`."
      }
    }
  },
  {
    _id: "java-j-035",
    difficulty: "junior",
    tags: ["stream", "intermediate", "terminal"],
    content: {
      en: {
        title: "Intermediate vs Terminal Stream Operations",
        body: "In the Java Stream API, what is the difference between an Intermediate operation and a Terminal operation?",
        solution: "**Intermediate operations** (e.g., `filter()`, `map()`) return a new stream, are **lazy** (do not execute until a terminal operation is called), and can be chained. **Terminal operations** (e.g., `forEach()`, `collect()`) produce a result or side-effect, are **eager** (start the processing of the stream pipeline), and close the stream."
      },
      jp: {
        title: "中間ストリーム操作 vs 終端ストリーム操作",
        body: "Java Stream APIにおいて、中間操作（Intermediate operation）と終端操作（Terminal operation）の違いは何ですか？",
        solution: "**中間操作**（例：`filter()`、`map()`）は新しいストリームを返し、**遅延評価**（終端操作が呼び出されるまで実行されない）であり、連鎖させることができます。**終端操作**（例：`forEach()`、`collect()`）は結果または副作用を生成し、**即時評価**（ストリームパイプラインの処理を開始する）であり、ストリームを閉じます。"
      },
      vi: {
        title: "Intermediate và Terminal Stream Operations",
        body: "Trong Java Stream API, sự khác biệt giữa Intermediate operation (thao tác trung gian) và Terminal operation (thao tác kết thúc) là gì?",
        solution: "**Intermediate operations** (ví dụ: `filter()`, `map()`) trả về một stream mới, là **lazy** (không thực thi cho đến khi một terminal operation được gọi), và có thể được xâu chuỗi. **Terminal operations** (ví dụ: `forEach()`, `collect()`) tạo ra một kết quả hoặc tác dụng phụ, là **eager** (bắt đầu xử lý pipeline stream), và đóng stream."
    }
    }
  },
  {
    _id: "java-j-036",
    difficulty: "junior",
    tags: ["oop", "has-a", "composition"],
    content: {
      en: {
        title: "Composition (HAS-A relationship)",
        body: "Define Composition (or Aggregation) in OOP and explain why it is generally favored over Inheritance.",
        solution: "Composition represents the **'HAS-A'** relationship, where one class contains another class's object as a member (e.g., a `Car` HAS-A `Engine`). It is favored over inheritance ('IS-A') because it provides **greater flexibility**, promotes **loose coupling**, and allows for changes to the contained object without affecting the containing class (Encapsulation and Flexibility)."
      },
      jp: {
        title: "コンポジション（HAS-A関係）",
        body: "OOPにおけるコンポジション（または集約）を定義し、それが継承よりも一般的に好まれる理由を説明してください。",
        solution: "コンポジションは**『HAS-A』**の関係を表し、あるクラスが別のクラスのオブジェクトをメンバーとして含むことです（例：`Car` HAS-A `Engine`）。これは、**より大きな柔軟性**を提供し、**疎結合**を促進し、含まれるオブジェクトへの変更が含むクラスに影響を与えないようにするため（カプセル化と柔軟性）、継承（『IS-A』）よりも好まれます。"
      },
      vi: {
        title: "Composition (Mối quan hệ HAS-A)",
        body: "Định nghĩa Composition (hoặc Aggregation) trong OOP và giải thích tại sao nó thường được ưa chuộng hơn Kế thừa.",
        solution: "Composition đại diện cho mối quan hệ **'HAS-A'** (Có một), trong đó một class chứa đối tượng của một class khác như một thành viên (ví dụ: một `Car` HAS-A `Engine`). Nó được ưu tiên hơn kế thừa ('IS-A') vì nó cung cấp **sự linh hoạt lớn hơn**, thúc đẩy **khớp nối lỏng (loose coupling)**, và cho phép thay đổi đối tượng được chứa mà không ảnh hưởng đến class chứa nó (Encapsulation và Flexibility)."
    }
    }
  },
  {
    _id: "java-j-037",
    difficulty: "junior",
    tags: ["collections", "hashset", "treeset"],
    content: {
      en: {
        title: "HashSet vs TreeSet",
        body: "What is the key difference between a `HashSet` and a `TreeSet` regarding ordering and underlying structure?",
        solution: "**`HashSet`** is **unordered** (or rather, the order is unpredictable and based on hash codes) and is backed by a **`HashMap`**. It offers fast, constant-time performance (O(1)) for basic operations. **`TreeSet`** is **sorted** (maintains elements in natural or custom order) and is backed by a **`TreeMap`**. It offers guaranteed log(n) time cost for basic operations."
      },
      jp: {
        title: "HashSet vs TreeSet",
        body: "`HashSet`と`TreeSet`の順序付けと基になる構造に関する主な違いは何ですか？",
        solution: "**`HashSet`**は**順序付けられておらず**（または、順序が予測不可能でハッシュコードに基づいている）、**`HashMap`**によって支えられています。基本的な操作で高速な定数時間（O(1)）のパフォーマンスを提供します。**`TreeSet`**は**ソートされており**（自然な順序またはカスタムの順序で要素を維持）、**`TreeMap`**によって支えられています。基本的な操作で保証されたlog(n)の時間コストを提供します。"
      },
      vi: {
        title: "HashSet và TreeSet",
        body: "Sự khác biệt chính giữa `HashSet` và `TreeSet` liên quan đến thứ tự và cấu trúc cơ bản là gì?",
        solution: "**`HashSet`** là **không có thứ tự** (hoặc đúng hơn, thứ tự là không thể đoán trước và dựa trên hash code) và được hỗ trợ bởi một **`HashMap`**. Nó cung cấp hiệu suất thời gian hằng số nhanh (O(1)) cho các thao tác cơ bản. **`TreeSet`** được **sắp xếp** (duy trì các phần tử theo thứ tự tự nhiên hoặc tùy chỉnh) và được hỗ trợ bởi một **`TreeMap`**. Nó cung cấp chi phí thời gian log(n) được đảm bảo cho các thao tác cơ bản."
    }
    }
  },
  {
    _id: "java-j-038",
    difficulty: "junior",
    tags: ["threading", "daemon", "user"],
    content: {
      en: {
        title: "Daemon vs User Thread",
        body: "What is the difference between a Daemon Thread and a User Thread, and what happens to the JVM when only Daemon threads remain?",
        solution: "**User Threads** (or non-Daemon) are high-priority threads; the JVM waits for them to complete before exiting. **Daemon Threads** (e.g., GC thread) are low-priority, background threads. The JVM **terminates immediately** when all User Threads have finished, regardless of whether any Daemon Threads are still running."
      },
      jp: {
        title: "デーモンスレッド vs ユーザースレッド",
        body: "デーモンスレッドとユーザースレッドの違いは何ですか、またデーモンスレッドのみが残った場合、JVMはどうなりますか？",
        solution: "**ユーザースレッド**（または非デーモン）は高優先度のスレッドであり、JVMは終了する前にそれらが完了するのを待ちます。**デーモンスレッド**（例：GCスレッド）は、低優先度のバックグラウンドスレッドです。すべてのユーザースレッドが終了すると、デーモンスレッドがまだ実行されているかどうかにかかわらず、JVMは**直ちに終了します**。"
      },
      vi: {
        title: "Daemon Thread và User Thread",
        body: "Sự khác biệt giữa Daemon Thread và User Thread là gì, và điều gì xảy ra với JVM khi chỉ còn lại các Daemon Thread?",
        solution: "**User Threads** (hoặc non-Daemon) là các luồng có độ ưu tiên cao; JVM chờ chúng hoàn thành trước khi thoát. **Daemon Threads** (ví dụ: luồng GC) là các luồng nền, ưu tiên thấp. JVM **kết thúc ngay lập tức** khi tất cả User Threads đã hoàn thành, bất kể liệu còn bất kỳ Daemon Thread nào đang chạy hay không."
    }
    }
  },
  {
    _id: "java-j-039",
    difficulty: "junior",
    tags: ["keyword", "transient", "static"],
    content: {
      en: {
        title: "Serialization of `static` and `transient` fields",
        body: "When an object is serialized, what happens to fields declared as `static` and fields declared as `transient`?",
        solution: "**`transient`** fields are **not serialized**; they are ignored during the serialization process and are restored to their default values (e.g., 0, null, false) upon deserialization. **`static`** fields are **also not serialized** because they belong to the class, not the specific object instance. The static field's value in the new JVM will be the current value of the class's static field, not the one from the serialized object."
      },
      jp: {
        title: "`static`フィールドと`transient`フィールドのシリアル化",
        body: "オブジェクトがシリアル化されるとき、`static`として宣言されたフィールドと`transient`として宣言されたフィールドはどうなりますか？",
        solution: "**`transient`**フィールドは**シリアル化されません**。シリアル化プロセス中に無視され、逆シリアル化時にデフォルト値（例：0、null、false）に復元されます。**`static`**フィールドも、特定のオブジェクトインスタンスではなくクラスに属しているため、**シリアル化されません**。新しいJVMでの静的フィールドの値は、シリアル化されたオブジェクトからのものではなく、クラスの静的フィールドの現在の値になります。"
      },
      vi: {
        title: "Tuần tự hóa trường `static` và `transient`",
        body: "Khi một đối tượng được tuần tự hóa (serialized), điều gì xảy ra với các trường được khai báo là `static` và các trường được khai báo là `transient`?",
        solution: "Các trường **`transient` không được tuần tự hóa**; chúng bị bỏ qua trong quá trình tuần tự hóa và được khôi phục về giá trị mặc định của chúng (ví dụ: 0, null, false) khi giải tuần tự hóa. Các trường **`static` cũng không được tuần tự hóa** vì chúng thuộc về class, chứ không phải thể hiện đối tượng cụ thể. Giá trị của trường static trong JVM mới sẽ là giá trị hiện tại của trường static của class, chứ không phải giá trị từ đối tượng đã được tuần tự hóa."
    }
    }
  },
  {
    _id: "java-j-040",
    difficulty: "junior",
    tags: ["oop", "method-overriding", "access-modifier"],
    content: {
      en: {
        title: "Overriding Access Modifier Rule",
        body: "What is the rule regarding the access modifier when overriding a method in a subclass?",
        solution: "The access modifier of the overriding method in the subclass **cannot be more restrictive** than the access modifier of the overridden method in the superclass. For example, if the superclass method is `protected`, the subclass method must be `protected` or `public` (but not `private` or default/package-private)."
      },
      jp: {
        title: "オーバーライド時のアクセス修飾子のルール",
        body: "サブクラスでメソッドをオーバーライドする際のアクセス修飾子に関するルールは何ですか？",
        solution: "サブクラスのオーバーライドするメソッドのアクセス修飾子は、スーパークラスのオーバーライドされたメソッドのアクセス修飾子よりも**制限的であってはなりません**。たとえば、スーパークラスのメソッドが`protected`の場合、サブクラスのメソッドは`protected`または`public`である必要があります（`private`またはデフォルト/パッケージプライベートでは不可）。"
      },
      vi: {
        title: "Quy tắc Access Modifier khi Overriding",
        body: "Quy tắc về access modifier khi ghi đè một phương thức trong một class con là gì?",
        solution: "Access modifier của phương thức ghi đè trong class con **không được hạn chế hơn** access modifier của phương thức bị ghi đè trong class cha. Ví dụ, nếu phương thức của class cha là `protected`, phương thức của class con phải là `protected` hoặc `public` (nhưng không được là `private` hoặc default/package-private)."
    }
    }
  },
  {
    _id: "java-j-041",
    difficulty: "junior",
    tags: ["collections", "fail-safe", "iterator"],
    content: {
      en: {
        title: "Fail-Safe Iterators",
        body: "Explain what a 'Fail-Safe' iterator is and provide an example of a collection that uses one.",
        solution: "A **Fail-Safe** iterator **does not throw an exception** if the underlying collection is modified structurally during iteration. This is achieved by the iterator operating on a **clone or copy** of the original collection. **Example:** Collections in the `java.util.concurrent` package, such as `CopyOnWriteArrayList` and `ConcurrentHashMap`."
      },
      jp: {
        title: "Fail-Safeイテレーター",
        body: "『Fail-Safe』イテレーターとは何かを説明し、それを使用するコレクションの例を挙げてください。",
        solution: "**Fail-Safe**イテレーターは、イテレーション中に基になるコレクションが構造的に変更されても**例外をスローしません**。これは、イテレーターが元のコレクションの**クローンまたはコピー**で操作することで達成されます。**例:** `CopyOnWriteArrayList`や`ConcurrentHashMap`などの`java.util.concurrent`パッケージ内のコレクション。"
      },
      vi: {
        title: "Fail-Safe Iterators",
        body: "Giải thích 'Fail-Safe' iterator là gì và cung cấp một ví dụ về collection sử dụng loại iterator này.",
        solution: "Một iterator **Fail-Safe không ném ra ngoại lệ** nếu collection cơ bản bị sửa đổi cấu trúc trong quá trình lặp. Điều này được đạt được bằng cách iterator hoạt động trên một **bản sao hoặc bản copy** của collection gốc. **Ví dụ:** Các Collection trong gói `java.util.concurrent`, chẳng hạn như `CopyOnWriteArrayList` và `ConcurrentHashMap`."
    }
    }
  },
  {
    _id: "java-j-042",
    difficulty: "junior",
    tags: ["exception", "custom"],
    content: {
      en: {
        title: "Creating a Custom Exception",
        body: "To create a custom **Checked Exception**, which two built-in Java classes should your custom exception class typically extend?",
        solution: "To create a custom **Checked Exception**, your class should extend the **`java.lang.Exception`** class. (If you wanted an Unchecked Exception, you would extend `RuntimeException`)."
      },
      jp: {
        title: "カスタム例外の作成",
        body: "カスタムの**チェック済み例外**を作成するには、カスタム例外クラスは通常、どの2つの組み込みJavaクラスを拡張する必要がありますか？",
        solution: "カスタムの**チェック済み例外**を作成するには、クラスは**`java.lang.Exception`**クラスを拡張する必要があります。（非チェック例外が必要な場合は、`RuntimeException`を拡張します）。"
      },
      vi: {
        title: "Tạo Custom Exception",
        body: "Để tạo một Custom **Checked Exception**, class ngoại lệ tùy chỉnh của bạn thường nên kế thừa từ hai class Java có sẵn nào?",
        solution: "Để tạo một Custom **Checked Exception**, class của bạn nên kế thừa từ class **`java.lang.Exception`**. (Nếu bạn muốn một Unchecked Exception, bạn sẽ kế thừa từ `RuntimeException`)."
    }
    }
  },
  {
    _id: "java-j-043",
    difficulty: "junior",
    tags: ["final", "performance"],
    content: {
      en: {
        title: "`final` and JIT Compiler",
        body: "How does the `final` keyword potentially improve runtime performance through the Just-In-Time (JIT) compiler?",
        solution: "Declaring variables, methods, or classes as `final` provides **optimization opportunities** for the JIT compiler. For `final` variables, the JIT can perform **constant folding** and inlining. For `final` methods, the JIT can safely perform **method inlining**, which replaces the method call with the actual method body, eliminating the overhead of the method call itself."
      },
      jp: {
        title: "`final`とJITコンパイラ",
        body: "`final`キーワードは、Just-In-Time（JIT）コンパイラを通じて実行時パフォーマンスをどのように改善する可能性がありますか？",
        solution: "変数、メソッド、またはクラスを`final`として宣言すると、JITコンパイラに**最適化の機会**が提供されます。`final`変数では、JITは**定数畳み込み**とインライン化を実行できます。`final`メソッドでは、JITは安全に**メソッドのインライン化**を実行でき、メソッド呼び出しを実際のメソッド本体に置き換え、メソッド呼び出し自体のオーバーヘッドを排除します。"
      },
      vi: {
        title: "`final` và JIT Compiler",
        body: "Từ khóa `final` có khả năng cải thiện hiệu suất runtime thông qua Just-In-Time (JIT) compiler như thế nào?",
        solution: "Khai báo các biến, phương thức hoặc class là `final` cung cấp **cơ hội tối ưu hóa** cho JIT compiler. Đối với các biến `final`, JIT có thể thực hiện **constant folding** và inlining. Đối với các phương thức `final`, JIT có thể an toàn thực hiện **method inlining**, thay thế lời gọi phương thức bằng phần thân phương thức thực tế, loại bỏ chi phí của chính lời gọi phương thức đó."
    }
    }
  },
  {
    _id: "java-j-044",
    difficulty: "junior",
    tags: ["date", "time", "api"],
    content: {
      en: {
        title: "Modern Date/Time API",
        body: "Which package and core class (introduced in Java 8) should you use instead of the old `java.util.Date` for immutable, thread-safe date representations?",
        solution: "You should use the **`java.time`** package, primarily the **`LocalDate`**, **`LocalTime`**, and **`LocalDateTime`** classes. These classes are immutable and thread-safe, addressing major issues with the legacy `Date` and `Calendar` classes."
      },
      jp: {
        title: "最新の日付/時刻API",
        body: "不変でスレッドセーフな日付表現のために、古い`java.util.Date`の代わりに（Java 8で導入された）どのパッケージとコアクラスを使用すべきですか？",
        solution: "**`java.time`**パッケージ、主には**`LocalDate`**、**`LocalTime`**、および**`LocalDateTime`**クラスを使用すべきです。これらのクラスは不変でスレッドセーフであり、レガシーな`Date`および`Calendar`クラスの主要な問題に対処しています。"
      },
      vi: {
        title: "Modern Date/Time API",
        body: "Bạn nên sử dụng gói (package) và class cốt lõi nào (được giới thiệu trong Java 8) thay vì `java.util.Date` cũ để đại diện cho ngày/giờ bất biến (immutable) và an toàn luồng (thread-safe)?",
        solution: "Bạn nên sử dụng gói **`java.time`**, chủ yếu là các class **`LocalDate`**, **`LocalTime`**, và **`LocalDateTime`**. Các class này là bất biến và an toàn luồng, giải quyết các vấn đề lớn với các class `Date` và `Calendar` cũ."
    }
    }
  },
  {
    _id: "java-j-045",
    difficulty: "junior",
    tags: ["io", "buffer", "stream"],
    content: {
      en: {
        title: "Buffered I/O (Wrapper streams)",
        body: "What is the primary benefit of using buffered I/O stream wrappers, like `BufferedReader` or `BufferedWriter`, over raw I/O streams?",
        solution: "The primary benefit is **improved performance**. Buffered streams use an internal memory buffer to reduce the number of direct interactions (disk/network access) with the underlying resource. Reading/writing is done in larger chunks to/from the buffer, which is much faster than byte-by-byte access."
      },
      jp: {
        title: "バッファードI/O（ラッパーストリーム）",
        body: "`BufferedReader`や`BufferedWriter`のようなバッファードI/Oストリームラッパーを、生のI/Oストリームよりも使用する主な利点は何ですか？",
        solution: "主な利点は**パフォーマンスの向上**です。バッファードストリームは内部メモリバッファーを使用して、基になるリソースとの直接的なやり取り（ディスク/ネットワークアクセス）の回数を減らします。読み書きはバッファーに対してより大きなチャンクで行われるため、バイトごとのアクセスよりもはるかに高速です。"
      },
      vi: {
        title: "Buffered I/O (Wrapper streams)",
        body: "Lợi ích chính của việc sử dụng các wrapper stream I/O có đệm (buffered I/O stream wrappers), như `BufferedReader` hoặc `BufferedWriter`, so với các stream I/O thô là gì?",
        solution: "Lợi ích chính là **cải thiện hiệu suất**. Các stream có đệm sử dụng một bộ đệm bộ nhớ bên trong để giảm số lượng tương tác trực tiếp (truy cập đĩa/mạng) với tài nguyên cơ bản. Việc đọc/ghi được thực hiện theo các khối lớn hơn đến/từ bộ đệm, nhanh hơn nhiều so với truy cập từng byte một."
    }
    }
  },
  {
    _id: "java-j-046",
    difficulty: "junior",
    tags: ["jdbc", "connection", "driver"],
    content: {
      en: {
        title: "JDBC Driver Types (Old vs Modern)",
        body: "Before JDBC 4.0, which type of JDBC driver required a separate database client to be installed on the client machine? What is the modern, preferred type?",
        solution: "Type 2 drivers (**Native-API/Partially Java Driver**) required a separate database client. The modern, preferred type is Type 4 driver (**Pure Java Driver**), which is completely written in Java and connects directly to the database without any native libraries."
      },
      jp: {
        title: "JDBCドライバーの種類（旧式 vs 最新）",
        body: "JDBC 4.0より前は、どのタイプのJDBCドライバーがクライアントマシンに個別のデータベースクライアントのインストールを必要としましたか？最新で推奨されるタイプは何ですか？",
        solution: "タイプ2ドライバー（**ネイティブAPI/部分的にJavaのドライバー**）は個別のデータベースクライアントを必要としました。最新で推奨されるタイプはタイプ4ドライバー（**ピュアJavaドライバー**）であり、これは完全にJavaで記述されており、ネイティブライブラリなしでデータベースに直接接続します。"
      },
      vi: {
        title: "Các loại JDBC Driver (Cũ và Hiện đại)",
        body: "Trước JDBC 4.0, loại JDBC driver nào yêu cầu phải cài đặt một client database riêng trên máy client? Loại hiện đại, được ưu tiên là gì?",
        solution: "Driver Type 2 (**Native-API/Partially Java Driver**) yêu cầu phải có một client database riêng biệt. Loại hiện đại, được ưu tiên là Driver Type 4 (**Pure Java Driver**), được viết hoàn toàn bằng Java và kết nối trực tiếp đến database mà không cần bất kỳ thư viện native nào."
    }
    }
  },
  {
    _id: "java-j-047",
    difficulty: "junior",
    tags: ["keyword", "assert"],
    content: {
      en: {
        title: "`assert` keyword",
        body: "What is the purpose of the `assert` keyword in Java, and why is it usually disabled in production environments?",
        solution: "The `assert` keyword is used for **program assertions**—testing an assumption about the program state that should always be true (e.g., in internal development checks). It is usually **disabled** in production because assertions are meant for debugging and testing; running them adds overhead, and the application should rely on robust exception handling, not assertions, for handling unexpected runtime conditions."
      },
      jp: {
        title: "`assert`キーワード",
        body: "Javaにおける`assert`キーワードの目的は何ですか、またなぜ通常、本番環境では無効にされますか？",
        solution: "`assert`キーワードは**プログラムのアサーション**に使用されます。これは、常に真であるべきプログラムの状態に関する前提（例：内部開発チェック）をテストします。アサーションはデバッグとテストを目的としているため、本番環境では通常**無効**にされます。実行するとオーバーヘッドが発生し、アプリケーションは予期しない実行時条件の処理にアサーションではなく、堅牢な例外処理に依存すべきです。"
      },
      vi: {
        title: "Từ khóa `assert`",
        body: "Mục đích của từ khóa `assert` trong Java là gì, và tại sao nó thường bị vô hiệu hóa trong môi trường production?",
        solution: "Từ khóa `assert` được sử dụng cho **program assertions**—kiểm tra một giả định về trạng thái chương trình mà lẽ ra phải luôn đúng (ví dụ: trong các kiểm tra phát triển nội bộ). Nó thường **bị vô hiệu hóa** trong môi trường production vì các assertion được dùng cho việc gỡ lỗi và kiểm thử; việc chạy chúng sẽ làm tăng chi phí, và ứng dụng nên dựa vào xử lý ngoại lệ mạnh mẽ, chứ không phải assertion, để xử lý các điều kiện runtime không mong muốn."
    }
    }
  },
  {
    _id: "java-j-048",
    difficulty: "junior",
    tags: ["io", "system-in", "scanner"],
    content: {
      en: {
        title: "Reading Console Input",
        body: "Which class from `java.util` is commonly used to easily read primitive types and strings from standard input (`System.in`)?",
        solution: "The **`Scanner`** class from the `java.util` package is commonly used to parse primitive types and strings using regular expressions, making it the most straightforward way to read formatted input from the console."
      },
      jp: {
        title: "コンソール入力の読み取り",
        body: "標準入力（`System.in`）からプリミティブ型や文字列を簡単に読み取るために一般的に使用される`java.util`のどのクラスですか？",
        solution: "`java.util`パッケージの**`Scanner`**クラスは、正規表現を使用してプリミティブ型や文字列を解析するために一般的に使用され、コンソールからフォーマットされた入力を読み取る最も簡単な方法です。"
      },
      vi: {
        title: "Đọc Input từ Console",
        body: "Class nào từ `java.util` thường được sử dụng để dễ dàng đọc các kiểu dữ liệu primitive và chuỗi từ đầu vào tiêu chuẩn (`System.in`)?",
        solution: "Class **`Scanner`** từ gói `java.util` thường được sử dụng để phân tích các kiểu dữ liệu primitive và chuỗi bằng cách sử dụng biểu thức chính quy, làm cho nó trở thành cách đơn giản nhất để đọc input đã định dạng từ console."
    }
    }
  },
  {
    _id: "java-j-049",
    difficulty: "junior",
    tags: ["collections", "list", "arraylist"],
    content: {
      en: {
        title: "`ArrayList` capacity",
        body: "When an `ArrayList` reaches its current capacity limit and an element is added, what typically happens internally (in terms of resizing)?",
        solution: "When the limit is reached, a **new, larger internal array** is created (typically $1.5 \times$ or $1.5 \times + 1$ the original size). All elements from the old array are then **copied** to the new array, and the old array is marked for Garbage Collection."
      },
      jp: {
        title: "`ArrayList`の容量",
        body: "`ArrayList`が現在の容量制限に達し、要素が追加された場合、内部で通常何が起こりますか（サイズ変更に関して）？",
        solution: "制限に達すると、**新しい、より大きな内部配列**が作成されます（通常、元のサイズの$1.5 \times$または$1.5 \times + 1$）。次に、古い配列のすべての要素が新しい配列に**コピー**され、古い配列はガベージコレクションのためにマークされます。"
      },
      vi: {
        title: "Dung lượng `ArrayList`",
        body: "Khi một `ArrayList` đạt đến giới hạn dung lượng hiện tại và một phần tử được thêm vào, điều gì thường xảy ra bên trong (về mặt thay đổi kích thước)?",
        solution: "Khi đạt đến giới hạn, một **mảng nội bộ mới, lớn hơn** được tạo ra (thường là $1.5 \times$ hoặc $1.5 \times + 1$ kích thước ban đầu). Tất cả các phần tử từ mảng cũ sau đó được **sao chép** sang mảng mới, và mảng cũ được đánh dấu để Garbage Collection."
    }
    }
  },
  {
    _id: "java-j-050",
    difficulty: "junior",
    tags: ["keyword", "super", "constructor"],
    content: {
      en: {
        title: "`super()` in Subclass Constructor",
        body: "What is the significance of calling `super()` in the constructor of a subclass?",
        solution: "Calling `super()` is used to **invoke the constructor of the immediate superclass**. This ensures that the superclass's instance variables are properly initialized *before* the subclass's constructor continues. If `super()` is not explicitly called, the compiler automatically inserts a call to the parameterless default constructor (`super();`) as the first statement."
      },
      jp: {
        title: "サブクラスコンストラクターの`super()`",
        body: "サブクラスのコンストラクターで`super()`を呼び出すことの重要性は何ですか？",
        solution: "`super()`の呼び出しは、**直前のスーパークラスのコンストラクターを呼び出す**ために使用されます。これにより、スーパークラスのインスタンス変数が、サブクラスのコンストラクターが続行する*前に*適切に初期化されることが保証されます。`super()`が明示的に呼び出されない場合、コンパイラは最初のステートメントとしてパラメーターなしのデフォルトコンストラクター（`super();`）への呼び出しを自動的に挿入します。"
      },
      vi: {
        title: "`super()` trong Subclass Constructor",
        body: "Ý nghĩa của việc gọi `super()` trong constructor của một class con là gì?",
        solution: "Việc gọi `super()` được sử dụng để **gọi constructor của superclass trực tiếp**. Điều này đảm bảo rằng các biến instance của superclass được khởi tạo đúng cách *trước khi* constructor của class con tiếp tục. Nếu `super()` không được gọi tường minh, trình biên dịch sẽ tự động chèn một lời gọi đến constructor mặc định không tham số (`super();`) làm câu lệnh đầu tiên."
    }
    }
  }
];
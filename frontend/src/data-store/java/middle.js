export const javaMiddleQuestions = [
  {
    _id: "java-m-001",
    difficulty: "middle",
    tags: ["threading", "concurrency", "lock"],
    content: {
      en: {
        title: "`synchronized` vs `ReentrantLock`",
        body: "What is the key advantage of using `ReentrantLock` over the built-in `synchronized` keyword, especially regarding locking flexibility?",
        solution: "`ReentrantLock` (from `java.util.concurrent.locks`) offers more flexibility and control. Key advantages include: 1. **Timed Lock Acquisition** (`tryLock(timeout)`). 2. **Interruptible Locking** (`lockInterruptibly()`). 3. **Fairness Policy** (constructor option). `synchronized` is simpler but only supports block-scoped, non-interruptible, and non-timed locking."
      },
      jp: {
        title: "`synchronized` vs `ReentrantLock`",
        body: "特にロックの柔軟性に関して、組み込みの`synchronized`キーワードに対して`ReentrantLock`を使用する主な利点は何ですか？",
        solution: "`ReentrantLock`（`java.util.concurrent.locks`より）は、より高い柔軟性と制御を提供します。主な利点には、1. **時間指定ロック取得**（`tryLock(timeout)`）。 2. **割り込み可能なロック**（`lockInterruptibly()`）。 3. **公平性ポリシー**（コンストラクターオプション）。`synchronized`はより単純ですが、ブロックスコープ、非割り込み可能、非時間指定のロックのみをサポートします。"
      },
      vi: {
        title: "`synchronized` và `ReentrantLock`",
        body: "Lợi thế chính của việc sử dụng `ReentrantLock` so với từ khóa `synchronized` có sẵn là gì, đặc biệt liên quan đến tính linh hoạt của khóa?",
        solution: "`ReentrantLock` (từ `java.util.concurrent.locks`) cung cấp sự linh hoạt và kiểm soát cao hơn. Các lợi thế chính bao gồm: 1. **Khóa có thời gian** (`tryLock(timeout)`). 2. **Khóa có thể bị ngắt** (`lockInterruptibly()`). 3. **Chính sách công bằng** (tùy chọn trong constructor). `synchronized` đơn giản hơn nhưng chỉ hỗ trợ khóa trong phạm vi khối, không thể bị ngắt và không có thời gian."
      }
    }
  },
  {
    _id: "java-m-002",
    difficulty: "middle",
    tags: ["oop", "solid", "srp"],
    content: {
      en: {
        title: "Single Responsibility Principle (SRP)",
        body: "Explain the Single Responsibility Principle (SRP) and why violating it leads to fragile code.",
        solution: "SRP states that **a class should have only one reason to change**. It means a class should be responsible for only one part of the system's functionality. Violating SRP leads to fragile code because changes in one area of responsibility (e.g., database logic) might unintentionally break another area (e.g., business logic) within the same class."
      },
      jp: {
        title: "単一責任の原則 (SRP)",
        body: "単一責任の原則（SRP）を説明し、それに違反することがコードを脆弱にする理由を説明してください。",
        solution: "SRPは、**クラスが変更する理由を1つだけ持つべき**であると述べています。これは、クラスがシステムの機能の1つの部分のみに責任を持つべきであることを意味します。SRPに違反すると、責任の1つの領域（例：データベースロジック）での変更が、同じクラス内の別の領域（例：ビジネスロジック）を意図せず壊す可能性があるため、コードが脆弱になります。"
      },
      vi: {
        title: "Single Responsibility Principle (SRP)",
        body: "Giải thích Nguyên tắc Trách nhiệm duy nhất (SRP) và tại sao việc vi phạm nó dẫn đến mã dễ vỡ.",
        solution: "SRP tuyên bố rằng **một class chỉ nên có một lý do để thay đổi**. Điều này có nghĩa là một class chỉ nên chịu trách nhiệm cho một phần chức năng của hệ thống. Vi phạm SRP dẫn đến mã dễ vỡ vì các thay đổi trong một lĩnh vực trách nhiệm (ví dụ: logic cơ sở dữ liệu) có thể vô tình làm hỏng một lĩnh vực khác (ví dụ: logic nghiệp vụ) trong cùng một class."
      }
    }
  },
  {
    _id: "java-m-003",
    difficulty: "middle",
    tags: ["collections", "concurrency", "map"],
    content: {
      en: {
        title: "`ConcurrentHashMap`",
        body: "Why is `ConcurrentHashMap` generally preferred over a synchronized `HashMap` or `Hashtable` for concurrent operations?",
        solution: "`ConcurrentHashMap` offers much better performance than synchronized alternatives because it achieves thread safety without locking the entire map. It uses **fine-grained locking** (or lock-free algorithms in recent versions) where locks are only acquired for a portion (or 'segment') of the map during write operations, allowing **concurrent read operations** and many parallel write operations."
      },
      jp: {
        title: "`ConcurrentHashMap`",
        body: "同時操作において、`ConcurrentHashMap`が同期された`HashMap`や`Hashtable`よりも一般的に好まれるのはなぜですか？",
        solution: "`ConcurrentHashMap`は、マップ全体をロックせずにスレッドセーフティを実現するため、同期された代替手段よりもはるかに優れたパフォーマンスを提供します。書き込み操作中にマップの一部（または『セグメント』）に対してのみロックが取得される**きめ細かなロック**（または最新バージョンではロックフリーアルゴリズム）を使用するため、**同時読み取り操作**と多くの並行書き込み操作が可能になります。"
      },
      vi: {
        title: "`ConcurrentHashMap`",
        body: "Tại sao `ConcurrentHashMap` thường được ưu tiên hơn `HashMap` hoặc `Hashtable` được đồng bộ hóa cho các thao tác đồng thời (concurrent operations)?",
        solution: "`ConcurrentHashMap` cung cấp hiệu suất tốt hơn nhiều so với các giải pháp thay thế được đồng bộ hóa vì nó đạt được tính an toàn luồng mà không cần khóa toàn bộ map. Nó sử dụng **khóa chi tiết (fine-grained locking)** (hoặc thuật toán không khóa trong các phiên bản gần đây), trong đó khóa chỉ được giành cho một phần (hoặc 'segment') của map trong quá trình ghi, cho phép **các thao tác đọc đồng thời** và nhiều thao tác ghi song song."
      }
    }
  },
  {
    _id: "java-m-004",
    difficulty: "middle",
    tags: ["jvm", "memory", "heap"],
    content: {
      en: {
        title: "JVM Heap Regions",
        body: "Name the two primary regions (Generations) of the JVM Heap memory and briefly state their purpose in Garbage Collection.",
        solution: "1. **Young Generation (or Eden/Survivor Spaces):** This is where new objects are initially allocated. Most objects die here quickly (minor GC). 2. **Old Generation (or Tenured Space):** Objects that survive multiple garbage collection cycles in the Young Generation are moved (tenured) here. This region is collected less frequently (major GC)."
      },
      jp: {
        title: "JVMヒープ領域",
        body: "JVMヒープメモリの2つの主要な領域（世代）の名前を挙げ、ガベージコレクションにおけるそれらの目的を簡単に述べてください。",
        solution: "1. **Young Generation（またはEden/Survivorスペース）：** 新しいオブジェクトが最初に割り当てられる場所です。ほとんどのオブジェクトはここで迅速に消滅します（マイナーGC）。 2. **Old Generation（またはTenuredスペース）：** Young Generationで複数のガベージコレクションサイクルを生き残ったオブジェクトは、ここに移動されます。この領域は、より頻繁に回収されます（メジャーGC）。"
      },
      vi: {
        title: "Các Vùng Heap của JVM",
        body: "Nêu tên hai vùng chính (Generations) của bộ nhớ Heap trong JVM và mô tả ngắn gọn mục đích của chúng trong Garbage Collection.",
        solution: "1. **Young Generation (hoặc Eden/Survivor Spaces):** Đây là nơi các đối tượng mới được phân bổ ban đầu. Hầu hết các đối tượng chết ở đây nhanh chóng (minor GC). 2. **Old Generation (hoặc Tenured Space):** Các đối tượng tồn tại qua nhiều chu kỳ thu gom rác ở Young Generation được chuyển đến đây. Vùng này được thu gom ít thường xuyên hơn (major GC)."
      }
    }
  },
  {
    _id: "java-m-005",
    difficulty: "middle",
    tags: ["design", "pattern", "builder"],
    content: {
      en: {
        title: "Builder Pattern Need",
        body: "Explain why the Builder Pattern is useful when creating objects, especially in Java, and what problem it solves that standard constructors don't.",
        solution: "The Builder Pattern is useful when a class has a **large number of optional parameters**. It solves the problems of the **Telescoping Constructor** pattern (where you create many constructors with increasing numbers of arguments) and improves **readability**. It allows creating immutable objects with many parameters without passing nulls or worrying about the order of arguments."
      },
      jp: {
        title: "ビルダーパターンの必要性",
        body: "特にJavaでオブジェクトを作成する際に、ビルダーパターンが役立つ理由と、標準のコンストラクターでは解決できないどの問題を解決するかを説明してください。",
        solution: "ビルダーパターンは、クラスが**多数のオプションのパラメーター**を持っている場合に役立ちます。それは、**テレスコーピングコンストラクター**パターン（引数の数が増える多くのコンストラクターを作成する）の問題を解決し、**可読性**を向上させます。これにより、nullを渡したり、引数の順序を気にしたりすることなく、多数のパラメーターを持つ不変のオブジェクトを作成できます。"
      },
      vi: {
        title: "Nhu cầu Builder Pattern",
        body: "Giải thích tại sao Builder Pattern hữu ích khi tạo đối tượng, đặc biệt trong Java, và vấn đề nó giải quyết mà các constructor tiêu chuẩn không làm được.",
        solution: "Builder Pattern hữu ích khi một class có **số lượng lớn các tham số tùy chọn**. Nó giải quyết vấn đề của mẫu **Telescoping Constructor** (nơi bạn tạo nhiều constructor với số lượng đối số tăng dần) và cải thiện **tính dễ đọc**. Nó cho phép tạo các đối tượng bất biến với nhiều tham số mà không cần truyền null hoặc lo lắng về thứ tự của các đối số."
      }
    }
  },
  {
    _id: "java-m-006",
    difficulty: "middle",
    tags: ["threading", "executor", "threadpool"],
    content: {
      en: {
        title: "Thread Pool Benefits",
        body: "What is a Java Thread Pool (using `ExecutorService`), and what are the two main benefits it provides over creating a new `Thread` for every task?",
        solution: "A Thread Pool is a managed collection of worker threads that are reused to execute tasks. The main benefits are: 1. **Reduced Overhead:** It eliminates the high overhead of creating and destroying threads for every task. 2. **Resource Management:** It limits the number of concurrently running threads, preventing system resource exhaustion and improving stability."
      },
      jp: {
        title: "スレッドプールの利点",
        body: "Javaスレッドプール（`ExecutorService`を使用）とは何ですか、またタスクごとに新しい`Thread`を作成するよりも提供される主な2つの利点は何ですか？",
        solution: "スレッドプールは、タスクを実行するために再利用されるワーカー（作業者）スレッドの管理されたコレクションです。主な利点は次のとおりです: 1. **オーバーヘッドの削減:** タスクごとにスレッドを作成および破棄する高いオーバーヘッドを排除します。 2. **リソース管理:** 同時に実行されるスレッドの数を制限し、システムリソースの枯渇を防ぎ、安定性を向上させます。"
      },
      vi: {
        title: "Lợi ích của Thread Pool",
        body: "Java Thread Pool (sử dụng `ExecutorService`) là gì, và hai lợi ích chính nó cung cấp so với việc tạo một `Thread` mới cho mỗi tác vụ là gì?",
        solution: "Thread Pool là một tập hợp được quản lý của các luồng công nhân được tái sử dụng để thực thi các tác vụ. Các lợi ích chính là: 1. **Giảm chi phí (Overhead):** Nó loại bỏ chi phí cao của việc tạo và hủy luồng cho mỗi tác vụ. 2. **Quản lý tài nguyên:** Nó giới hạn số lượng luồng chạy đồng thời, ngăn ngừa cạn kiệt tài nguyên hệ thống và cải thiện sự ổn định."
      }
    }
  },
  {
    _id: "java-m-007",
    difficulty: "middle",
    tags: ["generic", "wildcard", "pecs"],
    content: {
      en: {
        title: "PECS Principle (Generics Wildcards)",
        body: "Explain the PECS principle in Java Generics (Producers Extends, Consumers Super), focusing on when to use `? extends T` and `? super T`.",
        solution: "**PECS** stands for **Producer Extends, Consumer Super**. Use **`? extends T`** when the generic type is acting as a **Producer** (only returning T or its subtypes, thus you can only read/get). Use **`? super T`** when the generic type is acting as a **Consumer** (only accepting T or its supertypes as input, thus you can only write/put)."
      },
      jp: {
        title: "PECS原則（ジェネリクスワイルドカード）",
        body: "JavaジェネリクスにおけるPECS原則（Producers Extends, Consumers Super）を、`? extends T`と`? super T`をいつ使用するかに焦点を当てて説明してください。",
        solution: "**PECS**は**Producer Extends, Consumer Super**の略です。ジェネリック型が**Producer**（Tまたはそのサブタイプのみを返す、つまり読み取り/取得のみが可能）として機能している場合は**`? extends T`**を使用します。ジェネリック型が**Consumer**（Tまたはそのスーパータイプのみを入力として受け入れる、つまり書き込み/挿入のみが可能）として機能している場合は**`? super T`**を使用します。"
      },
      vi: {
        title: "Nguyên tắc PECS (Generics Wildcards)",
        body: "Giải thích nguyên tắc PECS trong Java Generics (Producers Extends, Consumers Super), tập trung vào khi nào sử dụng `? extends T` và `? super T`.",
        solution: "**PECS** là viết tắt của **Producer Extends, Consumer Super**. Sử dụng **`? extends T`** khi kiểu generic hoạt động như một **Producer** (chỉ trả về T hoặc các kiểu con của nó, do đó bạn chỉ có thể đọc/lấy). Sử dụng **`? super T`** khi kiểu generic hoạt động như một **Consumer** (chỉ chấp nhận T hoặc các kiểu cha của nó làm đầu vào, do đó bạn chỉ có thể ghi/đặt)."
      }
    }
  },
  {
    _id: "java-m-008",
    difficulty: "middle",
    tags: ["stream", "optional", "null-pointer"],
    content: {
      en: {
        title: "`Optional<T>` usage",
        body: "What is the primary purpose of the `Optional<T>` class (Java 8), and how does it help in writing cleaner code?",
        solution: "`Optional<T>` is a container object that may or may not contain a non-null value. Its primary purpose is to **provide a clear, explicit way to signal the absence of a value** instead of returning `null`. This forces developers to actively consider the null case, which helps in preventing **`NullPointerException`** and writing cleaner, more readable code through methods like `orElse()`, `orElseGet()`, and `ifPresent()`."
      },
      jp: {
        title: "`Optional<T>`の使用法",
        body: "`Optional<T>`クラス（Java 8）の主な目的は何ですか、またそれはよりクリーンなコードを書くのにどのように役立ちますか？",
        solution: "`Optional<T>`は、非null値を含む場合と含まない場合があるコンテナオブジェクトです。その主な目的は、`null`を返す代わりに、**値の欠如を明確かつ明示的に通知する方法を提供すること**です。これにより、開発者は`orElse()`、`orElseGet()`、`ifPresent()`などのメソッドを通じて、nullケースを積極的に考慮することが強制され、**`NullPointerException`**を防ぎ、よりクリーンで読みやすいコードを書くのに役立ちます。"
      },
      vi: {
        title: "Sử dụng `Optional<T>`",
        body: "Mục đích chính của class `Optional<T>` (Java 8) là gì, và nó giúp viết mã sạch hơn như thế nào?",
        solution: "`Optional<T>` là một đối tượng chứa có thể chứa hoặc không chứa giá trị không null. Mục đích chính của nó là **cung cấp một cách rõ ràng, tường minh để báo hiệu sự vắng mặt của một giá trị** thay vì trả về `null`. Điều này buộc các nhà phát triển phải tích cực xem xét trường hợp null, giúp ngăn chặn **`NullPointerException`** và viết mã sạch hơn, dễ đọc hơn thông qua các phương thức như `orElse()`, `orElseGet()`, và `ifPresent()`."
      }
    }
  },
  {
    _id: "java-m-009",
    difficulty: "middle",
    tags: ["oop", "liskov", "solid"],
    content: {
      en: {
        title: "Liskov Substitution Principle (LSP)",
        body: "Explain the Liskov Substitution Principle (LSP) with a focus on what it means for a subclass to be substitutable for its superclass.",
        solution: "LSP states that **objects of a superclass should be replaceable with objects of its subclasses without breaking the application**. In simpler terms, if class $S$ is a subclass of class $T$, then objects of $T$ should be replaceable by objects of $S$ without causing unexpected behavior. This often means subclasses should not strengthen preconditions or weaken postconditions."
      },
      jp: {
        title: "リスコフの置換原則 (LSP)",
        body: "サブクラスがスーパークラスの代わりに置換可能であるという意味に焦点を当てて、リスコフの置換原則（LSP）を説明してください。",
        solution: "LSPは、**スーパークラスのオブジェクトは、アプリケーションを壊すことなく、そのサブクラスのオブジェクトに置き換えられるべき**であると述べています。簡単に言えば、クラス$S$がクラス$T$のサブクラスである場合、オブジェクト$T$はオブジェクト$S$によって予期しない動作を引き起こすことなく置き換え可能でなければなりません。これは通常、サブクラスが事前条件を強化したり、事後条件を弱めたりしてはならないことを意味します。"
      },
      vi: {
        title: "Liskov Substitution Principle (LSP)",
        body: "Giải thích Nguyên tắc Thay thế Liskov (LSP) với trọng tâm là ý nghĩa của việc một class con có thể thay thế cho class cha của nó.",
        solution: "LSP tuyên bố rằng **các đối tượng của một class cha có thể thay thế bằng các đối tượng của các class con của nó mà không làm hỏng ứng dụng**. Nói một cách đơn giản hơn, nếu class $S$ là class con của class $T$, thì các đối tượng của $T$ phải có thể thay thế bằng các đối tượng của $S$ mà không gây ra hành vi không mong muốn. Điều này thường có nghĩa là các class con không nên tăng cường điều kiện tiên quyết (precondition) hoặc làm suy yếu điều kiện hậu quả (postcondition)."
      }
    }
  },
  {
    _id: "java-m-010",
    difficulty: "middle",
    tags: ["threading", "concurrency", "atomicity"],
    content: {
      en: {
        title: "Atomic Variables",
        body: "What is the purpose of the `Atomic` classes (like `AtomicInteger`) in the `java.util.concurrent.atomic` package, and what mechanism do they use to ensure atomicity without explicit locking?",
        solution: "The `Atomic` classes provide **lock-free thread safety** for simple variables. They ensure that an operation (like incrementing a counter) is performed atomically (all-or-nothing). They achieve this using hardware-level support via the **Compare-And-Swap (CAS)** operation, which checks if the value has changed since it was last read before attempting to update it."
      },
      jp: {
        title: "アトミック変数",
        body: "`java.util.concurrent.atomic`パッケージの`Atomic`クラス（`AtomicInteger`など）の目的は何ですか、また明示的なロックなしでアトミシティを確保するためにどのようなメカニズムを使用していますか？",
        solution: "`Atomic`クラスは、単純な変数に対して**ロックフリーのスレッドセーフティ**を提供します。これらは、操作（カウンターのインクリメントなど）がアトミックに（すべて実行されるか、全く実行されない）実行されることを保証します。これらは、値を更新しようとする前に、最後に読み取られてから値が変更されていないかを確認する**Compare-And-Swap（CAS）**操作を介してハードウェアレベルのサポートを使用してこれを実現します。"
      },
      vi: {
        title: "Biến Atomic",
        body: "Mục đích của các class `Atomic` (như `AtomicInteger`) trong gói `java.util.concurrent.atomic` là gì, và cơ chế nào chúng sử dụng để đảm bảo tính nguyên tử (atomicity) mà không cần khóa tường minh?",
        solution: "Các class `Atomic` cung cấp **tính an toàn luồng không khóa (lock-free thread safety)** cho các biến đơn giản. Chúng đảm bảo rằng một thao tác (như tăng bộ đếm) được thực hiện một cách nguyên tử (hoàn thành tất cả hoặc không gì cả). Chúng đạt được điều này bằng cách sử dụng hỗ trợ cấp độ phần cứng thông qua thao tác **Compare-And-Swap (CAS)**, thao tác này kiểm tra xem giá trị đã thay đổi kể từ lần đọc cuối cùng trước khi cố gắng cập nhật nó."
      }
    }
  },
  {
    _id: "java-m-011",
    difficulty: "middle",
    tags: ["stream", "collectors", "grouping"],
    content: {
      en: {
        title: "Stream `collect(Collectors.groupingBy)`",
        body: "In the Java Stream API, explain the function of the `Collectors.groupingBy()` collector and provide an example of its typical return type.",
        solution: "The `Collectors.groupingBy()` collector is a terminal operation used to **group elements of a stream into a `Map`**. The key of the map is the result of applying a classification function to the elements, and the value is typically a `List` of all elements mapping to that key. **Example Return Type:** `Map<KeyType, List<ElementType>>`."
      },
      jp: {
        title: "Stream `collect(Collectors.groupingBy)`",
        body: "Java Stream APIにおいて、`Collectors.groupingBy()`コレクターの機能を説明し、その典型的な戻り値の型の例を挙げてください。",
        solution: "`Collectors.groupingBy()`コレクターは、**ストリームの要素を`Map`にグループ化する**ために使用される終端操作です。マップのキーは、分類関数を要素に適用した結果であり、値は通常、そのキーにマップされるすべての要素の`List`です。**戻り値の型の例:** `Map<KeyType, List<ElementType>>`。"
      },
      vi: {
        title: "Stream `collect(Collectors.groupingBy)`",
        body: "Trong Java Stream API, giải thích chức năng của collector `Collectors.groupingBy()` và cung cấp một ví dụ về kiểu trả về điển hình của nó.",
        solution: "Collector `Collectors.groupingBy()` là một thao tác kết thúc được sử dụng để **nhóm các phần tử của một stream vào một `Map`**. Khóa của map là kết quả của việc áp dụng một hàm phân loại cho các phần tử, và giá trị thường là một `List` của tất cả các phần tử ánh xạ tới khóa đó. **Ví dụ về Kiểu Trả về:** `Map<KeyType, List<ElementType>>`."
      }
    }
  },
  {
    _id: "java-m-012",
    difficulty: "middle",
    tags: ["oop", "interface", "lambda"],
    content: {
      en: {
        title: "SAM Interface",
        body: "What does the acronym 'SAM' stand for in the context of Java interfaces, and what feature does it enable?",
        solution: "**SAM** stands for **Single Abstract Method**. A SAM interface is synonymous with a **Functional Interface**. The presence of only one abstract method enables the use of **Lambda Expressions** and **Method References** to implement that interface, greatly simplifying code and facilitating functional programming style."
      },
      jp: {
        title: "SAMインターフェース",
        body: "Javaインターフェースの文脈で、頭字語『SAM』は何の略ですか、またそれが可能にする機能は何ですか？",
        solution: "**SAM**は**Single Abstract Method**の略です。SAMインターフェースは**関数型インターフェース**と同義です。抽象メソッドが1つしかないという存在により、そのインターフェースを実装するために**ラムダ式**と**メソッド参照**を使用することが可能になり、コードを大幅に簡素化し、関数型プログラミングスタイルを容易にします。"
      },
      vi: {
        title: "SAM Interface",
        body: "Từ viết tắt 'SAM' là viết tắt của từ gì trong bối cảnh các interface của Java, và tính năng nào nó cho phép?",
        solution: "**SAM** là viết tắt của **Single Abstract Method**. Một SAM interface đồng nghĩa với một **Functional Interface**. Sự hiện diện của chỉ một phương thức trừu tượng cho phép sử dụng **Biểu thức Lambda** và **Tham chiếu Phương thức** để implement interface đó, làm đơn giản hóa đáng kể mã và tạo điều kiện cho phong cách lập trình hàm."
      }
    }
  },
  {
    _id: "java-m-013",
    difficulty: "middle",
    tags: ["design", "pattern", "factory"],
    content: {
      en: {
        title: "Factory Method Pattern",
        body: "What is the primary goal of the Factory Method pattern, and what is its main advantage over creating objects directly using the `new` keyword?",
        solution: "The primary goal is to **define an interface for creating an object, but let subclasses decide which class to instantiate**. The main advantage is that it **decouples the client code from the concrete class** being created. The client only deals with the interface/abstract class, making the system more flexible, maintainable, and open to adding new product types."
      },
      jp: {
        title: "ファクトリーメソッドパターン",
        body: "ファクトリーメソッドパターンの主な目的は何ですか、また`new`キーワードを使用してオブジェクトを直接作成することに対する主な利点は何ですか？",
        solution: "主な目的は、**オブジェクトを作成するためのインターフェースを定義するが、インスタンス化するクラスをサブクラスに決定させる**ことです。主な利点は、作成される**具象クラスからクライアントコードを切り離す**ことです。クライアントはインターフェース/抽象クラスのみを扱い、システムをより柔軟で保守しやすく、新しい製品タイプの追加に対してオープンにします。"
      },
      vi: {
        title: "Factory Method Pattern",
        body: "Mục tiêu chính của mẫu Factory Method là gì, và lợi thế chính của nó so với việc tạo đối tượng trực tiếp bằng từ khóa `new` là gì?",
        solution: "Mục tiêu chính là **xác định một interface để tạo đối tượng, nhưng để các class con quyết định class nào sẽ được khởi tạo**. Lợi thế chính là nó **tách rời mã client khỏi class cụ thể** đang được tạo. Client chỉ làm việc với interface/class trừu tượng, làm cho hệ thống linh hoạt hơn, dễ bảo trì hơn và mở cửa cho việc thêm các loại sản phẩm mới."
      }
    }
  },
  {
    _id: "java-m-014",
    difficulty: "middle",
    tags: ["threading", "concurrency", "future"],
    content: {
      en: {
        title: "`Callable` vs `Runnable`",
        body: "What are the two key differences between the `Callable` interface and the `Runnable` interface in Java concurrency, especially concerning return values and exceptions?",
        solution: "1. **Return Value:** `Runnable`'s `run()` method returns `void`, while `Callable`'s `call()` method returns a result of type `V` (handled via the `Future` object). 2. **Exceptions:** `Runnable`'s `run()` cannot throw checked exceptions, while `Callable`'s `call()` method **can throw checked exceptions**."
      },
      jp: {
        title: "`Callable` vs `Runnable`",
        body: "Javaの並行処理において、`Callable`インターフェースと`Runnable`インターフェースの間の2つの主な違いは何ですか、特に戻り値と例外に関して？",
        solution: "1. **戻り値:** `Runnable`の`run()`メソッドは`void`を返しますが、`Callable`の`call()`メソッドは型`V`の結果を返します（`Future`オブジェクトを介して処理されます）。 2. **例外:** `Runnable`の`run()`はチェック例外をスローできませんが、`Callable`の`call()`メソッドは**チェック例外をスローできます**。"
      },
      vi: {
        title: "`Callable` và `Runnable`",
        body: "Hai khác biệt chính giữa interface `Callable` và interface `Runnable` trong concurrency của Java là gì, đặc biệt liên quan đến giá trị trả về và ngoại lệ?",
        solution: "1. **Giá trị Trả về:** Phương thức `run()` của `Runnable` trả về `void`, trong khi phương thức `call()` của `Callable` trả về một kết quả kiểu `V` (được xử lý thông qua đối tượng `Future`). 2. **Ngoại lệ:** Phương thức `run()` của `Runnable` không thể ném checked exception, trong khi phương thức `call()` của `Callable` **có thể ném checked exception**."
      }
    }
  },
  {
    _id: "java-m-015",
    difficulty: "middle",
    tags: ["collections", "treeset", "custom-sort"],
    content: {
      en: {
        title: "`TreeSet` Custom Objects",
        body: "When a custom object is inserted into a `TreeSet`, what is the minimum requirement for that class to ensure the `TreeSet` can order and store the elements without crashing?",
        solution: "The custom class must implement the **`Comparable`** interface (and override the `compareTo()` method) to define its natural ordering. Alternatively, a **`Comparator`** must be provided when the `TreeSet` is constructed."
      },
      jp: {
        title: "`TreeSet`カスタムオブジェクト",
        body: "カスタムオブジェクトが`TreeSet`に挿入されるとき、`TreeSet`がクラッシュすることなく要素を順序付けおよび格納できることを保証するために、そのクラスが満たさなければならない最小要件は何ですか？",
        solution: "カスタムクラスは、自然な順序付けを定義するために**`Comparable`**インターフェースを実装し（そして`compareTo()`メソッドをオーバーライド）なければなりません。あるいは、`TreeSet`が構築されるときに**`Comparator`**を提供する必要があります。"
      },
      vi: {
        title: "Đối tượng tùy chỉnh trong `TreeSet`",
        body: "Khi một đối tượng tùy chỉnh được chèn vào một `TreeSet`, yêu cầu tối thiểu nào đối với class đó để đảm bảo `TreeSet` có thể sắp xếp và lưu trữ các phần tử mà không bị lỗi?",
        solution: "Class tùy chỉnh phải implement interface **`Comparable`** (và ghi đè phương thức `compareTo()`) để định nghĩa thứ tự tự nhiên của nó. Ngoài ra, một **`Comparator`** phải được cung cấp khi `TreeSet` được xây dựng."
      }
    }
  },
  {
    _id: "java-m-016",
    difficulty: "middle",
    tags: ["reflection", "security"],
    content: {
      en: {
        title: "Reflection drawbacks",
        body: "Name two significant drawbacks or risks associated with using Java Reflection in application code.",
        solution: "1. **Performance Overhead:** Reflection involves dynamic lookups at runtime, which is significantly slower than direct method calls. 2. **Exposure of Internal State:** It breaks encapsulation by allowing access and modification of `private` members. 3. **Reduced Type Safety:** Operations are checked at runtime, not compile time, leading to potential `ClassCastException` or `InvocationTargetException`."
      },
      jp: {
        title: "リフレクションの欠点",
        body: "アプリケーションコードでJavaリフレクションを使用することに関連する2つの重大な欠点またはリスクを挙げてください。",
        solution: "1. **パフォーマンスオーバーヘッド:** リフレクションには実行時の動的なルックアップが伴い、直接的なメソッド呼び出しよりも著しく遅いです。 2. **内部状態の公開:** `private`メンバーへのアクセスと変更を許可することにより、カプセル化を破ります。 3. **型安全性の低下:** 操作はコンパイル時ではなく実行時にチェックされるため、潜在的な`ClassCastException`や`InvocationTargetException`につながります。"
      },
      vi: {
        title: "Hạn chế của Reflection",
        body: "Nêu hai nhược điểm hoặc rủi ro đáng kể liên quan đến việc sử dụng Java Reflection trong mã ứng dụng.",
        solution: "1. **Chi phí Hiệu suất (Overhead):** Reflection liên quan đến việc tra cứu động tại thời điểm chạy, điều này chậm hơn đáng kể so với các lời gọi phương thức trực tiếp. 2. **Lộ trạng thái nội bộ:** Nó phá vỡ tính đóng gói (encapsulation) bằng cách cho phép truy cập và sửa đổi các thành viên `private`. 3. **Giảm tính an toàn kiểu:** Các thao tác được kiểm tra tại thời điểm chạy, không phải thời điểm biên dịch, dẫn đến khả năng xảy ra `ClassCastException` hoặc `InvocationTargetException`."
      }
    }
  },
  {
    _id: "java-m-017",
    difficulty: "middle",
    tags: ["stream", "reduce", "aggregate"],
    content: {
      en: {
        title: "Stream `reduce()` method",
        body: "What is the purpose of the `reduce()` terminal operation in the Stream API, and what kind of result does it produce?",
        solution: "The `reduce()` method is a **terminal operation** that applies a combining function (like summing, finding max/min, or merging) repeatedly to the elements of the stream until a **single summary result** is produced. It performs an aggregation on the stream's elements. The result is typically an `Optional<T>` if no initial value is provided, or $T$ otherwise."
      },
      jp: {
        title: "Stream `reduce()`メソッド",
        body: "Stream APIにおける`reduce()`終端操作の目的は何ですか、またそれはどのような種類の結果を生成しますか？",
        solution: "`reduce()`メソッドは、結合関数（合計、最大/最小の検索、マージなど）をストリームの要素に繰り返し適用し、**単一の要約結果**が生成されるまで行う**終端操作**です。ストリームの要素に対して集約を実行します。結果は、初期値が提供されない場合は通常`Optional<T>`であり、そうでない場合は$T$です。"
      },
      vi: {
        title: "Phương thức Stream `reduce()`",
        body: "Mục đích của thao tác kết thúc `reduce()` trong Stream API là gì, và nó tạo ra loại kết quả nào?",
        solution: "Phương thức `reduce()` là một **thao tác kết thúc** áp dụng một hàm kết hợp (như tính tổng, tìm max/min, hoặc hợp nhất) lặp đi lặp lại cho các phần tử của stream cho đến khi một **kết quả tóm tắt duy nhất** được tạo ra. Nó thực hiện một sự tổng hợp trên các phần tử của stream. Kết quả điển hình là một `Optional<T>` nếu không có giá trị ban đầu được cung cấp, hoặc $T$ nếu có."
      }
    }
  },
  {
    _id: "java-m-018",
    difficulty: "middle",
    tags: ["design", "pattern", "dependency-injection"],
    content: {
      en: {
        title: "Open/Closed Principle (OCP)",
        body: "Explain the Open/Closed Principle (OCP) from SOLID and how interfaces/abstract classes help adhere to it.",
        solution: "OCP states that **software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification**. This means you should be able to add new functionality (extension) without changing the existing, working code (modification). Interfaces and Abstract Classes facilitate this by providing fixed contracts that can be implemented by new subclasses, allowing the calling code to remain unchanged."
      },
      jp: {
        title: "オープン/クローズドの原則 (OCP)",
        body: "SOLIDのオープン/クローズドの原則（OCP）と、インターフェース/抽象クラスがそれに従うのにどのように役立つかを説明してください。",
        solution: "OCPは、**ソフトウェアエンティティ（クラス、モジュール、関数など）は拡張に対しては開かれていなければならないが、変更に対しては閉じられていなければならない**と述べています。これは、既存の動作するコードを変更することなく（変更に対して閉じる）、新しい機能を追加できる（拡張に対して開く）べきであることを意味します。インターフェースと抽象クラスは、新しいサブクラスで実装できる固定された契約を提供することにより、これを容易にし、呼び出し元のコードが変更されないままでいることを可能にします。"
      },
      vi: {
        title: "Open/Closed Principle (OCP)",
        body: "Giải thích Nguyên tắc Mở/Đóng (OCP) từ SOLID và cách các interface/abstract class giúp tuân thủ nguyên tắc này.",
        solution: "OCP tuyên bố rằng **các thực thể phần mềm (class, module, hàm, v.v.) phải mở để mở rộng, nhưng đóng để sửa đổi**. Điều này có nghĩa là bạn phải có khả năng thêm chức năng mới (mở rộng) mà không thay đổi mã hiện có, đang hoạt động (đóng để sửa đổi). Các Interface và Abstract Class tạo điều kiện cho điều này bằng cách cung cấp các hợp đồng cố định có thể được implement bởi các class con mới, cho phép mã gọi vẫn giữ nguyên."
      }
    }
  },
  {
    _id: "java-m-019",
    difficulty: "middle",
    tags: ["jvm", "classloader"],
    content: {
      en: {
        title: "Class Loaders Hierarchy",
        body: "Name the three main built-in Class Loaders in the standard Java environment and briefly describe the classes they load.",
        solution: "1. **Bootstrap Class Loader:** Loads core Java classes (like `String.class`) from the **$JAVA\_HOME/jre/lib** directory (or equivalent). 2. **Extension Class Loader:** Loads classes from the **extensions directory** (**$JAVA\_HOME/jre/lib/ext**). 3. **System/Application Class Loader:** Loads application classes from the **CLASSPATH**."
      },
      jp: {
        title: "クラスローダー階層",
        body: "標準Java環境における3つの主要な組み込みクラスローダーの名前を挙げ、それらがロードするクラスを簡単に説明してください。",
        solution: "1. **Bootstrap Class Loader:** コアJavaクラス（`String.class`など）を**$JAVA\_HOME/jre/lib**ディレクトリ（または同等のディレクトリ）からロードします。 2. **Extension Class Loader:** **拡張ディレクトリ**（**$JAVA\_HOME/jre/lib/ext**）からクラスをロードします。 3. **System/Application Class Loader:** **CLASSPATH**からアプリケーションクラスをロードします。"
      },
      vi: {
        title: "Hệ thống Class Loaders",
        body: "Nêu tên ba Class Loader có sẵn chính trong môi trường Java tiêu chuẩn và mô tả ngắn gọn các class mà chúng tải.",
        solution: "1. **Bootstrap Class Loader:** Tải các class Java cốt lõi (như `String.class`) từ thư mục **$JAVA\_HOME/jre/lib** (hoặc tương đương). 2. **Extension Class Loader:** Tải các class từ **thư mục mở rộng** (**$JAVA\_HOME/jre/lib/ext**). 3. **System/Application Class Loader:** Tải các class ứng dụng từ **CLASSPATH**."
      }
    }
  },
  {
    _id: "java-m-020",
    difficulty: "middle",
    tags: ["reflection", "ioc"],
    content: {
      en: {
        title: "Reflection in Frameworks",
        body: "Explain how frameworks like Spring or Hibernate use Reflection (or code generation) to achieve Inversion of Control (IoC) or run-time object manipulation.",
        solution: "Frameworks use Reflection to dynamically inspect, instantiate, and manage classes at runtime. For IoC/DI, they use Reflection to: 1. **Read Annotations** (e.g., `@Autowired`, `@Component`) to identify dependencies. 2. **Instantiate Objects** using private constructors if necessary. 3. **Inject Dependencies** by setting private fields or invoking setter methods. This is fundamental to implementing the **Inversion of Control** container."
      },
      jp: {
        title: "フレームワークにおけるリフレクション",
        body: "SpringやHibernateのようなフレームワークが、制御の反転（IoC）や実行時オブジェクト操作を実現するために、リフレクション（またはコード生成）をどのように使用するかを説明してください。",
        solution: "フレームワークはリフレクションを使用して、実行時にクラスを動的に検査、インスタンス化、および管理します。IoC/DIの場合、リフレクションを使用して次のことを行います: 1. **アノテーションの読み取り**（例：`@Autowired`、`@Component`）により依存関係を識別します。 2. 必要に応じてプライベートコンストラクターを使用して**オブジェクトをインスタンス化**します。 3. プライベートフィールドを設定するか、セッターメソッドを呼び出すことにより**依存関係を注入**します。これは**制御の反転**コンテナの実装の基本です。"
      },
      vi: {
        title: "Reflection trong Frameworks",
        body: "Giải thích cách các framework như Spring hoặc Hibernate sử dụng Reflection (hoặc tạo mã) để đạt được Inversion of Control (IoC) hoặc thao tác đối tượng trong thời gian chạy.",
        solution: "Các Framework sử dụng Reflection để kiểm tra, khởi tạo và quản lý các class một cách động trong thời gian chạy. Đối với IoC/DI, chúng sử dụng Reflection để: 1. **Đọc Annotations** (ví dụ: `@Autowired`, `@Component`) để xác định các dependency. 2. **Khởi tạo đối tượng** bằng cách sử dụng các constructor private nếu cần. 3. **Inject Dependency** bằng cách đặt các trường private hoặc gọi các phương thức setter. Điều này là cơ bản để triển khai container **Inversion of Control**."
      }
    }
  },
  {
    _id: "java-m-021",
    difficulty: "middle",
    tags: ["collections", "hashmap", "performance"],
    content: {
      en: {
        title: "Hash Collision Performance",
        body: "How does a high number of hash collisions in a `HashMap` affect its performance, and what data structure change (since Java 8) helps mitigate this?",
        solution: "A high number of collisions degrades performance because multiple keys map to the same bucket index. This forces the `HashMap` to traverse the **linked list** at that index linearly, turning the average lookup time from $O(1)$ to **$O(n)$** (worst case). Since Java 8, if a bucket's linked list exceeds a certain threshold (usually 8), the linked list is automatically converted to a **balanced Red-Black Tree**, improving worst-case lookup time back to **$O(\log n)$**."
      },
      jp: {
        title: "ハッシュ衝突のパフォーマンス",
        body: "`HashMap`での多数のハッシュ衝突は、そのパフォーマンスにどのように影響しますか、またこれを軽減するのに役立つデータ構造の変更（Java 8以降）は何ですか？",
        solution: "多数の衝突は、複数のキーが同じバケットインデックスにマッピングされるため、パフォーマンスを低下させます。これにより、`HashMap`はそのインデックスの**連結リスト**を線形に走査することを余儀なくされ、平均ルックアップ時間が$O(1)$から**$O(n)$**（最悪の場合）になります。Java 8以降、バケットの連結リストが特定のしきい値（通常は8）を超えると、連結リストは自動的に**バランスの取れた赤黒木**に変換され、最悪のケースのルックアップ時間が**$O(\log n)$**に改善されます。"
      },
      vi: {
        title: "Hiệu suất Hash Collision",
        body: "Số lượng lớn xung đột hash (hash collision) trong một `HashMap` ảnh hưởng đến hiệu suất của nó như thế nào, và thay đổi cấu trúc dữ liệu nào (kể từ Java 8) giúp giảm thiểu điều này?",
        solution: "Số lượng lớn xung đột làm giảm hiệu suất vì nhiều khóa ánh xạ đến cùng một chỉ mục bucket. Điều này buộc `HashMap` phải duyệt qua **danh sách liên kết** tại chỉ mục đó một cách tuyến tính, biến thời gian tra cứu trung bình từ $O(1)$ thành **$O(n)$** (trường hợp xấu nhất). Kể từ Java 8, nếu danh sách liên kết của một bucket vượt quá một ngưỡng nhất định (thường là 8), danh sách liên kết sẽ tự động được chuyển đổi thành một **Cây Đỏ-Đen cân bằng (balanced Red-Black Tree)**, cải thiện thời gian tra cứu trường hợp xấu nhất trở lại **$O(\log n)$**."
      }
    }
  },
  {
    _id: "java-m-022",
    difficulty: "middle",
    tags: ["oop", "interface", "design"],
    content: {
      en: {
        title: "Interface Segregation Principle (ISP)",
        body: "Explain the Interface Segregation Principle (ISP) and what problem it aims to solve.",
        solution: "ISP states that **clients should not be forced to depend on interfaces they do not use**. It aims to solve the problem of 'fat interfaces'—interfaces that have too many methods. Instead, a large interface should be split into smaller, cohesive interfaces, so that classes implementing the interface only need to know about the methods that are relevant to them."
      },
      jp: {
        title: "インターフェース分離の原則 (ISP)",
        body: "インターフェース分離の原則（ISP）と、それが解決しようとする問題は何ですか？",
        solution: "ISPは、**クライアントが使用しないインターフェースに依存することを強制されるべきではない**と述べています。それは、「太ったインターフェース」—メソッドが多すぎるインターフェース—の問題を解決することを目的としています。代わりに、大きなインターフェースをより小さく、凝集性の高いインターフェースに分割し、インターフェースを実装するクラスが自分たちに関連するメソッドについてのみ知る必要があるようにします。"
      },
      vi: {
        title: "Interface Segregation Principle (ISP)",
        body: "Giải thích Nguyên tắc Tách biệt Interface (ISP) và vấn đề nó nhằm mục đích giải quyết.",
        solution: "ISP tuyên bố rằng **các client không nên bị buộc phải phụ thuộc vào các interface mà họ không sử dụng**. Nó nhằm mục đích giải quyết vấn đề 'fat interfaces'—các interface có quá nhiều phương thức. Thay vào đó, một interface lớn nên được chia thành các interface nhỏ hơn, gắn kết hơn, để các class implement interface chỉ cần biết về các phương thức liên quan đến chúng."
      }
    }
  },
  {
    _id: "java-m-023",
    difficulty: "middle",
    tags: ["threading", "synchronizer", "cyclicbarrier"],
    content: {
      en: {
        title: "`CountDownLatch` vs `CyclicBarrier`",
        body: "What is the key functional difference between `CountDownLatch` and `CyclicBarrier` (both concurrency synchronizers), particularly concerning reusability and task coordination?",
        solution: "**`CountDownLatch`** is a **one-time gate**. It allows one or more threads to wait until a set of operations in other threads completes. It cannot be reused. **`CyclicBarrier`** is a **reusable barrier**. It allows a set of threads to wait for each other to reach a common barrier point, and once all threads arrive, the barrier can be reset for reuse."
      },
      jp: {
        title: "`CountDownLatch` vs `CyclicBarrier`",
        body: "`CountDownLatch`と`CyclicBarrier`（両方とも並行処理シンクロナイザー）の間の主要な機能的違いは何ですか、特に再利用性とタスク調整に関して？",
        solution: "**`CountDownLatch`**は**一回限りのゲート**です。それは、1つ以上のスレッドが他のスレッドでの一連の操作が完了するまで待機することを可能にします。再利用はできません。**`CyclicBarrier`**は**再利用可能なバリア**です。それは、一連のスレッドが共通のバリアポイントに到達するまで互いに待機することを可能にし、すべてのスレッドが到着すると、バリアは再利用のためにリセットできます。"
      },
      vi: {
        title: "`CountDownLatch` và `CyclicBarrier`",
        body: "Sự khác biệt chức năng chính giữa `CountDownLatch` và `CyclicBarrier` (cả hai đều là bộ đồng bộ hóa đồng thời) là gì, đặc biệt liên quan đến khả năng tái sử dụng và điều phối tác vụ?",
        solution: "**`CountDownLatch`** là một **cổng một lần**. Nó cho phép một hoặc nhiều luồng chờ đợi cho đến khi một tập hợp các thao tác trong các luồng khác hoàn thành. Nó không thể được tái sử dụng. **`CyclicBarrier`** là một **hàng rào có thể tái sử dụng**. Nó cho phép một tập hợp các luồng chờ đợi lẫn nhau để đạt đến một điểm rào cản chung, và một khi tất cả các luồng đến, rào cản có thể được thiết lập lại để tái sử dụng."
      }
    }
  },
  {
    _id: "java-m-024",
    difficulty: "middle",
    tags: ["collections", "list", "copy-on-write"],
    content: {
      en: {
        title: "`CopyOnWriteArrayList`",
        body: "Describe the underlying mechanism of `CopyOnWriteArrayList` and why it is a good choice for lists that are read often but modified rarely.",
        solution: "`CopyOnWriteArrayList` handles modification by **creating a fresh copy of the underlying array** every time a modifying operation (add, set, remove) occurs. Read operations operate on the old, immutable copy, requiring no synchronization and thus being very fast. It is suitable when the number of reads vastly outweighs the number of writes, as write operations are expensive due to the copying overhead."
      },
      jp: {
        title: "`CopyOnWriteArrayList`",
        body: "`CopyOnWriteArrayList`の基になるメカニズムを説明し、読み取りは頻繁に行われるが変更はめったに行われないリストにとってそれが良い選択である理由を説明してください。",
        solution: "`CopyOnWriteArrayList`は、変更操作（追加、設定、削除）が発生するたびに**基になる配列の新しいコピーを作成する**ことによって変更を処理します。読み取り操作は古い不変のコピーに対して行われるため、同期を必要とせず、非常に高速です。書き込み操作はコピーのオーバーヘッドのためにコストがかかるため、読み取りの回数が書き込みの回数を大幅に上回る場合に適しています。"
      },
      vi: {
        title: "`CopyOnWriteArrayList`",
        body: "Mô tả cơ chế cơ bản của `CopyOnWriteArrayList` và tại sao nó là một lựa chọn tốt cho các list được đọc thường xuyên nhưng hiếm khi được sửa đổi.",
        solution: "`CopyOnWriteArrayList` xử lý việc sửa đổi bằng cách **tạo ra một bản sao mới của mảng cơ bản** mỗi khi một thao tác sửa đổi (thêm, đặt, xóa) xảy ra. Các thao tác đọc hoạt động trên bản sao cũ, bất biến, không yêu cầu đồng bộ hóa và do đó rất nhanh. Nó phù hợp khi số lượng đọc lớn hơn nhiều so với số lượng ghi, vì các thao tác ghi tốn kém do chi phí sao chép."
      }
    }
  },
  {
    _id: "java-m-025",
    difficulty: "middle",
    tags: ["oop", "dependency-inversion", "solid"],
    content: {
      en: {
        title: "Dependency Inversion Principle (DIP)",
        body: "Explain the Dependency Inversion Principle (DIP) and how it influences the direction of dependency in a system.",
        solution: "DIP states: 1. **High-level modules should not depend on low-level modules. Both should depend on abstractions.** 2. **Abstractions should not depend on details. Details should depend on abstractions.** DIP's key influence is to **invert the dependency direction** from concrete implementation details to abstract contracts (interfaces or abstract classes), promoting loose coupling and easier testing."
      },
      jp: {
        title: "依存性逆転の原則 (DIP)",
        body: "依存性逆転の原則（DIP）と、それがシステムにおける依存関係の方向にどのように影響するかを説明してください。",
        solution: "DIPは次のように述べています: 1. **高レベルのモジュールは低レベルのモジュールに依存すべきではない。両方とも抽象化に依存すべきである。** 2. **抽象化は詳細に依存すべきではない。詳細が抽象化に依存すべきである。** DIPの主な影響は、依存関係の方向を具象的な実装の詳細から抽象的な契約（インターフェースまたは抽象クラス）へと**逆転させる**ことであり、疎結合とより簡単なテストを促進します。"
      },
      vi: {
        title: "Dependency Inversion Principle (DIP)",
        body: "Giải thích Nguyên tắc Đảo ngược Dependency (DIP) và cách nó ảnh hưởng đến hướng của dependency trong một hệ thống.",
        solution: "DIP tuyên bố: 1. **Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào các abstraction.** 2. **Các abstraction không nên phụ thuộc vào các chi tiết. Các chi tiết nên phụ thuộc vào các abstraction.** Ảnh hưởng chính của DIP là **đảo ngược hướng dependency** từ các chi tiết triển khai cụ thể sang các hợp đồng trừu tượng (interface hoặc abstract class), thúc đẩy khớp nối lỏng và việc kiểm thử dễ dàng hơn."
      }
    }
  },
  {
    _id: "java-m-026",
    difficulty: "middle",
    tags: ["threading", "synchronization", "volatile"],
    content: {
      en: {
        title: "`volatile` vs `synchronized`",
        body: "Explain why `volatile` is not a replacement for `synchronized` for compound operations (like incrementing a counter), even though both ensure memory visibility.",
        solution: "`volatile` ensures **visibility** (guarantees the latest value is read from/written to main memory) but **does not ensure atomicity**. A compound operation like `i++` involves three steps (read, increment, write) which can be interleaved by multiple threads, leading to race conditions. `synchronized` ensures both **visibility** AND **atomicity** by allowing only one thread to execute the critical section at a time."
      },
      jp: {
        title: "`volatile` vs `synchronized`",
        body: "両方ともメモリの可視性を確保するにもかかわらず、複合操作（カウンターのインクリメントなど）で`volatile`が`synchronized`の代替とならない理由を説明してください。",
        solution: "`volatile`は**可視性**（最新の値がメインメモリから読み取られ/書き込まれることを保証する）を保証しますが、**アトミシティを保証しません**。`i++`のような複合操作には3つのステップ（読み取り、インクリメント、書き込み）が含まれ、複数のスレッドによってインターリーブされる可能性があり、競合状態につながります。`synchronized`は、一度に1つのスレッドのみがクリティカルセクションを実行できるようにすることで、**可視性**と**アトミシティ**の両方を保証します。"
      },
      vi: {
        title: "`volatile` và `synchronized`",
        body: "Giải thích tại sao `volatile` không phải là sự thay thế cho `synchronized` đối với các thao tác phức hợp (chẳng hạn như tăng bộ đếm), mặc dù cả hai đều đảm bảo tính hiển thị bộ nhớ.",
        solution: "`volatile` đảm bảo **tính hiển thị** (đảm bảo giá trị mới nhất được đọc/ghi từ bộ nhớ chính) nhưng **không đảm bảo tính nguyên tử (atomicity)**. Một thao tác phức hợp như `i++` liên quan đến ba bước (đọc, tăng, ghi) có thể bị xen kẽ bởi nhiều luồng, dẫn đến race condition. `synchronized` đảm bảo cả **tính hiển thị** VÀ **tính nguyên tử** bằng cách chỉ cho phép một luồng thực thi critical section tại một thời điểm."
      }
    }
  },
  {
    _id: "java-m-027",
    difficulty: "middle",
    tags: ["oop", "data-hiding", "encapsulation"],
    content: {
      en: {
        title: "Encapsulation vs Information Hiding",
        body: "What is the key difference in concept between Encapsulation and Information Hiding in OOP?",
        solution: "**Encapsulation** is the **bundling of data (fields) and methods** that operate on that data into a single unit (a class). It's a structural mechanism. **Information Hiding** is the principle of **restricting access to the internal details** of an object, exposing only what is necessary (achieved primarily via access modifiers like `private`). Encapsulation is the technique; Information Hiding is the goal."
      },
      jp: {
        title: "カプセル化 vs 情報隠蔽",
        body: "OOPにおけるカプセル化と情報隠蔽の概念における主な違いは何ですか？",
        solution: "**カプセル化**は、データ（フィールド）と、そのデータを操作する**メソッドを単一の単位（クラス）にバンドルすること**です。これは構造的なメカニズムです。**情報隠蔽**は、オブジェクトの**内部の詳細へのアクセスを制限する**（主に`private`のようなアクセス修飾子を介して達成される）原則であり、必要なものだけを公開します。カプセル化は手法であり、情報隠蔽は目的です。"
      },
      vi: {
        title: "Encapsulation và Information Hiding",
        body: "Sự khác biệt chính về mặt khái niệm giữa Encapsulation (Đóng gói) và Information Hiding (Che giấu thông tin) trong OOP là gì?",
        solution: "**Encapsulation** là **việc đóng gói dữ liệu (các trường) và các phương thức** hoạt động trên dữ liệu đó vào một đơn vị duy nhất (một class). Nó là một cơ chế cấu trúc. **Information Hiding** là nguyên tắc **hạn chế quyền truy cập vào các chi tiết nội bộ** của một đối tượng, chỉ để lộ những gì cần thiết (được thực hiện chủ yếu thông qua các access modifier như `private`). Đóng gói là kỹ thuật; Che giấu thông tin là mục tiêu."
      }
    }
  },
  {
    _id: "java-m-028",
    difficulty: "middle",
    tags: ["jdbc", "prepared-statement", "security"],
    content: {
      en: {
        title: "`Statement` vs `PreparedStatement`",
        body: "What is the primary security advantage of using a `PreparedStatement` over a regular `Statement` in JDBC?",
        solution: "`PreparedStatement` provides protection against **SQL Injection attacks**. It pre-compiles the SQL query structure, and when parameters are set (using `setXxx()` methods), the driver automatically escapes the data, treating it purely as data and preventing any malicious code from being executed as part of the SQL command."
      },
      jp: {
        title: "`Statement` vs `PreparedStatement`",
        body: "JDBCで通常の`Statement`に対して`PreparedStatement`を使用することの主なセキュリティ上の利点は何ですか？",
        solution: "`PreparedStatement`は**SQLインジェクション攻撃**に対する保護を提供します。SQLクエリ構造を事前にコンパイルし、パラメーターが設定されると（`setXxx()`メソッドを使用して）、ドライバーはデータを自動的にエスケープし、それを純粋にデータとして扱い、悪意のあるコードがSQLコマンドの一部として実行されるのを防ぎます。"
      },
      vi: {
        title: "`Statement` và `PreparedStatement`",
        body: "Lợi thế bảo mật chính của việc sử dụng `PreparedStatement` so với `Statement` thông thường trong JDBC là gì?",
        solution: "`PreparedStatement` cung cấp sự bảo vệ chống lại **tấn công SQL Injection**. Nó biên dịch trước cấu trúc truy vấn SQL, và khi các tham số được đặt (sử dụng các phương thức `setXxx()`), driver sẽ tự động thoát dữ liệu, xử lý nó hoàn toàn là dữ liệu và ngăn chặn bất kỳ mã độc nào được thực thi như một phần của lệnh SQL."
      }
    }
  },
  {
    _id: "java-m-029",
    difficulty: "middle",
    tags: ["stream", "lazy", "performance"],
    content: {
      en: {
        title: "Stream Laziness",
        body: "Explain the concept of 'laziness' in intermediate Java Stream operations and how it contributes to efficiency.",
        solution: "Intermediate stream operations are **lazy**, meaning they **do not execute immediately** when called. Instead, they build a pipeline of operations. Processing only starts when a **terminal operation** (e.g., `forEach`, `collect`) is invoked. This allows for efficiency by enabling **short-circuiting** (stopping processing early, like with `limit()` or `findFirst()`) and **fusion** (combining multiple operations into a single pass over the data)."
      },
      jp: {
        title: "ストリームの遅延評価",
        body: "中間Java Stream操作における「遅延評価」の概念と、それが効率にどのように貢献するかを説明してください。",
        solution: "中間ストリーム操作は**遅延評価**であり、呼び出されたときに**すぐに実行されません**。代わりに、操作のパイプラインを構築します。処理は**終端操作**（例：`forEach`、`collect`）が呼び出されたときにのみ開始されます。これにより、**ショートサーキット**（`limit()`や`findFirst()`のように処理を早期に停止する）や**フュージョン**（複数の操作をデータの単一のパスに結合する）を可能にすることで効率に貢献します。"
      },
      vi: {
        title: "Tính Lazy của Stream",
        body: "Giải thích khái niệm 'laziness' (lười biếng) trong các thao tác Stream trung gian của Java và cách nó đóng góp vào hiệu quả.",
        solution: "Các thao tác stream trung gian có tính **lazy**, nghĩa là chúng **không thực thi ngay lập tức** khi được gọi. Thay vào đó, chúng xây dựng một pipeline các thao tác. Quá trình xử lý chỉ bắt đầu khi một **thao tác kết thúc (terminal operation)** (ví dụ: `forEach`, `collect`) được gọi. Điều này cho phép đạt được hiệu quả bằng cách kích hoạt **ngắn mạch (short-circuiting)** (dừng xử lý sớm, như với `limit()` hoặc `findFirst()`) và **hợp nhất (fusion)** (kết hợp nhiều thao tác thành một lần xử lý duy nhất trên dữ liệu)."
      }
    }
  },
  {
    _id: "java-m-030",
    difficulty: "middle",
    tags: ["design", "pattern", "strategy"],
    content: {
      en: {
        title: "Strategy Pattern Goal",
        body: "What is the primary goal of the Strategy Pattern, and what SOLID principle does it adhere to?",
        solution: "The primary goal is to **define a family of algorithms, encapsulate each one, and make them interchangeable**. The Strategy Pattern allows the client to choose an algorithm at runtime without modifying the context class that uses it. It adheres strongly to the **Open/Closed Principle (OCP)**, as new strategies (algorithms) can be added without modifying the context."
      },
      jp: {
        title: "Strategyパターン (戦略パターン) の目標",
        body: "Strategyパターン（戦略パターン）の主な目標は何ですか、またそれはどのSOLID原則を遵守していますか？",
        solution: "主な目標は、**アルゴリズムのファミリーを定義し、それぞれをカプセル化し、それらを交換可能にする**ことです。Strategyパターンにより、クライアントはそれを使用するコンテキストクラスを変更することなく、実行時にアルゴリズムを選択できます。新しい戦略（アルゴリズム）はコンテキストを変更することなく追加できるため、**オープン/クローズドの原則（OCP）**を強く遵守しています。"
      },
      vi: {
        title: "Mục tiêu Strategy Pattern",
        body: "Mục tiêu chính của Strategy Pattern là gì, và nó tuân thủ nguyên tắc SOLID nào?",
        solution: "Mục tiêu chính là **định nghĩa một họ các thuật toán, đóng gói từng thuật toán và làm cho chúng có thể hoán đổi cho nhau**. Strategy Pattern cho phép client chọn một thuật toán tại thời điểm chạy mà không cần sửa đổi class context sử dụng nó. Nó tuân thủ mạnh mẽ **Open/Closed Principle (OCP)**, vì các strategy (thuật toán) mới có thể được thêm vào mà không cần sửa đổi context."
      }
    }
  },
  {
    _id: "java-m-031",
    difficulty: "middle",
    tags: ["threading", "synchronization", "lock"],
    content: {
      en: {
        title: "`wait()` and `notify()` vs `sleep()`",
        body: "What is the critical difference between `wait()`/`notify()` and `Thread.sleep()`, especially regarding the monitor lock?",
        solution: "**`Thread.sleep()`** pauses the execution of the current thread for a specified time but **does NOT release the monitor lock** (if held). **`wait()`** causes the current thread to pause *and* **releases the monitor lock** on the object. The thread waits until `notify()` or `notifyAll()` is called on that object (or the waiting time expires)."
      },
      jp: {
        title: "`wait()`と`notify()` vs `sleep()`",
        body: "`wait()`/`notify()`と`Thread.sleep()`の間の決定的な違いは何ですか、特にモニターロックに関して？",
        solution: "**`Thread.sleep()`**は、指定された時間、現在のスレッドの実行を一時停止しますが、**モニターロックを解放しません**（保持している場合）。**`wait()`**は、現在のスレッドを一時停止させ、*かつ*そのオブジェクトの**モニターロックを解放します**。スレッドは、そのオブジェクトで`notify()`または`notifyAll()`が呼び出されるまで待機します（または待機時間が経過するまで）。"
      },
      vi: {
        title: "`wait()` và `notify()` vs `sleep()`",
        body: "Sự khác biệt quan trọng giữa `wait()`/`notify()` và `Thread.sleep()` là gì, đặc biệt liên quan đến monitor lock?",
        solution: "**`Thread.sleep()`** tạm dừng việc thực thi của luồng hiện tại trong một khoảng thời gian xác định nhưng **KHÔNG giải phóng monitor lock** (nếu đang giữ). **`wait()`** khiến luồng hiện tại tạm dừng *và* **giải phóng monitor lock** trên đối tượng. Luồng chờ cho đến khi `notify()` hoặc `notifyAll()` được gọi trên đối tượng đó (hoặc thời gian chờ hết)."
      }
    }
  },
  {
    _id: "java-m-032",
    difficulty: "middle",
    tags: ["collections", "hashset", "linkedhashset"],
    content: {
      en: {
        title: "`HashSet` vs `LinkedHashSet`",
        body: "What is the key difference between `HashSet` and `LinkedHashSet` (in terms of iteration order) and which data structure is responsible for the difference?",
        solution: "**`HashSet`** does not guarantee any iteration order; its order is based on the hash codes. **`LinkedHashSet`** guarantees the **insertion order** (or access order, if constructed with true access order). This is achieved because `LinkedHashSet` is backed by a **`LinkedHashMap`**, which uses a **doubly-linked list** running through its entries."
      },
      jp: {
        title: "`HashSet` vs `LinkedHashSet`",
        body: "`HashSet`と`LinkedHashSet`の間の主な違いは何ですか（イテレーション順序に関して）、またその違いの原因となっているデータ構造は何ですか？",
        solution: "**`HashSet`**はいかなるイテレーション順序も保証しません。その順序はハッシュコードに基づいています。**`LinkedHashSet`**は**挿入順序**を保証します（true access orderで構築された場合はアクセス順序）。これは、`LinkedHashSet`が**`LinkedHashMap`**によって支えられており、エントリを貫く**双方向連結リスト**を使用しているために達成されます。"
      },
      vi: {
        title: "`HashSet` và `LinkedHashSet`",
        body: "Sự khác biệt chính giữa `HashSet` và `LinkedHashSet` (về thứ tự lặp) là gì và cấu trúc dữ liệu nào chịu trách nhiệm cho sự khác biệt đó?",
        solution: "**`HashSet`** không đảm bảo bất kỳ thứ tự lặp nào; thứ tự của nó dựa trên các hash code. **`LinkedHashSet`** đảm bảo **thứ tự chèn (insertion order)** (hoặc thứ tự truy cập, nếu được xây dựng với thứ tự truy cập đúng). Điều này đạt được vì `LinkedHashSet` được hỗ trợ bởi một **`LinkedHashMap`**, sử dụng một **danh sách liên kết đôi** chạy qua các mục nhập của nó."
      }
    }
  },
  {
    _id: "java-m-033",
    difficulty: "middle",
    tags: ["oop", "interface", "design"],
    content: {
      en: {
        title: "Marker Interface",
        body: "What is a Marker Interface in Java? Provide one common example and explain its function.",
        solution: "A **Marker Interface** is an interface that **contains no methods or constants**. Its purpose is to 'mark' a class, providing **metadata to the JVM or a framework** about the capabilities or properties of the class. **Example:** **`Serializable`** or **`Cloneable`**. The JVM uses `Serializable` to indicate that a class can be serialized."
      },
      jp: {
        title: "マーカーインターフェース",
        body: "Javaにおけるマーカーインターフェースとは何ですか？一般的な例を1つ挙げ、その機能を説明してください。",
        solution: "**マーカーインターフェース**は、**メソッドや定数を含まない**インターフェースです。その目的は、クラスを「マーク」し、クラスの機能またはプロパティに関する**メタデータをJVMまたはフレームワークに提供する**ことです。**例:** **`Serializable`**または**`Cloneable`**。JVMは`Serializable`を使用して、クラスがシリアル化できることを示します。"
      },
      vi: {
        title: "Marker Interface",
        body: "Marker Interface trong Java là gì? Cung cấp một ví dụ phổ biến và giải thích chức năng của nó.",
        solution: "Một **Marker Interface** là một interface **không chứa phương thức hoặc hằng số**. Mục đích của nó là 'đánh dấu' một class, cung cấp **metadata cho JVM hoặc một framework** về khả năng hoặc thuộc tính của class đó. **Ví dụ:** **`Serializable`** hoặc **`Cloneable`**. JVM sử dụng `Serializable` để chỉ ra rằng một class có thể được tuần tự hóa."
      }
    }
  },
  {
    _id: "java-m-034",
    difficulty: "middle",
    tags: ["stream", "parallel", "fork-join"],
    content: {
      en: {
        title: "Parallel Streams Execution",
        body: "How does a Java Parallel Stream typically execute its tasks internally, and which thread pool is used by default?",
        solution: "A Java Parallel Stream internally executes its tasks by **splitting the data into multiple chunks** and processing them concurrently using the **Fork/Join Framework**. By default, it uses the **Common ForkJoinPool** (a system-wide thread pool) to manage and execute these parallel tasks efficiently."
      },
      jp: {
        title: "並列ストリームの実行",
        body: "Java並列ストリームは、内部で通常どのようにタスクを実行しますか、またデフォルトでどのスレッドプールが使用されますか？",
        solution: "Java並列ストリームは、データを**複数のチャンクに分割し**、**Fork/Join Framework**を使用してそれらを並行して処理することにより、内部でタスクを実行します。デフォルトでは、これらの並列タスクを効率的に管理および実行するために、**Common ForkJoinPool**（システム全体のスレッドプール）を使用します。"
      },
      vi: {
        title: "Thực thi Parallel Streams",
        body: "Một Java Parallel Stream thường thực thi các tác vụ nội bộ của nó như thế nào, và thread pool nào được sử dụng theo mặc định?",
        solution: "Một Java Parallel Stream thực thi các tác vụ nội bộ của nó bằng cách **chia dữ liệu thành nhiều khối** và xử lý chúng đồng thời bằng cách sử dụng **Fork/Join Framework**. Theo mặc định, nó sử dụng **Common ForkJoinPool** (một thread pool toàn hệ thống) để quản lý và thực thi các tác vụ song song này một cách hiệu quả."
      }
    }
  },
  {
    _id: "java-m-035",
    difficulty: "middle",
    tags: ["lambda", "variable-scope"],
    content: {
      en: {
        title: "Lambda and Final Variables",
        body: "Why must a local variable accessed inside a Lambda expression be 'effectively final' in Java?",
        solution: "A local variable must be 'effectively final' (meaning its value is never changed after initialization) because Lambda expressions might be executed in a **different thread or at a later time** than the thread that defined the variable. If the variable could be modified, it would lead to a **concurrency issue** (race condition), and the Lambda needs a guarantee that the value it references will not change, ensuring **closure stability**."
      },
      jp: {
        title: "ラムダとFinal変数",
        body: "ラムダ式内でアクセスされるローカル変数は、Javaで「実質的final」でなければならないのはなぜですか？",
        solution: "ラムダ式は、変数を定義したスレッドとは**異なるスレッドまたは後の時点で実行される可能性**があるため、ローカル変数は「実質的final」（初期化後にその値が変更されないことを意味する）でなければなりません。変数が変更される可能性がある場合、**並行性の問題**（競合状態）につながり、ラムダは参照する値が変更されないという保証を必要とし、**クロージャの安定性**を確保します。"
      },
      vi: {
        title: "Lambda và biến Final",
        body: "Tại sao một biến cục bộ được truy cập bên trong một biểu thức Lambda phải là 'effectively final' (hiệu quả là final) trong Java?",
        solution: "Một biến cục bộ phải là 'effectively final' (có nghĩa là giá trị của nó không bao giờ được thay đổi sau khi khởi tạo) vì biểu thức Lambda có thể được thực thi trong một **luồng khác hoặc vào một thời điểm sau đó** so với luồng đã định nghĩa biến đó. Nếu biến có thể bị sửa đổi, nó sẽ dẫn đến một **vấn đề đồng thời (concurrency issue)** (race condition), và Lambda cần một sự đảm bảo rằng giá trị mà nó tham chiếu sẽ không thay đổi, đảm bảo **tính ổn định của closure**."
      }
    }
  },
  {
    _id: "java-m-036",
    difficulty: "middle",
    tags: ["design", "pattern", "adapter"],
    content: {
      en: {
        title: "Adapter Pattern",
        body: "What is the primary purpose of the Adapter Pattern, and which real-world analogy does it often represent?",
        solution: "The primary purpose of the **Adapter Pattern** is to **allow two incompatible interfaces to work together** (to convert the interface of a class into another interface clients expect). The most common real-world analogy is a **power adapter or electrical plug adapter**, which converts one type of plug/socket to another compatible one."
      },
      jp: {
        title: "アダプターパターン",
        body: "アダプターパターンの主な目的は何ですか、またそれはどの現実世界の類推をよく表していますか？",
        solution: "**アダプターパターン**の主な目的は、**互換性のない2つのインターフェースを連携させる**ことです（クラスのインターフェースをクライアントが期待する別のインターフェースに変換すること）。最も一般的な現実世界の類推は、あるタイプのプラグ/ソケットを別の互換性のあるものに変換する**電源アダプターまたは電気プラグアダプター**です。"
      },
      vi: {
        title: "Adapter Pattern",
        body: "Mục đích chính của Adapter Pattern là gì, và nó thường đại diện cho phép tương tự nào trong thế giới thực?",
        solution: "Mục đích chính của **Adapter Pattern** là **cho phép hai interface không tương thích hoạt động cùng nhau** (chuyển đổi interface của một class thành một interface khác mà client mong đợi). Phép tương tự phổ biến nhất trong thế giới thực là **bộ chuyển đổi nguồn (power adapter) hoặc phích cắm điện**, chuyển đổi một loại phích cắm/ổ cắm sang loại tương thích khác."
      }
    }
  },
  {
    _id: "java-m-037",
    difficulty: "middle",
    tags: ["collections", "hashmap", "put-get"],
    content: {
      en: {
        title: "`HashMap` and `null` key/value",
        body: "What happens when you try to use `null` as a key or a value in a standard `HashMap` in Java?",
        solution: "A standard **`HashMap` allows one `null` key and multiple `null` values**. The `null` key is always stored at the first index (index 0) of the internal array, as its hash code is effectively considered 0. `null` values are stored just like any other value."
      },
      jp: {
        title: "`HashMap`と`null`キー/値",
        body: "Javaの標準の`HashMap`でキーまたは値として`null`を使用しようとするとどうなりますか？",
        solution: "標準の**`HashMap`は1つの`null`キーと複数の`null`値**を許可します。`null`キーのハッシュコードは実質的に0と見なされるため、常に内部配列の最初のインデックス（インデックス0）に格納されます。`null`値は他の値と同様に格納されます。"
      },
      vi: {
        title: "`HashMap` và key/value `null`",
        body: "Điều gì xảy ra khi bạn cố gắng sử dụng `null` làm khóa hoặc giá trị trong một `HashMap` tiêu chuẩn trong Java?",
        solution: "Một **`HashMap` tiêu chuẩn cho phép một khóa `null` và nhiều giá trị `null`**. Khóa `null` luôn được lưu trữ ở chỉ mục đầu tiên (chỉ mục 0) của mảng nội bộ, vì hash code của nó được coi là 0. Các giá trị `null` được lưu trữ giống như bất kỳ giá trị nào khác."
      }
    }
  },
  {
    _id: "java-m-038",
    difficulty: "middle",
    tags: ["threading", "concurrency", "starvation"],
    content: {
      en: {
        title: "Starvation vs Deadlock",
        body: "Explain the difference between Thread Starvation and Deadlock in concurrent programming.",
        solution: "**Deadlock** is a situation where two or more threads are **blocked indefinitely**, each waiting for the other to release a resource, resulting in a permanent halt. **Starvation** is a situation where a **low-priority thread is perpetually blocked** from gaining access to a shared resource because high-priority threads keep acquiring the resource, meaning the thread never makes progress, but the system itself is still running."
      },
      jp: {
        title: "スタベーション vs デッドロック",
        body: "並行プログラミングにおけるスレッドスタベーション（飢餓）とデッドロックの違いを説明してください。",
        solution: "**デッドロック**は、2つ以上のスレッドが**無期限にブロックされ**、互いにリソースの解放を待っている状況であり、永続的な停止につながります。**スタベーション**は、高優先度のスレッドがリソースを取得し続けるため、**低優先度のスレッドが共有リソースへのアクセスを得ることから永続的にブロックされる**状況であり、スレッドは進行しませんが、システム自体はまだ実行されています。"
      },
      vi: {
        title: "Starvation và Deadlock",
        body: "Giải thích sự khác biệt giữa Thread Starvation (Đói) và Deadlock (Tắc nghẽn) trong lập trình đồng thời.",
        solution: "**Deadlock** là tình huống trong đó hai hoặc nhiều luồng **bị chặn vô thời hạn**, mỗi luồng chờ luồng kia giải phóng một tài nguyên, dẫn đến dừng vĩnh viễn. **Starvation** là tình huống trong đó một **luồng có độ ưu tiên thấp bị chặn vĩnh viễn** khỏi việc giành quyền truy cập vào một tài nguyên được chia sẻ vì các luồng có độ ưu tiên cao liên tục giành được tài nguyên, có nghĩa là luồng đó không bao giờ tiến triển, nhưng bản thân hệ thống vẫn đang chạy."
      }
    }
  },
  {
    _id: "java-m-039",
    difficulty: "middle",
    tags: ["io", "nio", "non-blocking"],
    content: {
      en: {
        title: "NIO vs Classic I/O",
        body: "What is the key functional difference between classic Java I/O (`java.io`) and the NIO API (`java.nio`), and which one is better for high-volume concurrent operations?",
        solution: "Classic I/O is **stream-oriented** and **blocking** (a thread is blocked until data is read/written). NIO is **buffer-oriented** and primarily **non-blocking** (a thread can do other work while waiting for I/O). NIO is better for high-volume concurrent operations as it allows a single thread to manage multiple channels (connections) simultaneously using a `Selector`."
      },
      jp: {
        title: "NIO vs クラシックI/O",
        body: "古典的なJava I/O（`java.io`）とNIO API（`java.nio`）の間の主要な機能的違いは何ですか、また大量の同時操作に適しているのはどちらですか？",
        solution: "古典的なI/Oは**ストリーム指向**で**ブロッキング**です（データが読み取られる/書き込まれるまでスレッドはブロックされます）。NIOは**バッファー指向**で、主に**非ブロッキング**です（I/Oを待っている間にスレッドは他の作業を行うことができます）。NIOは、`Selector`を使用して単一のスレッドが複数のチャネル（接続）を同時に管理できるため、大量の同時操作に適しています。"
      },
      vi: {
        title: "NIO và Classic I/O",
        body: "Sự khác biệt chức năng chính giữa Java I/O cổ điển (`java.io`) và NIO API (`java.nio`) là gì, và cái nào tốt hơn cho các thao tác đồng thời khối lượng lớn?",
        solution: "I/O cổ điển là **định hướng luồng (stream-oriented)** và **chặn (blocking)** (một luồng bị chặn cho đến khi dữ liệu được đọc/ghi). NIO là **định hướng buffer** và chủ yếu là **không chặn (non-blocking)** (một luồng có thể làm công việc khác trong khi chờ I/O). NIO tốt hơn cho các thao tác đồng thời khối lượng lớn vì nó cho phép một luồng duy nhất quản lý nhiều kênh (kết nối) đồng thời bằng cách sử dụng `Selector`."
      }
    }
  },
  {
    _id: "java-m-040",
    difficulty: "middle",
    tags: ["design", "pattern", "decorator"],
    content: {
      en: {
        title: "Decorator Pattern",
        body: "What is the primary goal of the Decorator Pattern, and what is its main advantage over using inheritance for adding responsibilities?",
        solution: "The primary goal of the Decorator Pattern is to **attach additional responsibilities dynamically** to an object (often known as a wrapper). The main advantage over inheritance is **flexibility**. Inheritance fixes responsibilities at compile time, leading to class explosion. The Decorator pattern allows for adding responsibilities at runtime and combining them in flexible ways."
      },
      jp: {
        title: "デコレーターパターン",
        body: "デコレーターパターンの主な目的は何ですか、また責務を追加するために継承を使用することに対する主な利点は何ですか？",
        solution: "デコレーターパターンの主な目的は、**オブジェクトに動的に追加の責務を付加する**ことです（しばしばラッパーとして知られています）。継承に対する主な利点は**柔軟性**です。継承はコンパイル時に責務を固定し、クラスの爆発につながります。デコレーターパターンは、実行時に責務を追加し、それらを柔軟な方法で組み合わせることを可能にします。"
      },
      vi: {
        title: "Decorator Pattern",
        body: "Mục đích chính của Decorator Pattern là gì, và lợi thế chính của nó so với việc sử dụng kế thừa để thêm trách nhiệm là gì?",
        solution: "Mục đích chính của Decorator Pattern là **gắn các trách nhiệm bổ sung một cách linh hoạt** vào một đối tượng (thường được gọi là wrapper). Lợi thế chính so với kế thừa là **tính linh hoạt**. Kế thừa cố định trách nhiệm tại thời điểm biên dịch, dẫn đến sự bùng nổ class. Mẫu Decorator cho phép thêm trách nhiệm tại thời điểm chạy và kết hợp chúng theo những cách linh hoạt."
      }
    }
  },
  {
    _id: "java-m-041",
    difficulty: "middle",
    tags: ["jdbc", "transaction", "isolation"],
    content: {
      en: {
        title: "Transaction Isolation Levels",
        body: "Name one of the four standard JDBC Transaction Isolation Levels that prevents the 'Dirty Read' phenomenon.",
        solution: "The 'Dirty Read' phenomenon (reading uncommitted data written by another transaction) is prevented by three of the four levels. The simplest one that prevents it is **`TRANSACTION_READ_COMMITTED`** (and also `TRANSACTION_REPEATABLE_READ` and `TRANSACTION_SERIALIZABLE`)."
      },
      jp: {
        title: "トランザクション分離レベル",
        body: "「ダーティリード」現象を防ぐ4つの標準JDBCトランザクション分離レベルの1つを挙げてください。",
        solution: "「ダーティリード」現象（別のトランザクションによって書き込まれた未コミットのデータを読み取ること）は、4つのレベルのうち3つによって防がれます。それを防ぐ最も単純なものは**`TRANSACTION_READ_COMMITTED`**です（そして`TRANSACTION_REPEATABLE_READ`と`TRANSACTION_SERIALIZABLE`も）。"
      },
      vi: {
        title: "Transaction Isolation Levels",
        body: "Nêu tên một trong bốn Cấp độ Cách ly Giao dịch (Transaction Isolation Levels) tiêu chuẩn của JDBC ngăn chặn hiện tượng 'Dirty Read'.",
        solution: "Hiện tượng 'Dirty Read' (đọc dữ liệu chưa được commit được ghi bởi một giao dịch khác) được ngăn chặn bởi ba trong bốn cấp độ. Cấp độ đơn giản nhất ngăn chặn nó là **`TRANSACTION_READ_COMMITTED`** (và cả `TRANSACTION_REPEATABLE_READ` và `TRANSACTION_SERIALIZABLE`)."
      }
    }
  },
  {
    _id: "java-m-042",
    difficulty: "middle",
    tags: ["stream", "optional", "flatMap"],
    content: {
      en: {
        title: "`Optional.flatMap()` vs `Optional.map()`",
        body: "When dealing with `Optional<T>` objects, what is the crucial functional difference between `map()` and `flatMap()`?",
        solution: "The **`map()`** method applies a function to the value inside the `Optional` but **wraps the result in a new `Optional`**, potentially leading to nested optionals (e.g., `Optional<Optional<T>>`). The **`flatMap()`** method applies a function that **already returns an `Optional`** and returns that resulting `Optional` directly, thus preventing nesting and allowing for flat, seamless chaining of operations."
      },
      jp: {
        title: "`Optional.flatMap()` vs `Optional.map()`",
        body: "`Optional<T>`オブジェクトを扱う際、`map()`と`flatMap()`の間の決定的な機能的違いは何ですか？",
        solution: "**`map()`**メソッドは`Optional`内の値に関数を適用しますが、**結果を新しい`Optional`でラップする**ため、ネストされたOptionalにつながる可能性があります（例：`Optional<Optional<T>>`）。**`flatMap()`**メソッドは、**すでに`Optional`を返す関数**を適用し、その結果の`Optional`を直接返すため、ネストを防ぎ、フラットでシームレスな操作の連鎖を可能にします。"
      },
      vi: {
        title: "`Optional.flatMap()` và `Optional.map()`",
        body: "Khi làm việc với các đối tượng `Optional<T>`, sự khác biệt chức năng quan trọng giữa `map()` và `flatMap()` là gì?",
        solution: "Phương thức **`map()`** áp dụng một hàm cho giá trị bên trong `Optional` nhưng **gói kết quả trong một `Optional` mới**, có khả năng dẫn đến các Optional lồng nhau (ví dụ: `Optional<Optional<T>>`). Phương thức **`flatMap()`** áp dụng một hàm mà **đã trả về một `Optional`** và trả về trực tiếp `Optional` kết quả đó, do đó ngăn chặn việc lồng nhau và cho phép xâu chuỗi các thao tác một cách phẳng, liền mạch."
      }
    }
  },
  {
    _id: "java-m-043",
    difficulty: "middle",
    tags: ["jvm", "memory", "permgen", "metaspace"],
    content: {
      en: {
        title: "PermGen vs Metaspace",
        body: "What was the purpose of the PermGen space in older JVMs (Java 7 and earlier), and what replaced it in Java 8+?",
        solution: "**PermGen (Permanent Generation)** was a fixed-size region of the Heap used to store class metadata, interned strings, and static variables. It often led to `OutOfMemoryError: PermGen space` exceptions. In Java 8, PermGen was removed and replaced by **Metaspace**. **Metaspace** is allocated from native memory (off-heap) and can dynamically resize, reducing the likelihood of OOM errors."
      },
      jp: {
        title: "PermGen vs Metaspace",
        body: "古いJVM（Java 7以前）におけるPermGenスペースの目的は何でしたか、またJava 8以降でそれに取って代わったのは何ですか？",
        solution: "**PermGen (Permanent Generation)**は、クラスのメタデータ、インターン化された文字列、および静的変数を格納するために使用されるヒープの固定サイズの領域でした。これはしばしば`OutOfMemoryError: PermGen space`例外を引き起こしました。Java 8では、PermGenは削除され、**Metaspace**に置き換えられました。**Metaspace**はネイティブメモリ（オフヒープ）から割り当てられ、動的にサイズ変更できるため、OOMエラーの可能性が減少します。"
      },
      vi: {
        title: "PermGen và Metaspace",
        body: "Mục đích của không gian PermGen trong các JVM cũ hơn (Java 7 trở về trước) là gì, và cái gì đã thay thế nó trong Java 8 trở lên?",
        solution: "**PermGen (Permanent Generation)** là một vùng có kích thước cố định của Heap được sử dụng để lưu trữ metadata của class, các chuỗi đã được intern và các biến static. Nó thường dẫn đến các ngoại lệ `OutOfMemoryError: PermGen space`. Trong Java 8, PermGen đã bị loại bỏ và được thay thế bằng **Metaspace**. **Metaspace** được phân bổ từ bộ nhớ native (off-heap) và có thể thay đổi kích thước linh hoạt, giảm khả năng xảy ra lỗi OOM."
      }
    }
  },
  {
    _id: "java-m-044",
    difficulty: "middle",
    tags: ["oop", "interface", "design"],
    content: {
      en: {
        title: "Diamond Problem and Interfaces",
        body: "Explain the 'Diamond Problem' in OOP and how Java's interfaces (with default methods) handle this potential conflict.",
        solution: "The **Diamond Problem** occurs when a class inherits from two parent classes that both implement the same method name, causing ambiguity about which method to call. Java prevents this with classes (no multiple inheritance). With Java 8 **default methods**, if a class inherits the same default method from two interfaces, the compiler generates an error, forcing the implementing class to **explicitly override** and provide its own implementation (or explicitly choose one via `InterfaceName.super.method()`)."
      },
      jp: {
        title: "ダイヤモンド問題とインターフェース",
        body: "OOPにおける「ダイヤモンド問題」を説明し、Javaのインターフェース（デフォルトメソッド付き）がこの潜在的な競合をどのように処理するかを説明してください。",
        solution: "**ダイヤモンド問題**は、クラスが同じメソッド名を実装する2つの親クラスから継承するときに発生し、どのメソッドを呼び出すかについて曖昧さを引き起こします。Javaはクラスでこれを防ぎます（多重継承なし）。Java 8の**デフォルトメソッド**では、クラスが2つのインターフェースから同じデフォルトメソッドを継承する場合、コンパイラはエラーを生成し、実装するクラスに**明示的にオーバーライド**して独自の**実装を提供する**こと（または`InterfaceName.super.method()`を介して明示的に1つを選択すること）を強制します。"
      },
      vi: {
        title: "Diamond Problem và Interfaces",
        body: "Giải thích 'Diamond Problem' trong OOP và cách các interface của Java (với các default method) xử lý xung đột tiềm năng này.",
        solution: "**Diamond Problem** xảy ra khi một class kế thừa từ hai class cha mà cả hai đều implement cùng một tên phương thức, gây ra sự mơ hồ về việc gọi phương thức nào. Java ngăn chặn điều này với các class (không có đa kế thừa). Với **default methods** của Java 8, nếu một class kế thừa cùng một default method từ hai interface, trình biên dịch sẽ tạo ra lỗi, buộc class implement phải **ghi đè tường minh** và cung cấp triển khai riêng của nó (hoặc chọn tường minh một cái thông qua `InterfaceName.super.method()`)."
      }
    }
  },
  {
    _id: "java-m-045",
    difficulty: "middle",
    tags: ["serialization", "security"],
    content: {
      en: {
        title: "Serialization Security Risk",
        body: "What is a major security risk associated with Java Serialization/Deserialization, and how can the `readObject()` method be involved in exploiting it?",
        solution: "The major risk is **unsafe deserialization** (or gadget attacks). When an object is deserialized, the `readObject()` method is automatically called. An attacker can replace the serialized data with a malicious object graph (a chain of 'gadget' objects) whose `readObject()` methods contain harmful logic. When the JVM calls these methods, the malicious code is executed, leading to **Remote Code Execution (RCE)**."
      },
      jp: {
        title: "シリアル化のセキュリティリスク",
        body: "Javaのシリアル化/逆シリアル化に関連する主要なセキュリティリスクは何ですか、また`readObject()`メソッドはそれを悪用することにどのように関与する可能性がありますか？",
        solution: "主要なリスクは**安全でない逆シリアル化**（またはガジェット攻撃）です。オブジェクトが逆シリアル化されるとき、`readObject()`メソッドが自動的に呼び出されます。攻撃者は、シリアル化されたデータを、`readObject()`メソッドに有害なロジックを含む悪意のあるオブジェクトグラフ（「ガジェット」オブジェクトの連鎖）に置き換えることができます。JVMがこれらのメソッドを呼び出すと、悪意のあるコードが実行され、**リモートコード実行（RCE）**につながります。"
      },
      vi: {
        title: "Rủi ro bảo mật của Serialization",
        body: "Rủi ro bảo mật lớn nào liên quan đến Java Serialization/Deserialization, và phương thức `readObject()` có thể liên quan như thế nào đến việc khai thác nó?",
        solution: "Rủi ro lớn là **deserialization không an toàn** (hoặc tấn công gadget). Khi một đối tượng được deserialized, phương thức `readObject()` được tự động gọi. Kẻ tấn công có thể thay thế dữ liệu được tuần tự hóa bằng một biểu đồ đối tượng độc hại (một chuỗi các đối tượng 'gadget') mà các phương thức `readObject()` của chúng chứa logic có hại. Khi JVM gọi các phương thức này, mã độc được thực thi, dẫn đến **Remote Code Execution (RCE)**."
      }
    }
  },
  {
    _id: "java-m-046",
    difficulty: "middle",
    tags: ["io", "nio", "channel", "buffer"],
    content: {
      en: {
        title: "NIO Channel and Buffer",
        body: "In Java NIO, what is the fundamental role of a **Channel** and a **Buffer**, and how do they interact during an I/O operation?",
        solution: "A **Channel** is an open connection to an I/O entity (like a file or socket), serving as a gateway. A **Buffer** is a fixed-size block of memory used as a container for data. During an I/O operation, data is **read from the Channel into the Buffer**, or **written from the Buffer into the Channel**."
      },
      jp: {
        title: "NIOチャネルとバッファ",
        body: "Java NIOにおいて、**チャネル**と**バッファ**の基本的な役割は何ですか、またI/O操作中にそれらはどのように相互作用しますか？",
        solution: "**チャネル**はI/Oエンティティ（ファイルやソケットなど）への開かれた接続であり、ゲートウェイとして機能します。**バッファ**は、データのためのコンテナとして使用される固定サイズのメモリブロックです。I/O操作中、データは**チャネルからバッファに読み込まれる**か、**バッファからチャネルに書き込まれます**。"
      },
      vi: {
        title: "NIO Channel và Buffer",
        body: "Trong Java NIO, vai trò cơ bản của một **Channel** và một **Buffer** là gì, và chúng tương tác với nhau như thế nào trong một thao tác I/O?",
        solution: "Một **Channel** là một kết nối mở đến một thực thể I/O (như một file hoặc socket), đóng vai trò là cổng. Một **Buffer** là một khối bộ nhớ có kích thước cố định được sử dụng làm vùng chứa dữ liệu. Trong một thao tác I/O, dữ liệu được **đọc từ Channel vào Buffer**, hoặc **ghi từ Buffer vào Channel**."
      }
    }
  },
  {
    _id: "java-m-047",
    difficulty: "middle",
    tags: ["threading", "future", "completable-future"],
    content: {
      en: {
        title: "`CompletableFuture` advantages",
        body: "What is the key advantage of using Java 8's `CompletableFuture` over the older `Future` interface for managing asynchronous computations?",
        solution: "The older `Future` interface is limited; you can only check if the task is done or block until the result is available. `CompletableFuture` supports **pipelining/chaining of asynchronous tasks** (e.g., using `thenApply()`, `thenCombine()`, `thenAccept()`). This allows defining a sequence of dependent computations and handling errors in a non-blocking, functional way, making it much more suitable for complex asynchronous workflows."
      },
      jp: {
        title: "`CompletableFuture`の利点",
        body: "非同期計算を管理するために、Java 8の`CompletableFuture`を古い`Future`インターフェースよりも使用する主な利点は何ですか？",
        solution: "古い`Future`インターフェースは制限されています。タスクが完了したかどうかを確認するか、結果が利用可能になるまでブロックすることしかできません。`CompletableFuture`は、**非同期タスクのパイプライン/連鎖**（例：`thenApply()`、`thenCombine()`、`thenAccept()`の使用）をサポートします。これにより、依存する計算のシーケンスを定義し、エラーを非ブロッキングかつ関数的な方法で処理できるため、複雑な非同期ワークフローに遥かに適しています。"
      },
      vi: {
        title: "Ưu điểm của `CompletableFuture`",
        body: "Lợi thế chính của việc sử dụng `CompletableFuture` của Java 8 so với interface `Future` cũ hơn để quản lý các tính toán bất đồng bộ là gì?",
        solution: "Interface `Future` cũ hơn bị hạn chế; bạn chỉ có thể kiểm tra xem tác vụ đã hoàn thành hay chưa hoặc chặn cho đến khi kết quả có sẵn. `CompletableFuture` hỗ trợ **xâu chuỗi/tạo pipeline các tác vụ bất đồng bộ** (ví dụ: sử dụng `thenApply()`, `thenCombine()`, `thenAccept()`). Điều này cho phép xác định một chuỗi các tính toán phụ thuộc và xử lý lỗi theo cách phi chặn, chức năng, làm cho nó phù hợp hơn nhiều cho các quy trình làm việc bất đồng bộ phức tạp."
      }
    }
  },
  {
    _id: "java-m-048",
    difficulty: "middle",
    tags: ["oop", "design", "cohesion"],
    content: {
      en: {
        title: "Cohesion types (Functional)",
        body: "In the context of software design and Cohesion, what is 'Functional Cohesion,' and why is it considered the highest/best form of cohesion?",
        solution: "**Functional Cohesion** is the strongest type of cohesion, where **every part of the module contributes to the execution of a single, well-defined task**. All elements are essential for the task. It is the best form because it results in highly focused, reusable, and easy-to-maintain modules that only have one reason to change, adhering perfectly to the SRP."
      },
      jp: {
        title: "凝集度の種類（機能的）",
        body: "ソフトウェア設計と凝集度の文脈において、「機能的凝集度」とは何ですか、またなぜそれが最高の凝集度形式と見なされるのですか？",
        solution: "**機能的凝集度**は最も強い種類の凝集度であり、**モジュールのすべての部分が単一の、明確に定義されたタスクの実行に貢献する**ものです。すべての要素がタスクに不可欠です。それは、SRPに完全に準拠し、変更の理由が1つしかない、高度に焦点を絞った、再利用可能で保守が容易なモジュールになるため、最良の形式です。"
      },
      vi: {
        title: "Các loại Cohesion (Functional)",
        body: "Trong bối cảnh thiết kế phần mềm và Cohesion (Gắn kết), 'Functional Cohesion' là gì, và tại sao nó được coi là hình thức gắn kết cao nhất/tốt nhất?",
        solution: "**Functional Cohesion** là loại gắn kết mạnh nhất, trong đó **mọi phần của module đều đóng góp vào việc thực thi một tác vụ duy nhất, được xác định rõ ràng**. Tất cả các phần tử đều thiết yếu cho tác vụ đó. Nó là hình thức tốt nhất vì nó dẫn đến các module có tính tập trung cao, có thể tái sử dụng và dễ bảo trì, chỉ có một lý do để thay đổi, tuân thủ hoàn hảo SRP."
      }
    }
  },
  {
    _id: "java-m-049",
    difficulty: "middle",
    tags: ["collections", "treeset", "navigable"],
    content: {
      en: {
        title: "`NavigableSet` methods",
        body: "What is the main benefit of using a `NavigableSet` (like `TreeSet`) over a regular `Set`, and name one useful method it provides for finding elements near a target.",
        solution: "`NavigableSet` extends `SortedSet` and provides functionality for **navigation, searching, and accessing elements based on their closeness to a target value**. One useful method is **`floor(E e)`** (returns the greatest element less than or equal to $e$) or **`ceiling(E e)`** (returns the least element greater than or equal to $e$). It allows for efficient ranged queries."
      },
      jp: {
        title: "`NavigableSet`メソッド",
        body: "通常の`Set`に対して`NavigableSet`（`TreeSet`など）を使用する主な利点は何ですか、またターゲットに近い要素を見つけるために提供する便利なメソッドを1つ挙げてください。",
        solution: "`NavigableSet`は`SortedSet`を拡張し、**ナビゲーション、検索、およびターゲット値への近さに基づいて要素にアクセスする**ための機能を提供します。便利なメソッドの1つは、**`floor(E e)`**（$e$以下の最大の要素を返す）または**`ceiling(E e)`**（$e$以上の最小の要素を返す）です。これにより、効率的な範囲クエリが可能になります。"
      },
      vi: {
        title: "Các phương thức `NavigableSet`",
        body: "Lợi ích chính của việc sử dụng `NavigableSet` (như `TreeSet`) so với `Set` thông thường là gì, và nêu tên một phương thức hữu ích nó cung cấp để tìm các phần tử gần một mục tiêu.",
        solution: "`NavigableSet` mở rộng `SortedSet` và cung cấp chức năng **điều hướng, tìm kiếm và truy cập các phần tử dựa trên sự gần gũi của chúng với một giá trị mục tiêu**. Một phương thức hữu ích là **`floor(E e)`** (trả về phần tử lớn nhất nhỏ hơn hoặc bằng $e$) hoặc **`ceiling(E e)`** (trả về phần tử nhỏ nhất lớn hơn hoặc bằng $e$). Nó cho phép truy vấn phạm vi hiệu quả."
      }
    }
  },
  {
    _id: "java-m-050",
    difficulty: "middle",
    tags: ["exception", "error", "checked-unchecked"],
    content: {
      en: {
        title: "Checked vs Unchecked Exception Usage",
        body: "Explain the general design philosophy (the Java convention) for when to use a **Checked Exception** versus an **Unchecked Exception** (`RuntimeException`).",
        solution: "**Checked Exceptions** are typically used for **recoverable conditions** that the client code should anticipate and handle (e.g., `IOException`, `FileNotFoundException`). **Unchecked Exceptions** (`RuntimeException`) are typically used for **programming errors** (non-recoverable runtime issues) that should have been prevented by better code logic (e.g., `NullPointerException`, `ArrayIndexOutOfBoundsException`)."
      },
      jp: {
        title: "Checked vs Unchecked例外の使用法",
        body: "**Checked Exception**と**Unchecked Exception**（`RuntimeException`）をいつ使用するかについての一般的な設計哲学（Javaの慣習）を説明してください。",
        solution: "**Checked Exception**は通常、クライアントコードが予期して処理すべき**回復可能な条件**（例：`IOException`、`FileNotFoundException`）に使用されます。**Unchecked Exception**（`RuntimeException`）は通常、より良いコードロジックによって防がれるべきだった**プログラミングエラー**（回復不可能な実行時問題）（例：`NullPointerException`、`ArrayIndexOutOfBoundsException`）に使用されます。"
      },
      vi: {
        title: "Sử dụng Checked và Unchecked Exception",
        body: "Giải thích triết lý thiết kế chung (quy ước của Java) về thời điểm sử dụng **Checked Exception** so với **Unchecked Exception** (`RuntimeException`).",
        solution: "**Checked Exceptions** thường được sử dụng cho **các điều kiện có thể phục hồi** mà mã client nên lường trước và xử lý (ví dụ: `IOException`, `FileNotFoundException`). **Unchecked Exceptions** (`RuntimeException`) thường được sử dụng cho **các lỗi lập trình** (các vấn đề runtime không thể phục hồi) lẽ ra phải được ngăn chặn bằng logic mã tốt hơn (ví dụ: `NullPointerException`, `ArrayIndexOutOfBoundsException`)."
      }
    }
  }
];
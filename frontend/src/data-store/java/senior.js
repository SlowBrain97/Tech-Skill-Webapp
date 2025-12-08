export const javaSeniorQuestions = [
  {
    _id: "java-s-001",
    difficulty: "senior",
    tags: ["jvm", "memory", "gc", "tuning"],
    content: {
      en: {
        title: "Stop-The-World (STW)",
        body: "What is a 'Stop-The-World' (STW) event in the context of JVM Garbage Collection, and why do developers often try to minimize its duration?",
        solution: "STW is a phase during garbage collection where **all application threads are halted** to ensure a consistent heap state for GC operation. While STW, the application appears frozen, causing **latency and poor user experience**. Senior developers minimize STW duration through GC algorithm choice (e.g., G1, ZGC) and heap tuning to maintain low-latency services."
      },
      jp: {
        title: "Stop-The-World (STW)",
        body: "JVMガベージコレクションの文脈における「Stop-The-World」（STW）イベントとは何ですか、また開発者がその期間を最小限に抑えようとするのはなぜですか？",
        solution: "STWは、GC操作のために一貫したヒープ状態を確保するために、**すべてのアプリケーションスレッドが停止される**ガベージコレクション中のフェーズです。STWの間、アプリケーションはフリーズしているように見え、**レイテンシと劣悪なユーザーエクスペリエンス**を引き起こします。上級開発者は、GCアルゴリズムの選択（例：G1、ZGC）やヒープチューニングを通じてSTW期間を最小限に抑え、低レイテンシのサービスを維持します。"
      },
      vi: {
        title: "Stop-The-World (STW)",
        body: "Sự kiện 'Stop-The-World' (STW) trong bối cảnh Garbage Collection của JVM là gì, và tại sao các nhà phát triển thường cố gắng giảm thiểu thời lượng của nó?",
        solution: "STW là một giai đoạn trong quá trình thu gom rác, nơi **tất cả các luồng ứng dụng bị dừng lại** để đảm bảo trạng thái heap nhất quán cho hoạt động GC. Trong khi STW diễn ra, ứng dụng dường như bị đóng băng, gây ra **độ trễ (latency) và trải nghiệm người dùng kém**. Các nhà phát triển Senior giảm thiểu thời lượng STW thông qua việc lựa chọn thuật toán GC (ví dụ: G1, ZGC) và điều chỉnh heap để duy trì các dịch vụ có độ trễ thấp."
      }
    }
  },
  {
    _id: "java-s-002",
    difficulty: "senior",
    tags: ["concurrency", "jmm", "memory-model"],
    content: {
      en: {
        title: "Java Memory Model (JMM)",
        body: "In the Java Memory Model (JMM), what does the term **'happens-before'** relationship guarantee, and how does it relate to `volatile` variables?",
        solution: "The **'happens-before'** relationship is the **guarantee of visibility and ordering** between two operations. If action A happens-before action B, then the effects of A are visible to B. For **`volatile`** variables, a write to a `volatile` variable happens-before any subsequent read of that variable by any thread. This ensures that memory changes made by one thread are immediately visible to others."
      },
      jp: {
        title: "Javaメモリーモデル (JMM)",
        body: "Javaメモリーモデル（JMM）において、「**happens-before**」関係は何を保証しますか、また`volatile`変数とどのように関連していますか？",
        solution: "「**happens-before**」関係は、2つの操作間の**可視性と順序付けの保証**です。アクションAがアクションBのhappens-beforeである場合、Aの影響はBに可視です。**`volatile`**変数については、`volatile`変数への書き込みは、その後の任意のスレッドによるその変数の読み取りのhappens-beforeです。これにより、あるスレッドによって行われたメモリの変更が他のスレッドに即座に可視になることが保証されます。"
      },
      vi: {
        title: "Java Memory Model (JMM)",
        body: "Trong Java Memory Model (JMM), thuật ngữ **'happens-before'** đảm bảo điều gì, và nó liên quan đến các biến `volatile` như thế nào?",
        solution: "Mối quan hệ **'happens-before'** là sự **đảm bảo về tính hiển thị và thứ tự** giữa hai thao tác. Nếu hành động A happens-before hành động B, thì các hiệu ứng của A sẽ hiển thị đối với B. Đối với các biến **`volatile`**, một thao tác ghi vào biến `volatile` sẽ happens-before bất kỳ thao tác đọc nào sau đó của biến đó bởi bất kỳ luồng nào. Điều này đảm bảo rằng các thay đổi bộ nhớ được thực hiện bởi một luồng sẽ hiển thị ngay lập tức với các luồng khác."
      }
    }
  },
  {
    _id: "java-s-003",
    difficulty: "senior",
    tags: ["design", "pattern", "proxy", "aop"],
    content: {
      en: {
        title: "Dynamic Proxy Purpose",
        body: "Explain the primary use case for Java's **Dynamic Proxy** mechanism (`java.lang.reflect.Proxy`), and how it relates to concepts like AOP or transactions.",
        solution: "Dynamic Proxy is used to **create a proxy object at runtime** that implements a specified interface (or interfaces). Its primary use case is to implement **Aspect-Oriented Programming (AOP)** features, such as transaction management, security checks, logging, or caching, **without modifying the original class**. The proxy intercepts method calls and adds 'cross-cutting concerns' before or after executing the actual method."
      },
      jp: {
        title: "動的プロキシの目的",
        body: "Javaの**動的プロキシ**メカニズム（`java.lang.reflect.Proxy`）の主要な使用事例と、それがAOPやトランザクションのような概念とどのように関連するかを説明してください。",
        solution: "動的プロキシは、指定されたインターフェース（または複数のインターフェース）を実装する**プロキシオブジェクトを実行時に作成する**ために使用されます。その主な使用事例は、トランザクション管理、セキュリティチェック、ロギング、キャッシングなどの**アスペクト指向プログラミング（AOP）**機能を**元のクラスを変更することなく**実装することです。プロキシはメソッド呼び出しを傍受し、実際のメソッドを実行する前または後に「横断的な関心事」を追加します。"
      },
      vi: {
        title: "Mục đích Dynamic Proxy",
        body: "Giải thích trường hợp sử dụng chính của cơ chế **Dynamic Proxy** của Java (`java.lang.reflect.Proxy`), và cách nó liên quan đến các khái niệm như AOP hoặc giao dịch.",
        solution: "Dynamic Proxy được sử dụng để **tạo một đối tượng proxy tại thời điểm chạy** implement một interface (hoặc các interface) được chỉ định. Trường hợp sử dụng chính của nó là để implement các tính năng **Lập trình Hướng đối tượng (AOP)**, chẳng hạn như quản lý giao dịch, kiểm tra bảo mật, ghi nhật ký, hoặc caching, **mà không cần sửa đổi class gốc**. Proxy chặn các lời gọi phương thức và thêm 'cross-cutting concerns' trước hoặc sau khi thực thi phương thức thực tế."
      }
    }
  },
  {
    _id: "java-s-004",
    difficulty: "senior",
    tags: ["jvm", "gc", "g1", "throughput"],
    content: {
      en: {
        title: "G1 Garbage Collector (G1GC)",
        body: "What is the fundamental architectural difference between the G1 Garbage Collector (Java 7+) and the older generational collectors (like Parallel/CMS), particularly concerning heap layout?",
        solution: "Older generational collectors divide the heap into contiguous, fixed-size Young (Eden/Survivor) and Old regions. **G1GC** fundamentally changes this by dividing the heap into many equally sized **Regions**. G1 is still generational, but Young and Old spaces are a **dynamic, logical collection of these regions**. This regionalized approach allows G1 to prioritize collecting regions with the most garbage first (Garbage-First) and enable better, more consistent pause time predictions."
      },
      jp: {
        title: "G1ガベージコレクター (G1GC)",
        body: "G1ガベージコレクター（Java 7+）と古い世代別コレクター（Parallel/CMSなど）の間の基本的なアーキテクチャの違いは何ですか、特にヒープのレイアウトに関して？",
        solution: "古い世代別コレクターは、ヒープを連続した固定サイズのYoung（Eden/Survivor）領域とOld領域に分割します。**G1GC**は、ヒープを多くの等しいサイズの**リージョン**に分割することでこれを根本的に変更します。G1は依然として世代別ですが、YoungとOldスペースは**これらのリージョンの動的で論理的なコレクション**です。このリージョン化されたアプローチにより、G1は最初に最もゴミが多いリージョンを収集すること（Garbage-First）を優先し、より良く、より一貫した一時停止時間の予測を可能にします。"
      },
      vi: {
        title: "G1 Garbage Collector (G1GC)",
        body: "Sự khác biệt kiến trúc cơ bản giữa G1 Garbage Collector (Java 7+) và các collector thế hệ cũ hơn (như Parallel/CMS) là gì, đặc biệt liên quan đến bố cục heap?",
        solution: "Các collector thế hệ cũ hơn chia heap thành các vùng Young (Eden/Survivor) và Old liên tục, có kích thước cố định. **G1GC** thay đổi điều này một cách cơ bản bằng cách chia heap thành nhiều **Region** có kích thước bằng nhau. G1 vẫn là generational, nhưng các không gian Young và Old là một **tập hợp logic, động của các region này**. Cách tiếp cận theo khu vực này cho phép G1 ưu tiên thu gom các region có nhiều rác nhất trước (Garbage-First) và cho phép dự đoán thời gian tạm dừng tốt hơn, nhất quán hơn."
      }
    }
  },
  {
    _id: "java-s-005",
    difficulty: "senior",
    tags: ["design", "pattern", "reactor", "reactive"],
    content: {
      en: {
        title: "Reactive Programming Backpressure",
        body: "In Reactive Programming (e.g., Reactor or Flow API), what problem does **Backpressure** solve, and how is it typically implemented?",
        solution: "**Backpressure** solves the problem of a **fast Producer overwhelming a slow Consumer**. If the Producer emits data faster than the Consumer can process it, the Consumer's resources (memory, thread pool) will be exhausted, leading to crashes. Backpressure is implemented by the Consumer telling the Producer **how many items it is ready to receive** (a **request-based protocol**), allowing the data flow rate to be dynamically managed and controlled."
      },
      jp: {
        title: "リアクティブプログラミングのバックプレッシャー",
        body: "リアクティブプログラミング（例：ReactorまたはFlow API）において、**バックプレッシャー**はどのような問題を解決し、通常どのように実装されますか？",
        solution: "**バックプレッシャー**は、**速いProducerが遅いConsumerを圧倒する**という問題を解決します。ProducerがConsumerが処理できるよりも速くデータを放出すると、Consumerのリソース（メモリ、スレッドプール）が枯渇し、クラッシュにつながります。バックプレッシャーは、ConsumerがProducerに**受け取る準備ができているアイテムの数**を伝えることによって実装されます（**リクエストベースのプロトコル**）。これにより、データフローレートを動的に管理および制御できます。"
      },
      vi: {
        title: "Backpressure trong Reactive Programming",
        body: "Trong Reactive Programming (ví dụ: Reactor hoặc Flow API), **Backpressure** giải quyết vấn đề gì, và nó thường được implement như thế nào?",
        solution: "**Backpressure** giải quyết vấn đề **Producer nhanh áp đảo Consumer chậm**. Nếu Producer phát ra dữ liệu nhanh hơn Consumer có thể xử lý, tài nguyên của Consumer (bộ nhớ, thread pool) sẽ bị cạn kiệt, dẫn đến lỗi. Backpressure được implement bằng cách Consumer thông báo cho Producer **số lượng mục mà nó đã sẵn sàng nhận** (một **request-based protocol**), cho phép tốc độ luồng dữ liệu được quản lý và kiểm soát một cách linh hoạt."
      }
    }
  },
  {
    _id: "java-s-006",
    difficulty: "senior",
    tags: ["jvm", "classloader", "isolation"],
    content: {
      en: {
        title: "Class Loader Delegation Model",
        body: "Explain the **Delegation Hierarchy Model** used by Java Class Loaders and why it's crucial for security and preventing class conflicts.",
        solution: "The model dictates that when a Class Loader needs to load a class, it first **delegates the request up to its parent** (Bootstrap -> Extension -> System) before attempting to load the class itself. It only tries to load the class if its parents cannot find it (**parent-first delegation**). This is crucial because it ensures that core Java API classes (like `String`) are always loaded by the trusted Bootstrap Class Loader, preventing malicious code from replacing them (security) and ensuring consistency (preventing class conflicts)."
      },
      jp: {
        title: "クラスローダーの委譲モデル",
        body: "Javaクラスローダーが使用する**委譲階層モデル**と、それがセキュリティおよびクラスの競合を防ぐ上で重要である理由を説明してください。",
        solution: "このモデルは、クラスローダーがクラスをロードする必要がある場合、まず**その要求を親に委譲し**（Bootstrap -> Extension -> System）、親が見つけられない場合にのみクラスをロードしようとすることを規定しています（**親優先の委譲**）。これは、コアJava APIクラス（`String`など）が常に信頼できるBootstrap Class Loaderによってロードされることを保証し、悪意のあるコードがそれらを置き換えるのを防ぎ（セキュリティ）、一貫性を確保する（クラスの競合を防ぐ）ために重要です。"
      },
      vi: {
        title: "Mô hình Class Loader Delegation",
        body: "Giải thích **Mô hình Phân cấp Ủy quyền (Delegation Hierarchy Model)** được sử dụng bởi Java Class Loaders và tại sao nó rất quan trọng đối với bảo mật và ngăn ngừa xung đột class.",
        solution: "Mô hình quy định rằng khi một Class Loader cần tải một class, nó trước tiên sẽ **ủy quyền yêu cầu đó cho class cha của nó** (Bootstrap -> Extension -> System) trước khi cố gắng tự tải class đó (**parent-first delegation**). Nó chỉ cố gắng tải class nếu các class cha của nó không thể tìm thấy. Điều này rất quan trọng vì nó đảm bảo rằng các class API Java cốt lõi (như `String`) luôn được tải bởi Bootstrap Class Loader đáng tin cậy, ngăn chặn mã độc thay thế chúng (bảo mật) và đảm bảo tính nhất quán (ngăn ngừa xung đột class)."
      }
    }
  },
  {
    _id: "java-s-007",
    difficulty: "senior",
    tags: ["concurrency", "executor", "scheduler"],
    content: {
      en: {
        title: "Thread Pool Sizing",
        body: "In a heavily CPU-bound application, what is the generally recommended guideline for sizing a fixed-size `ThreadPoolExecutor` and why?",
        solution: "For **CPU-bound** tasks, the general guideline is to set the pool size to $\\text{Number of Cores} + 1$ (or just $\\text{Number of Cores}$). The $\\text{+1}$ is often added to accommodate potential page faults or brief hiccups. The goal is to ensure that the threads are always executing and never waiting, minimizing context switching overhead while maximizing CPU utilization. For IO-bound tasks, the size should be much larger."
      },
      jp: {
        title: "スレッドプールのサイジング",
        body: "CPUバウンドなアプリケーションにおいて、固定サイズの`ThreadPoolExecutor`のサイジングに関する一般的に推奨されるガイドラインは何ですか、またその理由は何ですか？",
        solution: "**CPUバウンド**なタスクの場合、一般的なガイドラインは、プールサイズを$\\text{コア数} + 1$（または単に$\\text{コア数}$）に設定することです。$\\text{+1}$は、潜在的なページフォルトや短いひっかかりに対応するためによく追加されます。目標は、スレッドが常に実行されており、待機していないことを保証し、CPUの使用率を最大化しながらコンテキストスイッチングのオーバーヘッドを最小限に抑えることです。IOバウンドなタスクの場合、サイズは遥かに大きくする必要があります。"
      },
      vi: {
        title: "Kích thước Thread Pool",
        body: "Trong một ứng dụng bị giới hạn bởi CPU (CPU-bound), hướng dẫn chung được khuyến nghị để xác định kích thước của một `ThreadPoolExecutor` có kích thước cố định là gì và tại sao?",
        solution: "Đối với các tác vụ **CPU-bound**, hướng dẫn chung là đặt kích thước pool thành $\\text{Số lõi} + 1$ (hoặc chỉ $\\text{Số lõi}$). $\\text{+1}$ thường được thêm vào để xử lý các lỗi trang (page faults) tiềm năng hoặc các trục trặc ngắn. Mục tiêu là đảm bảo rằng các luồng luôn thực thi và không bao giờ phải chờ đợi, giảm thiểu chi phí chuyển đổi ngữ cảnh (context switching) trong khi tối đa hóa việc sử dụng CPU. Đối với các tác vụ IO-bound, kích thước phải lớn hơn nhiều."
      }
    }
  },
  {
    _id: "java-s-008",
    difficulty: "senior",
    tags: ["design", "arch", "cqrs", "event-sourcing"],
    content: {
      en: {
        title: "CQRS Pattern Purpose",
        body: "What problem does the **Command Query Responsibility Segregation (CQRS)** architectural pattern aim to solve, and how does it typically structure data operations?",
        solution: "**CQRS** solves the problem of a single data model being optimized for both **reads (queries)** and **writes (commands)**, which often leads to complex, inefficient, or difficult-to-scale systems. CQRS separates the application into two distinct models: one optimized for updating data (Commands) and another optimized for reading data (Queries). The write model is often complex (relational), and the read model is simple (denormalized, optimized for display)."
      },
      jp: {
        title: "CQRSパターンの目的",
        body: "**Command Query Responsibility Segregation (CQRS)**アーキテクチャパターンはどのような問題の解決を目指しており、通常、データ操作をどのように構造化しますか？",
        solution: "**CQRS**は、単一のデータモデルが**読み取り（クエリ）**と**書き込み（コマンド）**の両方に最適化されているという問題（しばしば複雑で非効率的、またはスケーリングが困難なシステムにつながる）を解決します。CQRSは、アプリケーションを2つの異なるモデルに分離します。1つはデータの更新に最適化され（コマンド）、もう1つはデータの読み取りに最適化されています（クエリ）。書き込みモデルはしばしば複雑であり（リレーショナル）、読み取りモデルは単純です（非正規化され、表示用に最適化されています）。"
      },
      vi: {
        title: "Mục đích CQRS Pattern",
        body: "Mẫu kiến trúc **Command Query Responsibility Segregation (CQRS)** nhằm mục đích giải quyết vấn đề gì, và nó thường cấu trúc các thao tác dữ liệu như thế nào?",
        solution: "**CQRS** giải quyết vấn đề một mô hình dữ liệu duy nhất được tối ưu hóa cho cả **đọc (queries)** và **ghi (commands)**, điều này thường dẫn đến các hệ thống phức tạp, kém hiệu quả hoặc khó mở rộng. CQRS tách ứng dụng thành hai mô hình riêng biệt: một mô hình được tối ưu hóa cho việc cập nhật dữ liệu (Commands) và một mô hình khác được tối ưu hóa cho việc đọc dữ liệu (Queries). Mô hình ghi thường phức tạp (quan hệ), và mô hình đọc thì đơn giản (denormalized, tối ưu hóa cho hiển thị)."
      }
    }
  },
  {
    _id: "java-s-009",
    difficulty: "senior",
    tags: ["stream", "collector", "performance"],
    content: {
      en: {
        title: "Custom Stream Collector",
        body: "When writing a custom `Collector<T, A, R>` for the Stream API, what are the three functions required by the `Collector` interface's `supplier()`, `accumulator()`, and `combiner()` methods?",
        solution: "1. **`supplier()`:** Creates a **new mutable result container** (Accumulator $A$). 2. **`accumulator()`:** Incorporates a new data element ($T$) into the result container ($A$), modifying the container in place. 3. **`combiner()`:** Merges two result containers ($A$ and $A$) into one, typically used to combine results from **parallel stream segments**."
      },
      jp: {
        title: "カスタムストリームコレクター",
        body: "Stream API用のカスタム`Collector<T, A, R>`を作成する際、`Collector`インターフェースの`supplier()`、`accumulator()`、`combiner()`メソッドによって必要とされる3つの関数は何ですか？",
        solution: "1. **`supplier()`:** **新しいミュータブルな結果コンテナ**（アキュムレータ $A$）を作成します。 2. **`accumulator()`:** 新しいデータ要素（$T$）を結果コンテナ（$A$）に組み込み、コンテナをインプレースで変更します。 3. **`combiner()`:** 2つの結果コンテナ（$A$と$A$）を1つにマージします。これは通常、**並列ストリームセグメント**からの結果を結合するために使用されます。"
      },
      vi: {
        title: "Custom Stream Collector",
        body: "Khi viết một `Collector<T, A, R>` tùy chỉnh cho Stream API, ba hàm nào được yêu cầu bởi các phương thức `supplier()`, `accumulator()`, và `combiner()` của interface `Collector`?",
        solution: "1. **`supplier()`:** Tạo một **container kết quả có thể thay đổi mới** (Accumulator $A$). 2. **`accumulator()`:** Kết hợp một phần tử dữ liệu mới ($T$) vào container kết quả ($A$), sửa đổi container tại chỗ. 3. **`combiner()`:** Hợp nhất hai container kết quả ($A$ và $A$) thành một, thường được sử dụng để kết hợp kết quả từ **các phân đoạn stream song song**."
      }
    }
  },
  {
    _id: "java-s-010",
    difficulty: "senior",
    tags: ["threading", "concurrency", "aqs"],
    content: {
      en: {
        title: "AbstractQueuedSynchronizer (AQS)",
        body: "The `AbstractQueuedSynchronizer` (AQS) is the foundation of many Java concurrency utilities. What is the fundamental resource management mechanism that AQS provides, and what is the significance of its internal `state` variable?",
        solution: "AQS provides a framework for implementing blocking locks and synchronizers that rely on a **First-In, First-Out (FIFO) queue** to manage waiting threads. Its fundamental mechanism is managing the acquisition and release of a **single synchronization state** via the internal `state` variable (an `int`). Subclasses (like `ReentrantLock` or `Semaphore`) use this `state` to represent the locking status or available permits."
      },
      jp: {
        title: "AbstractQueuedSynchronizer (AQS)",
        body: "`AbstractQueuedSynchronizer`（AQS）は、多くのJava並行処理ユーティリティの基盤です。AQSが提供する基本的なリソース管理メカニズムは何ですか、またその内部の`state`変数の重要性は何ですか？",
        solution: "AQSは、待機中のスレッドを管理するために**First-In, First-Out（FIFO）キュー**に依存するブロッキングロックとシンクロナイザーを実装するためのフレームワークを提供します。その基本的なメカニズムは、内部の`state`変数（`int`）を介した**単一の同期状態**の取得と解放の管理です。サブクラス（`ReentrantLock`や`Semaphore`など）は、この`state`を使用してロックの状態や利用可能な許可を表します。"
      },
      vi: {
        title: "AbstractQueuedSynchronizer (AQS)",
        body: "`AbstractQueuedSynchronizer` (AQS) là nền tảng của nhiều tiện ích đồng thời của Java. Cơ chế quản lý tài nguyên cơ bản mà AQS cung cấp là gì, và ý nghĩa của biến `state` nội bộ của nó là gì?",
        solution: "AQS cung cấp một framework để implement các lock chặn và bộ đồng bộ hóa dựa vào một **hàng đợi First-In, First-Out (FIFO)** để quản lý các luồng đang chờ. Cơ chế cơ bản của nó là quản lý việc giành và giải phóng một **trạng thái đồng bộ hóa duy nhất** thông qua biến `state` nội bộ (một `int`). Các class con (như `ReentrantLock` hoặc `Semaphore`) sử dụng `state` này để đại diện cho trạng thái khóa hoặc số lượng permit có sẵn."
      }
    }
  },
  {
    _id: "java-s-011",
    difficulty: "senior",
    tags: ["serialization", "security", "readobject"],
    content: {
      en: {
        title: "Defending against Deserialization Attacks",
        body: "What is the recommended Java best practice (since Java 14) to defend against common deserialization exploits without disabling serialization entirely?",
        solution: "The recommended practice is to use **serialization filters** (the `java.io.ObjectInputFilter` API). This filter allows you to **whitelist or blacklist** specific classes that are allowed or disallowed during deserialization. By restricting the classes that can be instantiated during this process, you effectively prevent the execution of malicious 'gadget' chains, which are the core of most deserialization attacks."
      },
      jp: {
        title: "逆シリアル化攻撃からの防御",
        body: "シリアル化を完全に無効にすることなく、一般的な逆シリアル化エクスプロイトから防御するために推奨されるJavaのベストプラクティス（Java 14以降）は何ですか？",
        solution: "推奨されるプラクティスは、**シリアル化フィルター**（`java.io.ObjectInputFilter` API）を使用することです。このフィルターを使用すると、逆シリアル化中に許可または不許可される特定のクラスを**ホワイトリストまたはブラックリスト**に登録できます。このプロセス中にインスタンス化できるクラスを制限することにより、ほとんどの逆シリアル化攻撃の核となる悪意のある「ガジェット」チェーンの実行を効果的に防ぐことができます。"
      },
      vi: {
        title: "Phòng thủ chống lại Deserialization Attack",
        body: "Thực hành tốt nhất được khuyến nghị của Java (từ Java 14) để phòng thủ chống lại các khai thác deserialization phổ biến mà không vô hiệu hóa hoàn toàn serialization là gì?",
        solution: "Thực hành được khuyến nghị là sử dụng **serialization filters** (API `java.io.ObjectInputFilter`). Bộ lọc này cho phép bạn **whitelist hoặc blacklist** các class cụ thể được phép hoặc không được phép trong quá trình deserialization. Bằng cách hạn chế các class có thể được khởi tạo trong quá trình này, bạn sẽ ngăn chặn hiệu quả việc thực thi các chuỗi 'gadget' độc hại, vốn là cốt lõi của hầu hết các cuộc tấn công deserialization."
      }
    }
  },
  {
    _id: "java-s-012",
    difficulty: "senior",
    tags: ["oop", "arch", "clean-code", "refactoring"],
    content: {
      en: {
        title: "Tell, Don't Ask Principle",
        body: "Explain the 'Tell, Don't Ask' principle in OOP design and how adhering to it improves encapsulation and reduces dependencies.",
        solution: "The 'Tell, Don't Ask' principle means you should **tell an object what to do** (by calling a method that performs an action) rather than asking it for its state (using getters) and then making a decision based on that state in external code. Adhering to it improves encapsulation because it keeps the object's internal logic and state manipulation together, reducing the client's knowledge about the object's internal details and thus lowering dependencies."
      },
      jp: {
        title: "Tell, Don't Ask (尋ねるな、命じろ) の原則",
        body: "OOP設計における「Tell, Don't Ask」（尋ねるな、命じろ）の原則を説明し、それに従うことがカプセル化を改善し、依存関係を減らす方法を説明してください。",
        solution: "「Tell, Don't Ask」の原則は、オブジェクトの状態を尋ねて（ゲッターを使用して）外部コードでその状態に基づいて決定を下すのではなく、**オブジェクトに何をすべきかを伝える**（アクションを実行するメソッドを呼び出す）べきであることを意味します。それに従うことは、オブジェクトの内部ロジックと状態操作を一緒に保つため、カプセル化を改善し、クライアントのオブジェクトの内部詳細に関する知識を減らし、したがって依存関係を減らします。"
      },
      vi: {
        title: "Nguyên tắc Tell, Don't Ask",
        body: "Giải thích nguyên tắc 'Tell, Don't Ask' (Nói, Đừng Hỏi) trong thiết kế OOP và cách việc tuân thủ nó cải thiện tính đóng gói và giảm dependency.",
        solution: "Nguyên tắc 'Tell, Don't Ask' có nghĩa là bạn nên **nói cho một đối tượng biết phải làm gì** (bằng cách gọi một phương thức thực hiện hành động) thay vì hỏi về trạng thái của nó (sử dụng getters) và sau đó đưa ra quyết định dựa trên trạng thái đó trong mã bên ngoài. Việc tuân thủ nó cải thiện tính đóng gói vì nó giữ logic nội bộ và thao tác trạng thái của đối tượng lại với nhau, giảm kiến thức của client về các chi tiết nội bộ của đối tượng và do đó giảm dependency."
      }
    }
  },
  {
    _id: "java-s-013",
    difficulty: "senior",
    tags: ["threading", "concurrency", "performance", "lock-free"],
    content: {
      en: {
        title: "Compare-And-Swap (CAS)",
        body: "Explain the Compare-And-Swap (CAS) operation and why it is essential for building lock-free and non-blocking data structures in Java's concurrency package.",
        solution: "CAS is an **atomic, three-operand machine instruction** (compare, swap, write). It reads the value $V$ of a memory location, compares it with an expected value $A$, and if they are the same, it updates $V$ with a new value $B$. If they differ, no write occurs. It is essential for lock-free structures because it allows for atomic updates **without requiring explicit blocking locks** (like `synchronized`), greatly improving performance and scalability, especially on multi-core processors, by relying on hardware support."
      },
      jp: {
        title: "Compare-And-Swap (CAS)",
        body: "Compare-And-Swap（CAS）操作を説明し、それがJavaの並行処理パッケージでロックフリーかつ非ブロッキングなデータ構造を構築するために不可欠である理由を説明してください。",
        solution: "CASは**アトミックな3オペランドのマシン命令**（比較、スワップ、書き込み）です。メモリ位置の値$V$を読み取り、それを期待値$A$と比較し、それらが同じであれば、$V$を新しい値$B$で更新します。異なれば、書き込みは発生しません。これは、**明示的なブロッキングロック**（`synchronized`など）を必要とせずにアトミックな更新を可能にするため、ロックフリーな構造にとって不可欠であり、特にマルチコアプロセッサで、ハードウェアサポートに依存することでパフォーマンスとスケーラビリティを大幅に向上させます。"
      },
      vi: {
        title: "Compare-And-Swap (CAS)",
        body: "Giải thích thao tác Compare-And-Swap (CAS) và tại sao nó cần thiết để xây dựng các cấu trúc dữ liệu lock-free và non-blocking trong gói concurrency của Java.",
        solution: "CAS là một **lệnh máy tính ba toán hạng, nguyên tử** (so sánh, hoán đổi, ghi). Nó đọc giá trị $V$ của một vị trí bộ nhớ, so sánh nó với một giá trị mong đợi $A$, và nếu chúng giống nhau, nó cập nhật $V$ bằng một giá trị mới $B$. Nếu chúng khác nhau, không có thao tác ghi nào xảy ra. Nó cần thiết cho các cấu trúc lock-free vì nó cho phép cập nhật nguyên tử **mà không yêu cầu khóa chặn tường minh** (như `synchronized`), cải thiện đáng kể hiệu suất và khả năng mở rộng, đặc biệt trên các bộ xử lý đa lõi, bằng cách dựa vào hỗ trợ phần cứng."
      }
    }
  },
  {
    _id: "java-s-014",
    difficulty: "senior",
    tags: ["jvm", "classloader", "module"],
    content: {
      en: {
        title: "Java 9 Modules (JPMS)",
        body: "What is the primary motivation behind the introduction of the Java Platform Module System (JPMS) in Java 9, and what two key benefits does it provide?",
        solution: "The primary motivation was to replace the brittle CLASSPATH mechanism and solve the **'JAR Hell'** problem by improving reliability and maintainability. Key benefits: 1. **Strong Encapsulation:** Only explicitly exported packages are visible outside a module, preventing access to internal implementation details. 2. **Reliable Configuration:** Modules explicitly state their dependencies, allowing the JVM to check for missing modules at launch time."
      },
      jp: {
        title: "Java 9モジュール (JPMS)",
        body: "Java 9でJavaプラットフォームモジュールシステム（JPMS）が導入された主な動機は何ですか、またそれが提供する2つの主要な利点は何ですか？",
        solution: "主な動機は、脆弱なCLASSPATHメカニズムを置き換え、信頼性と保守性を向上させることによって**「JAR Hell」**の問題を解決することでした。主な利点: 1. **強力なカプセル化:** 明示的にエクスポートされたパッケージのみがモジュールの外部から可視になり、内部実装の詳細へのアクセスを防ぎます。 2. **信頼性の高い構成:** モジュールは依存関係を明示的に宣言し、JVMが起動時に不足しているモジュールをチェックできるようにします。"
      },
      vi: {
        title: "Java 9 Modules (JPMS)",
        body: "Động lực chính đằng sau việc giới thiệu Java Platform Module System (JPMS) trong Java 9 là gì, và nó cung cấp hai lợi ích chính nào?",
        solution: "Động lực chính là thay thế cơ chế CLASSPATH dễ vỡ và giải quyết vấn đề **'JAR Hell'** bằng cách cải thiện độ tin cậy và khả năng bảo trì. Các lợi ích chính: 1. **Đóng gói mạnh mẽ:** Chỉ các package được xuất khẩu (exported) tường minh mới hiển thị bên ngoài một module, ngăn chặn truy cập vào các chi tiết implement nội bộ. 2. **Cấu hình đáng tin cậy:** Các module tường minh khai báo các dependency của chúng, cho phép JVM kiểm tra các module bị thiếu tại thời điểm khởi chạy."
      }
    }
  },
  {
    _id: "java-s-015",
    difficulty: "senior",
    tags: ["design", "arch", "event-sourcing", "ddd"],
    content: {
      en: {
        title: "Event Sourcing Core",
        body: "In the Event Sourcing pattern, how is the current state of an application or entity determined, and what is the main benefit of this approach?",
        solution: "The current state is **not stored directly**; instead, it is determined by **replaying and applying all committed events** (the 'source of truth') from the beginning of time (or the last snapshot) up to the current moment. The main benefit is a **complete audit log** of all changes, enabling time-travel debugging, easier integration with CQRS, and the ability to project the same event data into different read models."
      },
      jp: {
        title: "イベントソーシングの核",
        body: "イベントソーシングパターンにおいて、アプリケーションまたはエンティティの現在の状態はどのように決定されますか、またこのアプローチの主な利点は何ですか？",
        solution: "現在の状態は**直接保存されません**。代わりに、時間の初めから（または最後のスナップショットから）現在の瞬間まで、**コミットされたすべてのイベント**（「真実の源」）を**リプレイして適用する**ことによって決定されます。主な利点は、すべての変更の**完全な監査ログ**であり、タイムトラベルデバッグ、CQRSとのより簡単な統合、および同じイベントデータを異なる読み取りモデルに投影する能力を可能にします。"
      },
      vi: {
        title: "Cốt lõi Event Sourcing",
        body: "Trong mẫu Event Sourcing, trạng thái hiện tại của một ứng dụng hoặc thực thể được xác định như thế nào, và lợi ích chính của phương pháp này là gì?",
        solution: "Trạng thái hiện tại **không được lưu trữ trực tiếp**; thay vào đó, nó được xác định bằng cách **phát lại và áp dụng tất cả các sự kiện đã được commit** ('nguồn sự thật') từ lúc bắt đầu (hoặc snapshot cuối cùng) cho đến thời điểm hiện tại. Lợi ích chính là một **nhật ký kiểm toán đầy đủ** của tất cả các thay đổi, cho phép gỡ lỗi 'du hành thời gian', tích hợp dễ dàng hơn với CQRS và khả năng chiếu cùng một dữ liệu sự kiện vào các mô hình đọc khác nhau."
      }
    }
  },
  {
    _id: "java-s-016",
    difficulty: "senior",
    tags: ["oop", "design", "cohesion", "coupling"],
    content: {
      en: {
        title: "Coupling Types (Common/Content)",
        body: "In design metrics, distinguish between **Common Coupling** and **Content Coupling** (considered the worst) and explain why Content Coupling is so detrimental.",
        solution: "**Common Coupling** occurs when two modules share access to the same global data (e.g., a globally accessible static variable). **Content Coupling** is the worst form, occurring when one module **reaches inside the other module** to modify or access its private/local data (e.g., modifying a private field of another object via reflection or by pointer). Content Coupling is detrimental because it violates encapsulation completely, making the dependent module extremely brittle and impossible to maintain or reuse independently."
      },
      jp: {
        title: "結合の種類（共通/内容）",
        body: "設計メトリクスにおいて、**共通結合**と**内容結合**（最悪と見なされる）を区別し、内容結合がそれほど有害である理由を説明してください。",
        solution: "**共通結合**は、2つのモジュールが同じグローバルデータ（例：グローバルにアクセス可能な静的変数）へのアクセスを共有するときに発生します。**内容結合**は最悪の形式であり、あるモジュールが**別のモジュールの内部に手を伸ばし**てそのプライベート/ローカルデータ（例：リフレクションやポインタを介して別のオブジェクトのプライベートフィールドを変更する）を変更またはアクセスするときに発生します。内容結合はカプセル化を完全に侵害するため有害であり、依存するモジュールを非常に脆くし、独立して保守または再利用することを不可能にします。"
      },
      vi: {
        title: "Các loại Coupling (Common/Content)",
        body: "Trong các metric thiết kế, phân biệt giữa **Common Coupling** và **Content Coupling** (được coi là tồi tệ nhất) và giải thích tại sao Content Coupling lại gây hại như vậy.",
        solution: "**Common Coupling** xảy ra khi hai module chia sẻ quyền truy cập vào cùng một dữ liệu toàn cục (ví dụ: một biến static có thể truy cập toàn cục). **Content Coupling** là hình thức tồi tệ nhất, xảy ra khi một module **vươn vào bên trong module khác** để sửa đổi hoặc truy cập dữ liệu private/cục bộ của nó (ví dụ: sửa đổi một trường private của đối tượng khác thông qua reflection hoặc bằng con trỏ). Content Coupling gây hại vì nó vi phạm hoàn toàn tính đóng gói, làm cho module phụ thuộc trở nên cực kỳ dễ vỡ và không thể duy trì hoặc tái sử dụng một cách độc lập."
      }
    }
  },
  {
    _id: "java-s-017",
    difficulty: "senior",
    tags: ["jvm", "performance", "compiler", "jit"],
    content: {
      en: {
        title: "JIT Compiler Optimization",
        body: "Name and briefly describe one key optimization technique performed by the Java JIT (Just-In-Time) compiler at runtime that significantly improves performance over interpreted bytecode.",
        solution: "One key technique is **Method Inlining**. The JIT compiler replaces a method call instruction with the actual body of the called method. This eliminates the overhead of the method call setup and teardown, allows subsequent optimizations (like dead code elimination) to occur across the boundary, and is applied heavily to simple getters/setters and small utility functions."
      },
      jp: {
        title: "JITコンパイラの最適化",
        body: "実行時Java JIT（Just-In-Time）コンパイラによって実行され、解釈されたバイトコードよりもパフォーマンスを大幅に向上させる主要な最適化手法の1つを挙げて簡単に説明してください。",
        solution: "1つの主要な手法は**メソッドのインライン化**です。JITコンパイラは、メソッド呼び出し命令を、呼び出されたメソッドの実際の本体に置き換えます。これにより、メソッド呼び出しのセットアップとティアダウンのオーバーヘッドがなくなり、境界を越えたその後の最適化（デッドコードの削除など）が可能になり、単純なゲッター/セッターや小さなユーティリティ関数に大きく適用されます。"
      },
      vi: {
        title: "Tối ưu hóa JIT Compiler",
        body: "Nêu tên và mô tả ngắn gọn một kỹ thuật tối ưu hóa quan trọng được thực hiện bởi trình biên dịch JIT (Just-In-Time) của Java tại thời điểm chạy, giúp cải thiện đáng kể hiệu suất so với bytecode được thông dịch.",
        solution: "Một kỹ thuật quan trọng là **Method Inlining (Nội tuyến hóa Phương thức)**. Trình biên dịch JIT thay thế lệnh gọi phương thức bằng thân thực tế của phương thức được gọi. Điều này loại bỏ chi phí (overhead) của việc thiết lập và loại bỏ lệnh gọi phương thức, cho phép các tối ưu hóa tiếp theo (như loại bỏ mã chết) xảy ra trên ranh giới, và được áp dụng nhiều cho các getters/setters đơn giản và các hàm tiện ích nhỏ."
      }
    }
  },
  {
    _id: "java-s-018",
    difficulty: "senior",
    tags: ["threading", "concurrency", "starvation", "lock"],
    content: {
      en: {
        title: "Fair vs Non-Fair Locks",
        body: "In the context of `ReentrantLock`, what is the functional difference between a **fair lock** and a **non-fair lock**, and which one generally provides higher throughput?",
        solution: "A **fair lock** grants access to the longest-waiting thread (FIFO policy), preventing thread starvation but introducing overhead. A **non-fair lock** allows a waiting thread to 'cut the line' and acquire the lock immediately if it becomes available, even if other threads have been waiting longer. **Non-fair locks generally provide higher overall throughput** because they minimize the expensive context switching and queue management overhead associated with enforcing fairness."
      },
      jp: {
        title: "公平ロック vs 非公平ロック",
        body: "`ReentrantLock`の文脈において、**公平ロック**と**非公平ロック**の間の機能的な違いは何ですか、またどちらが一般的に高いスループットを提供しますか？",
        solution: "**公平ロック**は、最も長く待っているスレッドにアクセスを許可し（FIFOポリシー）、スレッドの飢餓を防ぎますが、オーバーヘッドが発生します。**非公平ロック**は、他のスレッドがより長く待っていたとしても、利用可能になった場合、待機中のスレッドが「列に割り込む」ことを許可し、すぐにロックを取得できるようにします。公平性を強制することに伴う高価なコンテキストスイッチングとキュー管理のオーバーヘッドを最小限に抑えるため、**非公平ロックは一般により高い全体的なスループットを提供します**。"
      },
      vi: {
        title: "Fair và Non-Fair Locks",
        body: "Trong bối cảnh của `ReentrantLock`, sự khác biệt chức năng giữa **fair lock** và **non-fair lock** là gì, và loại nào thường cung cấp thông lượng (throughput) cao hơn?",
        solution: "Một **fair lock** cấp quyền truy cập cho luồng đã chờ đợi lâu nhất (chính sách FIFO), ngăn ngừa đói luồng (thread starvation) nhưng tạo ra chi phí (overhead). Một **non-fair lock** cho phép một luồng đang chờ 'cắt hàng' và giành quyền truy cập lock ngay lập tức nếu nó có sẵn, ngay cả khi các luồng khác đã chờ lâu hơn. **Non-fair locks thường cung cấp thông lượng tổng thể cao hơn** vì chúng giảm thiểu việc chuyển đổi ngữ cảnh tốn kém và chi phí quản lý hàng đợi liên quan đến việc thực thi tính công bằng."
      }
    }
  },
  {
    _id: "java-s-019",
    difficulty: "senior",
    tags: ["design", "pattern", "structural", "facade"],
    content: {
      en: {
        title: "Facade vs Adapter Pattern",
        body: "What is the key difference in purpose between the **Facade Pattern** and the **Adapter Pattern** (both structural patterns)?",
        solution: "The **Facade Pattern** aims to **simplify the interface** to a complex subsystem. It provides a single, unified entry point to a set of interfaces, making the subsystem easier to use. The **Adapter Pattern** aims to **make two incompatible interfaces work together**. It involves converting one interface into another that a client expects. Facade simplifies; Adapter converts."
      },
      jp: {
        title: "Facadeパターン vs Adapterパターン",
        body: "**Facadeパターン**と**Adapterパターン**（両方とも構造パターン）の目的における主な違いは何ですか？",
        solution: "**Facadeパターン**は、複雑なサブシステムへの**インターフェースを簡素化する**ことを目的としています。それは、一連のインターフェースへの単一の、統一されたエントリーポイントを提供し、サブシステムを使いやすくします。**Adapterパターン**は、**互換性のない2つのインターフェースを連携させる**ことを目的としています。それは、クライアントが期待する別のインターフェースに、あるインターフェースを変換することを含みます。Facadeは簡素化し、Adapterは変換します。"
      },
      vi: {
        title: "Facade và Adapter Pattern",
        body: "Sự khác biệt chính về mục đích giữa **Facade Pattern** và **Adapter Pattern** (cả hai đều là structural pattern) là gì?",
        solution: "**Facade Pattern** nhằm mục đích **đơn giản hóa interface** đối với một hệ thống con phức tạp. Nó cung cấp một điểm truy cập duy nhất, thống nhất cho một tập hợp các interface, làm cho hệ thống con dễ sử dụng hơn. **Adapter Pattern** nhằm mục đích **làm cho hai interface không tương thích hoạt động cùng nhau**. Nó liên quan đến việc chuyển đổi một interface thành một interface khác mà client mong đợi. Facade đơn giản hóa; Adapter chuyển đổi."
      }
    }
  },
  {
    _id: "java-s-020",
    difficulty: "senior",
    tags: ["jvm", "gc", "concurrent", "latency"],
    content: {
      en: {
        title: "CMS vs G1 GC",
        body: "The Concurrent Mark Sweep (CMS) GC was deprecated in favor of G1GC. What was the main drawback of CMS that G1GC was designed to address regarding memory management?",
        solution: "The main drawback of CMS was its potential for **fragmentation** of the Old Generation heap space. CMS is a non-compacting collector, which means it leaves behind memory holes. Over time, this could lead to a **concurrent mode failure** (where CMS cannot find a large enough contiguous block for a new allocation) forcing a full, single-threaded STW collection. G1GC, being a regionalized collector, performs **compaction within regions** and across the heap incrementally, eliminating fragmentation issues and enabling better pause time goals."
      },
      jp: {
        title: "CMS vs G1 GC",
        body: "Concurrent Mark Sweep (CMS) GCはG1GCに有利になるように非推奨になりました。G1GCがメモリ管理に関して対処するように設計されたCMSの主な欠点は何でしたか？",
        solution: "CMSの主な欠点は、Old Generationヒープスペースの**断片化**の可能性でした。CMSは非圧縮コレクターであり、メモリの穴を残します。時間の経過とともに、これは**コンカレントモードの失敗**（CMSが新しい割り当てのために十分な大きさの連続したブロックを見つけられない）につながり、フルでシングルスレッドのSTWコレクションを強制する可能性があります。G1GCは、リージョン化されたコレクターであるため、リージョン内およびヒープ全体で**インクリメンタルな圧縮**を実行し、断片化の問題を排除し、より良い一時停止時間の目標を可能にします。"
      },
      vi: {
        title: "CMS và G1 GC",
        body: "Concurrent Mark Sweep (CMS) GC đã bị phản đối để ưu tiên G1GC. Nhược điểm chính của CMS mà G1GC được thiết kế để giải quyết liên quan đến quản lý bộ nhớ là gì?",
        solution: "Nhược điểm chính của CMS là tiềm năng **phân mảnh (fragmentation)** của không gian heap Old Generation. CMS là một collector không nén (non-compacting), nghĩa là nó để lại các lỗ hổng bộ nhớ. Theo thời gian, điều này có thể dẫn đến **lỗi chế độ đồng thời (concurrent mode failure)** (nơi CMS không thể tìm thấy một khối liên tục đủ lớn cho một phân bổ mới) buộc phải thực hiện một bộ thu gom STW đầy đủ, đơn luồng. G1GC, là một collector theo khu vực, thực hiện **nén trong các region** và trên toàn bộ heap một cách tăng dần, loại bỏ các vấn đề phân mảnh và cho phép các mục tiêu thời gian tạm dừng tốt hơn."
      }
    }
  },
  {
    _id: "java-s-021",
    difficulty: "senior",
    tags: ["stream", "api", "functional"],
    content: {
      en: {
        title: "`map` vs `flatMap` vs `peek`",
        body: "In the Java Stream API, differentiate between the functionality and purpose of the intermediate operations `map()`, `flatMap()`, and `peek()`.",
        solution: "1. **`map()`:** Transforms each element in the stream one-to-one into a new element. (Stream of $A$ to Stream of $B$). 2. **`flatMap()`:** Transforms each element into **a stream of elements**, and then **flattens** those streams into a single output stream. (Stream of Stream of $B$ becomes Stream of $B$). 3. **`peek()`:** Performs an action on each element as it passes through the stream, primarily for **debugging/logging**. It returns a stream containing the same elements, serving no functional transformation purpose."
      },
      jp: {
        title: "`map` vs `flatMap` vs `peek`",
        body: "Java Stream APIにおいて、中間操作`map()`、`flatMap()`、および`peek()`の機能と目的の違いを説明してください。",
        solution: "1. **`map()`:** ストリーム内の各要素を1対1で新しい要素に変換します。（$A$のストリームを$B$のストリームに）。 2. **`flatMap()`:** 各要素を**要素のストリーム**に変換し、それらのストリームを**平坦化**して単一の出力ストリームにします。（$B$のストリームのストリームが$B$のストリームになる）。 3. **`peek()`:** ストリームを通過する各要素に対してアクションを実行します。主に**デバッグ/ロギング**を目的としています。同じ要素を含むストリームを返し、機能的な変換の目的は果たしません。"
      },
      vi: {
        title: "`map` vs `flatMap` vs `peek`",
        body: "Trong Java Stream API, phân biệt chức năng và mục đích của các thao tác trung gian `map()`, `flatMap()`, và `peek()`.",
        solution: "1. **`map()`:** Chuyển đổi mỗi phần tử trong stream một đối một thành một phần tử mới. (Stream của $A$ thành Stream của $B$). 2. **`flatMap()`:** Chuyển đổi mỗi phần tử thành **một stream các phần tử**, và sau đó **làm phẳng (flattens)** các stream đó thành một stream đầu ra duy nhất. (Stream của Stream của $B$ trở thành Stream của $B$). 3. **`peek()`:** Thực hiện một hành động trên mỗi phần tử khi nó đi qua stream, chủ yếu cho **mục đích debug/logging**. Nó trả về một stream chứa các phần tử tương tự, không phục vụ mục đích chuyển đổi chức năng nào."
      }
    }
  },
  {
    _id: "java-s-022",
    difficulty: "senior",
    tags: ["concurrency", "deadlock", "prevention"],
    content: {
      en: {
        title: "Deadlock Necessary Conditions",
        body: "Name the four necessary conditions (Coffman conditions) that must hold simultaneously for a Deadlock to occur in a concurrent system.",
        solution: "1. **Mutual Exclusion:** Resources involved must be non-shareable. 2. **Hold and Wait:** A process must hold at least one resource and be waiting to acquire additional resources. 3. **No Preemption:** A resource can only be released voluntarily by the process holding it. 4. **Circular Wait:** A circular chain of processes must exist, where each process is waiting for a resource held by the next process in the chain."
      },
      jp: {
        title: "デッドロックの必要条件",
        body: "並行システムでデッドロックが発生するために同時に満たされなければならない4つの必要条件（コフマン条件）を挙げてください。",
        solution: "1. **相互排他:** 関与するリソースは共有不可能でなければならない。 2. **保持と待機:** プロセスは少なくとも1つのリソースを保持し、追加のリソースの取得を待っている必要がある。 3. **非プリエンプション:** リソースは、それを保持しているプロセスによってのみ自発的に解放されることができる。 4. **循環待機:** プロセスの循環チェーンが存在する必要があり、各プロセスはチェーン内の次のプロセスが保持しているリソースを待っている。"
      },
      vi: {
        title: "Các điều kiện cần thiết của Deadlock",
        body: "Nêu tên bốn điều kiện cần thiết (điều kiện Coffman) phải được thỏa mãn đồng thời để Deadlock xảy ra trong một hệ thống đồng thời.",
        solution: "1. **Mutual Exclusion (Độc quyền tương hỗ):** Các tài nguyên liên quan phải không thể chia sẻ được. 2. **Hold and Wait (Giữ và Chờ):** Một tiến trình phải giữ ít nhất một tài nguyên và đang chờ đợi để giành thêm các tài nguyên bổ sung. 3. **No Preemption (Không ưu tiên):** Một tài nguyên chỉ có thể được giải phóng một cách tự nguyện bởi tiến trình đang giữ nó. 4. **Circular Wait (Chờ đợi vòng tròn):** Phải tồn tại một chuỗi vòng tròn các tiến trình, trong đó mỗi tiến trình đang chờ một tài nguyên do tiến trình tiếp theo trong chuỗi giữ."
      }
    }
  },
  {
    _id: "java-s-023",
    difficulty: "senior",
    tags: ["design", "pattern", "creation", "singleton"],
    content: {
      en: {
        title: "Singleton vs Registry",
        body: "Beyond using enums, which is a better alternative to the classic Singleton Pattern for managing centralized, application-wide resources, and why (e.g., in a modular system)?",
        solution: "The **Registry Pattern** (or Service Locator/Dependency Injection container) is generally a better alternative. The classic Singleton suffers from being hard to test, tightly coupled, and making dependencies implicit. A Registry/DI container provides the ability to **retrieve single instances** (or scope them) while keeping the responsibility of instance creation and lifecycle management separate from the consuming code. This makes the system more modular, testable, and flexible."
      },
      jp: {
        title: "Singleton vs Registry",
        body: "enumを使用することを超えて、一元化されたアプリケーション全体のリソースを管理するための古典的なSingletonパターンに対するより良い代替手段は何ですか、またその理由は何ですか（例：モジュラーシステムで）？",
        solution: "**Registryパターン**（またはService Locator/依存性注入コンテナ）は、一般により良い代替手段です。古典的なSingletonは、テストが難しく、密結合であり、依存関係を暗黙的にするという欠点があります。Registry/DIコンテナは、インスタンスの作成とライフサイクル管理の責務を消費するコードから分離しながら、**単一のインスタンスを取得する**（またはスコープを設定する）能力を提供します。これにより、システムはよりモジュール化され、テスト可能で、柔軟になります。"
      },
      vi: {
        title: "Singleton và Registry",
        body: "Ngoài việc sử dụng enum, đâu là một lựa chọn thay thế tốt hơn cho Singleton Pattern cổ điển để quản lý các tài nguyên tập trung, toàn ứng dụng, và tại sao (ví dụ: trong một hệ thống module)?",
        solution: "**Registry Pattern** (hoặc Service Locator/Dependency Injection container) nói chung là một giải pháp thay thế tốt hơn. Singleton cổ điển gặp khó khăn trong việc kiểm thử, bị khớp nối chặt chẽ và làm cho các dependency trở nên ngầm định. Registry/DI container cung cấp khả năng **truy xuất các instance đơn lẻ** (hoặc quản lý scope của chúng) trong khi vẫn giữ trách nhiệm tạo instance và quản lý vòng đời tách biệt khỏi mã tiêu thụ. Điều này làm cho hệ thống trở nên module hóa hơn, dễ kiểm thử hơn và linh hoạt hơn."
      }
    }
  },
  {
    _id: "java-s-024",
    difficulty: "senior",
    tags: ["jvm", "gc", "zgc", "performance"],
    content: {
      en: {
        title: "ZGC/Shenandoah Target",
        body: "What is the primary performance characteristic (measured in pause time) that next-generation garbage collectors like ZGC (Z Garbage Collector) and Shenandoah are specifically designed to achieve, which older collectors struggled with?",
        solution: "They are designed to achieve **extremely low, consistent pause times** (sub-millisecond pauses), largely independent of the heap size. They achieve this by doing most of the garbage collection work **concurrently with the application threads** (e.g., concurrent marking, concurrent compaction/relocation), minimizing the required 'Stop-The-World' phases."
      },
      jp: {
        title: "ZGC/Shenandoahのターゲット",
        body: "ZGC（Zガベージコレクター）やShenandoahのような次世代ガベージコレクターが、古いコレクターが苦労していた点に関して、特に達成するように設計された主要なパフォーマンス特性（一時停止時間で測定される）は何ですか？",
        solution: "それらは、ヒープサイズにほとんど依存しない、**極めて低く一貫した一時停止時間**（サブミリ秒の一時停止）を達成するように設計されています。これらは、ガベージコレクション作業のほとんどを**アプリケーションスレッドと同時に**行う（例：コンカレントマーキング、コンカレント圧縮/再配置）ことで達成し、必要な「Stop-The-World」フェーズを最小限に抑えます。"
      },
      vi: {
        title: "Mục tiêu ZGC/Shenandoah",
        body: "Đặc điểm hiệu suất chính (được đo bằng thời gian tạm dừng) mà các bộ thu gom rác thế hệ tiếp theo như ZGC (Z Garbage Collector) và Shenandoah được thiết kế đặc biệt để đạt được, mà các collector cũ hơn gặp khó khăn là gì?",
        solution: "Chúng được thiết kế để đạt được **thời gian tạm dừng cực kỳ thấp, nhất quán** (thời gian tạm dừng dưới mili giây), phần lớn không phụ thuộc vào kích thước heap. Chúng đạt được điều này bằng cách thực hiện hầu hết công việc thu gom rác **đồng thời với các luồng ứng dụng** (ví dụ: concurrent marking, concurrent compaction/relocation), giảm thiểu các giai đoạn 'Stop-The-World' cần thiết."
      }
    }
  },
  {
    _id: "java-s-025",
    difficulty: "senior",
    tags: ["concurrency", "thread-safety", "immutability"],
    content: {
      en: {
        title: "Achieving Thread Safety with Immutability",
        body: "How does designing a class to be truly immutable (i.e., all fields are final and the state cannot be changed after construction) help achieve thread safety without explicit synchronization?",
        solution: "Immutability guarantees that the object's state **never changes** after construction. Since multiple threads can read the same, unchanging state simultaneously without any risk of interference, there is no need for explicit synchronization mechanisms (like locks or `volatile`). The JMM guarantees that the state of a final field is visible to all threads after construction, making the immutable object inherently thread-safe."
      },
      jp: {
        title: "不変性によるスレッドセーフティの実現",
        body: "クラスを真に不変（すなわち、すべてのフィールドがfinalであり、構築後に状態が変更できない）に設計することは、明示的な同期なしにスレッドセーフティを実現するのにどのように役立ちますか？",
        solution: "不変性は、オブジェクトの状態が構築後に**決して変更されない**ことを保証します。複数のスレッドが干渉のリスクなしに同じ、不変の状態を同時に読み取ることができるため、明示的な同期メカニズム（ロックや`volatile`など）は必要ありません。JMMは、finalフィールドの状態が構築後にすべてのスレッドに可視であることを保証し、不変オブジェクトを本質的にスレッドセーフにします。"
      },
      vi: {
        title: "Đạt được Thread Safety bằng Immutability",
        body: "Việc thiết kế một class là bất biến thực sự (tức là tất cả các trường là final và trạng thái không thể thay đổi sau khi khởi tạo) giúp đạt được tính an toàn luồng mà không cần đồng bộ hóa tường minh như thế nào?",
        solution: "Tính bất biến đảm bảo rằng trạng thái của đối tượng **không bao giờ thay đổi** sau khi khởi tạo. Vì nhiều luồng có thể đọc cùng một trạng thái không thay đổi đồng thời mà không có bất kỳ rủi ro can thiệp nào, nên không cần các cơ chế đồng bộ hóa tường minh (như lock hoặc `volatile`). JMM đảm bảo rằng trạng thái của một trường final sẽ hiển thị với tất cả các luồng sau khi khởi tạo, làm cho đối tượng bất biến vốn đã an toàn luồng."
      }
    }
  },
  {
    _id: "java-s-026",
    difficulty: "senior",
    tags: ["design", "pattern", "creation", "factory"],
    content: {
      en: {
        title: "Abstract Factory vs Factory Method",
        body: "In Design Patterns, differentiate the goal and structure of the **Abstract Factory Pattern** from the **Factory Method Pattern**.",
        solution: "The **Factory Method Pattern** defines an interface for **creating a single object**, letting subclasses decide which concrete class to instantiate. It solves the 'creation' of a single product. The **Abstract Factory Pattern** provides an interface for **creating families of related or dependent objects** without specifying their concrete classes. It deals with creating groups of products that must work together (e.g., a factory for creating all GUI components for a specific OS)."
      },
      jp: {
        title: "Abstract Factory vs Factory Method",
        body: "デザインパターンにおいて、**Abstract Factoryパターン**と**Factory Methodパターン**の目的と構造の違いを区別してください。",
        solution: "**Factory Methodパターン**は、**単一のオブジェクトを作成する**ためのインターフェースを定義し、サブクラスがどの具象クラスをインスタンス化するかを決定させます。それは単一の製品の「作成」を解決します。**Abstract Factoryパターン**は、具象クラスを指定せずに**関連または依存するオブジェクトのファミリーを作成する**ためのインターフェースを提供します。それは、一緒に動作する必要がある製品のグループの作成を扱います（例：特定のOS用のすべてのGUIコンポーネントを作成するためのファクトリ）。"
      },
      vi: {
        title: "Abstract Factory và Factory Method",
        body: "Trong Design Patterns, phân biệt mục tiêu và cấu trúc của **Abstract Factory Pattern** với **Factory Method Pattern**.",
        solution: "**Factory Method Pattern** định nghĩa một interface để **tạo một đối tượng duy nhất**, để các class con quyết định class cụ thể nào sẽ được khởi tạo. Nó giải quyết việc 'tạo' một sản phẩm duy nhất. **Abstract Factory Pattern** cung cấp một interface để **tạo các họ đối tượng liên quan hoặc phụ thuộc** mà không cần chỉ định các class cụ thể của chúng. Nó xử lý việc tạo các nhóm sản phẩm phải hoạt động cùng nhau (ví dụ: một factory để tạo tất cả các thành phần GUI cho một OS cụ thể)."
      }
    }
  },
  {
    _id: "java-s-027",
    difficulty: "senior",
    tags: ["jvm", "classloader", "tomcat", "hot-deployment"],
    content: {
      en: {
        title: "Web App Class Loader Hierarchy",
        body: "In application servers like Tomcat, the class loader hierarchy deviates from the standard. Explain why Tomcat uses a **'Delegation Inverse'** (parent-last) approach for web application classes, and what problem it solves.",
        solution: "Tomcat uses a **parent-last** delegation model for web apps to allow each web application (WAR file) to **load its own versions of libraries** (e.g., Spring, Hibernate) contained in its `WEB-INF/lib` folder, even if different versions are present in the server's shared libraries. This solves the problem of **version conflicts** between different web applications deployed on the same server, ensuring application isolation."
      },
      jp: {
        title: "Webアプリケーションクラスローダー階層",
        body: "Tomcatのようなアプリケーションサーバーでは、クラスローダー階層が標準から逸脱しています。TomcatがWebアプリケーションクラスに**「委譲逆転」**（親を最後にする）アプローチを使用する理由と、それが解決する問題は何ですか？",
        solution: "Tomcatは、Webアプリケーションクラスに**親を最後にする**委譲モデルを使用して、各Webアプリケーション（WARファイル）が、サーバーの共有ライブラリに異なるバージョンが存在する場合でも、`WEB-INF/lib`フォルダーに含まれる**独自のライブラリバージョン**（例：Spring、Hibernate）をロードできるようにします。これにより、同じサーバーにデプロイされた異なるWebアプリケーション間の**バージョン競合**の問題が解決され、アプリケーションの分離が確保されます。"
      },
      vi: {
        title: "Hệ thống Class Loader Web App",
        body: "Trong các máy chủ ứng dụng như Tomcat, hệ thống class loader khác với tiêu chuẩn. Giải thích tại sao Tomcat sử dụng phương pháp **'Delegation Inverse'** (parent-last) cho các class ứng dụng web, và vấn đề nó giải quyết là gì.",
        solution: "Tomcat sử dụng mô hình ủy quyền **parent-last** cho các ứng dụng web để cho phép mỗi ứng dụng web (file WAR) **tải các phiên bản thư viện riêng của nó** (ví dụ: Spring, Hibernate) có trong thư mục `WEB-INF/lib` của nó, ngay cả khi các phiên bản khác nhau có mặt trong các thư viện được chia sẻ của máy chủ. Điều này giải quyết vấn đề **xung đột phiên bản** giữa các ứng dụng web khác nhau được triển khai trên cùng một máy chủ, đảm bảo sự cô lập ứng dụng."
      }
    }
  },
  {
    _id: "java-s-028",
    difficulty: "senior",
    tags: ["jvm", "garbage-collection", "allocation"],
    content: {
      en: {
        title: "Thread-Local Allocation Buffer (TLAB)",
        body: "What is the **Thread-Local Allocation Buffer (TLAB)** in the JVM, and what performance problem does its use solve?",
        solution: "The TLAB is a **small, thread-private region** within the Young Generation Eden Space. When a thread allocates a small object, it tries to allocate it directly within its own TLAB without synchronization. This solves the performance problem of **contention (competition) for the shared heap lock** that would otherwise be required for every single object allocation, making object creation much faster and highly scalable in multi-threaded environments."
      },
      jp: {
        title: "スレッドローカル割り当てバッファ (TLAB)",
        body: "JVMにおける**Thread-Local Allocation Buffer (TLAB)**とは何ですか、またその使用が解決するパフォーマンス上の問題は何ですか？",
        solution: "TLABは、Young Generation Edenスペース内の**小さなスレッドプライベート領域**です。スレッドが小さなオブジェクトを割り当てる際、同期なしで自身のTLAB内で直接割り当てようとします。これにより、すべての単一のオブジェクト割り当てに必要となるであろう**共有ヒープロックの競合（競争）**というパフォーマンス上の問題が解決され、マルチスレッド環境でのオブジェクト作成がはるかに高速かつ高度にスケーラブルになります。"
      },
      vi: {
        title: "Thread-Local Allocation Buffer (TLAB)",
        body: "**Thread-Local Allocation Buffer (TLAB)** trong JVM là gì, và vấn đề hiệu suất nào mà việc sử dụng nó giải quyết?",
        solution: "TLAB là một **vùng nhỏ, private theo luồng** bên trong Eden Space của Young Generation. Khi một luồng cấp phát một đối tượng nhỏ, nó cố gắng cấp phát trực tiếp trong TLAB của chính nó mà không cần đồng bộ hóa. Điều này giải quyết vấn đề hiệu suất của **tranh chấp (contention) đối với lock heap được chia sẻ** mà lẽ ra sẽ được yêu cầu cho mọi lần cấp phát đối tượng, làm cho việc tạo đối tượng nhanh hơn nhiều và có khả năng mở rộng cao trong môi trường đa luồng."
      }
    }
  },
  {
    _id: "java-s-029",
    difficulty: "senior",
    tags: ["concurrency", "executor", "shutdown"],
    content: {
      en: {
        title: "`ExecutorService` Shutdown",
        body: "When shutting down an `ExecutorService`, what is the difference between calling `shutdown()` and calling `shutdownNow()`?",
        solution: "**`shutdown()`** initiates an **orderly shutdown**: it stops accepting new tasks, but waits for all previously submitted tasks (including those in the queue) to complete execution. **`shutdownNow()`** attempts to stop all executing tasks immediately (often via interruption), discards waiting tasks, and returns a list of the tasks that were waiting to be executed."
      },
      jp: {
        title: "`ExecutorService`のシャットダウン",
        body: "`ExecutorService`をシャットダウンする際、`shutdown()`を呼び出すことと`shutdownNow()`を呼び出すことの違いは何ですか？",
        solution: "**`shutdown()`**は**秩序あるシャットダウン**を開始します。新しいタスクの受け入れを停止しますが、以前に送信されたすべてのタスク（キュー内のタスクを含む）が実行を完了するのを待ちます。**`shutdownNow()`**は、実行中のすべてのタスクを直ちに停止しようとし（多くの場合、中断を介して）、待機中のタスクを破棄し、実行を待っていたタスクのリストを返します。"
      },
      vi: {
        title: "Shutdown `ExecutorService`",
        body: "Khi tắt một `ExecutorService`, sự khác biệt giữa việc gọi `shutdown()` và gọi `shutdownNow()` là gì?",
        solution: "**`shutdown()`** bắt đầu một **quá trình tắt có trật tự**: nó ngừng chấp nhận các tác vụ mới, nhưng chờ đợi cho tất cả các tác vụ đã gửi trước đó (bao gồm cả những tác vụ trong hàng đợi) hoàn thành việc thực thi. **`shutdownNow()`** cố gắng dừng tất cả các tác vụ đang thực thi ngay lập tức (thường thông qua gián đoạn), loại bỏ các tác vụ đang chờ và trả về một danh sách các tác vụ đang chờ được thực thi."
      }
    }
  },
  {
    _id: "java-s-030",
    difficulty: "senior",
    tags: ["design", "arch", "soa", "microservices"],
    content: {
      en: {
        title: "Tuning the JIT for Low-Latency",
        body: "When tuning the JVM for low-latency applications, developers often change the JIT compiler mode from the default (`-client` or `-server`). What JIT mode is preferred for low-latency and fast startup, and what is the key trade-off when using it?",
        solution: "The JIT mode preferred is **Tiered Compilation with profile data (C1/C2)**, often configured to prioritize C1 (or client mode compilation) for faster startup/response. Specifically, using the **$-XX:+TieredCompilation$** flag can balance speed. The key trade-off is **peak throughput**. Aggressive optimizations (C2 compiler) take longer to compile, meaning low-latency optimization often comes at the cost of sacrificing a small amount of long-term peak performance."
      },
      jp: {
        title: "低レイテンシのためのJITチューニング",
        body: "低レイテンシアプリケーションのためにJVMをチューニングする際、開発者はJITコンパイラモードをデフォルト（`-client`または`-server`）から変更することがよくあります。低レイテンシと高速起動のために好まれるJITモードは何ですか、またそれを使用する際の主要なトレードオフは何ですか？",
        solution: "好まれるJITモードは、高速な起動/応答のためにC1（またはクライアントモードコンパイル）を優先するように構成された**プロファイルデータを使用した階層型コンパイル（C1/C2）**です。具体的には、**$-XX:+TieredCompilation$**フラグを使用すると速度のバランスを取ることができます。主要なトレードオフは**ピークスループット**です。積極的な最適化（C2コンパイラ）はコンパイルに時間がかかるため、低レイテンシの最適化は、しばしば長期的なピークパフォーマンスをわずかに犠牲にするという代償を伴います。"
      },
      vi: {
        title: "Điều chỉnh JIT cho Low-Latency",
        body: "Khi điều chỉnh JVM cho các ứng dụng độ trễ thấp (low-latency), các nhà phát triển thường thay đổi chế độ JIT compiler từ mặc định (`-client` hoặc `-server`). Chế độ JIT nào được ưu tiên cho độ trễ thấp và khởi động nhanh, và sự đánh đổi (trade-off) chính khi sử dụng nó là gì?",
        solution: "Chế độ JIT được ưu tiên là **Tiered Compilation (Biên dịch phân cấp) với dữ liệu hồ sơ (profile data) (C1/C2)**, thường được cấu hình để ưu tiên C1 (hoặc biên dịch chế độ client) để khởi động/phản hồi nhanh hơn. Cụ thể, việc sử dụng flag **$-XX:+TieredCompilation$** có thể cân bằng tốc độ. Sự đánh đổi chính là **thông lượng đỉnh (peak throughput)**. Các tối ưu hóa mạnh mẽ (trình biên dịch C2) mất nhiều thời gian hơn để biên dịch, nghĩa là tối ưu hóa độ trễ thấp thường phải trả giá bằng việc hy sinh một lượng nhỏ hiệu suất đỉnh dài hạn."
      }
    }
  },
  {
    _id: "java-s-031",
    difficulty: "senior",
    tags: ["oop", "design", "patterns", "immutability"],
    content: {
      en: {
        title: "Defensive Copying in Immutability",
        body: "When implementing an immutable class in Java that contains a mutable object (e.g., a `Date` or `List`), what technique must be used in the constructor and getter methods to maintain true immutability?",
        solution: "The technique is called **Defensive Copying**. 1. In the **constructor**, you must create a *new, deep copy* of the mutable object passed in and store the copy internally (not the original reference). 2. In the **getter method**, you must return a *new, deep copy* of the internal mutable object, preventing external code from gaining a reference to the internal state and modifying it."
      },
      jp: {
        title: "不変性における防御的コピー",
        body: "Javaでミュータブルなオブジェクト（例：`Date`または`List`）を含む不変クラスを実装する際、真の不変性を維持するためにコンストラクターとゲッターメソッドでどのようなテクニックを使用する必要がありますか？",
        solution: "そのテクニックは**防御的コピー（Defensive Copying）**と呼ばれます。 1. **コンストラクター**では、渡されたミュータブルなオブジェクトの*新しいディープコピー*を作成し、それを内部に格納する必要があります（元の参照ではない）。 2. **ゲッターメソッド**では、内部のミュータブルなオブジェクトの*新しいディープコピー*を返す必要があり、外部コードが内部状態への参照を取得してそれを変更するのを防ぎます。"
      },
      vi: {
        title: "Defensive Copying trong Immutability",
        body: "Khi implement một class bất biến trong Java có chứa một đối tượng có thể thay đổi (mutable object) (ví dụ: `Date` hoặc `List`), kỹ thuật nào phải được sử dụng trong các phương thức constructor và getter để duy trì tính bất biến thực sự?",
        solution: "Kỹ thuật được gọi là **Defensive Copying (Sao chép phòng thủ)**. 1. Trong **constructor**, bạn phải tạo một *bản sao sâu, mới* của đối tượng có thể thay đổi được truyền vào và lưu trữ bản sao đó nội bộ (không phải tham chiếu gốc). 2. Trong **phương thức getter**, bạn phải trả về một *bản sao sâu, mới* của đối tượng có thể thay đổi nội bộ, ngăn chặn mã bên ngoài có được một tham chiếu đến trạng thái nội bộ và sửa đổi nó."
      }
    }
  },
  {
    _id: "java-s-032",
    difficulty: "senior",
    tags: ["nio", "async", "reactor-pattern"],
    content: {
      en: {
        title: "Selector in NIO",
        body: "What is the role of a **Selector** in the Java NIO non-blocking I/O model, and why is it central to writing scalable servers?",
        solution: "A **Selector** is a multiplexor that can **monitor one or more Channel objects** for I/O events (like ready-to-read, ready-to-write) using a single thread. It allows a small number of threads (often just one) to efficiently manage a large number of concurrent network connections, preventing the need for the traditional 'thread-per-connection' model, which leads to high overhead and limits scalability."
      },
      jp: {
        title: "NIOにおけるSelector",
        body: "Java NIOの非ブロッキングI/Oモデルにおける**Selector**の役割は何ですか、またそれがスケーラブルなサーバーを作成する上で中心的な役割を果たすのはなぜですか？",
        solution: "**Selector**は、単一のスレッドを使用してI/Oイベント（読み取り準備完了、書き込み準備完了など）について**1つ以上のChannelオブジェクトを監視できる**マルチプレクサです。これにより、少数のスレッド（多くの場合1つだけ）が多数の同時ネットワーク接続を効率的に管理でき、高いオーバーヘッドとスケーラビリティの制限につながる従来の「接続ごとのスレッド」モデルの必要性を防ぎます。"
      },
      vi: {
        title: "Selector trong NIO",
        body: "Vai trò của một **Selector** trong mô hình I/O không chặn của Java NIO là gì, và tại sao nó là trung tâm để viết các máy chủ có khả năng mở rộng?",
        solution: "Một **Selector** là một bộ ghép kênh có thể **giám sát một hoặc nhiều đối tượng Channel** cho các sự kiện I/O (như sẵn sàng đọc, sẵn sàng ghi) bằng cách sử dụng một luồng duy nhất. Nó cho phép một số lượng nhỏ các luồng (thường chỉ một) quản lý hiệu quả một số lượng lớn các kết nối mạng đồng thời, ngăn chặn sự cần thiết của mô hình 'thread-per-connection' truyền thống, vốn dẫn đến chi phí cao và giới hạn khả năng mở rộng."
      }
    }
  },
  {
    _id: "java-s-033",
    difficulty: "senior",
    tags: ["design", "pattern", "behavioral", "chain-of-responsibility"],
    content: {
      en: {
        title: "Chain of Responsibility Pattern",
        body: "What is the primary goal of the **Chain of Responsibility Pattern**, and what is its main disadvantage regarding request handling guarantees?",
        solution: "The primary goal is to **decouple the sender of a request from its receiver** by giving multiple objects a chance to handle the request. The request is passed along a chain of potential handlers. The main disadvantage is that there is **no guarantee that the request will be handled**. If the request reaches the end of the chain without being processed by any handler, it is silently dropped."
      },
      jp: {
        title: "Chain of Responsibilityパターン (責任連鎖パターン)",
        body: "**Chain of Responsibilityパターン**の主な目標は何ですか、また要求処理の保証に関してその主な欠点は何ですか？",
        solution: "主な目標は、複数のオブジェクトに要求を処理する機会を与えることによって、**要求の送信者と受信者を分離する**ことです。要求は潜在的なハンドラーのチェーンに沿って渡されます。主な欠点は、**要求が処理されるという保証がない**ことです。要求がどのハンドラーにも処理されずにチェーンの終わりに達した場合、それは静かに破棄されます。"
      },
      vi: {
        title: "Chain of Responsibility Pattern",
        body: "Mục tiêu chính của **Chain of Responsibility Pattern** là gì, và nhược điểm chính của nó liên quan đến sự đảm bảo xử lý yêu cầu là gì?",
        solution: "Mục tiêu chính là **tách rời người gửi yêu cầu khỏi người nhận của nó** bằng cách cho nhiều đối tượng cơ hội xử lý yêu cầu đó. Yêu cầu được truyền dọc theo một chuỗi các handler tiềm năng. Nhược điểm chính là **không có sự đảm bảo rằng yêu cầu sẽ được xử lý**. Nếu yêu cầu đến cuối chuỗi mà không được xử lý bởi bất kỳ handler nào, nó sẽ bị loại bỏ một cách im lặng."
      }
    }
  },
  {
    _id: "java-s-034",
    difficulty: "senior",
    tags: ["threading", "concurrency", "liveness", "optimistic"],
    content: {
      en: {
        title: "Optimistic vs Pessimistic Locking",
        body: "In database or concurrent application design, differentiate between **Optimistic Locking** and **Pessimistic Locking**, and state which Java concurrency mechanism aligns with the optimistic approach.",
        solution: "**Pessimistic Locking** assumes conflicts are likely and prevents them by acquiring an exclusive lock on the resource before accessing it (blocking other users). **Optimistic Locking** assumes conflicts are rare and allows multiple parties to access the resource, checking for conflicts only at the point of update (e.g., via version numbers). The Java concurrency mechanism that aligns with Optimistic Locking is **Compare-And-Swap (CAS)** (used in `Atomic` classes)."
      },
      jp: {
        title: "楽観的ロック vs 悲観的ロック",
        body: "データベースまたは並行アプリケーションの設計において、**楽観的ロック**と**悲観的ロック**の違いを区別し、楽観的アプローチと一致するJava並行処理メカニズムを述べてください。",
        solution: "**悲観的ロック**は、競合が発生する可能性が高いと想定し、アクセスする前にリソースに対する排他ロックを取得することでそれを防ぎます（他のユーザーをブロックします）。**楽観的ロック**は、競合がまれであると想定し、複数の関係者がリソースにアクセスすることを許可し、更新の時点でのみ競合をチェックします（例：バージョン番号を介して）。楽観的ロックと一致するJava並行処理メカニズムは**Compare-And-Swap (CAS)**（`Atomic`クラスで使用される）です。"
      },
      vi: {
        title: "Optimistic và Pessimistic Locking",
        body: "Trong thiết kế cơ sở dữ liệu hoặc ứng dụng đồng thời, phân biệt giữa **Optimistic Locking** (Khóa lạc quan) và **Pessimistic Locking** (Khóa bi quan), và cho biết cơ chế đồng thời nào của Java phù hợp với phương pháp lạc quan.",
        solution: "**Pessimistic Locking** giả định xung đột có khả năng xảy ra và ngăn chặn chúng bằng cách giành một lock độc quyền trên tài nguyên trước khi truy cập nó (chặn người dùng khác). **Optimistic Locking** giả định xung đột là hiếm và cho phép nhiều bên truy cập tài nguyên, chỉ kiểm tra xung đột tại thời điểm cập nhật (ví dụ: thông qua số phiên bản). Cơ chế đồng thời Java phù hợp với Optimistic Locking là **Compare-And-Swap (CAS)** (được sử dụng trong các class `Atomic`)."
      }
    }
  },
  {
    _id: "java-s-035",
    difficulty: "senior",
    tags: ["security", "injection", "escaping"],
    content: {
      en: {
        title: "Output Encoding/Escaping",
        body: "In the context of web application security (e.g., using a Java web framework), what is the primary purpose of **Output Encoding** (or escaping) of user input before rendering it on a page?",
        solution: "The primary purpose is to prevent **Cross-Site Scripting (XSS) attacks**. By encoding user-supplied data, you ensure that the browser treats the data purely as text to be displayed, rather than executable code (e.g., converting `<` to `&lt;` and `>` to `&gt;`). This neutralizes any malicious scripts that an attacker might try to inject."
      },
      jp: {
        title: "出力エンコーディング/エスケープ",
        body: "Webアプリケーションのセキュリティ（例：Java Webフレームワークを使用）の文脈において、ユーザー入力をページにレンダリングする前に**出力エンコーディング**（またはエスケープ）する主な目的は何ですか？",
        solution: "主な目的は、**クロスサイトスクリプティング（XSS）攻撃**を防ぐことです。ユーザー提供のデータをエンコードすることで、ブラウザがそのデータを実行可能なコードとしてではなく、表示される純粋なテキストとして扱うことを保証します（例：`<`を`&lt;`に、`>`を`&gt;`に変換する）。これにより、攻撃者が挿入しようとする可能性のある悪意のあるスクリプトを無効化します。"
      },
      vi: {
        title: "Output Encoding/Escaping",
        body: "Trong bối cảnh bảo mật ứng dụng web (ví dụ: sử dụng framework web Java), mục đích chính của **Output Encoding** (hoặc escaping) dữ liệu đầu vào của người dùng trước khi render nó trên một trang là gì?",
        solution: "Mục đích chính là ngăn chặn **tấn công Cross-Site Scripting (XSS)**. Bằng cách mã hóa dữ liệu do người dùng cung cấp, bạn đảm bảo rằng trình duyệt xử lý dữ liệu đó hoàn toàn là văn bản để hiển thị, chứ không phải là mã có thể thực thi (ví dụ: chuyển đổi `<` thành `&lt;` và `>` thành `&gt;`). Điều này vô hiệu hóa bất kỳ script độc hại nào mà kẻ tấn công có thể cố gắng inject."
      }
    }
  },
  {
    _id: "java-s-036",
    difficulty: "senior",
    tags: ["design", "pattern", "reactor", "producer-consumer"],
    content: {
      en: {
        title: "Disruptor Pattern",
        body: "The **Disruptor Pattern** is an advanced concurrency mechanism often used for low-latency systems. What is its key innovation over traditional concurrent queues, and which core Java data structure is central to its implementation?",
        solution: "The Disruptor's key innovation is its use of a **Ring Buffer (or Circular Array)** instead of a traditional queue. This allows for **lock-free concurrency** (using CAS) and eliminates false sharing between threads. It facilitates very low-latency, high-throughput message passing by enabling multiple producers and consumers to access the buffer without contention over the queue's head/tail pointers."
      },
      jp: {
        title: "Disruptorパターン",
        body: "**Disruptorパターン**は、低レイテンシシステムによく使用される高度な並行処理メカニズムです。従来の並行キューに対するその主要な革新は何ですか、またその実装の中心となるコアJavaデータ構造は何ですか？",
        solution: "Disruptorの主要な革新は、従来のキューの代わりに**リングバッファ（または円形配列）**を使用することです。これにより、**ロックフリーな並行処理**（CASを使用）が可能になり、スレッド間の偽共有が排除されます。キューのヘッド/テールポインターをめぐる競合なしに複数のプロデューサーとコンシューマーがバッファにアクセスできるようにすることで、超低レイテンシ、高スループットのメッセージパッシングを容易にします。"
      },
      vi: {
        title: "Disruptor Pattern",
        body: "**Disruptor Pattern** là một cơ chế đồng thời tiên tiến thường được sử dụng cho các hệ thống độ trễ thấp. Đổi mới quan trọng của nó so với các hàng đợi đồng thời truyền thống là gì, và cấu trúc dữ liệu cốt lõi nào của Java là trung tâm của việc implement nó?",
        solution: "Đổi mới quan trọng của Disruptor là việc sử dụng **Ring Buffer (hoặc Mảng Vòng)** thay vì hàng đợi truyền thống. Điều này cho phép **đồng thời không khóa (lock-free concurrency)** (sử dụng CAS) và loại bỏ false sharing giữa các luồng. Nó tạo điều kiện cho việc truyền thông báo có độ trễ cực thấp, thông lượng cao bằng cách cho phép nhiều producer và consumer truy cập vào buffer mà không có tranh chấp trên các con trỏ đầu/cuối của hàng đợi."
      }
    }
  },
  {
    _id: "java-s-037",
    difficulty: "senior",
    tags: ["reflection", "optimization", "bytecode"],
    content: {
      en: {
        title: "Reflection Performance Mitigation",
        body: "While reflection is slow, frameworks often use it. Name one technique or Java feature that frameworks use to mitigate the performance overhead of repeated reflective calls.",
        solution: "Frameworks mitigate reflection overhead by **caching `Method` or `Field` objects** obtained via reflection. The first lookup is slow, but subsequent lookups use the cached objects. Even better, some frameworks use **Bytecode Generation (or Code Generation)** tools (like CGLIB, ByteBuddy, or ASM) to dynamically generate concrete classes at runtime that bypass reflection entirely and use direct method calls, resulting in near-native performance."
      },
      jp: {
        title: "リフレクションのパフォーマンスの軽減",
        body: "リフレクションは遅いですが、フレームワークはよくそれを使用します。フレームワークが繰り返されるリフレクション呼び出しのパフォーマンスオーバーヘッドを軽減するために使用する1つのテクニックまたはJava機能を挙げてください。",
        solution: "フレームワークは、リフレクションを介して取得された**`Method`または`Field`オブジェクトをキャッシュする**ことによって、リフレクションのオーバーヘッドを軽減します。最初のルックアップは遅いですが、その後のルックアップはキャッシュされたオブジェクトを使用します。さらに良いことに、一部のフレームワークは**バイトコード生成（またはコード生成）**ツール（CGLIB、ByteBuddy、ASMなど）を使用して、リフレクションを完全にバイパスし、直接メソッド呼び出しを使用する具象クラスを実行時に動的に生成し、ほぼネイティブなパフォーマンスを実現します。"
      },
      vi: {
        title: "Giảm thiểu Hiệu suất Reflection",
        body: "Mặc dù reflection chậm, các framework thường sử dụng nó. Nêu tên một kỹ thuật hoặc tính năng Java mà các framework sử dụng để giảm thiểu chi phí hiệu suất của các lời gọi reflection lặp đi lặp lại.",
        solution: "Các Framework giảm thiểu chi phí reflection bằng cách **lưu trữ các đối tượng `Method` hoặc `Field`** thu được thông qua reflection. Lần tra cứu đầu tiên chậm, nhưng các lần tra cứu tiếp theo sử dụng các đối tượng đã được lưu trữ. Tốt hơn nữa, một số framework sử dụng các công cụ **Tạo Bytecode (Bytecode Generation)** (như CGLIB, ByteBuddy, hoặc ASM) để tạo động các class cụ thể tại thời điểm chạy, bỏ qua hoàn toàn reflection và sử dụng các lời gọi phương thức trực tiếp, dẫn đến hiệu suất gần như native."
      }
    }
  },
  {
    _id: "java-s-038",
    difficulty: "senior",
    tags: ["stream", "api", "ordering"],
    content: {
      en: {
        title: "Stream Ordering and Parallelism",
        body: "When using parallel streams, under what conditions can the results of ordering-sensitive intermediate operations (like `limit()` or `findFirst()`) become non-deterministic, and what characteristic is responsible for maintaining determinism when required?",
        solution: "If the source of the stream is **unordered** (e.g., `HashSet`), then parallel operations on ordering-sensitive methods can become non-deterministic, as elements are processed in parallel chunks. The characteristic responsible for maintaining determinism is the **'Encounter Order'**. If the source has an encounter order (e.g., `List`, `LinkedHashSet`), the framework must preserve it, even when running in parallel, which sometimes results in a performance cost."
      },
      jp: {
        title: "ストリームの順序付けと並列処理",
        body: "並列ストリームを使用する場合、順序付けに敏感な中間操作（`limit()`や`findFirst()`など）の結果が非決定論的になるのはどのような条件下ですか、また必要に応じて決定論を維持する責任がある特性は何ですか？",
        solution: "ストリームのソースが**順序付けられていない**場合（例：`HashSet`）、順序付けに敏感なメソッドに対する並列操作は、要素が並列チャンクで処理されるため、非決定論的になる可能性があります。決定論を維持する責任がある特性は**「遭遇順序」（Encounter Order）**です。ソースが遭遇順序を持っている場合（例：`List`、`LinkedHashSet`）、フレームワークは並列で実行されている場合でもそれを保持する必要があり、その結果、パフォーマンスコストが発生することがあります。"
      },
      vi: {
        title: "Stream Ordering và Parallelism",
        body: "Khi sử dụng parallel streams, trong điều kiện nào thì kết quả của các thao tác trung gian nhạy cảm với thứ tự (như `limit()` hoặc `findFirst()`) có thể trở nên không xác định, và đặc điểm nào chịu trách nhiệm duy trì tính xác định khi được yêu cầu?",
        solution: "Nếu nguồn của stream là **không có thứ tự (unordered)** (ví dụ: `HashSet`), thì các thao tác song song trên các phương thức nhạy cảm với thứ tự có thể trở nên không xác định, vì các phần tử được xử lý trong các khối song song. Đặc điểm chịu trách nhiệm duy trì tính xác định là **'Thứ tự Gặp gỡ' (Encounter Order)**. Nếu nguồn có thứ tự gặp gỡ (ví dụ: `List`, `LinkedHashSet`), framework phải bảo tồn nó, ngay cả khi chạy song song, điều này đôi khi dẫn đến chi phí hiệu suất."
      }
    }
  },
  {
    _id: "java-s-039",
    difficulty: "senior",
    tags: ["concurrency", "performance", "lock", "thread"],
    content: {
      en: {
        title: "False Sharing",
        body: "What is **False Sharing** in multi-threaded programming, and how does it negatively impact performance on modern CPU architectures?",
        solution: "False Sharing occurs when two or more threads access different, independent variables that happen to reside within the **same CPU cache line**. While the variables are logically independent, the cache coherence protocol must invalidate and synchronize the entire cache line whenever one thread modifies its variable. This repeated synchronization across CPU cores, even for independent data, severely reduces performance. It's often mitigated by **cache line padding**."
      },
      jp: {
        title: "偽共有 (False Sharing)",
        body: "マルチスレッドプログラミングにおける**偽共有（False Sharing）**とは何ですか、またそれが最新のCPUアーキテクチャのパフォーマンスにどのように悪影響を及ぼしますか？",
        solution: "偽共有は、2つ以上のスレッドが、たまたま**同じCPUキャッシュライン**内にある異なる独立した変数にアクセスするときに発生します。変数は論理的には独立していますが、あるスレッドがその変数を変更するたびに、キャッシュコヒーレンスプロトコルがキャッシュライン全体を無効化して同期する必要があります。独立したデータであっても、CPUコア間で繰り返されるこの同期は、パフォーマンスを著しく低下させます。これはしばしば**キャッシュラインパディング**によって軽減されます。"
      },
      vi: {
        title: "False Sharing",
        body: "**False Sharing** trong lập trình đa luồng là gì, và nó ảnh hưởng tiêu cực đến hiệu suất trên các kiến trúc CPU hiện đại như thế nào?",
        solution: "False Sharing xảy ra khi hai hoặc nhiều luồng truy cập vào các biến độc lập, khác nhau mà tình cờ nằm trong **cùng một cache line của CPU**. Mặc dù các biến độc lập về mặt logic, giao thức nhất quán bộ nhớ đệm (cache coherence protocol) phải vô hiệu hóa và đồng bộ hóa toàn bộ cache line bất cứ khi nào một luồng sửa đổi biến của nó. Việc đồng bộ hóa lặp đi lặp lại này trên các lõi CPU, ngay cả đối với dữ liệu độc lập, làm giảm nghiêm trọng hiệu suất. Nó thường được giảm thiểu bằng cách **cache line padding**."
      }
    }
  },
  {
    _id: "java-s-040",
    difficulty: "senior",
    tags: ["design", "pattern", "behavioral", "mediator"],
    content: {
      en: {
        title: "Mediator Pattern",
        body: "What is the primary goal of the **Mediator Pattern**, and what design flaw does it specifically address in a complex system?",
        solution: "The primary goal is to **reduce coupling** between a set of related objects (colleagues) by creating a separate Mediator object that handles all communication between them. It addresses the design flaw of **Spaghetti Code** or **tight coupling**, where many-to-many relationships exist between objects. The Mediator centralizes communication logic, making it easier to manage, modify, and reuse individual components."
      },
      jp: {
        title: "Mediatorパターン (仲介者パターン)",
        body: "**Mediatorパターン**の主な目標は何ですか、また複雑なシステムにおいてそれが特に解決する設計上の欠陥は何ですか？",
        solution: "主な目標は、関連する一連のオブジェクト（同僚）間のすべての通信を処理する分離されたMediatorオブジェクトを作成することにより、それらの間の**結合度を減らす**ことです。これは、オブジェクト間に多対多の関係が存在する**スパゲッティコード**または**密結合**という設計上の欠陥に対処します。Mediatorは通信ロジックを一元化し、個々のコンポーネントの管理、変更、再利用を容易にします。"
      },
      vi: {
        title: "Mediator Pattern",
        body: "Mục tiêu chính của **Mediator Pattern** là gì, và lỗi thiết kế nào mà nó đặc biệt giải quyết trong một hệ thống phức tạp?",
        solution: "Mục tiêu chính là **giảm khớp nối** giữa một tập hợp các đối tượng liên quan (colleagues) bằng cách tạo ra một đối tượng Mediator riêng biệt xử lý tất cả giao tiếp giữa chúng. Nó giải quyết lỗi thiết kế của **Spaghetti Code** hoặc **khớp nối chặt chẽ**, nơi tồn tại các mối quan hệ nhiều-nhiều giữa các đối tượng. Mediator tập trung hóa logic giao tiếp, làm cho việc quản lý, sửa đổi và tái sử dụng các thành phần riêng lẻ trở nên dễ dàng hơn."
      }
    }
  },
  {
    _id: "java-s-041",
    difficulty: "senior",
    tags: ["generics", "type-erasure", "reflection"],
    content: {
      en: {
        title: "Generics Type Erasure Limitation",
        body: "Explain the concept of **Type Erasure** in Java Generics and name one major limitation it imposes at runtime that requires workarounds (like using a subclass or passing a `Class<T>` instance).",
        solution: "**Type Erasure** is the process where generic type information (like `<String>` in `List<String>`) is **removed by the compiler** and replaced with raw types (like `List`) after compilation. The major limitation this imposes is that you **cannot create an instance of a generic type** (e.g., `new T()`) or use the generic type in runtime operations like `instanceof` because the type information is unavailable at runtime. You must pass the `Class<T>` object separately."
      },
      jp: {
        title: "ジェネリクスの型消去の制限",
        body: "Javaジェネリクスにおける**型消去（Type Erasure）**の概念を説明し、それが実行時に課す主要な制限の1つ（サブクラスを使用するか、`Class<T>`インスタンスを渡すなどの回避策が必要）を挙げてください。",
        solution: "**型消去**は、コンパイル後、ジェネリック型情報（`List<String>`の`<String>`など）が**コンパイラによって削除され**、生型（`List`など）に置き換えられるプロセスです。これが課す主要な制限は、型情報が実行時に利用できないため、**ジェネリック型のインスタンスを作成できない**（例：`new T()`）こと、または`instanceof`のような実行時操作でジェネリック型を使用できないことです。`Class<T>`オブジェクトを別途渡す必要があります。"
      },
      vi: {
        title: "Giới hạn Type Erasure của Generics",
        body: "Giải thích khái niệm **Type Erasure** trong Java Generics và nêu tên một giới hạn lớn mà nó áp đặt tại thời điểm chạy, đòi hỏi các giải pháp thay thế (như sử dụng một class con hoặc truyền một instance `Class<T>`).",
        solution: "**Type Erasure** là quá trình trong đó thông tin kiểu generic (như `<String>` trong `List<String>`) bị **xóa bỏ bởi trình biên dịch** và được thay thế bằng các kiểu thô (raw types) (như `List`) sau khi biên dịch. Giới hạn lớn mà điều này áp đặt là bạn **không thể tạo một instance của một kiểu generic** (ví dụ: `new T()`) hoặc sử dụng kiểu generic trong các thao tác thời điểm chạy như `instanceof` vì thông tin kiểu không có sẵn tại thời điểm chạy. Bạn phải truyền đối tượng `Class<T>` một cách riêng biệt."
      }
    }
  },
  {
    _id: "java-s-042",
    difficulty: "senior",
    tags: ["threading", "concurrency", "memory-model"],
    content: {
      en: {
        title: "`synchronized` vs `volatile` (Full Barrier)",
        body: "Beyond atomicity, describe the memory synchronization guarantee provided by a `synchronized` block's exit that is a **stronger guarantee** than the one provided by a `volatile` variable write.",
        solution: "A `volatile` write acts as a **'Store-Store' and 'Load-Load/Store' barrier** (ensuring memory visibility around the variable). A `synchronized` block's exit acts as a **full memory barrier** (both a 'Store' and a 'Load' barrier). This guarantees that **all** writes made by the thread *before* releasing the lock (exiting the `synchronized` block) are made visible to threads acquiring the same lock *afterward*, ensuring that **all** previous changes are visible, not just the changes to a single variable."
      },
      jp: {
        title: "`synchronized` vs `volatile` (完全なバリア)",
        body: "アトミシティを超えて、`volatile`変数の書き込みによって提供される保証よりも**強力な保証**である、`synchronized`ブロックの終了によって提供されるメモリ同期保証を説明してください。",
        solution: "`volatile`書き込みは**「Store-Store」および「Load-Load/Store」バリア**として機能します（変数周辺のメモリの可視性を保証します）。`synchronized`ブロックの終了は**完全なメモリバリア**（「Store」および「Load」バリアの両方）として機能します。これは、ロックを解放する*前*にスレッドによって行われた**すべて**の書き込みが、*その後*に同じロックを取得するスレッドに可視になることを保証し、単一の変数への変更だけでなく、**すべて**の以前の変更が可視であることを保証します。"
      },
      vi: {
        title: "`synchronized` và `volatile` (Full Barrier)",
        body: "Ngoài tính nguyên tử, mô tả sự đảm bảo đồng bộ hóa bộ nhớ được cung cấp bởi việc thoát khỏi khối `synchronized` là một **sự đảm bảo mạnh hơn** so với sự đảm bảo được cung cấp bởi thao tác ghi biến `volatile`.",
        solution: "Thao tác ghi `volatile` hoạt động như một **'Store-Store' và 'Load-Load/Store' barrier** (đảm bảo tính hiển thị bộ nhớ xung quanh biến). Việc thoát khỏi khối `synchronized` hoạt động như một **full memory barrier** (cả 'Store' và 'Load' barrier). Điều này đảm bảo rằng **tất cả** các thao tác ghi được thực hiện bởi luồng *trước khi* giải phóng lock (thoát khỏi khối `synchronized`) đều được hiển thị với các luồng giành được cùng một lock *sau đó*, đảm bảo rằng **tất cả** các thay đổi trước đó đều hiển thị, chứ không chỉ các thay đổi đối với một biến duy nhất."
      }
    }
  },
  {
    _id: "java-s-043",
    difficulty: "senior",
    tags: ["design", "arch", "soa", "microservices"],
    content: {
      en: {
        title: "Idempotence in APIs",
        body: "In API design for distributed systems (e.g., microservices), what does it mean for an operation to be **Idempotent**, and why is this property crucial for reliable communication?",
        solution: "An operation is **Idempotent** if it can be called **multiple times without changing the result** beyond the initial call. In other words, calling the function once has the same effect as calling it $N$ times. This property is crucial for reliable communication because it allows client systems (and network intermediaries) to **safely retry failed requests** (e.g., due to network timeouts) without worrying about causing duplicated side effects, such as double-charging a customer."
      },
      jp: {
        title: "APIにおけるべき等性",
        body: "分散システム（例：マイクロサービス）向けのAPI設計において、操作が**べき等（Idempotent）**であるとはどういう意味ですか、またこのプロパティが信頼性の高い通信にとって不可欠であるのはなぜですか？",
        solution: "操作が**べき等**であるとは、最初の呼び出しを超えて**結果を変更することなく複数回呼び出すことができる**ことを意味します。言い換えれば、関数を1回呼び出すことは、$N$回呼び出すことと同じ効果があります。このプロパティは、クライアントシステム（およびネットワーク仲介者）が、顧客への二重課金などの重複した副作用を引き起こすことを心配せずに、**失敗した要求を安全に再試行する**ことを可能にするため（例：ネットワークタイムアウトのため）、信頼性の高い通信にとって不可欠です。"
      },
      vi: {
        title: "Idempotence trong APIs",
        body: "Trong thiết kế API cho các hệ thống phân tán (ví dụ: microservices), một thao tác là **Idempotent** có nghĩa là gì, và tại sao thuộc tính này lại quan trọng đối với giao tiếp đáng tin cậy?",
        solution: "Một thao tác là **Idempotent** nếu nó có thể được gọi **nhiều lần mà không làm thay đổi kết quả** ngoài lời gọi ban đầu. Nói cách khác, gọi hàm một lần có tác dụng tương tự như gọi nó $N$ lần. Thuộc tính này rất quan trọng đối với giao tiếp đáng tin cậy vì nó cho phép các hệ thống client (và các bên trung gian mạng) **thử lại các yêu cầu thất bại một cách an toàn** (ví dụ: do timeout mạng) mà không cần lo lắng về việc gây ra các tác dụng phụ trùng lặp, chẳng hạn như tính phí khách hàng hai lần."
      }
    }
  },
  {
    _id: "java-s-044",
    difficulty: "senior",
    tags: ["jvm", "classloader", "security"],
    content: {
      en: {
        title: "Unsafe Class and Memory Access",
        body: "What is the primary function of the internal, non-public class `sun.misc.Unsafe` (or `jdk.internal.misc.Unsafe` in newer Java versions), and what is the main risk associated with its use?",
        solution: "The primary function is to provide **low-level, direct access to memory and raw object manipulation** that is unavailable in standard Java (e.g., direct memory allocation/deallocation, CAS operations on fields, object structure access). The main risk is that it **bypasses the Java Memory Model (JMM)**, the **JVM's memory safety checks**, and type safety, leading to potential segmentation faults, memory corruption, and security vulnerabilities if used incorrectly. It should only be used by experts and framework developers."
      },
      jp: {
        title: "Unsafeクラスとメモリアクセス",
        body: "内部の非公開クラス`sun.misc.Unsafe`（または新しいJavaバージョンでは`jdk.internal.misc.Unsafe`）の主な機能は何ですか、またその使用に関連する主なリスクは何ですか？",
        solution: "主な機能は、標準Javaでは利用できない**メモリへの低レベルの直接アクセスと生のオブジェクト操作**を提供することです（例：直接メモリ割り当て/割り当て解除、フィールドでのCAS操作、オブジェクト構造アクセス）。主なリスクは、**Javaメモリーモデル（JMM）**、**JVMのメモリ安全性チェック**、および型安全性を**バイパスする**ことであり、誤って使用すると、セグメンテーション違反、メモリ破損、およびセキュリティ脆弱性につながる可能性があります。エキスパートやフレームワーク開発者のみが使用すべきです。"
      },
      vi: {
        title: "Class Unsafe và Memory Access",
        body: "Chức năng chính của class nội bộ, không công khai `sun.misc.Unsafe` (hoặc `jdk.internal.misc.Unsafe` trong các phiên bản Java mới hơn) là gì, và rủi ro chính liên quan đến việc sử dụng nó là gì?",
        solution: "Chức năng chính là cung cấp **quyền truy cập trực tiếp, cấp thấp vào bộ nhớ và thao tác đối tượng thô** mà không có sẵn trong Java tiêu chuẩn (ví dụ: cấp phát/hủy cấp phát bộ nhớ trực tiếp, thao tác CAS trên các trường, truy cập cấu trúc đối tượng). Rủi ro chính là nó **bỏ qua Java Memory Model (JMM)**, **các kiểm tra an toàn bộ nhớ của JVM** và tính an toàn kiểu, dẫn đến khả năng xảy ra lỗi phân đoạn, hỏng bộ nhớ và lỗ hổng bảo mật nếu được sử dụng không chính xác. Nó chỉ nên được sử dụng bởi các chuyên gia và nhà phát triển framework."
      }
    }
  },
  {
    _id: "java-s-045",
    difficulty: "senior",
    tags: ["performance", "memory", "weak-reference"],
    content: {
      en: {
        title: "WeakReference Use Case",
        body: "What is a **`WeakReference`**, and what is its most common and crucial use case in Java programming (e.g., related to memory management)?",
        solution: "A **`WeakReference`** is a reference object that does not prevent its referent object from being finalized and reclaimed by the garbage collector (GC). Its most common use case is in **implementing caches** or canonicalizing mappings (like a `WeakHashMap`). It allows the GC to automatically remove the entry from the cache when the key object is no longer strongly referenced by any other part of the application, thereby **preventing memory leaks** of unused cached data."
      },
      jp: {
        title: "WeakReferenceの使用事例",
        body: "**`WeakReference`**とは何ですか、またJavaプログラミングにおけるその最も一般的で重要な使用事例は何ですか（例：メモリ管理に関連して）？",
        solution: "**`WeakReference`**は、参照先オブジェクトがGCによってファイナライズおよび回収されるのを妨げない参照オブジェクトです。その最も一般的な使用事例は、**キャッシュの実装**または正規化マッピング（`WeakHashMap`など）です。これにより、キーオブジェクトがアプリケーションの他のどの部分からも強く参照されなくなったときに、GCがキャッシュからエントリを自動的に削除できるようになり、それによって未使用のキャッシュデータの**メモリリークを防ぎます**。"
      },
      vi: {
        title: "Trường hợp sử dụng WeakReference",
        body: "**`WeakReference`** là gì, và trường hợp sử dụng phổ biến và quan trọng nhất của nó trong lập trình Java là gì (ví dụ: liên quan đến quản lý bộ nhớ)?",
        solution: "Một **`WeakReference`** là một đối tượng tham chiếu không ngăn cản đối tượng được tham chiếu của nó bị finalize và được thu hồi bởi trình thu gom rác (GC). Trường hợp sử dụng phổ biến nhất của nó là trong **việc implement các cache** hoặc canonicalizing mappings (như `WeakHashMap`). Nó cho phép GC tự động xóa mục nhập khỏi cache khi đối tượng key không còn được tham chiếu mạnh mẽ bởi bất kỳ phần nào khác của ứng dụng, nhờ đó **ngăn ngừa rò rỉ bộ nhớ** của dữ liệu cache không được sử dụng."
      }
    }
  },
  {
    _id: "java-s-046",
    difficulty: "senior",
    tags: ["design", "arch", "soa", "microservices"],
    content: {
      en: {
        title: "Saga Pattern Necessity",
        body: "In a microservices architecture, what crucial problem does the **Saga Pattern** solve, and what are the two main ways it achieves this solution?",
        solution: "The **Saga Pattern** solves the problem of **distributed transactions**—maintaining data consistency across multiple services where a traditional two-phase commit (2PC) is impossible/undesirable. It achieves this using a sequence of local transactions: 1. **Choreography:** Each service publishes events, and other services react to these events. 2. **Orchestration:** A central orchestrator (coordinator service) tells each service which local transaction to execute."
      },
      jp: {
        title: "Sagaパターンの必要性",
        body: "マイクロサービスアーキテクチャにおいて、**Sagaパターン**はどのような重要な問題を解決しますか、またこのソリューションを達成する主な2つの方法は何ですか？",
        solution: "**Sagaパターン**は、**分散トランザクション**の問題、つまり従来の2フェーズコミット（2PC）が不可能/望ましくない複数のサービス間でデータの一貫性を維持する問題を解決します。これは、一連のローカルトランザクションを使用して達成されます: 1. **Choreography:** 各サービスがイベントを公開し、他のサービスがこれらのイベントに反応します。 2. **Orchestration:** 中央のオーケストレーター（コーディネーターサービス）が、各サービスにどのローカルトランザクションを実行するかを伝えます。"
      },
      vi: {
        title: "Saga Pattern Necessity",
        body: "Trong kiến trúc microservices, vấn đề quan trọng nào mà **Saga Pattern** giải quyết, và hai cách chính nó đạt được giải pháp này là gì?",
        solution: "**Saga Pattern** giải quyết vấn đề **giao dịch phân tán**—duy trì tính nhất quán dữ liệu trên nhiều dịch vụ nơi giao dịch hai pha (2PC) truyền thống là không thể/không mong muốn. Nó đạt được điều này bằng cách sử dụng một chuỗi các giao dịch cục bộ: 1. **Choreography:** Mỗi dịch vụ xuất bản các sự kiện, và các dịch vụ khác phản ứng với các sự kiện này. 2. **Orchestration:** Một bộ điều phối trung tâm (coordinator service) nói với từng dịch vụ giao dịch cục bộ nào cần thực thi."
      }
    }
  },
  {
    _id: "java-s-047",
    difficulty: "senior",
    tags: ["security", "access-control", "permissions"],
    content: {
      en: {
        title: "JAAS Purpose",
        body: "What is the primary function of **JAAS (Java Authentication and Authorization Service)**, and how does it separate the concerns of application code and security policy?",
        solution: "JAAS's primary function is to provide a pluggable framework for **authentication** (verifying who the user is) and **authorization** (determining what the user can do) based on subjects and principals. It separates concerns by allowing the **application code to remain independent of the underlying security technology** (e.g., LDAP, Kerberos) and the security policy (permissions) to be dynamically configured and managed externally via policy files."
      },
      jp: {
        title: "JAASの目的",
        body: "**JAAS（Java Authentication and Authorization Service）**の主な機能は何ですか、またアプリケーションコードとセキュリティポリシーの関心をどのように分離しますか？",
        solution: "JAASの主な機能は、サブジェクトとプリンシパルに基づいて、**認証**（ユーザーが誰であるかを確認する）と**認可**（ユーザーが何ができるかを決定する）のためのプラグ可能なフレームワークを提供することです。それは、**アプリケーションコードが基盤となるセキュリティ技術**（例：LDAP、Kerberos）から**独立したまま**になり、セキュリティポリシー（許可）がポリシーファイルを介して外部から動的に構成および管理されることを可能にすることで、関心を分離します。"
      },
      vi: {
        title: "Mục đích JAAS",
        body: "Chức năng chính của **JAAS (Java Authentication and Authorization Service)** là gì, và làm thế nào nó tách biệt các mối quan tâm của mã ứng dụng và chính sách bảo mật?",
        solution: "Chức năng chính của JAAS là cung cấp một framework có thể cắm (pluggable framework) cho **authentication** (xác minh người dùng là ai) và **authorization** (xác định những gì người dùng có thể làm) dựa trên các subject và principal. Nó tách biệt các mối quan tâm bằng cách cho phép **mã ứng dụng vẫn độc lập với công nghệ bảo mật cơ bản** (ví dụ: LDAP, Kerberos) và chính sách bảo mật (quyền) được cấu hình và quản lý động từ bên ngoài thông qua các file policy."
      }
    }
  },
  {
    _id: "java-s-048",
    difficulty: "senior",
    tags: ["reflection", "security", "encapsulation"],
    content: {
      en: {
        title: "Reflection in JPMS",
        body: "How did the Java Platform Module System (JPMS) in Java 9+ intentionally restrict the use of reflection, and what is the required command-line flag if a legacy framework must access internal module classes?",
        solution: "JPMS enforces **strong encapsulation** by default, even for reflection. It prevents external code (including frameworks) from accessing internal, non-exported packages via reflection. If a legacy framework absolutely requires access to internal classes (often common in Spring/Hibernate), the application must be started with the **`--add-opens`** command-line flag to explicitly tell the JVM to open specific packages for reflective access by specific modules."
      },
      jp: {
        title: "JPMSにおけるリフレクション",
        body: "Java 9+のJavaプラットフォームモジュールシステム（JPMS）は、リフレクションの使用を意図的にどのように制限しましたか、またレガシーフレームワークが内部モジュールクラスにアクセスする必要がある場合に必要なコマンドラインフラグは何ですか？",
        solution: "JPMSは、リフレクションに対してもデフォルトで**強力なカプセル化**を強制します。これにより、外部コード（フレームワークを含む）がリフレクションを介して内部の、エクスポートされていないパッケージにアクセスするのを防ぎます。レガシーフレームワークが内部クラスへのアクセスを絶対に必要とする場合（Spring/Hibernateでよくある）、アプリケーションは**`--add-opens`**コマンドラインフラグを使用して起動され、特定のモジュールによるリフレクションアクセスを許可するために特定のパッケージを明示的に開くようにJVMに指示する必要があります。"
      },
      vi: {
        title: "Reflection trong JPMS",
        body: "Java Platform Module System (JPMS) trong Java 9+ đã cố ý hạn chế việc sử dụng reflection như thế nào, và flag command-line nào là bắt buộc nếu một framework cũ phải truy cập các class module nội bộ?",
        solution: "JPMS mặc định thực thi **đóng gói mạnh mẽ**, ngay cả đối với reflection. Nó ngăn mã bên ngoài (bao gồm cả các framework) truy cập vào các package nội bộ, không được xuất khẩu thông qua reflection. Nếu một framework cũ hoàn toàn cần truy cập vào các class nội bộ (thường thấy trong Spring/Hibernate), ứng dụng phải được khởi động bằng flag command-line **`--add-opens`** để chỉ thị rõ ràng cho JVM mở các package cụ thể cho quyền truy cập reflection bởi các module cụ thể."
      }
    }
  },
  {
    _id: "java-s-049",
    difficulty: "senior",
    tags: ["collections", "hashmap", "tuning", "performance"],
    content: {
      en: {
        title: "`HashMap` Initial Capacity Tuning",
        body: "When initializing a `HashMap`, why is it considered a performance best practice to choose an **initial capacity** that is greater than the expected number of entries divided by the load factor, rather than just the expected number of entries?",
        solution: "Setting the initial capacity correctly prevents the costly operation of **rehashing and resizing** the underlying array. The default load factor is $0.75$. If you expect $N$ entries, the map will resize when the number of entries exceeds $\\text{Capacity} \times 0.75$. To avoid resizing, the capacity should be set to $\\text{ceil}(N / 0.75)$, or the next power of two after this value. This saves CPU cycles and improves initial load performance."
      },
      jp: {
        title: "`HashMap`初期容量のチューニング",
        body: "`HashMap`を初期化する際、単に予想されるエントリ数ではなく、予想されるエントリ数をロードファクターで割った値よりも大きい**初期容量**を選択することがパフォーマンスのベストプラクティスと見なされるのはなぜですか？",
        solution: "初期容量を正しく設定することで、基になる配列の**再ハッシュとサイズ変更**というコストのかかる操作を防ぎます。デフォルトのロードファクターは$0.75$です。$N$個のエントリを予想する場合、エントリ数が$\\text{容量} \times 0.75$を超えるとマップはサイズ変更されます。サイズ変更を避けるために、容量は$\\text{ceil}(N / 0.75)$、またはこの値の次の2の累乗に設定する必要があります。これにより、CPUサイクルが節約され、初期ロードのパフォーマンスが向上します。"
      },
      vi: {
        title: "Điều chỉnh Initial Capacity của `HashMap`",
        body: "Khi khởi tạo một `HashMap`, tại sao việc chọn **initial capacity** lớn hơn số lượng mục nhập dự kiến chia cho load factor, thay vì chỉ là số lượng mục nhập dự kiến, lại được coi là thực hành tốt nhất về hiệu suất?",
        solution: "Đặt dung lượng ban đầu chính xác giúp ngăn chặn thao tác tốn kém là **rehashing và resizing** mảng cơ bản. Load factor mặc định là $0.75$. Nếu bạn dự kiến $N$ mục nhập, map sẽ thay đổi kích thước khi số lượng mục nhập vượt quá $\\text{Capacity} \times 0.75$. Để tránh thay đổi kích thước, capacity nên được đặt thành $\\text{ceil}(N / 0.75)$, hoặc lũy thừa của hai tiếp theo sau giá trị này. Điều này tiết kiệm chu kỳ CPU và cải thiện hiệu suất tải ban đầu."
      }
    }
  },
  {
    _id: "java-s-050",
    difficulty: "senior",
    tags: ["design", "arch", "pattern", "domain-driven-design"],
    content: {
      en: {
        title: "Domain-Driven Design (DDD) Bounded Context",
        body: "In Domain-Driven Design (DDD), what is a **Bounded Context**, and what is its primary purpose in a large, complex application?",
        solution: "A **Bounded Context** is a **logical boundary** that defines where a particular domain model applies. It is the boundary within which a specific ubiquitous language (terms, entities, values) is consistent and unique. Its primary purpose in a large application is to **manage complexity** by partitioning the system into distinct, manageable areas where different models (even with the same entity name) can coexist without confusion. It often maps directly to a microservice boundary."
      },
      jp: {
        title: "ドメイン駆動設計（DDD）の境界コンテキスト",
        body: "ドメイン駆動設計（DDD）において、**境界コンテキスト（Bounded Context）**とは何ですか、また大規模で複雑なアプリケーションにおけるその主な目的は何ですか？",
        solution: "**境界コンテキスト**は、特定のドメインモデルが適用される場所を定義する**論理的な境界**です。それは、特定のユビキタス言語（用語、エンティティ、値）が一貫しており、一意である境界です。大規模なアプリケーションにおけるその主な目的は、異なるモデル（同じエンティティ名であっても）が混乱なく共存できる、明確で管理しやすい領域にシステムを分割することによって**複雑さを管理する**ことです。それはしばしばマイクロサービスの境界に直接マッピングされます。"
      },
      vi: {
        title: "Domain-Driven Design (DDD) Bounded Context",
        body: "Trong Domain-Driven Design (DDD), **Bounded Context** là gì, và mục đích chính của nó trong một ứng dụng lớn, phức tạp là gì?",
        solution: "Một **Bounded Context** là một **ranh giới logic** xác định nơi một mô hình domain cụ thể được áp dụng. Nó là ranh giới mà trong đó một ngôn ngữ chung (ubiquitous language) cụ thể (thuật ngữ, thực thể, giá trị) là nhất quán và duy nhất. Mục đích chính của nó trong một ứng dụng lớn là **quản lý sự phức tạp** bằng cách phân vùng hệ thống thành các khu vực riêng biệt, dễ quản lý, nơi các mô hình khác nhau (ngay cả với cùng tên thực thể) có thể cùng tồn tại mà không gây nhầm lẫn. Nó thường ánh xạ trực tiếp đến ranh giới microservice."
      }
    }
  }
];
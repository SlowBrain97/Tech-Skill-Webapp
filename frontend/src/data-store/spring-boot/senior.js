export const springBootSeniorQuestions = [
  {
    _id: "sb-s-001",
    difficulty: "senior",
    tags: ["webflux", "reactor", "backpressure"],
    content: {
      en: {
        title: "Reactor Backpressure Concept",
        body: "In Spring WebFlux/Reactor, explain the concept of **Backpressure** and the role of the Subscriber's `request(long n)` method in managing it.",
        solution: "Backpressure is a mechanism where the **Subscriber controls the rate** at which the Publisher produces data, preventing the Subscriber (which might be slower) from being overwhelmed. The `request(long n)` method is called by the Subscriber to explicitly signal to the Publisher how many elements it is currently willing to consume, essentially pulling data instead of having it pushed uncontrollably."
      },
      jp: {
        title: "Reactorのバックプレッシャーの概念",
        body: "Spring WebFlux/Reactorにおいて、**バックプレッシャー**の概念と、それを管理する上でのSubscriberの`request(long n)`メソッドの役割を説明してください。",
        solution: "バックプレッシャーは、SubscriberがPublisherがデータを生成する**レートを制御する**メカニズムであり、Subscriber（処理が遅い可能性がある）が圧倒されるのを防ぎます。`request(long n)`メソッドは、Subscriberによって呼び出され、現在消費してもよい要素の数をPublisherに明示的に通知し、実質的に制御不能にプッシュされるのではなく、データをプルします。"
      },
      vi: {
        title: "Khái niệm Reactor Backpressure",
        body: "Trong Spring WebFlux/Reactor, giải thích khái niệm **Backpressure** và vai trò của phương thức `request(long n)` của Subscriber trong việc quản lý nó.",
        solution: "Backpressure là một cơ chế trong đó **Subscriber kiểm soát tốc độ** mà Publisher tạo ra dữ liệu, ngăn Subscriber (có thể chậm hơn) bị quá tải. Phương thức `request(long n)` được Subscriber gọi để báo hiệu rõ ràng cho Publisher biết hiện tại nó sẵn sàng tiêu thụ bao nhiêu phần tử, về cơ bản là kéo dữ liệu thay vì bị đẩy một cách không kiểm soát."
      }
    }
  },
  {
    _id: "sb-s-002",
    difficulty: "senior",
    tags: ["microservices", "saga", "orchestration"],
    content: {
      en: {
        title: "Saga Orchestration vs Choreography",
        body: "In a microservices architecture using the Saga pattern for distributed transactions, what is the fundamental difference between **Orchestration** and **Choreography**?",
        solution: "**Orchestration** uses a **centralized coordinator service (the Orchestrator)** that dictates the order of transactions and handles compensating transactions explicitly if a step fails. **Choreography** relies on **decentralized communication** where each service publishes events, and other services subscribe and react to them, without a single central point of control."
      },
      jp: {
        title: "Sagaのオーケストレーションとコレオグラフィ",
        body: "分散トランザクションにSagaパターンを使用するマイクロサービスアーキテクチャにおいて、**オーケストレーション**と**コレオグラフィ**の根本的な違いは何ですか？",
        solution: "**オーケストレーション**は、**一元化されたコーディネーターサービス（オーケストレーター）**を使用してトランザクションの順序を指示し、ステップが失敗した場合に補償トランザクションを明示的に処理します。**コレオグラフィ**は**分散型通信**に依存しており、各サービスがイベントを公開し、他のサービスが単一の中央制御点なしでそれらを購読して反応します。"
      },
      vi: {
        title: "Saga Orchestration vs Choreography",
        body: "Trong kiến trúc microservices sử dụng Saga pattern cho các distributed transaction, sự khác biệt cơ bản giữa **Orchestration** và **Choreography** là gì?",
        solution: "**Orchestration** sử dụng một **service điều phối tập trung (Orchestrator)** để chỉ đạo thứ tự các transaction và xử lý các compensating transaction một cách rõ ràng nếu một bước thất bại. **Choreography** dựa vào **giao tiếp phi tập trung**, trong đó mỗi service publish các event, và các service khác subscribe và phản ứng với chúng, mà không có một điểm kiểm soát trung tâm duy nhất."
      }
    }
  },
  {
    _id: "sb-s-003",
    difficulty: "senior",
    tags: ["jvm", "performance", "gc", "heap"],
    content: {
      en: {
        title: "JVM Metaspace in Spring Boot",
        body: "How does the **Metaspace** differ from the old Permanent Generation (PermGen) in the JVM, and which Spring artifacts are primarily stored there?",
        solution: "The **Metaspace** replaces PermGen and is typically allocated in **native memory** (outside the Java heap), not the heap itself, making its size dynamic (unless limited by `-XX:MaxMetaspaceSize`). It primarily stores **class metadata**, including the **Spring Bean definitions**, bytecode, and AOP proxies."
      },
      jp: {
        title: "Spring BootにおけるJVMのMetaspace",
        body: "**Metaspace**はJVMの古いPermanent Generation（PermGen）とどのように異なり、主にどのようなSpringアーティファクトがそこに格納されますか？",
        solution: "**Metaspace**はPermGenに取って代わり、通常、ネイティブメモリ（Javaヒープの外側）に割り当てられ、ヒープ自体には割り当てられません。これにより、そのサイズは動的になります（`-XX:MaxMetaspaceSize`で制限されていない限り）。主に、**Spring Beanの定義**、バイトコード、およびAOPプロキシを含む**クラスメタデータ**を格納します。"
      },
      vi: {
        title: "JVM Metaspace trong Spring Boot",
        body: "**Metaspace** khác với Permanent Generation (PermGen) cũ trong JVM như thế nào, và những tạo tác (artifact) Spring nào chủ yếu được lưu trữ ở đó?",
        solution: "**Metaspace** thay thế PermGen và thường được cấp phát trong **native memory** (bên ngoài Java heap), chứ không phải chính heap, làm cho kích thước của nó là động (trừ khi bị giới hạn bởi `-XX:MaxMetaspaceSize`). Nó chủ yếu lưu trữ **metadata của class**, bao gồm **định nghĩa Spring Bean**, bytecode và AOP proxies."
      }
    }
  },
  {
    _id: "sb-s-004",
    difficulty: "senior",
    tags: ["data", "jpa", "performance", "query-hint"],
    content: {
      en: {
        title: "JPA Read-Only Optimization",
        body: "When reading a large amount of data without any intention to modify it, what two JPA/Hibernate configurations or annotations can you use to significantly optimize read performance by informing the persistence context?",
        solution: "1. Apply the **`@Transactional(readOnly = true)`** annotation. This tells the persistence context to avoid dirty checking and often allows the underlying JDBC driver to use optimized read-only settings. 2. Use **`@QueryHints`** (e.g., `org.hibernate.readOnly` hint set to `true`) on the repository method for fine-grained control."
      },
      jp: {
        title: "JPAの読み取り専用最適化",
        body: "データを変更する意図なしに大量のデータを読み取る場合、永続化コンテキストに通知することで読み取りパフォーマンスを大幅に最適化するために使用できる2つのJPA/Hibernate構成またはアノテーションは何ですか？",
        solution: "1. **`@Transactional(readOnly = true)`**アノテーションを適用します。これにより、永続化コンテキストはダーティチェックを回避し、多くの場合、基になるJDBCドライバーが最適化された読み取り専用設定を使用できるようになります。2. きめ細かな制御のために、リポジトリメソッドで**`@QueryHints`**（例：`org.hibernate.readOnly`ヒントを`true`に設定）を使用します。"
      },
      vi: {
        title: "Tối ưu hóa JPA Read-Only",
        body: "Khi đọc một lượng lớn dữ liệu mà không có ý định sửa đổi, hai cấu hình hoặc annotation JPA/Hibernate nào bạn có thể sử dụng để tối ưu hóa đáng kể hiệu suất đọc bằng cách thông báo cho persistence context?",
        solution: "1. Áp dụng annotation **`@Transactional(readOnly = true)`**. Điều này cho persistence context biết để tránh dirty checking và thường cho phép JDBC driver cơ bản sử dụng các cài đặt read-only được tối ưu hóa. 2. Sử dụng **`@QueryHints`** (ví dụ: hint `org.hibernate.readOnly` được đặt thành `true`) trên phương thức repository để kiểm soát chi tiết."
      }
    }
  },
  {
    _id: "sb-s-005",
    difficulty: "senior",
    tags: ["webflux", "reactor", "testing"],
    content: {
      en: {
        title: "Testing Reactive Streams with StepVerifier",
        body: "In Reactor testing, what is the purpose of the **`StepVerifier`** utility, and what common non-blocking assertions does it allow you to make?",
        solution: "`StepVerifier` is used to **test the execution and emission flow of a reactive sequence (Mono or Flux)** in a clear, sequential, and deterministic way. It allows assertions like: **`expectNext(...)`** (asserting emitted elements), **`expectComplete()`** (asserting successful termination), and **`expectError(Class)`** (asserting error termination)."
      },
      jp: {
        title: "StepVerifierを使用したリアクティブストリームのテスト",
        body: "Reactorテストにおいて、**`StepVerifier`**ユーティリティの目的は何ですか、またそれが許可する一般的な非ブロッキングアサーションは何ですか？",
        solution: "`StepVerifier`は、**リアクティブシーケンス（MonoまたはFlux）の実行と放出フロー**を、明確で、シーケンシャルで、決定論的な方法で**テストする**ために使用されます。**`expectNext(...)`**（放出された要素のアサート）、**`expectComplete()`**（成功した終了のアサート）、および**`expectError(Class)`**（エラー終了のアサート）などのアサーションを許可します。"
      },
      vi: {
        title: "Testing Reactive Streams với StepVerifier",
        body: "Trong kiểm thử Reactor, mục đích của utility **`StepVerifier`** là gì, và những assertion không chặn (non-blocking assertions) phổ biến nào nó cho phép bạn thực hiện?",
        solution: "`StepVerifier` được sử dụng để **kiểm thử luồng thực thi và phát xạ của một reactive sequence (Mono hoặc Flux)** một cách rõ ràng, tuần tự và xác định. Nó cho phép các assertion như: **`expectNext(...)`** (khẳng định các phần tử được phát ra), **`expectComplete()`** (khẳng định kết thúc thành công), và **`expectError(Class)`** (khẳng định kết thúc bằng lỗi)."
      }
    }
  },
  {
    _id: "sb-s-006",
    difficulty: "senior",
    tags: ["security", "oauth2", "jwt-converter"],
    content: {
      en: {
        title: "JWT Granted Authorities Converter",
        body: "In Spring Security Resource Server with JWTs, if the scopes/roles are stored in a custom claim (e.g., `user_roles`) within the token payload, how do you map these custom claims to Spring Security's **`GrantedAuthority`** objects?",
        solution: "You must configure a **`Converter<Jwt, Collection<GrantedAuthority>>`** bean (e.g., a `JwtAuthenticationConverter`). This converter intercepts the JWT, extracts the roles/scopes from the custom claim, and converts them into the format expected by Spring Security (e.g., `SimpleGrantedAuthority`)."
      },
      jp: {
        title: "JWT Granted Authorities Converter",
        body: "JWTを使用するSpring Security Resource Serverにおいて、スコープ/ロールがトークンペイロード内のカスタムクレーム（例：`user_roles`）に格納されている場合、これらのカスタムクレームをSpring Securityの**`GrantedAuthority`**オブジェクトにどのようにマッピングしますか？",
        solution: "カスタムの**`Converter<Jwt, Collection<GrantedAuthority>>`** Bean（例：`JwtAuthenticationConverter`）を構成する必要があります。このコンバーターはJWTをインターセプトし、カスタムクレームからロール/スコープを抽出し、それらをSpring Securityが期待する形式（例：`SimpleGrantedAuthority`）に変換します。"
      },
      vi: {
        title: "JWT Granted Authorities Converter",
        body: "Trong Spring Security Resource Server với JWT, nếu các scope/role được lưu trữ trong một custom claim (ví dụ: `user_roles`) bên trong payload của token, làm thế nào bạn ánh xạ các custom claim này tới các đối tượng **`GrantedAuthority`** của Spring Security?",
        solution: "Bạn phải cấu hình một bean **`Converter<Jwt, Collection<GrantedAuthority>>`** tùy chỉnh (ví dụ: một `JwtAuthenticationConverter`). Converter này chặn JWT, trích xuất các role/scope từ custom claim, và chuyển đổi chúng sang định dạng mà Spring Security mong đợi (ví dụ: `SimpleGrantedAuthority`)."
      }
    }
  },
  {
    _id: "sb-s-007",
    difficulty: "senior",
    tags: ["ioc", "bean", "circular-dependency"],
    content: {
      en: {
        title: "Circular Dependency Resolution",
        body: "Explain how Spring resolves **circular dependencies** between two singleton beans (`A` depends on `B`, and `B` depends on `A`) when using field or setter injection, and why it often fails with constructor injection.",
        solution: "With **setter/field injection**, Spring resolves it by using a **three-level cache**. It exposes an **early reference** (a proxy or incomplete instance) of the first bean (`A`) before it's fully initialized. When `B` is instantiated, it uses this early reference to satisfy its dependency on `A`. This generally **fails with constructor injection** because the bean must be fully constructed before a reference can be exposed, creating an unresolvable chicken-and-egg problem." 
      },
      jp: {
        title: "循環依存性の解決",
        body: "フィールドまたはセッターインジェクションを使用する場合、Springが2つのシングルトンBean間の**循環依存性**（`A`が`B`に依存し、`B`が`A`に依存する）をどのように解決するか、またコンストラクターインジェクションでそれがしばしば失敗する理由を説明してください。",
        solution: "**セッター/フィールドインジェクション**の場合、Springは**3レベルのキャッシュ**を使用してそれを解決します。最初のBean（`A`）が完全に初期化される前に、**早期参照**（プロキシまたは不完全なインスタンス）を公開します。`B`がインスタンス化されると、この早期参照を使用して`A`への依存性を満たします。これは、参照を公開する前にBeanを完全に構築する必要があるため、一般的に**コンストラクターインジェクションでは失敗**し、解決できない卵と鶏の問題を引き起こします。"
      },
      vi: {
        title: "Giải quyết Circular Dependency",
        body: "Giải thích cách Spring giải quyết **circular dependencies** giữa hai singleton bean (`A` phụ thuộc vào `B`, và `B` phụ thuộc vào `A`) khi sử dụng field hoặc setter injection, và tại sao nó thường thất bại với constructor injection.",
        solution: "Với **setter/field injection**, Spring giải quyết bằng cách sử dụng **bộ nhớ đệm ba cấp (three-level cache)**. Nó phơi bày một **tham chiếu sớm (early reference)** (một proxy hoặc instance chưa hoàn chỉnh) của bean đầu tiên (`A`) trước khi nó được khởi tạo hoàn toàn. Khi `B` được khởi tạo, nó sử dụng tham chiếu sớm này để thỏa mãn sự phụ thuộc vào `A`. Điều này thường **thất bại với constructor injection** vì bean phải được xây dựng hoàn toàn trước khi một tham chiếu có thể được phơi bày, tạo ra một vấn đề con gà quả trứng không thể giải quyết."
      }
    }
  },
  {
    _id: "sb-s-008",
    difficulty: "senior",
    tags: ["data", "jpa", "n-plus-1", "entity-graph"],
    content: {
      en: {
        title: "JPA Entity Graph",
        body: "What is the primary use case for the **`@EntityGraph`** annotation in Spring Data JPA, and how does it help mitigate the N+1 select problem?",
        solution: "`@EntityGraph` is used to **explicitly define the set of associations (relationships) that should be fetched** along with the root entity in a single query (using `LEFT JOIN` or `INNER JOIN`). This overrides the default lazy/eager loading configuration and ensures that all required child entities are loaded in **one or two queries**, eliminating the need for N subsequent queries (the N+1 problem)."
      },
      jp: {
        title: "JPA Entity Graph",
        body: "Spring Data JPAにおける**`@EntityGraph`**アノテーションの主な使用例は何ですか、またN+1選択の問題を軽減するのにどのように役立ちますか？",
        solution: "`@EntityGraph`は、単一のクエリでルートエンティティとともに**フェッチする必要がある関連付け（リレーションシップ）のセットを明示的に定義する**ために使用されます（`LEFT JOIN`または`INNER JOIN`を使用）。これにより、デフォルトのlazy/eagerローディング構成がオーバーライドされ、必要なすべての子エンティティが**1つまたは2つのクエリ**でロードされることが保証され、N個の後続のクエリ（N+1問題）の必要性が排除されます。"
      },
      vi: {
        title: "JPA Entity Graph",
        body: "Trường hợp sử dụng chính của annotation **`@EntityGraph`** trong Spring Data JPA là gì, và nó giúp giảm thiểu vấn đề N+1 select như thế nào?",
        solution: "`@EntityGraph` được sử dụng để **xác định rõ ràng tập hợp các mối quan hệ (associations) nên được fetch** cùng với entity gốc trong một truy vấn duy nhất (sử dụng `LEFT JOIN` hoặc `INNER JOIN`). Điều này ghi đè lên cấu hình lazy/eager loading mặc định và đảm bảo rằng tất cả các entity con cần thiết được tải trong **một hoặc hai truy vấn**, loại bỏ nhu cầu cho N truy vấn tiếp theo (vấn đề N+1)."
      }
    }
  },
  {
    _id: "sb-s-009",
    difficulty: "senior",
    tags: ["webflux", "functional", "router"],
    content: {
      en: {
        title: "Functional Endpoints Components",
        body: "In Spring WebFlux, the **Functional Endpoint** approach replaces `@Controller` with three key components. Name these components and their roles.",
        solution: "1. **`RouterFunction`**: Acts as the dispatcher, replacing `@RequestMapping` by routing a request (based on URL/Method) to a specific handler. 2. **`HandlerFunction`**: Represents the request handling logic, replacing the controller method body by processing the `ServerRequest` and returning a `Mono<ServerResponse>`. 3. **`ServerRequest`** and **`ServerResponse`**: Reactive, immutable representations of the HTTP request and response, respectively."
      },
      jp: {
        title: "関数型エンドポイントのコンポーネント",
        body: "Spring WebFluxでは、**関数型エンドポイント**アプローチは`@Controller`を3つの主要なコンポーネントに置き換えます。これらのコンポーネントとその役割を挙げてください。",
        solution: "1. **`RouterFunction`**: ディスパッチャーとして機能し、リクエスト（URL/メソッドに基づく）を特定のハンドラーにルーティングすることで`@RequestMapping`を置き換えます。2. **`HandlerFunction`**: リクエスト処理ロジックを表し、`ServerRequest`を処理し`Mono<ServerResponse>`を返すことでコントローラーメソッド本体を置き換えます。3. **`ServerRequest`**と**`ServerResponse`**: それぞれHTTPリクエストとレスポンスのリアクティブで不変な表現です。"
      },
      vi: {
        title: "Các thành phần Functional Endpoints",
        body: "Trong Spring WebFlux, phương pháp **Functional Endpoint** thay thế `@Controller` bằng ba thành phần chính. Nêu tên và vai trò của các thành phần này.",
        solution: "1. **`RouterFunction`**: Hoạt động như một dispatcher, thay thế `@RequestMapping` bằng cách định tuyến một request (dựa trên URL/Method) đến một handler cụ thể. 2. **`HandlerFunction`**: Đại diện cho logic xử lý request, thay thế phần thân phương thức controller bằng cách xử lý `ServerRequest` và trả về một `Mono<ServerResponse>`. 3. **`ServerRequest`** và **`ServerResponse`**: Là các biểu diễn bất biến, reactive của request và response HTTP tương ứng."
      }
    }
  },
  {
    _id: "sb-s-010",
    difficulty: "senior",
    tags: ["security", "method-security", "spel"],
    content: {
      en: {
        title: "Method Security SpEL",
        body: "When using method-level security (`@PreAuthorize` or `@PostAuthorize`), what is the primary security-related utility object available in the Spring Expression Language (SpEL) context, and what information does it provide?",
        solution: "The primary object is **`#authentication`** (or shorthand **`principal`**). It provides access to the current **`Authentication`** object, which contains the authenticated user's details (`#authentication.name` or `#authentication.getAuthorities()`) and is used for making fine-grained, dynamic authorization decisions (e.g., `#principal.username == #targetUserId`)."
      },
      jp: {
        title: "メソッドセキュリティ SpEL",
        body: "メソッドレベルのセキュリティ（`@PreAuthorize`または`@PostAuthorize`）を使用する場合、Spring Expression Language (SpEL)コンテキストで利用できる主要なセキュリティ関連のユーティリティオブジェクトは何ですか、またそれはどのような情報を提供しますか？",
        solution: "主要なオブジェクトは**`#authentication`**（または省略形**`principal`**）です。これは、認証されたユーザーの詳細（`#authentication.name`または`#authentication.getAuthorities()`）を含む現在の**`Authentication`**オブジェクトへのアクセスを提供し、きめ細かな動的認証決定を行うために使用されます（例：`#principal.username == #targetUserId`）。"
      },
      vi: {
        title: "Method Security SpEL",
        body: "Khi sử dụng bảo mật cấp độ phương thức (`@PreAuthorize` hoặc `@PostAuthorize`), đối tượng tiện ích chính liên quan đến bảo mật có sẵn trong Spring Expression Language (SpEL) context là gì, và nó cung cấp thông tin gì?",
        solution: "Đối tượng chính là **`#authentication`** (hoặc viết tắt **`principal`**). Nó cung cấp quyền truy cập vào đối tượng **`Authentication`** hiện tại, đối tượng này chứa thông tin chi tiết của người dùng đã được xác thực (`#authentication.name` hoặc `#authentication.getAuthorities()`) và được sử dụng để đưa ra các quyết định ủy quyền động, chi tiết (ví dụ: `#principal.username == #targetUserId`)."
      }
    }
  },
  {
    _id: "sb-s-011",
    difficulty: "senior",
    tags: ["ioc", "testing", "spring-extension"],
    content: {
      en: {
        title: "SpringExtension for JUnit 5",
        body: "In JUnit 5 testing, what is the core role of the **`SpringExtension`** (implicitly used by `@SpringBootTest`), and how does it enable dependency injection within test classes?",
        solution: "The **`SpringExtension`** integrates the Spring TestContext Framework into the JUnit 5 extension model. Its role is to **load and manage the Spring ApplicationContext** for the tests, and it hooks into the test lifecycle to automatically perform **dependency injection** (e.g., injecting beans using `@Autowired`) into the test class instance *before* test methods are executed."
      },
      jp: {
        title: "JUnit 5用SpringExtension",
        body: "JUnit 5テストにおいて、**`SpringExtension`**（`@SpringBootTest`によって暗黙的に使用される）の核となる役割は何ですか、またそれはテストクラス内での依存性注入をどのように可能にしますか？",
        solution: "**`SpringExtension`**は、Spring TestContext FrameworkをJUnit 5拡張モデルに統合します。その役割は、テストのために**Spring ApplicationContextをロードおよび管理する**ことであり、テストメソッドが実行される*前*にテストライフサイクルにフックして、テストクラスインスタンスへの**依存性注入**（例：`@Autowired`を使用したBeanの注入）を自動的に実行します。"
      },
      vi: {
        title: "SpringExtension cho JUnit 5",
        body: "Trong kiểm thử JUnit 5, vai trò cốt lõi của **`SpringExtension`** (được `@SpringBootTest` sử dụng ngầm) là gì, và nó kích hoạt dependency injection bên trong các lớp kiểm thử như thế nào?",
        solution: "**`SpringExtension`** tích hợp Spring TestContext Framework vào mô hình extension của JUnit 5. Vai trò của nó là **tải và quản lý Spring ApplicationContext** cho các bài kiểm thử, và nó can thiệp vào vòng đời kiểm thử để tự động thực hiện **dependency injection** (ví dụ: inject các bean bằng `@Autowired`) vào instance của lớp kiểm thử *trước khi* các phương thức kiểm thử được thực thi."
      }
    }
  },
  {
    _id: "sb-s-012",
    difficulty: "senior",
    tags: ["messaging", "kafka", "transaction"],
    content: {
      en: {
        title: "Idempotency in Kafka Consumers",
        body: "When dealing with potential message duplicates in Spring Kafka, explain the 'at least once' delivery guarantee and what technique a Kafka consumer should use to ensure **idempotency** when processing messages.",
        solution: "'At least once' means a message is delivered one or more times, potentially causing duplicates. To ensure **idempotency**, the consumer must implement logic to handle processing a message multiple times without side effects. This is typically achieved by using a **unique message ID** (e.g., stored in the database) and checking if the ID has already been processed **within a local transaction** before committing the operation."
      },
      jp: {
        title: "Kafkaコンシューマーの冪等性",
        body: "Spring Kafkaでメッセージの重複の可能性に対処する場合、「少なくとも1回」の配信保証を説明し、メッセージを処理する際に**冪等性**を確保するためにKafkaコンシューマーが使用すべき手法は何ですか。",
        solution: "「少なくとも1回」とは、メッセージが1回以上配信されることを意味し、重複を引き起こす可能性があります。**冪等性**を確保するために、コンシューマーは副作用なしにメッセージを複数回処理するロジックを実装する必要があります。これは通常、**一意のメッセージID**（例：データベースに格納されている）を使用し、操作をコミットする**ローカルトランザクション内**でIDが既に処理されているかどうかを確認することによって実現されます。"
      },
      vi: {
        title: "Idempotency trong Kafka Consumers",
        body: "Khi xử lý các tin nhắn trùng lặp tiềm năng trong Spring Kafka, hãy giải thích đảm bảo gửi 'at least once' và kỹ thuật nào mà một Kafka consumer nên sử dụng để đảm bảo **idempotency** (lũy đẳng) khi xử lý tin nhắn.",
        solution: "'At least once' có nghĩa là một tin nhắn được gửi một hoặc nhiều lần, có khả năng gây ra trùng lặp. Để đảm bảo **idempotency**, consumer phải implement logic để xử lý tin nhắn nhiều lần mà không gây ra tác dụng phụ. Điều này thường đạt được bằng cách sử dụng một **ID tin nhắn duy nhất** (ví dụ: được lưu trữ trong cơ sở dữ liệu) và kiểm tra xem ID đã được xử lý hay chưa **bên trong một transaction cục bộ** trước khi commit thao tác."
      }
    }
  },
  {
    _id: "sb-s-013",
    difficulty: "senior",
    tags: ["ioc", "factory-bean", "proxy"],
    content: {
      en: {
        title: "FactoryBean vs Factory Method",
        body: "What is the primary technical use case for implementing the **`FactoryBean`** interface in Spring, and how is it different from simply declaring a bean using the `@Bean` annotation (a factory method)?",
        solution: "A **`FactoryBean`** is used to create and expose an object that requires **complex setup logic** (e.g., creating a highly customized proxy, or integrating with external libraries). When injecting a `FactoryBean`, Spring injects the object *produced* by the factory (`FactoryBean.getObject()`), not the factory itself. A simple `@Bean` factory method typically creates a bean directly and is simpler, but lacks the programmatic control over the object's type and lifecycle provided by `FactoryBean`."
      },
      jp: {
        title: "FactoryBeanとFactory Methodの違い",
        body: "Springで**`FactoryBean`**インターフェースを実装する主な技術的な使用例は何ですか、また`@Bean`アノテーション（ファクトリメソッド）を使用してBeanを宣言するのとどのように異なりますか？",
        solution: "**`FactoryBean`**は、**複雑なセットアップロジック**を必要とするオブジェクトを作成し公開するために使用されます（例：高度にカスタマイズされたプロキシの作成、または外部ライブラリとの統合）。`FactoryBean`を注入するとき、Springはファクトリ自体ではなく、ファクトリによって*生成された*オブジェクト（`FactoryBean.getObject()`）を注入します。単純な`@Bean`ファクトリメソッドは通常、Beanを直接作成し、よりシンプルですが、`FactoryBean`が提供するオブジェクトの型とライフサイクルに対するプログラムによる制御を欠いています。"
      },
      vi: {
        title: "FactoryBean vs Factory Method",
        body: "Trường hợp sử dụng kỹ thuật chính cho việc implement interface **`FactoryBean`** trong Spring là gì, và nó khác với việc chỉ khai báo một bean bằng annotation `@Bean` (một factory method) như thế nào?",
        solution: "Một **`FactoryBean`** được sử dụng để tạo và phơi bày một đối tượng yêu cầu **logic thiết lập phức tạp** (ví dụ: tạo một proxy được tùy chỉnh cao, hoặc tích hợp với các thư viện bên ngoài). Khi inject một `FactoryBean`, Spring inject đối tượng *được tạo* bởi factory (`FactoryBean.getObject()`), chứ không phải chính factory đó. Một factory method `@Bean` đơn giản thường tạo một bean trực tiếp và đơn giản hơn, nhưng thiếu quyền kiểm soát theo chương trình đối với kiểu và vòng đời của đối tượng mà `FactoryBean` cung cấp."
      }
    }
  },
  {
    _id: "sb-s-014",
    difficulty: "senior",
    tags: ["actuator", "metrics", "micrometer", "custom"],
    content: {
      en: {
        title: "Micrometer Custom Gauge",
        body: "In Micrometer (used by Spring Boot Actuator), when would you choose to create a **`Gauge`** metric instead of a **`Counter`** or a **`Timer`**?",
        solution: "A **`Gauge`** is chosen when you need to measure a **current value** (a snapshot) that can go both up and down, such as the **current size of a queue**, the number of active connections, or the current temperature of a system. A **`Counter`** only goes up (cumulative total), and a **`Timer`** measures duration."
      },
      jp: {
        title: "Micrometerカスタムゲージ",
        body: "Micrometer（Spring Boot Actuatorで使用）において、**`Counter`**や**`Timer`**の代わりに**`Gauge`**メトリクスを作成することを選択するのはどのような場合ですか？",
        solution: "**`Gauge`**は、**現在のキューのサイズ**、アクティブな接続の数、またはシステムの現在の温度など、上下する可能性のある**現在の値**（スナップショット）を測定する必要がある場合に選択されます。**`Counter`**は増加するのみ（累積合計）であり、**`Timer`**は期間を測定します。"
      },
      vi: {
        title: "Micrometer Custom Gauge",
        body: "Trong Micrometer (được Spring Boot Actuator sử dụng), khi nào bạn chọn tạo một metric **`Gauge`** thay vì một **`Counter`** hay một **`Timer`**?",
        solution: "Một **`Gauge`** được chọn khi bạn cần đo lường một **giá trị hiện tại** (một snapshot) có thể tăng và giảm, chẳng hạn như **kích thước hiện tại của một hàng đợi**, số lượng kết nối đang hoạt động, hoặc nhiệt độ hiện tại của một hệ thống. Một **`Counter`** chỉ tăng lên (tổng tích lũy), và một **`Timer`** đo lường thời gian."
      }
    }
  },
  {
    _id: "sb-s-015",
    difficulty: "senior",
    tags: ["data", "jpa", "transaction", "read-write-split"],
    content: {
      en: {
        title: "Read/Write Transaction Split",
        body: "In a setup with separate Read-Only and Read-Write data sources, how can you use Spring's transaction management and the **`@Transactional`** annotation to ensure that read-only methods are routed to the read-only data source?",
        solution: "You must configure a custom Spring `AbstractRoutingDataSource` that uses the value of the **`@Transactional(readOnly = true)`** flag (or a custom thread-local context) to dynamically determine which physical data source (Read-Only or Read-Write) to use before acquiring a connection. The `readOnly = true` flag in the annotation is the key discriminator."
      },
      jp: {
        title: "読み取り/書き込みトランザクション分割",
        body: "読み取り専用と読み書き可能なデータソースが分離されたセットアップにおいて、Springのトランザクション管理と**`@Transactional`**アノテーションを使用して、読み取り専用メソッドが読み取り専用データソースにルーティングされるようにするにはどうすればよいですか？",
        solution: "接続を取得する前に、**`@Transactional(readOnly = true)`**フラグの値（またはカスタムスレッドローカルコンテキスト）を使用して、使用する物理データソース（読み取り専用または読み書き可能）を動的に決定するカスタムのSpring `AbstractRoutingDataSource`を構成する必要があります。アノテーションの`readOnly = true`フラグが重要な識別子となります。"
      },
      vi: {
        title: "Read/Write Transaction Split",
        body: "Trong một thiết lập với các data source Read-Only và Read-Write riêng biệt, làm thế nào bạn có thể sử dụng quản lý transaction của Spring và annotation **`@Transactional`** để đảm bảo rằng các phương thức read-only được chuyển hướng đến data source read-only?",
        solution: "Bạn phải cấu hình một `AbstractRoutingDataSource` tùy chỉnh của Spring, sử dụng giá trị của cờ **`@Transactional(readOnly = true)`** (hoặc một thread-local context tùy chỉnh) để xác định động data source vật lý nào (Read-Only hay Read-Write) sẽ sử dụng trước khi lấy một kết nối. Cờ `readOnly = true` trong annotation là yếu tố phân biệt chính."
      }
    }
  },
  {
    _id: "sb-s-016",
    difficulty: "senior",
    tags: ["testing", "contract", "consumer"],
    content: {
      en: {
        title: "Consumer-Driven Contract Testing (CDC)",
        body: "In a microservices environment, what is **Consumer-Driven Contract (CDC) testing**, and what Spring Cloud component is commonly used to facilitate this type of testing?",
        solution: "CDC testing is a technique where the **consumer service writes a contract** (an expectation of the producer's API), and this contract is then validated against the **producer service** to ensure compatibility *before* deployment. This prevents breaking changes. **Spring Cloud Contract** is the component used to manage, generate, and verify these contracts for both producer and consumer sides."
      },
      jp: {
        title: "コンシューマー主導型契約テスト（CDC）",
        body: "マイクロサービス環境において、**コンシューマー主導型契約（CDC）テスト**とは何ですか、またこの種のテストを促進するために一般的に使用されるSpring Cloudコンポーネントは何ですか？",
        solution: "CDCテストは、**コンシューマーサービスが契約**（プロデューサーのAPIに対する期待）を記述し、その契約がデプロイ*前*に**プロデューサーサービス**に対して検証され、互換性を確保する手法です。これにより、破壊的な変更が防止されます。**Spring Cloud Contract**は、プロデューサー側とコンシューマー側の両方でこれらの契約を管理、生成、検証するために使用されるコンポーネントです。"
      },
      vi: {
        title: "Consumer-Driven Contract Testing (CDC)",
        body: "Trong môi trường microservices, **Consumer-Driven Contract (CDC) testing** là gì, và thành phần Spring Cloud nào thường được sử dụng để hỗ trợ loại kiểm thử này?",
        solution: "Kiểm thử CDC là một kỹ thuật trong đó **service consumer viết một contract** (một kỳ vọng về API của producer), và contract này sau đó được xác thực với **service producer** để đảm bảo tính tương thích *trước khi* triển khai. Điều này ngăn chặn các thay đổi gây lỗi (breaking changes). **Spring Cloud Contract** là thành phần được sử dụng để quản lý, tạo và xác minh các contract này cho cả phía producer và consumer."
      }
    }
  },
  {
    _id: "sb-s-017",
    difficulty: "senior",
    tags: ["security", "custom-auth", "provider"],
    content: {
      en: {
        title: "Custom AuthenticationProvider",
        body: "When implementing a custom authentication flow (e.g., using a legacy database or an external system like LDAP), which core Spring Security interface must be implemented to handle the authentication logic, and what is its main method?",
        solution: "You must implement the **`AuthenticationProvider`** interface. The main method is **`authenticate(Authentication authentication)`**. This method takes an unauthenticated `Authentication` object, performs the custom validation/lookup, and returns a fully authenticated `Authentication` object (or throws an `AuthenticationException`)." 
      },
      jp: {
        title: "カスタムAuthenticationProvider",
        body: "カスタム認証フロー（例：レガシーデータベースやLDAPなどの外部システムの使用）を実装する場合、認証ロジックを処理するために実装する必要があるコアなSpring Securityインターフェースは何ですか、またその主要なメソッドは何ですか？",
        solution: "**`AuthenticationProvider`**インターフェースを実装する必要があります。主要なメソッドは**`authenticate(Authentication authentication)`**です。このメソッドは、未認証の`Authentication`オブジェクトを受け取り、カスタム検証/ルックアップを実行し、完全に認証された`Authentication`オブジェクトを返すか、`AuthenticationException`をスローします。"
      },
      vi: {
        title: "Custom AuthenticationProvider",
        body: "Khi implement một luồng xác thực tùy chỉnh (ví dụ: sử dụng cơ sở dữ liệu kế thừa hoặc một hệ thống bên ngoài như LDAP), interface cốt lõi nào của Spring Security phải được implement để xử lý logic xác thực, và phương thức chính của nó là gì?",
        solution: "Bạn phải implement interface **`AuthenticationProvider`**. Phương thức chính là **`authenticate(Authentication authentication)`**. Phương thức này nhận một đối tượng `Authentication` chưa được xác thực, thực hiện xác thực/tra cứu tùy chỉnh, và trả về một đối tượng `Authentication` đã được xác thực hoàn toàn (hoặc ném ra một `AuthenticationException`)."
      }
    }
  },
  {
    _id: "sb-s-018",
    difficulty: "senior",
    tags: ["data", "jpa", "audit", "events"],
    content: {
      en: {
        title: "JPA Auditing vs Event Listeners",
        body: "In terms of auditing, what benefit does using **Spring Data JPA Auditing** (with annotations like `@CreatedDate`) provide over manually using JPA Entity Listeners (`@PrePersist`) for setting audit fields?",
        solution: "Spring Data JPA Auditing **decouples the auditing logic** from the entity itself and the persistence context logic. It automatically relies on Spring Security's context to find the current user for fields like `@CreatedBy`. It is cleaner, requires less boilerplate code in the entities/listeners, and centralizes the common auditing pattern."
      },
      jp: {
        title: "JPA Auditingとイベントリスナー",
        body: "監査に関して、**Spring Data JPA Auditing**（`@CreatedDate`などのアノテーションを使用）を使用することは、監査フィールドを設定するためにJPAエンティティリスナー（`@PrePersist`）を手動で使用することと比較して、どのような利点がありますか？",
        solution: "Spring Data JPA Auditingは、監査ロジックをエンティティ自体および永続化コンテキストロジックから**切り離します**。`@CreatedBy`などのフィールドについて、現在のユーザーを見つけるためにSpring Securityのコンテキストに自動的に依存します。よりクリーンで、エンティティ/リスナーでの定型コードが少なく、一般的な監査パターンを一元化します。"
      },
      vi: {
        title: "JPA Auditing vs Event Listeners",
        body: "Về mặt auditing, việc sử dụng **Spring Data JPA Auditing** (với các annotation như `@CreatedDate`) mang lại lợi ích gì so với việc sử dụng thủ công JPA Entity Listeners (`@PrePersist`) để đặt các trường audit?",
        solution: "Spring Data JPA Auditing **tách rời logic auditing** khỏi chính entity và logic persistence context. Nó tự động dựa vào context của Spring Security để tìm người dùng hiện tại cho các trường như `@CreatedBy`. Nó sạch hơn, yêu cầu ít mã boilerplate hơn trong các entity/listener, và tập trung hóa mẫu auditing phổ biến."
      }
    }
  },
  {
    _id: "sb-s-019",
    difficulty: "senior",
    tags: ["actuator", "tracing", "baggage", "context"],
    content: {
      en: {
        title: "Context Propagation in WebFlux",
        body: "In Spring WebFlux/Reactor, how is **Context Propagation** (analogous to ThreadLocal variables in MVC) handled across asynchronous operations, and which class is typically used to manage this context?",
        solution: "Context Propagation is managed by the **`Context`** API, a part of the Reactor library. The `Context` is carried explicitly by the reactive sequences (`Mono`/`Flux`) and is immutable. You use operators like `.contextWrite()` to add values that are then available downstream, ensuring the context (e.g., security or transaction ID) follows the asynchronous flow."
      },
      jp: {
        title: "WebFluxのコンテキスト伝播",
        body: "Spring WebFlux/Reactorにおいて、**コンテキスト伝播**（MVCのThreadLocal変数に類似）は非同期操作間でどのように処理され、このコンテキストを管理するために通常使用されるクラスは何ですか？",
        solution: "コンテキスト伝播は、Reactorライブラリの一部である**`Context`** APIによって管理されます。`Context`はリアクティブシーケンス（`Mono`/`Flux`）によって明示的に伝達され、不変です。`.contextWrite()`のようなオペレーターを使用して、ダウンストリームで利用可能になる値を追加し、コンテキスト（例：セキュリティまたはトランザクションID）が非同期フローに従うようにします。"
      },
      vi: {
        title: "Context Propagation trong WebFlux",
        body: "Trong Spring WebFlux/Reactor, **Context Propagation** (tương tự như các biến ThreadLocal trong MVC) được xử lý như thế nào qua các hoạt động bất đồng bộ, và class nào thường được sử dụng để quản lý context này?",
        solution: "Context Propagation được quản lý bởi API **`Context`**, một phần của thư viện Reactor. `Context` được mang theo một cách rõ ràng bởi các reactive sequence (`Mono`/`Flux`) và là bất biến. Bạn sử dụng các operator như `.contextWrite()` để thêm các giá trị sau đó sẽ có sẵn ở downstream, đảm bảo context (ví dụ: ID bảo mật hoặc transaction) đi theo luồng bất đồng bộ."
      }
    }
  },
  {
    _id: "sb-s-020",
    difficulty: "senior",
    tags: ["ioc", "post-processor", "annotation"],
    content: {
      en: {
        title: "Custom Annotation Processing",
        body: "To process a custom annotation (e.g., `@MyRateLimit`) applied to a Spring Bean at runtime, what two core interfaces must be combined in a custom class, and what are their specific roles?",
        solution: "You need a class that implements: 1. **`BeanPostProcessor`**: To inspect beans after they are created and wrap them. 2. **`ProxyFactory`** (or AOP Proxying mechanism): To create a proxy instance that intercepts the calls to the annotated methods, allowing you to inject the custom logic (e.g., rate limiting check) before invoking the original method."
      },
      jp: {
        title: "カスタムアノテーション処理",
        body: "実行時にSpring Beanに適用されたカスタムアノテーション（例：`@MyRateLimit`）を処理するには、カスタムクラスでどの2つのコアインターフェースを組み合わせる必要があり、それらの特定の役割は何ですか？",
        solution: "実装する必要があるクラスは次のとおりです。1. **`BeanPostProcessor`**: Beanが作成された後に検査し、ラップするため。2. **`ProxyFactory`**（またはAOPプロキシメカニズム）：アノテーションが付けられたメソッドへの呼び出しをインターセプトするプロキシインスタンスを作成し、元のメソッドを呼び出す前にカスタムロジック（例：レート制限チェック）を注入できるようにします。"
      },
      vi: {
        title: "Custom Annotation Processing",
        body: "Để xử lý một annotation tùy chỉnh (ví dụ: `@MyRateLimit`) được áp dụng cho một Spring Bean tại thời điểm chạy, hai interface cốt lõi nào phải được kết hợp trong một class tùy chỉnh, và vai trò cụ thể của chúng là gì?",
        solution: "Bạn cần một class implement: 1. **`BeanPostProcessor`**: Để kiểm tra các bean sau khi chúng được tạo và bọc (wrap) chúng. 2. **`ProxyFactory`** (hoặc cơ chế AOP Proxying): Để tạo một instance proxy chặn các lời gọi đến các phương thức được đánh dấu annotation, cho phép bạn inject logic tùy chỉnh (ví dụ: kiểm tra rate limiting) trước khi gọi phương thức gốc."
      }
    }
  },
  {
    _id: "sb-s-021",
    difficulty: "senior",
    tags: ["webflux", "functional", "coroutine"],
    content: {
      en: {
        title: "WebFlux Coroutine Support",
        body: "When using Kotlin in Spring WebFlux, how do **Coroutines** (using `suspend` functions) simplify the programming model compared to manually managing `Mono`/`Flux` chains, and why are they still non-blocking?",
        solution: "Coroutines allow developers to write **sequential, imperative-style code** that is translated by the Kotlin compiler into **non-blocking asynchronous operations**. This avoids the complex callback chaining of `Mono`/`Flux` operators. They are non-blocking because the `suspend` function **pauses execution without blocking the underlying thread**, resuming later when the result is available, just like reactive operators."
      },
      jp: {
        title: "WebFluxコルーチンサポート",
        body: "Spring WebFluxでKotlinを使用する場合、**コルーチン**（`suspend`関数を使用）は、`Mono`/`Flux`チェーンを手動で管理する場合と比較して、プログラミングモデルをどのように簡素化しますか、またそれらが依然として非ブロッキングであるのはなぜですか？",
        solution: "コルーチンを使用すると、開発者は**シーケンシャルで命令型スタイルのコード**を記述でき、それはKotlinコンパイラによって**非ブロッキングの非同期操作**に変換されます。これにより、`Mono`/`Flux`オペレーターの複雑なコールバックチェーンが回避されます。`suspend`関数は**基になるスレッドをブロックせずに実行を一時停止**し、結果が利用可能になったときに再開するため、リアクティブオペレーターと同様に非ブロッキングです。"
      },
      vi: {
        title: "WebFlux Coroutine Support",
        body: "Khi sử dụng Kotlin trong Spring WebFlux, **Coroutines** (sử dụng các hàm `suspend`) đơn giản hóa mô hình lập trình như thế nào so với việc quản lý thủ công các chuỗi `Mono`/`Flux`, và tại sao chúng vẫn là non-blocking?",
        solution: "Coroutines cho phép developer viết **mã kiểu tuần tự, mệnh lệnh (sequential, imperative-style code)** được trình biên dịch Kotlin dịch thành **các hoạt động bất đồng bộ không chặn (non-blocking asynchronous operations)**. Điều này tránh chuỗi callback phức tạp của các operator `Mono`/`Flux`. Chúng là non-blocking vì hàm `suspend` **tạm dừng việc thực thi mà không chặn thread cơ bản**, tiếp tục sau đó khi kết quả có sẵn, giống như các reactive operator."
      }
    }
  },
  {
    _id: "sb-s-022",
    difficulty: "senior",
    tags: ["data", "jpa", "indexing", "database"],
    content: {
      en: {
        title: "Database Indexing Strategy",
        body: "When designing a compound index (multi-column index) in a SQL database backing a Spring Boot application, what is the **Leftmost Prefix Rule** (or Left-hand rule), and why is it crucial for query optimization?",
        solution: "The **Leftmost Prefix Rule** states that a compound index (e.g., on columns A, B, C) can only be used effectively if the query condition includes the **leftmost column** (A), or a prefix of the index (A and B). This is because the index structure is sorted based on the order of the columns. If the query only filters on column C, the index is generally useless." 
      },
      jp: {
        title: "データベースインデックス戦略",
        body: "Spring Bootアプリケーションを裏付けるSQLデータベースで複合インデックス（複数列インデックス）を設計する際、**左端プレフィックスルール**（または左手ルール）とは何ですか、またなぜそれがクエリ最適化にとって重要なのでしょうか？",
        solution: "**左端プレフィックスルール**は、複合インデックス（例：列A、B、C）が効果的に使用できるのは、クエリ条件に**最も左の列**（A）、またはインデックスのプレフィックス（AとB）が含まれている場合のみであると述べています。これは、インデックス構造が列の順序に基づいてソートされているためです。クエリが列Cのみでフィルタリングする場合、インデックスは一般的に役に立ちません。"
      },
      vi: {
        title: "Database Indexing Strategy",
        body: "Khi thiết kế một compound index (multi-column index) trong cơ sở dữ liệu SQL hỗ trợ ứng dụng Spring Boot, **Leftmost Prefix Rule** (hoặc Left-hand rule) là gì, và tại sao nó lại quan trọng đối với việc tối ưu hóa truy vấn?",
        solution: "**Leftmost Prefix Rule** tuyên bố rằng một compound index (ví dụ: trên các cột A, B, C) chỉ có thể được sử dụng hiệu quả nếu điều kiện truy vấn bao gồm **cột ngoài cùng bên trái** (A), hoặc một tiền tố của index (A và B). Điều này là do cấu trúc index được sắp xếp dựa trên thứ tự của các cột. Nếu truy vấn chỉ lọc trên cột C, index nói chung là vô dụng."
      }
    }
  },
  {
    _id: "sb-s-023",
    difficulty: "senior",
    tags: ["ioc", "testing", "mockito", "spy"],
    content: {
      en: {
        title: "Mockito Spy vs Mock",
        body: "In Mockito, what is the fundamental difference between a **`@Mock`** and a **`@Spy`**, and when is a Spy preferred?",
        solution: "A **`@Mock`** creates a **completely fabricated object** where the real methods are never called by default (all behavior must be stubbed). A **`@Spy`** creates a **real object instance** where the real methods *are* called by default, and only specific methods are stubbed or verified. A Spy is preferred when you need to test a specific method of a real object while still being able to verify or override the behavior of its dependencies."
      },
      jp: {
        title: "MockitoのSpyとMockの違い",
        body: "Mockitoにおいて、**`@Mock`**と**`@Spy`**の根本的な違いは何ですか、またSpyが好まれるのはどのような場合ですか？",
        solution: "**`@Mock`**は、実際のメソッドがデフォルトで呼び出されない**完全に偽造されたオブジェクト**を作成します（すべての動作はスタブ化する必要があります）。**`@Spy`**は、実際のメソッドがデフォルトで*呼び出される***実際のオブジェクトインスタンス**を作成し、特定のメソッドのみがスタブ化または検証されます。Spyは、実際のオブジェクトの特定のメソッドをテストしつつ、その依存関係の動作を検証またはオーバーライドできる必要がある場合に好まれます。"
      },
      vi: {
        title: "Mockito Spy vs Mock",
        body: "Trong Mockito, sự khác biệt cơ bản giữa một **`@Mock`** và một **`@Spy`** là gì, và khi nào thì Spy được ưu tiên hơn?",
        solution: "Một **`@Mock`** tạo ra một **đối tượng hoàn toàn giả lập** nơi các phương thức thực không bao giờ được gọi theo mặc định (tất cả hành vi phải được stub). Một **`@Spy`** tạo ra một **instance đối tượng thực** nơi các phương thức thực *được* gọi theo mặc định, và chỉ các phương thức cụ thể mới được stub hoặc xác minh. Spy được ưu tiên khi bạn cần kiểm thử một phương thức cụ thể của một đối tượng thực trong khi vẫn có thể xác minh hoặc ghi đè hành vi của các dependencies của nó."
      }
    }
  },
  {
    _id: "sb-s-024",
    difficulty: "senior",
    tags: ["microservices", "event-sourcing", "cqrs"],
    content: {
      en: {
        title: "Event Sourcing and CQRS",
        body: "Explain how **Event Sourcing** fundamentally differs from traditional state-based persistence, and how it is often paired with the **CQRS** pattern in a high-performance system.",
        solution: "**Event Sourcing** stores the **sequence of state-changing events** (e.g., `OrderCreated`, `ItemAdded`) instead of the current state. The current state is then derived by replaying these events. It is paired with **CQRS** (Command Query Responsibility Segregation) where the **Command** side (writes) uses Event Sourcing, and the **Query** side (reads) uses a separate, optimized, denormalized read model built from the events, allowing for separate scaling and optimization of reads/writes."
      },
      jp: {
        title: "イベントソーシングとCQRS",
        body: "**イベントソーシング**が従来の状態ベースの永続化とどのように根本的に異なるか、また高性能システムで**CQRS**パターンとどのように組み合わされることが多いかを説明してください。",
        solution: "**イベントソーシング**は、現在の状態ではなく、**状態変更イベントのシーケンス**（例：`OrderCreated`、`ItemAdded`）を保存します。現在の状態は、これらのイベントを再生することによって導出されます。これは、**CQRS**（Command Query Responsibility Segregation）と組み合わされます。**コマンド**側（書き込み）はイベントソーシングを使用し、**クエリ**側（読み取り）はイベントから構築された別個の、最適化された非正規化された読み取りモデルを使用するため、読み取り/書き込みの分離されたスケーリングと最適化が可能になります。"
      },
      vi: {
        title: "Event Sourcing và CQRS",
        body: "Giải thích cách **Event Sourcing** khác biệt cơ bản với persistence dựa trên trạng thái truyền thống, và cách nó thường được kết hợp với pattern **CQRS** trong một hệ thống hiệu suất cao.",
        solution: "**Event Sourcing** lưu trữ **chuỗi các event thay đổi trạng thái** (ví dụ: `OrderCreated`, `ItemAdded`) thay vì trạng thái hiện tại. Trạng thái hiện tại sau đó được suy ra bằng cách phát lại các event này. Nó được kết hợp với **CQRS** (Command Query Responsibility Segregation) nơi phía **Command** (ghi) sử dụng Event Sourcing, và phía **Query** (đọc) sử dụng một mô hình đọc phi chuẩn hóa, được tối ưu hóa, được xây dựng từ các event, cho phép mở rộng và tối ưu hóa riêng biệt cho đọc/ghi."
      }
    }
  },
  {
    _id: "sb-s-025",
    difficulty: "senior",
    tags: ["data", "jpa", "optimistic-lock"],
    content: {
      en: {
        title: "Optimistic Locking Failure",
        body: "In JPA/Hibernate Optimistic Locking (using `@Version`), what exception is thrown when a concurrent transaction attempts to update an entity that has already been modified and committed since it was first loaded, and how should a service typically handle this?",
        solution: "The **`ObjectOptimisticLockingFailureException`** (or `OptimisticLockException` in JPA) is thrown. The service layer typically handles this by **re-reading the entity**, presenting the user with the conflict, or **re-running the business transaction** logic (e.g., in a loop) to apply the changes to the new version of the entity." 
      },
      jp: {
        title: "楽観的ロックの失敗",
        body: "JPA/Hibernateの楽観的ロック（`@Version`を使用）において、同時トランザクションが最初にロードされてから既に変更およびコミットされたエンティティを更新しようとしたときにスローされる例外は何ですか、またサービスは通常これをどのように処理すべきですか？",
        solution: "**`ObjectOptimisticLockingFailureException`**（またはJPAの`OptimisticLockException`）がスローされます。サービス層は通常、**エンティティを再読み込み**し、ユーザーに競合を提示するか、**ビジネストランザクション**ロジックを**再実行**する（例：ループ内で）ことで、エンティティの新しいバージョンに変更を適用します。"
      },
      vi: {
        title: "Optimistic Locking Failure",
        body: "Trong JPA/Hibernate Optimistic Locking (sử dụng `@Version`), ngoại lệ nào được ném ra khi một transaction đồng thời cố gắng cập nhật một entity đã được sửa đổi và commit kể từ khi nó được tải lần đầu, và một service thường nên xử lý điều này như thế nào?",
        solution: "Ngoại lệ **`ObjectOptimisticLockingFailureException`** (hoặc `OptimisticLockException` trong JPA) được ném ra. Tầng service thường xử lý điều này bằng cách **đọc lại entity**, trình bày xung đột cho người dùng, hoặc **chạy lại logic transaction nghiệp vụ** (ví dụ: trong một vòng lặp) để áp dụng các thay đổi cho phiên bản mới của entity."
      }
    }
  },
  {
    _id: "sb-s-026",
    difficulty: "senior",
    tags: ["jvm", "performance", "thread-dump"],
    content: {
      en: {
        title: "Thread Dump Deadlock",
        body: "When analyzing a JVM **thread dump** of a Spring Boot application, what specific thread state or lock information indicates that two or more threads are in a **Deadlock** situation?",
        solution: "A Deadlock is indicated by threads being in the **`BLOCKED`** state (waiting to acquire a lock) and the dump explicitly showing the 'Found one Java-level deadlock' section. For each blocked thread, the dump will show it is **'waiting to own monitor'** for a specific lock object, while simultaneously being **'locked ownable synchronizer'** for another lock that the other thread is waiting for."
      },
      jp: {
        title: "スレッドダンプのデッドロック",
        body: "Spring BootアプリケーションのJVM**スレッドダンプ**を分析するとき、2つ以上のスレッドが**デッドロック**状況にあることを示す特定の**スレッド状態またはロック情報**は何ですか？",
        solution: "デッドロックは、スレッドが**`BLOCKED`**状態（ロックを取得するのを待っている）にあること、およびダンプが「Found one Java-level deadlock」セクションを明示的に示すことによって示されます。ブロックされた各スレッドについて、ダンプは、特定のロックオブジェクトの**「waiting to own monitor」**であると同時に、他のスレッドが待っている別のロックの**「locked ownable synchronizer」**であることを示します。"
      },
      vi: {
        title: "Thread Dump Deadlock",
        body: "Khi phân tích một **thread dump** JVM của một ứng dụng Spring Boot, trạng thái thread hoặc thông tin lock cụ thể nào cho biết rằng hai hoặc nhiều thread đang ở trong tình huống **Deadlock**?",
        solution: "Deadlock được chỉ ra bởi các thread ở trạng thái **`BLOCKED`** (đang chờ để có được một lock) và dump hiển thị rõ ràng phần 'Found one Java-level deadlock'. Đối với mỗi thread bị chặn, dump sẽ hiển thị nó đang **'waiting to own monitor'** cho một đối tượng lock cụ thể, đồng thời đang **'locked ownable synchronizer'** cho một lock khác mà thread kia đang chờ."
      }
    }
  },
  {
    _id: "sb-s-027",
    difficulty: "senior",
    tags: ["webflux", "reactor", "hot-cold"],
    content: {
      en: {
        title: "Hot vs Cold Observables",
        body: "In Reactor, what is the fundamental difference between a **Cold** `Flux` (or `Mono`) and a **Hot** `Flux`, and what operator is commonly used to convert a Cold stream to a Hot one?",
        solution: "A **Cold** stream (the default) **starts producing data when a Subscriber subscribes**; each new subscriber gets a new sequence of events from the beginning. A **Hot** stream **produces data regardless of whether there are subscribers**; subscribers that join late only see events emitted after they subscribe. The **`.publish().connect()`** or **`.share()`** operators are used to convert a Cold stream into a Hot (Connectable) stream."
      },
      jp: {
        title: "HotとColdのObservable",
        body: "Reactorにおいて、**Cold**な`Flux`（または`Mono`）と**Hot**な`Flux`の根本的な違いは何ですか、またColdストリームをHotストリームに変換するために一般的に使用されるオペレーターは何ですか？",
        solution: "**Cold**ストリーム（デフォルト）は、**Subscriberがサブスクライブしたとき**に**データの生成を開始します**。新しいSubscriberごとに、最初から新しいイベントシーケンスが提供されます。**Hot**ストリームは、**Subscriberがいるかどうかにかかわらずデータを生成します**。遅れて参加したSubscriberは、サブスクライブ後に放出されたイベントのみを参照します。**`.publish().connect()`**または**`.share()`**オペレーターは、ColdストリームをHot（Connectable）ストリームに変換するために使用されます。"
      },
      vi: {
        title: "Hot vs Cold Observables",
        body: "Trong Reactor, sự khác biệt cơ bản giữa một `Flux` (hoặc `Mono`) **Cold** và một `Flux` **Hot** là gì, và operator nào thường được sử dụng để chuyển đổi một Cold stream thành một Hot stream?",
        solution: "Một stream **Cold** (mặc định) **bắt đầu tạo dữ liệu khi một Subscriber subscribe**; mỗi subscriber mới nhận được một chuỗi sự kiện mới từ đầu. Một stream **Hot** **tạo dữ liệu bất kể có subscriber hay không**; các subscriber tham gia muộn chỉ thấy các event được phát ra sau khi họ subscribe. Các operator **`.publish().connect()`** hoặc **`.share()`** được sử dụng để chuyển đổi một Cold stream thành một Hot (Connectable) stream."
      }
    }
  },
  {
    _id: "sb-s-028",
    difficulty: "senior",
    tags: ["microservices", "service-mesh", "circuit-breaker"],
    content: {
      en: {
        title: "Service Mesh Resilience",
        body: "How does a **Service Mesh** (like Istio or Linkerd) handle resilience patterns (e.g., Retries, Circuit Breaking) differently and arguably better than implementing them directly within each Spring Boot microservice (e.g., with Resilience4J)?",
        solution: "A Service Mesh **externalizes resilience logic** into a dedicated **Sidecar Proxy**. This decouples the infrastructure concerns from the application code, making the services truly polyglot and standardizing behavior across the entire mesh. It also allows for **dynamic policy updates** without redeploying the service and provides centralized observability of resilience events."
      },
      jp: {
        title: "サービスメッシュの回復力",
        body: "**サービスメッシュ**（IstioやLinkerdなど）は、回復力パターン（例：再試行、サーキットブレーキング）を、各Spring Bootマイクロサービス内で直接実装する（例：Resilience4Jを使用）のとどのように異なり、そしておそらくより良く処理しますか？",
        solution: "サービスメッシュは、**回復力ロジックを専用の**Sidecar Proxy**に外部化します**。これにより、インフラストラクチャの懸念事項がアプリケーションコードから切り離され、サービスが真に多言語対応になり、メッシュ全体で動作が標準化されます。また、サービスの再デプロイなしで**動的なポリシー更新**を可能にし、回復力イベントの一元化された可観測性を提供します。"
      },
      vi: {
        title: "Service Mesh Resilience",
        body: "**Service Mesh** (như Istio hoặc Linkerd) xử lý các pattern resilience (ví dụ: Retries, Circuit Breaking) khác và có thể nói là tốt hơn như thế nào so với việc implement chúng trực tiếp bên trong mỗi microservice Spring Boot (ví dụ: với Resilience4J)?",
        solution: "Service Mesh **ngoại hóa logic resilience** vào một **Sidecar Proxy** chuyên dụng. Điều này tách rời các mối quan tâm về hạ tầng khỏi mã ứng dụng, làm cho các service thực sự đa ngôn ngữ và chuẩn hóa hành vi trên toàn bộ mesh. Nó cũng cho phép **cập nhật chính sách động** mà không cần triển khai lại service và cung cấp khả năng quan sát tập trung các sự kiện resilience."
      }
    }
  },
  {
    _id: "sb-s-029",
    difficulty: "senior",
    tags: ["ioc", "testing", "mockito", "do-answer"],
    content: {
      en: {
        title: "Mockito doAnswer",
        body: "When testing a service with Mockito, when is it necessary to use the **`doAnswer()`** method instead of the simpler `when(...).thenReturn(...)` construct?",
        solution: "`doAnswer()` is necessary when the mock's behavior needs to be based on the **arguments passed at runtime**, or when you need to **execute custom logic (including invoking a callback or throwing an exception)** during the invocation. `thenReturn()` only returns a fixed, pre-defined value regardless of the inputs, while `doAnswer()` allows dynamic response generation."
      },
      jp: {
        title: "Mockito doAnswer",
        body: "Mockitoを使用してサービスをテストする場合、単純な`when(...).thenReturn(...)`構成の代わりに**`doAnswer()`**メソッドを使用する必要があるのはいつですか？",
        solution: "`doAnswer()`は、モックの動作が**実行時に渡された引数**に基づいて決定される必要がある場合、または呼び出し中に**カスタムロジックの実行（コールバックの呼び出しや例外のスローを含む）**が必要な場合に必要です。`thenReturn()`は入力に関係なく固定の事前定義された値を返すだけですが、`doAnswer()`は動的な応答生成を可能にします。"
      },
      vi: {
        title: "Mockito doAnswer",
        body: "Khi kiểm thử một service với Mockito, khi nào cần thiết phải sử dụng phương thức **`doAnswer()`** thay vì cấu trúc đơn giản hơn `when(...).thenReturn(...)`?",
        solution: "`doAnswer()` là cần thiết khi hành vi của mock cần dựa trên **các đối số được truyền vào thời điểm chạy**, hoặc khi bạn cần **thực thi logic tùy chỉnh (bao gồm gọi một callback hoặc ném một ngoại lệ)** trong quá trình gọi. `thenReturn()` chỉ trả về một giá trị cố định, được định nghĩa trước bất kể đầu vào là gì, trong khi `doAnswer()` cho phép tạo phản hồi động."
      }
    }
  },
  {
    _id: "sb-s-030",
    difficulty: "senior",
    tags: ["messaging", "transaction", "outbox"],
    content: {
      en: {
        title: "Transactional Outbox Pattern",
        body: "Explain the **Transactional Outbox Pattern** and how it solves the **dual write problem** (updating the database and sending a message) in a microservice using Spring/JPA/Kafka.",
        solution: "The Outbox pattern solves the dual write problem by **treating the message as part of the local database transaction**. Instead of sending the message directly, the service **inserts a record into an OUTBOX table** within the same transaction that updates the business data. A separate **Message Relayer** process (or background job) then periodically polls the OUTBOX table and safely sends the messages to Kafka, ensuring atomicity (DB update and message creation happen together)." 
      },
      jp: {
        title: "トランザクショナルアウトボックスパターン",
        body: "**トランザクショナルアウトボックスパターン**を説明し、Spring/JPA/Kafkaを使用するマイクロサービスでの**デュアルライト問題**（データベースの更新とメッセージの送信）をどのように解決するかを説明してください。",
        solution: "アウトボックスパターンは、**メッセージをローカルデータベーストランザクションの一部として扱う**ことによってデュアルライト問題を解決します。メッセージを直接送信する代わりに、サービスはビジネスデータを更新するのと同じトランザクション内で**OUTBOXテーブルにレコードを挿入します**。その後、別の**メッセージリレーヤー**プロセス（またはバックグラウンドジョブ）が定期的にOUTBOXテーブルをポーリングし、メッセージを安全にKafkaに送信し、原子性（DB更新とメッセージ作成が同時に行われる）を確保します。"
      },
      vi: {
        title: "Transactional Outbox Pattern",
        body: "Giải thích **Transactional Outbox Pattern** và cách nó giải quyết **vấn đề dual write** (cập nhật cơ sở dữ liệu và gửi một tin nhắn) trong một microservice sử dụng Spring/JPA/Kafka.",
        solution: "Outbox pattern giải quyết vấn đề dual write bằng cách **coi tin nhắn là một phần của transaction cơ sở dữ liệu cục bộ**. Thay vì gửi tin nhắn trực tiếp, service **chèn một bản ghi vào một bảng OUTBOX** trong cùng transaction cập nhật dữ liệu nghiệp vụ. Một tiến trình **Message Relayer** riêng biệt (hoặc background job) sau đó định kỳ thăm dò bảng OUTBOX và gửi tin nhắn an toàn đến Kafka, đảm bảo tính nguyên tử (cập nhật DB và tạo tin nhắn xảy ra cùng nhau)."
      }
    }
  },
  {
    _id: "sb-s-031",
    difficulty: "senior",
    tags: ["data", "jpa", "custom-repo", "mixin"],
    content: {
      en: {
        title: "Spring Data Repository Mixin",
        body: "How can you implement a **custom method** (e.g., a bulk update method not available in `JpaRepository`) that is available to *all* of your Spring Data Repositories without manually declaring it in every interface?",
        solution: "You create an interface for the custom method, then implement a class for that interface with the suffix **`Impl`** (e.g., `CustomRepositoryImpl`). You then make your main repository interfaces **extend this custom interface**. Spring Data automatically detects the `Impl` class and mixes its methods into the proxy instances of all repositories that extend the custom interface."
      },
      jp: {
        title: "Spring Data Repository Mixin",
        body: "**カスタムメソッド**（例：`JpaRepository`で利用できない一括更新メソッド）を、すべてのインターフェースで手動で宣言することなく、*すべて*のSpring Dataリポジトリで利用できるようにするにはどうすればよいですか？",
        solution: "カスタムメソッドのインターフェースを作成し、次にそのインターフェースのクラスを接尾辞**`Impl`**を付けて実装します（例：`CustomRepositoryImpl`）。次に、メインのリポジトリインターフェースに**このカスタムインターフェースを拡張**させます。Spring Dataは`Impl`クラスを自動的に検出し、そのメソッドをカスタムインターフェースを拡張するすべてのリポジトリのプロキシインスタンスにミックスインします。"
      },
      vi: {
        title: "Spring Data Repository Mixin",
        body: "Làm thế nào bạn có thể implement một **phương thức tùy chỉnh** (ví dụ: một phương thức cập nhật hàng loạt không có sẵn trong `JpaRepository`) mà có sẵn cho *tất cả* các Spring Data Repository của bạn mà không cần khai báo thủ công trong mọi interface?",
        solution: "Bạn tạo một interface cho phương thức tùy chỉnh, sau đó implement một class cho interface đó với hậu tố **`Impl`** (ví dụ: `CustomRepositoryImpl`). Sau đó, bạn cho các interface repository chính của mình **extend interface tùy chỉnh này**. Spring Data tự động phát hiện class `Impl` và trộn các phương thức của nó vào các instance proxy của tất cả các repository mở rộng interface tùy chỉnh."
      }
    }
  },
  {
    _id: "sb-s-032",
    difficulty: "senior",
    tags: ["jvm", "performance", "heap", "g1gc"],
    content: {
      en: {
        title: "G1 Garbage Collector",
        body: "When tuning a high-throughput Spring Boot service running on the JVM, what is the primary goal of using the **G1 (Garbage-First) Collector** over the Parallel or Serial collectors?",
        solution: "The primary goal of G1 is to achieve **predictable and soft real-time garbage collection pauses**. G1 is a regional collector that performs its work incrementally. It partitions the heap and prioritizes collecting the regions with the *most garbage first* (hence Garbage-First). This allows it to meet the user-defined pause time goals (e.g., `-XX:MaxGCPauseMillis=200`)."
      },
      jp: {
        title: "G1ガベージコレクター",
        body: "JVMで実行されている高スループットのSpring Bootサービスをチューニングする際、ParallelまたはSerialコレクターと比較して**G1（Garbage-First）コレクター**を使用する主な目的は何ですか？",
        solution: "G1の主な目的は、**予測可能でソフトなリアルタイムのガベージコレクションの一時停止**を達成することです。G1は、ヒープを分割し、*最も多くのゴミ*があるリージョンの収集を優先的に行う（したがってGarbage-First）リージョナルコレクターです。これにより、ユーザーが定義した一時停止時間の目標（例：`-XX:MaxGCPauseMillis=200`）を満たすことができます。"
      },
      vi: {
        title: "G1 Garbage Collector",
        body: "Khi điều chỉnh một service Spring Boot có thông lượng cao chạy trên JVM, mục tiêu chính của việc sử dụng **G1 (Garbage-First) Collector** so với các collector Parallel hoặc Serial là gì?",
        solution: "Mục tiêu chính của G1 là đạt được **thời gian tạm dừng (pause time) của garbage collection có thể dự đoán được và soft real-time**. G1 là một collector khu vực (regional collector) thực hiện công việc của nó một cách tăng dần. Nó phân vùng heap và ưu tiên thu thập các khu vực có *nhiều rác nhất trước* (do đó là Garbage-First). Điều này cho phép nó đáp ứng các mục tiêu thời gian tạm dừng do người dùng xác định (ví dụ: `-XX:MaxGCPauseMillis=200`)."
      }
    }
  },
  {
    _id: "sb-s-033",
    difficulty: "senior",
    tags: ["webflux", "sse", "server-sent-events"],
    content: {
      en: {
        title: "Server-Sent Events (SSE)",
        body: "In Spring WebFlux, how do you serve **Server-Sent Events (SSE)** from an endpoint, and what is the primary advantage of SSE over WebSockets for one-way data streaming?",
        solution: "You serve SSE by returning a **`Flux<ServerSentEvent>`** (or a `Flux<T>`) from the controller method, with the media type set to `MediaType.TEXT_EVENT_STREAM_VALUE`. The advantage of SSE is that it is **simpler and built on top of standard HTTP** (unlike WebSockets which require an upgrade handshake), making it easier to implement, and it **automatically handles reconnection** when the connection drops."
      },
      jp: {
        title: "Server-Sent Events (SSE)",
        body: "Spring WebFluxにおいて、エンドポイントから**Server-Sent Events (SSE)**を提供するにはどうすればよいですか、また一方向のデータストリーミングに関してSSEがWebSocketよりも持つ主な利点は何ですか？",
        solution: "SSEは、コントローラーメソッドから**`Flux<ServerSentEvent>`**（または`Flux<T>`）を返し、メディアタイプを`MediaType.TEXT_EVENT_STREAM_VALUE`に設定することで提供されます。SSEの利点は、**標準のHTTP上に構築されており、よりシンプル**であること（アップグレードハンドシェイクを必要とするWebSocketとは異なり）、実装が容易であること、および接続が切断されたときに**再接続を自動的に処理する**ことです。"
      },
      vi: {
        title: "Server-Sent Events (SSE)",
        body: "Trong Spring WebFlux, làm thế nào bạn phục vụ **Server-Sent Events (SSE)** từ một endpoint, và lợi thế chính của SSE so với WebSockets đối với việc truyền dữ liệu một chiều là gì?",
        solution: "Bạn phục vụ SSE bằng cách trả về một **`Flux<ServerSentEvent>`** (hoặc một `Flux<T>`) từ phương thức controller, với kiểu media được đặt là `MediaType.TEXT_EVENT_STREAM_VALUE`. Lợi thế của SSE là nó **đơn giản hơn và được xây dựng trên nền HTTP tiêu chuẩn** (không giống như WebSockets yêu cầu bắt tay nâng cấp), làm cho việc implement dễ dàng hơn, và nó **tự động xử lý việc kết nối lại** khi kết nối bị mất."
      }
    }
  },
  {
    _id: "sb-s-034",
    difficulty: "senior",
    tags: ["ioc", "events", "transaction"],
    content: {
      en: {
        title: "Transactional Event Listener",
        body: "If a business event needs to be handled *only* after the current database transaction has successfully committed, which annotation should be added to the `@EventListener` method, and what is the key attribute to set?",
        solution: "You should use the **`@TransactionalEventListener`** annotation (instead of `@EventListener`). The key attribute to set is **`phase = TransactionPhase.AFTER_COMMIT`** (the default is usually `AFTER_COMMIT`, but it should be explicitly set for clarity). This guarantees the listener only processes the event if the database commit succeeds."
      },
      jp: {
        title: "トランザクショナルイベントリスナー",
        body: "現在のデータベーストランザクションが正常にコミットされた*後*に*のみ*ビジネスイベントを処理する必要がある場合、`@EventListener`メソッドに追加すべきアノテーションは何ですか、また設定すべき主要な属性は何ですか？",
        solution: "`@TransactionalEventListener`アノテーション（`@EventListener`の代わりに）を使用する必要があります。設定すべき主要な属性は**`phase = TransactionPhase.AFTER_COMMIT`**です（デフォルトは通常`AFTER_COMMIT`ですが、明確にするために明示的に設定する必要があります）。これにより、データベースのコミットが成功した場合にのみリスナーがイベントを処理することが保証されます。"
      },
      vi: {
        title: "Transactional Event Listener",
        body: "Nếu một business event cần được xử lý *chỉ sau khi* transaction cơ sở dữ liệu hiện tại đã commit thành công, annotation nào nên được thêm vào phương thức `@EventListener`, và thuộc tính chính cần đặt là gì?",
        solution: "Bạn nên sử dụng annotation **`@TransactionalEventListener`** (thay vì `@EventListener`). Thuộc tính chính cần đặt là **`phase = TransactionPhase.AFTER_COMMIT`** (mặc định thường là `AFTER_COMMIT`, nhưng nên được đặt rõ ràng để rõ ràng). Điều này đảm bảo listener chỉ xử lý sự kiện nếu việc commit cơ sở dữ liệu thành công."
      }
    }
  },
  {
    _id: "sb-s-035",
    difficulty: "senior",
    tags: ["data", "jpa", "performance", "bulk"],
    content: {
      en: {
        title: "Bulk Update Limitation",
        body: "Explain the common data integrity issue that arises when performing a **bulk update/delete** using JPQL/HQL (e.g., `@Modifying` queries) in Spring Data JPA, and what must be done to mitigate it.",
        solution: "The issue is that bulk operations are executed directly at the **database level**, **bypassing the Hibernate/JPA Persistence Context** and its first-level cache. This leaves the entities in the cache outdated or 'stale'. To mitigate, you must explicitly **`clear()`** or **`refresh()`** the Persistence Context immediately after the bulk operation to synchronize the cache with the database state."
      },
      jp: {
        title: "一括更新の制限",
        body: "Spring Data JPAでJPQL/HQLを使用して**一括更新/削除**（例：`@Modifying`クエリ）を実行するときに発生する一般的なデータ整合性の問題は何ですか、またそれを軽減するために何をすべきですか？",
        solution: "問題は、一括操作が**データベースレベルで直接実行され**、Hibernate/JPA永続化コンテキストとそのファーストレベルキャッシュを**バイパスする**ことです。これにより、キャッシュ内のエンティティが古くなったり「陳腐化」したりします。軽減するには、一括操作の直後に永続化コンテキストを明示的に**`clear()`**または**`refresh()`**して、キャッシュをデータベースの状態と同期させる必要があります。"
      },
      vi: {
        title: "Bulk Update Limitation",
        body: "Giải thích vấn đề toàn vẹn dữ liệu phổ biến phát sinh khi thực hiện **bulk update/delete** bằng JPQL/HQL (ví dụ: các truy vấn `@Modifying`) trong Spring Data JPA, và điều gì phải được thực hiện để giảm thiểu nó.",
        solution: "Vấn đề là các thao tác bulk được thực thi trực tiếp ở **cấp độ cơ sở dữ liệu**, **bỏ qua Persistence Context** của Hibernate/JPA và cache cấp một của nó. Điều này làm cho các entity trong cache bị lỗi thời hoặc 'cũ'. Để giảm thiểu, bạn phải **`clear()`** hoặc **`refresh()`** Persistence Context một cách rõ ràng ngay sau thao tác bulk để đồng bộ hóa cache với trạng thái cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sb-s-036",
    difficulty: "senior",
    tags: ["testing", "contract", "pact"],
    content: {
      en: {
        title: "Pact Contract Testing",
        body: "Beyond Spring Cloud Contract, what is the core philosophy of the **Pact** framework for contract testing, and what is a 'Pact Broker'?",
        solution: "Pact's core philosophy is **Consumer-Driven Contracts**. The contract is defined in code by the consumer *first*, ensuring the consumer only gets what it asks for. A **Pact Broker** is a centralized server that stores, manages, and shares these contracts between consumers and producers. It allows the producer to easily verify the latest contracts from all its consumers before deploying." 
      },
      jp: {
        title: "Pact契約テスト",
        body: "Spring Cloud Contractを超えて、契約テストのための**Pact**フレームワークの核となる哲学は何ですか、また「Pact Broker」とは何ですか？",
        solution: "Pactの核となる哲学は**コンシューマー主導型契約**です。契約は*まず*コンシューマーによってコードで定義され、コンシューマーが必要とするものだけを取得することを保証します。**Pact Broker**は、これらの契約をコンシューマーとプロデューサーの間で保存、管理、共有する一元化されたサーバーです。これにより、プロデューサーはデプロイ前にすべてのコンシューマーからの最新の契約を簡単に検証できます。"
      },
      vi: {
        title: "Pact Contract Testing",
        body: "Ngoài Spring Cloud Contract, triết lý cốt lõi của framework **Pact** cho kiểm thử hợp đồng là gì, và 'Pact Broker' là gì?",
        solution: "Triết lý cốt lõi của Pact là **Consumer-Driven Contracts**. Contract được định nghĩa trong code bởi consumer *trước*, đảm bảo consumer chỉ nhận được những gì nó yêu cầu. Một **Pact Broker** là một server tập trung lưu trữ, quản lý và chia sẻ các contract này giữa các consumer và producer. Nó cho phép producer dễ dàng xác minh các contract mới nhất từ tất cả các consumer của mình trước khi triển khai."
      }
    }
  },
  {
    _id: "sb-s-037",
    difficulty: "senior",
    tags: ["microservices", "service-discovery", "dns"],
    content: {
      en: {
        title: "Service Discovery DNS",
        body: "How do modern Service Discovery systems (like Consul or Kubernetes Service) often leverage **DNS SRV records** for service lookup, and what advantage does this provide over traditional IP-based service registration?",
        solution: "DNS SRV records allow a client to request not just the IP address but also the **port number** of a service, along with priority and weight. This provides a **decentralized, native mechanism** for service lookup, is highly performant (DNS caching), and allows the Service Mesh/Discovery tool to easily return a **list of healthy instances** for client-side load balancing via standard DNS resolution."
      },
      jp: {
        title: "サービスディスカバリDNS",
        body: "最新のサービスディスカバリシステム（ConsulやKubernetes Serviceなど）は、サービスルックアップのために**DNS SRVレコード**をどのように活用することが多いですか、またこれは従来のIPベースのサービス登録と比較してどのような利点がありますか？",
        solution: "DNS SRVレコードを使用すると、クライアントはIPアドレスだけでなく、サービスの**ポート番号**、優先度、および重みもリクエストできます。これにより、サービスルックアップのための**分散型のネイティブなメカニズム**が提供され、非常に高性能（DNSキャッシング）であり、サービスメッシュ/ディスカバリツールが標準のDNS解決を介してクライアントサイド負荷分散のための**正常なインスタンスのリスト**を簡単に返すことができます。"
      },
      vi: {
        title: "Service Discovery DNS",
        body: "Các hệ thống Service Discovery hiện đại (như Consul hoặc Kubernetes Service) thường tận dụng **DNS SRV records** để tra cứu service như thế nào, và điều này mang lại lợi thế gì so với đăng ký service dựa trên IP truyền thống?",
        solution: "DNS SRV records cho phép client request không chỉ địa chỉ IP mà còn **số cổng** của một service, cùng với priority và weight. Điều này cung cấp một **cơ chế tự nhiên, phi tập trung** cho việc tra cứu service, có hiệu suất cao (DNS caching), và cho phép công cụ Service Mesh/Discovery dễ dàng trả về một **danh sách các instance khỏe mạnh** cho load balancing phía client thông qua phân giải DNS tiêu chuẩn."
      }
    }
  },
  {
    _id: "sb-s-038",
    difficulty: "senior",
    tags: ["data", "jpa", "fetch-join", "distinct"],
    content: {
      en: {
        title: "JPA DISTINCT vs Hibernate DISTINCT",
        body: "When using `SELECT DISTINCT e FROM Entity e JOIN FETCH e.collection c` in JPQL to eager load a collection, explain the difference between the **database-level `DISTINCT`** (the default behavior) and Hibernate's internal **`ResultTransformer`** mechanism.",
        solution: "The **database-level `DISTINCT`** (SQL keyword) is applied *before* the data leaves the database. It eliminates duplicate rows in the *raw result set*, which is correct but can be slow. **Hibernate's internal `DISTINCT`** (added when using `JOIN FETCH`) **deduplicates the root entity objects in memory** *after* the raw result set is fetched, without modifying the raw SQL. The latter is often preferred as it is applied only to the entities and is less taxing on the database."
      },
      jp: {
        title: "JPA DISTINCTとHibernate DISTINCT",
        body: "コレクションをEagerにロードするためにJPQLで`SELECT DISTINCT e FROM Entity e JOIN FETCH e.collection c`を使用する場合、**データベースレベルの`DISTINCT`**（デフォルトの動作）とHibernateの内部**`ResultTransformer`**メカニズムの違いを説明してください。",
        solution: "**データベースレベルの`DISTINCT`**（SQLキーワード）は、データがデータベースを離れる*前*に適用されます。これは*生の*結果セット内の重複行を排除しますが、遅くなる可能性があります。Hibernateの内部**`DISTINCT`**（`JOIN FETCH`を使用するときに追加される）は、生のSQLを変更せずに、生の**結果セットがフェッチされた*後*に、メモリ内でルートエンティティオブジェクトの重複を排除します**。後者は、エンティティにのみ適用され、データベースへの負担が少ないため、しばしば好まれます。"
      },
      vi: {
        title: "JPA DISTINCT vs Hibernate DISTINCT",
        body: "Khi sử dụng `SELECT DISTINCT e FROM Entity e JOIN FETCH e.collection c` trong JPQL để tải ngay lập tức (eager load) một collection, giải thích sự khác biệt giữa **`DISTINCT` cấp độ cơ sở dữ liệu** (hành vi mặc định) và cơ chế **`ResultTransformer`** nội bộ của Hibernate.",
        solution: "**`DISTINCT` cấp độ cơ sở dữ liệu** (từ khóa SQL) được áp dụng *trước khi* dữ liệu rời khỏi cơ sở dữ liệu. Nó loại bỏ các hàng trùng lặp trong *tập kết quả thô*, điều này là đúng nhưng có thể chậm. **`DISTINCT` nội bộ của Hibernate** (được thêm vào khi sử dụng `JOIN FETCH`) **loại bỏ trùng lặp các đối tượng entity gốc trong bộ nhớ** *sau khi* tập kết quả thô được fetch, mà không sửa đổi SQL thô. Cái sau thường được ưu tiên vì nó chỉ được áp dụng cho các entity và ít gây tốn kém cho cơ sở dữ liệu hơn."
      }
    }
  },
  {
    _id: "sb-s-039",
    difficulty: "senior",
    tags: ["aop", "proxy", "weaving"],
    content: {
      en: {
        title: "AOP Load-Time Weaving (LTW)",
        body: "In Spring AOP, what is **Load-Time Weaving (LTW)**, and what major advantage does it have over the default dynamic proxy-based AOP?",
        solution: "LTW is a technique where the Aspect code (Advice) is **woven (inserted)** into the target classes' bytecode **as the classes are being loaded** by the JVM ClassLoader. The major advantage is that LTW allows AOP to be applied to **final classes/methods** (which dynamic proxies cannot handle) and achieves **higher performance** because there is no proxy object created at runtime for every target instance."
      },
      jp: {
        title: "AOPロードタイムウィービング（LTW）",
        body: "Spring AOPにおいて、**ロードタイムウィービング（LTW）**とは何ですか、またデフォルトの動的プロキシベースのAOPと比較してどのような大きな利点がありますか？",
        solution: "LTWは、JVM ClassLoaderによって**クラスがロードされている最中に**アスペクトコード（アドバイス）がターゲットクラスのバイトコードに**織り込まれる（挿入される）**手法です。大きな利点は、LTWが**finalなクラス/メソッド**（動的プロキシでは処理できない）にAOPを適用できるようにすることであり、実行時にターゲットインスタンスごとにプロキシオブジェクトが作成されないため、**より高いパフォーマンス**を達成します。"
      },
      vi: {
        title: "AOP Load-Time Weaving (LTW)",
        body: "Trong Spring AOP, **Load-Time Weaving (LTW)** là gì, và nó có lợi thế lớn nào so với AOP dựa trên dynamic proxy mặc định?",
        solution: "LTW là một kỹ thuật trong đó mã Aspect (Advice) được **dệt (woven - chèn)** vào bytecode của các lớp mục tiêu **khi các lớp đang được tải** bởi JVM ClassLoader. Lợi thế lớn là LTW cho phép AOP được áp dụng cho **các lớp/phương thức final** (mà dynamic proxy không thể xử lý) và đạt được **hiệu suất cao hơn** vì không có đối tượng proxy nào được tạo ra tại thời điểm chạy cho mọi instance mục tiêu."
      }
    }
  },
  {
    _id: "sb-s-040",
    difficulty: "senior",
    tags: ["security", "filter", "delegating"],
    content: {
      en: {
        title: "DelegatingFilterProxy Role",
        body: "In a traditional Spring MVC (Servlet) application, what is the role of the **`DelegatingFilterProxy`** defined in `web.xml` (or in a configuration class), and why is it necessary for Spring Security?",
        solution: "The **`DelegatingFilterProxy`** acts as a **bridge** between the Servlet container's lifecycle and the Spring `ApplicationContext`. It is a standard Servlet `Filter` that delegates its work to a bean (usually named `springSecurityFilterChain`) defined inside the Spring context. This is necessary because the Servlet container knows nothing about Spring Beans, but `DelegatingFilterProxy` allows the container to invoke the Spring Security Filter Chain."
      },
      jp: {
        title: "DelegatingFilterProxyの役割",
        body: "従来のSpring MVC（サーブレット）アプリケーションにおいて、`web.xml`（または構成クラス）で定義された**`DelegatingFilterProxy`**の役割は何ですか、またSpring Securityにとってなぜそれが必要なのですか？",
        solution: "**`DelegatingFilterProxy`**は、サーブレットコンテナのライフサイクルとSpring `ApplicationContext`の間の**ブリッジ**として機能します。これは、その作業をSpringコンテキスト内で定義されたBean（通常`springSecurityFilterChain`という名前）に委任する標準のサーブレット`Filter`です。サーブレットコンテナはSpring Beanについて何も知らないため、これが必要ですが、`DelegatingFilterProxy`はコンテナがSpring Securityフィルターチェーンを呼び出すことを可能にします。"
      },
      vi: {
        title: "Vai trò DelegatingFilterProxy",
        body: "Trong một ứng dụng Spring MVC (Servlet) truyền thống, vai trò của **`DelegatingFilterProxy`** được định nghĩa trong `web.xml` (hoặc trong một lớp cấu hình) là gì, và tại sao nó lại cần thiết cho Spring Security?",
        solution: "**`DelegatingFilterProxy`** hoạt động như một **cầu nối (bridge)** giữa vòng đời của Servlet container và `ApplicationContext` của Spring. Nó là một Servlet `Filter` tiêu chuẩn ủy quyền công việc của mình cho một bean (thường được đặt tên là `springSecurityFilterChain`) được định nghĩa bên trong Spring context. Điều này là cần thiết vì Servlet container không biết gì về Spring Bean, nhưng `DelegatingFilterProxy` cho phép container gọi Spring Security Filter Chain."
      }
    }
  },
  {
    _id: "sb-s-041",
    difficulty: "senior",
    tags: ["webflux", "reactor", "parallel"],
    content: {
      en: {
        title: "Reactor Parallel Processing",
        body: "In Reactor, how can you switch a `Flux` stream from sequential processing to **parallel processing**, and what is the crucial consideration regarding the thread pool (Scheduler) used for parallel execution?",
        solution: "You switch to parallel processing using the **`.parallel()`** operator, followed by **`.runOn(Scheduler)`** (typically `Schedulers.parallel()` or a custom `Scheduler` backed by a fixed thread pool). The crucial consideration is ensuring that you **only use non-blocking operations** within the parallel flow. If blocking calls are needed, you must switch back to a dedicated blocking scheduler like `Schedulers.boundedElastic()`."
      },
      jp: {
        title: "Reactor並列処理",
        body: "Reactorにおいて、`Flux`ストリームをシーケンシャル処理から**並列処理**に切り替えるにはどうすればよいですか、また並列実行に使用されるスレッドプール（Scheduler）に関して重要な考慮事項は何ですか？",
        solution: "**`.parallel()`**オペレーターを使用し、その後に**`.runOn(Scheduler)`**（通常は`Schedulers.parallel()`または固定スレッドプールでバックアップされたカスタム`Scheduler`）を使用して並列処理に切り替えます。重要な考慮事項は、並列フロー内で**非ブロッキング操作のみを使用する**ことを保証することです。ブロッキング呼び出しが必要な場合は、`Schedulers.boundedElastic()`のような専用のブロッキングスケジューラに切り替える必要があります。"
      },
      vi: {
        title: "Reactor Parallel Processing",
        body: "Trong Reactor, làm thế nào bạn có thể chuyển một `Flux` stream từ xử lý tuần tự sang **xử lý song song**, và điều cân nhắc quan trọng liên quan đến thread pool (Scheduler) được sử dụng cho thực thi song song là gì?",
        solution: "Bạn chuyển sang xử lý song song bằng cách sử dụng operator **`.parallel()`**, sau đó là **`.runOn(Scheduler)`** (thường là `Schedulers.parallel()` hoặc một `Scheduler` tùy chỉnh được hỗ trợ bởi một thread pool cố định). Cân nhắc quan trọng là đảm bảo rằng bạn **chỉ sử dụng các hoạt động non-blocking** trong luồng song song. Nếu cần các lời gọi blocking, bạn phải chuyển trở lại một scheduler blocking chuyên dụng như `Schedulers.boundedElastic()`."
      }
    }
  },
  {
    _id: "sb-s-042",
    difficulty: "senior",
    tags: ["ioc", "boot-time", "startup"],
    content: {
      en: {
        title: "Spring Boot Application Startup Phase",
        body: "Which component/interface in Spring Boot allows you to perform custom actions (e.g., loading initial data or running validation) **after** the `ApplicationContext` has been fully loaded but **before** the application starts accepting traffic (e.g., before the server starts)?",
        solution: "You use the **`ApplicationRunner`** or **`CommandLineRunner`** interfaces. Both are functional interfaces that execute a `run()` method *after* the Spring Boot application has started, its beans are initialized, and the context is ready, but before the main web server loop begins. `CommandLineRunner` accepts command line arguments, while `ApplicationRunner` accepts `ApplicationArguments`."
      },
      jp: {
        title: "Spring Bootアプリケーション起動フェーズ",
        body: "`ApplicationContext`が完全にロードされた**後**で、アプリケーションがトラフィックの受け入れを開始する**前**に（例：サーバーが起動する前）カスタムアクション（例：初期データのロードや検証の実行）を実行できるSpring Bootのコンポーネント/インターフェースは何ですか？",
        solution: "**`ApplicationRunner`**または**`CommandLineRunner`**インターフェースを使用します。どちらも、Spring Bootアプリケーションが起動し、Beanが初期化され、コンテキストが準備完了になった*後*、メインのWebサーバーループが始まる*前*に`run()`メソッドを実行する関数型インターフェースです。`CommandLineRunner`はコマンドライン引数を受け入れ、`ApplicationRunner`は`ApplicationArguments`を受け入れます。"
      },
      vi: {
        title: "Spring Boot Application Startup Phase",
        body: "Thành phần/interface nào trong Spring Boot cho phép bạn thực hiện các hành động tùy chỉnh (ví dụ: tải dữ liệu ban đầu hoặc chạy xác thực) **sau khi** `ApplicationContext` đã được tải hoàn toàn nhưng **trước khi** ứng dụng bắt đầu chấp nhận lưu lượng truy cập (ví dụ: trước khi server bắt đầu)?",
        solution: "Bạn sử dụng các interface **`ApplicationRunner`** hoặc **`CommandLineRunner`**. Cả hai đều là các interface hàm số thực thi một phương thức `run()` *sau khi* ứng dụng Spring Boot đã khởi động, các bean của nó đã được khởi tạo và context đã sẵn sàng, nhưng *trước khi* vòng lặp web server chính bắt đầu. `CommandLineRunner` chấp nhận command line arguments, trong khi `ApplicationRunner` chấp nhận `ApplicationArguments`."
      }
    }
  },
  {
    _id: "sb-s-043",
    difficulty: "senior",
    tags: ["data", "jpa", "multi-tenancy", "schema"],
    content: {
      en: {
        title: "Multi-Tenancy Schema-Per-Tenant",
        body: "When implementing a **Schema-Per-Tenant** multi-tenancy model with Spring Boot/JPA, what Spring-specific abstract class is used to dynamically resolve and switch the active tenant's schema based on the current request context?",
        solution: "The **`AbstractRoutingDataSource`** class is used. It intercepts the call to obtain a database connection and, based on a discriminator (e.g., a thread-local value set by a request filter containing the tenant ID), it returns the correct, configured `DataSource` instance that points to the specific tenant's schema or database."
      },
      jp: {
        title: "マルチテナンシーのテナントごとのスキーマ",
        body: "Spring Boot/JPAで**テナントごとのスキーマ**マルチテナンシーモデルを実装する場合、現在のリクエストコンテキストに基づいてアクティブなテナントのスキーマを動的に解決および切り替えるために使用されるSpring固有の抽象クラスは何ですか？",
        solution: "**`AbstractRoutingDataSource`**クラスが使用されます。これは、データベース接続を取得するための呼び出しをインターセプトし、識別子（例：テナントIDを含むリクエストフィルターによって設定されたスレッドローカル値）に基づいて、特定のテナントのスキーマまたはデータベースを指す正しい構成済みの`DataSource`インスタンスを返します。"
      },
      vi: {
        title: "Multi-Tenancy Schema-Per-Tenant",
        body: "Khi implement mô hình multi-tenancy **Schema-Per-Tenant** với Spring Boot/JPA, class trừu tượng cụ thể nào của Spring được sử dụng để giải quyết động và chuyển đổi schema của tenant hoạt động dựa trên request context hiện tại?",
        solution: "Class **`AbstractRoutingDataSource`** được sử dụng. Nó chặn lời gọi để lấy một kết nối cơ sở dữ liệu và, dựa trên một yếu tố phân biệt (discriminator) (ví dụ: một giá trị thread-local được đặt bởi một request filter chứa ID tenant), nó trả về instance `DataSource` được cấu hình chính xác, trỏ đến schema hoặc cơ sở dữ liệu của tenant cụ thể."
      }
    }
  },
  {
    _id: "sb-s-044",
    difficulty: "senior",
    tags: ["security", "access-control", "voter"],
    content: {
      en: {
        title: "AccessDecisionVoter Role",
        body: "In advanced Spring Security authorization, what is the role of an **`AccessDecisionVoter`**, and what three potential outcomes can its `vote()` method return?",
        solution: "An **`AccessDecisionVoter`** is a component in the authorization process that checks whether the currently authenticated principal is allowed to invoke a secure object (e.g., a method or URL). Its `vote()` method returns one of three outcomes: **`ACCESS_GRANTED`**, **`ACCESS_DENIED`**, or **`ACCESS_ABSTAIN`** (meaning the voter has no opinion/is not applicable), allowing a central `AccessDecisionManager` to make the final decision."
      },
      jp: {
        title: "AccessDecisionVoterの役割",
        body: "高度なSpring Security認証において、**`AccessDecisionVoter`**の役割は何ですか、またその`vote()`メソッドが返す可能性のある3つの結果は何ですか？",
        solution: "**`AccessDecisionVoter`**は、現在認証されているプリンシパルがセキュアなオブジェクト（例：メソッドまたはURL）を呼び出すことが許可されているかどうかをチェックする認証プロセスにおけるコンポーネントです。その`vote()`メソッドは、**`ACCESS_GRANTED`**、**`ACCESS_DENIED`**、または**`ACCESS_ABSTAIN`**（有権者は意見がない/適用不可）の3つの結果のいずれかを返し、中央の`AccessDecisionManager`が最終決定を下すことを可能にします。"
      },
      vi: {
        title: "Vai trò AccessDecisionVoter",
        body: "Trong ủy quyền Spring Security nâng cao, vai trò của một **`AccessDecisionVoter`** là gì, và ba kết quả tiềm năng nào mà phương thức `vote()` của nó có thể trả về?",
        solution: "Một **`AccessDecisionVoter`** là một thành phần trong quá trình ủy quyền kiểm tra xem principal hiện tại đã được xác thực có được phép gọi một đối tượng bảo mật (ví dụ: một phương thức hoặc URL) hay không. Phương thức `vote()` của nó trả về một trong ba kết quả: **`ACCESS_GRANTED`**, **`ACCESS_DENIED`**, hoặc **`ACCESS_ABSTAIN`** (nghĩa là voter không có ý kiến/không áp dụng), cho phép một `AccessDecisionManager` trung tâm đưa ra quyết định cuối cùng."
      }
    }
  },
  {
    _id: "sb-s-045",
    difficulty: "senior",
    tags: ["data", "jpa", "hibernate", "dirty-checking"],
    content: {
      en: {
        title: "Hibernate Interceptor",
        body: "What is a **Hibernate `Interceptor`**, and how can you use it to perform custom logic (e.g., auditing or encryption) **before** or **after** an entity is saved, without changing the entity class or repository code?",
        solution: "A Hibernate `Interceptor` is a mechanism that allows the application to **'inspect and/or modify'** persistent objects before they are saved, loaded, deleted, or updated. You can use its methods (e.g., `onSave`, `onLoad`) to implement custom logic like dynamically **encrypting a field value before `onSave`** or setting auditing information, completely externalizing the logic from the core entity model."
      },
      jp: {
        title: "Hibernateインターセプター",
        body: "**Hibernate `Interceptor`**とは何ですか、またエンティティクラスやリポジトリコードを変更せずに、エンティティが保存される**前**または**後**にカスタムロジック（例：監査や暗号化）を実行するためにどのように使用できますか？",
        solution: "Hibernate `Interceptor`は、アプリケーションが永続化されるオブジェクトが保存、ロード、削除、または更新される前に、それらを**「検査および/または変更」**できるようにするメカニズムです。そのメソッド（例：`onSave`、`onLoad`）を使用して、コアエンティティモデルからロジックを完全に外部化し、動的に**`onSave`の前にフィールド値を暗号化する**などのカスタムロジックや、監査情報を設定することができます。"
      },
      vi: {
        title: "Hibernate Interceptor",
        body: "**Hibernate `Interceptor`** là gì, và làm thế nào bạn có thể sử dụng nó để thực hiện logic tùy chỉnh (ví dụ: auditing hoặc mã hóa) **trước** hoặc **sau khi** một entity được lưu, mà không cần thay đổi class entity hoặc mã repository?",
        solution: "Một Hibernate `Interceptor` là một cơ chế cho phép ứng dụng **'kiểm tra và/hoặc sửa đổi'** các đối tượng persistent trước khi chúng được lưu, tải, xóa hoặc cập nhật. Bạn có thể sử dụng các phương thức của nó (ví dụ: `onSave`, `onLoad`) để implement logic tùy chỉnh như **mã hóa động giá trị trường trước `onSave`** hoặc thiết lập thông tin auditing, hoàn toàn ngoại hóa logic khỏi mô hình entity cốt lõi."
      }
    }
  },
  {
    _id: "sb-s-046",
    difficulty: "senior",
    tags: ["webflux", "reactor", "error-handling"],
    content: {
      en: {
        title: "Reactor Error Handling: onErrorResume",
        body: "In a Reactor chain (`Mono`/`Flux`), what is the purpose of the **`.onErrorResume()`** operator, and how does it differ from `.onErrorReturn()`?",
        solution: "Both handle errors, but **`.onErrorReturn()`** handles the error by **emitting a fixed, fallback value** and completing the stream, effectively stopping the error flow immediately. **`.onErrorResume()`** handles the error by **substituting the failed sequence with a new, alternative Publisher** (`Mono` or `Flux`). This allows for dynamic fallback logic, such as calling an external service or performing a database lookup on failure."
      },
      jp: {
        title: "Reactorエラー処理：onErrorResume",
        body: "Reactorチェーン（`Mono`/`Flux`）において、**`.onErrorResume()`**オペレーターの目的は何ですか、また`.onErrorReturn()`とどのように異なりますか？",
        solution: "どちらもエラーを処理しますが、**`.onErrorReturn()`**は**固定のフォールバック値を発行**してストリームを完了させることでエラーを処理し、エラーフローを即座に停止します。**`.onErrorResume()`**は、**失敗したシーケンスを新しい代替のPublisher**（`Mono`または`Flux`）で**置き換える**ことによってエラーを処理します。これにより、失敗時に外部サービスを呼び出す、またはデータベースルックアップを実行するなどの動的なフォールバックロジックが可能になります。"
      },
      vi: {
        title: "Reactor Error Handling: onErrorResume",
        body: "Trong một chuỗi Reactor (`Mono`/`Flux`), mục đích của operator **`.onErrorResume()`** là gì, và nó khác với `.onErrorReturn()` như thế nào?",
        solution: "Cả hai đều xử lý lỗi, nhưng **`.onErrorReturn()`** xử lý lỗi bằng cách **phát ra một giá trị cố định, dự phòng** và hoàn thành stream, ngăn chặn luồng lỗi ngay lập tức. **`.onErrorResume()`** xử lý lỗi bằng cách **thay thế sequence bị lỗi bằng một Publisher mới, thay thế** (`Mono` hoặc `Flux`). Điều này cho phép logic dự phòng động, chẳng hạn như gọi một service bên ngoài hoặc thực hiện tra cứu cơ sở dữ liệu khi thất bại."
      }
    }
  },
  {
    _id: "sb-s-047",
    difficulty: "senior",
    tags: ["ioc", "testing", "profiles"],
    content: {
      en: {
        title: "Testing with Nested Configuration",
        body: "In Spring Boot testing, how can you define application configuration properties (e.g., an external service URL) that are **only active for a specific test class** without creating a new `application-test.yml` file or affecting other test classes?",
        solution: "You can use the **`@TestPropertySource`** annotation on the test class. This allows you to define a list of inline properties (e.g., `@TestPropertySource(properties = {\"app.service.url=mocked_url\"})`) or specify resource locations that will override the standard `application.properties` just for that specific test context."
      },
      jp: {
        title: "ネストされた構成によるテスト",
        body: "Spring Bootテストにおいて、新しい`application-test.yml`ファイルを作成したり、他のテストクラスに影響を与えたりせずに、**特定のテストクラスに対してのみアクティブ**なアプリケーション構成プロパティ（例：外部サービスURL）をどのように定義できますか？",
        solution: "テストクラスで**`@TestPropertySource`**アノテーションを使用できます。これにより、インラインプロパティのリストを定義したり（例：`@TestPropertySource(properties = {\"app.service.url=mocked_url\"})`）、その特定のテストコンテキストのためだけに標準の`application.properties`をオーバーライドするリソースの場所を指定したりできます。"
      },
      vi: {
        title: "Testing with Nested Configuration",
        body: "Trong kiểm thử Spring Boot, làm thế nào bạn có thể định nghĩa các thuộc tính cấu hình ứng dụng (ví dụ: một URL service bên ngoài) mà **chỉ hoạt động cho một lớp kiểm thử cụ thể** mà không cần tạo một file `application-test.yml` mới hoặc ảnh hưởng đến các lớp kiểm thử khác?",
        solution: "Bạn có thể sử dụng annotation **`@TestPropertySource`** trên lớp kiểm thử. Điều này cho phép bạn định nghĩa một danh sách các thuộc tính nội tuyến (ví dụ: `@TestPropertySource(properties = {\"app.service.url=mocked_url\"})`) hoặc chỉ định các vị trí tài nguyên sẽ ghi đè lên `application.properties` tiêu chuẩn chỉ cho context kiểm thử cụ thể đó."
      }
    }
  },
  {
    _id: "sb-s-048",
    difficulty: "senior",
    tags: ["security", "opaque-token", "introspection"],
    content: {
      en: {
        title: "OAuth2 Opaque Token Introspection",
        body: "In Spring Security Resource Server configured for **Opaque Tokens**, what specific endpoint interaction (protocol) must the Resource Server perform with the Authorization Server to validate the token and retrieve the claims?",
        solution: "The Resource Server must perform an **Introspection Request** (defined in **RFC 7662**) to the Authorization Server's dedicated **Token Introspection Endpoint**. The Resource Server sends the opaque token, and the Authorization Server validates it and returns a JSON response containing the claims (user ID, scopes, etc.) if the token is active."
      },
      jp: {
        title: "OAuth2 Opaque Token Introspection",
        body: "**Opaque Token**用に構成されたSpring Security Resource Serverにおいて、Resource Serverがトークンを検証しクレームを取得するために、Authorization Serverと実行する必要がある特定の**エンドポイント相互作用（プロトコル）**は何ですか？",
        solution: "Resource Serverは、Authorization Serverの専用の**Token Introspection Endpoint**に対して**Introspection Request**（**RFC 7662**で定義）を実行する必要があります。Resource ServerはOpaque Tokenを送信し、Authorization Serverはそれを検証し、トークンがアクティブであればクレーム（ユーザーID、スコープなど）を含むJSON応答を返します。"
      },
      vi: {
        title: "OAuth2 Opaque Token Introspection",
        body: "Trong Spring Security Resource Server được cấu hình cho **Opaque Tokens**, tương tác **endpoint (giao thức)** cụ thể nào mà Resource Server phải thực hiện với Authorization Server để xác thực token và truy xuất các claims?",
        solution: "Resource Server phải thực hiện một **Introspection Request** (được định nghĩa trong **RFC 7662**) đến **Token Introspection Endpoint** chuyên dụng của Authorization Server. Resource Server gửi opaque token, và Authorization Server xác thực nó và trả về một phản hồi JSON chứa các claims (ID người dùng, scope, v.v.) nếu token đang hoạt động."
      }
    }
  },
  {
    _id: "sb-s-049",
    difficulty: "senior",
    tags: ["data", "jpa", "lazy-loading", "hibernate"],
    content: {
      en: {
        title: "LazyInitializationException in Controller",
        body: "Explain why a `LazyInitializationException` is often thrown when a Controller method attempts to access a lazily-loaded collection (`@OneToMany`) fetched by a Service method, and what is the standard fix for this in Spring MVC.",
        solution: "The exception is thrown because the **`@Transactional` Spring AOP proxy** around the Service method closes the Hibernate Session/Persistence Context **immediately after the Service method returns**. When the Controller (outside the transaction) later accesses the lazy collection, the required Session is closed. The standard fix is to use **`JOIN FETCH`** in the repository query to eagerly load the collection *within* the transaction, or use the **Open Session In View** pattern (though often discouraged)."
      },
      jp: {
        title: "コントローラーでのLazyInitializationException",
        body: "Serviceメソッドによってフェッチされた遅延ロードされたコレクション（`@OneToMany`）にコントローラーメソッドがアクセスしようとしたときに`LazyInitializationException`がしばしばスローされる理由と、Spring MVCでのこれに対する標準的な修正方法は何ですか。",
        solution: "例外がスローされるのは、Serviceメソッドの周りの**`@Transactional` Spring AOPプロキシ**が、Serviceメソッドが戻った**直後**にHibernateセッション/永続化コンテキストを**閉じる**ためです。コントローラー（トランザクションの外側）が後で遅延コレクションにアクセスすると、必要なセッションは閉じられています。標準的な修正方法は、リポジトリクエリで**`JOIN FETCH`**を使用してトランザクション*内*でコレクションをEagerにロードするか、**Open Session In View**パターンを使用することです（ただし、これはしばしば推奨されません）。"
      },
      vi: {
        title: "LazyInitializationException trong Controller",
        body: "Giải thích tại sao `LazyInitializationException` thường được ném ra khi một phương thức Controller cố gắng truy cập một collection được tải lazy (`@OneToMany`) được fetch bởi một phương thức Service, và cách khắc phục tiêu chuẩn cho điều này trong Spring MVC là gì.",
        solution: "Ngoại lệ được ném ra vì **proxy Spring AOP `@Transactional`** xung quanh phương thức Service đóng Hibernate Session/Persistence Context **ngay sau khi phương thức Service trả về**. Khi Controller (bên ngoài transaction) truy cập collection lazy sau đó, Session cần thiết đã bị đóng. Cách khắc phục tiêu chuẩn là sử dụng **`JOIN FETCH`** trong truy vấn repository để tải ngay lập tức collection *bên trong* transaction, hoặc sử dụng pattern **Open Session In View** (mặc dù thường không được khuyến khích)."
      }
    }
  },
  {
    _id: "sb-s-050",
    difficulty: "senior",
    tags: ["ioc", "testing", "slice", "repository"],
    content: {
      en: {
        title: "@DataJpaTest Context",
        body: "What is the primary function of the **`@DataJpaTest`** test slice annotation, and what is the default in-memory database configuration used by it (unless overridden by Testcontainers)?",
        solution: "`@DataJpaTest` is used to focus on testing **JPA repositories and the persistence layer** (e.g., entity mappings, custom queries). It auto-configures the persistence infrastructure. The default in-memory database used by it is **H2**, which provides a fast, temporary database for persistence tests that are automatically rolled back after each test."
      },
      jp: {
        title: "@DataJpaTestコンテキスト",
        body: "**`@DataJpaTest`**テストスライスアノテーションの主な機能は何ですか、またそれによって使用されるデフォルトのインメモリデータベース構成は何ですか（Testcontainersによってオーバーライドされない限り）？",
        solution: "`@DataJpaTest`は、**JPAリポジトリと永続化層**のテスト（例：エンティティマッピング、カスタムクエリ）に焦点を当てるために使用されます。永続化インフラストラクチャを自動構成します。それによって使用されるデフォルトのインメモリデータベースは**H2**であり、これは各テストの後に自動的にロールバックされる永続化テスト用の高速で一時的なデータベースを提供します。"
      },
      vi: {
        title: "@DataJpaTest Context",
        body: "Chức năng chính của annotation test slice **`@DataJpaTest`** là gì, và cấu hình cơ sở dữ liệu in-memory mặc định nào được nó sử dụng (trừ khi bị Testcontainers ghi đè)?",
        solution: "`@DataJpaTest` được sử dụng để tập trung vào việc kiểm thử **các JPA repository và tầng persistence** (ví dụ: ánh xạ entity, truy vấn tùy chỉnh). Nó tự động cấu hình cơ sở hạ tầng persistence. Cơ sở dữ liệu in-memory mặc định được nó sử dụng là **H2**, cung cấp một cơ sở dữ liệu tạm thời, nhanh chóng cho các bài kiểm thử persistence được tự động rollback sau mỗi bài kiểm thử."
      }
    }
  }
];
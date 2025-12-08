export const springBootMiddleQuestions = [
  {
    _id: "sb-m-001",
    difficulty: "middle",
    tags: ["microservices", "resilience", "circuit-breaker"],
    content: {
      en: {
        title: "Circuit Breaker Pattern Purpose",
        body: "In a microservices architecture, what is the primary purpose of implementing the **Circuit Breaker** pattern (e.g., using Spring Cloud Resilience4J)?",
        solution: "The Circuit Breaker pattern is used to **prevent cascading failures** in a distributed system. When a service repeatedly fails, the circuit opens, causing immediate short-circuiting of subsequent calls to the failing service. This saves resources, prevents clients from waiting for timeouts, and gives the failing service time to recover."
      },
      jp: {
        title: "サーキットブレーカーパターンの目的",
        body: "マイクロサービスアーキテクチャにおいて、**サーキットブレーカー**パターン（例：Spring Cloud Resilience4Jの使用）を実装する主な目的は何ですか？",
        solution: "サーキットブレーカーパターンは、分散システムにおける**連鎖的な障害を防ぐ**ために使用されます。サービスが繰り返し失敗すると、回路が開き、後続の失敗サービスへの呼び出しが即座に短絡されます。これにより、リソースが節約され、クライアントがタイムアウトを待つのを防ぎ、失敗しているサービスに回復するための時間を与えます。"
      },
      vi: {
        title: "Mục đích Circuit Breaker Pattern",
        body: "Trong kiến trúc microservices, mục đích chính của việc implement **Circuit Breaker** pattern (ví dụ: sử dụng Spring Cloud Resilience4J) là gì?",
        solution: "Circuit Breaker pattern được sử dụng để **ngăn chặn lỗi lan truyền (cascading failures)** trong hệ thống phân tán. Khi một service liên tục thất bại, 'mạch' sẽ mở, làm cho các lời gọi tiếp theo đến service thất bại đó bị đoản mạch ngay lập tức. Điều này giúp tiết kiệm tài nguyên, ngăn client phải chờ timeout, và cho phép service bị lỗi có thời gian phục hồi."
      }
    }
  },
  {
    _id: "sb-m-002",
    difficulty: "middle",
    tags: ["security", "oauth2", "jwt", "stateless"],
    content: {
      en: {
        title: "JWT vs Opaque Token",
        body: "In Spring Security OAuth2, what is the key difference between a **JSON Web Token (JWT)** and an **Opaque Token** in terms of server validation?",
        solution: "A **JWT** is a self-contained, **stateless** token that can be validated by the resource server **locally** (by checking the signature) without needing to contact the authorization server. An **Opaque Token** is just a string/ID; the resource server must contact the authorization server (via an **introspection** endpoint) to validate it and retrieve user details."
      },
      jp: {
        title: "JWTとOpaque Tokenの違い",
        body: "Spring Security OAuth2において、サーバー検証の観点から、**JSON Web Token (JWT)**と**Opaque Token**の主な違いは何ですか？",
        solution: "**JWT**は、リソースサーバーが承認サーバーに連絡することなく**ローカルで**検証できる（署名をチェックすることで）自己完結型の**ステートレス**なトークンです。**Opaque Token**は単なる文字列/IDであり、リソースサーバーはそれを検証してユーザーの詳細を取得するために、承認サーバーに連絡する（**イントロスペクション**エンドポイントを介して）必要があります。"
      },
      vi: {
        title: "JWT vs Opaque Token",
        body: "Trong Spring Security OAuth2, sự khác biệt chính giữa **JSON Web Token (JWT)** và **Opaque Token** về mặt xác thực phía server là gì?",
        solution: "**JWT** là một token độc lập, **stateless** có thể được xác thực bởi resource server **cục bộ** (bằng cách kiểm tra chữ ký) mà không cần liên hệ với authorization server. **Opaque Token** chỉ là một chuỗi/ID; resource server phải liên hệ với authorization server (thông qua endpoint **introspection**) để xác thực nó và truy xuất chi tiết người dùng."
      }
    }
  },
  {
    _id: "sb-m-003",
    difficulty: "middle",
    tags: ["data", "jpa", "dirty-checking"],
    content: {
      en: {
        title: "JPA Dirty Checking",
        body: "Explain the concept of **Dirty Checking** in Hibernate/JPA and how it helps avoid explicit `save()` calls for updates inside a transaction.",
        solution: "Dirty Checking is the mechanism where Hibernate **automatically detects** any changes made to a managed entity **within an active transaction**. When the transaction is committed, Hibernate compares the current entity state with the original snapshot loaded from the database and automatically issues the necessary **UPDATE SQL** statements without the need for an explicit `repository.save(entity)` call."
      },
      jp: {
        title: "JPAダーティチェック",
        body: "Hibernate/JPAにおける**ダーティチェック**の概念と、トランザクション内での更新に対する明示的な`save()`呼び出しを回避するのにどのように役立つかを説明してください。",
        solution: "ダーティチェックは、Hibernateが**アクティブなトランザクション内**で管理対象エンティティに加えられた変更を**自動的に検出する**メカニズムです。トランザクションがコミットされると、Hibernateは現在のエンティティの状態をデータベースからロードされた元のスナップショットと比較し、明示的な`repository.save(entity)`呼び出しなしで、必要な**UPDATE SQL**ステートメントを自動的に発行します。"
      },
      vi: {
        title: "JPA Dirty Checking",
        body: "Giải thích khái niệm **Dirty Checking** trong Hibernate/JPA và cách nó giúp tránh các lời gọi `save()` tường minh cho các bản cập nhật bên trong một transaction.",
        solution: "Dirty Checking là cơ chế trong đó Hibernate **tự động phát hiện** bất kỳ thay đổi nào được thực hiện đối với một entity được quản lý **bên trong một transaction đang hoạt động**. Khi transaction được commit, Hibernate so sánh trạng thái entity hiện tại với snapshot ban đầu được tải từ cơ sở dữ liệu và tự động đưa ra các lệnh **UPDATE SQL** cần thiết mà không cần lời gọi `repository.save(entity)` tường minh."
      }
    }
  },
  {
    _id: "sb-m-004",
    difficulty: "middle",
    tags: ["testing", "integration", "testcontainers"],
    content: {
      en: {
        title: "Testcontainers Use Case",
        body: "What is the primary advantage of using the **Testcontainers** library in Spring Boot integration tests, especially regarding database testing?",
        solution: "Testcontainers allows you to use **real services** (like PostgreSQL, Kafka, Redis) running in **Docker containers** for testing, instead of using in-memory mocks (like H2 database). This ensures that your integration tests run against an environment that is nearly identical to your production environment, drastically reducing environmental discrepancies."
      },
      jp: {
        title: "Testcontainersの使用例",
        body: "特にデータベースのテストに関して、Spring Boot統合テストで**Testcontainers**ライブラリを使用する主な利点は何ですか？",
        solution: "Testcontainersを使用すると、インメモリのモック（H2データベースなど）を使用する代わりに、**Dockerコンテナ**で実行されている**実際のサービス**（PostgreSQL、Kafka、Redisなど）をテストに使用できます。これにより、統合テストが本番環境とほぼ同じ環境に対して実行されることが保証され、環境の不一致が大幅に減少します。"
      },
      vi: {
        title: "Trường hợp sử dụng Testcontainers",
        body: "Lợi thế chính của việc sử dụng thư viện **Testcontainers** trong các bài kiểm thử tích hợp Spring Boot là gì, đặc biệt liên quan đến việc kiểm thử cơ sở dữ liệu?",
        solution: "Testcontainers cho phép bạn sử dụng **các dịch vụ thực** (như PostgreSQL, Kafka, Redis) đang chạy trong **Docker containers** để kiểm thử, thay vì sử dụng các mock in-memory (như cơ sở dữ liệu H2). Điều này đảm bảo rằng các bài kiểm thử tích hợp của bạn chạy trên một môi trường gần như giống hệt với môi trường sản xuất, giảm thiểu đáng kể sự khác biệt về môi trường."
      }
    }
  },
  {
    _id: "sb-m-005",
    difficulty: "middle",
    tags: ["actuator", "metrics", "promethus"],
    content: {
      en: {
        title: "Prometheus Endpoint",
        body: "Which specific Actuator endpoint must be enabled and exposed for an external Prometheus server to successfully scrape (pull) metrics data from a Spring Boot application?",
        solution: "The **`/actuator/prometheus`** endpoint. This endpoint exposes the application's metrics (collected by Micrometer) in the format required by the Prometheus monitoring server."
      },
      jp: {
        title: "Prometheusエンドポイント",
        body: "外部のPrometheusサーバーがSpring Bootアプリケーションからメトリクスデータを取り込む（プルする）ために、どの特定のActuatorエンドポイントを有効にして公開する必要がありますか？",
        solution: "**/actuator/prometheus**エンドポイントです。このエンドポイントは、Prometheus監視サーバーが必要とする形式で、アプリケーションのメトリクス（Micrometerによって収集されたもの）を公開します。"
      },
      vi: {
        title: "Endpoint Prometheus",
        body: "Endpoint Actuator cụ thể nào phải được bật và phơi bày để một server Prometheus bên ngoài có thể scrape (kéo) dữ liệu metric từ một ứng dụng Spring Boot một cách thành công?",
        solution: "Endpoint **`/actuator/prometheus`**. Endpoint này phơi bày các metric của ứng dụng (được thu thập bởi Micrometer) theo định dạng mà Prometheus monitoring server yêu cầu."
      }
    }
  },
  {
    _id: "sb-m-006",
    difficulty: "middle",
    tags: ["data", "jpa", "converter"],
    content: {
      en: {
        title: "JPA AttributeConverter",
        body: "What is the purpose of the **`@Converter`** interface (`AttributeConverter`) in JPA, and provide one use case for it.",
        solution: "The `AttributeConverter` is used to define custom logic for **converting between a Java type and a database column type**. A common use case is converting a **Java `List` or `Set`** into a single **JSON or delimited `String`** to be stored in a single database column, or converting custom value objects/enums."
      },
      jp: {
        title: "JPA AttributeConverter",
        body: "JPAにおける**`@Converter`**インターフェース（`AttributeConverter`）の目的は何ですか、またその使用例を1つ挙げてください。",
        solution: "`AttributeConverter`は、**Java型とデータベース列型の間で変換する**ためのカスタムロジックを定義するために使用されます。一般的な使用例は、**Javaの`List`または`Set`**を単一のデータベース列に格納するための単一の**JSONまたは区切り`String`**に変換すること、またはカスタム値オブジェクト/Enumを変換することです。"
      },
      vi: {
        title: "JPA AttributeConverter",
        body: "Mục đích của interface **`@Converter`** (`AttributeConverter`) trong JPA là gì, và cung cấp một trường hợp sử dụng cho nó.",
        solution: "`AttributeConverter` được sử dụng để định nghĩa logic tùy chỉnh để **chuyển đổi giữa một kiểu Java và một kiểu cột cơ sở dữ liệu**. Một trường hợp sử dụng phổ biến là chuyển đổi một **`List` hoặc `Set` của Java** thành một **`String` JSON hoặc được phân tách** duy nhất để lưu trữ trong một cột cơ sở dữ liệu, hoặc chuyển đổi các đối tượng giá trị/enum tùy chỉnh."
      }
    }
  },
  {
    _id: "sb-m-007",
    difficulty: "middle",
    tags: ["aop", "proxy", "cglib"],
    content: {
      en: {
        title: "AOP Proxy Types",
        body: "Spring AOP uses two types of proxies: JDK dynamic proxies and CGLIB proxies. Which one is used when the target bean implements an interface, and which one when it does not?",
        solution: "**JDK dynamic proxies** are used when the target bean implements at least one interface. **CGLIB proxies** (which are sub-class based) are used when the target bean **does not implement any interface** or when CGLIB is explicitly forced (by setting `proxyTargetClass = true`)."
      },
      jp: {
        title: "AOPプロキシタイプ",
        body: "Spring AOPは、JDK動的プロキシとCGLIBプロキシの2種類のプロキシを使用します。ターゲットBeanがインターフェースを実装している場合と、実装していない場合で、それぞれどちらが使用されますか？",
        solution: "ターゲットBeanが少なくとも1つのインターフェースを実装している場合は**JDK動的プロキシ**が使用されます。ターゲットBeanが**インターフェースを実装していない**場合、またはCGLIBが明示的に強制されている場合（`proxyTargetClass = true`を設定して）は**CGLIBプロキシ**（サブクラスベース）が使用されます。"
      },
      vi: {
        title: "Các loại AOP Proxy",
        body: "Spring AOP sử dụng hai loại proxy: JDK dynamic proxies và CGLIB proxies. Loại nào được sử dụng khi bean mục tiêu implement một interface, và loại nào khi nó không implement interface nào?",
        solution: "**JDK dynamic proxies** được sử dụng khi bean mục tiêu implement ít nhất một interface. **CGLIB proxies** (dựa trên lớp con) được sử dụng khi bean mục tiêu **không implement bất kỳ interface nào** hoặc khi CGLIB được buộc sử dụng rõ ràng (bằng cách đặt `proxyTargetClass = true`)."
      }
    }
  },
  {
    _id: "sb-m-008",
    difficulty: "middle",
    tags: ["testing", "mockito", "verification"],
    content: {
      en: {
        title: "Mockito Argument Captor",
        body: "In Mockito testing, what is the role of an **`ArgumentCaptor`**, and why is it useful when verifying method calls?",
        solution: "An **`ArgumentCaptor`** is used to **capture the arguments** that were passed to a mocked method during execution. It's useful because it allows you to **inspect the actual value of a complex object** argument (which may have been created inside the method under test) after the method call has happened, enabling detailed verification beyond simple equality checks."
      },
      jp: {
        title: "Mockito Argument Captor",
        body: "Mockitoテストにおいて、**`ArgumentCaptor`**の役割は何ですか、またメソッド呼び出しを検証する際にそれが役立つのはなぜですか？",
        solution: "**`ArgumentCaptor`**は、実行中にモックされたメソッドに渡された**引数をキャプチャする**ために使用されます。メソッド呼び出しが発生した後、**複雑なオブジェクト引数の実際の値**（テスト対象のメソッド内で作成された可能性がある）を**検査できる**ため、単純な等価性チェックを超えた詳細な検証が可能になり、役立ちます。"
      },
      vi: {
        title: "Mockito Argument Captor",
        body: "Trong kiểm thử Mockito, vai trò của một **`ArgumentCaptor`** là gì, và tại sao nó hữu ích khi xác minh các lời gọi phương thức?",
        solution: "Một **`ArgumentCaptor`** được sử dụng để **bắt lấy các đối số** đã được truyền cho một phương thức mock trong quá trình thực thi. Nó hữu ích vì nó cho phép bạn **kiểm tra giá trị thực tế của một đối tượng phức tạp** làm đối số (có thể đã được tạo bên trong phương thức đang được kiểm thử) sau khi lời gọi phương thức đã xảy ra, cho phép xác minh chi tiết hơn ngoài các kiểm tra bình đẳng đơn giản."
      }
    }
  },
  {
    _id: "sb-m-009",
    difficulty: "middle",
    tags: ["configuration", "profile", "externalization"],
    content: {
      en: {
        title: "Configuration Priority Order",
        body: "When reading configuration, list three sources that have a **higher priority** than properties defined in `application.properties` (or `application.yml`) within the Spring Boot Externalized Configuration mechanism.",
        solution: "Higher priority sources include: **1. Command line arguments** (highest), **2. System properties** (e.g., `-Dspring.profiles.active=prod`), **3. Environment variables** (e.g., `SERVER_PORT`), and **4. Properties loaded from a dedicated profile-specific file** (e.g., `application-prod.properties`)."
      },
      jp: {
        title: "構成の優先順位",
        body: "構成を読み取る際、Spring Bootの外部化された構成メカニズムにおいて、`application.properties`（または`application.yml`）で定義されたプロパティよりも**高い優先順位**を持つ3つのソースを挙げてください。",
        solution: "優先順位が高いソースには、**1. コマンドライン引数**（最も高い）、**2. システムプロパティ**（例：`-Dspring.profiles.active=prod`）、**3. 環境変数**（例：`SERVER_PORT`）、および**4. 専用のプロファイル固有のファイルからロードされたプロパティ**（例：`application-prod.properties`）が含まれます。"
      },
      vi: {
        title: "Thứ tự ưu tiên Configuration",
        body: "Khi đọc cấu hình, hãy liệt kê ba nguồn có **ưu tiên cao hơn** các thuộc tính được định nghĩa trong `application.properties` (hoặc `application.yml`) trong cơ chế Externalized Configuration của Spring Boot.",
        solution: "Các nguồn ưu tiên cao hơn bao gồm: **1. Command line arguments** (cao nhất), **2. System properties** (ví dụ: `-Dspring.profiles.active=prod`), **3. Environment variables** (ví dụ: `SERVER_PORT`), và **4. Các thuộc tính được tải từ một file dành riêng cho profile** (ví dụ: `application-prod.properties`)."
      }
    }
  },
  {
    _id: "sb-m-010",
    difficulty: "middle",
    tags: ["data", "transaction", "propagation"],
    content: {
      en: {
        title: "Propagation.REQUIRES_NEW",
        body: "Explain the behavior of `Propagation.REQUIRES_NEW` when applied to a method `B` that is called from another transactional method `A`.",
        solution: "`Propagation.REQUIRES_NEW` dictates that method `B` must **always run in a completely new, independent transaction**. If method `A` has an existing transaction, that transaction is **suspended** before `B` starts. `B`'s new transaction commits or rolls back independently of `A`'s transaction."
      },
      jp: {
        title: "Propagation.REQUIRES_NEW",
        body: "別のトランザクションメソッド`A`から呼び出されるメソッド`B`に適用された場合の`Propagation.REQUIRES_NEW`の動作を説明してください。",
        solution: "`Propagation.REQUIRES_NEW`は、メソッド`B`が**常に完全に新しく独立したトランザクションで実行される**必要があることを示します。メソッド`A`に既存のトランザクションがある場合、`B`が開始する前にそのトランザクションは**中断**されます。`B`の新しいトランザクションは、`A`のトランザクションとは独立してコミットまたはロールバックされます。"
      },
      vi: {
        title: "Propagation.REQUIRES_NEW",
        body: "Giải thích hành vi của `Propagation.REQUIRES_NEW` khi được áp dụng cho một phương thức `B` được gọi từ một phương thức transaction khác `A`.",
        solution: "`Propagation.REQUIRES_NEW` quy định rằng phương thức `B` phải **luôn chạy trong một transaction hoàn toàn mới và độc lập**. Nếu phương thức `A` có một transaction hiện có, transaction đó sẽ bị **đình chỉ (suspended)** trước khi `B` bắt đầu. Transaction mới của `B` commit hoặc rollback độc lập với transaction của `A`."
      }
  }
  },
  {
    _id: "sb-m-011",
    difficulty: "middle",
    tags: ["data", "jpa", "entity-listener"],
    content: {
      en: {
        title: "JPA Entity Listener",
        body: "What is a **JPA Entity Listener** (annotated with `@EntityListeners`), and what is one common use case for using it?",
        solution: "An Entity Listener is a plain Java class that contains callback methods (e.g., `@PrePersist`, `@PostUpdate`) which are **triggered automatically** by JPA/Hibernate when specific lifecycle events occur on an entity. A common use case is **automatically setting audit fields** like `createdAt` or `updatedAt` before persisting or updating an entity."
      },
      jp: {
        title: "JPAエンティティリスナー",
        body: "**JPAエンティティリスナー**（`@EntityListeners`でアノテーション付けされたもの）とは何ですか、またそれを使用する一般的な使用例を1つ挙げてください。",
        solution: "エンティティリスナーは、エンティティで特定のライフサイクルイベントが発生したときにJPA/Hibernateによって**自動的にトリガーされる**コールバックメソッド（例：`@PrePersist`、`@PostUpdate`）を含むプレーンなJavaクラスです。一般的な使用例は、エンティティを永続化または更新する前に、`createdAt`や`updatedAt`などの**監査フィールドを自動的に設定する**ことです。"
      },
      vi: {
        title: "JPA Entity Listener",
        body: "**JPA Entity Listener** (được đánh dấu bằng `@EntityListeners`) là gì, và một trường hợp sử dụng phổ biến để sử dụng nó là gì?",
        solution: "Entity Listener là một class Java thông thường chứa các phương thức callback (ví dụ: `@PrePersist`, `@PostUpdate`) được **tự động kích hoạt** bởi JPA/Hibernate khi các sự kiện vòng đời cụ thể xảy ra trên một entity. Một trường hợp sử dụng phổ biến là **tự động đặt các trường kiểm toán (audit fields)** như `createdAt` hoặc `updatedAt` trước khi duy trì hoặc cập nhật một entity."
      }
    }
  },
  {
    _id: "sb-m-012",
    difficulty: "middle",
    tags: ["ioc", "bean", "scope"],
    content: {
      en: {
        title: "Request Scope vs Session Scope",
        body: "What is the difference between the **`request`** scope and the **`session`** scope for Spring Beans in a web application, and when would you use each?",
        solution: "A **`request`** scoped bean is instantiated once **per HTTP request** and destroyed when the request is finished. Used for request-specific data (e.g., a filter's trace ID). A **`session`** scoped bean is instantiated once **per user session** and persists as long as the session is active. Used for user-specific data (e.g., a logged-in user's profile details or a shopping cart)."
      },
      jp: {
        title: "RequestスコープとSessionスコープの違い",
        body: "WebアプリケーションにおけるSpring Beanの**`request`**スコープと**`session`**スコープの違いは何ですか、またそれぞれをいつ使用しますか？",
        solution: "**`request`**スコープのBeanは、**HTTPリクエストごと**に1回インスタンス化され、リクエストが終了すると破棄されます。リクエスト固有のデータ（例：フィルターのトレースID）に使用されます。**`session`**スコープのBeanは、**ユーザーセッションごと**に1回インスタンス化され、セッションがアクティブである限り永続します。ユーザー固有のデータ（例：ログインユーザーのプロファイル詳細やショッピングカート）に使用されます。"
      },
      vi: {
        title: "Request Scope vs Session Scope",
        body: "Sự khác biệt giữa scope **`request`** và scope **`session`** cho Spring Bean trong một ứng dụng web là gì, và khi nào bạn sử dụng từng loại?",
        solution: "Một bean có scope **`request`** được khởi tạo một lần **cho mỗi HTTP request** và bị hủy khi request kết thúc. Được sử dụng cho dữ liệu dành riêng cho request (ví dụ: ID trace của filter). Một bean có scope **`session`** được khởi tạo một lần **cho mỗi user session** và tồn tại miễn là session còn hoạt động. Được sử dụng cho dữ liệu dành riêng cho người dùng (ví dụ: chi tiết hồ sơ của người dùng đã đăng nhập hoặc giỏ hàng)."
      }
    }
  },
  {
    _id: "sb-m-013",
    difficulty: "middle",
    tags: ["data", "jpa", "indexing", "performance"],
    content: {
      en: {
        title: "Hibernate Second-Level Cache",
        body: "What is the primary role of the **Hibernate Second-Level Cache** (L2 Cache), and how does it differ from the First-Level Cache?",
        solution: "The L2 Cache is a **session factory-level** cache, meaning it is **shared across all Hibernate sessions/transactions** within the application, storing data for reuse. The First-Level Cache is only managed by the **current session** and is destroyed when the session closes. L2 cache reduces database hits for frequently accessed, read-only data."
      },
      jp: {
        title: "Hibernateセカンドレベルキャッシュ",
        body: "**Hibernateセカンドレベルキャッシュ**（L2キャッシュ）の主な役割は何ですか、またファーストレベルキャッシュとどのように異なりますか？",
        solution: "L2キャッシュは**セッションファクトリレベル**のキャッシュであり、アプリケーション内の**すべてのHibernateセッション/トランザクション間で共有**され、再利用のためにデータを保存します。ファーストレベルキャッシュは**現在のセッション**によってのみ管理され、セッションが閉じられると破棄されます。L2キャッシュは、頻繁にアクセスされる読み取り専用データのデータベースヒットを減らします。"
      },
      vi: {
        title: "Hibernate Second-Level Cache",
        body: "Vai trò chính của **Hibernate Second-Level Cache** (L2 Cache) là gì, và nó khác với First-Level Cache như thế nào?",
        solution: "L2 Cache là một cache ở **cấp độ session factory**, nghĩa là nó được **chia sẻ trên tất cả các session/transaction Hibernate** trong ứng dụng, lưu trữ dữ liệu để tái sử dụng. First-Level Cache chỉ được quản lý bởi **session hiện tại** và bị hủy khi session đóng. L2 cache giúp giảm số lần truy cập cơ sở dữ liệu cho dữ liệu chỉ đọc, được truy cập thường xuyên."
      }
    }
  },
  {
    _id: "sb-m-014",
    difficulty: "middle",
    tags: ["rest", "pagination", "hateoas"],
    content: {
      en: {
        title: "HATEOAS and REST",
        body: "What does the acronym **HATEOAS** stand for, and what is the primary benefit of applying HATEOAS principles to a Spring Boot REST API?",
        solution: "HATEOAS stands for **Hypermedia As The Engine of Application State**. The primary benefit is that the server provides **links** within the response data (e.g., next page link, related resource link). This allows clients to navigate the API **without hardcoding URIs**, making the API more discoverable and resilient to changes."
      },
      jp: {
        title: "HATEOASとREST",
        body: "頭字語**HATEOAS**は何の略ですか、またHATEOASの原則をSpring Boot REST APIに適用する主な利点は何ですか？",
        solution: "HATEOASは**Hypermedia As The Engine of Application State**の略です。主な利点は、サーバーが応答データ内に**リンク**を提供する（例：次のページのリンク、関連リソースのリンク）ことです。これにより、クライアントは**URIをハードコーディングすることなく**APIをナビゲートでき、APIの発見性と変更への耐性が向上します。"
      },
      vi: {
        title: "HATEOAS và REST",
        body: "Viết tắt **HATEOAS** là viết tắt của gì, và lợi ích chính của việc áp dụng các nguyên tắc HATEOAS vào một API REST Spring Boot là gì?",
        solution: "HATEOAS là viết tắt của **Hypermedia As The Engine of Application State**. Lợi ích chính là server cung cấp **các liên kết (links)** bên trong dữ liệu phản hồi (ví dụ: liên kết đến trang tiếp theo, liên kết đến tài nguyên liên quan). Điều này cho phép client điều hướng API **mà không cần hardcode các URI**, làm cho API dễ khám phá hơn và linh hoạt hơn với các thay đổi."
      }
    }
  },
  {
    _id: "sb-m-015",
    difficulty: "middle",
    tags: ["aop", "pointcut", "spel"],
    content: {
      en: {
        title: "Pointcut Expression",
        body: "In Spring AOP, explain what a **Pointcut Expression** is, and provide an example of one using a common method signature pattern.",
        solution: "A Pointcut Expression is a **regex-like language** that defines **where** advice should be applied (the set of join points). It targets specific methods in specific classes. Example: `execution(* com.example.service.*.*(..))` targets **any method** in **any class** within the `com.example.service` package."
      },
      jp: {
        title: "Pointcut式",
        body: "Spring AOPにおいて、**Pointcut式**とは何かを説明し、一般的なメソッドシグネチャパターンを使用した例を1つ挙げてください。",
        solution: "Pointcut式は、アドバイスを適用する**場所**（ジョインポイントのセット）を定義する**正規表現のような言語**です。特定のクラスの特定のメソッドをターゲットにします。例: `execution(* com.example.service.*.*(..))`は、`com.example.service`パッケージ内の**任意のクラス**の**任意のメソッド**をターゲットにします。"
      },
      vi: {
        title: "Pointcut Expression",
        body: "Trong Spring AOP, giải thích **Pointcut Expression** là gì, và cung cấp một ví dụ về một Pointcut Expression sử dụng một pattern chữ ký phương thức phổ biến.",
        solution: "Pointcut Expression là một **ngôn ngữ giống regex** xác định **nơi** advice nên được áp dụng (tập hợp các join point). Nó nhắm mục tiêu các phương thức cụ thể trong các class cụ thể. Ví dụ: `execution(* com.example.service.*.*(..))` nhắm mục tiêu **bất kỳ phương thức nào** trong **bất kỳ class nào** bên trong package `com.example.service`."
      }
    }
  },
  {
    _id: "sb-m-016",
    difficulty: "middle",
    tags: ["data", "jpa", "transaction", "isolation"],
    content: {
      en: {
        title: "Transaction Isolation Level",
        body: "What is the default transaction isolation level used by Spring Boot/JPA (which usually defers to the database default), and name two potential issues (phenomena) that this level is meant to prevent?",
        solution: "The default is usually **READ_COMMITTED**. This level is meant to prevent **Dirty Reads**. Depending on the underlying database, it may also prevent **Non-Repeatable Reads**, but it usually *does not* prevent **Phantom Reads** (which requires `SERIALIZABLE` or sometimes `REPEATABLE_READ`)."
      },
      jp: {
        title: "トランザクション分離レベル",
        body: "Spring Boot/JPAで使用されるデフォルトのトランザクション分離レベル（通常はデータベースのデフォルトに委ねられる）は何ですか、またこのレベルが防ぐことを意図している2つの潜在的な問題（現象）の名前を挙げてください。",
        solution: "デフォルトは通常**READ_COMMITTED**です。このレベルは**ダーティリード**を防ぐことを意図しています。基になるデータベースにもよりますが、**ノンリピータブルリード**を防ぐこともありますが、通常は**ファントムリード**を防ぐことは*ありません*（これは`SERIALIZABLE`または場合によっては`REPEATABLE_READ`が必要です）。"
      },
      vi: {
        title: "Transaction Isolation Level",
        body: "Mức độ cách ly transaction (isolation level) mặc định được sử dụng bởi Spring Boot/JPA (thường phụ thuộc vào mặc định của cơ sở dữ liệu) là gì, và nêu tên hai vấn đề tiềm ẩn (hiện tượng) mà mức độ này có ý nghĩa ngăn chặn?",
        solution: "Mặc định thường là **READ_COMMITTED**. Mức độ này có ý nghĩa ngăn chặn **Dirty Reads**. Tùy thuộc vào cơ sở dữ liệu cơ bản, nó cũng có thể ngăn chặn **Non-Repeatable Reads**, nhưng nó thường *không* ngăn chặn **Phantom Reads** (thứ yêu cầu `SERIALIZABLE` hoặc đôi khi là `REPEATABLE_READ`)."
      }
    }
  },
  {
    _id: "sb-m-017",
    difficulty: "middle",
    tags: ["ioc", "bean", "postprocessor"],
    content: {
      en: {
        title: "BeanPostProcessor Role",
        body: "What is the purpose of implementing the **`BeanPostProcessor`** interface in Spring, and what are the two main callback methods it provides?",
        solution: "`BeanPostProcessor` allows you to hook into the Spring IoC container's lifecycle to **customize, modify, or wrap** bean instances **after** they have been initialized (after dependency injection, but before use). The two main methods are **`postProcessBeforeInitialization`** and **`postProcessAfterInitialization`**."
      },
      jp: {
        title: "BeanPostProcessorの役割",
        body: "Springで**`BeanPostProcessor`**インターフェースを実装する目的は何ですか、またそれが提供する2つの主なコールバックメソッドは何ですか？",
        solution: "`BeanPostProcessor`を使用すると、Spring IoCコンテナのライフサイクルにフックして、Beanインスタンスが初期化された**後**（依存性注入の後、使用の前）にそれを**カスタマイズ、変更、またはラップ**することができます。2つの主なメソッドは**`postProcessBeforeInitialization`**と**`postProcessAfterInitialization`**です。"
      },
      vi: {
        title: "Vai trò BeanPostProcessor",
        body: "Mục đích của việc implement interface **`BeanPostProcessor`** trong Spring là gì, và hai phương thức callback chính mà nó cung cấp là gì?",
        solution: "`BeanPostProcessor` cho phép bạn can thiệp vào vòng đời của container IoC của Spring để **tùy chỉnh, sửa đổi, hoặc bọc (wrap)** các instance bean **sau khi** chúng đã được khởi tạo (sau khi dependency injection, nhưng trước khi sử dụng). Hai phương thức chính là **`postProcessBeforeInitialization`** và **`postProcessAfterInitialization`**."
      }
    }
  },
  {
    _id: "sb-m-018",
    difficulty: "middle",
    tags: ["data", "redis", "messaging"],
    content: {
      en: {
        title: "Redis Pub/Sub vs Cache",
        body: "Besides caching, name another common use case for Redis in a Spring Boot application, and explain the difference between this and caching.",
        solution: "Another common use case is **Messaging (Pub/Sub)**. The difference is that as a **Cache**, Redis stores key-value pairs where data is pulled (read/write) by the application based on a key. In **Pub/Sub**, the application **subscribes** to channels and is **pushed** messages by Redis when publishers send them, acting as a real-time message broker."
      },
      jp: {
        title: "Redis Pub/Subとキャッシュ",
        body: "キャッシング以外に、Spring BootアプリケーションでRedisを使用する一般的な使用例をもう1つ挙げ、これとキャッシングとの違いを説明してください。",
        solution: "もう1つの一般的な使用例は**メッセージング（Pub/Sub）**です。違いは、**キャッシュ**として、Redisはキーに基づいてアプリケーションによってデータがプルされる（読み取り/書き込み）キーと値のペアを保存します。**Pub/Sub**では、アプリケーションはチャネルに**サブスクライブ**し、パブリッシャーがメッセージを送信したときにRedisによってメッセージが**プッシュ**され、リアルタイムのメッセージブローカーとして機能します。"
      },
      vi: {
        title: "Redis Pub/Sub vs Cache",
        body: "Ngoài caching, hãy nêu tên một trường hợp sử dụng phổ biến khác cho Redis trong một ứng dụng Spring Boot, và giải thích sự khác biệt giữa nó và caching.",
        solution: "Một trường hợp sử dụng phổ biến khác là **Messaging (Pub/Sub)**. Sự khác biệt là: với vai trò là **Cache**, Redis lưu trữ các cặp key-value, nơi dữ liệu được ứng dụng kéo (pull) (đọc/ghi) dựa trên một key. Trong **Pub/Sub**, ứng dụng **đăng ký (subscribes)** các channel và được Redis **đẩy (pushed)** tin nhắn khi các publisher gửi chúng, hoạt động như một message broker thời gian thực."
      }
    }
  },
  {
    _id: "sb-m-019",
    difficulty: "middle",
    tags: ["microservices", "load-balancing", "client-side"],
    content: {
      en: {
        title: "Client-Side Load Balancing",
        body: "In the context of Spring Cloud microservices, what is **client-side load balancing** (e.g., using Spring Cloud LoadBalancer/Ribbon legacy), and why is it preferred over server-side load balancing?",
        solution: "Client-side load balancing means the client service is **aware of all available service instances** (via Service Discovery) and uses an algorithm (e.g., Round Robin) to choose which instance to send the request to. It is preferred because it **removes a single point of failure** (the centralized load balancer) and often results in lower latency, as it bypasses an extra network hop."
      },
      jp: {
        title: "クライアントサイド負荷分散",
        body: "Spring Cloudマイクロサービスのコンテキストにおいて、**クライアントサイド負荷分散**（例：Spring Cloud LoadBalancer/Ribbonレガシーの使用）とは何ですか、またサーバーサイド負荷分散よりもこれが好まれるのはなぜですか？",
        solution: "クライアントサイド負荷分散とは、クライアントサービスが**利用可能なすべてのサービスインスタンスを認識しており**（サービスディスカバリ経由）、アルゴリズム（例：ラウンドロビン）を使用してリクエストを送信するインスタンスを選択することを意味します。これは、**単一障害点**（集中型ロードバランサー）を**排除**し、余分なネットワークホップをバイパスするため、多くの場合、レイテンシが低くなるため好まれます。"
      },
      vi: {
        title: "Client-Side Load Balancing",
        body: "Trong bối cảnh các microservices của Spring Cloud, **client-side load balancing** (ví dụ: sử dụng Spring Cloud LoadBalancer/Ribbon legacy) là gì, và tại sao nó được ưa chuộng hơn server-side load balancing?",
        solution: "Client-side load balancing có nghĩa là service client **biết tất cả các instance service có sẵn** (thông qua Service Discovery) và sử dụng một thuật toán (ví dụ: Round Robin) để chọn instance nào để gửi request đến. Nó được ưa chuộng vì nó **loại bỏ một điểm lỗi duy nhất (single point of failure)** (load balancer tập trung) và thường dẫn đến độ trễ thấp hơn, vì nó bỏ qua một bước nhảy mạng bổ sung."
      }
    }
  },
  {
    _id: "sb-m-020",
    difficulty: "middle",
    tags: ["data", "jpa", "dynamic-query"],
    content: {
      en: {
        title: "QueryDSL Use Case",
        body: "What is **QueryDSL**, and what advantage does it offer over manually writing JPQL/HQL strings in a Spring Data JPA application?",
        solution: "QueryDSL is a framework that allows you to **build type-safe queries** using a fluent Java API. The main advantage is that queries are constructed programmatically, meaning **syntax errors are caught at compile time** rather than runtime, making dynamic queries much safer and easier to refactor than string-based JPQL/HQL."
      },
      jp: {
        title: "QueryDSLの使用例",
        body: "**QueryDSL**とは何ですか、またSpring Data JPAアプリケーションでJPQL/HQL文字列を手動で記述するよりもどのような利点がありますか？",
        solution: "QueryDSLは、流暢なJava APIを使用して**型安全なクエリを構築する**ことができるフレームワークです。主な利点は、クエリがプログラムで構築されるため、構文エラーが実行時ではなく**コンパイル時にキャッチされる**ことであり、文字列ベースのJPQL/HQLよりも動的クエリをはるかに安全でリファクタリングしやすくします。"
      },
      vi: {
        title: "Trường hợp sử dụng QueryDSL",
        body: "**QueryDSL** là gì, và nó cung cấp lợi thế gì so với việc viết thủ công các chuỗi JPQL/HQL trong một ứng dụng Spring Data JPA?",
        solution: "QueryDSL là một framework cho phép bạn **xây dựng các truy vấn an toàn kiểu (type-safe queries)** bằng cách sử dụng một API Java linh hoạt (fluent Java API). Lợi thế chính là các truy vấn được xây dựng theo chương trình, nghĩa là **các lỗi cú pháp được bắt ở thời điểm biên dịch** chứ không phải thời điểm chạy, làm cho các truy vấn động an toàn hơn nhiều và dễ dàng refactor hơn so với JPQL/HQL dựa trên chuỗi."
      }
  }},
  {
    _id: "sb-m-021",
    difficulty: "middle",
    tags: ["rest", "idempotent", "put-patch"],
    content: {
      en: {
        title: "PUT vs PATCH",
        body: "In a RESTful Spring Boot controller, what is the semantic difference between the **PUT** and **PATCH** methods when updating a resource, and which one is idempotent?",
        solution: "**PUT** is used for **complete replacement** of the resource; the request body must contain the full, updated representation. **PATCH** is used for **partial updates**; the request body only contains the fields to be modified. **PUT is idempotent**, meaning multiple identical requests have the same final result, while **PATCH is generally not** guaranteed to be idempotent unless specifically implemented that way."
      },
      jp: {
        title: "PUTとPATCHの違い",
        body: "RESTful Spring Bootコントローラーにおいて、リソースを更新する際の**PUT**と**PATCH**メソッドの意味的な違いは何ですか、またどちらが冪等ですか？",
        solution: "**PUT**はリソースの**完全な置換**に使用されます。リクエストボディには、更新された完全な表現が含まれている必要があります。**PATCH**は**部分的な更新**に使用されます。リクエストボディには、変更するフィールドのみが含まれます。**PUTは冪等**であり、複数の同一のリクエストが同じ最終結果をもたらしますが、**PATCHは一般的に**そのように特別に実装されていない限り、冪等であることは保証**されません**。"
      },
      vi: {
        title: "PUT vs PATCH",
        body: "Trong một controller Spring Boot RESTful, sự khác biệt về mặt ngữ nghĩa giữa các phương thức **PUT** và **PATCH** khi cập nhật một tài nguyên là gì, và phương thức nào là idempotent?",
        solution: "**PUT** được sử dụng để **thay thế hoàn toàn** tài nguyên; nội dung request body phải chứa toàn bộ biểu diễn đã được cập nhật. **PATCH** được sử dụng cho **cập nhật một phần**; nội dung request body chỉ chứa các trường cần sửa đổi. **PUT là idempotent** (lũy đẳng), nghĩa là nhiều request giống hệt nhau sẽ cho cùng một kết quả cuối cùng, trong khi **PATCH thường không** được đảm bảo là idempotent trừ khi được implement cụ thể theo cách đó."
      }
    }
  },
  {
    _id: "sb-m-022",
    difficulty: "middle",
    tags: ["testing", "slice", "rest"],
    content: {
      en: {
        title: "@WebMvcTest Role",
        body: "What is the primary function of the **@WebMvcTest** test slice annotation, and which key component is typically used in conjunction with it to verify controller behavior?",
        solution: "**@WebMvcTest** focuses on testing **Spring MVC components** (Controllers, ControllerAdvice, Filters), excluding service and repository layers. It usually auto-configures a **`MockMvc`** bean, which is the key component used to simulate HTTP requests against the controller without starting a full HTTP server."
      },
      jp: {
        title: "@WebMvcTestの役割",
        body: "**@WebMvcTest**テストスライスアノテーションの主な機能は何ですか、またコントローラーの動作を検証するためにそれと組み合わせて通常使用される主要なコンポーネントは何ですか？",
        solution: "**@WebMvcTest**は、サービス層とリポジトリ層を除外し、**Spring MVCコンポーネント**（Controller、ControllerAdvice、Filter）のテストに焦点を当てています。通常、**`MockMvc`** Beanを自動構成します。これは、完全なHTTPサーバーを起動せずにコントローラーに対してHTTPリクエストをシミュレートするために使用される主要なコンポーネントです。"
      },
      vi: {
        title: "Vai trò @WebMvcTest",
        body: "Chức năng chính của annotation test slice **@WebMvcTest** là gì, và thành phần chính nào thường được sử dụng cùng với nó để xác minh hành vi của controller?",
        solution: "**@WebMvcTest** tập trung vào việc kiểm thử **các thành phần Spring MVC** (Controllers, ControllerAdvice, Filters), loại trừ các tầng service và repository. Nó thường tự động cấu hình một bean **`MockMvc`**, đây là thành phần chính được sử dụng để mô phỏng các request HTTP đối với controller mà không cần khởi động một HTTP server đầy đủ."
      }
    }
  },
  {
    _id: "sb-m-023",
    difficulty: "middle",
    tags: ["websocket", "stomp", "messaging"],
    content: {
      en: {
        title: "STOMP Protocol",
        body: "When using WebSockets in Spring Boot for real-time messaging, the **STOMP** protocol is often used. What problem does STOMP solve for WebSockets?",
        solution: "STOMP (Simple Text Oriented Messaging Protocol) provides a **standard messaging frame/structure** over WebSockets. WebSockets only provide a low-level, full-duplex communication channel. STOMP adds necessary features like **headers, destinations (topics/queues), subscriptions, and acknowledgments**, making it easier to build structured, many-to-many messaging applications."
      },
      jp: {
        title: "STOMPプロトコル",
        body: "Spring BootでリアルタイムメッセージングにWebSocketを使用する場合、**STOMP**プロトコルがよく使用されます。STOMPはWebSocketに対してどのような問題を解決しますか？",
        solution: "STOMP（Simple Text Oriented Messaging Protocol）は、WebSocket上に**標準的なメッセージングフレーム/構造**を提供します。WebSocketは低レベルの全二重通信チャネルのみを提供します。STOMPは、**ヘッダー、宛先（トピック/キュー）、サブスクリプション、確認応答**などの必要な機能を追加し、構造化された多対多のメッセージングアプリケーションを構築しやすくします。"
      },
      vi: {
        title: "STOMP Protocol",
        body: "Khi sử dụng WebSockets trong Spring Boot cho messaging thời gian thực, giao thức **STOMP** thường được sử dụng. STOMP giải quyết vấn đề gì cho WebSockets?",
        solution: "STOMP (Simple Text Oriented Messaging Protocol) cung cấp một **khung/cấu trúc messaging tiêu chuẩn** trên WebSockets. WebSockets chỉ cung cấp một kênh giao tiếp song công toàn phần (full-duplex communication channel) cấp thấp. STOMP bổ sung các tính năng cần thiết như **headers, destinations (topics/queues), subscriptions, và acknowledgments**, giúp xây dựng các ứng dụng messaging có cấu trúc, nhiều-đối-nhiều dễ dàng hơn."
      }
    }
  },
  {
    _id: "sb-m-024",
    difficulty: "middle",
    tags: ["data", "jpa", "indexing", "performance"],
    content: {
      en: {
        title: "Performance of findById",
        body: "Explain why calling a JPA Repository's `findById(ID)` method is usually **highly performant** compared to other find methods, assuming the entity is properly mapped.",
        solution: "It is highly performant because `findById(ID)` relies on the entity's **Primary Key**. The Primary Key column is **automatically indexed** by the database, meaning the lookup can use a highly efficient index-based scan (like a B-tree lookup) instead of a slow table-level full scan, resulting in $O(log N)$ or $O(1)$ access."
      },
      jp: {
        title: "findByIdのパフォーマンス",
        body: "エンティティが適切にマッピングされていると仮定して、JPAリポジトリの`findById(ID)`メソッドの呼び出しが、他の検索メソッドと比較して通常**非常に高性能**である理由を説明してください。",
        solution: "これは、`findById(ID)`がエンティティの**主キー**に依存しているため、非常に高性能です。主キー列はデータベースによって**自動的にインデックス付け**されており、ルックアップが遅いテーブルレベルのフルスキャンではなく、非常に効率的なインデックスベースのスキャン（Bツリー検索など）を使用できることを意味し、$O(log N)$または$O(1)$のアクセスになります。"
      },
      vi: {
        title: "Hiệu suất của findById",
        body: "Giải thích tại sao việc gọi phương thức `findById(ID)` của JPA Repository thường **có hiệu suất cao** so với các phương thức tìm kiếm khác, giả sử entity được ánh xạ đúng cách.",
        solution: "Nó có hiệu suất cao vì `findById(ID)` dựa vào **Primary Key** của entity. Cột Primary Key được **tự động đánh index** bởi cơ sở dữ liệu, nghĩa là việc tra cứu có thể sử dụng một quá trình quét dựa trên index hiệu quả cao (như tra cứu B-tree) thay vì một quá trình quét toàn bộ bảng chậm, dẫn đến quyền truy cập $O(log N)$ hoặc $O(1)$."
      }
    }
  },
  {
    _id: "sb-m-025",
    difficulty: "middle",
    tags: ["ioc", "conditional", "profile"],
    content: {
      en: {
        title: "@Profile vs @Conditional",
        body: "What is the relationship between the **`@Profile`** annotation and the family of **`@Conditional`** annotations (like `@ConditionalOnClass`) in Spring?",
        solution: "`@Profile` is essentially a **meta-annotation** that is a shorthand for `@ConditionalOnProperty(name = 'spring.profiles.active', havingValue = '...')`. Both are part of the larger **`@Conditional`** mechanism, which allows beans to be registered or excluded based on arbitrary conditions (e.g., presence of a class, existence of a bean, or active profile). `@Profile` is a specific, common use case of the general `@Conditional` concept."
      },
      jp: {
        title: "@Profileと@Conditional",
        body: "Springにおける**`@Profile`**アノテーションと**`@Conditional`**アノテーション（`@ConditionalOnClass`など）のファミリーとの関係は何ですか？",
        solution: "`@Profile`は本質的に、`@ConditionalOnProperty(name = 'spring.profiles.active', havingValue = '...')`の短縮形である**メタアノテーション**です。どちらも、Beanが任意の条件（例：クラスの存在、Beanの存在、アクティブなプロファイル）に基づいて登録または除外されることを許可する、より大きな**`@Conditional`**メカニズムの一部です。`@Profile`は、一般的な`@Conditional`の概念の特定の一般的な使用例です。"
      },
      vi: {
        title: "@Profile vs @Conditional",
        body: "Mối quan hệ giữa annotation **`@Profile`** và họ các annotation **`@Conditional`** (như `@ConditionalOnClass`) trong Spring là gì?",
        solution: "`@Profile` về cơ bản là một **meta-annotation** là viết tắt của `@ConditionalOnProperty(name = 'spring.profiles.active', havingValue = '...')`. Cả hai đều là một phần của cơ chế **`@Conditional`** lớn hơn, cơ chế này cho phép các bean được đăng ký hoặc loại trừ dựa trên các điều kiện tùy ý (ví dụ: sự hiện diện của một class, sự tồn tại của một bean, hoặc profile đang hoạt động). `@Profile` là một trường hợp sử dụng cụ thể, phổ biến của khái niệm `@Conditional` chung."
      }
    }
  },
  {
    _id: "sb-m-026",
    difficulty: "middle",
    tags: ["security", "filter", "chain"],
    content: {
      en: {
        title: "Adding Custom Security Filter",
        body: "When adding a custom filter (e.g., a JWT validation filter) to the Spring Security Filter Chain, which method of the `SecurityFilterChain` bean configuration should you use to specify the filter's **exact position** in the chain?",
        solution: "You should use the **`.addFilterBefore()`** or **`.addFilterAfter()`** methods (or sometimes `.addFilterAt()`) in the `HttpSecurity` configuration. This ensures your filter runs at the correct stage (e.g., before `UsernamePasswordAuthenticationFilter` or after `ExceptionTranslationFilter`)."
      },
      jp: {
        title: "カスタムセキュリティフィルターの追加",
        body: "Spring Securityフィルターチェーンにカスタムフィルター（例：JWT検証フィルター）を追加する場合、チェーン内のフィルターの**正確な位置**を指定するために、`SecurityFilterChain` Bean構成のどのメソッドを使用する必要がありますか？",
        solution: "`HttpSecurity`構成で**`.addFilterBefore()`**または**`.addFilterAfter()`**メソッド（または場合によっては`.addFilterAt()`）を使用する必要があります。これにより、フィルターが正しい段階で実行されることが保証されます（例：`UsernamePasswordAuthenticationFilter`の前、または`ExceptionTranslationFilter`の後）。"
      },
      vi: {
        title: "Thêm Custom Security Filter",
        body: "Khi thêm một filter tùy chỉnh (ví dụ: một filter xác thực JWT) vào Spring Security Filter Chain, bạn nên sử dụng phương thức nào của cấu hình bean `SecurityFilterChain` để chỉ định **vị trí chính xác** của filter trong chuỗi?",
        solution: "Bạn nên sử dụng các phương thức **`.addFilterBefore()`** hoặc **`.addFilterAfter()`** (hoặc đôi khi là `.addFilterAt()`) trong cấu hình `HttpSecurity`. Điều này đảm bảo filter của bạn chạy ở giai đoạn chính xác (ví dụ: trước `UsernamePasswordAuthenticationFilter` hoặc sau `ExceptionTranslationFilter`)."
      }
    }
  },
  {
    _id: "sb-m-027",
    difficulty: "middle",
    tags: ["data", "jpa", "transaction", "rollback"],
    content: {
      en: {
        title: "Manual Rollback",
        body: "If a business logic method catches a `RuntimeException` but needs to ensure the transaction is still rolled back, how can the developer manually force the rollback within the `@Transactional` method?",
        solution: "The developer can explicitly set the rollback-only flag by calling **`TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();`** (if using programmatic transaction management) or by **re-throwing the exception** or throwing a new, unchecked exception."
      },
      jp: {
        title: "手動ロールバック",
        body: "ビジネスロジックメソッドが`RuntimeException`をキャッチしたが、トランザクションがまだロールバックされることを保証する必要がある場合、開発者は`@Transactional`メソッド内で手動でロールバックを強制的に行うにはどうすればよいですか？",
        solution: "開発者は、**`TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();`**を呼び出すことによって（プログラムによるトランザクション管理を使用している場合）、または**例外を再スロー**するか、新しい非チェック例外をスローすることによって、ロールバックのみのフラグを明示的に設定できます。"
      },
      vi: {
        title: "Manual Rollback",
        body: "Nếu một phương thức logic nghiệp vụ bắt được một `RuntimeException` nhưng cần đảm bảo transaction vẫn bị rollback, làm thế nào developer có thể buộc rollback thủ công bên trong phương thức `@Transactional`?",
        solution: "Developer có thể đặt cờ rollback-only một cách rõ ràng bằng cách gọi **`TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();`** (nếu sử dụng quản lý transaction theo chương trình) hoặc bằng cách **ném lại (re-throwing) ngoại lệ** hoặc ném một ngoại lệ mới, unchecked exception."
      }
    }
  },
  {
    _id: "sb-m-028",
    difficulty: "middle",
    tags: ["ioc", "factory-method", "third-party"],
    content: {
      en: {
        title: "Third-Party Bean Configuration",
        body: "How do you typically configure a **third-party class** (which you cannot annotate with `@Component`) as a Spring Bean, and which method annotation is used?",
        solution: "You define a separate **`@Configuration`** class and declare a method that returns an instance of the third-party class, annotating that method with **`@Bean`**. The method contains the necessary instantiation and configuration logic for the object."
      },
      jp: {
        title: "サードパーティBeanの構成",
        body: "**サードパーティクラス**（`@Component`でアノテーションを付けられない）をSpring Beanとして通常どのように構成しますか、またどのメソッドアノテーションが使用されますか？",
        solution: "別の**`@Configuration`**クラスを定義し、サードパーティクラスのインスタンスを返すメソッドを宣言し、そのメソッドに**`@Bean`**でアノテーションを付けます。このメソッドには、オブジェクトに必要なインスタンス化と構成ロジックが含まれています。"
      },
      vi: {
        title: "Cấu hình Third-Party Bean",
        body: "Làm thế nào bạn thường cấu hình một **class bên thứ ba** (mà bạn không thể đánh dấu bằng `@Component`) như là một Spring Bean, và annotation phương thức nào được sử dụng?",
        solution: "Bạn định nghĩa một class **`@Configuration`** riêng biệt và khai báo một phương thức trả về một instance của class bên thứ ba, đánh dấu phương thức đó bằng **`@Bean`**. Phương thức này chứa logic khởi tạo và cấu hình cần thiết cho đối tượng."
      }
    }
  },
  {
    _id: "sb-m-029",
    difficulty: "middle",
    tags: ["data", "jpa", "criteria-api"],
    content: {
      en: {
        title: "Criteria API Root and CriteriaQuery",
        body: "In the JPA Criteria API, what is the role of the **`Root`** object and the **`CriteriaQuery`** object when constructing a query?",
        solution: "The **`Root`** object (e.g., `Root<Entity>`) represents the **main entity** from which the query starts; it is used to define paths to attributes and joins. The **`CriteriaQuery`** object is the **query builder** itself, used to specify the query elements like the selection (`select()`), predicates (`where()`), and grouping (`groupBy()`)."
      },
      jp: {
        title: "Criteria APIのRootとCriteriaQuery",
        body: "JPA Criteria APIにおいて、クエリを構築する際の**`Root`**オブジェクトと**`CriteriaQuery`**オブジェクトの役割は何ですか？",
        solution: "**`Root`**オブジェクト（例：`Root<Entity>`）は、クエリが開始する**メインエンティティ**を表します。属性へのパスと結合を定義するために使用されます。**`CriteriaQuery`**オブジェクトは**クエリビルダー**自体であり、選択（`select()`）、述語（`where()`）、およびグループ化（`groupBy()`）などのクエリ要素を指定するために使用されます。"
      },
      vi: {
        title: "Criteria API Root và CriteriaQuery",
        body: "Trong JPA Criteria API, vai trò của đối tượng **`Root`** và đối tượng **`CriteriaQuery`** khi xây dựng một truy vấn là gì?",
        solution: "Đối tượng **`Root`** (ví dụ: `Root<Entity>`) đại diện cho **entity chính** mà truy vấn bắt đầu; nó được sử dụng để định nghĩa các đường dẫn đến các thuộc tính và các join. Đối tượng **`CriteriaQuery`** là **trình xây dựng truy vấn** (query builder) đó, được sử dụng để chỉ định các phần tử truy vấn như lựa chọn (`select()`), vị từ (`where()`), và nhóm (`groupBy()`)."
      }
    }
  },
  {
    _id: "sb-m-030",
    difficulty: "middle",
    tags: ["microservices", "api-gateway", "security"],
    content: {
      en: {
        title: "API Gateway Pre-Authentication",
        body: "Explain how an API Gateway (like Spring Cloud Gateway) can be used to perform **pre-authentication** before forwarding a request to a downstream microservice, and what information is typically passed to the service.",
        solution: "The Gateway intercepts the request, validates the user's token (e.g., JWT). If valid, it extracts the authenticated user's details and **injects them into the HTTP headers** (e.g., `X-User-ID`, `X-User-Roles`) before forwarding the request to the downstream service. The downstream service then only needs to trust the Gateway and read these headers, skipping token re-validation."
      },
      jp: {
        title: "API Gatewayの事前認証",
        body: "API Gateway（Spring Cloud Gatewayなど）が、リクエストをダウンストリームマイクロサービスに転送する前に**事前認証**を実行するためにどのように使用できるか、また通常サービスに渡される情報は何であるかを説明してください。",
        solution: "Gatewayはリクエストをインターセプトし、ユーザーのトークン（例：JWT）を検証します。有効な場合、認証されたユーザーの詳細を抽出し、リクエストをダウンストリームサービスに転送する前に**HTTPヘッダーに注入**します（例：`X-User-ID`、`X-User-Roles`）。その後、ダウンストリームサービスはGatewayを信頼し、これらのヘッダーを読み取るだけでよく、トークンの再検証をスキップできます。"
      },
      vi: {
        title: "API Gateway Pre-Authentication",
        body: "Giải thích cách một API Gateway (như Spring Cloud Gateway) có thể được sử dụng để thực hiện **pre-authentication** (xác thực trước) trước khi chuyển tiếp một request đến một microservice phía sau, và thông tin nào thường được truyền đến service đó.",
        solution: "Gateway chặn request, xác thực token của người dùng (ví dụ: JWT). Nếu hợp lệ, nó trích xuất chi tiết người dùng đã được xác thực và **inject chúng vào các HTTP headers** (ví dụ: `X-User-ID`, `X-User-Roles`) trước khi chuyển tiếp request đến service phía sau. Service phía sau sau đó chỉ cần tin tưởng Gateway và đọc các header này, bỏ qua việc xác thực lại token."
      }
    }
  },
  {
    _id: "sb-m-031",
    difficulty: "middle",
    tags: ["messaging", "kafka", "producer"],
    content: {
      en: {
        title: "Spring Kafka Template",
        body: "In Spring Boot with Kafka, what is the purpose of the **`KafkaTemplate`** class, and what method does a Kafka producer typically use to send a message to a topic?",
        solution: "The **`KafkaTemplate`** simplifies sending messages to Kafka topics by providing a high-level API for producer operations. The producer typically uses the **`send(topic, key, value)`** method (or a similar overload) to asynchronously send a record to the specified Kafka topic."
      },
      jp: {
        title: "Spring Kafka Template",
        body: "Kafkaを使用したSpring Bootにおいて、**`KafkaTemplate`**クラスの目的は何ですか、またKafkaプロデューサーがトピックにメッセージを送信するために通常使用するメソッドは何ですか？",
        solution: "**`KafkaTemplate`**は、プロデューサー操作のための高レベルAPIを提供することにより、Kafkaトピックへのメッセージ送信を簡素化します。プロデューサーは通常、**`send(topic, key, value)`**メソッド（または同様のオーバーロード）を使用して、指定されたKafkaトピックにレコードを非同期で送信します。"
      },
      vi: {
        title: "Spring Kafka Template",
        body: "Trong Spring Boot với Kafka, mục đích của class **`KafkaTemplate`** là gì, và phương thức nào mà một Kafka producer thường sử dụng để gửi một tin nhắn đến một topic?",
        solution: "**`KafkaTemplate`** đơn giản hóa việc gửi tin nhắn đến các topic Kafka bằng cách cung cấp một API cấp cao cho các hoạt động của producer. Producer thường sử dụng phương thức **`send(topic, key, value)`** (hoặc một overload tương tự) để gửi một bản ghi một cách bất đồng bộ đến topic Kafka được chỉ định."
      }
    }
  },
  {
    _id: "sb-m-032",
    difficulty: "middle",
    tags: ["data", "jpa", "lock", "pessimistic"],
    content: {
      en: {
        title: "Pessimistic Locking",
        body: "How does **Pessimistic Locking** differ from Optimistic Locking in JPA, and which JPA lock mode is used to achieve it?",
        solution: "Pessimistic Locking assumes **conflicts are common** and **locks the database row immediately** upon reading the data, preventing other transactions from modifying or reading it until the current transaction commits or rolls back. It is achieved using the **`LockModeType.PESSIMISTIC_WRITE`** (or `PESSIMISTIC_READ`) when fetching the entity."
      },
      jp: {
        title: "悲観的ロック",
        body: "**悲観的ロック**はJPAの楽観的ロックとどのように異なりますか、またそれを実現するために使用されるJPAロックモードは何ですか？",
        solution: "悲観的ロックは**競合が一般的である**と想定し、データを読み取るとすぐに**データベースの行をロック**し、現在のトランザクションがコミットまたはロールバックされるまで、他のトランザクションがそれを変更したり読み取ったりするのを防ぎます。これは、エンティティをフェッチするときに**`LockModeType.PESSIMISTIC_WRITE`**（または`PESSIMISTIC_READ`）を使用して実現されます。"
      },
      vi: {
        title: "Pessimistic Locking",
        body: "**Pessimistic Locking** khác với Optimistic Locking trong JPA như thế nào, và chế độ khóa JPA nào được sử dụng để đạt được điều đó?",
        solution: "Pessimistic Locking giả định **xung đột là phổ biến** và **khóa hàng cơ sở dữ liệu ngay lập tức** khi đọc dữ liệu, ngăn các transaction khác sửa đổi hoặc đọc nó cho đến khi transaction hiện tại commit hoặc rollback. Nó đạt được bằng cách sử dụng **`LockModeType.PESSIMISTIC_WRITE`** (hoặc `PESSIMISTIC_READ`) khi fetch entity."
      }
    }
  },
  {
    _id: "sb-m-033",
    difficulty: "middle",
    tags: ["testing", "client", "webflux"],
    content: {
      en: {
        title: "WebTestClient vs MockMvc",
        body: "For testing Spring REST endpoints, when would you choose to use **`WebTestClient`** over **`MockMvc`**?",
        solution: "You would choose **`WebTestClient`** when testing **Spring WebFlux (reactive)** endpoints, as it is designed to work with reactive types like `Mono` and `Flux`. You use **`MockMvc`** when testing traditional **Spring MVC (Servlet API-based)** controllers."
      },
      jp: {
        title: "WebTestClientとMockMvc",
        body: "Spring RESTエンドポイントをテストする場合、**`MockMvc`**の代わりに**`WebTestClient`**を使用することを選択するのはいつですか？",
        solution: "**`WebTestClient`**は、`Mono`や`Flux`のようなリアクティブ型で動作するように設計されているため、**Spring WebFlux（リアクティブ）**エンドポイントをテストするときに選択します。従来の**Spring MVC（サーブレットAPIベース）**コントローラーをテストするときは**`MockMvc`**を使用します。"
      },
      vi: {
        title: "WebTestClient vs MockMvc",
        body: "Để kiểm thử các endpoint REST của Spring, khi nào bạn chọn sử dụng **`WebTestClient`** thay vì **`MockMvc`**?",
        solution: "Bạn sẽ chọn **`WebTestClient`** khi kiểm thử các endpoint **Spring WebFlux (reactive)**, vì nó được thiết kế để hoạt động với các kiểu reactive như `Mono` và `Flux`. Bạn sử dụng **`MockMvc`** khi kiểm thử các controller **Spring MVC (dựa trên Servlet API)** truyền thống."
      }
    }
  },
  {
    _id: "sb-m-034",
    difficulty: "middle",
    tags: ["ioc", "post-construct", "lifecycle"],
    content: {
      en: {
        title: "InitializingBean Interface",
        body: "Name the Spring interface that provides a callback method similar in timing and purpose to `@PostConstruct`, and what is the name of that method?",
        solution: "The interface is **`InitializingBean`**. The callback method is **`afterPropertiesSet()`**. It is called *after* all properties have been set (after DI is complete) but *before* the bean is made available for use, just like `@PostConstruct`."
      },
      jp: {
        title: "InitializingBeanインターフェース",
        body: "`@PostConstruct`と同様のタイミングと目的でコールバックメソッドを提供するSpringインターフェースの名前と、そのメソッドの名前は何ですか？",
        solution: "そのインターフェースは**`InitializingBean`**です。コールバックメソッドは**`afterPropertiesSet()`**です。これは、すべてのプロパティが設定された*後*（DIが完了した後）に呼び出されますが、Beanが使用可能になる*前*に呼び出されます。これは`@PostConstruct`と同様です。"
      },
      vi: {
        title: "InitializingBean Interface",
        body: "Nêu tên interface của Spring cung cấp một phương thức callback tương tự về thời điểm và mục đích với `@PostConstruct`, và tên của phương thức đó là gì?",
        solution: "Interface đó là **`InitializingBean`**. Phương thức callback là **`afterPropertiesSet()`**. Nó được gọi *sau khi* tất cả các thuộc tính đã được đặt (sau khi DI hoàn tất) nhưng *trước khi* bean sẵn sàng để sử dụng, giống như `@PostConstruct`."
      }
    }
  },
  {
    _id: "sb-m-035",
    difficulty: "middle",
    tags: ["data", "jpa", "specification"],
    content: {
      en: {
        title: "Specifications Composition",
        body: "In Spring Data JPA Specifications, how can you combine multiple criteria (e.g., condition A AND condition B) into a single, complex query dynamically?",
        solution: "You use the **`.and()`** or **`.or()`** methods provided by the `Specification` interface (or the underlying `CriteriaBuilder`) to compose complex queries. This allows dynamic combination of pre-defined specifications."
      },
      jp: {
        title: "Specificationの構成",
        body: "Spring Data JPA Specificationにおいて、複数の基準（例：条件A AND 条件B）を動的に単一の複雑なクエリに結合するにはどうすればよいですか？",
        solution: "`Specification`インターフェース（または基になる`CriteriaBuilder`）によって提供される**`.and()`**または**`.or()`**メソッドを使用して、複雑なクエリを構成します。これにより、事前定義されたSpecificationの動的な結合が可能になります。"
      },
      vi: {
        title: "Specifications Composition",
        body: "Trong Spring Data JPA Specifications, làm thế nào bạn có thể kết hợp nhiều tiêu chí (ví dụ: điều kiện A AND điều kiện B) thành một truy vấn phức tạp, duy nhất một cách động?",
        solution: "Bạn sử dụng các phương thức **`.and()`** hoặc **`.or()`** được cung cấp bởi interface `Specification` (hoặc `CriteriaBuilder` cơ bản) để kết hợp các truy vấn phức tạp. Điều này cho phép kết hợp động các specification đã được định nghĩa trước."
      }
    }
  },
  {
    _id: "sb-m-036",
    difficulty: "middle",
    tags: ["actuator", "tracing", "baggage"],
    content: {
      en: {
        title: "Distributed Tracing Baggage",
        body: "In Distributed Tracing (like Sleuth/OpenTelemetry), what is **Baggage**, and why is it used?",
        solution: "Baggage refers to **application-specific context data** (e.g., user ID, tenant ID, or A/B test group) that is propagated **invisibly across services** along with the Trace ID and Span ID. It is used to enrich logs or metrics with business context without being part of the core tracing mechanism itself."
      },
      jp: {
        title: "分散トレーシングのBaggage",
        body: "分散トレーシング（Sleuth/OpenTelemetryなど）において、**Baggage**とは何ですか、またそれが使用される理由は何ですか？",
        solution: "Baggageとは、トレースIDおよびスパンIDとともに、**サービス間で目に見えない形で伝播される**、**アプリケーション固有のコンテキストデータ**（例：ユーザーID、テナントID、A/Bテストグループ）を指します。これは、コアトレーシングメカニズム自体の一部ではないビジネスコンテキストでログやメトリクスを充実させるために使用されます。"
      },
      vi: {
        title: "Distributed Tracing Baggage",
        body: "Trong Distributed Tracing (như Sleuth/OpenTelemetry), **Baggage** là gì, và tại sao nó được sử dụng?",
        solution: "Baggage đề cập đến **dữ liệu ngữ cảnh dành riêng cho ứng dụng** (ví dụ: ID người dùng, ID tenant, hoặc nhóm thử nghiệm A/B) được truyền đi **một cách vô hình giữa các service** cùng với Trace ID và Span ID. Nó được sử dụng để làm phong phú thêm nhật ký hoặc metric bằng ngữ cảnh nghiệp vụ mà không phải là một phần của cơ chế tracing cốt lõi."
      }
    }
  },
  {
    _id: "sb-m-037",
    difficulty: "middle",
    tags: ["data", "jpa", "projection", "dynamic"],
    content: {
      en: {
        title: "Dynamic Projection",
        body: "In Spring Data JPA, how can you implement a **Dynamic Projection** to allow the client to specify which fields they want to receive (e.g., based on a query parameter)?",
        solution: "You can define your repository method to accept the type to project to (either an interface or DTO) as a **generic parameter**. For example: `findByName(String name, Class<T> projectionType)`. The actual projection type is passed at runtime, and Spring Data handles the optimization."
      },
      jp: {
        title: "動的プロジェクション",
        body: "Spring Data JPAにおいて、クライアントが受け取りたいフィールドを指定できるように（例：クエリパラメーターに基づいて）**動的プロジェクション**をどのように実装できますか？",
        solution: "プロジェクションする型（インターフェースまたはDTOのいずれか）を**ジェネリックパラメーター**として受け入れるようにリポジトリメソッドを定義できます。例: `findByName(String name, Class<T> projectionType)`。実際のプロジェクション型は実行時に渡され、Spring Dataが最適化を処理します。"
      },
      vi: {
        title: "Dynamic Projection",
        body: "Trong Spring Data JPA, làm thế nào bạn có thể implement một **Dynamic Projection** để cho phép client chỉ định các trường họ muốn nhận (ví dụ: dựa trên một query parameter)?",
        solution: "Bạn có thể định nghĩa phương thức repository của mình để chấp nhận kiểu mà nó sẽ project tới (là một interface hoặc DTO) dưới dạng **tham số chung (generic parameter)**. Ví dụ: `findByName(String name, Class<T> projectionType)`. Kiểu projection thực tế được truyền vào thời điểm chạy, và Spring Data xử lý việc tối ưu hóa."
      }
    }
  },
  {
    _id: "sb-m-038",
    difficulty: "middle",
    tags: ["rest", "exception-handling", "response"],
    content: {
      en: {
        title: "Problem Detail RFC 7807",
        body: "For robust REST API error handling, the **RFC 7807 (Problem Details for HTTP APIs)** standard is often adopted. What are the five key fields defined by this standard for returning rich error information?",
        solution: "The five key fields are: **`type`** (URI to a document describing the error), **`title`** (short summary), **`status`** (HTTP status code), **`detail`** (human-readable explanation), and **`instance`** (URI of the occurrence). Spring Boot 3+ can automatically map exceptions to this format."
      },
      jp: {
        title: "RFC 7807の問題の詳細",
        body: "堅牢なREST APIエラー処理のために、**RFC 7807（HTTP APIの問題の詳細）**標準がよく採用されます。この標準によって定義されている、リッチなエラー情報を返すための5つの主要なフィールドは何ですか？",
        solution: "5つの主要なフィールドは、**`type`**（エラーを説明するドキュメントへのURI）、**`title`**（短い要約）、**`status`**（HTTPステータスコード）、**`detail`**（人間が読める説明）、および**`instance`**（発生のURI）です。Spring Boot 3+は、例外をこの形式に自動的にマッピングできます。"
      },
      vi: {
        title: "Problem Detail RFC 7807",
        body: "Để xử lý lỗi API REST mạnh mẽ, tiêu chuẩn **RFC 7807 (Problem Details for HTTP APIs)** thường được áp dụng. Năm trường chính được tiêu chuẩn này định nghĩa để trả về thông tin lỗi phong phú là gì?",
        solution: "Năm trường chính là: **`type`** (URI đến một tài liệu mô tả lỗi), **`title`** (tóm tắt ngắn), **`status`** (mã trạng thái HTTP), **`detail`** (giải thích dễ đọc), và **`instance`** (URI của lần xảy ra lỗi). Spring Boot 3+ có thể tự động ánh xạ các ngoại lệ sang định dạng này."
      }
    }
  },
  {
    _id: "sb-m-039",
    difficulty: "middle",
    tags: ["scheduling", "task", "thread"],
    content: {
      en: {
        title: "Scheduled Task Concurrency",
        body: "By default, how does Spring Boot execute multiple `@Scheduled` tasks in terms of concurrency, and how can you configure it to use a fixed-size **thread pool**?",
        solution: "By default, Spring Boot executes scheduled tasks **sequentially** using a single-threaded executor. To use a fixed-size thread pool for concurrency, you must configure the **`spring.task.scheduling.pool.size`** property (e.g., `spring.task.scheduling.pool.size=10`)."
      },
      jp: {
        title: "スケジュールされたタスクの並行性",
        body: "デフォルトでは、Spring Bootは複数の`@Scheduled`タスクを並行性の観点からどのように実行しますか、また固定サイズの**スレッドプール**を使用するように構成するにはどうすればよいですか？",
        solution: "デフォルトでは、Spring Bootは単一スレッドのエグゼキュータを使用してスケジュールされたタスクを**順番に**実行します。並行性のために固定サイズのスレッドプールを使用するには、**`spring.task.scheduling.pool.size`**プロパティ（例：`spring.task.scheduling.pool.size=10`）を構成する必要があります。"
      },
      vi: {
        title: "Scheduled Task Concurrency",
        body: "Theo mặc định, Spring Boot thực thi nhiều tác vụ `@Scheduled` như thế nào về mặt đồng thời, và làm thế nào bạn có thể cấu hình nó để sử dụng một **thread pool** với kích thước cố định?",
        solution: "Theo mặc định, Spring Boot thực thi các tác vụ đã lên lịch **tuần tự** bằng cách sử dụng một executor đơn luồng. Để sử dụng một thread pool có kích thước cố định cho tính đồng thời, bạn phải cấu hình thuộc tính **`spring.task.scheduling.pool.size`** (ví dụ: `spring.task.scheduling.pool.size=10`)."
      }
    }
  },
  {
    _id: "sb-m-040",
    difficulty: "middle",
    tags: ["security", "csrf", "stateless"],
    content: {
      en: {
        title: "Disabling CSRF in REST",
        body: "Why is it generally acceptable (and common) to **disable CSRF protection** in Spring Security for a **stateless REST API** that uses JWT/OAuth2 tokens for authentication?",
        solution: "CSRF (Cross-Site Request Forgery) protection is primarily designed to protect stateful sessions (cookie-based authentication). When using a **stateless API** with **Token-based authentication** (JWT/OAuth2) where the token is stored in `Authorization` headers (not cookies), the browser's automatic inclusion of cookies is irrelevant, making the API generally immune to CSRF, so the protection can be safely disabled."
      },
      jp: {
        title: "RESTでのCSRFの無効化",
        body: "認証にJWT/OAuth2トークンを使用する**ステートレスREST API**の場合、Spring Securityで**CSRF保護を無効にする**ことが一般的に許容される（そして一般的である）のはなぜですか？",
        solution: "CSRF（Cross-Site Request Forgery）保護は、主にステートフルなセッション（Cookieベースの認証）を保護するように設計されています。トークンが`Authorization`ヘッダーに保存されている（Cookieではない）**トークンベースの認証**を使用する**ステートレスAPI**を使用する場合、ブラウザによるCookieの自動的な組み込みは無関係になり、APIは一般的にCSRFの影響を受けないため、保護を安全に無効にできます。"
      },
      vi: {
        title: "Vô hiệu hóa CSRF trong REST",
        body: "Tại sao việc **vô hiệu hóa CSRF protection** trong Spring Security đối với một **API REST stateless** sử dụng token JWT/OAuth2 để xác thực lại thường được chấp nhận (và phổ biến)?",
        solution: "Bảo vệ CSRF (Cross-Site Request Forgery) chủ yếu được thiết kế để bảo vệ các session có trạng thái (xác thực dựa trên cookie). Khi sử dụng một **API stateless** với **xác thực dựa trên Token** (JWT/OAuth2) trong đó token được lưu trữ trong các header `Authorization` (không phải cookie), việc trình duyệt tự động đưa cookie vào là không liên quan, làm cho API nói chung miễn nhiễm với CSRF, vì vậy sự bảo vệ có thể được tắt một cách an toàn."
      }
    }
  },
  {
    _id: "sb-m-041",
    difficulty: "middle",
    tags: ["ioc", "postprocessor", "factory"],
    content: {
      en: {
        title: "BeanFactoryPostProcessor Role",
        body: "What is the key difference in timing and scope between a **`BeanPostProcessor`** and a **`BeanFactoryPostProcessor`**?",
        solution: "A **`BeanFactoryPostProcessor`** runs **before** any Spring Beans have been instantiated. Its role is to **modify the configuration metadata** (the definition of the beans) in the `BeanFactory`. A **`BeanPostProcessor`** runs **after** beans have been instantiated and is used to modify the *actual bean instance*."
      },
      jp: {
        title: "BeanFactoryPostProcessorの役割",
        body: "**`BeanPostProcessor`**と**`BeanFactoryPostProcessor`**のタイミングとスコープにおける主な違いは何ですか？",
        solution: "**`BeanFactoryPostProcessor`**は、Spring Beanがインスタンス化される**前**に実行されます。その役割は、`BeanFactory`内の**構成メタデータ**（Beanの定義）を**変更する**ことです。**`BeanPostProcessor`**は、Beanがインスタンス化された**後**に実行され、*実際のBeanインスタンス*を変更するために使用されます。"
      },
      vi: {
        title: "Vai trò BeanFactoryPostProcessor",
        body: "Sự khác biệt chính về thời điểm và phạm vi giữa **`BeanPostProcessor`** và **`BeanFactoryPostProcessor`** là gì?",
        solution: "Một **`BeanFactoryPostProcessor`** chạy **trước khi** bất kỳ Spring Bean nào được khởi tạo. Vai trò của nó là **sửa đổi metadata cấu hình** (định nghĩa của các bean) trong `BeanFactory`. Một **`BeanPostProcessor`** chạy **sau khi** các bean đã được khởi tạo và được sử dụng để sửa đổi *instance bean thực tế*."
      }
    }
  },
  {
    _id: "sb-m-042",
    difficulty: "middle",
    tags: ["rest", "async", "webflux"],
    content: {
      en: {
        title: "DeferredResult vs Callable",
        body: "In Spring MVC (not WebFlux), what is the difference between returning a **`DeferredResult`** and a **`Callable`** from a controller method for asynchronous request processing?",
        solution: "Both enable asynchronous processing to free up the Servlet container thread immediately. A **`Callable`** executes the business logic on a thread managed by Spring's task executor, while a **`DeferredResult`** is useful when the result is produced by an **external service or message broker**, allowing the thread to return the result when it becomes available."
      },
      jp: {
        title: "DeferredResultとCallableの違い",
        body: "Spring MVC（WebFluxではない）において、非同期リクエスト処理のためにコントローラーメソッドから**`DeferredResult`**と**`Callable`**を返すことの違いは何ですか？",
        solution: "どちらも、サーブレットコンテナスレッドをすぐに解放するために非同期処理を可能にします。**`Callable`**は、Springのタスクエグゼキュータによって管理されるスレッドでビジネスロジックを実行しますが、**`DeferredResult`**は、結果が**外部サービスまたはメッセージブローカー**によって生成される場合に役立ち、結果が利用可能になったときにスレッドが結果を返すことを可能にします。"
      },
      vi: {
        title: "DeferredResult vs Callable",
        body: "Trong Spring MVC (không phải WebFlux), sự khác biệt giữa việc trả về một **`DeferredResult`** và một **`Callable`** từ một phương thức controller cho xử lý request bất đồng bộ là gì?",
        solution: "Cả hai đều cho phép xử lý bất đồng bộ để giải phóng thread của Servlet container ngay lập tức. Một **`Callable`** thực thi logic nghiệp vụ trên một thread được quản lý bởi task executor của Spring, trong khi một **`DeferredResult`** hữu ích khi kết quả được tạo ra bởi một **service bên ngoài hoặc message broker**, cho phép thread trả về kết quả khi nó sẵn sàng."
      }
    }
  },
  {
    _id: "sb-m-043",
    difficulty: "middle",
    tags: ["data", "jpa", "batch"],
    content: {
      en: {
        title: "Batch Inserts/Updates Optimization",
        body: "When performing bulk inserts or updates (batch processing) with Hibernate/JPA, what two configuration properties must you set in `application.properties` to enable and optimize JDBC batching?",
        solution: "You must set: 1. **`spring.jpa.properties.hibernate.jdbc.batch_size`** (e.g., to 50) to tell Hibernate how many operations to group. 2. **`spring.jpa.properties.hibernate.jdbc.batch_versioned_data`** (to `true` or `false` depending on the entity, but often `true`). You should also typically disable `spring.jpa.properties.hibernate.order_inserts`."
      },
      jp: {
        title: "バッチ挿入/更新の最適化",
        body: "Hibernate/JPAで一括挿入または更新（バッチ処理）を実行する場合、JDBCバッチ処理を有効にして最適化するために、`application.properties`で設定する必要がある2つの構成プロパティは何ですか？",
        solution: "設定する必要があるのは次のとおりです。1. **`spring.jpa.properties.hibernate.jdbc.batch_size`**（例：50）で、Hibernateにグループ化する操作の数を伝えます。2. **`spring.jpa.properties.hibernate.jdbc.batch_versioned_data`**（エンティティに応じて`true`または`false`に設定しますが、多くの場合`true`）。また、通常、`spring.jpa.properties.hibernate.order_inserts`を無効にする必要があります。"
      },
      vi: {
        title: "Tối ưu hóa Batch Inserts/Updates",
        body: "Khi thực hiện chèn hoặc cập nhật hàng loạt (batch processing) với Hibernate/JPA, hai thuộc tính cấu hình nào bạn phải đặt trong `application.properties` để bật và tối ưu hóa batching JDBC?",
        solution: "Bạn phải đặt: 1. **`spring.jpa.properties.hibernate.jdbc.batch_size`** (ví dụ: thành 50) để cho Hibernate biết cần nhóm bao nhiêu thao tác. 2. **`spring.jpa.properties.hibernate.jdbc.batch_versioned_data`** (thành `true` hoặc `false` tùy thuộc vào entity, nhưng thường là `true`). Bạn cũng thường nên tắt `spring.jpa.properties.hibernate.order_inserts`."
      }
    }
  },
  {
    _id: "sb-m-044",
    difficulty: "middle",
    tags: ["rest", "rate-limiting", "gateway"],
    content: {
      en: {
        title: "Rate Limiting Algorithm",
        body: "When implementing **rate limiting** in an API Gateway (or a service filter), name one common algorithm used to track and restrict the number of requests per user/client over a defined time window.",
        solution: "Common algorithms include: **Leaky Bucket** (requests leak out at a fixed rate, controlling burstiness), **Token Bucket** (tokens are added at a fixed rate, requests consume tokens), or **Fixed Window Counter** (simplest, but can lead to burstiness at the window edges)."
      },
      jp: {
        title: "レート制限アルゴリズム",
        body: "API Gateway（またはサービスフィルター）で**レート制限**を実装する場合、定義された時間枠内でユーザー/クライアントごとのリクエスト数を追跡および制限するために使用される一般的なアルゴリズムを1つ挙げてください。",
        solution: "一般的なアルゴリズムには、**リーキーバケット**（リクエストが固定レートで漏れ出し、バースト性を制御）、**トークンバケット**（トークンが固定レートで追加され、リクエストがトークンを消費）、または**固定ウィンドウカウンター**（最も単純ですが、ウィンドウの端でバースト性につながる可能性がある）があります。"
      },
      vi: {
        title: "Rate Limiting Algorithm",
        body: "Khi implement **rate limiting** trong một API Gateway (hoặc một service filter), nêu tên một thuật toán phổ biến được sử dụng để theo dõi và hạn chế số lượng request trên mỗi người dùng/client trong một khoảng thời gian xác định.",
        solution: "Các thuật toán phổ biến bao gồm: **Leaky Bucket** (các request rò rỉ ra ngoài với tốc độ cố định, kiểm soát sự bùng nổ), **Token Bucket** (các token được thêm vào với tốc độ cố định, các request tiêu thụ token), hoặc **Fixed Window Counter** (đơn giản nhất, nhưng có thể dẫn đến sự bùng nổ ở các cạnh cửa sổ)."
      }
    }
  },
  {
    _id: "sb-m-045",
    difficulty: "middle",
    tags: ["actuator", "cache", "jmx"],
    content: {
      en: {
        title: "Actuator Cache Management",
        body: "Which Actuator endpoint would you use to view the statistics and configuration of active caches (e.g., Caffeine, Redis) used by your application?",
        solution: "The **`/actuator/caches`** endpoint. It allows you to see the details of all cache managers and individual caches, including hit ratios and memory usage, and sometimes allows manipulation (e.g., clearing the cache)."
      },
      jp: {
        title: "Actuatorキャッシュ管理",
        body: "アプリケーションで使用されているアクティブなキャッシュ（例：Caffeine、Redis）の統計と構成を表示するために使用するActuatorエンドポイントは何ですか？",
        solution: "**/actuator/caches**エンドポイントです。ヒット率やメモリ使用量など、すべてのキャッシュマネージャーと個々のキャッシュの詳細を表示でき、場合によっては操作（例：キャッシュのクリア）も可能です。"
      },
      vi: {
        title: "Actuator Cache Management",
        body: "Bạn sẽ sử dụng endpoint Actuator nào để xem số liệu thống kê và cấu hình của các cache đang hoạt động (ví dụ: Caffeine, Redis) được ứng dụng của bạn sử dụng?",
        solution: "Endpoint **`/actuator/caches`**. Nó cho phép bạn xem chi tiết của tất cả các cache manager và các cache riêng lẻ, bao gồm tỷ lệ hit và mức sử dụng bộ nhớ, và đôi khi cho phép thao tác (ví dụ: xóa cache)."
      }
    }
  },
  {
    _id: "sb-m-046",
    difficulty: "middle",
    tags: ["data", "jpa", "fetch-join"],
    content: {
      en: {
        title: "Collection Fetch Join Limitation",
        body: "When using `JOIN FETCH` to eagerly load a one-to-many relationship (a Collection) in JPQL/HQL, what side effect does this often have on the size of the result set returned by the database?",
        solution: "It causes a **Cartesian Product** effect, or result set duplication. Because the database joins the parent row with every child row, the parent entity appears multiple times in the raw result set. Hibernate handles the deduplication in memory, but it still leads to **more data being transferred** from the database than necessary."
      },
      jp: {
        title: "コレクションフェッチ結合の制限",
        body: "JPQL/HQLで1対多の関係（コレクション）をEagerにロードするために`JOIN FETCH`を使用する場合、これはデータベースによって返される結果セットのサイズにどのような副作用をもたらすことが多いですか？",
        solution: "これは**デカルト積**効果、つまり結果セットの重複を引き起こします。データベースが親行をすべての子行と結合するため、親エンティティは生の**結果セットに複数回出現**します。Hibernateはメモリ内で重複排除を処理しますが、それでも**必要以上のデータがデータベースから転送される**ことにつながります。"
      },
      vi: {
        title: "Hạn chế Collection Fetch Join",
        body: "Khi sử dụng `JOIN FETCH` để tải ngay lập tức (eagerly load) một mối quan hệ một-nhiều (một Collection) trong JPQL/HQL, tác dụng phụ nào thường xảy ra đối với kích thước của tập kết quả được trả về bởi cơ sở dữ liệu?",
        solution: "Nó gây ra hiệu ứng **Tích Descartes (Cartesian Product)**, hay sự trùng lặp tập kết quả. Bởi vì cơ sở dữ liệu join hàng cha với mọi hàng con, entity cha xuất hiện nhiều lần trong tập kết quả thô. Hibernate xử lý việc loại bỏ trùng lặp trong bộ nhớ, nhưng nó vẫn dẫn đến việc **truyền nhiều dữ liệu hơn mức cần thiết** từ cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sb-m-047",
    difficulty: "middle",
    tags: ["data", "transaction", "propagation"],
    content: {
      en: {
        title: "Propagation.NESTED",
        body: "In a method call scenario, how does `Propagation.NESTED` differ from `Propagation.REQUIRED`?",
        solution: "Both run within the parent transaction if one exists. The key difference is rollback behavior: `REQUIRED` shares the parent transaction, so a rollback in the child rolls back the parent. `NESTED` uses a **database savepoint**; a rollback in the child only rolls back the nested changes up to the savepoint, and the **parent can choose to continue or commit** its work."
      },
      jp: {
        title: "Propagation.NESTED",
        body: "メソッド呼び出しのシナリオにおいて、`Propagation.NESTED`は`Propagation.REQUIRED`とどのように異なりますか？",
        solution: "どちらも、親トランザクションが存在する場合はその中で実行されます。主な違いはロールバックの動作です。`REQUIRED`は親トランザクションを共有するため、子でのロールバックは親をロールバックします。`NESTED`は**データベースのセーブポイント**を使用します。子でのロールバックはセーブポイントまでのネストされた変更のみをロールバックし、**親はその作業を続行またはコミット**するかを選択できます。"
      },
      vi: {
        title: "Propagation.NESTED",
        body: "Trong một kịch bản gọi phương thức, `Propagation.NESTED` khác với `Propagation.REQUIRED` như thế nào?",
        solution: "Cả hai đều chạy trong transaction cha nếu có một transaction tồn tại. Sự khác biệt chính là hành vi rollback: `REQUIRED` chia sẻ transaction cha, vì vậy một rollback trong transaction con sẽ rollback transaction cha. `NESTED` sử dụng một **savepoint của cơ sở dữ liệu**; một rollback trong transaction con chỉ rollback các thay đổi lồng nhau cho đến savepoint, và **transaction cha có thể chọn tiếp tục hoặc commit** công việc của nó."
      }
    }
  },
  {
    _id: "sb-m-048",
    difficulty: "middle",
    tags: ["microservices", "config-server", "git"],
    content: {
      en: {
        title: "Spring Cloud Config Server Role",
        body: "In a microservices setup, what is the role of the **Spring Cloud Config Server**, and which external version control system is typically used as its backend?",
        solution: "The Config Server provides a **centralized location** for managing external configuration properties (e.g., database URLs, connection details) across all microservices. This decouples configuration from the application code. It typically uses **Git** as the backend repository to store the configuration files, allowing versioning and hot updates."
      },
      jp: {
        title: "Spring Cloud Config Serverの役割",
        body: "マイクロサービスのセットアップにおいて、**Spring Cloud Config Server**の役割は何ですか、またそのバックエンドとして通常使用される外部バージョン管理システムは何ですか？",
        solution: "Config Serverは、すべてのマイクロサービス間で外部構成プロパティ（例：データベースURL、接続詳細）を管理するための**一元化された場所**を提供します。これにより、構成がアプリケーションコードから切り離されます。通常、構成ファイルを保存するためにバックエンドリポジトリとして**Git**を使用し、バージョン管理とホットアップデートを可能にします。"
      },
      vi: {
        title: "Vai trò Spring Cloud Config Server",
        body: "Trong một thiết lập microservices, vai trò của **Spring Cloud Config Server** là gì, và hệ thống kiểm soát phiên bản bên ngoài nào thường được sử dụng làm backend của nó?",
        solution: "Config Server cung cấp một **vị trí tập trung** để quản lý các thuộc tính cấu hình bên ngoài (ví dụ: URL cơ sở dữ liệu, chi tiết kết nối) trên tất cả các microservices. Điều này tách cấu hình khỏi mã ứng dụng. Nó thường sử dụng **Git** làm repository backend để lưu trữ các file cấu hình, cho phép tạo phiên bản và cập nhật nóng."
      }
    }
  },
  {
    _id: "sb-m-049",
    difficulty: "middle",
    tags: ["testing", "client", "mock"],
    content: {
      en: {
        title: "RestTemplate vs WebClient Testing",
        body: "When unit testing a service that uses **`WebClient`** to make an external call, how is the mocking approach different from testing a service that uses **`RestTemplate`** (which often uses `MockRestServiceServer`)?",
        solution: "For **`RestTemplate`**, you typically use **`MockRestServiceServer`** to define expected requests and return mock responses globally. For **`WebClient`** (reactive), the **`WebClient.Builder`** instance is often configured in the test to use a custom, mock `ExchangeFunction` or you use **`MockWebServer`** (Square) to simulate the server itself, allowing for non-blocking mock responses."
      },
      jp: {
        title: "RestTemplateとWebClientのテスト",
        body: "外部呼び出しを行うために**`WebClient`**を使用するサービスの単体テストを行う場合、モックアプローチは**`RestTemplate`**を使用するサービス（`MockRestServiceServer`をよく使用する）のテストとどのように異なりますか？",
        solution: "**`RestTemplate`**の場合、通常、**`MockRestServiceServer`**を使用して、期待されるリクエストを定義し、グローバルにモック応答を返します。**`WebClient`**（リアクティブ）の場合、**`WebClient.Builder`**インスタンスは、カスタムのモック`ExchangeFunction`を使用するようにテストで構成されるか、または**`MockWebServer`**（Square）を使用してサーバー自体をシミュレートし、非ブロッキングモック応答を可能にします。"
      },
      vi: {
        title: "RestTemplate vs WebClient Testing",
        body: "Khi unit test một service sử dụng **`WebClient`** để thực hiện một lời gọi bên ngoài, phương pháp mocking khác với việc kiểm thử một service sử dụng **`RestTemplate`** (thường sử dụng `MockRestServiceServer`) như thế nào?",
        solution: "Đối với **`RestTemplate`**, bạn thường sử dụng **`MockRestServiceServer`** để định nghĩa các request dự kiến và trả về các mock response một cách toàn cục. Đối với **`WebClient`** (reactive), instance **`WebClient.Builder`** thường được cấu hình trong bài kiểm thử để sử dụng một `ExchangeFunction` tùy chỉnh, mock, hoặc bạn sử dụng **`MockWebServer`** (Square) để mô phỏng chính server, cho phép các mock response không chặn."
      }
    }
  },
  {
    _id: "sb-m-050",
    difficulty: "middle",
    tags: ["ioc", "events", "listener"],
    content: {
      en: {
        title: "Spring Application Event Listener",
        body: "How can you implement a simple, synchronous listener in Spring Boot to react to application events (e.g., a custom `UserRegisteredEvent`) without implementing an interface, and which annotation is used?",
        solution: "You implement a method in any Spring Bean and annotate it with **`@EventListener`**. The method signature should accept the event object as a parameter. Spring automatically finds and invokes this method when an application publishes an event matching the parameter type."
      },
      jp: {
        title: "Springアプリケーションイベントリスナー",
        body: "インターフェースを実装せずに、アプリケーションイベント（例：カスタム`UserRegisteredEvent`）に反応するシンプルで同期的なリスナーをSpring Bootでどのように実装できますか、また使用されるアノテーションは何ですか？",
        solution: "任意のSpring Beanでメソッドを実装し、それに**`@EventListener`**でアノテーションを付けます。メソッドのシグネチャは、イベントオブジェクトをパラメーターとして受け入れる必要があります。Springは、パラメーター型と一致するアプリケーションイベントが公開されたときに、このメソッドを自動的に見つけて呼び出します。"
      },
      vi: {
        title: "Spring Application Event Listener",
        body: "Làm thế nào bạn có thể implement một listener đơn giản, đồng bộ trong Spring Boot để phản ứng với các sự kiện ứng dụng (ví dụ: một `UserRegisteredEvent` tùy chỉnh) mà không cần implement một interface, và annotation nào được sử dụng?",
        solution: "Bạn implement một phương thức trong bất kỳ Spring Bean nào và đánh dấu nó bằng **`@EventListener`**. Chữ ký phương thức phải chấp nhận đối tượng sự kiện làm tham số. Spring tự động tìm và gọi phương thức này khi một ứng dụng publish một sự kiện khớp với kiểu tham số."
      }
    }
  }
];
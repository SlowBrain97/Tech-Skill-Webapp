export const springBootJuniorQuestions = [
  {
    _id: "sb-j-001",
    difficulty: "junior",
    tags: ["ioc", "post-construct", "lifecycle"],
    content: {
      en: {
        title: "@PostConstruct vs Constructor",
        body: "What is the primary difference in timing and use between initializing a bean using its constructor and using a method annotated with **@PostConstruct**?",
        solution: "The **constructor** runs when the object instance is created, *before* any dependencies are injected. A method annotated with **@PostConstruct** runs *after* the bean has been fully constructed and all **dependencies have been injected** by the Spring Container. It's used for setup that requires dependencies."
      },
      jp: {
        title: "@PostConstructとコンストラクタの違い",
        body: "Beanをコンストラクタを使用して初期化することと、**@PostConstruct**アノテーションが付けられたメソッドを使用することの、タイミングと使用法の主な違いは何ですか？",
        solution: "**コンストラクタ**は、依存関係が注入される*前*に、オブジェクトインスタンスが作成されたときに実行されます。**@PostConstruct**アノテーションが付けられたメソッドは、Beanが完全に構築され、Springコンテナによってすべての**依存関係が注入された*後***に実行されます。これは、依存関係を必要とするセットアップに使用されます。"
      },
      vi: {
        title: "@PostConstruct và Constructor",
        body: "Sự khác biệt chính về thời điểm và mục đích sử dụng giữa việc khởi tạo một bean bằng constructor của nó và bằng một phương thức được đánh dấu **@PostConstruct** là gì?",
        solution: "**Constructor** chạy khi instance đối tượng được tạo, *trước khi* bất kỳ dependency nào được inject. Phương thức được đánh dấu **@PostConstruct** chạy *sau khi* bean đã được xây dựng hoàn toàn và tất cả **các dependency đã được Spring Container inject**. Nó được sử dụng cho các thiết lập cần đến dependency."
      }
    }
  },
  {
    _id: "sb-j-002",
    difficulty: "junior",
    tags: ["data", "jpa", "query"],
    content: {
      en: {
        title: "@Query Annotation",
        body: "When is it necessary to use the **@Query** annotation on a Spring Data JPA Repository method, rather than relying on Derived Query Methods?",
        solution: "The **@Query** annotation is necessary when the required query is **too complex** for Spring Data to derive from the method name alone, or when you need to write a **native SQL query** (using the `nativeQuery = true` parameter) that standard JPA/JPQL cannot easily express."
      },
      jp: {
        title: "@Queryアノテーション",
        body: "導出クエリメソッドに頼るのではなく、Spring Data JPAリポジトリメソッドで**@Query**アノテーションを使用する必要があるのはいつですか？",
        solution: "**@Query**アノテーションは、要求されるクエリがSpring Dataがメソッド名だけで導出するには**複雑すぎる**場合、または標準のJPA/JPQLでは簡単に表現できない**ネイティブSQLクエリ**（`nativeQuery = true`パラメーターを使用）を記述する必要がある場合に必要です。"
      },
      vi: {
        title: "Annotation @Query",
        body: "Khi nào cần thiết phải sử dụng annotation **@Query** trên một phương thức Spring Data JPA Repository, thay vì dựa vào Derived Query Methods?",
        solution: "Annotation **@Query** là cần thiết khi truy vấn yêu cầu **quá phức tạp** để Spring Data có thể suy ra từ tên phương thức, hoặc khi bạn cần viết một **native SQL query** (sử dụng tham số `nativeQuery = true`) mà JPA/JPQL chuẩn không thể dễ dàng biểu diễn."
      }
    }
  },
  {
    _id: "sb-j-003",
    difficulty: "junior",
    tags: ["data", "transaction", "propagation"],
    content: {
      en: {
        title: "Transaction Propagation Default",
        body: "What is the **default transaction propagation level** when using the `@Transactional` annotation without specifying a propagation value, and what does this level mean?",
        solution: "The default is **Propagation.REQUIRED**. This means that if a transaction already exists, the method will execute within that existing transaction. If no transaction exists, a new one will be created."
      },
      jp: {
        title: "トランザクション伝播のデフォルト",
        body: "伝播値を指定せずに`@Transactional`アノテーションを使用する場合の**デフォルトのトランザクション伝播レベル**は何ですか、またこのレベルは何を意味しますか？",
        solution: "デフォルトは**Propagation.REQUIRED**です。これは、トランザクションが既に存在する場合、メソッドはその既存のトランザクション内で実行されることを意味します。トランザクションが存在しない場合は、新しいトランザクションが作成されます。"
      },
      vi: {
        title: "Mức Propagation Mặc định",
        body: "Mức **transaction propagation mặc định** khi sử dụng annotation `@Transactional` mà không chỉ định giá trị propagation là gì, và mức này có ý nghĩa gì?",
        solution: "Mặc định là **Propagation.REQUIRED**. Điều này có nghĩa là nếu một transaction đã tồn tại, phương thức sẽ thực thi bên trong transaction hiện có đó. Nếu không có transaction nào tồn tại, một transaction mới sẽ được tạo."
      }
    }
  },
  {
    _id: "sb-j-004",
    difficulty: "junior",
    tags: ["security", "filter-chain"],
    content: {
      en: {
        title: "Spring Security Filter Chain",
        body: "What is the role of the **Spring Security Filter Chain** in processing an incoming request, and why is the order of filters important?",
        solution: "The Filter Chain is a series of servlet filters that handle security concerns (e.g., authentication, authorization, CSRF protection). The order is critical because filters like **Authentication** must run *before* filters like **Authorization** to ensure a user's identity is verified before checking their permissions."
      },
      jp: {
        title: "Spring Securityフィルターチェーン",
        body: "Spring Securityの**フィルターチェーン**は、受信リクエストを処理する上でどのような役割を果たしますか、またフィルターの順序が重要であるのはなぜですか？",
        solution: "フィルターチェーンは、セキュリティに関する懸念事項（認証、認可、CSRF保護など）を処理する一連のサーブレットフィルターです。ユーザーのIDが確認されてから権限がチェックされるように、**認証**のようなフィルターは**認可**のようなフィルターの*前*に実行される必要があるため、順序は非常に重要です。"
      },
      vi: {
        title: "Spring Security Filter Chain",
        body: "Vai trò của **Spring Security Filter Chain** trong việc xử lý một request đến là gì, và tại sao thứ tự của các filter lại quan trọng?",
        solution: "Filter Chain là một chuỗi các servlet filter xử lý các vấn đề bảo mật (ví dụ: authentication, authorization, CSRF protection). Thứ tự là rất quan trọng vì các filter như **Authentication** phải chạy *trước* các filter như **Authorization** để đảm bảo danh tính của người dùng được xác minh trước khi kiểm tra quyền hạn của họ."
      }
    }
  },
  {
    _id: "sb-j-005",
    difficulty: "junior",
    tags: ["rest", "response-entity", "http"],
    content: {
      en: {
        title: "ResponseEntity Purpose",
        body: "In a Spring Boot `@RestController`, what is the benefit of returning a **`ResponseEntity`** object instead of just a DTO or a simple data type?",
        solution: "**`ResponseEntity`** allows you to explicitly control the **HTTP Response Status Code** (e.g., 200 OK, 201 Created, 404 Not Found), headers, and the response body. Returning a DTO defaults to a 200 OK, while `ResponseEntity` offers finer control over the precise HTTP response sent to the client."
      },
      jp: {
        title: "ResponseEntityの目的",
        body: "Spring Bootの`@RestController`で、単純なDTOや単純なデータ型ではなく、**`ResponseEntity`**オブジェクトを返すことの利点は何ですか？",
        solution: "**`ResponseEntity`**を使用すると、**HTTP応答ステータスコード**（例：200 OK、201 Created、404 Not Found）、ヘッダー、および応答本文を明示的に制御できます。DTOを返すとデフォルトで200 OKになりますが、`ResponseEntity`はクライアントに送信される正確なHTTP応答をより細かく制御できます。"
      },
      vi: {
        title: "Mục đích ResponseEntity",
        body: "Trong một `@RestController` của Spring Boot, lợi ích của việc trả về một đối tượng **`ResponseEntity`** thay vì chỉ là một DTO hoặc một kiểu dữ liệu đơn giản là gì?",
        solution: "**`ResponseEntity`** cho phép bạn kiểm soát rõ ràng **Mã trạng thái phản hồi HTTP** (ví dụ: 200 OK, 201 Created, 404 Not Found), headers, và nội dung phản hồi. Trả về một DTO mặc định là 200 OK, trong khi `ResponseEntity` cung cấp quyền kiểm soát chi tiết hơn đối với phản hồi HTTP chính xác gửi đến client."
      }
    }
  },
  {
    _id: "sb-j-006",
    difficulty: "junior",
    tags: ["data", "jpa", "lazy-loading"],
    content: {
      en: {
        title: "LazyInitializationException Cause",
        body: "What is the common cause of a **`LazyInitializationException`** (or 'No Session' error) in Spring Data JPA when fetching relationships (e.g., One-to-Many)?",
        solution: "This exception occurs when you try to access a **lazily loaded** relationship (e.g., a collection) **after the associated JPA session/transaction has been closed**. Since the data was not loaded when the entity was fetched, and the database connection is now closed, JPA cannot execute the required query to initialize the lazy collection."
      },
      jp: {
        title: "LazyInitializationExceptionの原因",
        body: "Spring Data JPAで関連（例：One-to-Many）を取得する際に、**`LazyInitializationException`**（または 'No Session' エラー）が発生する一般的な原因は何ですか？",
        solution: "この例外は、関連付けられたJPAセッション/トランザクションが**閉じられた後**に、**遅延ロード**された関連（例：コレクション）にアクセスしようとすると発生します。エンティティがフェッチされたときにデータがロードされず、データベース接続が閉じられているため、JPAは遅延コレクションを初期化するために必要なクエリを実行できません。"
      },
      vi: {
        title: "Nguyên nhân LazyInitializationException",
        body: "Nguyên nhân phổ biến gây ra **`LazyInitializationException`** (hoặc lỗi 'No Session') trong Spring Data JPA khi fetch các mối quan hệ (ví dụ: One-to-Many) là gì?",
        solution: "Ngoại lệ này xảy ra khi bạn cố gắng truy cập một mối quan hệ được **tải lười biếng (lazily loaded)** (ví dụ: một collection) **sau khi session/transaction JPA liên quan đã bị đóng**. Vì dữ liệu không được tải khi entity được fetch, và kết nối cơ sở dữ liệu hiện đã đóng, JPA không thể thực thi truy vấn cần thiết để khởi tạo collection lười biếng đó."
      }
    }
  },
  {
    _id: "sb-j-007",
    difficulty: "junior",
    tags: ["data", "jpa", "eager-loading"],
    content: {
      en: {
        title: "FetchType.EAGER Drawbacks",
        body: "What is the main potential drawback of setting a relationship (e.g., `@OneToMany`) in a JPA entity to use **`FetchType.EAGER`**?",
        solution: "The main drawback is **performance degradation** due to **over-fetching**. Eager loading retrieves *all* related data immediately, even if it's not needed, potentially leading to a huge amount of data being loaded and causing the 'N+1 Selects' problem in some scenarios, increasing network traffic and memory usage."
      },
      jp: {
        title: "FetchType.EAGERの欠点",
        body: "JPAエンティティ内の関連（例：`@OneToMany`）を**`FetchType.EAGER`**を使用するように設定することの主な潜在的な欠点は何ですか？",
        solution: "主な欠点は、**過剰なフェッチ**による**パフォーマンスの低下**です。Eager loadingは、必要ない場合でも*すべて*の関連データをすぐに取得するため、大量のデータがロードされ、特定のシナリオで「N+1 Selects」問題を引き起こし、ネットワークトラフィックとメモリ使用量が増加する可能性があります。"
      },
      vi: {
        title: "Hạn chế FetchType.EAGER",
        body: "Hạn chế tiềm năng chính của việc đặt một mối quan hệ (ví dụ: `@OneToMany`) trong một entity JPA sử dụng **`FetchType.EAGER`** là gì?",
        solution: "Hạn chế chính là **giảm hiệu suất** do **lấy dữ liệu quá mức (over-fetching)**. Eager loading truy xuất *tất cả* dữ liệu liên quan ngay lập tức, ngay cả khi nó không cần thiết, có khả năng dẫn đến việc tải một lượng lớn dữ liệu và gây ra vấn đề 'N+1 Selects' trong một số trường hợp, làm tăng lưu lượng mạng và sử dụng bộ nhớ."
      }
    }
  },
  {
    _id: "sb-j-008",
    difficulty: "junior",
    tags: ["actuator", "monitoring", "endpoint"],
    content: {
      en: {
        title: "Actuator Health Check",
        body: "Which Spring Boot Actuator endpoint would you use to check the overall status of your application, including database connectivity and disk space?",
        solution: "The **/health** endpoint. This endpoint aggregates information from various `HealthIndicator` beans (like `DataSourceHealthIndicator` or `DiskSpaceHealthIndicator`) to provide a combined status (`UP` or `DOWN`)."
      },
      jp: {
        title: "Actuatorヘルスチェック",
        body: "データベース接続やディスク容量など、アプリケーションの全体的なステータスを確認するために使用するSpring Boot Actuatorエンドポイントは何ですか？",
        solution: "**/health**エンドポイントです。このエンドポイントは、さまざまな`HealthIndicator` Bean（`DataSourceHealthIndicator`や`DiskSpaceHealthIndicator`など）からの情報を集約し、結合されたステータス（`UP`または`DOWN`）を提供します。"
      },
      vi: {
        title: "Actuator Health Check",
        body: "Bạn sẽ sử dụng endpoint Actuator nào của Spring Boot để kiểm tra trạng thái tổng thể của ứng dụng, bao gồm kết nối cơ sở dữ liệu và dung lượng đĩa?",
        solution: "Endpoint **/health**. Endpoint này tổng hợp thông tin từ các bean `HealthIndicator` khác nhau (như `DataSourceHealthIndicator` hoặc `DiskSpaceHealthIndicator`) để cung cấp trạng thái kết hợp (`UP` hoặc `DOWN`)."
      }
    }
  },
  {
    _id: "sb-j-009",
    difficulty: "junior",
    tags: ["aop", "annotation", "proxy"],
    content: {
      en: {
        title: "@Aspect Annotation Role",
        body: "In Spring AOP, what is the role of the **@Aspect** annotation, and what programming construct does Spring use to implement AOP concepts like transactions and logging?",
        solution: "The **@Aspect** annotation marks a class as an **Aspect**, meaning it contains join points and advice (logic to execute before/after/around methods). Spring AOP uses the **Proxy Pattern** (specifically dynamic proxies) to intercept method calls and execute the advice defined in the Aspect."
      },
      jp: {
        title: "@Aspectアノテーションの役割",
        body: "Spring AOPにおいて、**@Aspect**アノテーションの役割は何ですか、またSpringがトランザクションやロギングなどのAOP概念を実装するために使用するプログラミング構造は何ですか？",
        solution: "**@Aspect**アノテーションは、クラスを**Aspect**としてマークします。これは、ジョインポイントとアドバイス（メソッドの前後/周りに実行するロジック）が含まれていることを意味します。Spring AOPは、**プロキシパターン**（特に動的プロキシ）を使用してメソッド呼び出しをインターセプトし、Aspectで定義されたアドバイスを実行します。"
      },
      vi: {
        title: "Vai trò @Aspect",
        body: "Trong Spring AOP, vai trò của annotation **@Aspect** là gì, và cấu trúc lập trình nào mà Spring sử dụng để implement các khái niệm AOP như transaction và logging?",
        solution: "Annotation **@Aspect** đánh dấu một class là một **Aspect**, nghĩa là nó chứa các join point và advice (logic để thực thi trước/sau/xung quanh các phương thức). Spring AOP sử dụng **Proxy Pattern** (cụ thể là dynamic proxies) để chặn các lời gọi phương thức và thực thi advice được định nghĩa trong Aspect."
      }
    }
  },
  {
    _id: "sb-j-010",
    difficulty: "junior",
    tags: ["data", "transaction", "rollback"],
    content: {
      en: {
        title: "Rollback Behavior",
        body: "Under the default `@Transactional` settings, what types of exceptions cause a transaction to **rollback**, and what types of exceptions do not?",
        solution: "By default, a transaction only rolls back on **unchecked exceptions** (runtime exceptions, typically subclasses of `RuntimeException`, like `NullPointerException`). It **does not** roll back on **checked exceptions** (subclasses of `Exception` that are not `RuntimeException`)."
      },
      jp: {
        title: "ロールバックの動作",
        body: "デフォルトの`@Transactional`設定では、トランザクションが**ロールバック**する原因となる例外のタイプは何ですか、またロールバックしない例外のタイプは何ですか？",
        solution: "デフォルトでは、トランザクションは**非チェック例外**（ランタイム例外、通常は`RuntimeException`のサブクラス、`NullPointerException`など）でのみロールバックします。**チェック例外**（`RuntimeException`ではない`Exception`のサブクラス）ではロールバック**しません**。"
      },
      vi: {
        title: "Hành vi Rollback",
        body: "Theo cài đặt `@Transactional` mặc định, những loại ngoại lệ nào khiến transaction bị **rollback**, và những loại ngoại lệ nào không?",
        solution: "Theo mặc định, transaction chỉ bị rollback khi có **unchecked exceptions** (runtime exceptions, thường là các lớp con của `RuntimeException`, như `NullPointerException`). Nó **không** bị rollback khi có **checked exceptions** (các lớp con của `Exception` nhưng không phải `RuntimeException`)."
      }
    }
  },
  {
    _id: "sb-j-011",
    difficulty: "junior",
    tags: ["properties", "injection", "value"],
    content: {
      en: {
        title: "Property Injection using @Value",
        body: "How do you inject a property value defined in `application.properties` (e.g., `app.name=My App`) into a Spring Bean field using an annotation?",
        solution: "You use the **@Value** annotation, typically with the Spring Expression Language (SpEL) syntax: `@Value(\"${app.name}\") private String applicationName;`"
      },
      jp: {
        title: "@Valueを使用したプロパティ注入",
        body: "`application.properties`で定義されたプロパティ値（例：`app.name=My App`）をアノテーションを使用してSpring Beanフィールドに注入するにはどうすればよいですか？",
        solution: "**@Value**アノテーションを、通常はSpring Expression Language (SpEL) 構文とともに使用します: `@Value(\"${app.name}\") private String applicationName;`"
      },
      vi: {
        title: "Inject Property bằng @Value",
        body: "Làm thế nào để inject một giá trị property được định nghĩa trong `application.properties` (ví dụ: `app.name=My App`) vào một trường của Spring Bean bằng cách sử dụng annotation?",
        solution: "Bạn sử dụng annotation **@Value**, thường là với cú pháp Spring Expression Language (SpEL): `@Value(\"${app.name}\") private String applicationName;`"
      }
    }
  },
  {
    _id: "sb-j-012",
    difficulty: "junior",
    tags: ["configuration", "properties", "type-safe"],
    content: {
      en: {
        title: "@ConfigurationProperties Purpose",
        body: "What is the benefit of using **@ConfigurationProperties** (e.g., prefixing `mail` for all email settings) over using multiple `@Value` annotations for related properties?",
        solution: "**@ConfigurationProperties** provides **type-safe configuration**. It binds a group of related properties (with a common prefix) into a single Java bean (POJO), making them easier to manage, validate, and use. It also works well with IDE auto-completion."
      },
      jp: {
        title: "@ConfigurationPropertiesの目的",
        body: "関連するプロパティに対して複数の`@Value`アノテーションを使用する代わりに、**@ConfigurationProperties**（例：すべてのメール設定に対して`mail`をプレフィックスとして使用）を使用する利点は何ですか？",
        solution: "**@ConfigurationProperties**は**型安全な構成**を提供します。関連するプロパティのグループ（共通のプレフィックスを持つ）を単一のJava Bean（POJO）にバインドし、管理、検証、使用を容易にします。また、IDEのオートコンプリートともうまく連携します。"
      },
      vi: {
        title: "Mục đích @ConfigurationProperties",
        body: "Lợi ích của việc sử dụng **@ConfigurationProperties** (ví dụ: tiền tố `mail` cho tất cả các cài đặt email) so với việc sử dụng nhiều annotation `@Value` cho các thuộc tính liên quan là gì?",
        solution: "**@ConfigurationProperties** cung cấp **cấu hình an toàn kiểu (type-safe configuration)**. Nó liên kết một nhóm các thuộc tính liên quan (với tiền tố chung) vào một Java bean (POJO) duy nhất, làm cho chúng dễ quản lý, xác thực và sử dụng hơn. Nó cũng hoạt động tốt với tính năng tự động hoàn thành của IDE."
      }
    }
  },
  {
    _id: "sb-j-013",
    difficulty: "junior",
    tags: ["rest", "validation", "dto"],
    content: {
      en: {
        title: "Input Validation with @Valid",
        body: "In a REST controller method that accepts a `@RequestBody` DTO, which common Spring annotation is used to trigger bean validation constraints (like `@NotNull` or `@Size`) on the incoming DTO?",
        solution: "The **@Valid** annotation (or **@Validated** in some cases, often from `jakarta.validation`). It ensures that the DTO fields are checked against the defined constraints before the method body is executed."
      },
      jp: {
        title: "@Validによる入力検証",
        body: "`@RequestBody` DTOを受け入れるRESTコントローラーメソッドで、受信DTOのBean検証制約（`@NotNull`や`@Size`など）をトリガーするために使用される一般的なSpringアノテーションは何ですか？",
        solution: "**@Valid**アノテーション（または場合によっては**@Validated**、多くの場合`jakarta.validation`から）。これは、メソッド本体が実行される前に、DTOフィールドが定義された制約に対してチェックされることを保証します。"
      },
      vi: {
        title: "Validation Input với @Valid",
        body: "Trong một phương thức controller REST chấp nhận một DTO `@RequestBody`, annotation Spring phổ biến nào được sử dụng để kích hoạt các ràng buộc xác thực bean (như `@NotNull` hoặc `@Size`) trên DTO đầu vào?",
        solution: "Annotation **@Valid** (hoặc đôi khi là **@Validated**, thường từ `jakarta.validation`). Nó đảm bảo rằng các trường DTO được kiểm tra dựa trên các ràng buộc đã định nghĩa trước khi thân phương thức được thực thi."
      }
    }
  },
  {
    _id: "sb-j-014",
    difficulty: "junior",
    tags: ["rest", "http", "status"],
    content: {
      en: {
        title: "HTTP 400 Status",
        body: "What does an HTTP **400 Bad Request** status code typically indicate in a Spring Boot REST application, and what kind of error often results in this status?",
        solution: "It indicates that the server cannot process the request due to a **client error** (e.g., malformed syntax, invalid request message framing, or deceptive routing). It commonly results from **Input Validation errors** (e.g., missing required fields, field format errors) or sending invalid JSON/XML."
      },
      jp: {
        title: "HTTP 400ステータス",
        body: "Spring Boot RESTアプリケーションにおいて、HTTP **400 Bad Request**ステータスコードは通常何を示しますか、またどのような種類のエラーがこのステータスになることが多いですか？",
        solution: "これは、**クライアントエラー**（例：不正な構文、無効なリクエストメッセージのフレーミング、または誤解を招くルーティング）が原因でサーバーがリクエストを処理できないことを示します。これは一般的に**入力検証エラー**（例：必須フィールドの欠落、フィールド形式のエラー）や無効なJSON/XMLの送信によって引き起こされます。"
      },
      vi: {
        title: "Trạng thái HTTP 400",
        body: "Mã trạng thái HTTP **400 Bad Request** thường biểu thị điều gì trong một ứng dụng Spring Boot REST, và loại lỗi nào thường dẫn đến trạng thái này?",
        solution: "Nó chỉ ra rằng máy chủ không thể xử lý yêu cầu do **lỗi từ client** (ví dụ: cú pháp không đúng, khung thông báo request không hợp lệ). Nó thường là kết quả của **Lỗi Validation đầu vào** (ví dụ: thiếu trường bắt buộc, lỗi định dạng trường) hoặc gửi JSON/XML không hợp lệ."
      }
    }
  },
  {
    _id: "sb-j-015",
    difficulty: "junior",
    tags: ["ioc", "scope", "prototype"],
    content: {
      en: {
        title: "Prototype Scope Use Case",
        body: "In Spring, when would you choose the **`prototype`** scope for a bean instead of the default `singleton` scope?",
        solution: "You choose the **`prototype`** scope when you need a **new instance** of the bean **every time** it is requested. This is typically necessary for beans that hold **stateful data** (e.g., a mutable shopping cart object or a database session) that cannot be safely shared across the entire application."
      },
      jp: {
        title: "プロトタイプスコープの使用例",
        body: "Springで、Beanのデフォルトの`singleton`スコープの代わりに**`prototype`**スコープを選択するのはどのような場合ですか？",
        solution: "Beanが要求される**たびに****新しいインスタンス**が必要な場合に**`prototype`**スコープを選択します。これは通常、アプリケーション全体で安全に共有できない**ステートフルなデータ**（例：変更可能なショッピングカートオブジェクトやデータベースセッション）を保持するBeanに必要です。"
      },
      vi: {
        title: "Trường hợp sử dụng Prototype Scope",
        body: "Trong Spring, khi nào bạn chọn scope **`prototype`** cho một bean thay vì scope `singleton` mặc định?",
        solution: "Bạn chọn scope **`prototype`** khi bạn cần một **instance mới** của bean **mỗi lần** nó được yêu cầu. Điều này thường cần thiết cho các bean chứa **dữ liệu có trạng thái (stateful data)** (ví dụ: một đối tượng giỏ hàng có thể thay đổi hoặc một phiên cơ sở dữ liệu) mà không thể được chia sẻ an toàn trên toàn bộ ứng dụng."
      }
    }
  },
  {
    _id: "sb-j-016",
    difficulty: "junior",
    tags: ["data", "jpa", "projection"],
    content: {
      en: {
        title: "Spring Data Projection",
        body: "What is a **Spring Data Projection**, and what problem does it solve in the context of JPA entities?",
        solution: "A Spring Data Projection is an interface or DTO used to **selectively retrieve only a subset of fields** from a JPA entity instead of the whole object. It solves the problem of **over-fetching** by reducing the amount of data transferred and mapped, improving query performance when only a few columns are needed."
      },
      jp: {
        title: "Spring Dataプロジェクション",
        body: "**Spring Dataプロジェクション**とは何ですか、またJPAエンティティの文脈でどのような問題を解決しますか？",
        solution: "Spring Dataプロジェクションは、オブジェクト全体ではなく、JPAエンティティから**フィールドのサブセットのみを選択的に取得する**ために使用されるインターフェースまたはDTOです。必要な列が少ない場合に転送およびマッピングされるデータ量を減らすことにより、**過剰なフェッチ**の問題を解決し、クエリのパフォーマンスを向上させます。"
      },
      vi: {
        title: "Spring Data Projection",
        body: "**Spring Data Projection** là gì, và nó giải quyết vấn đề gì trong bối cảnh của các entity JPA?",
        solution: "Spring Data Projection là một interface hoặc DTO được sử dụng để **chỉ chọn lọc truy xuất một tập hợp con các trường** từ một entity JPA thay vì toàn bộ đối tượng. Nó giải quyết vấn đề **over-fetching** bằng cách giảm lượng dữ liệu được truyền và ánh xạ, cải thiện hiệu suất truy vấn khi chỉ cần một vài cột."
      }
    }
  },
  {
    _id: "sb-j-017",
    difficulty: "junior",
    tags: ["data", "jpa", "criteria-api"],
    content: {
      en: {
        title: "JPA Criteria API Use Case",
        body: "When would you choose to use the **JPA Criteria API** instead of JPQL or native SQL for querying the database in Spring Boot?",
        solution: "The Criteria API is primarily used for **dynamic queries**, where the query structure (e.g., WHERE clauses, sorting) needs to be **built programmatically at runtime** based on varying user input or complex conditional logic. It offers a type-safe way to construct queries."
      },
      jp: {
        title: "JPA Criteria APIの使用例",
        body: "Spring Bootでデータベースをクエリするために、JPQLまたはネイティブSQLの代わりに**JPA Criteria API**を使用することを選択するのはいつですか？",
        solution: "Criteria APIは主に**動的クエリ**に使用され、クエリ構造（例：WHERE句、ソート）をさまざまなユーザー入力や複雑な条件ロジックに基づいて**実行時にプログラムで構築**する必要があります。これは、クエリを構築するための型安全な方法を提供します。"
      },
      vi: {
        title: "Trường hợp sử dụng JPA Criteria API",
        body: "Khi nào bạn chọn sử dụng **JPA Criteria API** thay vì JPQL hoặc native SQL để truy vấn cơ sở dữ liệu trong Spring Boot?",
        solution: "Criteria API chủ yếu được sử dụng cho **các truy vấn động**, nơi cấu trúc truy vấn (ví dụ: mệnh đề WHERE, sắp xếp) cần được **xây dựng theo chương trình trong thời gian chạy** dựa trên đầu vào người dùng thay đổi hoặc logic điều kiện phức tạp. Nó cung cấp một cách an toàn kiểu (type-safe) để xây dựng các truy vấn."
      }
    }
  },
  {
    _id: "sb-j-018",
    difficulty: "junior",
    tags: ["security", "auth", "oauth2"],
    content: {
      en: {
        title: "OAuth 2.0 Purpose",
        body: "What is **OAuth 2.0** primarily used for in modern Spring Boot applications, and how does it differ from traditional username/password authentication?",
        solution: "**OAuth 2.0** is an **Authorization Framework** used to grant secure, delegated access to resources without sharing user credentials. It differs in that the client application is given an **Access Token** instead of the user's password, allowing limited access defined by scopes."
      },
      jp: {
        title: "OAuth 2.0の目的",
        body: "現代のSpring Bootアプリケーションで**OAuth 2.0**が主に使用される目的は何ですか、また従来のユーザー名/パスワード認証とどのように異なりますか？",
        solution: "**OAuth 2.0**は、ユーザーの資格情報を共有せずに、リソースへの安全で委任されたアクセスを許可するために使用される**認可フレームワーク**です。クライアントアプリケーションは、ユーザーのパスワードではなく**アクセストークン**を与えられ、スコープによって定義された制限付きのアクセスを許可するという点で異なります。"
      },
      vi: {
        title: "Mục đích OAuth 2.0",
        body: "**OAuth 2.0** chủ yếu được sử dụng để làm gì trong các ứng dụng Spring Boot hiện đại, và nó khác với phương thức authentication bằng username/password truyền thống như thế nào?",
        solution: "**OAuth 2.0** là một **Authorization Framework** được sử dụng để cấp quyền truy cập được ủy quyền, bảo mật vào các tài nguyên mà không cần chia sẻ thông tin xác thực của người dùng. Nó khác biệt ở chỗ ứng dụng client được cấp một **Access Token** thay vì mật khẩu của người dùng, cho phép truy cập giới hạn được xác định bởi các scope."
      }
    }
  },
  {
    _id: "sb-j-019",
    difficulty: "junior",
    tags: ["testing", "mock", "mockito"],
    content: {
      en: {
        title: "Mock vs Spy in Mockito",
        body: "In Mockito/Spring Boot testing, explain the difference between a **Mock** object (created with `@Mock`) and a **Spy** object (created with `@Spy`).",
        solution: "A **Mock** creates a complete dummy object where **all methods are stubbed out** by default; you must define the behavior for every call you expect. A **Spy** wraps a **real object**, preserving its normal behavior, but allows you to **selectively override** certain methods to stub their behavior."
      },
      jp: {
        title: "MockitoのMockとSpyの違い",
        body: "Mockito/Spring Bootテストにおいて、**Mock**オブジェクト（`@Mock`で作成）と**Spy**オブジェクト（`@Spy`で作成）の違いを説明してください。",
        solution: "**Mock**は、デフォルトで**すべてのメソッドがスタブアウトされた**完全なダミーオブジェクトを作成します。期待するすべての呼び出しの動作を定義する必要があります。**Spy**は**実際のオブジェクト**をラップし、その通常の動作を保持しますが、特定のメソッドを**選択的にオーバーライド**してその動作をスタブアウトすることができます。"
      },
      vi: {
        title: "Mock vs Spy trong Mockito",
        body: "Trong kiểm thử Mockito/Spring Boot, giải thích sự khác biệt giữa một đối tượng **Mock** (được tạo bằng `@Mock`) và một đối tượng **Spy** (được tạo bằng `@Spy`).",
        solution: "Một **Mock** tạo ra một đối tượng giả hoàn chỉnh, nơi **tất cả các phương thức đều được stub out** theo mặc định; bạn phải định nghĩa hành vi cho mọi lời gọi mà bạn mong đợi. Một **Spy** bọc một **đối tượng thực**, giữ lại hành vi bình thường của nó, nhưng cho phép bạn **chọn lọc ghi đè** (override) một số phương thức nhất định để stub hành vi của chúng."
      }
    }
  },
  {
    _id: "sb-j-020",
    difficulty: "junior",
    tags: ["data", "jpa", "specification"],
    content: {
      en: {
        title: "JPA Specification Purpose",
        body: "What is the primary motivation for using **Spring Data JPA Specifications**?",
        solution: "Specifications are used to **define reusable, type-safe query building blocks** for advanced filtering and querying. They are especially useful for combining multiple dynamic criteria (AND/OR) in a flexible and composable way, providing an alternative to the Criteria API complexity in repositories."
      },
      jp: {
        title: "JPA Specificationの目的",
        body: "**Spring Data JPA Specification**を使用する主な動機は何ですか？",
        solution: "Specificationは、高度なフィルタリングとクエリのための**再利用可能で型安全なクエリ構築ブロックを定義する**ために使用されます。これらは、複数の動的な基準（AND/OR）を柔軟かつ構成可能な方法で組み合わせるのに特に役立ち、リポジトリにおけるCriteria APIの複雑さの代替手段を提供します。"
      },
      vi: {
        title: "Mục đích JPA Specification",
        body: "Động lực chính để sử dụng **Spring Data JPA Specifications** là gì?",
        solution: "Specifications được sử dụng để **định nghĩa các khối xây dựng truy vấn (query building blocks) có thể tái sử dụng, an toàn kiểu** cho việc lọc và truy vấn nâng cao. Chúng đặc biệt hữu ích cho việc kết hợp nhiều tiêu chí động (AND/OR) một cách linh hoạt và có thể kết hợp (composable), cung cấp một giải pháp thay thế cho sự phức tạp của Criteria API trong các repository."
      }
    }
  },
  {
    _id: "sb-j-021",
    difficulty: "junior",
    tags: ["ioc", "conditional", "auto-configuration"],
    content: {
      en: {
        title: "@ConditionalOnProperty Role",
        body: "Explain the function of the **@ConditionalOnProperty** annotation in Spring Boot's auto-configuration logic.",
        solution: "**@ConditionalOnProperty** is a conditional annotation that allows a bean or a configuration class to be registered **only if a specific application property is present** in the environment and, optionally, has a specific value. It is essential for enabling/disabling auto-configuration features based on external settings."
      },
      jp: {
        title: "@ConditionalOnPropertyの役割",
        body: "Spring Bootの自動構成ロジックにおける**@ConditionalOnProperty**アノテーションの機能を説明してください。",
        solution: "**@ConditionalOnProperty**は、特定のBeanまたは構成クラスが、環境に**特定のアプリケーションプロパティが存在し**、オプションで特定の値を**持っている場合にのみ**登録されることを許可する条件付きアノテーションです。これは、外部設定に基づいて自動構成機能を有効/無効にするために不可欠です。"
      },
      vi: {
        title: "Vai trò @ConditionalOnProperty",
        body: "Giải thích chức năng của annotation **@ConditionalOnProperty** trong logic auto-configuration của Spring Boot.",
        solution: "**@ConditionalOnProperty** là một annotation có điều kiện cho phép một bean hoặc một lớp cấu hình được đăng ký **chỉ khi một thuộc tính ứng dụng cụ thể có mặt** trong môi trường và, tùy chọn, có một giá trị cụ thể. Nó rất cần thiết để bật/tắt các tính năng auto-configuration dựa trên các cài đặt bên ngoài."
      }
    }
  },
  {
    _id: "sb-j-022",
    difficulty: "junior",
    tags: ["data", "jpa", "dto-mapping"],
    content: {
      en: {
        title: "Entity to DTO Mapping Tool",
        body: "When transferring data from a JPA **Entity** to a REST **DTO** (Data Transfer Object), what popular third-party library is often used to automate the mapping process in Spring Boot?",
        solution: "The most popular library used for automated object mapping is **MapStruct** (compile-time code generation) or **ModelMapper** (runtime reflection). They reduce boilerplate code needed for manual field-to-field copying."
      },
      jp: {
        title: "EntityからDTOへのマッピングツール",
        body: "JPA **Entity**からREST **DTO**（データ転送オブジェクト）にデータを転送する際、Spring Bootでマッピングプロセスを自動化するためによく使用される人気のあるサードパーティライブラリは何ですか？",
        solution: "自動オブジェクトマッピングに使用される最も人気のあるライブラリは、**MapStruct**（コンパイル時コード生成）または**ModelMapper**（ランタイムリフレクション）です。これらは、手動のフィールドからフィールドへのコピーに必要な定型コードを削減します。"
      },
      vi: {
        title: "Công cụ Mapping Entity sang DTO",
        body: "Khi chuyển dữ liệu từ một **Entity** JPA sang một **DTO** (Data Transfer Object) REST, thư viện bên thứ ba phổ biến nào thường được sử dụng để tự động hóa quá trình mapping trong Spring Boot?",
        solution: "Thư viện phổ biến nhất được sử dụng cho việc ánh xạ đối tượng tự động là **MapStruct** (tạo mã thời gian biên dịch) hoặc **ModelMapper** (phản chiếu thời gian chạy). Chúng giúp giảm mã lặp cần thiết cho việc sao chép thủ công từng trường."
      }
    }
  },
  {
    _id: "sb-j-023",
    difficulty: "junior",
    tags: ["microservices", "service-discovery", "eureka"],
    content: {
      en: {
        title: "Service Discovery Purpose",
        body: "In a microservices architecture using Spring Cloud, what problem does **Service Discovery** (e.g., using Netflix Eureka) solve?",
        solution: "Service Discovery solves the problem of how a client (or one service) can **find the network location (IP/Port)** of another service. Since microservices often scale dynamically, their addresses change frequently, and the Discovery Server (Eureka) acts as a central registry to track and resolve these locations."
      },
      jp: {
        title: "サービスディスカバリの目的",
        body: "Spring Cloudを使用したマイクロサービスアーキテクチャにおいて、**サービスディスカバリ**（例：Netflix Eurekaの使用）はどのような問題を解決しますか？",
        solution: "サービスディスカバリは、クライアント（またはあるサービス）が別のサービスの**ネットワークロケーション（IP/ポート）を見つける**方法の問題を解決します。マイクロサービスは動的にスケーリングすることが多いため、そのアドレスは頻繁に変更され、ディスカバリサーバー（Eureka）はこれらのロケーションを追跡および解決するための中央レジストリとして機能します。"
      },
      vi: {
        title: "Mục đích Service Discovery",
        body: "Trong kiến trúc microservices sử dụng Spring Cloud, **Service Discovery** (ví dụ: sử dụng Netflix Eureka) giải quyết vấn đề gì?",
        solution: "Service Discovery giải quyết vấn đề làm thế nào một client (hoặc một service) có thể **tìm thấy vị trí mạng (IP/Port)** của một service khác. Vì microservices thường mở rộng quy mô động, địa chỉ của chúng thay đổi thường xuyên, và Discovery Server (Eureka) hoạt động như một registry trung tâm để theo dõi và phân giải các vị trí này."
      }
    }
  },
  {
    _id: "sb-j-024",
    difficulty: "junior",
    tags: ["microservices", "api-gateway", "spring-cloud"],
    content: {
      en: {
        title: "API Gateway Role",
        body: "What is the primary role of an **API Gateway** (e.g., Spring Cloud Gateway) in a microservices deployment?",
        solution: "The API Gateway acts as a **single entry point** for all clients. It handles cross-cutting concerns like **routing requests** to the correct backend service, **authentication/authorization** preprocessing, **rate limiting**, and **load balancing**, simplifying the client's interaction with the services."
      },
      jp: {
        title: "API Gatewayの役割",
        body: "マイクロサービスデプロイメントにおける**API Gateway**（例：Spring Cloud Gateway）の主な役割は何ですか？",
        solution: "API Gatewayは、すべてのクライアントにとって**単一のエントリポイント**として機能します。これは、正しいバックエンドサービスへの**ルーティング**、**認証/認可**の前処理、**レート制限**、および**負荷分散**など、横断的な関心事を処理し、クライアントとサービスとの相互作用を簡素化します。"
      },
      vi: {
        title: "Vai trò API Gateway",
        body: "Vai trò chính của một **API Gateway** (ví dụ: Spring Cloud Gateway) trong việc triển khai microservices là gì?",
        solution: "API Gateway hoạt động như một **điểm vào duy nhất (single entry point)** cho tất cả các client. Nó xử lý các mối quan tâm chéo (cross-cutting concerns) như **định tuyến request** đến service backend chính xác, tiền xử lý **authentication/authorization**, **rate limiting**, và **load balancing**, đơn giản hóa sự tương tác của client với các service."
      }
    }
  },
  {
    _id: "sb-j-025",
    difficulty: "junior",
    tags: ["rest", "controller-advice", "exception-handling"],
    content: {
      en: {
        title: "@ControllerAdvice Purpose",
        body: "What is the purpose of the **@ControllerAdvice** annotation in a Spring Boot application?",
        solution: "**@ControllerAdvice** is used to define **global exception handlers** (using `@ExceptionHandler`), common data binders, and model attributes for use across multiple controllers. This centralizes error handling logic, preventing duplication in every controller."
      },
      jp: {
        title: "@ControllerAdviceの目的",
        body: "Spring Bootアプリケーションにおける**@ControllerAdvice**アノテーションの目的は何ですか？",
        solution: "**@ControllerAdvice**は、複数のコントローラーで使用するための**グローバル例外ハンドラー**（`@ExceptionHandler`を使用）、共通のデータバインダー、およびモデル属性を定義するために使用されます。これにより、エラー処理ロジックが一元化され、すべてのコントローラーでの重複が防止されます。"
      },
      vi: {
        title: "Mục đích @ControllerAdvice",
        body: "Mục đích của annotation **@ControllerAdvice** trong một ứng dụng Spring Boot là gì?",
        solution: "**@ControllerAdvice** được sử dụng để định nghĩa **các trình xử lý ngoại lệ toàn cục (global exception handlers)** (sử dụng `@ExceptionHandler`), các data binder chung, và các model attribute để sử dụng trên nhiều controller. Điều này tập trung hóa logic xử lý lỗi, ngăn ngừa sự trùng lặp trong mỗi controller."
      }
    }
  },
  {
    _id: "sb-j-026",
    difficulty: "junior",
    tags: ["testing", "data", "test-slice"],
    content: {
      en: {
        title: "@DataJpaTest Role",
        body: "What functionality is provided by the **@DataJpaTest** annotation in a Spring Boot test environment?",
        solution: "**@DataJpaTest** is a test slice annotation that configures only the necessary components for **JPA tests** (e.g., Spring Data JPA repositories, EntityManager, and an in-memory database). It avoids loading the full application context, making repository tests much faster."
      },
      jp: {
        title: "@DataJpaTestの役割",
        body: "Spring Bootテスト環境における**@DataJpaTest**アノテーションによって提供される機能は何ですか？",
        solution: "**@DataJpaTest**は、**JPAテスト**に必要なコンポーネント（例：Spring Data JPAリポジトリ、EntityManager、インメモリデータベース）のみを構成するテストスライスアノテーションです。完全なアプリケーションコンテキストのロードを回避するため、リポジトリテストがはるかに高速になります。"
      },
      vi: {
        title: "Vai trò @DataJpaTest",
        body: "Chức năng nào được cung cấp bởi annotation **@DataJpaTest** trong môi trường kiểm thử Spring Boot?",
        solution: "**@DataJpaTest** là một annotation test slice cấu hình chỉ các thành phần cần thiết cho **các bài kiểm thử JPA** (ví dụ: Spring Data JPA repositories, EntityManager, và một cơ sở dữ liệu in-memory). Nó tránh tải toàn bộ application context, làm cho các bài kiểm thử repository nhanh hơn nhiều."
      }
    }
  },
  {
    _id: "sb-j-027",
    difficulty: "junior",
    tags: ["ioc", "qualifier"],
    content: {
      en: {
        title: "@Qualifier Use Case",
        body: "When injecting a dependency, why would you need to use the **@Qualifier** annotation?",
        solution: "You use **@Qualifier** when Spring's Dependency Injection encounters **multiple beans of the same type** that could satisfy the dependency. `@Qualifier` allows you to specify the **exact name** of the bean you want to inject, resolving the ambiguity."
      },
      jp: {
        title: "@Qualifierの使用例",
        body: "依存関係を注入する際、**@Qualifier**アノテーションを使用する必要があるのはなぜですか？",
        solution: "Springの依存性注入が、依存関係を満たすことができる**同じ型の複数のBean**に遭遇した場合に**@Qualifier**を使用します。`@Qualifier`を使用すると、注入したいBeanの**正確な名前**を指定して、曖昧さを解決できます。"
      },
      vi: {
        title: "Trường hợp sử dụng @Qualifier",
        body: "Khi inject một dependency, tại sao bạn cần sử dụng annotation **@Qualifier**?",
        solution: "Bạn sử dụng **@Qualifier** khi Dependency Injection của Spring gặp phải **nhiều bean cùng loại** có thể thỏa mãn dependency. `@Qualifier` cho phép bạn chỉ định **tên chính xác** của bean mà bạn muốn inject, giải quyết sự mơ hồ."
      }
    }
  },
  {
    _id: "sb-j-028",
    difficulty: "junior",
    tags: ["aop", "advice", "order"],
    content: {
      en: {
        title: "Around Advice Role",
        body: "In Spring AOP, what is the role of **@Around** advice, and what unique capability does it offer compared to `@Before` and `@After` advice?",
        solution: "**@Around** advice surrounds a join point (method execution), allowing logic to be executed **both before and after** the method call. Its unique capability is that it can **decide whether to proceed** to the method execution or short-circuit it, and it can **modify the return value** or **throw an exception**."
      },
      jp: {
        title: "Around Adviceの役割",
        body: "Spring AOPにおいて、**@Around**アドバイスの役割は何ですか、また`@Before`および`@After`アドバイスと比較して提供する独自の機能は何ですか？",
        solution: "**@Around**アドバイスはジョインポイント（メソッド実行）を囲み、メソッド呼び出しの**前と後**の両方でロジックを実行できます。その独自の機能は、メソッド実行に**進むかどうかを決定**したり、それを短絡させたり、**戻り値を変更**したり、**例外をスロー**したりできることです。"
      },
      vi: {
        title: "Vai trò Around Advice",
        body: "Trong Spring AOP, vai trò của advice **@Around** là gì, và khả năng độc đáo mà nó cung cấp so với advice `@Before` và `@After` là gì?",
        solution: "Advice **@Around** bao quanh một join point (thực thi phương thức), cho phép logic được thực thi **cả trước và sau** lời gọi phương thức. Khả năng độc đáo của nó là nó có thể **quyết định có tiếp tục** thực thi phương thức hay rút ngắn nó, và nó có thể **sửa đổi giá trị trả về** hoặc **ném ra một ngoại lệ**."
      }
    }
  },
  {
    _id: "sb-j-029",
    difficulty: "junior",
    tags: ["testing", "client", "mock"],
    content: {
      en: {
        title: "Mock RestTemplate/WebClient",
        body: "In a unit test for a service that consumes an external REST API, how do you typically mock the response from the **`RestTemplate`** or **`WebClient`** to isolate the service logic?",
        solution: "You typically use a mechanism like **`MockRestServiceServer`** (for `RestTemplate`) or **`MockWebServer`** (for simulating the server for `WebClient`). This allows you to define expectations for the outgoing request and return a controlled, mock response, ensuring the test doesn't actually call the external API."
      },
      jp: {
        title: "RestTemplate/WebClientのモック",
        body: "外部REST APIを消費するサービスの単体テストで、サービスロジックを分離するために、**`RestTemplate`**または**`WebClient`**からの応答を通常どのようにモックしますか？",
        solution: "通常、**`MockRestServiceServer`**（`RestTemplate`の場合）や**`MockWebServer`**（`WebClient`のサーバーをシミュレートする場合）などのメカニズムを使用します。これにより、送信リクエストの期待値を定義し、制御されたモック応答を返すことができ、テストが実際に外部APIを呼び出さないようにします。"
      },
      vi: {
        title: "Mock RestTemplate/WebClient",
        body: "Trong một unit test cho một service tiêu thụ API REST bên ngoài, làm thế nào bạn thường mock response từ **`RestTemplate`** hoặc **`WebClient`** để cô lập logic của service?",
        solution: "Bạn thường sử dụng một cơ chế như **`MockRestServiceServer`** (cho `RestTemplate`) hoặc **`MockWebServer`** (để mô phỏng server cho `WebClient`). Điều này cho phép bạn định nghĩa các kỳ vọng cho request đi và trả về một response giả lập, được kiểm soát, đảm bảo bài kiểm thử không thực sự gọi API bên ngoài."
      }
    }
  },
  {
    _id: "sb-j-030",
    difficulty: "junior",
    tags: ["security", "auth", "stateless"],
    content: {
      en: {
        title: "Stateless Security for REST",
        body: "What is the term for the most common authentication approach used in RESTful Spring Boot microservices that involves sending a credential with every request, and why is it preferred over session-based authentication?",
        solution: "The approach is **Token-based Authentication** (most commonly **JWT** - JSON Web Tokens). It is preferred because it is **stateless**, meaning the server doesn't need to maintain session data. This greatly simplifies horizontal scaling and load balancing across multiple service instances."
      },
      jp: {
        title: "RESTのステートレスセキュリティ",
        body: "すべてのリクエストで資格情報を送信することを含む、RESTful Spring Bootマイクロサービスで最も一般的に使用される認証アプローチの用語は何ですか、またセッションベースの認証よりもこれが好まれるのはなぜですか？",
        solution: "このアプローチは**トークンベース認証**（最も一般的には**JWT** - JSON Web Tokens）です。サーバーがセッションデータを維持する必要がないため、**ステートレス**であるため好まれます。これにより、複数のサービスインスタンス間での水平スケーリングと負荷分散が大幅に簡素化されます。"
      },
      vi: {
        title: "Bảo mật Stateless cho REST",
        body: "Thuật ngữ cho phương pháp xác thực phổ biến nhất được sử dụng trong các microservices Spring Boot RESTful, liên quan đến việc gửi một thông tin xác thực với mọi request, là gì, và tại sao nó được ưa chuộng hơn xác thực dựa trên session?",
        solution: "Phương pháp này là **Token-based Authentication** (phổ biến nhất là **JWT** - JSON Web Tokens). Nó được ưa chuộng vì nó **stateless** (không trạng thái), nghĩa là server không cần duy trì dữ liệu session. Điều này giúp đơn giản hóa đáng kể việc mở rộng quy mô ngang và cân bằng tải trên nhiều instance service."
      }
    }
  },
  {
    _id: "sb-j-031",
    difficulty: "junior",
    tags: ["data", "jpa", "n+1"],
    content: {
      en: {
        title: "Solving N+1 Problem in JPA",
        body: "What is the **N+1 Selects problem** in JPA, and name one JPQL/HQL technique used to solve it?",
        solution: "The N+1 problem occurs when fetching a list of parent entities (1 query) and then executing a separate query (N queries) to fetch the lazily loaded collection/association for *each* parent. It is solved using **Eager fetching** via a **`JOIN FETCH`** clause in a JPQL/HQL query, which fetches all related data in a single query."
      },
      jp: {
        title: "JPAにおけるN+1問題の解決",
        body: "JPAにおける**N+1 Selects問題**とは何ですか、またそれを解決するために使用される1つのJPQL/HQLテクニックの名前を挙げてください。",
        solution: "N+1問題は、親エンティティのリストをフェッチし（1つのクエリ）、次に*各*親の遅延ロードされたコレクション/関連付けをフェッチするために個別のクエリ（N個のクエリ）を実行するときに発生します。これは、JPQL/HQLクエリの**`JOIN FETCH`**句を介した**Eager fetching**を使用することで解決され、これによりすべての関連データが単一のクエリでフェッチされます。"
      },
      vi: {
        title: "Giải quyết vấn đề N+1 trong JPA",
        body: "**Vấn đề N+1 Selects** trong JPA là gì, và nêu tên một kỹ thuật JPQL/HQL được sử dụng để giải quyết nó?",
        solution: "Vấn đề N+1 xảy ra khi lấy một danh sách các entity cha (1 truy vấn) và sau đó thực thi một truy vấn riêng biệt (N truy vấn) để lấy collection/association được tải lười biếng cho *mỗi* entity cha. Nó được giải quyết bằng cách sử dụng **Eager fetching** thông qua một mệnh đề **`JOIN FETCH`** trong một truy vấn JPQL/HQL, phương pháp này lấy tất cả dữ liệu liên quan trong một truy vấn duy nhất."
      }
    }
  },
  {
    _id: "sb-j-032",
    difficulty: "junior",
    tags: ["actuator", "metrics", "micrometer"],
    content: {
      en: {
        title: "Micrometer Purpose",
        body: "What role does **Micrometer** play in Spring Boot Actuator, and what kind of data does it expose?",
        solution: "**Micrometer** is the **metrics collection facade** used by Spring Boot. It provides a vendor-neutral API for collecting and tracking application metrics (e.g., HTTP request latency, JVM memory usage, database connection pool size) and exporting them to monitoring systems like Prometheus or Datadog."
      },
      jp: {
        title: "Micrometerの目的",
        body: "**Micrometer**はSpring Boot Actuatorでどのような役割を果たし、どのような種類のデータを公開しますか？",
        solution: "**Micrometer**は、Spring Bootで使用される**メトリクス収集ファサード**です。これは、アプリケーションメトリクス（例：HTTPリクエストの遅延、JVMメモリ使用量、データベース接続プールサイズ）を収集および追跡し、PrometheusやDatadogなどの監視システムにエクスポートするためのベンダーニュートラルなAPIを提供します。"
      },
      vi: {
        title: "Mục đích Micrometer",
        body: "**Micrometer** đóng vai trò gì trong Spring Boot Actuator, và nó phơi bày (expose) loại dữ liệu nào?",
        solution: "**Micrometer** là **facade thu thập metric** được Spring Boot sử dụng. Nó cung cấp một API trung lập với nhà cung cấp để thu thập và theo dõi các metric ứng dụng (ví dụ: độ trễ request HTTP, mức sử dụng bộ nhớ JVM, kích thước pool kết nối cơ sở dữ liệu) và xuất chúng sang các hệ thống giám sát như Prometheus hoặc Datadog."
      }
    }
  },
  {
    _id: "sb-j-033",
    difficulty: "junior",
    tags: ["data", "redis", "caching"],
    content: {
      en: {
        title: "Caching with @Cacheable",
        body: "What is the function of the **@Cacheable** annotation in a Spring service method, and what popular in-memory data store is often used as the backing cache?",
        solution: "**@Cacheable** causes Spring to **check the cache before executing the method**. If the data is in the cache (hit), the cached result is returned without running the method; otherwise (miss), the method runs, and its result is placed in the cache. **Redis** is a popular external cache store."
      },
      jp: {
        title: "@Cacheableによるキャッシング",
        body: "Springサービスメソッドにおける**@Cacheable**アノテーションの機能は何ですか、またバッキングキャッシュとしてよく使用される人気のあるインメモリデータストアは何ですか？",
        solution: "**@Cacheable**は、Springに**メソッドを実行する前にキャッシュをチェックさせる**ようにします。データがキャッシュにある場合（ヒット）、メソッドを実行せずにキャッシュされた結果が返されます。そうでない場合（ミス）、メソッドが実行され、その結果がキャッシュに配置されます。**Redis**は人気のある外部キャッシュストアです。"
      },
      vi: {
        title: "Caching với @Cacheable",
        body: "Chức năng của annotation **@Cacheable** trong một phương thức service của Spring là gì, và kho lưu trữ dữ liệu in-memory phổ biến nào thường được sử dụng làm cache hỗ trợ?",
        solution: "**@Cacheable** khiến Spring **kiểm tra cache trước khi thực thi phương thức**. Nếu dữ liệu nằm trong cache (hit), kết quả được cache sẽ được trả về mà không cần chạy phương thức; ngược lại (miss), phương thức chạy, và kết quả của nó được đặt vào cache. **Redis** là một kho cache ngoài phổ biến."
      }
    }
  },
  {
    _id: "sb-j-034",
    difficulty: "junior",
    tags: ["scheduling", "task"],
    content: {
      en: {
        title: "@Scheduled Annotation",
        body: "What is the purpose of the **@Scheduled** annotation, and what other annotation must be present in the configuration class to enable this feature?",
        solution: "**@Scheduled** is used to define methods that should run **periodically or at fixed times** (scheduled tasks/jobs). To enable this feature across the application, the configuration class (e.g., the main application class) must be annotated with **@EnableScheduling**."
      },
      jp: {
        title: "@Scheduledアノテーション",
        body: "**@Scheduled**アノテーションの目的は何ですか、またこの機能を有効にするために構成クラスに存在しなければならない他のアノテーションは何ですか？",
        solution: "**@Scheduled**は、**定期的にまたは固定された時間に**実行されるべきメソッド（スケジュールされたタスク/ジョブ）を定義するために使用されます。アプリケーション全体でこの機能を有効にするには、構成クラス（例：メインアプリケーションクラス）に**@EnableScheduling**アノテーションを付ける必要があります。"
      },
      vi: {
        title: "Annotation @Scheduled",
        body: "Mục đích của annotation **@Scheduled** là gì, và annotation nào khác phải có mặt trong lớp cấu hình để bật tính năng này?",
        solution: "**@Scheduled** được sử dụng để định nghĩa các phương thức nên chạy **định kỳ hoặc vào các thời điểm cố định** (các tác vụ/job được lên lịch). Để bật tính năng này trên toàn ứng dụng, lớp cấu hình (ví dụ: lớp ứng dụng chính) phải được đánh dấu bằng **@EnableScheduling**."
      }
    }
  },
  {
    _id: "sb-j-035",
    difficulty: "junior",
    tags: ["data", "jpa", "optimistic-lock"],
    content: {
      en: {
        title: "Optimistic Locking",
        body: "Explain the concept of **Optimistic Locking** in JPA and how it is typically implemented using the **@Version** annotation.",
        solution: "Optimistic Locking assumes that **conflicts are rare**. It doesn't lock the database row. Instead, the **@Version** field (typically an integer or timestamp) is checked before committing an update. If the version number has changed since the entity was loaded, another transaction has modified the data, and an `OptimisticLockException` is thrown, preventing lost updates."
      },
      jp: {
        title: "楽観的ロック",
        body: "JPAにおける**楽観的ロック**の概念と、**@Version**アノテーションを使用してそれが通常どのように実装されるかを説明してください。",
        solution: "楽観的ロックは、**競合がまれである**と想定しています。データベースの行をロックしません。代わりに、更新をコミットする前に**@Version**フィールド（通常は整数またはタイムスタンプ）がチェックされます。エンティティがロードされてからバージョン番号が変更されている場合、別のトランザクションがデータを変更しており、`OptimisticLockException`がスローされ、失われた更新を防ぎます。"
      },
      vi: {
        title: "Optimistic Locking",
        body: "Giải thích khái niệm **Optimistic Locking** trong JPA và cách nó thường được implement bằng cách sử dụng annotation **@Version**.",
        solution: "Optimistic Locking giả định rằng **xung đột là hiếm**. Nó không khóa hàng cơ sở dữ liệu. Thay vào đó, trường **@Version** (thường là một số nguyên hoặc timestamp) được kiểm tra trước khi commit một bản cập nhật. Nếu số phiên bản đã thay đổi kể từ khi entity được tải, một transaction khác đã sửa đổi dữ liệu, và một `OptimisticLockException` được ném ra, ngăn ngừa mất mát bản cập nhật (lost updates)."
      }
    }
  },
  {
    _id: "sb-j-036",
    difficulty: "junior",
    tags: ["ioc", "factory-bean", "design-pattern"],
    content: {
      en: {
        title: "FactoryBean Use Case",
        body: "What is a **FactoryBean** in Spring, and why would you implement one instead of creating a standard `@Bean` method?",
        solution: "A **FactoryBean** is a specialized bean used to produce other beans. You implement it when the **bean creation logic is complex** or requires a **complex setup/teardown** (e.g., creating a JNDI DataSource, integrating with third-party libraries that need specific factory methods). It gives you more control over the object's lifecycle."
      },
      jp: {
        title: "FactoryBeanの使用例",
        body: "Springにおける**FactoryBean**とは何ですか、また標準の`@Bean`メソッドを作成する代わりにそれを実装するのはなぜですか？",
        solution: "**FactoryBean**は、他のBeanを生成するために使用される特殊なBeanです。**Beanの作成ロジックが複雑**な場合や、**複雑なセットアップ/ティアダウン**が必要な場合（例：JNDI DataSourceの作成、特定のファクトリメソッドを必要とするサードパーティライブラリとの統合）に実装します。これにより、オブジェクトのライフサイクルをより詳細に制御できます。"
      },
      vi: {
        title: "Trường hợp sử dụng FactoryBean",
        body: "**FactoryBean** trong Spring là gì, và tại sao bạn lại implement nó thay vì tạo một phương thức `@Bean` tiêu chuẩn?",
        solution: "Một **FactoryBean** là một bean chuyên biệt được sử dụng để tạo ra các bean khác. Bạn implement nó khi **logic tạo bean phức tạp** hoặc yêu cầu **thiết lập/hủy bỏ phức tạp** (ví dụ: tạo một JNDI DataSource, tích hợp với các thư viện bên thứ ba cần các phương thức factory cụ thể). Nó cung cấp cho bạn nhiều quyền kiểm soát hơn đối với vòng đời của đối tượng."
      }
    }
  },
  {
    _id: "sb-j-037",
    difficulty: "junior",
    tags: ["data", "jpa", "lazy-loading"],
    content: {
      en: {
        title: "Open Session In View Anti-Pattern",
        body: "Briefly explain the **Open Session In View (OSIV)** anti-pattern and why many developers disable it in modern Spring Boot applications.",
        solution: "OSIV is a pattern where the JPA `EntityManager` (or Hibernate `Session`) is **kept open** during the entire request processing lifecycle, including the rendering of the view (or response body). It prevents `LazyInitializationException` but is an **anti-pattern** because it ties up database resources longer than necessary, making transactions less explicit, and can mask the N+1 problem."
      },
      jp: {
        title: "Open Session In Viewアンチパターン",
        body: "**Open Session In View (OSIV)**アンチパターンを簡単に説明し、多くの開発者が現代のSpring Bootアプリケーションでそれを無効にする理由を説明してください。",
        solution: "OSIVは、JPA `EntityManager`（またはHibernate `Session`）が、ビューのレンダリング（または応答本文）を含むリクエスト処理ライフサイクル全体で**開いたまま**にされるパターンです。これは`LazyInitializationException`を防ぎますが、データベースリソースを必要以上に長く占有し、トランザクションを不明瞭にし、N+1問題を隠蔽する可能性があるため、**アンチパターン**です。"
      },
      vi: {
        title: "Anti-Pattern Open Session In View",
        body: "Giải thích ngắn gọn **Open Session In View (OSIV)** anti-pattern và tại sao nhiều nhà phát triển tắt nó trong các ứng dụng Spring Boot hiện đại.",
        solution: "OSIV là một pattern trong đó `EntityManager` của JPA (hoặc `Session` của Hibernate) được **giữ mở** trong suốt vòng đời xử lý request, bao gồm cả việc render view (hoặc nội dung phản hồi). Nó ngăn ngừa `LazyInitializationException` nhưng là một **anti-pattern** vì nó giữ tài nguyên cơ sở dữ liệu lâu hơn mức cần thiết, làm cho các transaction kém rõ ràng hơn và có thể che giấu vấn đề N+1."
      }
    }
  },
  {
    _id: "sb-j-038",
    difficulty: "junior",
    tags: ["security", "auth", "oauth2"],
    content: {
      en: {
        title: "JWT Structure",
        body: "What are the three distinct parts of a standard **JSON Web Token (JWT)**, separated by dots (`.`), and which part is used for verification?",
        solution: "The three parts are: 1. **Header** (type of token, signing algorithm), 2. **Payload** (claims/user data), and 3. **Signature**. The **Signature** is used for verification to ensure the token has not been tampered with."
      },
      jp: {
        title: "JWTの構造",
        body: "標準の**JSON Web Token (JWT)**のドット（`.`）で区切られた3つの異なる部分は何ですか、またどの部分が検証に使用されますか？",
        solution: "3つの部分は、1. **ヘッダー**（トークンのタイプ、署名アルゴリズム）、2. **ペイロード**（クレーム/ユーザーデータ）、および3. **署名**です。**署名**は、トークンが改ざんされていないことを確認するための検証に使用されます。"
      },
      vi: {
        title: "Cấu trúc JWT",
        body: "Ba phần riêng biệt của một **JSON Web Token (JWT)** tiêu chuẩn, được phân tách bằng dấu chấm (`.`), là gì, và phần nào được sử dụng để xác minh?",
        solution: "Ba phần là: 1. **Header** (loại token, thuật toán ký), 2. **Payload** (claims/dữ liệu người dùng), và 3. **Signature**. Phần **Signature** được sử dụng để xác minh nhằm đảm bảo token chưa bị giả mạo."
      }
    }
  },
  {
    _id: "sb-j-039",
    difficulty: "junior",
    tags: ["actuator", "jmx", "management"],
    content: {
      en: {
        title: "Actuator Management Port",
        body: "Explain how you can configure a Spring Boot application to expose Actuator endpoints on a **different port** than the main application port, and why this is often done.",
        solution: "You configure this using the property **`management.server.port`** (e.g., `management.server.port=8081`). This is done for **security and separation**; the management endpoints (health, metrics) can be restricted to internal networks or tools, separate from the public-facing application traffic on the main port."
      },
      jp: {
        title: "Actuator管理ポート",
        body: "Spring Bootアプリケーションを、メインアプリケーションポートとは**異なるポート**でActuatorエンドポイントを公開するように構成する方法と、これがよく行われる理由を説明してください。",
        solution: "これはプロパティ**`management.server.port`**（例：`management.server.port=8081`）を使用して構成します。これは、**セキュリティと分離**のために行われます。管理エンドポイント（ヘルス、メトリクス）は、メインポートの公開アプリケーションのトラフィックとは別に、内部ネットワークまたはツールに制限できます。"
      },
      vi: {
        title: "Actuator Management Port",
        body: "Giải thích cách bạn có thể cấu hình một ứng dụng Spring Boot để phơi bày các endpoint Actuator trên một **cổng khác** so với cổng ứng dụng chính, và tại sao điều này thường được thực hiện.",
        solution: "Bạn cấu hình điều này bằng cách sử dụng thuộc tính **`management.server.port`** (ví dụ: `management.server.port=8081`). Điều này được thực hiện vì **lý do bảo mật và tách biệt**; các endpoint quản lý (health, metrics) có thể được giới hạn cho các mạng nội bộ hoặc công cụ, tách biệt khỏi lưu lượng truy cập ứng dụng công cộng trên cổng chính."
      }
    }
  },
  {
    _id: "sb-j-040",
    difficulty: "junior",
    tags: ["properties", "profile", "yaml"],
    content: {
      en: {
        title: "YAML Profile Syntax",
        body: "In `application.yml`, how do you define properties that should only be active when the **'prod'** profile is active, using the YAML profile syntax?",
        solution: "You use the document separator and the `spring.config.activate.on-profile` property: \n```yaml\n---\nspring.config.activate.on-profile: prod\nserver.port: 80\n```"
      },
      jp: {
        title: "YAMLプロファイル構文",
        body: "`application.yml`で、YAMLプロファイル構文を使用して、**'prod'**プロファイルがアクティブな場合にのみアクティブにする必要があるプロパティをどのように定義しますか？",
        solution: "ドキュメントセパレータと`spring.config.activate.on-profile`プロパティを使用します: \n```yaml\n---\nspring.config.activate.on-profile: prod\nserver.port: 80\n```"
      },
      vi: {
        title: "Cú pháp Profile YAML",
        body: "Trong `application.yml`, làm thế nào bạn định nghĩa các thuộc tính chỉ nên hoạt động khi profile **'prod'** được kích hoạt, sử dụng cú pháp profile YAML?",
        solution: "Bạn sử dụng bộ phân tách tài liệu và thuộc tính `spring.config.activate.on-profile`: \n```yaml\n---\nspring.config.activate.on-profile: prod\nserver.port: 80\n```"
      }
    }
  },
  {
    _id: "sb-j-041",
    difficulty: "junior",
    tags: ["rest", "http", "idempotent"],
    content: {
      en: {
        title: "Idempotency in REST",
        body: "Define the term **idempotent** in the context of RESTful HTTP methods, and name the two primary idempotent methods.",
        solution: "An operation is **idempotent** if it produces the **same result regardless of how many times it is executed**. The primary idempotent methods are **GET**, **PUT**, and **DELETE**."
      },
      jp: {
        title: "RESTにおける冪等性",
        body: "RESTful HTTPメソッドの文脈で**冪等性（idempotent）**という用語を定義し、主要な2つの冪等なメソッドの名前を挙げてください。",
        solution: "操作は、**実行された回数に関係なく同じ結果**を生成する場合に**冪等**です。主要な冪等なメソッドは、**GET**、**PUT**、および**DELETE**です。"
      },
      vi: {
        title: "Idempotency trong REST",
        body: "Định nghĩa thuật ngữ **idempotent** (lũy đẳng) trong bối cảnh các phương thức HTTP RESTful, và nêu tên hai phương thức lũy đẳng chính.",
        solution: "Một thao tác là **idempotent** nếu nó tạo ra **cùng một kết quả bất kể nó được thực thi bao nhiêu lần**. Hai phương thức lũy đẳng chính là **GET**, **PUT**, và **DELETE**."
      }
    }
  },
  {
    _id: "sb-j-042",
    difficulty: "junior",
    tags: ["messaging", "jms", "amqp"],
    content: {
      en: {
        title: "Messaging with Spring",
        body: "What dependency 'Starter' would you add to a Spring Boot project to easily configure it to send and receive messages using a standard protocol like RabbitMQ or ActiveMQ?",
        solution: "You would typically use the **`spring-boot-starter-amqp`** (for AMQP, used by RabbitMQ) or **`spring-boot-starter-jms`** (for JMS, used by ActiveMQ/Artemis). These starters automatically configure the necessary connection factories and message templates."
      },
      jp: {
        title: "Springを使用したメッセージング",
        body: "RabbitMQやActiveMQなどの標準プロトコルを使用してメッセージを送受信するように簡単に構成するために、Spring Bootプロジェクトに追加する依存関係の「Starter」は何ですか？",
        solution: "通常、**`spring-boot-starter-amqp`**（AMQP、RabbitMQで使用）または**`spring-boot-starter-jms`**（JMS、ActiveMQ/Artemisで使用）を使用します。これらのスターターは、必要な接続ファクトリとメッセテンプレートを自動的に構成します。"
      },
      vi: {
        title: "Messaging với Spring",
        body: "'Starter' dependency nào bạn sẽ thêm vào một dự án Spring Boot để dễ dàng cấu hình nó gửi và nhận tin nhắn bằng cách sử dụng một giao thức chuẩn như RabbitMQ hoặc ActiveMQ?",
        solution: "Bạn thường sử dụng **`spring-boot-starter-amqp`** (cho AMQP, được sử dụng bởi RabbitMQ) hoặc **`spring-boot-starter-jms`** (cho JMS, được sử dụng bởi ActiveMQ/Artemis). Các starter này tự động cấu hình các connection factory và message template cần thiết."
      }
    }
  },
  {
    _id: "sb-j-043",
    difficulty: "junior",
    tags: ["data", "jpa", "pagination"],
    content: {
      en: {
        title: "Pagination in Spring Data",
        body: "In Spring Data JPA, what method parameter should you add to a Repository method to easily enable **pagination** and **sorting** of the results?",
        solution: "You should add a **`Pageable`** object as a parameter. The Repository method should then return a **`Page<T>`** object, which contains not only the fetched data but also metadata like the total number of pages and the total number of elements."
      },
      jp: {
        title: "Spring Dataのページネーション",
        body: "Spring Data JPAで、結果の**ページネーション**と**ソート**を簡単に有効にするために、リポジトリメソッドに追加する必要があるメソッドパラメーターは何ですか？",
        solution: "パラメーターとして**`Pageable`**オブジェクトを追加する必要があります。その後、リポジトリメソッドは、フェッチされたデータだけでなく、総ページ数や要素の総数などのメタデータも含む**`Page<T>`**オブジェクトを返す必要があります。"
      },
      vi: {
        title: "Pagination trong Spring Data",
        body: "Trong Spring Data JPA, tham số phương thức nào bạn nên thêm vào một phương thức Repository để dễ dàng bật **phân trang (pagination)** và **sắp xếp (sorting)** kết quả?",
        solution: "Bạn nên thêm một đối tượng **`Pageable`** làm tham số. Phương thức Repository sau đó nên trả về một đối tượng **`Page<T>`**, đối tượng này chứa không chỉ dữ liệu đã được fetch mà còn cả metadata như tổng số trang và tổng số phần tử."
      }
    }
  },
  {
    _id: "sb-j-044",
    difficulty: "junior",
    tags: ["testing", "client", "web-flux"],
    content: {
      en: {
        title: "WebClient Mocking",
        body: "What is the name of the reactive, Spring-provided mechanism often used to mock the behavior of `WebClient` in integration tests?",
        solution: "The mechanism is **`MockWebServer`** (a library by Square, commonly used to simulate a server for `WebClient`) or Spring's own **`WebTestClient`** which is designed for testing web endpoints using `WebClient` style assertions."
      },
      jp: {
        title: "WebClientのモック",
        body: "統合テストで`WebClient`の動作をモックするためによく使用される、Spring提供のリアクティブなメカニズムの名前は何ですか？",
        solution: "そのメカニズムは**`MockWebServer`**（Squareによるライブラリ、`WebClient`のサーバーをシミュレートするためによく使用される）またはSpring独自の**`WebTestClient`**であり、`WebClient`スタイルのアサーションを使用してWebエンドポイントをテストするために設計されています。"
      },
      vi: {
        title: "Mocking WebClient",
        body: "Tên của cơ chế reactive, do Spring cung cấp, thường được sử dụng để mock hành vi của `WebClient` trong các bài kiểm thử tích hợp là gì?",
        solution: "Cơ chế đó là **`MockWebServer`** (một thư viện của Square, thường được sử dụng để mô phỏng một server cho `WebClient`) hoặc **`WebTestClient`** của Spring, được thiết kế để kiểm thử các endpoint web bằng cách sử dụng các assertion kiểu `WebClient`."
      }
    }
  },
  {
    _id: "sb-j-045",
    difficulty: "junior",
    tags: ["actuator", "tracing", "sleuth"],
    content: {
      en: {
        title: "Distributed Tracing",
        body: "In a microservices environment, what problem does **Distributed Tracing** (e.g., using Spring Cloud Sleuth/OpenTelemetry) solve?",
        solution: "Distributed Tracing solves the problem of **observability and debugging** when a request spans multiple services. It generates unique **Trace IDs** and **Span IDs** that are propagated through all service calls, allowing developers to see the complete path, timing, and latency of a single request as it flows through the system."
      },
      jp: {
        title: "分散トレーシング",
        body: "マイクロサービス環境において、**分散トレーシング**（例：Spring Cloud Sleuth/OpenTelemetryの使用）はどのような問題を解決しますか？",
        solution: "分散トレーシングは、リクエストが複数のサービスにまたがる場合の**可観測性とデバッグ**の問題を解決します。一意の**トレースID**と**スパンID**を生成し、すべてのサービス呼び出しを通じて伝播させることで、開発者は単一のリクエストがシステム内を流れる際の完全なパス、タイミング、および遅延を確認できます。"
      },
      vi: {
        title: "Distributed Tracing",
        body: "Trong môi trường microservices, **Distributed Tracing** (ví dụ: sử dụng Spring Cloud Sleuth/OpenTelemetry) giải quyết vấn đề gì?",
        solution: "Distributed Tracing giải quyết vấn đề **khả năng quan sát (observability) và debug** khi một request trải dài qua nhiều service. Nó tạo ra **Trace ID** và **Span ID** duy nhất được truyền đi qua tất cả các lời gọi service, cho phép các nhà phát triển thấy toàn bộ đường đi, thời gian và độ trễ của một request duy nhất khi nó chảy qua hệ thống."
      }
    }
  },
  {
    _id: "sb-j-046",
    difficulty: "junior",
    tags: ["data", "jdbc", "naming"],
    content: {
      en: {
        title: "JdbcTemplate vs NamedParameterJdbcTemplate",
        body: "What is the key advantage of using Spring's **`NamedParameterJdbcTemplate`** over the standard **`JdbcTemplate`** for writing SQL queries?",
        solution: "**`NamedParameterJdbcTemplate`** allows you to use **named parameters** (e.g., `:username` instead of `?`) in your SQL queries. This makes the queries much more **readable and maintainable**, especially when dealing with many parameters, as you don't have to worry about the order of the question marks (`?`)."
      },
      jp: {
        title: "JdbcTemplateとNamedParameterJdbcTemplate",
        body: "SQLクエリを作成する際に、標準の**`JdbcTemplate`**ではなく、Springの**`NamedParameterJdbcTemplate`**を使用する主な利点は何ですか？",
        solution: "**`NamedParameterJdbcTemplate`**を使用すると、SQLクエリで**名前付きパラメーター**（例：`?`の代わりに`:username`）を使用できます。これにより、クエリが**はるかに読みやすく保守しやすく**なります。特に多くのパラメーターを扱う場合、疑問符（`?`）の順序を気にする必要がなくなります。"
      },
      vi: {
        title: "JdbcTemplate vs NamedParameterJdbcTemplate",
        body: "Lợi thế chính của việc sử dụng **`NamedParameterJdbcTemplate`** của Spring so với **`JdbcTemplate`** tiêu chuẩn để viết các truy vấn SQL là gì?",
        solution: "**`NamedParameterJdbcTemplate`** cho phép bạn sử dụng **tham số được đặt tên** (ví dụ: `:username` thay vì `?`) trong các truy vấn SQL của bạn. Điều này làm cho các truy vấn **dễ đọc và dễ bảo trì** hơn nhiều, đặc biệt khi xử lý nhiều tham số, vì bạn không phải lo lắng về thứ tự của các dấu chấm hỏi (`?`)."
      }
    }
  },
  {
    _id: "sb-j-047",
    difficulty: "junior",
    tags: ["data", "jpa", "fetch-join"],
    content: {
      en: {
        title: "Criteria API Fetch Join",
        body: "In the JPA Criteria API, what method is equivalent to the `JOIN FETCH` clause in JPQL, and what is its effect on the query result?",
        solution: "The method is **`.fetch()`**. Its effect is to tell the persistence provider (e.g., Hibernate) to **eagerly retrieve the associated entities** in the same query, preventing subsequent lazy loading queries and avoiding the N+1 problem."
      },
      jp: {
        title: "Criteria APIフェッチ結合",
        body: "JPA Criteria APIにおいて、JPQLの`JOIN FETCH`句に相当するメソッドは何ですか、またクエリ結果にどのような影響を与えますか？",
        solution: "そのメソッドは**`.fetch()`**です。その効果は、永続化プロバイダー（例：Hibernate）に、同じクエリで**関連エンティティをEagerに取得する**ように指示することであり、その後の遅延ロードクエリを防ぎ、N+1問題を回避します。"
      },
      vi: {
        title: "Fetch Join trong Criteria API",
        body: "Trong JPA Criteria API, phương thức nào tương đương với mệnh đề `JOIN FETCH` trong JPQL, và ảnh hưởng của nó đối với kết quả truy vấn là gì?",
        solution: "Phương thức đó là **`.fetch()`**. Ảnh hưởng của nó là báo cho nhà cung cấp persistence (ví dụ: Hibernate) **tải ngay lập tức các entity liên quan** trong cùng một truy vấn, ngăn ngừa các truy vấn tải lười biếng tiếp theo và tránh vấn đề N+1."
      }
    }
  },
  {
    _id: "sb-j-048",
    difficulty: "junior",
    tags: ["rest", "cors", "filter"],
    content: {
      en: {
        title: "Global CORS Configuration",
        body: "If you need to configure CORS for **all** controllers globally, what method should you override in a class that implements `WebMvcConfigurer`?",
        solution: "You should override the **`addCorsMappings(CorsRegistry registry)`** method. This allows you to configure global CORS rules for patterns, allowed origins, HTTP methods, and headers."
      },
      jp: {
        title: "グローバルCORS構成",
        body: "**すべて**のコントローラーに対してCORSをグローバルに構成する必要がある場合、`WebMvcConfigurer`を実装するクラスでどのメソッドをオーバーライドする必要がありますか？",
        solution: "**`addCorsMappings(CorsRegistry registry)`**メソッドをオーバーライドする必要があります。これにより、パターン、許可されたオリジン、HTTPメソッド、およびヘッダーのグローバルCORSルールを構成できます。"
      },
      vi: {
        title: "Cấu hình CORS Toàn cục",
        body: "Nếu bạn cần cấu hình CORS cho **tất cả** các controller một cách toàn cục, bạn nên override phương thức nào trong một class implement `WebMvcConfigurer`?",
        solution: "Bạn nên override phương thức **`addCorsMappings(CorsRegistry registry)`**. Điều này cho phép bạn cấu hình các quy tắc CORS toàn cục cho các pattern, allowed origins, HTTP methods, và headers."
      }
    }
  },
  {
    _id: "sb-j-049",
    difficulty: "junior",
    tags: ["data", "transaction", "read-only"],
    content: {
      en: {
        title: "Read-Only Transaction Benefit",
        body: "When should you set `@Transactional(readOnly = true)` on a service method, and what is the main benefit for the database?",
        solution: "You should set it when the method only **reads data** and performs no modifications (no inserts, updates, or deletes). The main database benefit is **optimization**: the database can potentially skip unnecessary locking, leading to better concurrency and sometimes slightly faster query execution."
      },
      jp: {
        title: "読み取り専用トランザクションの利点",
        body: "サービスメソッドに`@Transactional(readOnly = true)`を設定すべきなのはいつですか、またデータベースにとっての主な利点は何ですか？",
        solution: "メソッドが**データを読み取るだけ**で変更（挿入、更新、削除なし）を実行しない場合に設定する必要があります。主なデータベースの利点は**最適化**です。データベースは不要なロックをスキップできる可能性があり、並行性の向上と、場合によってはクエリ実行のわずかな高速化につながります。"
      },
      vi: {
        title: "Lợi ích Transaction Read-Only",
        body: "Khi nào bạn nên đặt `@Transactional(readOnly = true)` trên một phương thức service, và lợi ích chính đối với cơ sở dữ liệu là gì?",
        solution: "Bạn nên đặt nó khi phương thức chỉ **đọc dữ liệu** và không thực hiện bất kỳ sửa đổi nào (không insert, update, hoặc delete). Lợi ích chính của cơ sở dữ liệu là **tối ưu hóa**: cơ sở dữ liệu có thể bỏ qua việc khóa không cần thiết, dẫn đến khả năng đồng thời tốt hơn và đôi khi thực thi truy vấn nhanh hơn một chút."
      }
    }
  },
  {
    _id: "sb-j-050",
    difficulty: "junior",
    tags: ["security", "auth", "http-basic"],
    content: {
      en: {
        title: "HTTP Basic Authentication Drawback",
        body: "What is the major security drawback of using **HTTP Basic Authentication** (sending username/password in a header) without HTTPS?",
        solution: "The major drawback is that the username and password are **Base64-encoded, not encrypted**, and are sent in the clear (plain text) over the network. Anyone sniffing the network traffic can easily decode the credentials, making it highly vulnerable to eavesdropping unless HTTPS (TLS/SSL) is enforced."
      },
      jp: {
        title: "HTTP基本認証の欠点",
        body: "HTTPSを使用せずに**HTTP基本認証**（ヘッダーでユーザー名/パスワードを送信）を使用することの主要なセキュリティ上の欠点は何ですか？",
        solution: "主要な欠点は、ユーザー名とパスワードが**Base64でエンコードされているだけで、暗号化されておらず**、ネットワーク上でクリア（プレーンテキスト）で送信されることです。HTTPS（TLS/SSL）が強制されていない限り、ネットワークトラフィックを傍受している人は誰でも簡単に資格情報をデコードでき、盗聴に対して非常に脆弱になります。"
      },
      vi: {
        title: "Hạn chế HTTP Basic Authentication",
        body: "Hạn chế bảo mật lớn nhất của việc sử dụng **HTTP Basic Authentication** (gửi username/password trong header) mà không có HTTPS là gì?",
        solution: "Hạn chế lớn nhất là username và password được **mã hóa Base64, không phải mã hóa**, và được gửi đi dưới dạng rõ ràng (plain text) qua mạng. Bất kỳ ai theo dõi lưu lượng mạng đều có thể dễ dàng giải mã thông tin xác thực, khiến nó rất dễ bị nghe lén trừ khi HTTPS (TLS/SSL) được áp dụng."
      }
    }
  }
];
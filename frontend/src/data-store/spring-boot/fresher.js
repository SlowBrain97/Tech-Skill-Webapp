export const springBootFresherQuestions = [
  {
    _id: "sb-f-001",
    difficulty: "fresher",
    tags: ["spring-boot", "difference"],
    content: {
      en: {
        title: "Spring Boot vs Spring (XML)",
        body: "What is the primary goal of Spring Boot, especially compared to traditional Spring Framework applications (which often use XML configuration)?",
        solution: "The primary goal of Spring Boot is to **simplify and speed up the setup and development** of Spring applications. It achieves this through **Convention over Configuration**, removing the need for extensive XML or manual configuration (like setting up Tomcat or DispatcherServlet)."
      },
      jp: {
        title: "Spring BootとSpring (XML) の違い",
        body: "従来のSpring Frameworkアプリケーション（多くの場合XML構成を使用）と比較して、Spring Bootの主要な目的は何ですか？",
        solution: "Spring Bootの主要な目的は、Springアプリケーションの**セットアップと開発を簡素化し、高速化する**ことです。これは、**設定よりも規約**を通じて実現され、広範なXMLや手動構成（TomcatやDispatcherServletの設定など）の必要性を排除します。"
      },
      vi: {
        title: "Spring Boot vs Spring (XML)",
        body: "Mục tiêu chính của Spring Boot là gì, đặc biệt khi so sánh với các ứng dụng Spring Framework truyền thống (thường sử dụng cấu hình XML)?",
        solution: "Mục tiêu chính của Spring Boot là **đơn giản hóa và tăng tốc quá trình thiết lập và phát triển** các ứng dụng Spring. Nó đạt được điều này thông qua **Quy ước hơn Cấu hình (Convention over Configuration)**, loại bỏ nhu cầu cấu hình XML hoặc cấu hình thủ công mở rộng (như thiết lập Tomcat hoặc DispatcherServlet)."
      }
    }
  },
  {
    _id: "sb-f-002",
    difficulty: "fresher",
    tags: ["annotation", "entry-point"],
    content: {
      en: {
        title: "@SpringBootApplication Role",
        body: "What is the significance of the **@SpringBootApplication** annotation, and where is it typically placed in a Spring Boot project?",
        solution: "It is the **main entry point** annotation for a Spring Boot application. It is typically placed on the main class containing the `main()` method. It is a convenience annotation that combines three key annotations: `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`."
      },
      jp: {
        title: "@SpringBootApplicationの役割",
        body: "**@SpringBootApplication**アノテーションの重要性は何ですか、またSpring Bootプロジェクトでは通常どこに配置されますか？",
        solution: "これは、Spring Bootアプリケーションの**主要なエントリポイント**アノテーションです。通常、`main()`メソッドを含むメインクラスに配置されます。これは、3つの主要なアノテーション（`@Configuration`、`@EnableAutoConfiguration`、および`@ComponentScan`）を組み合わせた便利なアノテーションです。"
      },
      vi: {
        title: "Vai trò @SpringBootApplication",
        body: "Ý nghĩa của annotation **@SpringBootApplication** là gì, và nó thường được đặt ở đâu trong một dự án Spring Boot?",
        solution: "Đây là annotation **điểm khởi đầu (entry point) chính** cho một ứng dụng Spring Boot. Nó thường được đặt trên lớp chính chứa phương thức `main()`. Đây là một annotation tiện lợi kết hợp ba annotation quan trọng: `@Configuration`, `@EnableAutoConfiguration`, và `@ComponentScan`."
      }
    }
  },
  {
    _id: "sb-f-003",
    difficulty: "fresher",
    tags: ["ioc", "dependency-injection"],
    content: {
      en: {
        title: "Dependency Injection (DI)",
        body: "Define **Dependency Injection (DI)** in the context of Spring and Spring Boot. Why is it used?",
        solution: "DI is a core concept where the **IoC Container (Spring)** manages object creation and wiring its dependencies (collaborating objects) to it. Instead of the object creating its dependencies, the container 'injects' them. This reduces coupling and makes components easier to test and maintain."
      },
      jp: {
        title: "依存性注入 (DI)",
        body: "SpringおよびSpring Bootの文脈における**依存性注入（DI）**を定義してください。なぜそれが使用されるのですか？",
        solution: "DIは、**IoCコンテナ（Spring）**がオブジェクトの作成と、その依存関係（連携するオブジェクト）のワイヤリングを管理する中核的な概念です。オブジェクトが依存関係を作成する代わりに、コンテナがそれらを「注入」します。これにより、結合度が低下し、コンポーネントのテストと保守が容易になります。"
      },
      vi: {
        title: "Dependency Injection (DI)",
        body: "Định nghĩa **Dependency Injection (DI)** trong bối cảnh Spring và Spring Boot. Tại sao nó được sử dụng?",
        solution: "DI là một khái niệm cốt lõi, trong đó **IoC Container (Spring)** quản lý việc tạo đối tượng và kết nối các dependency (các đối tượng cộng tác) vào nó. Thay vì đối tượng tự tạo ra các dependency của nó, container sẽ 'inject' chúng vào. Điều này giúp giảm khớp nối (coupling) và làm cho các thành phần dễ kiểm thử và bảo trì hơn."
      }
    }
  },
  {
    _id: "sb-f-004",
    difficulty: "fresher",
    tags: ["annotation", "bean", "component"],
    content: {
      en: {
        title: "Purpose of @Component",
        body: "What is the purpose of the **@Component** annotation, and which other common Spring annotations are specialized versions of it?",
        solution: "**@Component** marks a plain Java class as a Spring-managed component (a Bean). Spring will detect and register it during component scanning. Specialized versions include **@Service**, **@Repository**, and **@Controller** (or **@RestController**)."
      },
      jp: {
        title: "@Componentの目的",
        body: "**@Component**アノテーションの目的は何ですか、またそれの特殊化されたバージョンである他の一般的なSpringアノテーションは何ですか？",
        solution: "**@Component**は、プレーンなJavaクラスをSpring管理のコンポーネント（Bean）としてマークします。Springはコンポーネントスキャン中にそれを検出して登録します。特殊化されたバージョンには、**@Service**、**@Repository**、および**@Controller**（または**@RestController**）が含まれます。"
      },
      vi: {
        title: "Mục đích @Component",
        body: "Mục đích của annotation **@Component** là gì, và những annotation Spring phổ biến nào khác là các phiên bản chuyên biệt của nó?",
        solution: "**@Component** đánh dấu một lớp Java thuần túy là một thành phần được Spring quản lý (một Bean). Spring sẽ phát hiện và đăng ký nó trong quá trình component scanning. Các phiên bản chuyên biệt bao gồm **@Service**, **@Repository**, và **@Controller** (hoặc **@RestController**)."
      }
    }
  },
  {
    _id: "sb-f-005",
    difficulty: "fresher",
    tags: ["annotation", "injection", "autowire"],
    content: {
      en: {
        title: "Purpose of @Autowired",
        body: "In Spring Boot, what is the role of the **@Autowired** annotation?",
        solution: "**@Autowired** is used for **Dependency Injection**. It tells Spring to automatically inject the required bean (dependency) into the field, setter method, or constructor where it is placed."
      },
      jp: {
        title: "@Autowiredの目的",
        body: "Spring Bootにおいて、**@Autowired**アノテーションの役割は何ですか？",
        solution: "**@Autowired**は**依存性注入**に使用されます。それは、Springに、配置されたフィールド、セッターメソッド、またはコンストラクターに必要なBean（依存関係）を自動的に注入するように指示します。"
      },
      vi: {
        title: "Mục đích @Autowired",
        body: "Trong Spring Boot, vai trò của annotation **@Autowired** là gì?",
        solution: "**@Autowired** được sử dụng cho **Dependency Injection**. Nó yêu cầu Spring tự động inject bean cần thiết (dependency) vào trường, phương thức setter, hoặc constructor nơi nó được đặt."
      }
    }
  },
  {
    _id: "sb-f-006",
    difficulty: "fresher",
    tags: ["rest", "annotation", "web"],
    content: {
      en: {
        title: "Purpose of @RestController",
        body: "What is the function of the **@RestController** annotation, and what two other annotations does it combine?",
        solution: "**@RestController** is used to create **RESTful web services**. It combines the functionality of **@Controller** and **@ResponseBody**. The inclusion of `@ResponseBody` means that the return value of the handler methods is automatically bound to the web response body (often serialized to JSON or XML)."
      },
      jp: {
        title: "@RestControllerの目的",
        body: "**@RestController**アノテーションの機能は何ですか、またそれは他の2つのアノテーションを組み合わせたものですか？",
        solution: "**@RestController**は**RESTful Webサービス**を作成するために使用されます。これは、**@Controller**と**@ResponseBody**の機能を組み合わせています。`@ResponseBody`が含まれているということは、ハンドラーメソッドの戻り値がWeb応答本文に自動的にバインドされること（多くの場合、JSONまたはXMLにシリアル化される）を意味します。"
      },
      vi: {
        title: "Mục đích @RestController",
        body: "Chức năng của annotation **@RestController** là gì, và nó kết hợp hai annotation nào khác?",
        solution: "**@RestController** được sử dụng để tạo **các dịch vụ web RESTful**. Nó kết hợp chức năng của **@Controller** và **@ResponseBody**. Việc bao gồm `@ResponseBody` có nghĩa là giá trị trả về của các phương thức handler tự động được ràng buộc với nội dung phản hồi web (thường được serialize thành JSON hoặc XML)."
      }
    }
  },
  {
    _id: "sb-f-007",
    difficulty: "fresher",
    tags: ["rest", "http", "mapping"],
    content: {
      en: {
        title: "@GetMapping HTTP Method",
        body: "Which standard HTTP method is represented by the **@GetMapping** annotation?",
        solution: "The **GET** HTTP method. It is used to **retrieve** data from a specified resource."
      },
      jp: {
        title: "@GetMapping HTTPメソッド",
        body: "**@GetMapping**アノテーションによって表される標準のHTTPメソッドは何ですか？",
        solution: "**GET** HTTPメソッドです。特定の**リソースからデータを取得する**ために使用されます。"
      },
      vi: {
        title: "Phương thức HTTP @GetMapping",
        body: "Phương thức HTTP chuẩn nào được đại diện bởi annotation **@GetMapping**?",
        solution: "Phương thức HTTP **GET**. Nó được sử dụng để **truy xuất (retrieve)** dữ liệu từ một tài nguyên được chỉ định."
      }
    }
  },
  {
    _id: "sb-f-008",
    difficulty: "fresher",
    tags: ["rest", "http", "mapping"],
    content: {
      en: {
        title: "@PostMapping HTTP Method",
        body: "Which standard HTTP method is represented by the **@PostMapping** annotation?",
        solution: "The **POST** HTTP method. It is used to **submit** an entity to the specified resource, often resulting in a change in state or a new resource creation."
      },
      jp: {
        title: "@PostMapping HTTPメソッド",
        body: "**@PostMapping**アノテーションによって表される標準のHTTPメソッドは何ですか？",
        solution: "**POST** HTTPメソッドです。特定の**リソースにエンティティを送信する**ために使用され、しばしば状態の変更または新しいリソースの作成につながります。"
      },
      vi: {
        title: "Phương thức HTTP @PostMapping",
        body: "Phương thức HTTP chuẩn nào được đại diện bởi annotation **@PostMapping**?",
        solution: "Phương thức HTTP **POST**. Nó được sử dụng để **gửi (submit)** một thực thể đến tài nguyên được chỉ định, thường dẫn đến thay đổi trạng thái hoặc tạo một tài nguyên mới."
      }
    }
  },
  {
    _id: "sb-f-009",
    difficulty: "fresher",
    tags: ["project-management", "build", "tool"],
    content: {
      en: {
        title: "Spring Boot Build Tools",
        body: "Name two common build tools typically used to manage Spring Boot projects and their dependencies.",
        solution: "The two most common build tools are **Maven** and **Gradle**. They handle dependency management, compilation, and packaging of the application into a runnable JAR or WAR file."
      },
      jp: {
        title: "Spring Bootのビルドツール",
        body: "Spring Bootプロジェクトとその依存関係を管理するために一般的に使用される2つの一般的なビルドツールを挙げてください。",
        solution: "最も一般的な2つのビルドツールは**Maven**と**Gradle**です。これらは、依存関係の管理、コンパイル、およびアプリケーションを実行可能なJARまたはWARファイルへのパッケージングを処理します。"
      },
      vi: {
        title: "Công cụ Build của Spring Boot",
        body: "Nêu tên hai công cụ build phổ biến thường được sử dụng để quản lý các dự án Spring Boot và các dependency của chúng.",
        solution: "Hai công cụ build phổ biến nhất là **Maven** và **Gradle**. Chúng xử lý việc quản lý dependency, biên dịch và đóng gói ứng dụng thành một file JAR hoặc WAR có thể chạy được."
      }
    }
  },
  {
    _id: "sb-f-010",
    difficulty: "fresher",
    tags: ["packaging", "executable-jar"],
    content: {
      en: {
        title: "Executable JAR",
        body: "What is the standard packaging format that Spring Boot projects use that allows the application to be run directly using `java -jar <filename>.jar`?",
        solution: "Spring Boot uses an **Executable JAR** (or **Fat JAR**). This package includes not only the compiled application classes but also all necessary dependencies and an embedded server (like Tomcat or Jetty) within the single JAR file."
      },
      jp: {
        title: "実行可能なJAR",
        body: "Spring Bootプロジェクトが使用する標準のパッケージング形式で、アプリケーションを`java -jar <filename>.jar`を使用して直接実行できるようにするものは何ですか？",
        solution: "Spring Bootは**実行可能なJAR**（または**Fat JAR**）を使用します。このパッケージには、コンパイルされたアプリケーションクラスだけでなく、必要なすべての依存関係と組み込みサーバー（TomcatやJettyなど）が単一のJARファイル内に含まれています。"
      },
      vi: {
        title: "Executable JAR",
        body: "Định dạng đóng gói chuẩn mà các dự án Spring Boot sử dụng, cho phép ứng dụng được chạy trực tiếp bằng lệnh `java -jar <filename>.jar` là gì?",
        solution: "Spring Boot sử dụng **Executable JAR** (hoặc **Fat JAR**). Gói này bao gồm không chỉ các class ứng dụng đã được biên dịch mà còn tất cả các dependency cần thiết và một máy chủ nhúng (như Tomcat hoặc Jetty) bên trong một file JAR duy nhất."
      }
    }
  },
  {
    _id: "sb-f-011",
    difficulty: "fresher",
    tags: ["auto-configuration", "convention"],
    content: {
      en: {
        title: "Auto-Configuration Role",
        body: "Explain the role of **Auto-Configuration** in Spring Boot.",
        solution: "Auto-Configuration attempts to **automatically configure your Spring application** based on the JAR dependencies that are present on the classpath. For example, if Spring MVC and Tomcat are on the classpath, it automatically configures a web application context and an embedded server instance."
      },
      jp: {
        title: "自動構成の役割",
        body: "Spring Bootにおける**自動構成（Auto-Configuration）**の役割を説明してください。",
        solution: "自動構成は、クラスパスに存在するJAR依存関係に基づいて、**Springアプリケーションを自動的に構成**しようとします。たとえば、Spring MVCとTomcatがクラスパスにある場合、Webアプリケーションコンテキストと組み込みサーバーインスタンスを自動的に構成します。"
      },
      vi: {
        title: "Vai trò Auto-Configuration",
        body: "Giải thích vai trò của **Auto-Configuration** trong Spring Boot.",
        solution: "Auto-Configuration cố gắng **tự động cấu hình ứng dụng Spring của bạn** dựa trên các dependency JAR có mặt trên classpath. Ví dụ, nếu Spring MVC và Tomcat có trên classpath, nó tự động cấu hình một web application context và một instance máy chủ nhúng."
      }
    }
  },
  {
    _id: "sb-f-012",
    difficulty: "fresher",
    tags: ["configuration", "property"],
    content: {
      en: {
        title: "Default Properties File",
        body: "What is the default file name and location where Spring Boot looks for application configuration properties (like server port or database URL)?",
        solution: "The default configuration file is **`application.properties`** or **`application.yml`**, typically located in the **`src/main/resources`** directory."
      },
      jp: {
        title: "デフォルトのプロパティファイル",
        body: "Spring Bootがアプリケーション構成プロパティ（サーバーポートやデータベースURLなど）を探すデフォルトのファイル名と場所は何ですか？",
        solution: "デフォルトの構成ファイルは**`application.properties`**または**`application.yml`**であり、通常**`src/main/resources`**ディレクトリにあります。"
      },
      vi: {
        title: "File Properties Mặc định",
        body: "Tên file và vị trí mặc định mà Spring Boot tìm kiếm các thuộc tính cấu hình ứng dụng (như cổng server hoặc URL cơ sở dữ liệu) là gì?",
        solution: "File cấu hình mặc định là **`application.properties`** hoặc **`application.yml`**, thường nằm trong thư mục **`src/main/resources`**."
      }
    }
  },
  {
    _id: "sb-f-013",
    difficulty: "fresher",
    tags: ["server", "embedded", "port"],
    content: {
      en: {
        title: "Default Server Port",
        body: "What is the default HTTP port number that an embedded Tomcat server (or Jetty/Undertow) runs on when a Spring Boot application is started?",
        solution: "The default HTTP port is **8080**."
      },
      jp: {
        title: "デフォルトのサーバーポート",
        body: "Spring Bootアプリケーションが起動したときに、組み込みTomcatサーバー（またはJetty/Undertow）が実行されるデフォルトのHTTPポート番号は何ですか？",
        solution: "デフォルトのHTTPポートは**8080**です。"
      },
      vi: {
        title: "Cổng Server Mặc định",
        body: "Số cổng HTTP mặc định mà một server Tomcat nhúng (hoặc Jetty/Undertow) chạy trên đó khi một ứng dụng Spring Boot được khởi động là gì?",
        solution: "Cổng HTTP mặc định là **8080**."
      }
    }
  },
  {
    _id: "sb-f-014",
    difficulty: "fresher",
    tags: ["bean", "scope"],
    content: {
      en: {
        title: "Default Bean Scope",
        body: "What is the default scope for beans defined in a Spring Boot application (e.g., using `@Component` or `@Service`)?",
        solution: "The default scope is **Singleton**. This means the Spring container creates only **one instance** of that bean per Spring IoC container, and this single instance is shared across the entire application."
      },
      jp: {
        title: "デフォルトのBeanスコープ",
        body: "Spring Bootアプリケーションで定義されたBean（例：`@Component`または`@Service`を使用）のデフォルトのスコープは何ですか？",
        solution: "デフォルトのスコープは**Singleton**です。これは、SpringコンテナがSpring IoCコンテナごとにそのBeanのインスタンスを**1つだけ**作成し、この単一のインスタンスがアプリケーション全体で共有されることを意味します。"
      },
      vi: {
        title: "Scope Bean Mặc định",
        body: "Scope mặc định cho các bean được định nghĩa trong một ứng dụng Spring Boot (ví dụ: sử dụng `@Component` hoặc `@Service`) là gì?",
        solution: "Scope mặc định là **Singleton**. Điều này có nghĩa là container Spring chỉ tạo **một instance duy nhất** của bean đó cho mỗi Spring IoC container, và instance đơn này được chia sẻ trên toàn bộ ứng dụng."
      }
    }
  },
  {
    _id: "sb-f-015",
    difficulty: "fresher",
    tags: ["annotation", "bean"],
    content: {
      en: {
        title: "Purpose of @Bean",
        body: "When should the **@Bean** annotation be used, as opposed to `@Component`, to define a Spring-managed object?",
        solution: "**@Bean** is used on a **method** inside a `@Configuration` class. It tells Spring that the method returns an object that should be managed as a Bean in the Spring container. It's used when you need to create a bean from a third-party class or when the creation logic is complex."
      },
      jp: {
        title: "@Beanの目的",
        body: "Spring管理オブジェクトを定義するために、`@Component`とは対照的に、**@Bean**アノテーションはいつ使用されるべきですか？",
        solution: "**@Bean**は、`@Configuration`クラス内の**メソッド**に使用されます。それは、メソッドがSpringコンテナでBeanとして管理されるべきオブジェクトを返すことをSpringに伝えます。これは、サードパーティのクラスからBeanを作成する必要がある場合や、作成ロジックが複雑な場合に使用されます。"
      },
      vi: {
        title: "Mục đích @Bean",
        body: "Annotation **@Bean** nên được sử dụng khi nào, thay vì `@Component`, để định nghĩa một đối tượng được Spring quản lý?",
        solution: "**@Bean** được sử dụng trên một **phương thức** bên trong một class `@Configuration`. Nó báo cho Spring biết rằng phương thức này trả về một đối tượng nên được quản lý như một Bean trong Spring container. Nó được sử dụng khi bạn cần tạo một bean từ một class bên thứ ba hoặc khi logic tạo ra phức tạp."
      }
    }
  },
  {
    _id: "sb-f-016",
    difficulty: "fresher",
    tags: ["web", "dependency", "starter"],
    content: {
      en: {
        title: "Web Starter Dependency",
        body: "What is the name of the core Maven/Gradle dependency (known as a 'Starter') that you add to a Spring Boot project to easily enable a web application with REST capabilities and an embedded Tomcat server?",
        solution: "The dependency is **`spring-boot-starter-web`**."
      },
      jp: {
        title: "Webスターター依存関係",
        body: "REST機能と組み込みTomcatサーバーを備えたWebアプリケーションを簡単に有効にするために、Spring Bootプロジェクトに追加するコアMaven/Gradle依存関係（「Starter」として知られている）の名前は何ですか？",
        solution: "依存関係は**`spring-boot-starter-web`**です。"
      },
      vi: {
        title: "Dependency Web Starter",
        body: "Tên của dependency Maven/Gradle cốt lõi (được gọi là 'Starter') mà bạn thêm vào một dự án Spring Boot để dễ dàng bật ứng dụng web với khả năng REST và một server Tomcat nhúng là gì?",
        solution: "Dependency là **`spring-boot-starter-web`**."
      }
    }
  },
  {
    _id: "sb-f-017",
    difficulty: "fresher",
    tags: ["actuator", "monitoring"],
    content: {
      en: {
        title: "Actuator Purpose",
        body: "What is the main purpose of the **Spring Boot Actuator** dependency?",
        solution: "The Actuator provides **production-ready features** to **monitor and manage** your application, such as checking health status, viewing configuration details, and inspecting metrics, without having to use external tools."
      },
      jp: {
        title: "Actuatorの目的",
        body: "**Spring Boot Actuator**依存関係の主な目的は何ですか？",
        solution: "Actuatorは、外部ツールを使用せずに、ヘルスステータスの確認、構成の詳細の表示、メトリックの検査など、アプリケーションを**監視および管理する**ための**本番環境対応機能**を提供します。"
      },
      vi: {
        title: "Mục đích Actuator",
        body: "Mục đích chính của dependency **Spring Boot Actuator** là gì?",
        solution: "Actuator cung cấp **các tính năng sẵn sàng cho sản xuất (production-ready)** để **giám sát và quản lý** ứng dụng của bạn, chẳng hạn như kiểm tra trạng thái sức khỏe (health status), xem chi tiết cấu hình và kiểm tra metric, mà không cần sử dụng các công cụ bên ngoài."
      }
    }
  },
  {
    _id: "sb-f-018",
    difficulty: "fresher",
    tags: ["rest", "request-body"],
    content: {
      en: {
        title: "@RequestBody Role",
        body: "In a REST controller method, what is the purpose of the **@RequestBody** annotation?",
        solution: "**@RequestBody** indicates that a method parameter should be bound to the **body of the HTTP request**. Spring Boot automatically converts the request body (e.g., JSON) into the corresponding Java object."
      },
      jp: {
        title: "@RequestBodyの役割",
        body: "RESTコントローラーメソッドにおいて、**@RequestBody**アノテーションの目的は何ですか？",
        solution: "**@RequestBody**は、メソッドパラメーターが**HTTPリクエストの本文**にバインドされるべきであることを示します。Spring Bootは、リクエスト本文（例：JSON）を対応するJavaオブジェクトに自動的に変換します。"
      },
      vi: {
        title: "Vai trò @RequestBody",
        body: "Trong một phương thức controller REST, mục đích của annotation **@RequestBody** là gì?",
        solution: "**@RequestBody** cho biết rằng một tham số phương thức nên được ràng buộc với **nội dung (body) của HTTP request**. Spring Boot tự động chuyển đổi nội dung request (ví dụ: JSON) thành đối tượng Java tương ứng."
      }
    }
  },
  {
    _id: "sb-f-019",
    difficulty: "fresher",
    tags: ["rest", "path-variable"],
    content: {
      en: {
        title: "@PathVariable Role",
        body: "In a REST controller method, what is the purpose of the **@PathVariable** annotation?",
        solution: "**@PathVariable** is used to extract a **value from the URI template path** and bind it to a method argument. For example, in `/users/{id}`, `@PathVariable` is used to capture the `id` value."
      },
      jp: {
        title: "@PathVariableの役割",
        body: "RESTコントローラーメソッドにおいて、**@PathVariable**アノテーションの目的は何ですか？",
        solution: "**@PathVariable**は、**URIテンプレートパスから値**を抽出し、それをメソッド引数にバインドするために使用されます。たとえば、`/users/{id}`では、`@PathVariable`は`id`の値をキャプチャするために使用されます。"
      },
      vi: {
        title: "Vai trò @PathVariable",
        body: "Trong một phương thức controller REST, mục đích của annotation **@PathVariable** là gì?",
        solution: "**@PathVariable** được sử dụng để trích xuất một **giá trị từ đường dẫn mẫu URI** và ràng buộc nó với một đối số phương thức. Ví dụ, trong `/users/{id}`, `@PathVariable` được sử dụng để lấy giá trị `id`."
      }
    }
  },
  {
    _id: "sb-f-020",
    difficulty: "fresher",
    tags: ["rest", "query-parameter"],
    content: {
      en: {
        title: "@RequestParam Role",
        body: "In a REST controller method, what is the purpose of the **@RequestParam** annotation?",
        solution: "**@RequestParam** is used to extract and bind values from the **query parameters** of the request URL (e.g., `?name=Alice&page=1`) to method arguments."
      },
      jp: {
        title: "@RequestParamの役割",
        body: "RESTコントローラーメソッドにおいて、**@RequestParam**アノテーションの目的は何ですか？",
        solution: "**@RequestParam**は、リクエストURLの**クエリパラメーター**（例：`?name=Alice&page=1`）から値を抽出し、それをメソッド引数にバインドするために使用されます。"
      },
      vi: {
        title: "Vai trò @RequestParam",
        body: "Trong một phương thức controller REST, mục đích của annotation **@RequestParam** là gì?",
        solution: "**@RequestParam** được sử dụng để trích xuất và ràng buộc các giá trị từ **query parameter** của URL request (ví dụ: `?name=Alice&page=1`) với các đối số phương thức."
      }
    }
  },
  {
    _id: "sb-f-021",
    difficulty: "fresher",
    tags: ["database", "jpa", "orm"],
    content: {
      en: {
        title: "JPA Purpose",
        body: "What technology does Spring Boot typically use for object-relational mapping (ORM) to interact with databases, and what does the acronym stand for?",
        solution: "Spring Boot typically uses **JPA (Java Persistence API)**, often implemented by **Hibernate**. JPA is the specification for managing persistence and mapping Java objects to database tables."
      },
      jp: {
        title: "JPAの目的",
        body: "Spring Bootは、データベースと対話するためのオブジェクトリレーショナルマッピング（ORM）に通常どのテクノロジーを使用しますか、またその頭字語は何を表していますか？",
        solution: "Spring Bootは通常、**JPA (Java Persistence API)**を使用し、しばしば**Hibernate**によって実装されます。JPAは、永続性の管理とJavaオブジェクトのデータベーステーブルへのマッピングのための仕様です。"
      },
      vi: {
        title: "Mục đích JPA",
        body: "Công nghệ nào mà Spring Boot thường sử dụng cho object-relational mapping (ORM) để tương tác với cơ sở dữ liệu, và từ viết tắt đó là viết tắt của từ gì?",
        solution: "Spring Boot thường sử dụng **JPA (Java Persistence API)**, thường được implement bởi **Hibernate**. JPA là đặc tả để quản lý persistence và ánh xạ các đối tượng Java với các bảng cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sb-f-022",
    difficulty: "fresher",
    tags: ["data", "repository"],
    content: {
      en: {
        title: "Spring Data Repository Role",
        body: "In Spring Data JPA, what is the role of the **Repository** interface (e.g., extending `JpaRepository`)?",
        solution: "The Repository interface provides **CRUD operations (Create, Read, Update, Delete)** and allows for defining custom finder methods. Spring Data automatically generates the implementation code for these methods at runtime, significantly reducing boilerplate code."
      },
      jp: {
        title: "Spring Data Repositoryの役割",
        body: "Spring Data JPAにおいて、**Repository**インターフェース（例：`JpaRepository`を拡張）の役割は何ですか？",
        solution: "Repositoryインターフェースは、**CRUD操作（作成、読み取り、更新、削除）**を提供し、カスタムファインダーメソッドの定義を可能にします。Spring Dataは、これらのメソッドの実装コードを実行時に自動的に生成し、定型コードを大幅に削減します。"
      },
      vi: {
        title: "Vai trò Spring Data Repository",
        body: "Trong Spring Data JPA, vai trò của interface **Repository** (ví dụ: mở rộng `JpaRepository`) là gì?",
        solution: "Interface Repository cung cấp **các thao tác CRUD (Create, Read, Update, Delete)** và cho phép định nghĩa các phương thức tìm kiếm tùy chỉnh (custom finder methods). Spring Data tự động tạo mã implement cho các phương thức này tại thời điểm chạy, giảm đáng kể mã lặp (boilerplate code)."
      }
    }
  },
  {
    _id: "sb-f-023",
    difficulty: "fresher",
    tags: ["data", "entity"],
    content: {
      en: {
        title: "@Entity Role",
        body: "When using Spring Data JPA, what is the purpose of the **@Entity** annotation on a Java class?",
        solution: "**@Entity** marks a Java class as a **JPA entity**, representing a table in the database. JPA will then manage the lifecycle and persistence of objects of this class."
      },
      jp: {
        title: "@Entityの役割",
        body: "Spring Data JPAを使用する場合、Javaクラスの**@Entity**アノテーションの目的は何ですか？",
        solution: "**@Entity**は、Javaクラスを**JPAエンティティ**としてマークし、データベース内のテーブルを表します。その後、JPAはこのクラスのオブジェクトのライフサイクルと永続性を管理します。"
      },
      vi: {
        title: "Vai trò @Entity",
        body: "Khi sử dụng Spring Data JPA, mục đích của annotation **@Entity** trên một class Java là gì?",
        solution: "**@Entity** đánh dấu một class Java là một **thực thể JPA (JPA entity)**, đại diện cho một bảng trong cơ sở dữ liệu. JPA sau đó sẽ quản lý vòng đời và tính bền vững (persistence) của các đối tượng thuộc class này."
      }
    }
  },
  {
    _id: "sb-f-024",
    difficulty: "fresher",
    tags: ["data", "id", "primary-key"],
    content: {
      en: {
        title: "@Id Role",
        body: "What is the purpose of the **@Id** annotation in a JPA entity class?",
        solution: "**@Id** designates the field as the **primary key** of the current entity/database table. Every JPA entity must have a primary key."
      },
      jp: {
        title: "@Idの役割",
        body: "JPAエンティティクラスにおける**@Id**アノテーションの目的は何ですか？",
        solution: "**@Id**は、そのフィールドを現在のエンティティ/データベーステーブルの**主キー**として指定します。すべてのJPAエンティティは主キーを持っている必要があります。"
      },
      vi: {
        title: "Vai trò @Id",
        body: "Mục đích của annotation **@Id** trong một class entity JPA là gì?",
        solution: "**@Id** chỉ định trường đó là **khóa chính (primary key)** của entity/bảng cơ sở dữ liệu hiện tại. Mọi entity JPA đều phải có một khóa chính."
      }
    }
  },
  {
    _id: "sb-f-025",
    difficulty: "fresher",
    tags: ["testing", "unit", "mocking"],
    content: {
      en: {
        title: "@MockBean Purpose",
        body: "In Spring Boot unit testing, what is the purpose of the **@MockBean** annotation?",
        solution: "**@MockBean** is used to **create a mock object** (using Mockito) and inject it into the Spring ApplicationContext. This allows you to replace a real dependency (like a Service or Repository) with a mock for testing a component in isolation (like a Controller)."
      },
      jp: {
        title: "@MockBeanの目的",
        body: "Spring Bootの単体テストにおいて、**@MockBean**アノテーションの目的は何ですか？",
        solution: "**@MockBean**は、**モックオブジェクトを作成し**（Mockitoを使用して）、それをSpring ApplicationContextに注入するために使用されます。これにより、実際の依存関係（ServiceやRepositoryなど）をモックに置き換え、コンポーネントを単独でテストできます（Controllerなど）。"
      },
      vi: {
        title: "Mục đích @MockBean",
        body: "Trong unit testing Spring Boot, mục đích của annotation **@MockBean** là gì?",
        solution: "**@MockBean** được sử dụng để **tạo một đối tượng mock** (sử dụng Mockito) và inject nó vào Spring ApplicationContext. Điều này cho phép bạn thay thế một dependency thực (như Service hoặc Repository) bằng một mock để kiểm thử một thành phần một cách độc lập (như Controller)."
      }
    }
  },
  {
    _id: "sb-f-026",
    difficulty: "fresher",
    tags: ["rest", "http", "status"],
    content: {
      en: {
        title: "HTTP 200 vs 201",
        body: "What is the difference between an HTTP **200 OK** status code and an HTTP **201 Created** status code, and when should a REST endpoint return 201?",
        solution: "**200 OK** means the request was successful and the response body contains the requested data (typically for GET/PUT/DELETE). **201 Created** means the request was successful and **a new resource has been created** as a result (typically for POST). The 201 response should also include the URI of the new resource."
      },
      jp: {
        title: "HTTP 200と201の違い",
        body: "HTTP **200 OK**ステータスコードとHTTP **201 Created**ステータスコードの違いは何ですか、またRESTエンドポイントはいつ201を返すべきですか？",
        solution: "**200 OK**は、リクエストが成功し、応答本文に要求されたデータが含まれていることを意味します（通常はGET/PUT/DELETE）。**201 Created**は、リクエストが成功し、その結果として**新しいリソースが作成された**ことを意味します（通常はPOST）。201応答には、新しいリソースのURIも含まれるべきです。"
      },
      vi: {
        title: "HTTP 200 và 201",
        body: "Sự khác biệt giữa mã trạng thái HTTP **200 OK** và mã trạng thái HTTP **201 Created** là gì, và khi nào một endpoint REST nên trả về 201?",
        solution: "**200 OK** có nghĩa là request đã thành công và nội dung phản hồi chứa dữ liệu được yêu cầu (thường dành cho GET/PUT/DELETE). **201 Created** có nghĩa là request đã thành công và **một tài nguyên mới đã được tạo** là kết quả (thường dành cho POST). Phản hồi 201 cũng nên bao gồm URI của tài nguyên mới."
      }
    }
  },
  {
    _id: "sb-f-027",
    difficulty: "fresher",
    tags: ["rest", "http", "error"],
    content: {
      en: {
        title: "HTTP 404 Status",
        body: "What does an HTTP **404 Not Found** status code typically indicate in a Spring Boot REST application?",
        solution: "It indicates that the client attempted to access a resource (URL) that **does not exist** on the server. The server could not find a handler method for the requested path."
      },
      jp: {
        title: "HTTP 404ステータス",
        body: "Spring Boot RESTアプリケーションにおいて、HTTP **404 Not Found**ステータスコードは通常何を示しますか？",
        solution: "これは、クライアントがサーバー上に**存在しない**リソース（URL）にアクセスしようとしたことを示します。サーバーは要求されたパスのハンドラーメソッドを見つけることができませんでした。"
      },
      vi: {
        title: "Trạng thái HTTP 404",
        body: "Mã trạng thái HTTP **404 Not Found** thường biểu thị điều gì trong một ứng dụng Spring Boot REST?",
        solution: "Nó chỉ ra rằng client đã cố gắng truy cập vào một tài nguyên (URL) **không tồn tại** trên máy chủ. Máy chủ không thể tìm thấy một phương thức handler cho đường dẫn được yêu cầu."
      }
    }
  },
  {
    _id: "sb-f-028",
    difficulty: "fresher",
    tags: ["rest", "http", "error"],
    content: {
      en: {
        title: "HTTP 500 Status",
        body: "What does an HTTP **500 Internal Server Error** status code typically indicate in a Spring Boot application?",
        solution: "It indicates that the server encountered an **unexpected condition** that prevented it from fulfilling the request. This usually means a **runtime exception or unhandled error** occurred on the server side."
      },
      jp: {
        title: "HTTP 500ステータス",
        body: "Spring Bootアプリケーションにおいて、HTTP **500 Internal Server Error**ステータスコードは通常何を示しますか？",
        solution: "これは、サーバーがリクエストの実行を妨げる**予期しない状態**に遭遇したことを示します。これは通常、サーバー側で**ランタイム例外または未処理のエラー**が発生したことを意味します。"
      },
      vi: {
        title: "Trạng thái HTTP 500",
        body: "Mã trạng thái HTTP **500 Internal Server Error** thường biểu thị điều gì trong một ứng dụng Spring Boot?",
        solution: "Nó chỉ ra rằng máy chủ đã gặp phải một **điều kiện không mong muốn** ngăn cản nó hoàn thành yêu cầu. Điều này thường có nghĩa là **một ngoại lệ runtime hoặc lỗi không được xử lý** đã xảy ra ở phía máy chủ."
      }
    }
  },
  {
    _id: "sb-f-029",
    difficulty: "fresher",
    tags: ["logging", "default"],
    content: {
      en: {
        title: "Default Logging Framework",
        body: "Which logging framework does Spring Boot use by default (it's part of the Starters, routed through SLF4J)?",
        solution: "Spring Boot uses **Logback** by default, which is configured through the **`spring-boot-starter-logging`** dependency."
      },
      jp: {
        title: "デフォルトのロギングフレームワーク",
        body: "Spring Bootがデフォルトで使用するロギングフレームワークは何ですか（Startersの一部であり、SLF4Jを経由してルーティングされますか）？",
        solution: "Spring Bootはデフォルトで**Logback**を使用します。これは**`spring-boot-starter-logging`**依存関係を通じて構成されます。"
      },
      vi: {
        title: "Framework Logging Mặc định",
        body: "Framework logging nào mà Spring Boot sử dụng theo mặc định (nó là một phần của Starters, được định tuyến thông qua SLF4J)?",
        solution: "Spring Boot sử dụng **Logback** theo mặc định, được cấu hình thông qua dependency **`spring-boot-starter-logging`**."
      }
    }
  },
  {
    _id: "sb-f-030",
    difficulty: "fresher",
    tags: ["profile", "configuration"],
    content: {
      en: {
        title: "Profile Purpose",
        body: "What is a **Spring Profile**, and how are they typically used in Spring Boot configuration?",
        solution: "A **Spring Profile** is a way to **segregate parts of your application configuration** and make it only available in certain environments (e.g., development, testing, production). You activate a profile to load environment-specific beans or property files (e.g., `application-dev.properties`)."
      },
      jp: {
        title: "プロファイルの目的",
        body: "**Springプロファイル**とは何ですか、またSpring Boot構成で通常どのように使用されますか？",
        solution: "**Springプロファイル**は、**アプリケーション構成の一部を分離**し、特定の環境（例：開発、テスト、本番）でのみ利用可能にする方法です。プロファイルをアクティブにすることで、環境固有のBeanやプロパティファイル（例：`application-dev.properties`）をロードします。"
      },
      vi: {
        title: "Mục đích Profile",
        body: "**Spring Profile** là gì, và chúng thường được sử dụng như thế nào trong cấu hình Spring Boot?",
        solution: "Một **Spring Profile** là một cách để **phân tách các phần của cấu hình ứng dụng** của bạn và chỉ làm cho nó có sẵn trong các môi trường nhất định (ví dụ: development, testing, production). Bạn kích hoạt một profile để tải các bean hoặc file property cụ thể cho môi trường (ví dụ: `application-dev.properties`)."
      }
    }
  },
  {
    _id: "sb-f-031",
    difficulty: "fresher",
    tags: ["testing", "annotation", "integration"],
    content: {
      en: {
        title: "@SpringBootTest Role",
        body: "In integration testing, what is the main function of the **@SpringBootTest** annotation?",
        solution: "**@SpringBootTest** is used to **load the full Spring ApplicationContext** for testing. It typically starts the embedded server (if present) and allows you to inject and test all application layers, from the controller down to the repository."
      },
      jp: {
        title: "@SpringBootTestの役割",
        body: "統合テストにおいて、**@SpringBootTest**アノテーションの主な機能は何ですか？",
        solution: "**@SpringBootTest**は、テストのために**完全なSpring ApplicationContextをロードする**ために使用されます。通常、組み込みサーバー（存在する場合）を起動し、コントローラーからリポジトリまでのすべてのアプリケーション層を注入してテストできます。"
      },
      vi: {
        title: "Vai trò @SpringBootTest",
        body: "Trong integration testing, chức năng chính của annotation **@SpringBootTest** là gì?",
        solution: "**@SpringBootTest** được sử dụng để **tải toàn bộ Spring ApplicationContext** cho việc kiểm thử. Nó thường khởi động máy chủ nhúng (nếu có) và cho phép bạn inject và kiểm thử tất cả các tầng ứng dụng, từ controller xuống repository."
      }
    }
  },
  {
    _id: "sb-f-032",
    difficulty: "fresher",
    tags: ["data", "h2", "in-memory"],
    content: {
      en: {
        title: "In-Memory Database for Testing",
        body: "What is a common in-memory database used by Spring Boot developers for integration testing, and why is it preferred over a production database during testing?",
        solution: "**H2 Database** is the most common in-memory database. It is preferred because it is **fast to start/stop**, **requires no external setup**, and ensures that tests are independent and repeatable without modifying the actual production data."
      },
      jp: {
        title: "テスト用のインメモリデータベース",
        body: "Spring Boot開発者が統合テストに使用する一般的なインメモリデータベースは何ですか、またテスト中に本番データベースよりもそれが好まれるのはなぜですか？",
        solution: "**H2データベース**が最も一般的なインメモリデータベースです。それは**起動/停止が速く**、**外部セットアップが不要**であり、実際の生産データを変更することなくテストが独立しており再現可能であることを保証するため、好まれます。"
      },
      vi: {
        title: "Cơ sở dữ liệu In-Memory cho Testing",
        body: "Cơ sở dữ liệu in-memory phổ biến nào được các nhà phát triển Spring Boot sử dụng cho integration testing, và tại sao nó được ưa chuộng hơn cơ sở dữ liệu production trong quá trình kiểm thử?",
        solution: "**H2 Database** là cơ sở dữ liệu in-memory phổ biến nhất. Nó được ưa chuộng vì nó **khởi động/dừng nhanh**, **không yêu cầu thiết lập bên ngoài**, và đảm bảo rằng các bài kiểm thử là độc lập và có thể lặp lại mà không sửa đổi dữ liệu production thực tế."
      }
    }
  },
  {
    _id: "sb-f-033",
    difficulty: "fresher",
    tags: ["rest", "http", "mapping"],
    content: {
      en: {
        title: "@PutMapping HTTP Method",
        body: "Which standard HTTP method is represented by the **@PutMapping** annotation?",
        solution: "The **PUT** HTTP method. It is used to **update** a resource or **replace** the entire resource at a specified URI."
      },
      jp: {
        title: "@PutMapping HTTPメソッド",
        body: "**@PutMapping**アノテーションによって表される標準のHTTPメソッドは何ですか？",
        solution: "**PUT** HTTPメソッドです。特定のURIにあるリソースを**更新**するか、リソース全体を**置き換える**ために使用されます。"
      },
      vi: {
        title: "Phương thức HTTP @PutMapping",
        body: "Phương thức HTTP chuẩn nào được đại diện bởi annotation **@PutMapping**?",
        solution: "Phương thức HTTP **PUT**. Nó được sử dụng để **cập nhật (update)** một tài nguyên hoặc **thay thế** toàn bộ tài nguyên tại một URI được chỉ định."
      }
    }
  },
  {
    _id: "sb-f-034",
    difficulty: "fresher",
    tags: ["rest", "http", "mapping"],
    content: {
      en: {
        title: "@DeleteMapping HTTP Method",
        body: "Which standard HTTP method is represented by the **@DeleteMapping** annotation?",
        solution: "The **DELETE** HTTP method. It is used to **remove** the specified resource."
      },
      jp: {
        title: "@DeleteMapping HTTPメソッド",
        body: "**@DeleteMapping**アノテーションによって表される標準のHTTPメソッドは何ですか？",
        solution: "**DELETE** HTTPメソッドです。特定の**リソースを削除する**ために使用されます。"
      },
      vi: {
        title: "Phương thức HTTP @DeleteMapping",
        body: "Phương thức HTTP chuẩn nào được đại diện bởi annotation **@DeleteMapping**?",
        solution: "Phương thức HTTP **DELETE**. Nó được sử dụng để **xóa (remove)** tài nguyên được chỉ định."
      }
    }
  },
  {
    _id: "sb-f-035",
    difficulty: "fresher",
    tags: ["ioc", "life-cycle"],
    content: {
      en: {
        title: "Spring Bean Life Cycle",
        body: "Briefly list the three main phases of the Spring Bean life cycle (Creation, Initialization, and Destruction).",
        solution: "1. **Instantiation (Creation):** The IoC container creates the instance (via constructor). 2. **Population/Wiring (Initialization):** Dependencies are injected, and initialization callbacks (like `@PostConstruct`) are called. 3. **Destruction:** The bean is shut down, and destruction callbacks (like `@PreDestroy`) are called."
      },
      jp: {
        title: "Spring Beanのライフサイクル",
        body: "Spring Beanのライフサイクルの3つの主要なフェーズ（作成、初期化、破棄）を簡単にリストアップしてください。",
        solution: "1. **インスタンス化（作成）:** IoCコンテナがインスタンスを作成します（コンストラクターを介して）。 2. **プロパティ設定/ワイヤリング（初期化）:** 依存関係が注入され、初期化コールバック（`@PostConstruct`など）が呼び出されます。 3. **破棄:** Beanがシャットダウンされ、破棄コールバック（`@PreDestroy`など）が呼び出されます。"
      },
      vi: {
        title: "Vòng đời Spring Bean",
        body: "Tóm tắt ba giai đoạn chính của vòng đời Spring Bean (Creation, Initialization, và Destruction).",
        solution: "1. **Instantiation (Tạo Instance):** IoC container tạo instance (thông qua constructor). 2. **Population/Wiring (Khởi tạo):** Các dependency được inject, và các callback khởi tạo (như `@PostConstruct`) được gọi. 3. **Destruction (Hủy):** Bean bị tắt, và các callback hủy (như `@PreDestroy`) được gọi."
      }
    }
  },
  {
    _id: "sb-f-036",
    difficulty: "fresher",
    tags: ["injection", "best-practice"],
    content: {
      en: {
        title: "Preferred DI Method",
        body: "Which type of Dependency Injection (Constructor Injection, Setter Injection, or Field Injection) is generally considered the **best practice** in modern Spring Boot applications, and why?",
        solution: "**Constructor Injection** is the best practice. It ensures that the bean is created with all its required dependencies present (immutability), and it makes unit testing easier by clearly showing mandatory dependencies."
      },
      jp: {
        title: "推奨されるDIメソッド",
        body: "現代のSpring Bootアプリケーションで一般的に**ベストプラクティス**と見なされている依存性注入のタイプ（コンストラクター注入、セッター注入、またはフィールド注入）はどれですか、またその理由は何ですか？",
        solution: "**コンストラクター注入**がベストプラクティスです。これは、Beanが必要なすべての依存関係が揃った状態で作成されること（不変性）を保証し、必須の依存関係を明確に示すことで単体テストを容易にします。"
      },
      vi: {
        title: "Phương thức DI Ưu tiên",
        body: "Loại Dependency Injection nào (Constructor Injection, Setter Injection, hoặc Field Injection) thường được coi là **thực hành tốt nhất (best practice)** trong các ứng dụng Spring Boot hiện đại, và tại sao?",
        solution: "**Constructor Injection** là thực hành tốt nhất. Nó đảm bảo rằng bean được tạo với tất cả các dependency cần thiết đã có mặt (tính bất biến), và nó làm cho unit testing dễ dàng hơn bằng cách hiển thị rõ ràng các dependency bắt buộc."
      }
    }
  },
  {
    _id: "sb-f-037",
    difficulty: "fresher",
    tags: ["testing", "mvc", "integration"],
    content: {
      en: {
        title: "MockMvc Purpose",
        body: "What is **MockMvc**, and what part of the application does it primarily help you test in Spring Boot?",
        solution: "**MockMvc** is a framework component that allows you to perform **in-memory testing of your REST controllers** (the MVC layer) without needing to start a full HTTP server. It simulates HTTP requests and responses, allowing you to quickly verify controller logic."
      },
      jp: {
        title: "MockMvcの目的",
        body: "**MockMvc**とは何ですか、またSpring Bootで主にアプリケーションのどの部分のテストを支援しますか？",
        solution: "**MockMvc**は、フルHTTPサーバーを起動することなく、**RESTコントローラー（MVC層）のインメモリテスト**を実行できるようにするフレームワークコンポーネントです。HTTPリクエストとレスポンスをシミュレートし、コントローラーロジックを迅速に検証できます。"
      },
      vi: {
        title: "Mục đích MockMvc",
        body: "**MockMvc** là gì, và nó chủ yếu giúp bạn kiểm thử phần nào của ứng dụng trong Spring Boot?",
        solution: "**MockMvc** là một thành phần framework cho phép bạn thực hiện **kiểm thử in-memory các REST controller** (tầng MVC) mà không cần khởi động một HTTP server đầy đủ. Nó mô phỏng các request và response HTTP, cho phép bạn nhanh chóng xác minh logic controller."
      }
    }
  },
  {
    _id: "sb-f-038",
    difficulty: "fresher",
    tags: ["data", "jdbc", "template"],
    content: {
      en: {
        title: "Spring JDBC Template",
        body: "What purpose does the **`JdbcTemplate`** class serve in Spring for database interaction?",
        solution: "The **`JdbcTemplate`** handles all the **boilerplate JDBC code** (opening connections, closing resources, handling exceptions). It allows developers to focus only on writing the SQL and mapping the results, simplifying direct database access."
      },
      jp: {
        title: "Spring JDBC Template",
        body: "Springのデータベースとの対話において、**`JdbcTemplate`**クラスはどのような目的を果たしますか？",
        solution: "**`JdbcTemplate`**は、**定型的なJDBCコード**（接続のオープン、リソースのクローズ、例外処理）のすべてを処理します。これにより、開発者はSQLの記述と結果のマッピングにのみ集中でき、直接的なデータベースアクセスが簡素化されます。"
      },
      vi: {
        title: "Spring JDBC Template",
        body: "Class **`JdbcTemplate`** phục vụ mục đích gì trong Spring cho việc tương tác với cơ sở dữ liệu?",
        solution: "**`JdbcTemplate`** xử lý tất cả **mã JDBC lặp (boilerplate JDBC code)** (mở kết nối, đóng tài nguyên, xử lý ngoại lệ). Nó cho phép các nhà phát triển chỉ tập trung vào việc viết SQL và ánh xạ kết quả, đơn giản hóa việc truy cập cơ sở dữ liệu trực tiếp."
      }
    }
  },
  {
    _id: "sb-f-039",
    difficulty: "fresher",
    tags: ["bean", "ioc", "container"],
    content: {
      en: {
        title: "IoC Container Definition",
        body: "What is the **IoC Container** (Inversion of Control Container) in Spring, and what is its main responsibility?",
        solution: "The IoC Container (often represented by `ApplicationContext`) is the **core of the Spring Framework**. Its main responsibility is to **instantiate, configure, and assemble beans** (objects) and manage their entire lifecycle through dependency injection."
      },
      jp: {
        title: "IoCコンテナの定義",
        body: "Springにおける**IoCコンテナ**（Inversion of Control Container）とは何ですか、またその主な責務は何ですか？",
        solution: "IoCコンテナ（しばしば`ApplicationContext`によって表される）は、**Spring Frameworkの中核**です。その主な責務は、依存性注入を通じて、Bean（オブジェクト）を**インスタンス化、構成、組み立て**、およびそのライフサイクル全体を管理することです。"
      },
      vi: {
        title: "Định nghĩa IoC Container",
        body: "**IoC Container** (Inversion of Control Container) trong Spring là gì, và trách nhiệm chính của nó là gì?",
        solution: "IoC Container (thường được đại diện bởi `ApplicationContext`) là **cốt lõi của Spring Framework**. Trách nhiệm chính của nó là **khởi tạo (instantiate), cấu hình, và lắp ráp (assemble) các bean** (đối tượng) và quản lý toàn bộ vòng đời của chúng thông qua dependency injection."
      }
    }
  },
  {
    _id: "sb-f-040",
    difficulty: "fresher",
    tags: ["properties", "yaml", "format"],
    content: {
      en: {
        title: "YAML vs Properties",
        body: "What is the key structural advantage of using **`application.yml` (YAML format)** over the traditional **`application.properties`** file in Spring Boot?",
        solution: "The key advantage of YAML is its **hierarchical and structured format**. Properties can be grouped and indented, making configurations cleaner and easier to read, especially for complex or nested settings."
      },
      jp: {
        title: "YAMLとProperties",
        body: "Spring Bootで従来の**`application.properties`**ファイルよりも**`application.yml`（YAML形式）**を使用する際の主要な構造上の利点は何ですか？",
        solution: "YAMLの主要な利点は、その**階層的で構造化された形式**です。プロパティをグループ化してインデントできるため、特に複雑またはネストされた設定の場合、構成がより明確で読みやすくなります。"
      },
      vi: {
        title: "YAML và Properties",
        body: "Lợi thế cấu trúc chính của việc sử dụng **`application.yml` (định dạng YAML)** so với file **`application.properties`** truyền thống trong Spring Boot là gì?",
        solution: "Lợi thế chính của YAML là **định dạng phân cấp và có cấu trúc** của nó. Các thuộc tính có thể được nhóm và thụt lề, làm cho cấu hình rõ ràng và dễ đọc hơn, đặc biệt đối với các cài đặt phức tạp hoặc lồng nhau."
      }
    }
  },
  {
    _id: "sb-f-041",
    difficulty: "fresher",
    tags: ["rest", "http", "verb"],
    content: {
      en: {
        title: "REST Verb for Partial Update",
        body: "Which HTTP method is typically used in RESTful services to perform a **partial update** of an existing resource (e.g., changing only one field)?",
        solution: "The **PATCH** HTTP method is typically used for partial updates. **PUT** is used to replace the entire resource."
      },
      jp: {
        title: "部分的な更新のためのREST動詞",
        body: "既存のリソースの**部分的な更新**を実行するために、RESTfulサービスで通常使用されるHTTPメソッドは何ですか（例：1つのフィールドのみを変更する）？",
        solution: "通常、**PATCH** HTTPメソッドが部分的な更新に使用されます。**PUT**はリソース全体を置き換えるために使用されます。"
      },
      vi: {
        title: "REST Verb cho Partial Update",
        body: "Phương thức HTTP nào thường được sử dụng trong các dịch vụ RESTful để thực hiện **cập nhật một phần (partial update)** của một tài nguyên hiện có (ví dụ: chỉ thay đổi một trường)?",
        solution: "Phương thức HTTP **PATCH** thường được sử dụng để cập nhật một phần. **PUT** được sử dụng để thay thế toàn bộ tài nguyên."
      }
    }
  },
  {
    _id: "sb-f-042",
    difficulty: "fresher",
    tags: ["aop", "cross-cutting"],
    content: {
      en: {
        title: "Cross-Cutting Concern Example",
        body: "What is a **Cross-Cutting Concern**, and give one example of a Cross-Cutting Concern that Spring AOP (Aspect-Oriented Programming) is often used to handle?",
        solution: "A **Cross-Cutting Concern** is a function that spans multiple layers of an application (e.g., logic that is needed in many different modules). An example is **Logging**, **Security/Authorization**, or **Transaction Management**."
      },
      jp: {
        title: "横断的関心の例",
        body: "**横断的関心（Cross-Cutting Concern）**とは何ですか、またSpring AOP（Aspect-Oriented Programming）がよく処理に使用される横断的関心の一例を挙げてください。",
        solution: "**横断的関心**は、アプリケーションの複数の層にまたがる機能です（例：多くの異なるモジュールで必要とされるロジック）。例としては、**ロギング**、**セキュリティ/認可**、または**トランザクション管理**があります。"
      },
      vi: {
        title: "Ví dụ Cross-Cutting Concern",
        body: "**Cross-Cutting Concern** là gì, và đưa ra một ví dụ về Cross-Cutting Concern mà Spring AOP (Aspect-Oriented Programming) thường được sử dụng để xử lý?",
        solution: "Một **Cross-Cutting Concern** là một chức năng trải rộng trên nhiều tầng của một ứng dụng (ví dụ: logic cần thiết trong nhiều module khác nhau). Một ví dụ là **Logging**, **Security/Authorization**, hoặc **Transaction Management**."
      }
    }
  },
  {
    _id: "sb-f-043",
    difficulty: "fresher",
    tags: ["data", "transaction"],
    content: {
      en: {
        title: "@Transactional Role",
        body: "What is the purpose of the **@Transactional** annotation in Spring Boot services?",
        solution: "**@Transactional** ensures that a method is executed within a **database transaction**. If the method completes successfully, the transaction is committed; if an unhandled runtime exception occurs, the transaction is rolled back, ensuring data consistency."
      },
      jp: {
        title: "@Transactionalの役割",
        body: "Spring Bootサービスにおける**@Transactional**アノテーションの目的は何ですか？",
        solution: "**@Transactional**は、メソッドが**データベーストランザクション内**で実行されることを保証します。メソッドが正常に完了した場合、トランザクションはコミットされます。未処理のランタイム例外が発生した場合、トランザクションはロールバックされ、データの一貫性が確保されます。"
      },
      vi: {
        title: "Vai trò @Transactional",
        body: "Mục đích của annotation **@Transactional** trong các service Spring Boot là gì?",
        solution: "**@Transactional** đảm bảo rằng một phương thức được thực thi trong một **database transaction**. Nếu phương thức hoàn thành thành công, transaction sẽ được commit; nếu một ngoại lệ runtime không được xử lý xảy ra, transaction sẽ được rollback, đảm bảo tính nhất quán của dữ liệu."
      }
    }
  },
  {
    _id: "sb-f-044",
    difficulty: "fresher",
    tags: ["testing", "client", "web"],
    content: {
      en: {
        title: "RestTemplate/WebClient Purpose",
        body: "What class or interface is commonly used in Spring Boot applications to consume (call) external RESTful web services?",
        solution: "The traditional class is **`RestTemplate`**, but the modern, non-blocking, and reactive alternative preferred in newer projects is **`WebClient`**."
      },
      jp: {
        title: "RestTemplate/WebClientの目的",
        body: "Spring Bootアプリケーションで外部のRESTful Webサービスを消費する（呼び出す）ために一般的に使用されるクラスまたはインターフェースは何ですか？",
        solution: "従来のクラスは**`RestTemplate`**ですが、新しいプロジェクトで好まれる、モダンで非ブロッキングなリアクティブな代替手段は**`WebClient`**です。"
      },
      vi: {
        title: "Mục đích RestTemplate/WebClient",
        body: "Class hoặc interface nào thường được sử dụng trong các ứng dụng Spring Boot để tiêu thụ (gọi) các dịch vụ web RESTful bên ngoài?",
        solution: "Class truyền thống là **`RestTemplate`**, nhưng giải pháp thay thế hiện đại, không chặn (non-blocking) và reactive được ưa chuộng trong các dự án mới hơn là **`WebClient`**."
      }
    }
  },
  {
    _id: "sb-f-045",
    difficulty: "fresher",
    tags: ["data", "migration", "flyway"],
    content: {
      en: {
        title: "Database Migration Role",
        body: "What problem do database migration tools like **Flyway** or **Liquibase** solve in a Spring Boot application?",
        solution: "They solve the problem of **managing database schema changes** over time. They ensure that all developers and environments (dev, test, prod) run the exact same sequence of SQL scripts to evolve the database schema reliably and repeatedly."
      },
      jp: {
        title: "データベースマイグレーションの役割",
        body: "**Flyway**や**Liquibase**のようなデータベースマイグレーションツールは、Spring Bootアプリケーションでどのような問題を解決しますか？",
        solution: "これらは、時間の経過に伴う**データベーススキーマの変更を管理する**という問題を解決します。これらは、すべての開発者と環境（開発、テスト、本番）が、データベーススキーマを確実に、かつ繰り返し進化させるために、まったく同じ順序のSQLスクリプトを実行することを保証します。"
      },
      vi: {
        title: "Vai trò Database Migration",
        body: "Các công cụ di chuyển cơ sở dữ liệu như **Flyway** hoặc **Liquibase** giải quyết vấn đề gì trong một ứng dụng Spring Boot?",
        solution: "Chúng giải quyết vấn đề **quản lý các thay đổi schema cơ sở dữ liệu** theo thời gian. Chúng đảm bảo rằng tất cả các nhà phát triển và môi trường (dev, test, prod) đều chạy cùng một chuỗi các script SQL để phát triển schema cơ sở dữ liệu một cách đáng tin cậy và lặp lại."
      }
    }
  },
  {
    _id: "sb-f-046",
    difficulty: "fresher",
    tags: ["devtools", "hot-reload"],
    content: {
      en: {
        title: "Spring Boot DevTools",
        body: "What is the primary benefit of including the **Spring Boot DevTools** dependency during local development?",
        solution: "The primary benefit is **automatic application restart (or Live Reload/Hot Swap)** when files on the classpath change. This significantly speeds up the development feedback loop by reducing the time spent waiting for manual restarts."
      },
      jp: {
        title: "Spring Boot DevTools",
        body: "ローカル開発中に**Spring Boot DevTools**依存関係を含めることの主な利点は何ですか？",
        solution: "主な利点は、クラスパス上のファイルが変更されたときの**自動アプリケーション再起動（またはライブリロード/ホットスワップ）**です。これにより、手動での再起動を待つ時間が短縮され、開発フィードバックループが大幅に高速化されます。"
      },
      vi: {
        title: "Spring Boot DevTools",
        body: "Lợi ích chính của việc bao gồm dependency **Spring Boot DevTools** trong quá trình phát triển cục bộ là gì?",
        solution: "Lợi ích chính là **tự động khởi động lại ứng dụng (hoặc Live Reload/Hot Swap)** khi các file trên classpath thay đổi. Điều này giúp tăng tốc đáng kể chu trình phản hồi phát triển bằng cách giảm thời gian chờ đợi khởi động lại thủ công."
      }
    }
  },
  {
    _id: "sb-f-047",
    difficulty: "fresher",
    tags: ["data", "jpa", "query"],
    content: {
      en: {
        title: "Derived Query Methods",
        body: "Explain what **Derived Query Methods** are in Spring Data JPA, and give an example of a method signature that Spring Data would automatically implement.",
        solution: "Derived Query Methods are methods in a Repository interface whose **name follows a specific convention** (like `findBy...` or `countBy...`). Spring Data automatically derives the necessary query from the method name at runtime. Example: `List<User> findByLastName(String lastName);`"
      },
      jp: {
        title: "導出クエリメソッド",
        body: "Spring Data JPAにおける**導出クエリメソッド**とは何かを説明し、Spring Dataが自動的に実装するメソッドシグネチャの例を挙げてください。",
        solution: "導出クエリメソッドは、**名前が特定の規約に従う**（`findBy...`や`countBy...`など）Repositoryインターフェース内のメソッドです。Spring Dataは、実行時にメソッド名から必要なクエリを自動的に導出します。例: `List<User> findByLastName(String lastName);`"
      },
      vi: {
        title: "Derived Query Methods",
        body: "Giải thích **Derived Query Methods** là gì trong Spring Data JPA, và đưa ra một ví dụ về một method signature mà Spring Data sẽ tự động implement.",
        solution: "Derived Query Methods là các phương thức trong một interface Repository có **tên tuân theo một quy ước cụ thể** (như `findBy...` hoặc `countBy...`). Spring Data tự động suy ra truy vấn cần thiết từ tên phương thức tại thời điểm chạy. Ví dụ: `List<User> findByLastName(String lastName);`"
      }
    }
  },
  {
    _id: "sb-f-048",
    difficulty: "fresher",
    tags: ["testing", "slice", "web"],
    content: {
      en: {
        title: "@WebMvcTest Purpose",
        body: "What is the benefit of using the **@WebMvcTest** annotation for testing, as opposed to `@SpringBootTest`?",
        solution: "**@WebMvcTest** is a 'slice' test annotation. It is used to test only the **web layer (controllers)** without loading the full application context (services, repositories). This makes the test run much **faster** and focuses the test scope on the MVC components only."
      },
      jp: {
        title: "@WebMvcTestの目的",
        body: "`@SpringBootTest`と比較して、テストに**@WebMvcTest**アノテーションを使用する利点は何ですか？",
        solution: "**@WebMvcTest**は「スライス」テストアノテーションです。完全なアプリケーションコンテキスト（サービス、リポジトリ）をロードせずに、**Web層（コントローラー）のみ**をテストするために使用されます。これにより、テストの実行がはるかに**高速**になり、テストスコープがMVCコンポーネントのみに集中します。"
      },
      vi: {
        title: "Mục đích @WebMvcTest",
        body: "Lợi ích của việc sử dụng annotation **@WebMvcTest** để kiểm thử là gì, trái ngược với `@SpringBootTest`?",
        solution: "**@WebMvcTest** là một annotation kiểm thử 'slice'. Nó được sử dụng để chỉ kiểm thử **tầng web (controllers)** mà không tải toàn bộ application context (services, repositories). Điều này làm cho bài kiểm thử chạy **nhanh hơn** đáng kể và tập trung phạm vi kiểm thử vào các thành phần MVC mà thôi."
      }
    }
  },
  {
    _id: "sb-f-049",
    difficulty: "fresher",
    tags: ["data", "schema", "initialization"],
    content: {
      en: {
        title: "Data Initialization Files",
        body: "What two file names does Spring Boot automatically look for in the classpath (e.g., `src/main/resources`) to execute SQL scripts for initializing a database schema and population data, respectively?",
        solution: "1. **`schema.sql`**: Used to create the database structure (tables, constraints). 2. **`data.sql`**: Used to populate the database with initial test data."
      },
      jp: {
        title: "データ初期化ファイル",
        body: "Spring Bootがクラスパス（例：`src/main/resources`）内で自動的に探す2つのファイル名は何ですか。それぞれデータベーススキーマの初期化とデータ投入のためのSQLスクリプトを実行しますか？",
        solution: "1. **`schema.sql`**: データベース構造（テーブル、制約）を作成するために使用されます。 2. **`data.sql`**: データベースに初期テストデータを投入するために使用されます。"
      },
      vi: {
        title: "Các file Khởi tạo Dữ liệu",
        body: "Hai tên file nào mà Spring Boot tự động tìm kiếm trong classpath (ví dụ: `src/main/resources`) để thực thi các script SQL nhằm khởi tạo schema cơ sở dữ liệu và dữ liệu ban đầu, tương ứng?",
        solution: "1. **`schema.sql`**: Được sử dụng để tạo cấu trúc cơ sở dữ liệu (bảng, ràng buộc). 2. **`data.sql`**: Được sử dụng để điền dữ liệu kiểm thử ban đầu vào cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sb-f-050",
    difficulty: "fresher",
    tags: ["rest", "http", "cors"],
    content: {
      en: {
        title: "CORS Annotation",
        body: "What Spring annotation can you place on a controller class or method to easily enable **CORS (Cross-Origin Resource Sharing)** for that endpoint?",
        solution: "The **@CrossOrigin** annotation. Placing it on a controller enables cross-origin requests for all handler methods in that controller; placing it on a method enables it for just that method."
      },
      jp: {
        title: "CORSアノテーション",
        body: "コントローラークラスまたはメソッドに配置することで、そのエンドポイントに対して**CORS（Cross-Origin Resource Sharing）**を簡単に有効にできるSpringアノテーションは何ですか？",
        solution: "**@CrossOrigin**アノテーションです。コントローラーに配置すると、そのコントローラー内のすべてのハンドラーメソッドに対してクロスオリジンリクエストが有効になります。メソッドに配置すると、そのメソッドに対してのみ有効になります。"
      },
      vi: {
        title: "Annotation CORS",
        body: "Annotation Spring nào bạn có thể đặt trên một class controller hoặc phương thức để dễ dàng bật **CORS (Cross-Origin Resource Sharing)** cho endpoint đó?",
        solution: "Annotation **@CrossOrigin**. Đặt nó trên một controller sẽ bật cross-origin request cho tất cả các phương thức handler trong controller đó; đặt nó trên một phương thức sẽ bật nó chỉ cho phương thức đó."
      }
    }
  }
];
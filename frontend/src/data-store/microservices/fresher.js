const microservicesFresherQuestions = [
  {
    _id: "ms-f-001",
    difficulty: "fresher",
    tags: ["concept", "architecture"],
    content: {
      en: {
        title: "Microservices vs Monolith",
        body: "What is the **main difference** between a monolithic architecture and a microservices architecture?",
        solution: "A **Monolith** is a single, tightly coupled application. **Microservices** is a collection of small, independent services, each running its own process and communicating via APIs."
      },
      jp: {
        title: "マイクロサービス vs モノリス",
        body: "モノリシックアーキテクチャとマイクロサービスアーキテクチャの**主な違い**は何ですか？",
        solution: "**モノリス**は単一の密結合アプリケーションです。**マイクロサービス**は、それぞれが独自のプロセスを実行し、APIを介して通信する、小さく独立したサービスの集合体です。"
      },
      vi: {
        title: "Microservices và Monolith",
        body: "Sự **khác biệt chính** giữa kiến trúc monolithic và kiến trúc microservices là gì?",
        solution: "**Monolith** là một ứng dụng duy nhất, gắn kết chặt chẽ. **Microservices** là một tập hợp các dịch vụ nhỏ, độc lập, mỗi dịch vụ chạy tiến trình riêng và giao tiếp qua API."
      }
    }
  },
  {
    _id: "ms-f-002",
    difficulty: "fresher",
    tags: ["communication", "api"],
    content: {
      en: {
        title: "Service Communication",
        body: "In a microservices architecture, how do individual services typically communicate with each other?",
        solution: "They communicate using **lightweight protocols**, most commonly **HTTP/REST** or **gRPC** for synchronous communication, or message queues/brokers (like Kafka/RabbitMQ) for asynchronous communication."
      },
      jp: {
        title: "サービス間通信",
        body: "マイクロサービスアーキテクチャでは、個々のサービスは通常、どのように相互に通信しますか？",
        solution: "同期通信には、最も一般的に**軽量プロトコル**である**HTTP/REST**または**gRPC**を使用し、非同期通信にはメッセージキュー/ブローカー（Kafka/RabbitMQなど）を使用します。"
      },
      vi: {
        title: "Giao tiếp giữa các Service",
        body: "Trong kiến trúc microservices, các service riêng lẻ thường giao tiếp với nhau như thế nào?",
        solution: "Chúng giao tiếp bằng cách sử dụng **các giao thức nhẹ**, phổ biến nhất là **HTTP/REST** hoặc **gRPC** cho giao tiếp đồng bộ, hoặc message queues/brokers (như Kafka/RabbitMQ) cho giao tiếp bất đồng bộ."
      }
    }
  },
  {
    _id: "ms-f-003",
    difficulty: "fresher",
    tags: ["deployment", "docker"],
    content: {
      en: {
        title: "Containerization Role",
        body: "What technology is primarily used to package and isolate microservices for consistent deployment across environments?",
        solution: "**Containers** (like Docker) are used. They package the service code and all its dependencies, ensuring it runs the same way everywhere."
      },
      jp: {
        title: "コンテナ化の役割",
        body: "異なる環境間での一貫したデプロイメントのために、マイクロサービスをパッケージ化して分離するために主に使用されるテクノロジーは何ですか？",
        solution: "**コンテナ**（Dockerなど）が使用されます。これらはサービスコードとそのすべての依存関係をパッケージ化し、どこでも同じように実行されることを保証します。"
      }
    }
  },
  {
    _id: "ms-f-004",
    difficulty: "fresher",
    tags: ["data", "database"],
    content: {
      en: {
        title: "Database per Service",
        body: "What is the **Database per Service** principle, and why is it important in microservices?",
        solution: "It means each microservice owns its **own private database**. It's important because it ensures **loose coupling** and prevents one service from directly accessing another service's data, enforcing autonomy and independence."
      },
      jp: {
        title: "サービスごとのデータベース",
        body: "**サービスごとのデータベース**の原則は何ですか、またマイクロサービスでそれが重要なのはなぜですか？",
        solution: "これは、各マイクロサービスが**独自のプライベートデータベース**を所有することを意味します。**疎結合**を確保し、あるサービスが別のサービスのデータに直接アクセスするのを防ぎ、自律性と独立性を強制するため、重要です。"
      }
    }
  },
  {
    _id: "ms-f-005",
    difficulty: "fresher",
    tags: ["resilience", "patterns"],
    content: {
      en: {
        title: "Circuit Breaker Pattern",
        body: "What is the main goal of the **Circuit Breaker** pattern in a microservices system?",
        solution: "The main goal is **fault tolerance** (khả năng chịu lỗi). It stops repeated attempts to call a failing service, allowing the failing service time to recover and preventing client resources from being wasted." 
      },
      jp: {
        title: "サーキットブレーカーパターン",
        body: "マイクロサービスシステムにおける**サーキットブレーカー**パターンの主な目的は何ですか？",
        solution: "主な目的は**フォールトトレランス**（耐障害性）です。失敗しているサービスへの繰り返しの呼び出し試行を停止し、失敗しているサービスに回復する時間を与え、クライアントのリソースが無駄になるのを防ぎます。"
      }
    }
  },
  {
    _id: "ms-f-006",
    difficulty: "fresher",
    tags: ["gateway", "routing"],
    content: {
      en: {
        title: "API Gateway Purpose",
        body: "What is the role of an **API Gateway** in a microservices architecture?",
        solution: "It acts as a **single entry point** for all clients. It handles cross-cutting concerns like routing requests to the correct service, authentication, and rate limiting."
      },
      jp: {
        title: "APIゲートウェイの目的",
        body: "マイクロサービスアーキテクチャにおける**APIゲートウェイ**の役割は何ですか？",
        solution: "すべてのクライアントにとって**単一のエントリポイント**として機能します。正しいサービスへのリクエストのルーティング、認証、レート制限などの横断的な関心事を処理します。"
      }
    }
  },
  {
    _id: "ms-f-007",
    difficulty: "fresher",
    tags: ["trade-off", "complexity"],
    content: {
      en: {
        title: "Microservices Drawback",
        body: "What is one major **operational challenge** introduced by switching from a Monolith to Microservices?",
        solution: "Increased **operational complexity** (or monitoring/deployment complexity). Managing and monitoring dozens of separate services is much harder than managing one single application."
      },
      jp: {
        title: "マイクロサービスの欠点",
        body: "モノリスからマイクロサービスに切り替えることによって導入される主な**運用上の課題**の1つは何ですか？",
        solution: "**運用上の複雑さ**（または監視/デプロイメントの複雑さ）が増加します。数十の個別のサービスを管理および監視することは、単一のアプリケーションを管理するよりもはるかに困難です。"
      }
    }
  },
  {
    _id: "ms-f-008",
    difficulty: "fresher",
    tags: ["discovery", "networking"],
    content: {
      en: {
        title: "Service Discovery",
        body: "How does one microservice find the network location (IP/Port) of another microservice it needs to call?",
        solution: "Through **Service Discovery**. Services register themselves with a Service Registry (like Consul or Eureka), and clients query the registry to find the current, available network address of the target service."
      },
      jp: {
        title: "サービスディスカバリ",
        body: "あるマイクロサービスは、呼び出す必要のある別のマイクロサービスのネットワークロケーション（IP/ポート）をどのように見つけますか？",
        solution: "**サービスディスカバリ**を介して。サービスはサービスレジストリ（ConsulやEurekaなど）に自身を登録し、クライアントはレジストリにクエリを実行して、ターゲットサービスの現在利用可能なネットワークアドレスを見つけます。"
      }
    }
  },
  {
    _id: "ms-f-009",
    difficulty: "fresher",
    tags: ["testing", "contract"],
    content: {
      en: {
        title: "Contract Testing",
        body: "What is **Contract Testing** and what problem does it solve in a microservices environment?",
        solution: "It tests that a client service's assumptions about the structure/data of another service's API (the 'contract') are correct. It solves the problem of **breaking changes** where a change in one service unexpectedly breaks its consumers."
      },
      jp: {
        title: "コントラクトテスト",
        body: "**コントラクトテスト**とは何ですか、またマイクロサービス環境でどのような問題を解決しますか？",
        solution: "これは、クライアントサービスが別のサービスのAPI（「コントラクト」）の構造/データについて持っている仮定が正しいかどうかをテストします。あるサービスでの変更が、そのコンシューマーを予期せず壊す**破壊的な変更**の問題を解決します。"
      }
    }
  },
  {
    _id: "ms-f-010",
    difficulty: "fresher",
    tags: ["observability", "logs"],
    content: {
      en: {
        title: "Centralized Logging",
        body: "Why is **centralized logging** essential in a microservices architecture?",
        solution: "Because a single transaction often involves multiple services. Centralized logging allows developers to trace the execution path and errors **across service boundaries** by collecting logs in one place (e.g., using ELK stack)."
      }
    },
    jp: {
      title: "集中型ロギング",
      body: "マイクロサービスアーキテクチャにおいて、**集中型ロギング**が不可欠であるのはなぜですか？",
      solution: "単一のトランザクションが複数のサービスに関与することが多いためです。集中型ロギングにより、開発者は（ELKスタックなどを使用して）ログを1か所に収集することで、**サービス境界を越えた**実行パスとエラーを追跡できます。"
    },
    vi: {
      title: "Centralized Logging",
      body: "Tại sao **centralized logging (ghi nhật ký tập trung)** lại cần thiết trong kiến trúc microservices?",
      solution: "Vì một giao dịch duy nhất thường liên quan đến nhiều dịch vụ. Ghi nhật ký tập trung cho phép các nhà phát triển theo dõi đường dẫn thực thi và lỗi **trên ranh giới các dịch vụ** bằng cách thu thập nhật ký ở một nơi (ví dụ: sử dụng ELK stack)."
    }
  },
  {
    _id: "ms-f-011",
    difficulty: "fresher",
    tags: ["transaction", "consistency"],
    content: {
      en: {
        title: "Distributed Transactions",
        body: "Why are traditional **ACID transactions** difficult or impossible to use across multiple microservices?",
        solution: "Because each service has its own private database. Coordinating a transaction across separate databases requires complex, slow protocols (like two-phase commit), which microservices try to avoid in favor of **eventual consistency**."
      },
      jp: {
        title: "分散トランザクション",
        body: "複数のマイクロサービス間で従来の**ACIDトランザクション**を使用することが困難または不可能なのはなぜですか？",
        solution: "各サービスが独自のプライベートデータベースを持っているためです。個別のデータベース間でトランザクションを調整するには、複雑で遅いプロトコル（2相コミットなど）が必要であり、マイクロサービスは**結果整合性**を優先してこれを回避しようとします。"
      },
      vi: {
        title: "Distributed Transactions",
        body: "Tại sao **giao dịch ACID** truyền thống lại khó hoặc không thể sử dụng trên nhiều microservices?",
        solution: "Vì mỗi dịch vụ có cơ sở dữ liệu riêng. Phối hợp giao dịch trên các cơ sở dữ liệu riêng biệt yêu cầu các giao thức phức tạp, chậm (như two-phase commit), điều mà microservices cố gắng tránh để ưu tiên **tính nhất quán cuối cùng (eventual consistency)**."
      }
    }
  },
  {
    _id: "ms-f-012",
    difficulty: "fresher",
    tags: ["scalability", "autonomy"],
    content: {
      en: {
        title: "Independent Scaling",
        body: "What is the benefit of **independent scaling** in a microservices architecture?",
        solution: "You can scale only the **specific service** that is experiencing high load (e.g., the image upload service) without having to scale the entire application, which saves resources and cost."
      },
      jp: {
        title: "独立したスケーリング",
        body: "マイクロサービスアーキテクチャにおける**独立したスケーリング**の利点は何ですか？",
        solution: "アプリケーション全体をスケーリングすることなく、高い負荷を経験している**特定のサービス**（例：画像アップロードサービス）のみをスケーリングできるため、リソースとコストを節約できます。"
      },
      vi: {
        title: "Independent Scaling",
        body: "Lợi ích của **independent scaling (mở rộng độc lập)** trong kiến trúc microservices là gì?",
        solution: "Bạn có thể chỉ mở rộng **dịch vụ cụ thể** đang gặp tải cao (ví dụ: dịch vụ tải lên hình ảnh) mà không cần phải mở rộng toàn bộ ứng dụng, điều này giúp tiết kiệm tài nguyên và chi phí."
      }
    }
  },
  {
    _id: "ms-f-013",
    difficulty: "fresher",
    tags: ["development", "technology"],
    content: {
      en: {
        title: "Polyglot Persistence",
        body: "What does the term **Polyglot Persistence** mean in the context of microservices?",
        solution: "It means allowing different microservices to use **different types of databases** (e.g., one uses PostgreSQL, another uses MongoDB, and a third uses Redis) that are best suited for their specific needs."
      },
      jp: {
        title: "多言語永続化",
        body: "マイクロサービスのコンテキストで**多言語永続化（Polyglot Persistence）**という用語は何を意味しますか？",
        solution: "これは、異なるマイクロサービスが、特定のニーズに最適な**異なる種類のデータベース**（例：1つはPostgreSQLを使用し、別のものはMongoDBを使用し、3つ目はRedisを使用）を使用することを許可することを意味します。"
      },
      vi: {
        title: "Polyglot Persistence",
        body: "Thuật ngữ **Polyglot Persistence (Tính bền vững đa ngôn ngữ)** có nghĩa là gì trong bối cảnh microservices?",
        solution: "Nó có nghĩa là cho phép các microservices khác nhau sử dụng **các loại cơ sở dữ liệu khác nhau** (ví dụ: một dịch vụ sử dụng PostgreSQL, dịch vụ khác sử dụng MongoDB và dịch vụ thứ ba sử dụng Redis) phù hợp nhất với nhu cầu cụ thể của chúng."
      }
    }
  },
  {
    _id: "ms-f-014",
    difficulty: "fresher",
    tags: ["api", "data"],
    content: {
      en: {
        title: "API Composition Pattern",
        body: "When a client needs data from *multiple* microservices (e.g., to build a dashboard), what architectural pattern is commonly used by the API Gateway to fulfill this?",
        solution: "The **API Composition** pattern (or API Gateway composition) is used. The Gateway calls multiple services in parallel, aggregates the results, and returns a single, combined response to the client."
      },
      jp: {
        title: "APIコンポジションパターン",
        body: "クライアントが*複数の*マイクロサービスからのデータ（例：ダッシュボードを作成するため）を必要とする場合、APIゲートウェイがこれを満たすために一般的に使用するアーキテクチャパターンは何ですか？",
        solution: "**APIコンポジション**パターン（またはAPIゲートウェイコンポジション）が使用されます。ゲートウェイは複数のサービスを並行して呼び出し、結果を集約し、単一の結合された応答をクライアントに返します。"
      },
      vi: {
        title: "API Composition Pattern",
        body: "Khi một máy khách cần dữ liệu từ *nhiều* microservices (ví dụ: để xây dựng một dashboard), mô hình kiến trúc nào thường được API Gateway sử dụng để thực hiện điều này?",
        solution: "Mô hình **API Composition (Tổ hợp API)** (hoặc API Gateway composition) được sử dụng. Gateway gọi song song nhiều dịch vụ, tổng hợp kết quả và trả về một phản hồi duy nhất, kết hợp cho máy khách."
      }
    }
  },
  {
    _id: "ms-f-015",
    difficulty: "fresher",
    tags: ["team", "organization"],
    content: {
      en: {
        title: "Two Pizza Team Rule",
        body: "The 'Two Pizza Team' rule, often associated with microservices, suggests teams should be small enough to be fed by how many pizzas?",
        solution: "Two pizzas. The rule emphasizes that microservice teams should be **small, autonomous, and cross-functional** to maintain efficiency and ownership of their service."
      },
      jp: {
        title: "ツーピザチームのルール",
        body: "マイクロサービスと関連付けられることが多い「ツーピザチームのルール」は、チームが何枚のピザでまかなえるほど小さいべきだと示唆していますか？",
        solution: "2枚のピザ。このルールは、効率性とサービスの所有権を維持するために、マイクロサービスチームが**小さく、自律的で、クロスファンクショナル**であるべきであることを強調しています。"
      },
      vi: {
        title: "Quy tắc Two Pizza Team",
        body: "Quy tắc 'Two Pizza Team' (Đội hai cái pizza), thường liên quan đến microservices, gợi ý rằng các đội nên đủ nhỏ để được nuôi bằng bao nhiêu cái pizza?",
        solution: "Hai cái pizza. Quy tắc này nhấn mạnh rằng các đội microservices nên **nhỏ, tự chủ và đa chức năng** để duy trì hiệu quả và quyền sở hữu đối với dịch vụ của họ."
      }
    }
  },
  {
    _id: "ms-f-016",
    difficulty: "fresher",
    tags: ["messaging", "asynchronous"],
    content: {
      en: {
        title: "Message Broker Role",
        body: "What is the primary function of a **Message Broker** (like RabbitMQ or Kafka) in a microservices system?",
        solution: "To facilitate **asynchronous communication**. It decouples services by allowing a producer service to publish messages without needing to know which consumer service will handle them, improving resilience."
      },
      jp: {
        title: "メッセージブローカーの役割",
        body: "マイクロサービスシステムにおける**メッセージブローカー**（RabbitMQやKafkaなど）の主な機能は何ですか？",
        solution: "**非同期通信**を容易にすること。これにより、プロデューサーサービスがどのコンシューマーサービスがメッセージを処理するかを知る必要なくメッセージを公開できるようになり、サービスを疎結合し、回復力を向上させます。"
      },
      vi: {
        title: "Vai trò của Message Broker",
        body: "Chức năng chính của một **Message Broker (Trình môi giới tin nhắn)** (như RabbitMQ hoặc Kafka) trong hệ thống microservices là gì?",
        solution: "Để tạo điều kiện cho **giao tiếp bất đồng bộ**. Nó tách rời các dịch vụ bằng cách cho phép dịch vụ sản xuất (producer) xuất bản tin nhắn mà không cần biết dịch vụ tiêu thụ (consumer) nào sẽ xử lý chúng, cải thiện tính linh hoạt và khả năng chịu lỗi."
      }
    }
  },
  {
    _id: "ms-f-017",
    difficulty: "fresher",
    tags: ["security", "auth"],
    content: {
      en: {
        title: "Security and API Gateway",
        body: "In a microservices system, where should **authentication** (verifying the user's identity) ideally take place to protect backend services?",
        solution: "At the **API Gateway**. The gateway validates the token/credentials, and if valid, passes a minimal identifier to the downstream services, which then only need to handle **authorization**."
      },
      jp: {
        title: "セキュリティとAPIゲートウェイ",
        body: "マイクロサービスシステムにおいて、バックエンドサービスを保護するために**認証**（ユーザーの身元確認）は理想的にはどこで行われるべきですか？",
        solution: "**APIゲートウェイ**で。ゲートウェイはトークン/資格情報を検証し、有効であれば最小限の識別子をダウンストリームサービスに渡し、ダウンストリームサービスは**認可**のみを処理する必要があります。"
      },
      vi: {
        title: "Bảo mật và API Gateway",
        body: "Trong hệ thống microservices, **xác thực (authentication)** (xác minh danh tính người dùng) lý tưởng nên diễn ra ở đâu để bảo vệ các dịch vụ backend?",
        solution: "Tại **API Gateway**. Gateway xác thực token/thông tin đăng nhập, và nếu hợp lệ, chuyển một định danh tối thiểu đến các dịch vụ downstream, các dịch vụ này sau đó chỉ cần xử lý **ủy quyền (authorization)**."
      }
    }
  },
  {
    _id: "ms-f-018",
    difficulty: "fresher",
    tags: ["architecture", "domain"],
    content: {
      en: {
        title: "Bounded Context",
        body: "In Domain-Driven Design (DDD), which is key to microservices, what is a **Bounded Context**?",
        solution: "A **Bounded Context** is a clear boundary within a domain where a specific model applies. In microservices, each service typically corresponds to one Bounded Context, ensuring clear separation of concepts (e.g., 'Customer' means different things in the Sales Context vs. the Support Context)."
      },
      jp: {
        title: "境界付けられたコンテキスト",
        body: "マイクロサービスの鍵となるドメイン駆動設計（DDD）において、**境界付けられたコンテキスト（Bounded Context）**とは何ですか？",
        solution: "**境界付けられたコンテキスト**は、特定のモデルが適用されるドメイン内の明確な境界です。マイクロサービスでは、各サービスが通常1つの境界付けられたコンテキストに対応し、概念の明確な分離を保証します（例：「顧客」は営業コンテキストとサポートコンテキストでは異なる意味を持ちます）。"
      },
      vi: {
        title: "Bounded Context",
        body: "Trong Domain-Driven Design (DDD), vốn là chìa khóa cho microservices, **Bounded Context (Ngữ cảnh Ràng buộc)** là gì?",
        solution: "**Bounded Context** là một ranh giới rõ ràng trong một miền (domain) nơi một mô hình cụ thể được áp dụng. Trong microservices, mỗi dịch vụ thường tương ứng với một Bounded Context, đảm bảo sự phân tách rõ ràng các khái niệm (ví dụ: 'Khách hàng' có ý nghĩa khác nhau trong Ngữ cảnh Bán hàng so với Ngữ cảnh Hỗ trợ)."
      }
    }
  },
  {
    _id: "ms-f-019",
    difficulty: "fresher",
    tags: ["deployment", "ci/cd"],
    content: {
      en: {
        title: "CI/CD in Microservices",
        body: "Why is an automated **CI/CD pipeline** more critical for microservices than for a monolith?",
        solution: "Because there are **many more deployment units** (dozens or hundreds of services). Manual deployment for so many services would be slow and error-prone. Automation is essential for high frequency, independent deployments."
      },
      jp: {
        title: "マイクロサービスにおけるCI/CD",
        body: "**自動化されたCI/CDパイプライン**は、モノリスよりもマイクロサービスにとってなぜより重要ですか？",
        solution: "**デプロイメントユニットがはるかに多い**ためです（数十または数百のサービス）。これほど多くのサービスの**手動デプロイメント**は遅く、エラーが発生しやすいでしょう。高頻度で独立したデプロイメントには、自動化が不可欠です。"
      },
      vi: {
        title: "CI/CD trong Microservices",
        body: "Tại sao **CI/CD pipeline** tự động lại quan trọng hơn đối với microservices so với monolith?",
        solution: "Vì có **nhiều đơn vị triển khai hơn** (hàng chục hoặc hàng trăm dịch vụ). Việc triển khai thủ công cho quá nhiều dịch vụ sẽ chậm và dễ xảy ra lỗi. Tự động hóa là cần thiết cho việc triển khai độc lập, tần suất cao."
      }
    }
  },
  {
    _id: "ms-f-020",
    difficulty: "fresher",
    tags: ["resilience", "patterns"],
    content: {
      en: {
        title: "Bulkhead Pattern",
        body: "In a microservices application, what does the **Bulkhead Pattern** protect against?",
        solution: "It protects against **cascading failures**. By isolating resources (like connection pools or threads) used by one service call, it ensures that a failure or slowdown in one service cannot exhaust shared resources and bring down the entire system."
      },
      jp: {
        title: "バルクヘッドパターン",
        body: "マイクロサービスアプリケーションにおいて、**バルクヘッドパターン**は何から保護しますか？",
        solution: "**カスケード障害**から保護します。あるサービスコールが使用するリソース（接続プールやスレッドなど）を隔離することで、あるサービスでの障害や遅延が共有リソースを使い果たし、システム全体を停止させることを防ぎます。"
      },
      vi: {
        title: "Bulkhead Pattern",
        body: "Trong một ứng dụng microservices, **Bulkhead Pattern (Mô hình Vách ngăn)** bảo vệ chống lại điều gì?",
        solution: "Nó bảo vệ chống lại **lỗi domino (cascading failures)**. Bằng cách cô lập các tài nguyên (như connection pools hoặc threads) được sử dụng bởi một lệnh gọi dịch vụ, nó đảm bảo rằng một lỗi hoặc sự chậm lại trong một dịch vụ không thể làm cạn kiệt các tài nguyên được chia sẻ và làm sập toàn bộ hệ thống."
      }
    }
  }
];
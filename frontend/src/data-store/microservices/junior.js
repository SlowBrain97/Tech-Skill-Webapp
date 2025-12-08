const microservicesJuniorQuestions = [
  {
    _id: "ms-j-001",
    difficulty: "junior",
    tags: ["communication", "synchronous", "rest"],
    content: {
      en: {
        title: "Synchronous Communication Drawback",
        body: "What is the main drawback of using **synchronous (blocking) HTTP/REST** calls for service-to-service communication in microservices?",
        solution: "It creates **tight coupling** and introduces the risk of **cascading failures** (one service failure/slowdown can delay or crash its calling services)."
      },
      jp: {
        title: "同期通信の欠点",
        body: "マイクロサービスにおけるサービス間通信に**同期的な（ブロッキング）HTTP/REST**コールを使用することの主な欠点は何ですか？",
        solution: "**密結合**を生み出し、**カスケード障害**（あるサービスの障害/遅延が、それを呼び出すサービスを遅延またはクラッシュさせる可能性がある）のリスクを招きます。"
      },
      vi: {
        title: "Hạn chế của Giao tiếp Đồng bộ",
        body: "Hạn chế chính của việc sử dụng các lời gọi **HTTP/REST đồng bộ (blocking)** cho giao tiếp giữa các dịch vụ trong microservices là gì?",
        solution: "Nó tạo ra **gắn kết chặt chẽ (tight coupling)** và gây ra rủi ro **lỗi domino (cascading failures)** (một lỗi/chậm trễ dịch vụ có thể làm chậm hoặc làm sập các dịch vụ gọi nó)."
      }
    }
  },
  {
    _id: "ms-j-002",
    difficulty: "junior",
    tags: ["data", "consistency", "saga"],
    content: {
      en: {
        title: "Saga Pattern Necessity",
        body: "In a microservices system, why is the **Saga Pattern** often necessary?",
        solution: "The Saga Pattern is needed to manage **distributed transactions** and maintain **data consistency** across multiple services, where traditional ACID transactions cannot span the different private databases."
      },
      jp: {
        title: "Sagaパターンの必要性",
        body: "マイクロサービスシステムにおいて、**Sagaパターン**がしばしば必要とされるのはなぜですか？",
        solution: "Sagaパターンは、従来のACIDトランザクションが異なるプライベートデータベースにまたがることができない場合、**分散トランザクション**を管理し、複数のサービス間で**データの一貫性**を維持するために必要です。"
      },
      vi: {
        title: "Sự cần thiết của Saga Pattern",
        body: "Trong hệ thống microservices, tại sao **Saga Pattern** thường cần thiết?",
        solution: "Saga Pattern cần thiết để quản lý **giao dịch phân tán (distributed transactions)** và duy trì **tính nhất quán dữ liệu** trên nhiều dịch vụ, nơi các giao dịch ACID truyền thống không thể bao quát các cơ sở dữ liệu riêng biệt."
      }
    }
  },
  {
    _id: "ms-j-003",
    difficulty: "junior",
    tags: ["event", "architecture", "messaging"],
    content: {
      en: {
        title: "Event-Driven Architecture",
        body: "Briefly describe the key characteristic of an **Event-Driven Architecture (EDA)** in microservices.",
        solution: "Services communicate primarily by producing and consuming **Events** (state changes). This decouples services in time and space, meaning the producer doesn't know who the consumers are, and the consumers react asynchronously."
      },
      jp: {
        title: "イベント駆動型アーキテクチャ",
        body: "マイクロサービスにおける**イベント駆動型アーキテクチャ（EDA）**の主な特徴を簡潔に説明してください。",
        solution: "サービスは主に**イベント**（状態変化）を生成および消費することで通信します。これにより、サービスは時間と空間で疎結合され、プロデューサーはコンシューマーが誰であるかを知らず、コンシューマーは非同期で反応します。"
      },
      vi: {
        title: "Kiến trúc Hướng sự kiện (EDA)",
        body: "Mô tả ngắn gọn đặc điểm chính của **Kiến trúc Hướng sự kiện (EDA)** trong microservices.",
        solution: "Các dịch vụ giao tiếp chủ yếu bằng cách tạo và tiêu thụ **Sự kiện (Events)** (thay đổi trạng thái). Điều này làm các dịch vụ trở nên lỏng lẻo về thời gian và không gian, nghĩa là nhà sản xuất không biết người tiêu thụ là ai, và người tiêu thụ phản ứng một cách bất đồng bộ."
      }
    }
  },
  {
    _id: "ms-j-004",
    difficulty: "junior",
    tags: ["deployment", "orchestration", "k8s"],
    content: {
      en: {
        title: "Kubernetes Role",
        body: "What critical function does **Kubernetes (K8s)** perform in a microservices deployment environment?",
        solution: "It provides **container orchestration**. K8s manages the deployment, scaling, health checks, networking, and load balancing of containerized microservices automatically."
      },
      jp: {
        title: "Kubernetesの役割",
        body: "マイクロサービスデプロイメント環境において、**Kubernetes (K8s)** はどのような重要な機能を果たしますか？",
        solution: "**コンテナオーケストレーション**を提供します。K8sは、コンテナ化されたマイクロサービスのデプロイメント、スケーリング、ヘルスチェック、ネットワーキング、およびロードバランシングを自動的に管理します。"
      },
      vi: {
        title: "Vai trò của Kubernetes",
        body: "**Kubernetes (K8s)** thực hiện chức năng quan trọng nào trong môi trường triển khai microservices?",
        solution: "Nó cung cấp **điều phối container (container orchestration)**. K8s tự động quản lý việc triển khai, mở rộng, kiểm tra sức khỏe, mạng và cân bằng tải của các microservices được đóng gói trong container."
      }
    }
  },
  {
    _id: "ms-j-005",
    difficulty: "junior",
    tags: ["testing", "e2e"],
    content: {
      en: {
        title: "E2E Testing Challenge",
        body: "Why is **End-to-End (E2E) Testing** more complex and often avoided in a pure microservices environment?",
        solution: "Because E2E tests require spinning up and coordinating **multiple services, databases, and message brokers** simultaneously, making them slow, fragile, and hard to maintain."
      },
      jp: {
        title: "E2Eテストの課題",
        body: "純粋なマイクロサービス環境では、**エンドツーエンド（E2E）テスト**はなぜより複雑になり、しばしば避けられるのですか？",
        solution: "E2Eテストでは、**複数のサービス、データベース、メッセージブローカー**を同時に起動して調整する必要があるため、遅く、壊れやすく、メンテナンスが困難になります。"
      },
      vi: {
        title: "Thách thức của E2E Testing",
        body: "Tại sao **Kiểm thử End-to-End (E2E)** lại phức tạp hơn và thường được tránh trong môi trường microservices thuần túy?",
        solution: "Bởi vì các bài kiểm thử E2E yêu cầu phải khởi động và điều phối **nhiều dịch vụ, cơ sở dữ liệu và message brokers** cùng lúc, khiến chúng chậm, dễ vỡ và khó bảo trì."
      }
    }
  },
  {
    _id: "ms-j-006",
    difficulty: "junior",
    tags: ["data", "query", "cqrs"],
    content: {
      en: {
        title: "CQRS Purpose",
        body: "What fundamental separation does the **Command Query Responsibility Segregation (CQRS)** pattern introduce?",
        solution: "It separates the **Command** (write/update) model from the **Query** (read) model. This allows using different data stores and scaling strategies for reading and writing operations independently, which is highly beneficial in Polyglot Persistence."
      },
      jp: {
        title: "CQRSの目的",
        body: "**コマンドクエリ責務分離（CQRS）**パターンが導入する基本的な分離は何ですか？",
        solution: "**コマンド**（書き込み/更新）モデルと**クエリ**（読み取り）モデルを分離します。これにより、読み取り操作と書き込み操作に対して異なるデータストアとスケーリング戦略を独立して使用できるようになり、多言語永続性において非常に有益です。"
      },
      vi: {
        title: "Mục đích của CQRS",
        body: "Sự phân tách cơ bản nào mà mô hình **Command Query Responsibility Segregation (CQRS)** giới thiệu?",
        solution: "Nó tách biệt mô hình **Command (Lệnh/Ghi)** khỏi mô hình **Query (Truy vấn/Đọc)**. Điều này cho phép sử dụng các kho dữ liệu và chiến lược mở rộng khác nhau cho các hoạt động đọc và ghi một cách độc lập, rất có lợi trong Polyglot Persistence."
      }
    }
  },
  {
    _id: "ms-j-007",
    difficulty: "junior",
    tags: ["observability", "tracing"],
    content: {
      en: {
        title: "Distributed Tracing Necessity",
        body: "Why is **Distributed Tracing** essential for debugging and monitoring a microservices system?",
        solution: "It allows tracking a **single request** (transaction) as it flows **across multiple service boundaries**. This helps pinpoint which service is causing latency or failure in a complex request path." 
      },
      jp: {
        title: "分散トレーシングの必要性",
        body: "**分散トレーシング**は、マイクロサービスシステムのデバッグと監視にとってなぜ不可欠ですか？",
        solution: "それは、**単一のリクエスト**（トランザクション）が**複数のサービス境界を越えて**流れるのを追跡することを可能にします。これにより、複雑なリクエストパスの中でどのサービスが遅延や障害を引き起こしているかを特定するのに役立ちます。"
      },
      vi: {
        title: "Sự cần thiết của Distributed Tracing",
        body: "Tại sao **Distributed Tracing (Truy vết Phân tán)** lại cần thiết cho việc gỡ lỗi và giám sát hệ thống microservices?",
        solution: "Nó cho phép theo dõi một **yêu cầu duy nhất** (giao dịch) khi nó di chuyển **qua nhiều ranh giới dịch vụ**. Điều này giúp xác định chính xác dịch vụ nào đang gây ra độ trễ hoặc lỗi trong một đường dẫn yêu cầu phức tạp."
      }
    }
  },
  {
    _id: "ms-j-008",
    difficulty: "junior",
    tags: ["resilience", "patterns"],
    content: {
      en: {
        title: "Retry Pattern Risk",
        body: "When implementing the **Retry Pattern** (automatically retrying a failed service call), what key risk must be mitigated, and how?",
        solution: "The key risk is **overwhelming a failing service** with too many retries, worsening the situation. Mitigation involves using an **Exponential Backoff** strategy (waiting progressively longer between retries) and defining a maximum number of retries."
      },
      jp: {
        title: "リトライパターンのリスク",
        body: "**リトライパターン**（失敗したサービスコールを自動的に再試行すること）を実装する際に、軽減しなければならない主なリスクは何ですか、またその方法は？",
        solution: "主なリスクは、再試行が多すぎて**失敗しているサービスを圧倒**し、状況を悪化させることです。軽減策としては、**指数関数的バックオフ（Exponential Backoff）**戦略（再試行の間隔を徐々に長くする）を使用し、最大再試行回数を定義することが含まれます。"
      },
      vi: {
        title: "Rủi ro của Retry Pattern",
        body: "Khi triển khai **Retry Pattern (Mô hình Thử lại)** (tự động thử lại một lời gọi dịch vụ bị lỗi), rủi ro chính nào cần được giảm thiểu, và bằng cách nào?",
        solution: "Rủi ro chính là **làm quá tải dịch vụ đang gặp lỗi** với quá nhiều lần thử lại, làm tình hình tồi tệ hơn. Giảm thiểu bao gồm việc sử dụng chiến lược **Exponential Backoff** (chờ đợi lâu hơn giữa các lần thử lại) và xác định số lần thử lại tối đa."
      }
    }
  },
  {
    _id: "ms-j-009",
    difficulty: "junior",
    tags: ["security", "token", "jwt"],
    content: {
      en: {
        title: "Token-based Authentication",
        body: "After the API Gateway authenticates a user using a token (e.g., JWT), how is the user's identity typically passed to the downstream microservices?",
        solution: "The Gateway passes the token or a derived, validated user ID/metadata (claims) through **HTTP headers** to the downstream services. The downstream services then perform **authorization** based on the claims in the header."
      },
      jp: {
        title: "トークンベース認証",
        body: "APIゲートウェイがトークン（JWTなど）を使用してユーザーを認証した後、ユーザーのIDは通常、ダウンストリームのマイクロサービスにどのように渡されますか？",
        solution: "ゲートウェイは、トークンまたは派生した検証済みのユーザーID/メタデータ（クレーム）を**HTTPヘッダー**を介してダウンストリームサービスに渡します。ダウンストリームサービスは、ヘッダー内のクレームに基づいて**認可**を実行します。"
      },
      vi: {
        title: "Xác thực dựa trên Token",
        body: "Sau khi API Gateway xác thực người dùng bằng token (ví dụ: JWT), danh tính của người dùng thường được chuyển đến các microservices downstream bằng cách nào?",
        solution: "Gateway chuyển token hoặc ID người dùng/siêu dữ liệu (claims) đã được xác thực, phái sinh thông qua **HTTP headers** đến các dịch vụ downstream. Các dịch vụ downstream sau đó thực hiện **ủy quyền (authorization)** dựa trên các claims trong header."
      }
    }
  },
  {
    _id: "ms-j-010",
    difficulty: "junior",
    tags: ["deployment", "traffic", "canary"],
    content: {
      en: {
        title: "Canary Deployment",
        body: "What is the primary goal of a **Canary Deployment** strategy in microservices?",
        solution: "To **mitigate risk** when deploying a new version. The new version (canary) is rolled out to a **small subset of users** first. If no errors are detected, the deployment is expanded to all users."
      }
    },
    jp: {
      title: "カナリアデプロイメント",
      body: "マイクロサービスにおける**カナリアデプロイメント**戦略の主な目的は何ですか？",
      solution: "新バージョンのデプロイ時に**リスクを軽減**することです。新バージョン（カナリア）はまず**ユーザーの小さなサブセット**に展開されます。エラーが検出されなければ、デプロイメントは全ユーザーに拡大されます。"
    },
    vi: {
      title: "Triển khai Canary",
      body: "Mục tiêu chính của chiến lược **Canary Deployment (Triển khai Canary)** trong microservices là gì?",
      solution: "Để **giảm thiểu rủi ro** khi triển khai phiên bản mới. Phiên bản mới (canary) được triển khai cho **một nhóm nhỏ người dùng** trước. Nếu không phát hiện lỗi, việc triển khai sẽ được mở rộng cho tất cả người dùng."
    }
  },
  {
    _id: "ms-j-011",
    difficulty: "junior",
    tags: ["monitoring", "metrics", "health"],
    content: {
      en: {
        title: "Health Check Endpoints",
        body: "What is the standard purpose of a `/health` or `/status` endpoint on a microservice?",
        solution: "It allows external monitoring systems (like Kubernetes or a Load Balancer) to **check the operational status** of the service. A successful response (e.g., HTTP 200) means the service is alive and ready to handle requests."
      }
    },
    jp: {
      title: "ヘルスチェックエンドポイント",
      body: "マイクロサービス上の`/health`または`/status`エンドポイントの標準的な目的は何ですか？",
      solution: "外部監視システム（Kubernetesやロードバランサーなど）がサービスの**稼働状態をチェック**できるようにすることです。成功応答（例：HTTP 200）は、サービスが稼働しており、リクエストを処理する準備ができていることを意味します。"
    },
    vi: {
      title: "Health Check Endpoints",
      body: "Mục đích tiêu chuẩn của một endpoint `/health` hoặc `/status` trên một microservice là gì?",
      solution: "Nó cho phép các hệ thống giám sát bên ngoài (như Kubernetes hoặc Load Balancer) **kiểm tra trạng thái hoạt động** của dịch vụ. Một phản hồi thành công (ví dụ: HTTP 200) có nghĩa là dịch vụ đang hoạt động và sẵn sàng xử lý yêu cầu."
    }
  },
  {
    _id: "ms-j-012",
    difficulty: "junior",
    tags: ["api", "data", "bff"],
    content: {
      en: {
        title: "Backend For Frontend (BFF)",
        body: "What problem does the **Backend For Frontend (BFF)** pattern aim to solve?",
        solution: "It solves the problem of a **single, generic API Gateway** not meeting the specific data/format needs of various client types (e.g., Web, iOS, Android). A BFF acts as a dedicated gateway tailored for one specific client type."
      }
    },
    jp: {
      title: "バックエンド・フォー・フロントエンド（BFF）",
      body: "**バックエンド・フォー・フロントエンド（BFF）**パターンは、どのような問題を解決することを目的としていますか？",
      solution: "さまざまなクライアントタイプ（Web、iOS、Androidなど）の特定のデータ/フォーマットのニーズを満たさない**単一の汎用APIゲートウェイ**の問題を解決します。BFFは、特定のクライアントタイプに合わせて調整された専用のゲートウェイとして機能します。"
    },
    vi: {
      title: "Backend For Frontend (BFF)",
      body: "Mô hình **Backend For Frontend (BFF)** nhằm giải quyết vấn đề gì?",
      solution: "Nó giải quyết vấn đề **một API Gateway duy nhất, chung chung** không đáp ứng được nhu cầu dữ liệu/định dạng cụ thể của các loại máy khách khác nhau (ví dụ: Web, iOS, Android). Một BFF hoạt động như một gateway chuyên dụng được tùy chỉnh cho một loại máy khách cụ thể."
    }
  },
  {
    _id: "ms-j-013",
    difficulty: "junior",
    tags: ["data", "etl", "eventual-consistency"],
    content: {
      en: {
        title: "Data Replication vs Eventual Consistency",
        body: "When using eventual consistency, what is the trade-off compared to strong consistency?",
        solution: "The trade-off is **higher availability and performance** (better scaling) at the cost of having a **temporary window** where data might be inconsistent across services."
      }
    },
    jp: {
      title: "データレプリケーション vs 結果整合性",
      body: "結果整合性を使用する場合、強力な一貫性と比較してどのようなトレードオフがありますか？",
      solution: "トレードオフは、データがサービス間で不一致になる可能性のある**一時的なウィンドウ**を犠牲にして、**より高い可用性とパフォーマンス**（より良いスケーリング）を得ることです。"
    },
    vi: {
      title: "Sao chép Dữ liệu và Tính nhất quán cuối cùng",
      body: "Khi sử dụng tính nhất quán cuối cùng (eventual consistency), đánh đổi là gì so với tính nhất quán mạnh (strong consistency)?",
      solution: "Đánh đổi là **khả năng sẵn sàng và hiệu suất cao hơn** (mở rộng tốt hơn) với cái giá là có một **khoảng thời gian tạm thời** mà dữ liệu có thể không nhất quán giữa các dịch vụ."
    }
  },
  {
    _id: "ms-j-014",
    difficulty: "junior",
    tags: ["communication", "rpc", "grpc"],
    content: {
      en: {
        title: "gRPC vs REST",
        body: "What is the primary advantage of using **gRPC** over traditional REST/JSON for service-to-service communication?",
        solution: "gRPC uses **HTTP/2** and **Protocol Buffers** (Protobuf) for serialization, resulting in **significantly smaller message size** and **faster communication speed** (lower latency) compared to human-readable REST/JSON."
      }
    },
    jp: {
      title: "gRPC vs REST",
      body: "サービス間通信に従来のREST/JSONと比較して**gRPC**を使用する主な利点は何ですか？",
      solution: "gRPCは**HTTP/2**と**Protocol Buffers**（Protobuf）をシリアル化に使用し、人間が読めるREST/JSONと比較して**メッセージサイズが大幅に小さく**なり、**通信速度が速く**なります（低レイテンシ）。"
    },
    vi: {
      title: "gRPC so với REST",
      body: "Lợi thế chính của việc sử dụng **gRPC** so với REST/JSON truyền thống cho giao tiếp giữa các dịch vụ là gì?",
      solution: "gRPC sử dụng **HTTP/2** và **Protocol Buffers** (Protobuf) để tuần tự hóa, dẫn đến **kích thước thông điệp nhỏ hơn đáng kể** và **tốc độ giao tiếp nhanh hơn** (độ trễ thấp hơn) so với REST/JSON có thể đọc được bằng mắt người."
    }
  },
  {
    _id: "ms-j-015",
    difficulty: "junior",
    tags: ["gateway", "load-balancing"],
    content: {
      en: {
        title: "Client-Side vs Server-Side Load Balancing",
        body: "In microservices, where does **Client-Side Load Balancing** typically occur, and what component is often used for it?",
        solution: "It occurs **within the client service** itself. The client uses a Service Discovery mechanism (like a Netflix Eureka client) to get all available service instances and then decides which instance to call locally."
      }
    },
    jp: {
      title: "クライアント側 vs サーバー側ロードバランシング",
      body: "マイクロサービスにおいて、**クライアント側ロードバランシング**は通常どこで発生し、そのためにどのコンポーネントがよく使用されますか？",
      solution: "それは**クライアントサービス自体の中**で発生します。クライアントはサービスディスカバリメカニズム（Netflix Eurekaクライアントなど）を使用して利用可能なすべてのサービスインスタンスを取得し、どのインスタンスをローカルで呼び出すかを決定します。"
    },
    vi: {
      title: "Cân bằng tải phía Client so với Server",
      body: "Trong microservices, **Cân bằng tải phía Client** thường xảy ra ở đâu và thành phần nào thường được sử dụng cho nó?",
      solution: "Nó xảy ra **bên trong chính dịch vụ client**. Client sử dụng cơ chế Service Discovery (như Netflix Eureka client) để lấy tất cả các phiên bản dịch vụ có sẵn và sau đó tự quyết định phiên bản nào để gọi cục bộ."
    }
  },
  {
    _id: "ms-j-016",
    difficulty: "junior",
    tags: ["data", "event", "cdc"],
    content: {
      en: {
        title: "Change Data Capture (CDC)",
        body: "How can **Change Data Capture (CDC)** help implement the Event Sourcing pattern or Saga Pattern in microservices?",
        solution: "CDC monitors the **database transaction log** of a service and publishes any change (Insert, Update, Delete) as an event to a message broker (like Kafka). This ensures service state changes are immediately propagated as events for other services to react to."
      }
    },
    jp: {
      title: "変更データキャプチャ（CDC）",
      body: "**変更データキャプチャ（CDC）**は、マイクロサービスでイベントソーシングパターンやSagaパターンを実装するのにどのように役立ちますか？",
      solution: "CDCはサービスの**データベーストランザクションログ**を監視し、任意の変更（挿入、更新、削除）をイベントとしてメッセージブローカー（Kafkaなど）に公開します。これにより、サービスの状態変更が、他のサービスが反応するためのイベントとしてすぐに伝播されます。"
    },
    vi: {
      title: "Change Data Capture (CDC)",
      body: "**Change Data Capture (CDC)** có thể giúp triển khai mô hình Event Sourcing hoặc Saga Pattern trong microservices như thế nào?",
      solution: "CDC giám sát **log giao dịch cơ sở dữ liệu** của một dịch vụ và xuất bản bất kỳ thay đổi nào (Insert, Update, Delete) dưới dạng một sự kiện tới một message broker (như Kafka). Điều này đảm bảo rằng các thay đổi trạng thái dịch vụ được truyền tải ngay lập tức dưới dạng sự kiện để các dịch vụ khác phản ứng."
    }
  },
  {
    _id: "ms-j-017",
    difficulty: "junior",
    tags: ["patterns", "data", "event-sourcing"],
    content: {
      en: {
        title: "Event Sourcing Core Concept",
        body: "Instead of storing the current state of an entity, what does the **Event Sourcing** pattern store?",
        solution: "It stores the **sequence of events** that led to the current state. The current state is then rebuilt by replaying these events. This provides an audit log and facilitates integrating with other services."
      }
    },
    jp: {
      title: "イベントソーシングの核となる概念",
      body: "エンティティの現在の状態を保存する代わりに、**イベントソーシング**パターンは何を保存しますか？",
      solution: "現在の状態につながった**イベントのシーケンス**を保存します。現在の状態は、これらのイベントを再生することによって再構築されます。これにより、監査ログが提供され、他のサービスとの統合が容易になります。"
    },
    vi: {
        title: "Khái niệm cốt lõi của Event Sourcing",
        body: "Thay vì lưu trữ trạng thái hiện tại của một thực thể, mô hình **Event Sourcing (Nguồn sự kiện)** lưu trữ điều gì?",
        solution: "Nó lưu trữ **chuỗi các sự kiện** đã dẫn đến trạng thái hiện tại. Trạng thái hiện tại sau đó được xây dựng lại bằng cách phát lại các sự kiện này. Điều này cung cấp nhật ký kiểm toán và tạo điều kiện tích hợp với các dịch vụ khác."
      }
  },
  {
    _id: "ms-j-018",
    difficulty: "junior",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Translating Contexts",
        body: "In Domain-Driven Design (DDD), what communication pattern is used to translate between the models of two different **Bounded Contexts**?",
        solution: "A **Context Map** defines the translation points. The specific pattern used can be an **Anti-Corruption Layer (ACL)**, which translates requests/responses between the two contexts to prevent the foreign model from 'corrupting' the local model."
      }
    },
    jp: {
      title: "コンテキストの変換",
      body: "ドメイン駆動設計（DDD）において、2つの異なる**境界付けられたコンテキスト**のモデル間を変換するために使用される通信パターンは何ですか？",
      solution: "**コンテキストマップ**が変換ポイントを定義します。使用される特定のパターンは、**腐敗防止層（ACL）**であり、外部モデルがローカルモデルを「汚染」するのを防ぐために、2つのコンテキスト間のリクエスト/レスポンスを変換します。"
    },
    vi: {
        title: "Phiên dịch giữa các Context",
        body: "Trong Domain-Driven Design (DDD), mô hình giao tiếp nào được sử dụng để phiên dịch giữa các mô hình của hai **Bounded Contexts (Ngữ cảnh Ràng buộc)** khác nhau?",
        solution: "Một **Context Map** xác định các điểm phiên dịch. Mô hình cụ thể được sử dụng có thể là **Anti-Corruption Layer (ACL)**, dịch các yêu cầu/phản hồi giữa hai ngữ cảnh để ngăn mô hình bên ngoài 'làm hỏng' mô hình cục bộ."
      }
  },
  {
    _id: "ms-j-019",
    difficulty: "junior",
    tags: ["resilience", "patterns"],
    content: {
      en: {
        title: "Circuit Breaker State",
        body: "What are the three main states of a **Circuit Breaker** pattern, and which state does it switch to after a failure threshold is reached?",
        solution: "The three states are **Closed**, **Open**, and **Half-Open**. After the failure threshold is reached, it switches from **Closed** to **Open** to block further requests."
      }
    },
    jp: {
      title: "サーキットブレーカーの状態",
      body: "**サーキットブレーカー**パターンの3つの主要な状態は何ですか、また障害しきい値に達した後、どの状態に切り替わりますか？",
      solution: "3つの状態は**クローズ（Closed）**、**オープン（Open）**、**ハーフオープン（Half-Open）**です。障害しきい値に達した後、さらなるリクエストをブロックするために**クローズ**から**オープン**に切り替わります。"
    },
    vi: {
        title: "Trạng thái của Circuit Breaker",
        body: "Ba trạng thái chính của mô hình **Circuit Breaker** là gì, và nó chuyển sang trạng thái nào sau khi đạt đến ngưỡng lỗi?",
        solution: "Ba trạng thái là **Closed**, **Open** và **Half-Open**. Sau khi đạt đến ngưỡng lỗi, nó chuyển từ **Closed** sang **Open** để chặn các yêu cầu tiếp theo."
      }
  },
  {
    _id: "ms-j-020",
    difficulty: "junior",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Reporting/Analytics Database",
        body: "Since each microservice has its own database, how can you efficiently run complex queries or generate reports that require data from **multiple** services?",
        solution: "By implementing a **Reporting/Analytics Database** (often called a Data Lake or Data Warehouse). Data from all microservice databases is regularly extracted, transformed, and loaded (ETL) into this centralized read-only store for complex queries."
      }
    },
    jp: {
      title: "レポート/分析データベース",
      body: "各マイクロサービスが独自のデータベースを持っているため、**複数の**サービスからのデータを必要とする複雑なクエリを実行したり、レポートを生成したりするにはどうすれば効率的ですか？",
      solution: "**レポート/分析データベース**（Data LakeまたはData Warehouseと呼ばれることが多い）を実装することによって。すべてのマイクロサービスデータベースからのデータは、定期的に抽出、変換、ロード（ETL）され、複雑なクエリのためにこの集中型の読み取り専用ストアに格納されます。"
    },
    vi: {
        title: "Cơ sở dữ liệu Báo cáo/Phân tích",
        body: "Vì mỗi microservice có cơ sở dữ liệu riêng, làm thế nào bạn có thể chạy hiệu quả các truy vấn phức tạp hoặc tạo báo cáo yêu cầu dữ liệu từ **nhiều** dịch vụ?",
        solution: "Bằng cách triển khai một **Cơ sở dữ liệu Báo cáo/Phân tích** (thường được gọi là Data Lake hoặc Data Warehouse). Dữ liệu từ tất cả các cơ sở dữ liệu microservice được trích xuất, chuyển đổi và tải (ETL) định kỳ vào kho lưu trữ chỉ đọc tập trung này cho các truy vấn phức tạp."
      }
  },
  {
    _id: "ms-j-021",
    difficulty: "junior",
    tags: ["deployment", "infrastructure"],
    content: {
      en: {
        title: "Infrastructure as Code (IaC) Necessity",
        body: "Why is **Infrastructure as Code (IaC)** (e.g., using Terraform or CloudFormation) considered necessary for a microservices architecture?",
        solution: "Because microservices involve managing **dozens of deployment artifacts** (load balancers, networking rules, scaling groups, databases, etc.). IaC automates and standardizes the provisioning of this complex infrastructure, making it repeatable and auditable."
      }
    },
    jp: {
      title: "Infrastructure as Code (IaC) の必要性",
      body: "**Infrastructure as Code (IaC)**（例：TerraformやCloudFormationの使用）は、マイクロサービスアーキテクチャにとってなぜ必要不可欠と考えられていますか？",
      solution: "マイクロサービスは、**数十のデプロイメントアーティファクト**（ロードバランサー、ネットワークルール、スケーリンググループ、データベースなど）の管理を伴うためです。IaCは、この複雑なインフラストラクチャのプロビジョニングを自動化および標準化し、再現可能で監査可能にします。"
    },
    vi: {
        title: "Sự cần thiết của IaC",
        body: "Tại sao **Infrastructure as Code (IaC)** (ví dụ: sử dụng Terraform hoặc CloudFormation) được coi là cần thiết cho kiến trúc microservices?",
        solution: "Bởi vì microservices liên quan đến việc quản lý **hàng chục artifact triển khai** (load balancers, quy tắc mạng, nhóm mở rộng, cơ sở dữ liệu, v.v.). IaC tự động hóa và chuẩn hóa việc cung cấp cơ sở hạ tầng phức tạp này, giúp nó có thể lặp lại và kiểm tra được."
      }
  },
  {
    _id: "ms-j-022",
    difficulty: "junior",
    tags: ["security", "auth", "tls"],
    content: {
      en: {
        title: "Mutual TLS (mTLS)",
        body: "In addition to authenticating the client at the Gateway, what security mechanism is often used for **service-to-service** communication inside the network?",
        solution: "**Mutual TLS (mTLS)**. It ensures that both the client service and the server service verify each other's identity using certificates, providing strong encryption and authentication for internal communication."
      }
    },
    jp: {
      title: "相互TLS (mTLS)",
      body: "ゲートウェイでのクライアント認証に加えて、ネットワーク内の**サービス間**通信のためにしばしば使用されるセキュリティメカニズムは何ですか？",
      solution: "**相互TLS (mTLS)**です。これにより、クライアントサービスとサーバーサービスの両方が証明書を使用して相互のIDを確認し、内部通信に強力な暗号化と認証を提供します。"
    },
    vi: {
        title: "Mutual TLS (mTLS)",
        body: "Ngoài việc xác thực client tại Gateway, cơ chế bảo mật nào thường được sử dụng cho giao tiếp **giữa các dịch vụ** bên trong mạng?",
        solution: "**Mutual TLS (mTLS)**. Nó đảm bảo rằng cả dịch vụ client và dịch vụ server đều xác minh danh tính của nhau bằng cách sử dụng chứng chỉ, cung cấp mã hóa và xác thực mạnh mẽ cho giao tiếp nội bộ."
      }
  },
  {
    _id: "ms-j-023",
    difficulty: "junior",
    tags: ["data", "query", "graphql"],
    content: {
      en: {
        title: "GraphQL vs REST in Microservices",
        body: "How can **GraphQL**, often implemented via the API Gateway, solve the client issue of **over-fetching** data from microservices?",
        solution: "GraphQL allows the client to **precisely specify** the data fields it needs. The Gateway/BFF then intelligently aggregates only that required data from the downstream microservices, preventing the over-fetching problem common with fixed-structure REST endpoints."
      }
    },
    jp: {
      title: "マイクロサービスにおけるGraphQL vs REST",
      body: "APIゲートウェイを介して実装されることが多い**GraphQL**は、マイクロサービスからのデータの**過剰取得（over-fetching）**というクライアントの問題をどのように解決できますか？",
      solution: "GraphQLは、クライアントが**必要とするデータフィールドを正確に指定**することを可能にします。その後、ゲートウェイ/BFFは、ダウンストリームのマイクロサービスからその必要なデータのみをインテリジェントに集約し、固定構造のRESTエンドポイントでよくある過剰取得の問題を防ぎます。"
    },
    vi: {
        title: "GraphQL so với REST trong Microservices",
        body: "Làm thế nào **GraphQL**, thường được triển khai thông qua API Gateway, có thể giải quyết vấn đề **over-fetching (lấy quá nhiều)** dữ liệu từ microservices của client?",
        solution: "GraphQL cho phép client **chỉ định chính xác** các trường dữ liệu mà nó cần. Sau đó, Gateway/BFF sẽ tổng hợp một cách thông minh chỉ những dữ liệu cần thiết đó từ các microservices downstream, ngăn chặn vấn đề over-fetching phổ biến với các endpoint REST cấu trúc cố định."
      }
  },
  {
    _id: "ms-j-024",
    difficulty: "junior",
    tags: ["communication", "retry", "idempotency"],
    content: {
      en: {
        title: "Idempotency Necessity",
        body: "When building communication interfaces (REST or messaging), why is **Idempotency** a critical concern in a microservices system?",
        solution: "Because network failures are common, leading to retries. An idempotent operation is one that can be **safely called multiple times** without changing the result (e.g., creating a resource twice). This prevents duplicate side effects like double-charging a customer."
      }
    },
    jp: {
      title: "べき等性の必要性",
      body: "通信インターフェース（RESTまたはメッセージング）を構築する際、**べき等性（Idempotency）**がマイクロサービスシステムにおいて重要な懸念事項となるのはなぜですか？",
      solution: "ネットワーク障害は一般的であり、再試行につながるためです。べき等な操作とは、結果を変更せずに**安全に複数回呼び出すことができる**操作です（例：リソースを2回作成する）。これにより、顧客への二重請求などの重複した副作用を防ぎます。"
    },
    vi: {
        title: "Sự cần thiết của Idempotency",
        body: "Khi xây dựng giao diện giao tiếp (REST hoặc nhắn tin), tại sao **Idempotency (Tính Lũy đẳng)** lại là một mối quan tâm quan trọng trong hệ thống microservices?",
        solution: "Vì lỗi mạng là phổ biến, dẫn đến việc thử lại. Một thao tác lũy đẳng là thao tác có thể được **gọi an toàn nhiều lần** mà không làm thay đổi kết quả (ví dụ: tạo tài nguyên hai lần). Điều này ngăn chặn các tác dụng phụ trùng lặp như tính phí khách hàng hai lần."
      }
  },
  {
    _id: "ms-j-025",
    difficulty: "junior",
    tags: ["data", "messaging", "transactional-outbox"],
    content: {
      en: {
        title: "Transactional Outbox Pattern",
        body: "What critical problem does the **Transactional Outbox Pattern** solve regarding event publishing and the service's local database transaction?",
        solution: "It solves the **Dual Write Problem**. It ensures that updating the local database state and publishing the corresponding event occur within a **single, local ACID transaction**. This guarantees that either both succeed or both fail, maintaining data integrity."
      }
    },
    jp: {
      title: "トランザクショナルアウトボックスパターン",
      body: "**トランザクショナルアウトボックスパターン**は、イベントの発行とサービスのローカルデータベーストランザクションに関して、どのような重要な問題を解決しますか？",
      solution: "**デュアルライト問題**を解決します。ローカルデータベースの状態の更新と、対応するイベントの発行が**単一のローカルACIDトランザクション**内で発生することを保証します。これにより、両方が成功するか、両方が失敗することが保証され、データの整合性が維持されます。"
    },
    vi: {
        title: "Transactional Outbox Pattern",
        body: "Mô hình **Transactional Outbox Pattern** giải quyết vấn đề quan trọng nào liên quan đến việc xuất bản sự kiện và giao dịch cơ sở dữ liệu cục bộ của dịch vụ?",
        solution: "Nó giải quyết **Vấn đề Ghi kép (Dual Write Problem)**. Nó đảm bảo rằng việc cập nhật trạng thái cơ sở dữ liệu cục bộ và xuất bản sự kiện tương ứng xảy ra trong **một giao dịch ACID cục bộ duy nhất**. Điều này đảm bảo rằng cả hai đều thành công hoặc cả hai đều thất bại, duy trì tính toàn vẹn dữ liệu."
      }
  },
  {
    _id: "ms-j-026",
    difficulty: "junior",
    tags: ["deployment", "serverless", "faas"],
    content: {
      en: {
        title: "Serverless Microservices",
        body: "What is the main benefit of deploying microservices as **Serverless Functions** (e.g., AWS Lambda, Azure Functions) compared to traditional containers?",
        solution: "The main benefit is **reduced operational overhead** and **automatic scaling down to zero**. You don't manage the underlying servers, and you only pay for the time your code is actively running."
      }
    },
    jp: {
      title: "サーバーレスマイクロサービス",
      body: "従来のコンテナと比較して、マイクロサービスを**サーバーレス関数**（AWS Lambda、Azure Functionsなど）としてデプロイする主な利点は何ですか？",
      solution: "主な利点は、**運用オーバーヘッドの削減**と**ゼロへの自動スケーリング**です。基盤となるサーバーを管理する必要がなく、コードがアクティブに実行されている時間に対してのみ支払います。"
    },
    vi: {
        title: "Microservices Serverless",
        body: "Lợi ích chính của việc triển khai microservices dưới dạng **Serverless Functions (Hàm phi máy chủ)** (ví dụ: AWS Lambda, Azure Functions) so với container truyền thống là gì?",
        solution: "Lợi ích chính là **giảm chi phí vận hành (operational overhead)** và **tự động mở rộng về 0 (automatic scaling down to zero)**. Bạn không quản lý các máy chủ cơ bản và bạn chỉ trả tiền cho thời gian mã của bạn đang chạy tích cực."
      }
  },
  {
    _id: "ms-j-027",
    difficulty: "junior",
    tags: ["observability", "metrics", "prometheus"],
    content: {
      en: {
        title: "Metrics and Prometheus",
        body: "In a microservices system, what is the key difference between **logs** and **metrics**, and which tool is widely used to collect the latter?",
        solution: "**Logs** are discrete, timestamped events (for debugging). **Metrics** are numerical measurements collected over time (for monitoring performance/health). **Prometheus** is the widely used tool for collecting, aggregating, and querying metrics."
      }
    },
    jp: {
      title: "メトリクスとPrometheus",
      body: "マイクロサービスシステムにおいて、**ログ**と**メトリクス**の主な違いは何ですか、また後者（メトリクス）を収集するために広く使用されているツールは何ですか？",
      solution: "**ログ**は個別のタイムスタンプ付きイベントです（デバッグ用）。**メトリクス**は時間の経過とともに収集される数値測定値です（パフォーマンス/ヘルス監視用）。**Prometheus**は、メトリクスを収集、集計、クエリするために広く使用されているツールです。"
    },
    vi: {
        title: "Metrics và Prometheus",
        body: "Trong hệ thống microservices, sự khác biệt chính giữa **logs** và **metrics** là gì, và công cụ nào được sử dụng rộng rãi để thu thập metrics?",
        solution: "**Logs** là các sự kiện rời rạc, có dấu thời gian (để gỡ lỗi). **Metrics** là các phép đo số được thu thập theo thời gian (để giám sát hiệu suất/sức khỏe). **Prometheus** là công cụ được sử dụng rộng rãi để thu thập, tổng hợp và truy vấn metrics."
      }
  },
  {
    _id: "ms-j-028",
    difficulty: "junior",
    tags: ["resilience", "patterns", "timeout"],
    content: {
      en: {
        title: "Importance of Timeouts",
        body: "Why is setting aggressive **Timeouts** essential for synchronous calls between microservices?",
        solution: "To prevent clients from **hanging indefinitely** when a service is slow or unresponsive. Short timeouts ensure resources (threads, connections) are released quickly, preventing resource exhaustion and potential cascading failures."
      }
    },
    jp: {
      title: "タイムアウトの重要性",
      body: "マイクロサービス間の同期呼び出しに**積極的なタイムアウト**を設定することが不可欠なのはなぜですか？",
      solution: "サービスが遅い、または応答しない場合にクライアントが**無期限にハングアップする**のを防ぐためです。短いタイムアウトは、リソース（スレッド、接続）が迅速に解放されることを保証し、リソースの枯渇と潜在的なカスケード障害を防ぎます。"
    },
    vi: {
        title: "Tầm quan trọng của Timeouts",
        body: "Tại sao việc đặt **Timeouts (Thời gian chờ)** tích cực lại cần thiết cho các lời gọi đồng bộ giữa các microservices?",
        solution: "Để ngăn client **treo vô thời hạn** khi một dịch vụ chậm hoặc không phản hồi. Thời gian chờ ngắn đảm bảo rằng các tài nguyên (luồng, kết nối) được giải phóng nhanh chóng, ngăn chặn việc cạn kiệt tài nguyên và các lỗi domino tiềm ẩn."
      }
  },
  {
    _id: "ms-j-029",
    difficulty: "junior",
    tags: ["patterns", "gateway", "service-mesh"],
    content: {
      en: {
        title: "Service Mesh vs API Gateway",
        body: "What is the key difference in function and placement between an **API Gateway** and a **Service Mesh**'s proxy (sidecar)?",
        solution: "An **API Gateway** handles **north-south traffic** (external to internal) and cross-cutting concerns (Auth/Rate Limiting). A **Service Mesh** handles **east-west traffic** (service-to-service) and concerns like mTLS, circuit breaking, and distributed tracing via a sidecar proxy next to each service."
      }
    },
    jp: {
      title: "サービスメッシュ vs APIゲートウェイ",
      body: "**APIゲートウェイ**と**サービスメッシュ**のプロキシ（サイドカー）の機能と配置における主な違いは何ですか？",
      solution: "**APIゲートウェイ**は**南北トラフィック**（外部から内部）と横断的関心事（認証/レート制限）を処理します。**サービスメッシュ**は**東西トラフィック**（サービス間）と、各サービスの隣にあるサイドカープロキシを介したmTLS、サーキットブレーキング、分散トレーシングなどの関心事を処理します。"
    },
    vi: {
        title: "Service Mesh so với API Gateway",
        body: "Sự khác biệt chính về chức năng và vị trí giữa **API Gateway** và proxy (sidecar) của **Service Mesh** là gì?",
        solution: "**API Gateway** xử lý **lưu lượng bắc-nam** (bên ngoài vào nội bộ) và các vấn đề chung (Auth/Rate Limiting). **Service Mesh** xử lý **lưu lượng đông-tây** (giữa các dịch vụ) và các vấn đề như mTLS, ngắt mạch, và truy vết phân tán thông qua một proxy sidecar bên cạnh mỗi dịch vụ."
      }
  },
  {
    _id: "ms-j-030",
    difficulty: "junior",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Extract, Transform, Load (ETL) in Microservices",
        body: "Why is the **Transform** step in the ETL process particularly important when consolidating data from multiple microservices into a central data warehouse?",
        solution: "Because each service uses its own data schema and Bounded Context. The Transform step is needed to **normalize, harmonize, and clean** the disparate data models into a single, consistent model suitable for reporting and analytics."
      }
    },
    jp: {
      title: "マイクロサービスにおけるETL（抽出、変換、ロード）",
      body: "複数のマイクロサービスからのデータを中央データウェアハウスに統合する際、ETLプロセスにおける**変換（Transform）**ステップが特に重要なのはなぜですか？",
      solution: "各サービスが独自のデータスキーマと境界付けられたコンテキストを使用しているためです。変換ステップは、異なるデータモデルをレポートと分析に適した単一の**一貫したモデルに正規化、調和、クリーンアップ**するために必要です。"
    },
    vi: {
        title: "Extract, Transform, Load (ETL) trong Microservices",
        body: "Tại sao bước **Transform (Biến đổi)** trong quy trình ETL lại đặc biệt quan trọng khi hợp nhất dữ liệu từ nhiều microservices vào một kho dữ liệu trung tâm?",
        solution: "Bởi vì mỗi dịch vụ sử dụng lược đồ dữ liệu và Bounded Context riêng. Bước Transform là cần thiết để **chuẩn hóa, hài hòa và làm sạch** các mô hình dữ liệu khác nhau thành một mô hình duy nhất, nhất quán, phù hợp cho việc báo cáo và phân tích."
      }
  },
  {
    _id: "ms-j-031",
    difficulty: "junior",
    tags: ["resilience", "patterns", "bulkhead"],
    content: {
      en: {
        title: "Bulkhead Implementation",
        body: "How is the **Bulkhead Pattern** typically implemented in a Java (or similar) microservice to prevent one slow dependency from crashing the whole service?",
        solution: "By dedicating a **separate, finite pool of resources** (e.g., a fixed-size thread pool or connection pool) for each external service dependency. If one dependency is slow, only its dedicated pool is saturated, leaving resources available for other dependencies."
      }
    },
    jp: {
      title: "バルクヘッドの実装",
      body: "（Javaまたは同様の）マイクロサービスにおいて、**バルクヘッドパターン**は、ある遅い依存関係がサービス全体をクラッシュさせるのを防ぐために、通常どのように実装されますか？",
      solution: "外部サービスの依存関係ごとに**分離された有限のリソースプール**（例：固定サイズのスレッドプールまたは接続プール）を割り当てることによって。ある依存関係が遅い場合、その専用プールのみが飽和し、他の依存関係にはリソースが利用可能なままになります。"
    },
    vi: {
        title: "Triển khai Bulkhead",
        body: "Mô hình **Bulkhead Pattern** thường được triển khai như thế nào trong một microservice bằng Java (hoặc tương tự) để ngăn chặn một dependency chậm làm sập toàn bộ dịch vụ?",
        solution: "Bằng cách dành riêng một **nhóm tài nguyên riêng biệt, hữu hạn** (ví dụ: một nhóm luồng hoặc nhóm kết nối có kích thước cố định) cho mỗi dependency dịch vụ bên ngoài. Nếu một dependency chậm, chỉ nhóm tài nguyên chuyên dụng của nó bị bão hòa, để lại tài nguyên sẵn có cho các dependency khác."
      }
  },
  {
    _id: "ms-j-032",
    difficulty: "junior",
    tags: ["communication", "async", "event"],
    content: {
      en: {
        title: "Asynchronous vs Synchronous Call",
        body: "Give one use case where an **Asynchronous** (messaging/event-based) call is clearly better than a **Synchronous** (REST) call between two microservices.",
        solution: "Use Case: **Order Processing** or **Notification Generation**. When the caller does not need an immediate response and the operation is time-consuming, async calls improve responsiveness and decouple the caller from the callee's availability."
      }
    },
    jp: {
      title: "非同期 vs 同期呼び出し",
      body: "2つのマイクロサービス間で**非同期**（メッセージング/イベントベース）呼び出しが**同期**（REST）呼び出しよりも明らかに優れているユースケースを1つ挙げてください。",
      solution: "ユースケース：**注文処理**または**通知生成**。呼び出し元が即座の応答を必要とせず、操作に時間がかかる場合、非同期呼び出しは応答性を向上させ、呼び出し元と呼び出される側の可用性から切り離します。"
    },
    vi: {
        title: "Giao tiếp Bất đồng bộ so với Đồng bộ",
        body: "Nêu một trường hợp sử dụng mà lời gọi **Bất đồng bộ** (dựa trên nhắn tin/sự kiện) rõ ràng tốt hơn lời gọi **Đồng bộ** (REST) giữa hai microservices.",
        solution: "Trường hợp sử dụng: **Xử lý Đơn hàng** hoặc **Tạo Thông báo**. Khi bên gọi không cần phản hồi ngay lập tức và thao tác tốn thời gian, lời gọi bất đồng bộ cải thiện khả năng phản hồi và tách rời bên gọi khỏi tính sẵn sàng của bên được gọi."
      }
  },
  {
    _id: "ms-j-033",
    difficulty: "junior",
    tags: ["observability", "logs", "correlation-id"],
    content: {
      en: {
        title: "Correlation ID",
        body: "What is a **Correlation ID** (or Trace ID), and how is it used in logging/tracing in microservices?",
        solution: "A unique identifier assigned to the **initial request**. This ID is passed along in the headers of all subsequent service calls. In centralized logging, developers can use the Correlation ID to **filter all log entries** related to that single request across all services."
      }
    },
    jp: {
      title: "相関ID",
      body: "**相関ID**（またはトレースID）とは何ですか、またマイクロサービスにおけるロギング/トレーシングでどのように使用されますか？",
      solution: "**最初のリクエスト**に割り当てられる一意の識別子です。このIDは、後続のすべてのサービスコールのヘッダーで渡されます。集中型ロギングでは、開発者は相関IDを使用して、すべてのサービスにわたるその単一のリクエストに関連する**すべてのログエントリをフィルタリング**できます。"
    },
    vi: {
        title: "Correlation ID",
        body: "**Correlation ID (ID Tương quan)** (hoặc Trace ID) là gì, và nó được sử dụng như thế nào trong logging/tracing trong microservices?",
        solution: "Một định danh duy nhất được gán cho **yêu cầu ban đầu**. ID này được truyền trong các headers của tất cả các lời gọi dịch vụ tiếp theo. Trong logging tập trung, các nhà phát triển có thể sử dụng Correlation ID để **lọc tất cả các mục log** liên quan đến yêu cầu duy nhất đó trên tất cả các dịch vụ."
      }
  },
  {
    _id: "ms-j-034",
    difficulty: "junior",
    tags: ["data", "domain", "ddd"],
    content: {
      en: {
        title: "Shared Database Drawback",
        body: "Explain the main problem with a microservice violating the **Database per Service** principle and using a shared database.",
        solution: "It breaks the **autonomy** and **loose coupling** of the services. Changes to the database schema by one service can inadvertently **break other services** that depend on the same schema, leading to tight coupling during development and deployment."
      }
    },
    jp: {
      title: "共有データベースの欠点",
      body: "マイクロサービスが**サービスごとのデータベース**の原則に違反し、共有データベースを使用することの主な問題を説明してください。",
      solution: "それはサービスの**自律性**と**疎結合**を破ります。あるサービスによるデータベーススキーマの変更が、同じスキーマに依存する**他のサービスを意図せずに壊す**可能性があり、開発およびデプロイメント中の密結合につながります。"
    },
    vi: {
        title: "Hạn chế của Shared Database",
        body: "Giải thích vấn đề chính khi một microservice vi phạm nguyên tắc **Database per Service** và sử dụng cơ sở dữ liệu dùng chung.",
        solution: "Nó phá vỡ **tính tự chủ** và **gắn kết lỏng lẻo** của các dịch vụ. Các thay đổi đối với lược đồ cơ sở dữ liệu bởi một dịch vụ có thể vô tình **làm hỏng các dịch vụ khác** phụ thuộc vào cùng một lược đồ, dẫn đến gắn kết chặt chẽ trong quá trình phát triển và triển khai."
      }
  },
  {
    _id: "ms-j-035",
    difficulty: "junior",
    tags: ["deployment", "testing", "consumer-driven-contract"],
    content: {
      en: {
        title: "Consumer-Driven Contract (CDC)",
        body: "How does **Consumer-Driven Contract (CDC) Testing** ensure that changes to a Provider service don't break its Consumers?",
        solution: "The **Consumer** defines the contract (the expected API data/schema). The **Provider** runs the Consumer's tests against its own API to ensure it still meets the contract's requirements before deployment. This shifts the testing focus from E2E to service boundaries."
      }
    },
    jp: {
      title: "コンシューマ駆動契約（CDC）",
      body: "**コンシューマ駆動契約（CDC）テスト**は、プロバイダーサービスへの変更がそのコンシューマーを壊さないことをどのように保証しますか？",
      solution: "**コンシューマー**が契約（期待されるAPIデータ/スキーマ）を定義します。**プロバイダー**は、デプロイ前に自身のAPIに対してコンシューマーのテストを実行し、契約の要件をまだ満たしていることを確認します。これにより、テストの焦点がE2Eからサービス境界に移行します。"
    },
    vi: {
        title: "Consumer-Driven Contract (CDC)",
        body: "**Consumer-Driven Contract (CDC) Testing** đảm bảo rằng các thay đổi đối với dịch vụ Provider không làm hỏng các Consumer của nó như thế nào?",
        solution: "**Consumer** định nghĩa hợp đồng (dữ liệu/lược đồ API được mong đợi). **Provider** chạy các bài kiểm thử của Consumer đối với API của chính nó để đảm bảo rằng nó vẫn đáp ứng các yêu cầu của hợp đồng trước khi triển khai. Điều này chuyển trọng tâm kiểm thử từ E2E sang ranh giới dịch vụ."
      }
  },
  {
    _id: "ms-j-036",
    difficulty: "junior",
    tags: ["patterns", "gateway", "caching"],
    content: {
      en: {
        title: "API Gateway Caching",
        body: "Why is implementing a **caching layer** at the API Gateway level highly effective for read-heavy microservice systems?",
        solution: "It intercepts requests for frequently accessed data **before they reach the backend services**. This reduces the load on the downstream services and databases, and significantly lowers latency for the client, improving overall system performance and cost efficiency."
      }
    },
    jp: {
      title: "APIゲートウェイのキャッシング",
      body: "APIゲートウェイレベルで**キャッシング層**を実装することが、読み取り負荷の高いマイクロサービスシステムにとって非常に効果的なのはなぜですか？",
        solution: "頻繁にアクセスされるデータのリクエストが**バックエンドサービスに到達する前**にインターセプトされます。これにより、ダウンストリームのサービスとデータベースへの負荷が軽減され、クライアントのレイテンシが大幅に低下し、システム全体のパフォーマンスとコスト効率が向上します。"
      },
    vi: {
        title: "Caching tại API Gateway",
        body: "Tại sao việc triển khai một **lớp caching** ở cấp độ API Gateway lại rất hiệu quả cho các hệ thống microservices nặng về đọc?",
        solution: "Nó chặn các yêu cầu dữ liệu được truy cập thường xuyên **trước khi chúng đến các dịch vụ backend**. Điều này làm giảm tải cho các dịch vụ downstream và cơ sở dữ liệu, đồng thời giảm đáng kể độ trễ cho client, cải thiện hiệu suất hệ thống tổng thể và hiệu quả chi phí."
      }
  },
  {
    _id: "ms-j-037",
    difficulty: "junior",
    tags: ["resilience", "patterns", "design"],
    content: {
      en: {
        title: "Fail Fast Principle",
        body: "What is the **'Fail Fast'** principle in microservices and why is it preferred over 'Wait and See'?",
        solution: "Fail Fast means immediately returning an error when a problem is detected (e.g., a connection failure) instead of waiting for a long timeout. It's preferred because it allows the client to **apply its own resilience logic** (like a Circuit Breaker) and prevents wasting resources waiting for a response that won't come."
      }
    },
    jp: {
      title: "フェイルファストの原則",
      body: "マイクロサービスにおける**「フェイルファスト」（Fail Fast）**の原則とは何ですか、また「待って様子を見る」（Wait and See）よりも好まれるのはなぜですか？",
      solution: "フェイルファストとは、問題が検出されたら（例：接続障害）長いタイムアウトを待つ代わりに、すぐにエラーを返すことです。クライアントが**独自の回復力ロジック**（サーキットブレーカーなど）を適用できるようにし、来ない応答を待ってリソースを浪費するのを防ぐため、好まれます。"
    },
    vi: {
        title: "Nguyên tắc Fail Fast",
        body: "Nguyên tắc **'Fail Fast' (Thất bại nhanh)** trong microservices là gì và tại sao nó được ưu tiên hơn 'Wait and See' (Chờ đợi và Quan sát)?",
        solution: "Fail Fast có nghĩa là trả về lỗi ngay lập tức khi phát hiện sự cố (ví dụ: lỗi kết nối) thay vì chờ đợi thời gian chờ dài. Nó được ưu tiên vì nó cho phép client **áp dụng logic chịu lỗi riêng** (như Circuit Breaker) và ngăn chặn việc lãng phí tài nguyên chờ đợi một phản hồi sẽ không bao giờ đến."
      }
  },
  {
    _id: "ms-j-038",
    difficulty: "junior",
    tags: ["data", "eventual-consistency"],
    content: {
      en: {
        title: "Tolerating Inconsistency",
        body: "Give an example of a business operation where **eventual consistency** (temporary data inconsistency) is acceptable and often preferred for performance.",
        solution: "Examples include: **Social Media Feed Updates**, **Viewing Product Stock Quantity** (a few seconds of delay is fine), or **User Profile Updates**. These operations prioritize high availability and speed over immediate, strong data consistency."
      }
    },
    jp: {
      title: "不一致の許容",
      body: "**結果整合性**（一時的なデータ不一致）が許容され、パフォーマンスのためにしばしば好まれるビジネス操作の例を挙げてください。",
      solution: "例：**ソーシャルメディアのフィード更新**、**製品在庫数量の表示**（数秒の遅延は許容される）、または**ユーザープロファイルの更新**。これらの操作は、即時の強力なデータ一貫性よりも高い可用性と速度を優先します。"
    },
    vi: {
        title: "Chấp nhận Sự không nhất quán",
        body: "Đưa ra một ví dụ về một nghiệp vụ kinh doanh mà **tính nhất quán cuối cùng (eventual consistency)** (dữ liệu không nhất quán tạm thời) là chấp nhận được và thường được ưu tiên về hiệu suất.",
        solution: "Các ví dụ bao gồm: **Cập nhật Bảng tin Mạng xã hội**, **Xem Số lượng tồn kho Sản phẩm** (chậm trễ vài giây là ổn), hoặc **Cập nhật Hồ sơ Người dùng**. Các hoạt động này ưu tiên tính sẵn sàng cao và tốc độ hơn tính nhất quán dữ liệu mạnh, tức thì."
      }
  },
  {
    _id: "ms-j-039",
    difficulty: "junior",
    tags: ["deployment", "traffic", "blue-green"],
    content: {
      en: {
        title: "Blue/Green Deployment vs Canary",
        body: "What is the key difference between **Blue/Green Deployment** and **Canary Deployment**?",
        solution: "**Blue/Green** involves running **two identical, full environments** (Blue is old, Green is new) and switching all traffic from Blue to Green at once. **Canary** involves rolling out the new version (Canary) to a **small percentage of traffic** and gradually increasing it."
      }
    },
    jp: {
      title: "Blue/Greenデプロイメント vs カナリア",
      body: "**Blue/Greenデプロイメント**と**カナリアデプロイメント**の主な違いは何ですか？",
      solution: "**Blue/Green**は、**2つの同一の完全な環境**（Blueが旧、Greenが新）を実行し、すべてのトラフィックをBlueからGreenに一度に切り替えることを伴います。**カナリア**は、新バージョン（カナリア）を**トラフィックの小さな割合**に展開し、徐々に増やしていくことを伴います。"
    },
    vi: {
        title: "Triển khai Blue/Green so với Canary",
        body: "Sự khác biệt chính giữa **Blue/Green Deployment** và **Canary Deployment** là gì?",
        solution: "**Blue/Green** bao gồm việc chạy **hai môi trường đầy đủ, giống hệt nhau** (Blue là cũ, Green là mới) và chuyển đổi tất cả lưu lượng truy cập từ Blue sang Green cùng một lúc. **Canary** bao gồm việc triển khai phiên bản mới (Canary) cho **một phần nhỏ lưu lượng truy cập** và tăng dần lên."
      }
  },
  {
    _id: "ms-j-040",
    difficulty: "junior",
    tags: ["observability", "metrics", "golden-signals"],
    content: {
      en: {
        title: "Latency Metric",
        body: "When monitoring microservices, which of the 'Four Golden Signals' measures the time it takes to serve a request?",
        solution: "**Latency**. It is a crucial metric that measures the time taken to service a request, often monitored as P95 or P99 (95th or 99th percentile) to capture slow outliers."
      }
    },
    jp: {
      title: "レイテンシメトリクス",
      body: "マイクロサービスを監視する際、「4つのゴールデンシグナル」のうち、リクエストを処理するのにかかる時間を測定するのはどれですか？",
      solution: "**レイテンシ（Latency）**です。これは、リクエストを処理するためにかかる時間を測定する重要なメトリクスであり、遅い外れ値を捉えるためにP95またはP99（95パーセンタイルまたは99パーセンタイル）として監視されることがよくあります。"
    },
    vi: {
        title: "Metrics Độ trễ (Latency)",
        body: "Khi giám sát microservices, tín hiệu nào trong 'Bốn Tín hiệu Vàng' đo thời gian cần để xử lý một yêu cầu?",
        solution: "**Latency (Độ trễ)**. Nó là một metrics quan trọng đo thời gian cần để xử lý một yêu cầu, thường được giám sát dưới dạng P95 hoặc P99 (phân vị thứ 95 hoặc 99) để nắm bắt các trường hợp ngoại lệ chậm."
      }
  },
  {
    _id: "ms-j-041",
    difficulty: "junior",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Conway's Law",
        body: "How does **Conway's Law** relate to the decision to use a microservices architecture?",
        solution: "Conway's Law states that organizations design systems that **mirror their own communication structure**. Microservices encourages organizing small, independent development teams that can independently manage and deploy their own services, reflecting their team structure in the software architecture."
      }
    },
    jp: {
      title: "コンウェイの法則",
      body: "**コンウェイの法則**は、マイクロサービスアーキテクチャを使用するという決定とどのように関連していますか？",
      solution: "コンウェイの法則は、組織が**自身のコミュニケーション構造を反映した**システムを設計すると述べています。マイクロサービスは、独自のサービスを独立して管理およびデプロイできる、小さく独立した開発チームを組織することを奨励し、ソフトウェアアーキテクチャにチーム構造を反映させます。"
    },
    vi: {
        title: "Luật Conway",
        body: "**Luật Conway** liên quan như thế nào đến quyết định sử dụng kiến trúc microservices?",
        solution: "Luật Conway nói rằng các tổ chức thiết kế các hệ thống **phản ánh cấu trúc giao tiếp của chính họ**. Microservices khuyến khích tổ chức các đội phát triển nhỏ, độc lập có thể độc lập quản lý và triển khai các dịch vụ của riêng họ, phản ánh cấu trúc đội ngũ của họ trong kiến trúc phần mềm."
      }
  },
  {
    _id: "ms-j-042",
    difficulty: "junior",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Data Replication Challenge",
        body: "What is a major challenge in keeping read-only data (replicated from a source service) up-to-date in a downstream service for querying?",
        solution: "The challenge is managing **Eventual Consistency** and **out-of-order events**. The downstream service must handle potential delays in event processing and ensure that events are processed in the correct order to maintain a coherent local view of the data."
      }
    },
    jp: {
      title: "データレプリケーションの課題",
      body: "クエリのためにダウンストリームサービスで読み取り専用データ（ソースサービスからレプリケートされたもの）を最新の状態に保つ上での大きな課題は何ですか？",
      solution: "課題は、**結果整合性**と**順不同イベント**の管理です。ダウンストリームサービスは、イベント処理の潜在的な遅延に対処し、データの整合性のあるローカルビューを維持するために、イベントが正しい順序で処理されることを保証する必要があります。"
    },
    vi: {
        title: "Thách thức của Data Replication",
        body: "Một thách thức lớn trong việc giữ cho dữ liệu chỉ đọc (được sao chép từ một dịch vụ nguồn) được cập nhật trong một dịch vụ downstream để truy vấn là gì?",
        solution: "Thách thức là quản lý **Tính nhất quán cuối cùng (Eventual Consistency)** và **sự kiện không theo thứ tự (out-of-order events)**. Dịch vụ downstream phải xử lý sự chậm trễ tiềm ẩn trong xử lý sự kiện và đảm bảo rằng các sự kiện được xử lý theo đúng thứ tự để duy trì một cái nhìn cục bộ nhất quán về dữ liệu."
      }
  },
  {
    _id: "ms-j-043",
    difficulty: "junior",
    tags: ["deployment", "ci/cd", "automation"],
    content: {
      en: {
        title: "Zero Downtime Deployment",
        body: "Why is a well-designed CI/CD pipeline essential for achieving **Zero Downtime Deployment** for microservices?",
        solution: "It automates strategies like **Blue/Green** or **Canary** deployments. By fully automating the traffic routing and health checking, it allows the new version to be fully operational before the old version is decommissioned, eliminating service interruption."
      }
    },
    jp: {
      title: "ゼロダウンタイムデプロイメント",
      body: "マイクロサービスの**ゼロダウンタイムデプロイメント**を達成するために、適切に設計されたCI/CDパイプラインが不可欠なのはなぜですか？",
      solution: "**Blue/Green**や**Canary**デプロイメントなどの戦略を自動化するからです。トラフィックルーティングとヘルスチェックを完全に自動化することで、旧バージョンが廃止される前に新バージョンが完全に稼働できるようになり、サービスの中断が排除されます。"
    },
    vi: {
        title: "Triển khai Zero Downtime",
        body: "Tại sao một CI/CD pipeline được thiết kế tốt lại cần thiết để đạt được **Zero Downtime Deployment (Triển khai không gián đoạn)** cho microservices?",
        solution: "Nó tự động hóa các chiến lược như **Blue/Green** hoặc **Canary** deployments. Bằng cách tự động hóa hoàn toàn việc định tuyến lưu lượng và kiểm tra sức khỏe, nó cho phép phiên bản mới hoạt động hoàn toàn trước khi phiên bản cũ bị ngừng hoạt động, loại bỏ sự gián đoạn dịch vụ."
      }
  },
  {
    _id: "ms-j-044",
    difficulty: "junior",
    tags: ["security", "auth", "oauth"],
    content: {
      en: {
        title: "OAuth 2.0 in Microservices",
        body: "In a microservices context, what role does an **Authorization Server** (part of OAuth 2.0) typically play?",
        solution: "The Authorization Server is responsible for issuing **Access Tokens** to the client after successful authentication. The client then presents this Access Token to the API Gateway to gain access to the microservices resources."
      }
    },
    jp: {
      title: "マイクロサービスにおけるOAuth 2.0",
      body: "マイクロサービスのコンテキストにおいて、**認可サーバー**（OAuth 2.0の一部）は通常どのような役割を果たしますか？",
      solution: "認可サーバーは、認証成功後にクライアントに**アクセストークン**を発行する責任があります。その後、クライアントはこのアクセストークンをAPIゲートウェイに提示して、マイクロサービスリソースへのアクセスを取得します。"
    },
    vi: {
        title: "OAuth 2.0 trong Microservices",
        body: "Trong bối cảnh microservices, **Authorization Server (Máy chủ Ủy quyền)** (một phần của OAuth 2.0) thường đóng vai trò gì?",
        solution: "Authorization Server chịu trách nhiệm cấp **Access Tokens** cho client sau khi xác thực thành công. Sau đó, client trình bày Access Token này cho API Gateway để có được quyền truy cập vào tài nguyên của microservices."
      }
  },
  {
    _id: "ms-j-045",
    difficulty: "junior",
    tags: ["data", "caching", "write-through"],
    content: {
      en: {
        title: "Cache-Aside vs Write-Through",
        body: "In data caching, what is the main difference between the **Cache-Aside** pattern and the **Write-Through** pattern?",
        solution: "**Cache-Aside** (Lazy Loading) means the application manages both the cache and the database (write to DB first, then invalidate cache). **Write-Through** means the application writes only to the cache, and the cache service itself ensures the data is simultaneously written to the database."
      }
    },
    jp: {
      title: "Cache-Aside vs Write-Through",
      body: "データキャッシングにおいて、**Cache-Aside**パターンと**Write-Through**パターンの主な違いは何ですか？",
      solution: "**Cache-Aside**（遅延ロード）は、アプリケーションがキャッシュとデータベースの両方を管理することを意味します（最初にDBに書き込み、次にキャッシュを無効化）。**Write-Through**は、アプリケーションがキャッシュにのみ書き込み、キャッシュサービス自体がデータがデータベースに同時に書き込まれることを保証することを意味します。"
    },
    vi: {
        title: "Cache-Aside so với Write-Through",
        body: "Trong caching dữ liệu, sự khác biệt chính giữa mô hình **Cache-Aside** và mô hình **Write-Through** là gì?",
        solution: "**Cache-Aside** (Lazy Loading) có nghĩa là ứng dụng quản lý cả cache và cơ sở dữ liệu (ghi vào DB trước, sau đó vô hiệu hóa cache). **Write-Through** có nghĩa là ứng dụng chỉ ghi vào cache, và dịch vụ cache tự đảm bảo rằng dữ liệu được ghi đồng thời vào cơ sở dữ liệu."
      }
  },
  {
    _id: "ms-j-046",
    difficulty: "junior",
    tags: ["patterns", "gateway", "bifurcation"],
    content: {
      en: {
        title: "API Gateway Responsibilities",
        body: "List three common responsibilities of an **API Gateway** other than simple request routing.",
        solution: "1. **Authentication/Authorization** (or delegating it). 2. **Rate Limiting** / Throttling. 3. **Protocol Translation** (e.g., REST to gRPC). 4. **API Composition** / Aggregation. 5. **Caching**."
      }
    },
    jp: {
      title: "APIゲートウェイの責任",
      body: "単純なリクエストルーティング以外に、**APIゲートウェイ**の一般的な責任を3つ挙げてください。",
      solution: "1. **認証/認可**（またはその委任）。 2. **レート制限** / スロットリング。 3. **プロトコル変換**（例：RESTからgRPC）。 4. **APIコンポジション** / 集約。 5. **キャッシング**。"
    },
    vi: {
        title: "Trách nhiệm của API Gateway",
        body: "Liệt kê ba trách nhiệm phổ biến của một **API Gateway** ngoài việc định tuyến yêu cầu đơn giản.",
        solution: "1. **Xác thực/Ủy quyền** (hoặc ủy thác). 2. **Giới hạn tốc độ (Rate Limiting)** / Điều tiết. 3. **Dịch giao thức** (ví dụ: REST sang gRPC). 4. **Tổ hợp API (API Composition)** / Tổng hợp. 5. **Caching**."
      }
  },
  {
    _id: "ms-j-047",
    difficulty: "junior",
    tags: ["deployment", "orchestration", "k8s"],
    content: {
      en: {
        title: "Stateless vs Stateful Services",
        body: "In Kubernetes deployment, why are **stateless** microservices much easier to scale and manage than **stateful** microservices?",
        solution: "**Stateless services** can be easily scaled up or down and replaced because they don't store session data locally. **Stateful services** (which store data locally or require sticky sessions) require more complex orchestration tools (like StatefulSets) to ensure persistent storage and network identity."
      }
    },
    jp: {
      title: "ステートレス vs ステートフルサービス",
      body: "Kubernetesデプロイメントにおいて、**ステートレス**なマイクロサービスが**ステートフル**なマイクロサービスよりもはるかにスケーリングおよび管理しやすいのはなぜですか？",
      solution: "**ステートレスサービス**は、セッションデータをローカルに保存しないため、簡単にスケールアップまたはスケールダウンしたり、置き換えたりできます。**ステートフルサービス**（データをローカルに保存したり、スティッキーセッションを必要としたりする）は、永続ストレージとネットワークIDを確保するために、より複雑なオーケストレーションツール（StatefulSetsなど）を必要とします。"
    },
    vi: {
        title: "Dịch vụ Stateless so với Stateful",
        body: "Trong triển khai Kubernetes, tại sao các microservices **stateless (phi trạng thái)** lại dễ mở rộng và quản lý hơn nhiều so với các microservices **stateful (có trạng thái)**?",
        solution: "**Dịch vụ Stateless** có thể dễ dàng mở rộng quy mô hoặc thu nhỏ và thay thế vì chúng không lưu trữ dữ liệu phiên cục bộ. **Dịch vụ Stateful** (lưu trữ dữ liệu cục bộ hoặc yêu cầu sticky sessions) cần các công cụ điều phối phức tạp hơn (như StatefulSets) để đảm bảo bộ lưu trữ và định danh mạng liên tục."
      }
  },
  {
    _id: "ms-j-048",
    difficulty: "junior",
    tags: ["resilience", "patterns", "design"],
    content: {
      en: {
        title: "Degraded Service (Fallback)",
        body: "What is a **Fallback** strategy (part of the Circuit Breaker pattern), and how does it maintain user experience when a dependent service fails?",
        solution: "A Fallback strategy provides a **predefined alternative response** (e.g., cached data, default value, or an empty list) when the primary service call fails. This allows the application to remain partially functional (degraded) instead of completely crashing."
      }
    },
    jp: {
      title: "機能低下サービス（フォールバック）",
      body: "**フォールバック**戦略（サーキットブレーカーパターンの一部）とは何ですか、また依存サービスが失敗したときにユーザーエクスペリエンスをどのように維持しますか？",
      solution: "フォールバック戦略は、プライマリサービスコールが失敗したときに**事前に定義された代替応答**（例：キャッシュされたデータ、デフォルト値、または空のリスト）を提供します。これにより、アプリケーションが完全にクラッシュするのではなく、部分的に機能し続けること（機能低下）が可能になります。"
    },
    vi: {
        title: "Dịch vụ Giảm cấp (Fallback)",
        body: "Chiến lược **Fallback (Dự phòng)** (một phần của mô hình Circuit Breaker) là gì, và nó duy trì trải nghiệm người dùng như thế nào khi một dịch vụ phụ thuộc bị lỗi?",
        solution: "Chiến lược Fallback cung cấp một **phản hồi thay thế được xác định trước** (ví dụ: dữ liệu được lưu trong bộ nhớ cache, giá trị mặc định hoặc danh sách trống) khi lời gọi dịch vụ chính thất bại. Điều này cho phép ứng dụng vẫn hoạt động một phần (giảm cấp) thay vì bị sập hoàn toàn."
      }
  },
  {
    _id: "ms-j-049",
    difficulty: "junior",
    tags: ["communication", "async", "event"],
    content: {
      en: {
        title: "Idempotent Consumers",
        body: "When building an **event-driven architecture**, why must event consumers be **idempotent**?",
        solution: "Message brokers (like Kafka) guarantee **at-least-once delivery**, meaning a consumer might receive the same event **more than once**. Idempotent consumers can safely process a duplicate event without causing unintended side effects (like double-counting inventory)."
      }
    },
    jp: {
      title: "べき等なコンシューマー",
      body: "**イベント駆動型アーキテクチャ**を構築する際、イベントコンシューマーはなぜ**べき等**でなければならないのですか？",
      solution: "メッセージブローカー（Kafkaなど）は**少なくとも1回配信**を保証しており、コンシューマーが同じイベントを**複数回**受け取る可能性があることを意味します。べき等なコンシューマーは、意図しない副作用（在庫の二重計上など）を引き起こすことなく、重複したイベントを安全に処理できます。"
    },
    vi: {
        title: "Idempotent Consumers",
        body: "Khi xây dựng **kiến trúc hướng sự kiện**, tại sao các consumer sự kiện phải là **idempotent (lũy đẳng)**?",
        solution: "Các message broker (như Kafka) đảm bảo **gửi ít nhất một lần (at-least-once delivery)**, nghĩa là một consumer có thể nhận cùng một sự kiện **nhiều hơn một lần**. Các consumer lũy đẳng có thể xử lý an toàn một sự kiện trùng lặp mà không gây ra tác dụng phụ không mong muốn (như đếm tồn kho hai lần)."
      }
  },
  {
    _id: "ms-j-050",
    difficulty: "junior",
    tags: ["architecture", "cost", "operations"],
    content: {
      en: {
        title: "Microservices Cost Drawback",
        body: "Give one reason why a microservices system typically has **higher infrastructure costs** than an equivalent monolith.",
        solution: "Each service requires its own resources: a dedicated operating system, a dedicated database instance, its own redundant set of containers, and often its own message queue topics/storage. The overhead of running many small, separate units adds up to a higher total cost."
      }
    },
    jp: {
      title: "マイクロサービスのコストの欠点",
      body: "マイクロサービスシステムが、同等のモノリスよりも一般的に**インフラストラクチャコストが高くなる**理由を1つ挙げてください。",
      solution: "各サービスは独自のオペレーティングシステム、独自の専用データベースインスタンス、独自の冗長なコンテナセット、そしてしばしば独自のメッセージキュー/ストレージなど、独自の必要なリソースを必要とします。多くの小さく分離されたユニットを実行するためのオーバーヘッドは、より高い総コストにつながります。"
    },
    vi: {
        title: "Hạn chế về Chi phí của Microservices",
        body: "Nêu một lý do tại sao hệ thống microservices thường có **chi phí cơ sở hạ tầng cao hơn** so với một monolithic tương đương.",
        solution: "Mỗi dịch vụ yêu cầu tài nguyên riêng: một hệ điều hành chuyên dụng, một phiên bản cơ sở dữ liệu chuyên dụng, bộ container dự phòng riêng và thường là các topic/bộ lưu trữ message queue riêng. Chi phí chung cho việc chạy nhiều đơn vị nhỏ, riêng biệt sẽ cộng lại thành tổng chi phí cao hơn."
      }
  }
];
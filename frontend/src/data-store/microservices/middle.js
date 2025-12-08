const microservicesMiddleQuestions = [
    {
    _id: "ms-m-001",
    difficulty: "middle",
    tags: ["data", "consistency", "saga"],
    content: {
      en: {
        title: "Saga Orchestration vs Choreography",
        body: "What is the key difference between **Orchestration-based Saga** and **Choreography-based Saga**, and which one offers greater decoupling?",
        solution: "Orchestration uses a **centralized coordinator service** to direct all participants (tighter coupling). Choreography uses **events** published by each service to trigger the next step (greater decoupling)."
      },
      jp: {
        title: "Sagaオーケストレーション vs コレオグラフィー",
        body: "**オーケストレーションベースSaga**と**コレオグラフィーベースSaga**の主な違いは何ですか、またどちらがより大きな疎結合を提供しますか？",
        solution: "オーケストレーションは**集中化されたコーディネーターサービス**を使用してすべての参加者を指示します（より密結合）。コレオグラフィーは、各サービスが発行する**イベント**を使用して次のステップをトリガーします（より大きな疎結合）。"
      },
      vi: {
        title: "Orchestration Saga vs Choreography Saga",
        body: "Sự khác biệt chính giữa **Orchestration-based Saga** và **Choreography-based Saga** là gì, và cái nào cung cấp sự tách rời lớn hơn?",
        solution: "Orchestration sử dụng một **dịch vụ điều phối tập trung** để chỉ đạo tất cả các bên tham gia (gắn kết chặt hơn). Choreography sử dụng **các sự kiện** được xuất bản bởi mỗi dịch vụ để kích hoạt bước tiếp theo (tách rời lớn hơn)."
      }
    }
  },
  {
    _id: "ms-m-002",
    difficulty: "middle",
    tags: ["observability", "metrics", "monitoring"],
    content: {
      en: {
        title: "Red vs Use Metrics",
        body: "When monitoring microservices, what is the key difference between the **RED Method** (Rate, Errors, Duration) and the **USE Method** (Utilization, Saturation, Errors)?",
        solution: "The **RED Method** focuses on **request-based services** (HTTP/RPC). The **USE Method** focuses on **resource monitoring** (CPU, memory, disk I/O, etc.) and is often better for monitoring the infrastructure and underlying resources."
      }
    },
    jp: {
        title: "RED vs USE メトリクス",
        body: "マイクロサービスを監視する際、**REDメソッド**（レート、エラー、期間）と**USEメソッド**（利用率、飽和度、エラー）の主な違いは何ですか？",
        solution: "**REDメソッド**は**リクエストベースのサービス**（HTTP/RPC）に焦点を当てています。**USEメソッド**は**リソース監視**（CPU、メモリ、ディスクI/Oなど）に焦点を当てており、インフラストラクチャと基盤となるリソースの監視により適しています。"
      },
      vi: {
        title: "Metrics RED vs USE",
        body: "Khi giám sát microservices, sự khác biệt chính giữa **Phương pháp RED** (Rate, Errors, Duration) và **Phương pháp USE** (Utilization, Saturation, Errors) là gì?",
        solution: "**Phương pháp RED** tập trung vào **các dịch vụ dựa trên yêu cầu** (HTTP/RPC). **Phương pháp USE** tập trung vào **giám sát tài nguyên** (CPU, bộ nhớ, I/O đĩa, v.v.) và thường tốt hơn cho việc giám sát cơ sở hạ tầng và các tài nguyên cơ bản."
      }
  },
  {
    _id: "ms-m-003",
    difficulty: "middle",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Strategic Design and Bounded Context",
        body: "How does the principle of **High Cohesion** and **Loose Coupling** directly influence the definition of a **Bounded Context** boundary?",
        solution: "A Bounded Context boundary should be drawn such that all components **inside** it are highly cohesive (work together closely) and the communication/dependencies **between** contexts are minimized (loose coupling). This ensures changes within one context rarely affect others."
      },
      jp: {
        title: "戦略的設計と境界付けられたコンテキスト",
        body: "**高い凝集度（High Cohesion）**と**疎結合（Loose Coupling）**の原則は、**境界付けられたコンテキスト**の定義にどのように直接影響しますか？",
        solution: "境界付けられたコンテキストの境界は、**内部**のすべてのコンポーネントが高度に凝集し（密接に連携し）、コンテキスト**間**の通信/依存関係が最小限に抑えられる（疎結合）ように引かれるべきです。これにより、1つのコンテキスト内の変更が他のコンテキストに影響を与えることがめったにないことが保証されます。"
      },
      vi: {
        title: "Thiết kế Chiến lược và Bounded Context",
        body: "Nguyên tắc **High Cohesion (Tính gắn kết cao)** và **Loose Coupling (Gắn kết lỏng lẻo)** ảnh hưởng trực tiếp đến việc xác định ranh giới **Bounded Context** như thế nào?",
        solution: "Ranh giới Bounded Context nên được vẽ sao cho tất cả các thành phần **bên trong** nó có tính gắn kết cao (hoạt động chặt chẽ với nhau) và giao tiếp/sự phụ thuộc **giữa** các context được giảm thiểu (gắn kết lỏng lẻo). Điều này đảm bảo các thay đổi trong một context hiếm khi ảnh hưởng đến các context khác."
      }
    }
  },
  {
    _id: "ms-m-004",
    difficulty: "middle",
    tags: ["communication", "async", "kafka"],
    content: {
      en: {
        title: "Kafka Topic Partitioning",
        body: "How does the concept of **Kafka Topic Partitioning** aid in the scalability and order preservation for microservices event consumption?",
        solution: "Partitions allow **parallel processing** of messages by multiple consumer instances, which increases throughput (scalability). Crucially, messages **within a single partition** are guaranteed to be consumed in order, which is vital for state-dependent operations (e.g., all events for a single user must go to the same partition)."
      },
      jp: {
        title: "Kafkaトピックのパーティショニング",
        body: "**Kafkaトピックのパーティショニング**の概念は、マイクロサービスイベント消費のスケーラビリティと順序保存にどのように役立ちますか？",
        solution: "パーティションは、複数のコンシューマインスタンスによるメッセージの**並列処理**を可能にし、スループット（スケーラビリティ）を向上させます。重要なことに、**単一のパーティション内**のメッセージは、順序通りに消費されることが保証されており、これは状態依存の操作（例：単一ユーザーのすべてのイベントは同じパーティションに行く必要がある）にとって不可欠です。"
      },
      vi: {
        title: "Kafka Topic Partitioning",
        body: "Khái niệm **Kafka Topic Partitioning** hỗ trợ như thế nào trong việc mở rộng quy mô và bảo toàn thứ tự cho việc tiêu thụ sự kiện của microservices?",
        solution: "Các Partition cho phép **xử lý song song** tin nhắn bởi nhiều instance consumer, điều này làm tăng thông lượng (khả năng mở rộng). Quan trọng hơn, tin nhắn **trong một partition duy nhất** được đảm bảo được tiêu thụ theo đúng thứ tự, điều này rất quan trọng cho các hoạt động phụ thuộc vào trạng thái (ví dụ: tất cả các sự kiện cho một người dùng phải đi đến cùng một partition)."
      }
    }
  },
  {
    _id: "ms-m-005",
    difficulty: "middle",
    tags: ["data", "transaction", "compensation"],
    content: {
      en: {
        title: "Saga Compensation",
        body: "What is the purpose of a **Compensation Transaction** within the Saga Pattern, and when is it executed?",
        solution: "The purpose is to **undo (roll back)** the changes made by previous successful transactions in a Saga when a later transaction fails. It is executed automatically by the coordinator (orchestration) or by reacting to a failure event (choreography)." 
      },
      jp: {
        title: "Saga補償",
        body: "Sagaパターンにおける**補償トランザクション（Compensation Transaction）**の目的は何ですか、またいつ実行されますか？",
        solution: "目的は、Saga内の以前の成功したトランザクションによって行われた変更を、後のトランザクションが失敗したときに**元に戻す（ロールバックする）**ことです。これは、コーディネーターによって自動的に実行されるか（オーケストレーション）、失敗イベントに反応することによって実行されます（コレオグラフィー）。"
      },
      vi: {
        title: "Bồi thường trong Saga (Compensation)",
        body: "Mục đích của một **Giao dịch Bồi thường (Compensation Transaction)** trong Mô hình Saga là gì, và nó được thực thi khi nào?",
        solution: "Mục đích là để **hoàn tác (roll back)** các thay đổi được thực hiện bởi các giao dịch thành công trước đó trong một Saga khi một giao dịch sau đó thất bại. Nó được thực thi tự động bởi điều phối viên (orchestration) hoặc bằng cách phản ứng với một sự kiện thất bại (choreography)."
      }
    }
  },
  {
    _id: "ms-m-006",
    difficulty: "middle",
    tags: ["resilience", "patterns", "timeout"],
    content: {
      en: {
        title: "Client-Side vs Server-Side Timeout",
        body: "Why should you apply **Timeouts** at multiple layers (e.g., API Gateway, Client Service, Database connection) rather than just at the caller service level?",
        solution: "Applying timeouts at multiple layers prevents resource exhaustion throughout the stack. For instance, a low database connection timeout prevents the service thread from hanging indefinitely, while a gateway timeout prevents the external client from waiting too long."
      },
      jp: {
        title: "クライアント側 vs サーバー側タイムアウト",
        body: "呼び出し元サービスレベルだけでなく、複数の層（例：APIゲートウェイ、クライアントサービス、データベース接続）で**タイムアウト**を適用すべきなのはなぜですか？",
        solution: "複数の層でタイムアウトを適用することで、スタック全体でのリソース枯渇を防ぎます。例えば、低いデータベース接続タイムアウトはサービススレッドが無期限にハングするのを防ぎ、ゲートウェイタイムアウトは外部クライアントが長く待ちすぎるのを防ぎます。"
      },
      vi: {
        title: "Timeout phía Client so với Server",
        body: "Tại sao bạn nên áp dụng **Timeouts** ở nhiều lớp (ví dụ: API Gateway, Dịch vụ Client, kết nối Cơ sở dữ liệu) thay vì chỉ ở cấp độ dịch vụ gọi?",
        solution: "Việc áp dụng timeouts ở nhiều lớp ngăn chặn sự cạn kiệt tài nguyên trong toàn bộ stack. Ví dụ, timeout kết nối cơ sở dữ liệu thấp ngăn luồng dịch vụ bị treo vô thời hạn, trong khi timeout gateway ngăn client bên ngoài phải chờ quá lâu."
      }
    }
  },
  {
    _id: "ms-m-007",
    difficulty: "middle",
    tags: ["deployment", "traffic", "service-mesh"],
    content: {
      en: {
        title: "Service Mesh Traffic Routing",
        body: "How does a **Service Mesh** (e.g., Istio, Linkerd) facilitate advanced traffic management techniques like **Canary Releases** or **A/B Testing**?",
        solution: "The Service Mesh sidecar proxies can be configured to precisely control the percentage of traffic flowing to different versions of a service based on rules (e.g., 5% to v2, 95% to v1). This allows fine-grained, dynamic routing without changing the application code."
      },
      jp: {
        title: "サービスメッシュのトラフィックルーティング",
        body: "**サービスメッシュ**（例：Istio、Linkerd）は、**カナリアリリース**や**A/Bテスト**などの高度なトラフィック管理技術をどのように促進しますか？",
        solution: "サービスメッシュのサイドカープロキシは、ルールに基づいてサービス​​の異なるバージョンに流れるトラフィックの割合を正確に制御するように構成できます（例：v2に5％、v1に95％）。これにより、アプリケーションコードを変更することなく、きめ細かく動的なルーティングが可能になります。"
      },
      vi: {
        title: "Định tuyến Lưu lượng của Service Mesh",
        body: "**Service Mesh** (ví dụ: Istio, Linkerd) tạo điều kiện cho các kỹ thuật quản lý lưu lượng tiên tiến như **Canary Releases** hoặc **A/B Testing** như thế nào?",
        solution: "Các proxy sidecar của Service Mesh có thể được cấu hình để kiểm soát chính xác phần trăm lưu lượng truy cập chảy đến các phiên bản khác nhau của một dịch vụ dựa trên các quy tắc (ví dụ: 5% đến v2, 95% đến v1). Điều này cho phép định tuyến động, chi tiết mà không cần thay đổi mã ứng dụng."
      }
    }
  },
  {
    _id: "ms-m-008",
    difficulty: "middle",
    tags: ["security", "auth", "oauth", "jwt"],
    content: {
      en: {
        title: "JWT Token Revocation",
        body: "What is a major challenge with immediately revoking a **JWT (JSON Web Token)** in a distributed microservices environment, and what is a common mitigation strategy?",
        solution: "Challenge: JWTs are **self-contained** and generally validated locally by services; they are not stored centrally, making immediate revocation difficult until they expire. Mitigation: Using a **centralized revocation list** (blacklist) or a short token expiration time."
      },
      jp: {
        title: "JWTトークンの取り消し",
        body: "分散マイクロサービス環境で**JWT（JSON Web Token）**を即座に取り消すことの主な課題は何ですか、また一般的な軽減策は何ですか？",
        solution: "課題：JWTは**自己完結型**であり、通常サービスによってローカルで検証されます。それらは集中管理されていないため、有効期限が切れるまで即時取り消しが困難です。軽減策：**集中型取り消しリスト**（ブラックリスト）を使用するか、トークンの有効期限を短くすること。"
      },
      vi: {
        title: "Thu hồi JWT Token",
        body: "Thách thức lớn khi thu hồi ngay lập tức một **JWT (JSON Web Token)** trong môi trường microservices phân tán là gì, và chiến lược giảm thiểu phổ biến là gì?",
        solution: "Thách thức: JWT **tự chứa** và thường được các dịch vụ xác thực cục bộ; chúng không được lưu trữ tập trung, gây khó khăn cho việc thu hồi ngay lập tức cho đến khi chúng hết hạn. Giảm thiểu: Sử dụng một **danh sách thu hồi tập trung** (blacklist) hoặc đặt thời gian hết hạn token ngắn."
      }
    }
  },
  {
    _id: "ms-m-009",
    difficulty: "middle",
    tags: ["data", "query", "graphql"],
    content: {
      en: {
        title: "GraphQL Resolver Aggregation",
        body: "When using **GraphQL** in front of microservices, what technique does the GraphQL server use to efficiently combine data from multiple downstream REST/gRPC services into a single response?",
        solution: "It uses **Resolvers** that are responsible for fetching data for specific fields. A single GraphQL query can trigger multiple Resolvers, which then call the corresponding microservices and aggregate their results into the final payload structure requested by the client."
      },
      jp: {
        title: "GraphQLリゾルバ集約",
        body: "マイクロサービスの前に**GraphQL**を使用する場合、GraphQLサーバーはどのようにして複数のダウンストリームREST/gRPCサービスからのデータを単一の応答に効率的に結合しますか？",
        solution: "特定のフィールドのデータをフェッチする責任を持つ**リゾルバ（Resolvers）**を使用します。単一のGraphQLクエリは複数のリゾルバをトリガーし、それらが対応するマイクロサービスを呼び出し、クライアントが要求した最終的なペイロード構造に結果を集約します。"
      },
      vi: {
        title: "Tổng hợp của GraphQL Resolver",
        body: "Khi sử dụng **GraphQL** đứng trước microservices, kỹ thuật nào mà máy chủ GraphQL sử dụng để kết hợp hiệu quả dữ liệu từ nhiều dịch vụ REST/gRPC downstream thành một phản hồi duy nhất?",
        solution: "Nó sử dụng **Resolvers** chịu trách nhiệm tìm nạp dữ liệu cho các trường cụ thể. Một truy vấn GraphQL duy nhất có thể kích hoạt nhiều Resolver, sau đó gọi các microservices tương ứng và tổng hợp kết quả của chúng vào cấu trúc payload cuối cùng mà client yêu cầu."
      }
    }
  },
  {
    _id: "ms-m-010",
    difficulty: "middle",
    tags: ["deployment", "testing", "contract"],
    content: {
      en: {
        title: "Consumer-Driven Contract vs Integration Test",
        body: "Why are **Consumer-Driven Contract (CDC) tests** preferred over traditional **Integration Tests** when validating service interaction in microservices?",
        solution: "CDC tests are **faster** and **decoupled**. They validate only the expected API contract, avoiding the need to spin up and coordinate multiple live services, which makes traditional integration tests slow and fragile."
      }
    },
    jp: {
        title: "CDCテスト vs 統合テスト",
        body: "マイクロサービスでサービス間の相互作用を検証する際、従来の**統合テスト**よりも**コンシューマ駆動契約（CDC）テスト**が好まれるのはなぜですか？",
        solution: "CDCテストは**高速**で**疎結合**です。それらは期待されるAPI契約のみを検証し、複数のライブサービスを起動して調整する必要がないため、従来の統合テストが遅く、壊れやすいものになります。"
      },
      vi: {
        title: "CDC Test so với Integration Test",
        body: "Tại sao **Consumer-Driven Contract (CDC) tests** được ưu tiên hơn **Integration Tests** truyền thống khi xác thực sự tương tác dịch vụ trong microservices?",
        solution: "CDC tests **nhanh hơn** và **tách rời** hơn. Chúng chỉ xác thực hợp đồng API được mong đợi, tránh nhu cầu phải khởi động và điều phối nhiều dịch vụ đang hoạt động, điều này làm cho các bài kiểm thử tích hợp truyền thống trở nên chậm và dễ vỡ."
      }
  },
  {
    _id: "ms-m-011",
    difficulty: "middle",
    tags: ["patterns", "data", "event-sourcing"],
    content: {
      en: {
        title: "Event Sourcing and Querying",
        body: "What is the key challenge with **querying** the data stored in an **Event Store** in Event Sourcing, and what pattern is often paired with it to address this?",
        solution: "Challenge: Querying raw events is inefficient and difficult. Solution: The **CQRS (Command Query Responsibility Segregation)** pattern is used. It maintains a **read model** (a materialized view) optimized specifically for fast querying, which is updated asynchronously by consuming the stream of events."
      }
    },
    jp: {
        title: "イベントソーシングとクエリ",
        body: "イベントソーシングの**イベントストア**に保存されているデータを**クエリ**する際の主な課題は何ですか、またこれに対処するためにどのパターンがしばしばペアで使われますか？",
        solution: "課題：生のイベントをクエリすることは非効率的で困難です。解決策：**CQRS（コマンドクエリ責務分離）**パターンが使用されます。これは、高速なクエリのために特別に最適化された**リードモデル**（マテリアライズドビュー）を維持し、イベントのストリームを消費することによって非同期で更新されます。"
      },
      vi: {
        title: "Event Sourcing và Truy vấn",
        body: "Thách thức chính khi **truy vấn** dữ liệu được lưu trữ trong **Event Store** trong Event Sourcing là gì, và mô hình nào thường được ghép nối với nó để giải quyết vấn đề này?",
        solution: "Thách thức: Truy vấn các sự kiện thô là không hiệu quả và khó khăn. Giải pháp: Mô hình **CQRS (Command Query Responsibility Segregation)** được sử dụng. Nó duy trì một **mô hình đọc (read model)** (một materialized view) được tối ưu hóa đặc biệt cho việc truy vấn nhanh, được cập nhật bất đồng bộ bằng cách tiêu thụ luồng sự kiện."
      }
  },
  {
    _id: "ms-m-012",
    difficulty: "middle",
    tags: ["networking", "proxy", "service-mesh"],
    content: {
      en: {
        title: "Sidecar Proxy Functions",
        body: "In a Service Mesh, how does the **Sidecar Proxy** pattern reduce the complexity of the service development code?",
        solution: "It **offloads cross-cutting concerns** (authentication, metrics collection, distributed tracing, circuit breaking, mTLS encryption) from the application code into the sidecar container. The service code can then focus purely on business logic."
      }
    },
    jp: {
        title: "サイドカープロキシの機能",
        body: "サービスメッシュにおいて、**サイドカープロキシ**パターンは、サービス開発コードの複雑さをどのように軽減しますか？",
        solution: "それは**横断的関心事**（認証、メトリクス収集、分散トレーシング、サーキットブレーキング、mTLS暗号化）をアプリケーションコードからサイドカーコンテナに**オフロード**します。これにより、サービスコードは純粋にビジネスロジックに集中できます。"
      },
      vi: {
        title: "Chức năng của Sidecar Proxy",
        body: "Trong Service Mesh, mô hình **Sidecar Proxy** giảm độ phức tạp của mã phát triển dịch vụ như thế nào?",
        solution: "Nó **chuyển tải các vấn đề chung (cross-cutting concerns)** (xác thực, thu thập metrics, truy vết phân tán, ngắt mạch, mã hóa mTLS) từ mã ứng dụng sang container sidecar. Mã dịch vụ sau đó có thể chỉ tập trung vào logic nghiệp vụ."
      }
  },
  {
    _id: "ms-m-013",
    difficulty: "middle",
    tags: ["data", "transaction", "compensation"],
    content: {
      en: {
        title: "Idempotency in Saga",
        body: "Why is it crucial that all individual steps (local transactions) within a **Saga** are **idempotent**?",
        solution: "Because the Saga coordinator or choreography may need to **retry a step** due to transient network failures or execute **compensation steps** which themselves may be retried. Idempotency ensures these repeated executions do not lead to inconsistent or duplicate results."
      }
    },
    jp: {
        title: "Sagaにおけるべき等性",
        body: "**Saga**内のすべての個々のステップ（ローカルトランザクション）が**べき等**である必要があるのはなぜですか？",
        solution: "Sagaコーディネーターまたはコレオグラフィーは、一時的なネットワーク障害のために**ステップを再試行**する必要がある場合があり、またそれ自体が再試行される可能性のある**補償ステップ**を実行する必要がある場合があるためです。べき等性は、これらの繰り返しの実行が不整合または重複した結果につながらないことを保証します。"
      },
      vi: {
        title: "Idempotency trong Saga",
        body: "Tại sao điều quan trọng là tất cả các bước riêng lẻ (giao dịch cục bộ) trong một **Saga** phải là **idempotent (lũy đẳng)**?",
        solution: "Bởi vì điều phối viên Saga hoặc Choreography có thể cần **thử lại một bước** do lỗi mạng thoáng qua hoặc thực hiện **các bước bồi thường** mà bản thân chúng có thể được thử lại. Tính lũy đẳng đảm bảo rằng những lần thực thi lặp lại này không dẫn đến kết quả không nhất quán hoặc trùng lặp."
      }
  },
  {
    _id: "ms-m-014",
    difficulty: "middle",
    tags: ["deployment", "ci/cd", "automation"],
    content: {
      en: {
        title: "GitOps in Microservices",
        body: "Define **GitOps** and explain its main benefit for managing microservices deployments in a Kubernetes environment.",
        solution: "GitOps is an operational framework that uses **Git repositories** as the single source of truth for the **declarative definition** of the system's infrastructure and applications. Benefit: It enables faster, safer, and fully traceable deployments through familiar Git workflows (Pull Requests)."
      }
    },
    jp: {
        title: "マイクロサービスにおけるGitOps",
        body: "**GitOps**を定義し、Kubernetes環境でのマイクロサービスデプロイメントの管理におけるその主な利点を説明してください。",
        solution: "GitOpsは、システムのインフラストラクチャとアプリケーションの**宣言的な定義**の単一の真実の情報源として**Gitリポジトリ**を使用する運用フレームワークです。利点：使い慣れたGitワークフロー（プルリクエスト）を通じて、より速く、より安全で、完全に追跡可能なデプロイメントを可能にします。"
      },
      vi: {
        title: "GitOps trong Microservices",
        body: "Định nghĩa **GitOps** và giải thích lợi ích chính của nó đối với việc quản lý triển khai microservices trong môi trường Kubernetes.",
        solution: "GitOps là một khuôn khổ vận hành sử dụng **kho lưu trữ Git** làm nguồn sự thật duy nhất cho **định nghĩa khai báo** về cơ sở hạ tầng và ứng dụng của hệ thống. Lợi ích: Nó cho phép triển khai nhanh hơn, an toàn hơn và có thể theo dõi đầy đủ thông qua các quy trình Git quen thuộc (Pull Requests)."
      }
  },
  {
    _id: "ms-m-015",
    difficulty: "middle",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Shared Kernel vs ACL",
        body: "In DDD/Microservices, when would you choose to use a **Shared Kernel** instead of an **Anti-Corruption Layer (ACL)** for integrating two Bounded Contexts?",
        solution: "Choose **Shared Kernel** only when the two teams/services are **tightly coupled** and agree to share and jointly modify a small subset of the domain model (high trust/coordination). Choose **ACL** when the services need to be **fully decoupled** and one service wants to protect its model from the foreign model's concepts."
      }
    },
    jp: {
        title: "共有カーネル vs ACL",
        body: "DDD/マイクロサービスにおいて、2つの境界付けられたコンテキストを統合するために、**腐敗防止層（ACL）**の代わりに**共有カーネル（Shared Kernel）**を使用することを選択するのはいつですか？",
        solution: "共有カーネルは、2つのチーム/サービスが**密接に結合**しており、ドメインモデルの小さなサブセットを共有し、共同で変更することに同意する場合にのみ選択します（高い信頼/調整）。ACLは、サービスが**完全に疎結合**である必要があり、あるサービスが外部モデルの概念から自身のモデルを保護したい場合に選択します。"
      },
      vi: {
        title: "Shared Kernel so với ACL",
        body: "Trong DDD/Microservices, khi nào bạn sẽ chọn sử dụng **Shared Kernel (Hạt nhân Chia sẻ)** thay vì **Anti-Corruption Layer (ACL)** để tích hợp hai Bounded Contexts?",
        solution: "Chọn **Shared Kernel** chỉ khi hai đội/dịch vụ **gắn kết chặt chẽ** và đồng ý chia sẻ và cùng nhau sửa đổi một tập hợp con nhỏ của mô hình miền (tin tưởng/phối hợp cao). Chọn **ACL** khi các dịch vụ cần được **tách rời hoàn toàn** và một dịch vụ muốn bảo vệ mô hình của mình khỏi các khái niệm của mô hình bên ngoài."
      }
  },
  {
    _id: "ms-m-016",
    difficulty: "middle",
    tags: ["data", "caching", "invalidation"],
    content: {
      en: {
        title: "Cache Invalidation in Distributed Systems",
        body: "When using a distributed cache (like Redis) shared by multiple services, what is the most reliable way to perform **cache invalidation** after a service updates its data?",
        solution: "By using an **Event-Driven approach**. The service publishes an event ('UserUpdated') immediately after updating its database. Other services/cache layers listen to this event and invalidate the specific cached entry related to the updated user ID."
      }
    },
    jp: {
        title: "分散システムにおけるキャッシュ無効化",
        body: "複数のサービスで共有される分散キャッシュ（Redisなど）を使用する場合、サービスがデータを更新した後、**キャッシュの無効化**を実行するための最も信頼性の高い方法は何ですか？",
        solution: "**イベント駆動型アプローチ**を使用することです。サービスはデータベースを更新した直後にイベント（「UserUpdated」）を発行します。他のサービス/キャッシュ層はこのイベントをリッスンし、更新されたユーザーIDに関連する特定のキャッシュエントリを無効にします。"
      },
      vi: {
        title: "Vô hiệu hóa Cache trong Hệ thống Phân tán",
        body: "Khi sử dụng bộ nhớ cache phân tán (như Redis) được chia sẻ bởi nhiều dịch vụ, cách đáng tin cậy nhất để thực hiện **vô hiệu hóa cache** sau khi một dịch vụ cập nhật dữ liệu của nó là gì?",
        solution: "Bằng cách sử dụng **phương pháp Hướng sự kiện (Event-Driven approach)**. Dịch vụ xuất bản một sự kiện ('UserUpdated') ngay sau khi cập nhật cơ sở dữ liệu của nó. Các dịch vụ/lớp cache khác lắng nghe sự kiện này và vô hiệu hóa mục cache cụ thể liên quan đến ID người dùng đã cập nhật."
      }
  },
  {
    _id: "ms-m-017",
    difficulty: "middle",
    tags: ["communication", "rpc", "grpc"],
    content: {
      en: {
        title: "gRPC Streaming Types",
        body: "Name the four types of communication modes supported by **gRPC** and briefly describe one of them.",
        solution: "1. **Unary RPC** (standard request/response). 2. **Server Streaming** (server sends a sequence of messages). 3. **Client Streaming** (client sends a sequence of messages). 4. **Bidirectional Streaming** (both sides send message sequences simultaneously)."
      }
    },
    jp: {
        title: "gRPCストリーミングの種類",
        body: "**gRPC**がサポートする4種類の通信モードの名前を挙げ、そのうちの1つを簡潔に説明してください。",
        solution: "1. **単項RPC**（標準のリクエスト/レスポンス）。 2. **サーバーサイドストリーミング**（サーバーが一連のメッセージを送信）。 3. **クライアントサイドストリーミング**（クライアントが一連のメッセージを送信）。 4. **双方向ストリーミング**（両側がメッセージシーケンスを同時に送信）。"
      },
      vi: {
        title: "Các loại Streaming của gRPC",
        body: "Kể tên bốn loại chế độ giao tiếp được hỗ trợ bởi **gRPC** và mô tả ngắn gọn một trong số chúng.",
        solution: "1. **Unary RPC** (yêu cầu/phản hồi tiêu chuẩn). 2. **Server Streaming** (máy chủ gửi một chuỗi tin nhắn). 3. **Client Streaming** (client gửi một chuỗi tin nhắn). 4. **Bidirectional Streaming** (cả hai bên gửi chuỗi tin nhắn đồng thời)."
      }
  },
  {
    _id: "ms-m-018",
    difficulty: "middle",
    tags: ["observability", "tracing", "sampling"],
    content: {
      en: {
        title: "Distributed Tracing Sampling",
        body: "When implementing Distributed Tracing (e.g., using OpenTelemetry), why is **sampling** necessary, and what is a common strategy for it?",
        solution: "Sampling is necessary because tracing **every request** generates an overwhelming amount of data and overhead. A common strategy is **Head-Based Sampling**, where the decision to trace is made at the initial service of the request (the 'head') and is then enforced across all downstream services using the correlation ID."
      }
    },
    jp: {
        title: "分散トレーシングのサンプリング",
        body: "分散トレーシング（OpenTelemetryなどを使用）を実装する際、**サンプリング**が必要なのはなぜですか、またそのための一般的な戦略は何ですか？",
        solution: "すべてのリクエストをトレースすると、**膨大な量のデータ**とオーバーヘッドが発生するため、サンプリングが必要です。一般的な戦略は**ヘッドベースサンプリング（Head-Based Sampling）**であり、トレースの決定はリクエストの最初のサービス（「ヘッド」）で行われ、その後相関IDを使用してすべてのダウンストリームサービスで強制されます。"
      },
      vi: {
        title: "Sampling trong Distributed Tracing",
        body: "Khi triển khai Distributed Tracing (ví dụ: sử dụng OpenTelemetry), tại sao **sampling (lấy mẫu)** lại cần thiết, và một chiến lược phổ biến cho nó là gì?",
        solution: "Sampling là cần thiết vì việc truy vết **mọi yêu cầu** tạo ra một lượng dữ liệu và chi phí đáng kể. Một chiến lược phổ biến là **Head-Based Sampling**, trong đó quyết định truy vết được đưa ra tại dịch vụ ban đầu của yêu cầu ('head') và sau đó được thực thi trên tất cả các dịch vụ downstream bằng cách sử dụng ID tương quan."
      }
  },
  {
    _id: "ms-m-019",
    difficulty: "middle",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Translating Ubiquitous Language",
        body: "In DDD, how does the **Ubiquitous Language** change when crossing the boundary between two different **Bounded Contexts**?",
        solution: "The meaning of a term can **change** or a new term may be required. For example, the term 'Product' in the Inventory Context might mean a physical item, but in the Billing Context, it means a line item on an invoice. The ACL or context map defines this necessary translation."
      }
    },
    jp: {
        title: "ユビキタス言語の翻訳",
        body: "DDDにおいて、**ユビキタス言語**は、2つの異なる**境界付けられたコンテキスト**の境界を越えるときにどのように変化しますか？",
        solution: "用語の意味が**変化する**か、新しい用語が必要になる場合があります。たとえば、在庫コンテキストの「製品」という用語は物理的なアイテムを意味するかもしれませんが、請求コンテキストでは請求書上の明細を意味します。ACLまたはコンテキストマップが、この必要な翻訳を定義します。"
      },
      vi: {
        title: "Phiên dịch Ubiquitous Language",
        body: "Trong DDD, **Ubiquitous Language (Ngôn ngữ Phổ biến)** thay đổi như thế nào khi đi qua ranh giới giữa hai **Bounded Contexts** khác nhau?",
        solution: "Ý nghĩa của một thuật ngữ có thể **thay đổi** hoặc một thuật ngữ mới có thể được yêu cầu. Ví dụ, thuật ngữ 'Sản phẩm' trong Context Kho hàng có thể có nghĩa là một mặt hàng vật lý, nhưng trong Context Thanh toán, nó có nghĩa là một mục hàng trên hóa đơn. ACL hoặc bản đồ ngữ cảnh xác định sự phiên dịch cần thiết này."
      }
  },
  {
    _id: "ms-m-020",
    difficulty: "middle",
    tags: ["deployment", "serverless", "cold-start"],
    content: {
      en: {
        title: "Serverless Cold Start Mitigation",
        body: "What is the **Cold Start** problem in Serverless microservices (e.g., Lambda), and what is a common technique to mitigate it?",
        solution: "Cold Start is the **initial latency** experienced when a function is invoked after a period of inactivity, as the underlying container/runtime environment needs to be spun up. Mitigation involves using **provisioned concurrency** (keeping instances warm) or sending periodic 'ping' requests to keep the instances active."
      }
    },
    jp: {
        title: "サーバーレスのコールドスタートの軽減",
        body: "サーバーレスマイクロサービス（Lambdaなど）における**コールドスタート**の問題とは何ですか、またそれを軽減するための一般的なテクニックは何ですか？",
        solution: "コールドスタートは、非アクティブ期間後にファンクションが呼び出されたときに発生する**初期レイテンシ**であり、基盤となるコンテナ/ランタイム環境を起動する必要があるためです。軽減策には、**プロビジョニングされた同時実行**（インスタンスをウォーム状態に保つ）を使用するか、定期的な「ピング」リクエストを送信してインスタンスをアクティブに保つことが含まれます。"
      },
      vi: {
        title: "Giảm thiểu Cold Start của Serverless",
        body: "Vấn đề **Cold Start (Khởi động Lạnh)** trong microservices Serverless (ví dụ: Lambda) là gì, và một kỹ thuật phổ biến để giảm thiểu nó là gì?",
        solution: "Cold Start là **độ trễ ban đầu** gặp phải khi một hàm được gọi sau một thời gian không hoạt động, vì môi trường container/runtime cơ bản cần được khởi động. Giảm thiểu bao gồm việc sử dụng **provisioned concurrency (độ đồng thời được cấp phép)** (giữ các instance 'ấm') hoặc gửi các yêu cầu 'ping' định kỳ để giữ cho các instance hoạt động."
      }
  },
  {
    _id: "ms-m-021",
    difficulty: "middle",
    tags: ["resilience", "patterns", "health-check"],
    content: {
      en: {
        title: "Liveness vs Readiness Probes",
        body: "In a Kubernetes deployment, what is the key difference and purpose between a service's **Liveness Probe** and its **Readiness Probe**?",
        solution: "**Liveness Probe** checks if the application is **still running** and healthy enough to continue. If it fails, Kubernetes **restarts** the container. **Readiness Probe** checks if the service is **ready to serve traffic**. If it fails, Kubernetes **stops sending traffic** to that instance until it recovers."
      }
    },
    jp: {
        title: "Liveness vs Readinessプローブ",
        body: "Kubernetesデプロイメントにおいて、サービスの**Livenessプローブ**と**Readinessプローブ**の主な違いと目的は何ですか？",
        solution: "**Livenessプローブ**は、アプリケーションが**まだ実行中**であり、続行できるほど健全であるかをチェックします。失敗した場合、Kubernetesはコンテナを**再起動**します。**Readinessプローブ**は、サービスが**トラフィックを処理する準備ができている**かをチェックします。失敗した場合、Kubernetesは回復するまでそのインスタンスへの**トラフィック送信を停止**します。"
      },
      vi: {
        title: "Liveness vs Readiness Probes",
        body: "Trong triển khai Kubernetes, sự khác biệt và mục đích chính giữa **Liveness Probe** và **Readiness Probe** của một dịch vụ là gì?",
        solution: "**Liveness Probe** kiểm tra xem ứng dụng **vẫn đang chạy** và đủ khỏe để tiếp tục hay không. Nếu thất bại, Kubernetes sẽ **khởi động lại** container. **Readiness Probe** kiểm tra xem dịch vụ đã **sẵn sàng phục vụ lưu lượng truy cập** hay chưa. Nếu thất bại, Kubernetes **ngừng gửi lưu lượng truy cập** đến instance đó cho đến khi nó phục hồi."
      }
  },
  {
    _id: "ms-m-022",
    difficulty: "middle",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Data Replication vs Materialized View",
        body: "When building a read-optimized data store in a microservice, what is the main advantage of using an **event-driven materialized view** within the service itself, compared to a simple data replication to a central database?",
        solution: "A materialized view within the service allows the read model to be **optimally structured** for the service's specific query needs, using its own polyglot persistence choice. It also maintains **data ownership** within the Bounded Context, avoiding the risk of a central reporting team making changes that impact the service's read model."
      }
    },
    jp: {
        title: "データレプリケーション vs マテリアライズドビュー",
        body: "マイクロサービスで読み取りに最適化されたデータストアを構築する際、中央データベースへの単純なデータレプリケーションと比較して、サービス内で**イベント駆動型マテリアライズドビュー**を使用する主な利点は何ですか？",
        solution: "サービス内のマテリアライズドビューは、独自の多言語永続性の選択を使用して、サービスの特定のクエリニーズに合わせてリードモデルを**最適に構造化**することを可能にします。また、境界付けられたコンテキスト内の**データ所有権**を維持し、中央レポートチームがサービスのリードモデルに影響を与える変更を加えるリスクを回避します。"
      },
      vi: {
        title: "Data Replication so với Materialized View",
        body: "Khi xây dựng một kho dữ liệu tối ưu hóa cho việc đọc trong một microservice, lợi thế chính của việc sử dụng **event-driven materialized view** bên trong chính dịch vụ đó, so với việc sao chép dữ liệu đơn giản sang cơ sở dữ liệu trung tâm là gì?",
        solution: "Materialized view trong dịch vụ cho phép mô hình đọc được **cấu trúc tối ưu** cho nhu cầu truy vấn cụ thể của dịch vụ, sử dụng lựa chọn polyglot persistence riêng của nó. Nó cũng duy trì **quyền sở hữu dữ liệu** trong Bounded Context, tránh rủi ro đội báo cáo trung tâm thực hiện các thay đổi ảnh hưởng đến mô hình đọc của dịch vụ."
      }
  },
  {
    _id: "ms-m-023",
    difficulty: "middle",
    tags: ["communication", "async", "fan-out"],
    content: {
      en: {
        title: "Fan-Out Pattern for Events",
        body: "In an event-driven architecture, what is the **Fan-Out Pattern** and what message broker feature enables it?",
        solution: "The Fan-Out Pattern allows a **single event** published by one service to be **consumed by multiple independent services**. This is typically enabled by **Message Topics** (Kafka) or **Exchange/Topic types** (RabbitMQ) where multiple consumer queues can subscribe to the same published message."
      }
    },
    jp: {
        title: "イベントのファンアウトパターン",
        body: "イベント駆動型アーキテクチャにおいて、**ファンアウトパターン**とは何ですか、またどのメッセージブローカー機能がそれを可能にしますか？",
        solution: "ファンアウトパターンは、1つのサービスによって発行された**単一のイベント**が**複数の独立したサービスによって消費される**ことを可能にします。これは通常、複数のコンシューマキューが同じ発行されたメッセージを購読できる**メッセー​​ジトピック**（Kafka）または**エクスチェンジ/トピックタイプ**（RabbitMQ）によって可能になります。"
      },
      vi: {
        title: "Fan-Out Pattern cho Sự kiện",
        body: "Trong kiến trúc hướng sự kiện, **Fan-Out Pattern** là gì và tính năng nào của message broker cho phép nó hoạt động?",
        solution: "Fan-Out Pattern cho phép một **sự kiện duy nhất** được xuất bản bởi một dịch vụ được **tiêu thụ bởi nhiều dịch vụ độc lập**. Điều này thường được kích hoạt bởi **Message Topics** (Kafka) hoặc **Exchange/Topic types** (RabbitMQ) nơi nhiều hàng đợi consumer có thể đăng ký cùng một tin nhắn đã được xuất bản."
      }
  },
  {
    _id: "ms-m-024",
    difficulty: "middle",
    tags: ["architecture", "domain", "modeling"],
    content: {
      en: {
        title: "Decomposition by Business Capability",
        body: "What is the most recommended principle for **decomposing a monolith** into microservices, and why is it better than decomposition by technical layers (e.g., UI, Business Logic, Data)?",
        solution: "Decomposition by **Business Capability**. This results in services that are **highly cohesive** (contain everything needed for one business function) and **minimally coupled** (don't share data/logic), which is the core goal of microservices. Technical decomposition often leads to distributed monoliths."
      }
    },
    jp: {
        title: "ビジネス能力による分解",
        body: "モノリスをマイクロサービスに**分解する**ための最も推奨される原則は何ですか、またそれは技術層（例：UI、ビジネスロジック、データ）による分解よりも優れているのはなぜですか？",
        solution: "**ビジネス能力**による分解。これにより、**高度に凝集**し（1つのビジネス機能に必要なすべてを含む）、**結合が最小限**に抑えられた（データ/ロジックを共有しない）サービスが実現し、これはマイクロサービスの中核的な目標です。技術的な分解はしばしば分散モノリスにつながります。"
      },
      vi: {
        title: "Phân tách theo Khả năng Nghiệp vụ",
        body: "Nguyên tắc được khuyến nghị nhất để **phân tách một monolithic** thành microservices là gì, và tại sao nó tốt hơn phân tách theo các lớp kỹ thuật (ví dụ: UI, Logic Nghiệp vụ, Dữ liệu)?",
        solution: "Phân tách theo **Khả năng Nghiệp vụ (Business Capability)**. Điều này tạo ra các dịch vụ **có tính gắn kết cao** (chứa mọi thứ cần thiết cho một chức năng nghiệp vụ) và **kết nối tối thiểu** (không chia sẻ dữ liệu/logic), đây là mục tiêu cốt lõi của microservices. Phân tách kỹ thuật thường dẫn đến monolith phân tán."
      }
  },
  {
    _id: "ms-m-025",
    difficulty: "middle",
    tags: ["observability", "logs", "metrics"],
    content: {
      en: {
        title: "Tracing vs Metrics for SLOs",
        body: "When defining a **Service Level Objective (SLO)** for a service's latency, should you rely on Distributed **Tracing** or **Metrics** data for continuous reporting, and why?",
        solution: "You should rely on **Metrics** data. Metrics are aggregated and continuously collected for **all** requests, making them statistically sound for tracking SLOs over time. Tracing is often sampled and provides granular, per-request details better suited for debugging and root cause analysis."
      }
    },
    jp: {
        title: "SLOのためのトレーシング vs メトリクス",
        body: "サービスのレイテンシの**サービスレベル目標（SLO）**を定義する際、継続的なレポートのために分散**トレーシング**データと**メトリクス**データのどちらに依存すべきですか、またその理由は何ですか？",
        solution: "**メトリクス**データに依存すべきです。メトリクスは**すべて**のリクエストに対して集計され、継続的に収集されるため、時間の経過に伴うSLOの追跡に統計的に適しています。トレーシングはしばしばサンプリングされ、デバッグと根本原因分析により適したきめ細かなリクエストごとの詳細を提供します。"
      },
      vi: {
        title: "Tracing so với Metrics cho SLO",
        body: "Khi xác định **Mục tiêu Mức dịch vụ (SLO)** cho độ trễ của một dịch vụ, bạn nên dựa vào dữ liệu **Tracing** Phân tán hay **Metrics** để báo cáo liên tục, và tại sao?",
        solution: "Bạn nên dựa vào dữ liệu **Metrics**. Metrics được tổng hợp và thu thập liên tục cho **tất cả** các yêu cầu, khiến chúng có cơ sở thống kê vững chắc để theo dõi SLO theo thời gian. Tracing thường được lấy mẫu và cung cấp chi tiết cấp hạt nhân, theo từng yêu cầu, phù hợp hơn cho việc gỡ lỗi và phân tích nguyên nhân gốc rễ."
      }
  },
  {
    _id: "ms-m-026",
    difficulty: "middle",
    tags: ["data", "event-sourcing", "snapshot"],
    content: {
      en: {
        title: "Event Sourcing Snapshotting",
        body: "In Event Sourcing, what is **Snapshotting** and what critical performance problem does it solve?",
        solution: "Snapshotting is the process of periodically saving the **current state** of an entity after replaying a certain number of events. It solves the performance problem of **slow entity hydration** by eliminating the need to replay all events from the beginning of time every time the entity is loaded."
      }
    },
    jp: {
        title: "イベントソーシングのスナップショット",
        body: "イベントソーシングにおいて、**スナップショット（Snapshotting）**とは何ですか、またそれが解決する重要なパフォーマンスの問題は何ですか？",
        solution: "スナップショットは、特定の数のイベントを再生した後、エンティティの**現在の状態**を定期的に保存するプロセスです。エンティティがロードされるたびに最初からすべてのイベントを再生する必要をなくすことにより、**遅いエンティティハイドレーション**のパフォーマンスの問題を解決します。"
      },
      vi: {
        title: "Snapshotting trong Event Sourcing",
        body: "Trong Event Sourcing, **Snapshotting** là gì và nó giải quyết vấn đề hiệu suất quan trọng nào?",
        solution: "Snapshotting là quá trình định kỳ lưu lại **trạng thái hiện tại** của một thực thể sau khi phát lại một số sự kiện nhất định. Nó giải quyết vấn đề hiệu suất của **khởi tạo thực thể chậm (slow entity hydration)** bằng cách loại bỏ nhu cầu phát lại tất cả các sự kiện từ đầu mỗi khi thực thể được tải."
      }
  },
  {
    _id: "ms-m-027",
    difficulty: "middle",
    tags: ["security", "api", "rate-limiting"],
    content: {
      en: {
        title: "Rate Limiting Strategy",
        body: "Describe the difference between **Application-level Rate Limiting** and **API Gateway Rate Limiting**, and which is better for global protection.",
        solution: "**API Gateway Rate Limiting** is applied at the entry point and is better for **global protection** against abuse (e.g., DoS attacks), using simple metrics like IP address or token. **Application-level Rate Limiting** is performed by the service itself and is better for complex, fine-grained limits based on business logic (e.g., 'A user can only create 5 posts per minute')."
      }
    },
    jp: {
        title: "レート制限戦略",
        body: "**アプリケーションレベルのレート制限**と**APIゲートウェイのレート制限**の違いを説明し、どちらがグローバル保護に適していますか？",
        solution: "**APIゲートウェイのレート制限**はエントリポイントで適用され、IPアドレスやトークンなどの単純なメトリクスを使用して悪用（例：DoS攻撃）に対する**グローバル保護**に適しています。**アプリケーションレベルのレート制限**はサービス自体によって実行され、ビジネスロジックに基づいた複雑で詳細な制限（例：「ユーザーは1分間に5つの投稿しか作成できない」）に適しています。"
      },
      vi: {
        title: "Chiến lược Rate Limiting",
        body: "Mô tả sự khác biệt giữa **Rate Limiting cấp Ứng dụng** và **Rate Limiting của API Gateway**, và cái nào tốt hơn cho bảo vệ toàn cầu.",
        solution: "**Rate Limiting của API Gateway** được áp dụng tại điểm vào và tốt hơn cho **bảo vệ toàn cầu** chống lại lạm dụng (ví dụ: tấn công DoS), sử dụng các metrics đơn giản như địa chỉ IP hoặc token. **Rate Limiting cấp Ứng dụng** được thực hiện bởi chính dịch vụ và tốt hơn cho các giới hạn phức tạp, chi tiết dựa trên logic nghiệp vụ (ví dụ: 'Người dùng chỉ có thể tạo 5 bài đăng mỗi phút')."
      }
  },
  {
    _id: "ms-m-028",
    difficulty: "middle",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Data Silos and Integration Costs",
        body: "What is the primary **long-term cost** associated with the 'Data Silos' problem in microservices (where data is isolated in separate databases)?",
        solution: "The primary long-term cost is the **high integration cost** for analytics, reporting, and complex cross-service business processes. Each time a new report is needed, a new ETL/integration pipeline must be built and maintained to combine the disparate datasets, which is complex and time-consuming."
      }
    },
    jp: {
        title: "データサイロと統合コスト",
        body: "マイクロサービスにおける「データサイロ」の問題（データが個別のデータベースに分離されている）に関連する主な**長期的なコスト**は何ですか？",
        solution: "主な長期的なコストは、分析、レポート作成、および複雑なクロスサービスビジネスプロセスに対する**高い統合コスト**です。新しいレポートが必要になるたびに、異なるデータセットを結合するために新しいETL/統合パイプラインを構築および維持する必要があり、これは複雑で時間がかかります。"
      },
      vi: {
        title: "Data Silos và Chi phí Tích hợp",
        body: "Chi phí **dài hạn** chính liên quan đến vấn đề 'Data Silos' (Dữ liệu bị cô lập trong các cơ sở dữ liệu riêng biệt) trong microservices là gì?",
        solution: "Chi phí dài hạn chính là **chi phí tích hợp cao** cho phân tích, báo cáo và các quy trình nghiệp vụ phức tạp liên dịch vụ. Mỗi khi cần một báo cáo mới, một pipeline ETL/tích hợp mới phải được xây dựng và duy trì để kết hợp các bộ dữ liệu khác nhau, điều này phức tạp và tốn thời gian."
      }
  },
  {
    _id: "ms-m-029",
    difficulty: "middle",
    tags: ["deployment", "serverless", "faas"],
    content: {
      en: {
        title: "State Management in FaaS",
        body: "When designing a service as a **Function as a Service (FaaS)** (e.g., Lambda), where should the function **never** store state, and where should it be persisted instead?",
        solution: "It should **never** store state in its **local filesystem** or in **memory** (instance memory), as these are volatile and lost when the container is shut down (often). State should be persisted in **external, durable stores** like DynamoDB, RDS, or S3."
      }
    },
    jp: {
        title: "FaaSにおける状態管理",
        body: "**Function as a Service (FaaS)**（Lambdaなど）としてサービスを設計する際、ファンクションは状態を**決して**どこに保存すべきではなく、代わりにどこに永続化されるべきですか？",
        solution: "状態を**ローカルファイルシステム**や**メモリ**（インスタンスメモリ）に**決して**保存すべきではありません。これらは揮発性であり、コンテナがシャットダウンされると失われるためです（頻繁に）。状態は、DynamoDB、RDS、またはS3などの**外部の永続的なストア**に永続化されるべきです。"
      },
      vi: {
        title: "Quản lý Trạng thái trong FaaS",
        body: "Khi thiết kế một dịch vụ dưới dạng **Function as a Service (FaaS)** (ví dụ: Lambda), hàm **không bao giờ** nên lưu trữ trạng thái ở đâu, và thay vào đó nên được lưu trữ bền vững ở đâu?",
        solution: "Nó **không bao giờ** nên lưu trữ trạng thái trong **hệ thống tệp cục bộ** hoặc trong **bộ nhớ** (bộ nhớ instance), vì chúng là tạm thời và bị mất khi container bị tắt (thường xuyên). Trạng thái nên được lưu trữ bền vững trong **các kho lưu trữ bên ngoài, bền vững** như DynamoDB, RDS hoặc S3."
      }
  },
  {
    _id: "ms-m-030",
    difficulty: "middle",
    tags: ["patterns", "gateway", "bifurcation"],
    content: {
      en: {
        title: "BFF vs API Gateway Aggregation",
        body: "In which scenario would you definitely prefer the **Backend for Frontend (BFF) Pattern** over simple data aggregation implemented directly within a generic **API Gateway**?",
        solution: "When the application has **diverse client types** (e.g., a complex Web App, a simple Mobile App, and an external third-party API). A generic Gateway cannot efficiently serve the unique data shape and communication needs of all three, requiring dedicated BFFs for each."
      }
    },
    jp: {
        title: "BFF vs APIゲートウェイ集約",
        body: "ジェネリックな**APIゲートウェイ**内で直接実装された単純なデータ集約よりも、**Backend for Frontend (BFF)パターン**を明確に好むのはどのようなシナリオですか？",
        solution: "アプリケーションが**多様なクライアントタイプ**（例：複雑なWebアプリ、単純なモバイルアプリ、外部サードパーティAPI）を持っている場合。汎用ゲートウェイは、これら3つすべての固有のデータ形状と通信ニーズを効率的に提供できず、それぞれに専用のBFFが必要になります。"
      },
      vi: {
        title: "BFF so với Tổng hợp API Gateway",
        body: "Trong trường hợp nào bạn chắc chắn sẽ ưu tiên **Backend for Frontend (BFF) Pattern** hơn việc tổng hợp dữ liệu đơn giản được triển khai trực tiếp trong một **API Gateway** chung chung?",
        solution: "Khi ứng dụng có **các loại client đa dạng** (ví dụ: một Web App phức tạp, một Mobile App đơn giản và một API bên thứ ba bên ngoài). Một Gateway chung chung không thể phục vụ hiệu quả hình dạng dữ liệu và nhu cầu giao tiếp duy nhất của cả ba, đòi hỏi các BFF chuyên dụng cho từng loại."
      }
  },
  {
    _id: "ms-m-031",
    difficulty: "middle",
    tags: ["resilience", "patterns", "design"],
    content: {
      en: {
        title: "Time-Based Circuit Breaker",
        body: "Explain how a **time-based threshold** is typically used in a Circuit Breaker pattern (e.g., half-open state) and why it's necessary.",
        solution: "After the circuit opens, it waits for a **fixed time period** (time-based threshold) before switching to the **half-open** state. This waiting time is necessary to give the underlying failing service a chance to recover without being immediately overwhelmed by new requests."
      }
    },
    jp: {
        title: "時間ベースのサーキットブレーカー",
        body: "**時間ベースのしきい値**は、サーキットブレーカーパターン（例：ハーフオープン状態）で通常どのように使用され、なぜそれが必要なのですか？",
        solution: "回路が開いた後、**固定された期間**（時間ベースのしきい値）待機してから**ハーフオープン**状態に切り替わります。この待機時間は、基盤となる失敗しているサービスに、新しいリクエストによってすぐに圧倒されることなく回復する機会を与えるために必要です。"
      },
      vi: {
        title: "Circuit Breaker dựa trên Thời gian",
        body: "Giải thích cách một **ngưỡng dựa trên thời gian** thường được sử dụng trong mô hình Circuit Breaker (ví dụ: trạng thái half-open) và tại sao nó cần thiết.",
        solution: "Sau khi mạch mở, nó đợi một **khoảng thời gian cố định** (ngưỡng dựa trên thời gian) trước khi chuyển sang trạng thái **half-open**. Thời gian chờ đợi này là cần thiết để cho dịch vụ đang bị lỗi cơ bản có cơ hội phục hồi mà không bị áp đảo ngay lập tức bởi các yêu cầu mới."
      }
  },
  {
    _id: "ms-m-032",
    difficulty: "middle",
    tags: ["data", "transaction", "compensation"],
    content: {
      en: {
        title: "Orchestration Saga Failure Handling",
        body: "In an Orchestration-based Saga, where does the logic for handling a failed step (and triggering compensation) reside, and what is the benefit of this centralized control?",
        solution: "The logic resides entirely within the **Saga Coordinator service**. The benefit is that it provides a **clear overview** and centralized control over the complex, multi-step distributed transaction, making it easier to monitor, debug, and implement the compensation logic."
      }
    },
    jp: {
        title: "オーケストレーションSagaの障害処理",
        body: "オーケストレーションベースのSagaにおいて、失敗したステップを処理する（および補償をトリガーする）ロジックはどこに存在し、この集中制御の利点は何ですか？",
        solution: "ロジックは完全に**Sagaコーディネーターサービス**内に存在します。利点は、複雑な多段階分散トランザクションに対する**明確な概要**と集中制御を提供し、監視、デバッグ、および補償ロジックの実装を容易にすることです。"
      },
      vi: {
        title: "Xử lý Lỗi trong Orchestration Saga",
        body: "Trong Orchestration-based Saga, logic xử lý một bước bị lỗi (và kích hoạt bồi thường) nằm ở đâu, và lợi ích của việc kiểm soát tập trung này là gì?",
        solution: "Logic nằm hoàn toàn trong **dịch vụ Saga Coordinator**. Lợi ích là nó cung cấp **cái nhìn tổng quan rõ ràng** và kiểm soát tập trung đối với giao dịch phân tán phức tạp, nhiều bước, giúp dễ dàng giám sát, gỡ lỗi và triển khai logic bồi thường."
      }
  },
  {
    _id: "ms-m-033",
    difficulty: "middle",
    tags: ["communication", "async", "event"],
    content: {
      en: {
        title: "Event vs Command vs Document",
        body: "Differentiate between an **Event**, a **Command**, and a **Document** when communicating via a message broker.",
        solution: "An **Event** is a past occurrence ('UserCreated'), passive, and broadcast. A **Command** is an instruction to do something ('CreateOrder'), active, and targeted at a specific service. A **Document** is just a simple data transfer object (DTO) that holds static data, often used in request/response payloads or as a persistent message body."
      }
    },
    jp: {
        title: "イベント vs コマンド vs ドキュメント",
        body: "メッセージブローカーを介して通信する際の、**イベント**、**コマンド**、および**ドキュメント**の違いを区別してください。",
        solution: "**イベント**は過去の出来事（「UserCreated」）、受動的であり、ブロードキャストされます。**コマンド**は何かをするための指示（「CreateOrder」）、能動的であり、特定のサービスをターゲットとします。**ドキュメント**は単に静的データを保持する単純なデータ転送オブジェクト（DTO）であり、リクエスト/レスポンスペイロードや永続的なメッセージボディとしてよく使用されます。"
      },
      vi: {
        title: "Event so với Command so với Document",
        body: "Phân biệt giữa **Event (Sự kiện)**, **Command (Lệnh)** và **Document (Tài liệu)** khi giao tiếp qua một message broker.",
        solution: "**Event** là một sự việc đã xảy ra ('UserCreated'), thụ động và được phát sóng. **Command** là một lệnh phải làm gì đó ('CreateOrder'), chủ động và nhắm vào một dịch vụ cụ thể. **Document** chỉ là một đối tượng truyền dữ liệu đơn giản (DTO) chứa dữ liệu tĩnh, thường được sử dụng trong các payloads yêu cầu/phản hồi hoặc làm thân tin nhắn bền vững."
      }
  },
  {
    _id: "ms-m-034",
    difficulty: "middle",
    tags: ["networking", "deployment", "k8s"],
    content: {
      en: {
        title: "Headless Services in Kubernetes",
        body: "In Kubernetes, what is a **Headless Service**, and why might it be used specifically for stateful microservices or databases?",
        solution: "A Headless Service is a Service that **does not have a Cluster IP** and does not provide load balancing. Instead, it allows clients to directly discover and connect to the individual Pods/instances via their distinct DNS entries. This is essential for **StatefulSets** (stateful services) where clients need to connect to a *specific* replica (e.g., the primary database node)."
      }
    },
    jp: {
        title: "Kubernetesのヘッドレスサービス",
        body: "Kubernetesにおいて、**ヘッドレスサービス**とは何ですか、またステートフルマイクロサービスやデータベースに特に使用されるのはなぜですか？",
        solution: "ヘッドレスサービスは、**クラスタIPを持たない**サービスであり、ロードバランシングを提供しません。代わりに、クライアントが個別のDNSエントリを介して個々のPod/インスタンスに直接発見および接続できるようにします。これは、クライアントが*特定の*レプリカ（例：プライマリデータベースノード）に接続する必要がある**StatefulSets**（ステートフルサービス）にとって不可欠です。"
      },
      vi: {
        title: "Headless Services trong Kubernetes",
        body: "Trong Kubernetes, **Headless Service** là gì, và tại sao nó có thể được sử dụng đặc biệt cho các microservices có trạng thái (stateful) hoặc cơ sở dữ liệu?",
        solution: "Headless Service là một Service **không có Cluster IP** và không cung cấp cân bằng tải. Thay vào đó, nó cho phép client trực tiếp khám phá và kết nối với các Pod/instance riêng lẻ thông qua các mục DNS riêng biệt của chúng. Điều này rất cần thiết cho **StatefulSets** (các dịch vụ có trạng thái) nơi client cần kết nối với một bản sao *cụ thể* (ví dụ: node cơ sở dữ liệu chính)."
      }
  },
  {
    _id: "ms-m-035",
    difficulty: "middle",
    tags: ["testing", "e2e", "integration"],
    content: {
      en: {
        title: "Testing Pyramid Inversion",
        body: "Why does the traditional 'Testing Pyramid' tend to become inverted (more Integration/End-to-End tests) in poorly designed microservices architectures?",
        solution: "The inversion happens when service boundaries are **poorly defined** (high coupling). This forces developers to rely on slow, brittle integration tests to validate cross-service behavior because they cannot trust their service works in isolation or that other services will maintain their contracts."
      }
    },
    jp: {
        title: "テストピラミッドの反転",
        body: "設計の悪いマイクロサービスアーキテクチャでは、従来の「テストピラミッド」が反転する（より多くの統合/エンドツーエンドテストになる）傾向があるのはなぜですか？",
        solution: "反転は、サービスの境界が**不十分に定義されている**（結合度が高い）場合に発生します。これにより、開発者は、自分のサービスが単独で機能することを信頼できない、または他のサービスが契約を維持することを信頼できないため、クロスサービスの動作を検証するために遅く、壊れやすい統合テストに依存せざるを得なくなります。"
      },
      vi: {
        title: "Đảo ngược Tháp Kiểm thử",
        body: "Tại sao 'Tháp Kiểm thử' truyền thống có xu hướng bị đảo ngược (nhiều bài kiểm thử Integration/End-to-End hơn) trong các kiến trúc microservices được thiết kế kém?",
        solution: "Sự đảo ngược xảy ra khi ranh giới dịch vụ **được xác định kém** (gắn kết cao). Điều này buộc các nhà phát triển phải dựa vào các bài kiểm thử tích hợp chậm, dễ hỏng để xác thực hành vi giữa các dịch vụ vì họ không thể tin tưởng dịch vụ của mình hoạt động độc lập hoặc các dịch vụ khác sẽ duy trì hợp đồng của chúng."
      }
  },
  {
    _id: "ms-m-036",
    difficulty: "middle",
    tags: ["patterns", "gateway", "service-mesh"],
    content: {
      en: {
        title: "Service Mesh: Decoupling and Language Agnostic",
        body: "Explain how the **Service Mesh** pattern achieves **language-agnostic** operation and why this is a major benefit for microservices.",
        solution: "The sidecar proxies (e.g., Envoy) are deployed next to every service, regardless of the service's language (Java, Python, Go). These proxies, written in a neutral language (like C++ or Go), handle all networking concerns. This allows development teams to use the **best-fit language** for their service without having to reimplement features like mTLS or tracing for every language."
      },
      jp: {
        title: "サービスメッシュ：疎結合と言語非依存",
        body: "**サービスメッシュ**パターンは、どのように**言語非依存**の操作を達成し、これがマイクロサービスにとって主要な利点となるのはなぜですか？",
        solution: "サイドカープロキシ（Envoyなど）は、サービスの言語（Java、Python、Go）に関係なく、すべてのサービスの隣にデプロイされます。ニュートラルな言語（C++やGoなど）で書かれたこれらのプロキシがすべてのネットワーキングの懸念を処理します。これにより、開発チームは、すべての言語でmTLSやトレーシングなどの機能を再実装することなく、サービスに**最適な言語**を使用できます。"
      },
      vi: {
        title: "Service Mesh: Tách rời và Độc lập Ngôn ngữ",
        body: "Giải thích cách mô hình **Service Mesh** đạt được hoạt động **độc lập ngôn ngữ (language-agnostic)** và tại sao đây là một lợi ích lớn cho microservices.",
        solution: "Các proxy sidecar (ví dụ: Envoy) được triển khai bên cạnh mọi dịch vụ, bất kể ngôn ngữ của dịch vụ đó (Java, Python, Go). Các proxy này, được viết bằng một ngôn ngữ trung lập (như C++ hoặc Go), xử lý tất cả các vấn đề mạng. Điều này cho phép các đội phát triển sử dụng **ngôn ngữ phù hợp nhất** cho dịch vụ của họ mà không cần phải triển khai lại các tính năng như mTLS hoặc tracing cho mọi ngôn ngữ."
      }
    }
  },
  {
    _id: "ms-m-037",
    difficulty: "middle",
    tags: ["resilience", "patterns", "load-balancing"],
    content: {
      en: {
        title: "Load Balancing Algorithms",
        body: "Name and briefly describe two common **load balancing algorithms** used for microservice traffic distribution.",
        solution: "1. **Round Robin**: Distributes requests sequentially and cyclically to each service instance (simplest, good for equal capacity). 2. **Least Connection**: Routes requests to the instance with the fewest currently active connections (better for uneven processing times/capacity). (Other: Least Response Time, Weighted Round Robin)."
      }
    },
    jp: {
        title: "ロードバランシングアルゴリズム",
        body: "マイクロサービストラフィック分散に使用される一般的な**ロードバランシングアルゴリズム**を2つ挙げ、それぞれ簡潔に説明してください。",
        solution: "1. **ラウンドロビン（Round Robin）**：リクエストを各サービスインスタンスに順番に、循環的に分散します（最も単純で、容量が等しい場合に適しています）。 2. **最小接続（Least Connection）**：現在アクティブな接続が最も少ないインスタンスにリクエストをルーティングします（処理時間/容量が不均一な場合に適しています）。（その他：最小応答時間、重み付きラウンドロビン）。"
      },
      vi: {
        title: "Thuật toán Cân bằng tải",
        body: "Kể tên và mô tả ngắn gọn hai **thuật toán cân bằng tải** phổ biến được sử dụng để phân phối lưu lượng microservice.",
        solution: "1. **Round Robin**: Phân phối các yêu cầu tuần tự và luân phiên đến từng instance dịch vụ (đơn giản nhất, tốt cho khả năng bằng nhau). 2. **Least Connection (Kết nối Ít nhất)**: Định tuyến yêu cầu đến instance có ít kết nối đang hoạt động nhất hiện tại (tốt hơn cho thời gian xử lý/khả năng không đồng đều). (Khác: Least Response Time, Weighted Round Robin)."
      }
  },
  {
    _id: "ms-m-038",
    difficulty: "middle",
    tags: ["data", "consistency", "transactional-outbox"],
    content: {
      en: {
        title: "Transactional Outbox Implementation",
        body: "How is the **Transactional Outbox Pattern** typically implemented to ensure atomicity, and what separate process is needed to complete the event publishing?",
        solution: "Implementation: The business update and the insertion of the event into an **Outbox table** occur within a single **local database transaction**. Separate Process: A **Message Relayer** (a dedicated process/service like Debezium or a poll-based worker) reads the events from the Outbox table and publishes them to the message broker."
      }
    },
    jp: {
        title: "トランザクショナルアウトボックスの実装",
        body: "**トランザクショナルアウトボックスパターン**は、原子性を確保するために通常どのように実装されますか、またイベント発行を完了するために必要な別のプロセスは何ですか？",
        solution: "実装：ビジネス更新と**アウトボックステーブル**へのイベントの挿入は、単一の**ローカルデータベーストランザクション**内で発生します。別のプロセス：**メッセージリレーヤー**（Debeziumやポーリングベースのワーカーなどの専用プロセス/サービス）がアウトボックステーブルからイベントを読み取り、メッセージブローカーに発行します。"
      },
      vi: {
        title: "Triển khai Transactional Outbox",
        body: "**Transactional Outbox Pattern** thường được triển khai như thế nào để đảm bảo tính nguyên tử (atomicity), và quy trình riêng biệt nào là cần thiết để hoàn tất việc xuất bản sự kiện?",
        solution: "Triển khai: Việc cập nhật nghiệp vụ và việc chèn sự kiện vào **bảng Outbox** xảy ra trong một **giao dịch cơ sở dữ liệu cục bộ** duy nhất. Quy trình Riêng biệt: Một **Message Relayer** (một quy trình/dịch vụ chuyên dụng như Debezium hoặc một worker dựa trên polling) đọc các sự kiện từ bảng Outbox và xuất bản chúng đến message broker."
      }
  },
  {
    _id: "ms-m-039",
    difficulty: "middle",
    tags: ["security", "api", "vulnerability"],
    content: {
      en: {
        title: "Security: Internal Service Exposure",
        body: "Why is it a major security vulnerability to expose internal service management endpoints (like `/actuator/env` in Spring Boot) directly via the API Gateway, and how should this be restricted?",
        solution: "These endpoints often expose **sensitive configuration** (passwords, internal IPs) or allow state modification. They must be restricted by the **API Gateway** or **Service Mesh** to only be accessible from a **private/internal network** or by specific, highly privileged admin users, never publicly."
      }
    },
    jp: {
        title: "セキュリティ：内部サービス公開",
        body: "内部サービス管理エンドポイント（Spring Bootの`/actuator/env`など）をAPIゲートウェイ経由で直接公開することが主要なセキュリティ脆弱性であるのはなぜですか、またこれはどのように制限されるべきですか？",
        solution: "これらのエンドポイントは、しばしば**機密性の高い構成**（パスワード、内部IP）を公開したり、状態の変更を許可したりします。それらは**APIゲートウェイ**または**サービスメッシュ**によって、**プライベート/内部ネットワーク**からのみアクセス可能であるか、特定の高度な特権を持つ管理者ユーザーによってのみアクセス可能であるように制限される必要があり、決して公開すべきではありません。"
      },
      vi: {
        title: "Bảo mật: Phơi bày Dịch vụ Nội bộ",
        body: "Tại sao việc phơi bày các endpoint quản lý dịch vụ nội bộ (như `/actuator/env` trong Spring Boot) trực tiếp qua API Gateway là một lỗ hổng bảo mật lớn, và điều này nên được hạn chế như thế nào?",
        solution: "Các endpoint này thường tiết lộ **cấu hình nhạy cảm** (mật khẩu, IP nội bộ) hoặc cho phép sửa đổi trạng thái. Chúng phải được hạn chế bởi **API Gateway** hoặc **Service Mesh** để chỉ có thể truy cập từ một **mạng riêng/nội bộ** hoặc bởi những người dùng quản trị có đặc quyền cao cụ thể, không bao giờ được công khai."
      }
  },
  {
    _id: "ms-m-040",
    difficulty: "middle",
    tags: ["observability", "metrics", "alerts"],
    content: {
      en: {
        title: "Alerting on SLI/SLO",
        body: "When defining an alert strategy for a microservice, what is the best practice for setting an alert based on an SLO failure, rather than just raw resource utilization (e.g., CPU)?",
        solution: "Best practice is to alert based on the **Service Level Indicator (SLI)** that measures the SLO (e.g., alert when 99th percentile latency exceeds 500ms). This ensures you are alerted only when the **user experience** is actually impacted, reducing 'noisy' alerts from high CPU/memory that don't affect performance."
      }
    },
    jp: {
        title: "SLI/SLOに基づくアラート",
        body: "マイクロサービスのアラート戦略を定義する際、単なる生の​​リソース利用率（例：CPU）ではなく、SLOの失敗に基づいてアラートを設定するためのベストプラクティスは何ですか？",
        solution: "ベストプラクティスは、SLOを測定する**サービスレベルインジケーター（SLI）**に基づいてアラートを設定することです（例：99パーセンタイルのレイテンシが500msを超えたときにアラート）。これにより、**ユーザーエクスペリエンス**が実際に影響を受けた場合にのみアラートが送信され、パフォーマンスに影響しない高いCPU/メモリによる「ノイズの多い」アラートが減少します。"
      },
      vi: {
        title: "Cảnh báo dựa trên SLI/SLO",
        body: "Khi xác định chiến lược cảnh báo cho microservice, thực tiễn tốt nhất để đặt cảnh báo dựa trên lỗi SLO, thay vì chỉ dựa trên việc sử dụng tài nguyên thô (ví dụ: CPU) là gì?",
        solution: "Thực tiễn tốt nhất là cảnh báo dựa trên **Service Level Indicator (SLI)** đo lường SLO (ví dụ: cảnh báo khi độ trễ phân vị thứ 99 vượt quá 500ms). Điều này đảm bảo bạn chỉ được cảnh báo khi **trải nghiệm người dùng** thực sự bị ảnh hưởng, giảm các cảnh báo 'ồn ào' từ CPU/bộ nhớ cao mà không ảnh hưởng đến hiệu suất."
      }
  },
  {
    _id: "ms-m-041",
    difficulty: "middle",
    tags: ["data", "polyglot", "domain"],
    content: {
      en: {
        title: "Polyglot Persistence Justification",
        body: "Give an example of two microservices where using different database technologies (**polyglot persistence**) is justifiable, and name the appropriate database types.",
        solution: "Example 1: A **Product Catalog** service benefits from a **NoSQL Document Database** (like MongoDB) for flexible product schemas. Example 2: A **Transaction/Ledger** service requires strong ACID properties and benefits from a **Relational Database** (like Postgres) for financial integrity. (Justification: Each database is best fit for the service's specific data characteristics and query patterns)."
      }
    },
    jp: {
        title: "多言語永続化の正当性",
        body: "異なるデータベース技術（**多言語永続性**）の使用が正当化される2つのマイクロサービスの例を挙げ、適切なデータベースタイプを挙げてください。",
        solution: "例1：**製品カタログ**サービスは、柔軟な製品スキーマのために**NoSQLドキュメントデータベース**（MongoDBなど）の恩恵を受けます。例2：**トランザクション/台帳**サービスは、強力なACID特性を必要とし、財務上の整合性のために**リレーショナルデータベース**（Postgresなど）の恩恵を受けます。（正当性：各データベースは、サービスの特定のデータ特性とクエリパターンに最適です）。"
      },
      vi: {
        title: "Biện minh cho Polyglot Persistence",
        body: "Đưa ra một ví dụ về hai microservices mà việc sử dụng các công nghệ cơ sở dữ liệu khác nhau (**polyglot persistence**) là hợp lý, và kể tên các loại cơ sở dữ liệu thích hợp.",
        solution: "Ví dụ 1: Dịch vụ **Danh mục Sản phẩm** được hưởng lợi từ **Cơ sở dữ liệu Tài liệu NoSQL** (như MongoDB) cho các lược đồ sản phẩm linh hoạt. Ví dụ 2: Dịch vụ **Giao dịch/Sổ cái** yêu cầu các thuộc tính ACID mạnh và được hưởng lợi từ **Cơ sở dữ liệu Quan hệ** (như Postgres) cho tính toàn vẹn tài chính. (Biện minh: Mỗi cơ sở dữ liệu phù hợp nhất với đặc điểm dữ liệu và mô hình truy vấn cụ thể của dịch vụ)."
      }
  },
  {
    _id: "ms-m-042",
    difficulty: "middle",
    tags: ["communication", "async", "stream"],
    content: {
      en: {
        title: "Event Stream vs Request/Response",
        body: "What is the key advantage of **Event Streaming** (e.g., using Kafka) over traditional REST **Request/Response** when integrating a downstream service that needs to react to changes from many different upstream services?",
        solution: "Event Streaming allows the downstream service to **passively subscribe** to a central stream, simplifying integration. With Request/Response, the downstream service would need to manage **many synchronous calls** to all upstream services and implement complex polling or webhooks logic, leading to tight coupling."
      }
    },
    jp: {
        title: "イベントストリーム vs リクエスト/レスポンス",
        body: "多くの異なるアップストリームサービスからの変更に反応する必要があるダウンストリームサービスを統合する場合、従来のRESTの**リクエスト/レスポンス**と比較して**イベントストリーミング**（Kafkaの使用など）の主な利点は何ですか？",
        solution: "イベントストリーミングにより、ダウンストリームサービスは中央ストリームに**受動的にサブスクライブ**でき、統合が簡素化されます。リクエスト/レスポンスでは、ダウンストリームサービスはすべてのアップストリームサービスへの**多くの同期呼び出し**を管理し、複雑なポーリングまたはウェブフックロジックを実装する必要があり、密結合につながります。"
      },
      vi: {
        title: "Event Stream so với Request/Response",
        body: "Lợi thế chính của **Event Streaming** (ví dụ: sử dụng Kafka) so với **Request/Response** REST truyền thống là gì khi tích hợp một dịch vụ downstream cần phản ứng với các thay đổi từ nhiều dịch vụ upstream khác nhau?",
        solution: "Event Streaming cho phép dịch vụ downstream **đăng ký thụ động** vào một luồng trung tâm, đơn giản hóa việc tích hợp. Với Request/Response, dịch vụ downstream sẽ cần quản lý **nhiều lời gọi đồng bộ** đến tất cả các dịch vụ upstream và triển khai logic polling hoặc webhooks phức tạp, dẫn đến gắn kết chặt chẽ."
      }
  },
  {
    _id: "ms-m-043",
    difficulty: "middle",
    tags: ["architecture", "domain", "ddd"],
    content: {
      en: {
        title: "Context Map Patterns",
        body: "Name three different patterns used in a **Context Map** (besides Shared Kernel and ACL) to describe the relationship between Bounded Contexts.",
        solution: "1. **Customer/Supplier**: One context (Supplier) dictates the API contract, and the other (Customer) follows it. 2. **Conformist**: The Downstream service adopts the Upstream service's domain model entirely (no ACL). 3. **Separate Ways**: The two contexts have no relationship, solving the same problem differently, usually because integration is not cost-effective."
      }
    },
    jp: {
        title: "コンテキストマップのパターン",
        body: "**コンテキストマップ**で使用される3つの異なるパターン（共有カーネルとACL以外）を挙げて、境界付けられたコンテキスト間の関係を説明してください。",
        solution: "1. **顧客/サプライヤー（Customer/Supplier）**：一方のコンテキスト（サプライヤー）がAPI契約を決定し、もう一方（顧客）がそれに従います。 2. **コンフォーミスト（Conformist）**：ダウンストリームサービスがアップストリームサービスのドメインモデルを完全に採用します（ACLなし）。 3. **分離された道（Separate Ways）**：2つのコンテキストに関係がなく、通常は統合が費用対効果が高くないため、同じ問題を異なる方法で解決します。"
      },
      vi: {
        title: "Các Mô hình Context Map",
        body: "Kể tên ba mô hình khác nhau được sử dụng trong **Context Map** (ngoài Shared Kernel và ACL) để mô tả mối quan hệ giữa các Bounded Contexts.",
        solution: "1. **Customer/Supplier (Khách hàng/Nhà cung cấp)**: Một context (Nhà cung cấp) quy định hợp đồng API, và context kia (Khách hàng) tuân theo. 2. **Conformist (Người tuân thủ)**: Dịch vụ Downstream chấp nhận hoàn toàn mô hình miền của dịch vụ Upstream (không có ACL). 3. **Separate Ways (Đường riêng)**: Hai context không có mối quan hệ, giải quyết cùng một vấn đề một cách khác nhau, thường là do việc tích hợp không hiệu quả về chi phí."
      }
  },
  {
    _id: "ms-m-044",
    difficulty: "middle",
    tags: ["deployment", "orchestration", "k8s"],
    content: {
      en: {
        title: "Kubernetes Affinity/Anti-Affinity",
        body: "When deploying a high-availability microservice in Kubernetes, what is the purpose of configuring **Pod Anti-Affinity**?",
        solution: "Pod Anti-Affinity is used to ensure that replicas of the **same service are scheduled onto different physical nodes/hosts**. This prevents a single node failure from bringing down all instances of the service, increasing fault tolerance and availability."
      }
    },
    jp: {
        title: "Kubernetesのアフィニティ/アンチアフィニティ",
        body: "Kubernetesで高可用性マイクロサービスをデプロイする際、**Podアンチアフィニティ**を構成する目的は何ですか？",
        solution: "Podアンチアフィニティは、**同じサービス**のレプリカが**異なる物理ノード/ホスト**にスケジュールされるようにするために使用されます。これにより、単一のノード障害がサービス​​のすべてのインスタンスを停止させるのを防ぎ、フォールトトレランスと可用性を向上させます。"
      },
      vi: {
        title: "Kubernetes Affinity/Anti-Affinity",
        body: "Khi triển khai microservice có tính sẵn sàng cao trong Kubernetes, mục đích của việc cấu hình **Pod Anti-Affinity** là gì?",
        solution: "Pod Anti-Affinity được sử dụng để đảm bảo rằng các bản sao của **cùng một dịch vụ** được lên lịch trên **các node/host vật lý khác nhau**. Điều này ngăn chặn một lỗi node duy nhất làm sập tất cả các instance của dịch vụ, tăng khả năng chịu lỗi và tính sẵn sàng."
      }
  },
  {
    _id: "ms-m-045",
    difficulty: "middle",
    tags: ["resilience", "patterns", "hysterics"],
    content: {
      en: {
        title: "Difference between Bulkhead and Circuit Breaker",
        body: "While both improve resilience, how does the **Bulkhead Pattern** differ fundamentally from the **Circuit Breaker Pattern**?",
        solution: "**Bulkhead** is a **resource isolation** pattern that prevents one failure from consuming all shared resources (e.g., dedicated thread pools). **Circuit Breaker** is a **fail fast** pattern that detects failure and **stops calling** the remote service entirely for a period, preventing the client from wasting resources on a known failure."
      }
    },
    jp: {
        title: "バルクヘッドとサーキットブレーカーの違い",
        body: "どちらも回復力を向上させますが、**バルクヘッドパターン**は**サーキットブレーカーパターン**と根本的にどのように異なりますか？",
        solution: "**バルクヘッド**は、1つの障害がすべての共有リソースを消費するのを防ぐ**リソース分離**パターンです（例：専用スレッドプール）。**サーキットブレーカー**は、障害を検出し、一定期間リモートサービスへの**呼び出しを完全に停止**する**フェイルファスト**パターンであり、クライアントが既知の障害にリソースを浪費するのを防ぎます。"
      },
      vi: {
        title: "Sự khác biệt giữa Bulkhead và Circuit Breaker",
        body: "Mặc dù cả hai đều cải thiện khả năng chịu lỗi, **Bulkhead Pattern** khác biệt cơ bản so với **Circuit Breaker Pattern** như thế nào?",
        solution: "**Bulkhead** là một mô hình **cô lập tài nguyên** ngăn chặn một lỗi tiêu thụ tất cả tài nguyên dùng chung (ví dụ: nhóm luồng chuyên dụng). **Circuit Breaker** là một mô hình **thất bại nhanh (fail fast)** phát hiện lỗi và **ngừng gọi** hoàn toàn dịch vụ từ xa trong một khoảng thời gian, ngăn client lãng phí tài nguyên vào một lỗi đã biết."
      }
  },
  {
    _id: "ms-m-046",
    difficulty: "middle",
    tags: ["security", "auth", "tls"],
    content: {
      en: {
        title: "Terminating TLS at Gateway",
        body: "What is meant by **'Terminating TLS at the API Gateway'**, and what is a potential security risk if this is done without proper internal protection?",
        solution: "It means the API Gateway **decrypts incoming HTTPS traffic** and communicates with the backend services using **unencrypted HTTP**. Risk: If the internal network is not fully trusted, an attacker who breaches the perimeter can **eavesdrop** on unencrypted service-to-service communication. (Mitigation: Use mTLS for internal communication)."
      }
    },
    jp: {
        title: "ゲートウェイでのTLS終端",
        body: "**「APIゲートウェイでのTLS終端」**とはどういう意味ですか、また適切な内部保護なしでこれが行われた場合の潜在的なセキュリティリスクは何ですか？",
        solution: "APIゲートウェイが**受信したHTTPSトラフィックを復号化**し、**暗号化されていないHTTP**を使用してバックエンドサービスと通信することを意味します。リスク：内部ネットワークが完全に信頼されていない場合、境界を突破した攻撃者が暗号化されていないサービス間通信を**盗聴**する可能性があります。（軽減策：内部通信にmTLSを使用する）。"
      },
      vi: {
        title: "Chấm dứt TLS tại Gateway",
        body: "Ý nghĩa của việc **'Chấm dứt TLS tại API Gateway'** là gì, và rủi ro bảo mật tiềm ẩn nếu điều này được thực hiện mà không có sự bảo vệ nội bộ thích hợp là gì?",
        solution: "Nó có nghĩa là API Gateway **giải mã lưu lượng HTTPS đến** và giao tiếp với các dịch vụ backend bằng cách sử dụng **HTTP không mã hóa**. Rủi ro: Nếu mạng nội bộ không được tin cậy hoàn toàn, kẻ tấn công đột nhập vào vành đai có thể **nghe lén** giao tiếp giữa các dịch vụ không mã hóa. (Giảm thiểu: Sử dụng mTLS cho giao tiếp nội bộ)."
      }
  },
  {
    _id: "ms-m-047",
    difficulty: "middle",
    tags: ["data", "consistency", "domain"],
    content: {
      en: {
        title: "Domain Event Definition",
        body: "What is a **Domain Event**, and how does it differ from a simple technical event (like 'LogMessage') in the context of microservices messaging?",
        solution: "A Domain Event is an event that represents a **significant change** in the business state of a Bounded Context, and it's expressed in the Ubiquitous Language ('OrderPlaced', 'PaymentFailed'). A technical event is about infrastructure (e.g., 'CPUHigh') and does not carry business meaning."
      }
    },
    jp: {
        title: "ドメインイベントの定義",
        body: "**ドメインイベント**とは何ですか、またマイクロサービスメッセージングのコンテキストにおいて、単純な技術的イベント（「LogMessage」など）とどのように異なりますか？",
        solution: "ドメインイベントは、境界付けられたコンテキストのビジネス状態における**重要な変化**を表すイベントであり、ユビキタス言語で表現されます（「OrderPlaced」、「PaymentFailed」）。技術的イベントはインフラストラクチャに関するものであり（例：「CPUHigh」）、ビジネス上の意味を持ちません。"
      },
      vi: {
        title: "Định nghĩa Domain Event",
        body: "**Domain Event (Sự kiện Miền)** là gì, và nó khác với một sự kiện kỹ thuật đơn giản (như 'LogMessage') trong bối cảnh nhắn tin microservices như thế nào?",
        solution: "Domain Event là một sự kiện đại diện cho **một thay đổi đáng kể** trong trạng thái nghiệp vụ của một Bounded Context, và nó được thể hiện bằng Ngôn ngữ Phổ biến ('OrderPlaced', 'PaymentFailed'). Một sự kiện kỹ thuật là về cơ sở hạ tầng (ví dụ: 'CPUHigh') và không mang ý nghĩa nghiệp vụ."
      }
  },
  {
    _id: "ms-m-048",
    difficulty: "middle",
    tags: ["deployment", "traffic", "testing"],
    content: {
      en: {
        title: "Shadow Traffic / Traffic Mirroring",
        body: "What is the primary purpose of **Shadow Traffic (or Traffic Mirroring)** when testing a new microservice version, and what danger must be avoided?",
        solution: "Purpose: To send a **copy of live production traffic** to the new service version for non-intrusive load/behavior testing. Danger: The new service must **never execute destructive side effects** on the shadow traffic (e.g., it must not process a payment or create a real user account), so all writes must be safely discarded or routed to dummy resources."
      }
    },
    jp: {
        title: "シャドウトラフィック/トラフィックミラーリング",
        body: "新しいマイクロサービスバージョンをテストする際の**シャドウトラフィック（またはトラフィックミラーリング）**の主な目的は何ですか、またどの危険を避けなければなりませんか？",
        solution: "目的：本番環境のライブトラフィックの**コピー**を新しいサービスバージョンに送信し、非侵入型の負荷/動作テストを行うことです。危険：新しいサービスは、シャドウトラフィックで**破壊的な副作用を決して実行してはならない**（例：支払いを処理したり、実際のユーザーアカウントを作成したりしてはならない）ため、すべての書き込みは安全に破棄されるか、ダミーリソースにルーティングされる必要があります。"
      },
      vi: {
        title: "Shadow Traffic / Traffic Mirroring",
        body: "Mục đích chính của **Shadow Traffic (hoặc Traffic Mirroring)** khi kiểm thử một phiên bản microservice mới là gì, và nguy hiểm nào phải tránh?",
        solution: "Mục đích: Gửi một **bản sao của lưu lượng truy cập sản xuất trực tiếp** đến phiên bản dịch vụ mới để kiểm thử tải/hành vi không xâm lấn. Nguy hiểm: Dịch vụ mới **không bao giờ được thực hiện các tác dụng phụ phá hoại** trên shadow traffic (ví dụ: nó không được xử lý thanh toán hoặc tạo tài khoản người dùng thực), vì vậy tất cả các thao tác ghi phải được loại bỏ an toàn hoặc được định tuyến đến các tài nguyên giả."
      }
  },
  {
    _id: "ms-m-049",
    difficulty: "middle",
    tags: ["resilience", "patterns", "design"],
    content: {
      en: {
        title: "Leaky Abstractions in Microservices",
        body: "Give an example of a **'Leaky Abstraction'** in a microservices system where an internal detail of one service leaks to its client, and explain the negative impact.",
        solution: "Example: A service client receiving a **low-level database error code** (like 'SQL-301: Lock Timeout') from a downstream service instead of a business-meaningful error (like 'ProductNotAvailable'). Negative Impact: The client becomes **tightly coupled** to the provider's internal persistence technology, breaking the service autonomy principle."
      }
    },
    jp: {
        title: "マイクロサービスにおける抽象化のリーク",
        body: "あるサービス​​の内部詳細がそのクライアントにリークする、マイクロサービスシステムにおける**「抽象化のリーク（Leaky Abstraction）」**の例を挙げ、その悪影響を説明してください。",
        solution: "例：ダウンストリームサービスから、ビジネス上の意味のあるエラー（例：「ProductNotAvailable」）の代わりに、**低レベルのデータベースエラーコード**（例：「SQL-301：ロックタイムアウト」）を受け取るサービス​​クライアント。悪影響：クライアントはプロバイダーの内部永続化技術に**密結合**になり、サービス自律性の原則が破られます。"
      },
      vi: {
        title: "Leaky Abstractions trong Microservices",
        body: "Đưa ra một ví dụ về **'Leaky Abstraction' (Trừu tượng bị Rò rỉ)** trong hệ thống microservices, nơi một chi tiết nội bộ của một dịch vụ bị rò rỉ sang client của nó, và giải thích tác động tiêu cực.",
        solution: "Ví dụ: Một client dịch vụ nhận được **mã lỗi cơ sở dữ liệu cấp thấp** (như 'SQL-301: Lock Timeout') từ một dịch vụ downstream thay vì một lỗi có ý nghĩa nghiệp vụ (như 'ProductNotAvailable'). Tác động tiêu cực: Client trở nên **gắn kết chặt chẽ** với công nghệ lưu trữ nội bộ của nhà cung cấp, phá vỡ nguyên tắc tự chủ dịch vụ."
      }
  },
  {
    _id: "ms-m-050",
    difficulty: "middle",
    tags: ["deployment", "networking", "service-mesh"],
    content: {
      en: {
        title: "Load Shedding",
        body: "What is the goal of **Load Shedding (or Admission Control)** in microservices, and when is it necessary?",
        solution: "Goal: To **reject excess incoming requests** when a service is severely overloaded, maintaining the performance and stability of the service for the requests it can handle. It is necessary when the service is nearing saturation and continuing to accept new traffic would lead to **catastrophic latency or failure** for all users."
      }
    },
    jp: {
        title: "負荷軽減（Load Shedding）",
        body: "マイクロサービスにおける**負荷軽減（またはAdmission Control）**の目的は何ですか、またそれはいつ必要ですか？",
        solution: "目的：サービスが深刻に過負荷になっているときに**過剰な着信リクエストを拒否**し、サービスが処理できるリクエストについてはそのパフォーマンスと安定性を維持することです。サービスが飽和に近づいており、新しいトラフィックを受け入れ続けると、すべてのユーザーにとって**壊滅的なレイテンシまたは障害**につながる場合に必要です。"
      },
      vi: {
        title: "Load Shedding",
        body: "Mục tiêu của **Load Shedding (Giảm tải)** (hoặc Admission Control) trong microservices là gì, và khi nào nó cần thiết?",
        solution: "Mục tiêu: **Từ chối các yêu cầu đến quá mức** khi một dịch vụ bị quá tải nghiêm trọng, duy trì hiệu suất và sự ổn định của dịch vụ cho các yêu cầu mà nó có thể xử lý. Nó cần thiết khi dịch vụ gần đạt đến độ bão hòa và tiếp tục chấp nhận lưu lượng truy cập mới sẽ dẫn đến **độ trễ hoặc thất bại thảm khốc** cho tất cả người dùng."
      }
  },
  {
    _id: "ms-m-051",
    difficulty: "middle",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Reporting/Data Warehouse Updates",
        body: "When updating a centralized Data Warehouse with data from various microservices, what technique is used to ensure data integrity during the load phase when multiple sources are writing simultaneously?",
        solution: "Using **Atomic Load/Swap** techniques. New data is loaded into a temporary staging table, transformed, and then the entire staging table is **atomically swapped** with the live table (or a pointer is switched). This prevents readers from seeing partial or inconsistent data."
      }
    },
    jp: {
        title: "レポート/データウェアハウスの更新",
        body: "さまざまなマイクロサービスからのデータで集中型データウェアハウスを更新する際、複数のソースが同時に書き込んでいる間のロードフェーズでデータの整合性を確保するために、どのような手法が使用されますか？",
        solution: "**アトミックロード/スワップ**手法を使用します。新しいデータは一時的なステージングテーブルにロード、変換され、その後、ステージングテーブル全体がライブテーブルと**アトミックにスワップ**されます（またはポインターが切り替えられます）。これにより、リーダーが部分的または不整合なデータを見るのを防ぎます。"
      },
      vi: {
        title: "Cập nhật Data Warehouse",
        body: "Khi cập nhật một Data Warehouse tập trung bằng dữ liệu từ nhiều microservices khác nhau, kỹ thuật nào được sử dụng để đảm bảo tính toàn vẹn dữ liệu trong giai đoạn tải khi nhiều nguồn đang ghi đồng thời?",
        solution: "Sử dụng các kỹ thuật **Atomic Load/Swap (Tải/Hoán đổi Nguyên tử)**. Dữ liệu mới được tải vào một bảng staging tạm thời, được biến đổi, và sau đó toàn bộ bảng staging được **hoán đổi một cách nguyên tử** với bảng trực tiếp (hoặc một con trỏ được chuyển đổi). Điều này ngăn người đọc thấy dữ liệu một phần hoặc không nhất quán."
      }
  },
  {
    _id: "ms-m-052",
    difficulty: "middle",
    tags: ["architecture", "domain", "modeling"],
    content: {
      en: {
        title: "Microservices vs Functions (FaaS)",
        body: "What is the main operational difference between a typical microservice deployed as a long-running container and a FaaS (Function as a Service), regarding how developers manage the operating environment?",
        solution: "Microservices (containers) require developers to manage the **entire container environment** (OS, patching, scaling parameters). FaaS allows developers to focus only on the **code/business logic**, as the cloud provider automatically manages the underlying OS, patching, and most scaling decisions (serverless)."
      }
    },
    jp: {
        title: "マイクロサービス vs 関数（FaaS）",
        body: "長時間実行されるコンテナとしてデプロイされた典型的なマイクロサービスとFaaS（Function as a Service）の間で、開発者がオペレーティング環境を管理する方法に関する主な運用上の違いは何ですか？",
        solution: "マイクロサービス（コンテナ）は、開発者が**コンテナ環境全体**（OS、パッチ適用、スケーリングパラメーター）を管理する必要があります。FaaSは、クラウドプロバイダーが基盤となるOS、パッチ適用、およびほとんどのスケーリング決定を自動的に管理するため（サーバーレス）、開発者が**コード/ビジネスロジック**にのみ集中することを可能にします。"
      },
      vi: {
        title: "Microservices so với Functions (FaaS)",
        body: "Sự khác biệt chính về mặt vận hành giữa một microservice điển hình được triển khai dưới dạng container chạy dài và FaaS (Function as a Service) là gì, liên quan đến cách các nhà phát triển quản lý môi trường hoạt động?",
        solution: "Microservices (container) yêu cầu các nhà phát triển quản lý **toàn bộ môi trường container** (HĐH, vá lỗi, các tham số mở rộng). FaaS cho phép các nhà phát triển chỉ tập trung vào **mã/logic nghiệp vụ**, vì nhà cung cấp đám mây tự động quản lý HĐH cơ bản, vá lỗi và hầu hết các quyết định mở rộng (serverless)."
      }
  },
  {
    _id: "ms-m-053",
    difficulty: "middle",
    tags: ["security", "auth", "oauth"],
    content: {
      en: {
        title: "OAuth Scopes in Microservices",
        body: "In an OAuth 2.0 system used for microservices, how are **Scopes** used by the Authorization Server and the Resource Services to enforce access control?",
        solution: "The **Authorization Server** issues tokens with **Scopes** defined (e.g., `read:users`, `write:products`). The **Resource Services** (microservices) then check the scopes contained in the access token to ensure the client has the **necessary permissions** to access the specific resource or endpoint being requested."
      }
    },
    jp: {
        title: "マイクロサービスにおけるOAuthスコープ",
        body: "マイクロサービスに使用されるOAuth 2.0システムにおいて、**スコープ**は認可サーバーとリソースサービスによってアクセス制御を強制するためにどのように使用されますか？",
        solution: "**認可サーバー**は、定義された**スコープ**（例：`read:users`、`write:products`）を持つトークンを発行します。その後、**リソースサービス**（マイクロサービス）は、アクセストークンに含まれるスコープをチェックして、クライアントが要求されている特定のリソースまたはエンドポイントにアクセスするための**必要な権限**を持っていることを確認します。"
      },
      vi: {
        title: "OAuth Scopes trong Microservices",
        body: "Trong một hệ thống OAuth 2.0 được sử dụng cho microservices, **Scopes** được sử dụng bởi Authorization Server và Resource Services như thế nào để thực thi kiểm soát truy cập?",
        solution: "**Authorization Server** cấp các token với các **Scopes** được định nghĩa (ví dụ: `read:users`, `write:products`). Sau đó, các **Resource Services** (microservices) kiểm tra các scopes có trong access token để đảm bảo rằng client có **quyền cần thiết** để truy cập tài nguyên hoặc endpoint cụ thể đang được yêu cầu."
      }
  },
  {
    _id: "ms-m-054",
    difficulty: "middle",
    tags: ["observability", "tracing", "baggage"],
    content: {
      en: {
        title: "Baggage in Distributed Tracing",
        body: "In Distributed Tracing (OpenTelemetry), what is **'Baggage'**, and what is its use case beyond simple trace context propagation?",
        solution: "Baggage is a mechanism to propagate **key/value pairs** across the boundaries of services, similar to the trace context, but for **non-transactional data** (e.g., `tenant-id`, `user-segment`). This allows downstream services to make logging, sampling, or business decisions based on contextual information from the start of the transaction."
      }
    },
    jp: {
        title: "分散トレーシングにおけるバゲージ",
        body: "分散トレーシング（OpenTelemetry）において、**「バゲージ（Baggage）」**とは何ですか、また単純なトレースコンテキスト伝播を超えたそのユースケースは何ですか？",
        solution: "バゲージは、トレースコンテキストと同様に、サービスの境界を越えて**キー/値のペア**を伝播するためのメカニズムですが、**非トランザクションデータ**（例：`tenant-id`、`user-segment`）用です。これにより、ダウンストリームサービスは、トランザクションの開始からのコンテキスト情報に基づいてロギング、サンプリング、またはビジネス上の決定を行うことができます。"
      },
      vi: {
        title: "Baggage trong Distributed Tracing",
        body: "Trong Distributed Tracing (OpenTelemetry), **'Baggage'** là gì, và trường hợp sử dụng của nó ngoài việc truyền tải ngữ cảnh truy vết đơn giản là gì?",
        solution: "Baggage là một cơ chế để truyền tải **các cặp khóa/giá trị** qua ranh giới của các dịch vụ, tương tự như ngữ cảnh truy vết, nhưng dành cho **dữ liệu phi giao dịch** (ví dụ: `tenant-id`, `user-segment`). Điều này cho phép các dịch vụ downstream đưa ra quyết định ghi log, lấy mẫu hoặc nghiệp vụ dựa trên thông tin ngữ cảnh từ đầu giao dịch."
      }
  },
  {
    _id: "ms-m-055",
    difficulty: "middle",
    tags: ["data", "etl", "domain"],
    content: {
      en: {
        title: "Data Integrity with Shared IDs",
        body: "When two separate microservices need to reference the same real-world entity (e.g., 'User'), why is it better for both to store the **shared ID** (e.g., `user_id`) rather than replicating the entire entity data?",
        solution: "Storing only the shared ID maintains **loose coupling** and the **Database per Service** principle. If the user's details (name, email) change, only the User service needs to update its data; other services remain consistent. Replicating the whole entity data leads to eventual consistency headaches and potential data corruption."
      }
    },
    jp: {
        title: "共有IDによるデータ整合性",
        body: "2つの別個のマイクロサービスが同じ実世界のエンティティ（例：「User」）を参照する必要がある場合、エンティティデータ全体をレプリケートするよりも、両方が**共有ID**（例：`user_id`）を保存する方が良いのはなぜですか？",
        solution: "共有IDのみを保存することで、**疎結合**と**サービスごとのデータベース**の原則が維持されます。ユーザーの詳細（名前、メールアドレス）が変更された場合、Userサービスのみがデータを更新する必要があり、他のサービスは整合性を保ちます。エンティティデータ全体をレプリケートすると、結果整合性の問題や潜在的なデータ破損につながります。"
      },
      vi: {
        title: "Tính toàn vẹn dữ liệu với ID được Chia sẻ",
        body: "Khi hai microservices riêng biệt cần tham chiếu cùng một thực thể ngoài đời thực (ví dụ: 'User'), tại sao tốt hơn là cả hai nên lưu trữ **ID được chia sẻ** (ví dụ: `user_id`) thay vì sao chép toàn bộ dữ liệu thực thể?",
        solution: "Chỉ lưu trữ ID được chia sẻ duy trì **gắn kết lỏng lẻo** và nguyên tắc **Database per Service**. Nếu thông tin chi tiết của người dùng (tên, email) thay đổi, chỉ dịch vụ User cần cập nhật dữ liệu của mình; các dịch vụ khác vẫn nhất quán. Sao chép toàn bộ dữ liệu thực thể dẫn đến các vấn đề đau đầu về tính nhất quán cuối cùng và tiềm ẩn nguy cơ hỏng dữ liệu."
      }
  },
  {
    _id: "ms-m-056",
    difficulty: "middle",
    tags: ["deployment", "ci/cd", "automation"],
    content: {
      en: {
        title: "Immutable Infrastructure",
        body: "In the context of microservices deployment, what is the principle of **Immutable Infrastructure**, and what problem does it eliminate?",
        solution: "Immutable Infrastructure means that once a server/container is deployed, it is **never modified, patched, or updated** in place. To change it, you build and deploy a **completely new** one, replacing the old one. This eliminates **Configuration Drift** and environment inconsistencies (The problem of 'It works on my machine')."
      }
    },
    jp: {
        title: "不変インフラストラクチャ",
        body: "マイクロサービスデプロイメントのコンテキストにおいて、**不変インフラストラクチャ（Immutable Infrastructure）**の原則とは何ですか、またそれが排除する問題は何ですか？",
        solution: "不変インフラストラクチャとは、サーバー/コンテナがデプロイされた後、その場で**決して変更、パッチ適用、更新されない**ことを意味します。変更するには、**完全に新しいもの**を構築してデプロイし、古いものを置き換えます。これにより、**構成のずれ（Configuration Drift）**と環境の不整合（「私のマシンでは動作する」の問題）が排除されます。"
      },
      vi: {
        title: "Cơ sở hạ tầng Bất biến",
        body: "Trong bối cảnh triển khai microservices, nguyên tắc **Immutable Infrastructure (Cơ sở hạ tầng Bất biến)** là gì, và vấn đề nào nó loại bỏ?",
        solution: "Immutable Infrastructure có nghĩa là một khi một máy chủ/container được triển khai, nó **không bao giờ được sửa đổi, vá lỗi, hoặc cập nhật** tại chỗ. Để thay đổi nó, bạn xây dựng và triển khai một cái **hoàn toàn mới**, thay thế cái cũ. Điều này loại bỏ **Configuration Drift (Trôi Cấu hình)** và sự không nhất quán của môi trường (Vấn đề 'Nó hoạt động trên máy của tôi')."
      }
  },
  {
    _id: "ms-m-057",
    difficulty: "middle",
    tags: ["resilience", "patterns", "load-shedding"],
    content: {
      en: {
        title: "Graceful Degradation",
        body: "How does the principle of **Graceful Degradation** allow a microservices application to remain partially available when a critical dependency fails?",
        solution: "It uses **Fallback** strategies (part of the Circuit Breaker pattern). When a critical dependency fails, the service returns a safe, pre-defined response (e.g., cached data, a default image, or a simple text message) instead of an error. The user experience is degraded but not broken, preserving core functionality."
      }
    },
    jp: {
        title: "緩やかな劣化",
        body: "**緩やかな劣化（Graceful Degradation）**の原則は、重要な依存関係が失敗したときに、マイクロサービスアプリケーションが部分的に利用可能なままであることをどのように可能にしますか？",
        solution: "**フォールバック**戦略（サーキットブレーカーパターンの一部）を使用します。重要な依存関係が失敗した場合、サービスはエラーの代わりに安全で事前に定義された応答（例：キャッシュされたデータ、デフォルト画像、または単純なテキストメッセージ）を返します。ユーザーエクスペリエンスは低下しますが、壊れてはおらず、コア機能が維持されます。"
      },
      vi: {
        title: "Graceful Degradation",
        body: "Nguyên tắc **Graceful Degradation (Giảm cấp Khéo léo)** cho phép một ứng dụng microservices vẫn khả dụng một phần khi một dependency quan trọng bị lỗi như thế nào?",
        solution: "Nó sử dụng các chiến lược **Fallback** (một phần của mô hình Circuit Breaker). Khi một dependency quan trọng bị lỗi, dịch vụ trả về một phản hồi an toàn, được xác định trước (ví dụ: dữ liệu được lưu trong bộ nhớ cache, một hình ảnh mặc định hoặc một tin nhắn văn bản đơn giản) thay vì một lỗi. Trải nghiệm người dùng bị giảm cấp nhưng không bị hỏng, bảo toàn chức năng cốt lõi."
      }
  },
  {
    _id: "ms-m-058",
    difficulty: "middle",
    tags: ["communication", "async", "stream"],
    content: {
      en: {
        title: "Consumer Group in Kafka",
        body: "What is a **Consumer Group** in Apache Kafka, and how does it ensure that an event in a topic partition is processed by only **one** consumer instance?",
        solution: "A Consumer Group is a set of consumer instances that share a common group ID. Kafka assigns each partition of a topic to **only one member** within a consumer group. This is how it ensures that only one consumer instance processes the messages from that partition, guaranteeing process isolation and preventing duplicates."
      }
    },
    jp: {
        title: "Kafkaのコンシューマグループ",
        body: "Apache Kafkaにおける**コンシューマグループ**とは何ですか、またトピックパーティション内のイベントが**1つ**のコンシューマインスタンスによってのみ処理されることをどのように保証しますか？",
        solution: "コンシューマグループは、共通のグループIDを共有するコンシューマインスタンスのセットです。Kafkaは、トピックの各パーティションをコンシューマグループ内の**1つのメンバーのみ**に割り当てます。これにより、1つのコンシューマインスタンスのみがそのパーティションからのメッセージを処理することが保証され、プロセス分離と重複の防止が実現されます。"
      },
      vi: {
        title: "Consumer Group trong Kafka",
        body: "**Consumer Group** trong Apache Kafka là gì, và làm thế nào nó đảm bảo rằng một sự kiện trong một partition topic chỉ được xử lý bởi **một** instance consumer duy nhất?",
        solution: "Consumer Group là một tập hợp các instance consumer chia sẻ một ID nhóm chung. Kafka chỉ định mỗi partition của một topic cho **chỉ một thành viên** trong một consumer group. Đây là cách nó đảm bảo rằng chỉ một instance consumer xử lý các tin nhắn từ partition đó, đảm bảo cách ly quy trình và ngăn chặn sự trùng lặp."
      }
  },
  {
    _id: "ms-m-059",
    difficulty: "middle",
    tags: ["observability", "metrics", "tracing"],
    content: {
      en: {
        title: "OpenTelemetry Components",
        body: "Name the three core components/data types that **OpenTelemetry** defines for observability in a distributed system.",
        solution: "1. **Metrics** (numerical measurements of the system state, e.g., CPU, latency). 2. **Logs** (discrete, timestamped records of events). 3. **Traces** (records the path of a single request across multiple services via spans)."
      }
    },
    jp: {
        title: "OpenTelemetryコンポーネント",
        body: "**OpenTelemetry**が分散システムにおける可観測性のために定義する3つの中核的なコンポーネント/データタイプを挙げてください。",
        solution: "1. **メトリクス**（システム状態の数値測定、例：CPU、レイテンシ）。 2. **ログ**（イベントの個別のタイムスタンプ付きレコード）。 3. **トレース**（スパンを介して複数のサービスにわたる単一のリクエストのパスを記録）。"
      },
      vi: {
        title: "Các thành phần OpenTelemetry",
        body: "Kể tên ba thành phần/loại dữ liệu cốt lõi mà **OpenTelemetry** định nghĩa cho khả năng quan sát (observability) trong một hệ thống phân tán.",
        solution: "1. **Metrics** (các phép đo số về trạng thái hệ thống, ví dụ: CPU, độ trễ). 2. **Logs** (các bản ghi sự kiện rời rạc, có dấu thời gian). 3. **Traces** (ghi lại đường đi của một yêu cầu duy nhất trên nhiều dịch vụ thông qua các span)."
      }
  },
  {
    _id: "ms-m-060",
    difficulty: "middle",
    tags: ["patterns", "gateway", "bifurcation"],
    content: {
      en: {
        title: "BFF Data Transformation",
        body: "What is the key data transformation responsibility of a **Backend for Frontend (BFF)** service that distinguishes it from a generic API Gateway?",
        solution: "A BFF's key responsibility is **Aggregating and Shaping** the data from multiple downstream services into a single, highly optimized payload that exactly matches the needs of its specific client (e.g., combining 10 service calls into 1 optimized JSON structure for the mobile app screen). A generic gateway typically only routes and aggregates data minimally."
      }
    },
    jp: {
        title: "BFFデータ変換",
        body: "**Backend for Frontend (BFF)**サービスの、汎用APIゲートウェイと区別される主要なデータ変換の責任は何ですか？",
        solution: "BFFの主要な責任は、複数のダウンストリームサービスからのデータを、特定のクライアントのニーズに正確に一致する単一の**高度に最適化されたペイロードに集約および整形する**ことです（例：10個のサービスコールをモバイルアプリ画面用の1つの最適化されたJSON構造に結合）。汎用ゲートウェイは通常、ルーティングと最小限のデータ集約のみを行います。"
      },
      vi: {
        title: "Chuyển đổi Dữ liệu của BFF",
        body: "Trách nhiệm chuyển đổi dữ liệu chính của một dịch vụ **Backend for Frontend (BFF)** mà phân biệt nó với một API Gateway chung chung là gì?",
        solution: "Trách nhiệm chính của một BFF là **Tổng hợp và Định hình** dữ liệu từ nhiều dịch vụ downstream thành một payload duy nhất, được tối ưu hóa cao, khớp chính xác với nhu cầu của client cụ thể của nó (ví dụ: kết hợp 10 lời gọi dịch vụ thành 1 cấu trúc JSON được tối ưu hóa cho màn hình ứng dụng di động). Một gateway chung chung thường chỉ định tuyến và tổng hợp dữ liệu ở mức tối thiểu."
      }
  },
  {
    _id: "ms-m-061",
    difficulty: "middle",
    tags: ["security", "auth", "oauth"],
    content: {
      en: {
        title: "Stateless Token Validation",
        body: "Explain how a microservice can validate a **JWT (JSON Web Token)** without needing to communicate with the central Authorization Server for every request (stateless validation).",
        solution: "The service validates the token **locally** by checking its **signature** using the Authorization Server's **public key** (or shared secret). It also checks the token's validity (expiration, issuer, audience). This stateless validation is fast and reduces load on the Authorization Server."
      }
    },
    jp: {
        title: "ステートレスなトークン検証",
        body: "マイクロサービスが、すべてのリクエストで中央の認可サーバーと通信することなく**JWT（JSON Web Token）**を検証する方法（ステートレス検証）を説明してください。",
        solution: "サービスは、認可サーバーの**公開鍵**（または共有シークレット）を使用してトークンの**署名**をチェックすることにより、トークンを**ローカルで検証**します。また、トークンの有効性（有効期限、発行者、対象者）もチェックします。このステートレス検証は高速であり、認可サーバーの負荷を軽減します。"
      },
      vi: {
        title: "Xác thực Token Phi trạng thái",
        body: "Giải thích cách một microservice có thể xác thực **JWT (JSON Web Token)** mà không cần giao tiếp với Authorization Server trung tâm cho mọi yêu cầu (xác thực phi trạng thái).",
        solution: "Dịch vụ xác thực token **cục bộ** bằng cách kiểm tra **chữ ký** của nó bằng cách sử dụng **khóa công khai** (hoặc shared secret) của Authorization Server. Nó cũng kiểm tra tính hợp lệ của token (hết hạn, người phát hành, đối tượng). Xác thực phi trạng thái này nhanh chóng và giảm tải cho Authorization Server."
      }
  },
  {
    _id: "ms-m-062",
    difficulty: "middle",
    tags: ["data", "etl", "domain"],
    content: {
      en: {
        title: "Two-Phase Commit Drawback",
        body: "Why is the traditional **Two-Phase Commit (2PC)** protocol, used for distributed transactions in monolithic systems, generally avoided in modern microservices design?",
        solution: "2PC is avoided because it **locks resources** across all participating services for the entire duration of the transaction, severely degrading **availability** and **performance** (slow). It creates tight temporal coupling, which contradicts the autonomy and high availability goals of microservices."
      }
    },
    jp: {
        title: "二相コミットの欠点",
        body: "モノリシックシステムで分散トランザクションに使用される従来の**二相コミット（2PC）**プロトコルは、現代のマイクロサービス設計で一般的に避けられるのはなぜですか？",
        solution: "2PCは、トランザクションの全期間にわたってすべての参加サービスで**リソースをロック**し、**可用性**と**パフォーマンス**を著しく低下させる（遅い）ため避けられます。これは、マイクロサービスの自律性と高可用性の目標に反する厳密な時間的結合を作成します。"
      },
      vi: {
        title: "Hạn chế của Two-Phase Commit",
        body: "Tại sao giao thức **Two-Phase Commit (2PC)** truyền thống, được sử dụng cho các giao dịch phân tán trong hệ thống monolithic, thường bị tránh trong thiết kế microservices hiện đại?",
        solution: "2PC bị tránh vì nó **khóa tài nguyên** trên tất cả các dịch vụ tham gia trong toàn bộ thời gian của giao dịch, làm suy giảm nghiêm trọng **tính sẵn sàng** và **hiệu suất** (chậm). Nó tạo ra sự gắn kết tạm thời chặt chẽ, điều này mâu thuẫn với các mục tiêu tự chủ và tính sẵn sàng cao của microservices."
      }
  },
  {
    _id: "ms-m-063",
    difficulty: "middle",
    tags: ["deployment", "traffic", "testing"],
    content: {
      en: {
        title: "Testing in Production (TIP)",
        body: "Describe one key technique used for **Testing in Production (TIP)** in microservices and why it is a necessary evolution from staging environments.",
        solution: "Technique: **Feature Flags** (or Feature Toggles). This allows developers to deploy new code (even risky ones) to production but keep the feature disabled by default. The feature is then enabled only for internal users or a small percentage of external users. This is necessary because staging environments can **never perfectly replicate** the scale, traffic patterns, and edge cases of a complex production system."
      }
    },
    jp: {
        title: "本番環境でのテスト（TIP）",
        body: "マイクロサービスにおける**本番環境でのテスト（TIP）**に使用される主要なテクニックを1つ説明し、なぜそれがステージング環境からの必要な進化なのかを説明してください。",
        solution: "テクニック：**フィーチャーフラグ**（またはフィーチャートグル）。これにより、開発者は新しいコード（リスクの高いものも含む）を本番環境にデプロイできますが、フィーチャーはデフォルトで無効のままに保たれます。その後、フィーチャーは内部ユーザーまたは外部ユーザーの小さな割合に対してのみ有効になります。これは、ステージング環境が複雑な本番システムの規模、トラフィックパターン、およびエッジケースを**完全に複製することは決してできない**ため、必要です。"
      },
      vi: {
        title: "Testing in Production (TIP)",
        body: "Mô tả một kỹ thuật quan trọng được sử dụng cho **Testing in Production (TIP - Kiểm thử trong Môi trường Sản xuất)** trong microservices và tại sao nó là một sự tiến hóa cần thiết từ các môi trường staging.",
        solution: "Kỹ thuật: **Feature Flags (Cờ Tính năng)** (hoặc Feature Toggles). Điều này cho phép các nhà phát triển triển khai mã mới (ngay cả những mã rủi ro) vào môi trường sản xuất nhưng giữ cho tính năng bị vô hiệu hóa theo mặc định. Tính năng sau đó chỉ được kích hoạt cho người dùng nội bộ hoặc một tỷ lệ nhỏ người dùng bên ngoài. Điều này là cần thiết vì các môi trường staging **không bao giờ có thể sao chép hoàn hảo** quy mô, mô hình lưu lượng truy cập và các trường hợp hiếm gặp của một hệ thống sản xuất phức tạp."
      }
  },
  {
    _id: "ms-m-064",
    difficulty: "middle",
    tags: ["communication", "rpc", "grpc"],
    content: {
      en: {
        title: "gRPC Error Handling",
        body: "How does **gRPC** handle errors differently from traditional REST (which uses HTTP status codes), and what standard object is used for structured error information?",
        solution: "gRPC uses its own set of **status codes** (e.g., `UNAVAILABLE`, `DEADLINE_EXCEEDED`) which are conceptually separate from the underlying HTTP/2 status. For structured error information, gRPC commonly uses the **`google.rpc.Status`** object, which contains a code, a message, and a list of detailed error objects."
      }
    },
    jp: {
        title: "gRPCのエラー処理",
        body: "**gRPC**は、従来​​のREST（HTTPステータスコードを使用）とどのように異なってエラーを処理しますか、また構造化されたエラー情報にはどの標準オブジェクトが使用されますか？",
        solution: "gRPCは、基盤となるHTTP/2ステータスとは概念的に分離された独自の**ステータスコード**のセット（例：`UNAVAILABLE`、`DEADLINE_EXCEEDED`）を使用します。構造化されたエラー情報には、gRPCは一般的に**`google.rpc.Status`**オブジェクトを使用します。これには、コード、メッセージ、および詳細なエラーオブジェクトのリストが含まれます。"
      },
      vi: {
        title: "Xử lý Lỗi của gRPC",
        body: "**gRPC** xử lý lỗi khác với REST truyền thống (sử dụng mã trạng thái HTTP) như thế nào, và đối tượng tiêu chuẩn nào được sử dụng cho thông tin lỗi có cấu trúc?",
        solution: "gRPC sử dụng bộ **mã trạng thái** riêng (ví dụ: `UNAVAILABLE`, `DEADLINE_EXCEEDED`) được tách biệt về mặt khái niệm khỏi trạng thái HTTP/2 cơ bản. Đối với thông tin lỗi có cấu trúc, gRPC thường sử dụng đối tượng **`google.rpc.Status`**, chứa một mã, một thông báo và một danh sách các đối tượng lỗi chi tiết."
      }
  },
  {
    _id: "ms-m-065",
    difficulty: "middle",
    tags: ["patterns", "gateway", "bifurcation"],
    content: {
      en: {
        title: "Micro-Frontends and BFF",
        body: "How does the concept of **Micro-Frontends** complement the use of the **Backend for Frontend (BFF) Pattern**?",
        solution: "A **Micro-Frontend** breaks the monolithic UI into smaller, independently deployable pieces. A **BFF** provides a **dedicated backend API** for each of these Micro-Frontends. This ensures that the frontend and its required backend API can be developed, deployed, and scaled completely independently, reinforcing the autonomy principle."
      }
    },
    jp: {
        title: "マイクロフロントエンドとBFF",
        body: "**マイクロフロントエンド**の概念は、**Backend for Frontend (BFF)パターン**の使用をどのように補完しますか？",
        solution: "**マイクロフロントエンド**は、モノリシックなUIをより小さく、独立してデプロイ可能なピースに分割します。**BFF**は、これらのマイクロフロントエンドのそれぞれに**専用のバックエンドAPI**を提供します。これにより、フロントエンドとその必要なバックエンドAPIを完全に独立して開発、デプロイ、スケーリングできることが保証され、自律性の原則が強化されます。"
      },
      vi: {
        title: "Micro-Frontends và BFF",
        body: "Khái niệm **Micro-Frontends** bổ sung cho việc sử dụng **Backend for Frontend (BFF) Pattern** như thế nào?",
        solution: "Một **Micro-Frontend** chia nhỏ UI monolithic thành các phần nhỏ hơn, có thể triển khai độc lập. Một **BFF** cung cấp một **API backend chuyên dụng** cho mỗi Micro-Frontend này. Điều này đảm bảo rằng frontend và API backend cần thiết của nó có thể được phát triển, triển khai và mở rộng hoàn toàn độc lập, củng cố nguyên tắc tự chủ."
      }
  },
  {
    _id: "ms-m-066",
    difficulty: "middle",
    tags: ["data", "event-sourcing", "consistency"],
    content: {
      en: {
        title: "Read Model Consistency in CQRS/ES",
        body: "In a CQRS system using Event Sourcing, how does a developer ensure that the **Read Model** (Materialized View) remains eventually consistent with the **Write Model** (Event Store)?",
        solution: "By using an **Event Handler/Projector**. This component is responsible for subscribing to the stream of events published by the Write Model (Event Store) and applying those events sequentially to update and maintain the denormalized, read-optimized data structure (the Read Model) in real-time or near real-time."
      }
    },
    jp: {
        title: "CQRS/ESにおけるリードモデルの一貫性",
        body: "イベントソーシングを使用するCQRSシステムにおいて、開発者は**リードモデル**（マテリアライズドビュー）が**ライトモデル**（イベントストア）と結果的に整合性を保つことをどのように保証しますか？",
        solution: "**イベントハンドラ/プロジェクター**を使用することによって。このコンポーネントは、ライトモデル（イベントストア）によって発行されたイベントのストリームを購読し、それらのイベントを順番に適用して、非正規化された読み取りに最適化されたデータ構造（リードモデル）をリアルタイムまたはほぼリアルタイムで更新および維持する責任があります。"
      },
      vi: {
        title: "Tính nhất quán của Read Model trong CQRS/ES",
        body: "Trong một hệ thống CQRS sử dụng Event Sourcing, làm thế nào một nhà phát triển đảm bảo rằng **Read Model** (Materialized View) vẫn nhất quán cuối cùng với **Write Model** (Event Store)?",
        solution: "Bằng cách sử dụng một **Event Handler/Projector**. Thành phần này chịu trách nhiệm đăng ký luồng sự kiện được xuất bản bởi Write Model (Event Store) và áp dụng các sự kiện đó theo trình tự để cập nhật và duy trì cấu trúc dữ liệu đã được phi chuẩn hóa, tối ưu hóa cho việc đọc (Read Model) trong thời gian thực hoặc gần thời gian thực."
      }
  },
  {
    _id: "ms-m-067",
    difficulty: "middle",
    tags: ["resilience", "patterns", "monitoring"],
    content: {
      en: {
        title: "Failure Injection",
        body: "What is **Failure Injection (or Chaos Engineering)** in microservices, and what is its primary benefit?",
        solution: "Failure Injection is the practice of **deliberately introducing failures** (e.g., high latency, service crashes, network partitions) into a production or testing environment. Primary Benefit: It helps uncover **hidden failure modes** and resilience weaknesses in the system and validates whether the existing Circuit Breakers, Bulkheads, and Fallback mechanisms actually work as expected."
      }
    },
    jp: {
        title: "障害注入",
        body: "マイクロサービスにおける**障害注入（またはカオスエンジニアリング）**とは何ですか、またその主な利点は何ですか？",
        solution: "障害注入は、本番環境またはテスト環境に**意図的に障害を注入する**（例：高レイテンシ、サービスクラッシュ、ネットワークパーティション）プラクティスです。主な利点：システムの**隠れた障害モード**と回復力の弱点を明らかにし、既存のサーキットブレーカー、バルクヘッド、およびフォールバックメカニズムが実際に期待どおりに機能するかどうかを検証するのに役立ちます。"
      },
      vi: {
        title: "Failure Injection",
        body: "**Failure Injection (hoặc Chaos Engineering)** trong microservices là gì, và lợi ích chính của nó là gì?",
        solution: "Failure Injection là việc thực hành **cố ý đưa lỗi vào** (ví dụ: độ trễ cao, sự cố dịch vụ, phân vùng mạng) vào môi trường sản xuất hoặc kiểm thử. Lợi ích chính: Nó giúp khám phá ra **các chế độ lỗi ẩn** và điểm yếu về khả năng chịu lỗi trong hệ thống, đồng thời xác minh xem các cơ chế Circuit Breakers, Bulkheads, và Fallback hiện có có thực sự hoạt động như mong đợi hay không."
      }
  },
  {
    _id: "ms-m-068",
    difficulty: "middle",
    tags: ["security", "api", "vulnerability"],
    content: {
      en: {
        title: "Service-to-Service Authorization",
        body: "When Service A calls Service B internally, what mechanism should Service B use to determine if Service A is authorized to make that call, and what is this known as?",
        solution: "Service B should use a mechanism known as **Service-to-Service Authorization** (or M2M/Machine-to-Machine Authorization). This is typically implemented using **mTLS certificates** (to verify identity) and/or a **client credentials grant** token (to verify scopes/permissions) issued specifically for Service A, not a user token."
      }
    },
    jp: {
        title: "サービス間認可",
        body: "サービスAが内部的にサービスBを呼び出すとき、サービスBはサービスAがその呼び出しを行うことを認可されているかどうかを判断するためにどのメカニズムを使用すべきですか、またこれは何として知られていますか？",
        solution: "サービスBは、**サービス間認可**（またはM2M/マシン間認可）として知られるメカニズムを使用すべきです。これは通常、ユーザー​​トークンではなく、サービスAのために特別に発行された**mTLS証明書**（IDを確認するため）および/または**クライアントクレデンシャルグラント**トークン（スコープ/権限を確認するため）を使用して実装されます。"
      },
      vi: {
        title: "Ủy quyền giữa các Dịch vụ",
        body: "Khi Dịch vụ A gọi Dịch vụ B nội bộ, cơ chế nào Dịch vụ B nên sử dụng để xác định xem Dịch vụ A có được ủy quyền để thực hiện cuộc gọi đó hay không, và điều này được gọi là gì?",
        solution: "Dịch vụ B nên sử dụng một cơ chế được gọi là **Ủy quyền giữa các Dịch vụ (Service-to-Service Authorization)** (hoặc M2M/Machine-to-Machine Authorization). Điều này thường được triển khai bằng cách sử dụng **chứng chỉ mTLS** (để xác minh danh tính) và/hoặc một token **client credentials grant** (để xác minh phạm vi/quyền) được cấp riêng cho Dịch vụ A, không phải token người dùng."
      }
  },
  {
    _id: "ms-m-069",
    difficulty: "middle",
    tags: ["data", "etl", "reporting"],
    content: {
      en: {
        title: "Database Listener (CDC) vs Outbox Polling",
        body: "In the Transactional Outbox Pattern, compare the performance and complexity trade-offs between a **CDC (Change Data Capture) listener** and a **polling service** reading the outbox table.",
        solution: "A **CDC listener** (e.g., Debezium) is generally **more performant** (low latency) and **less intrusive** (reads the transaction log, not the table), but it is **more complex** to set up and highly dependent on the database type. A **polling service** is **simpler** to implement but **less performant** (higher latency) and puts **more load** on the database (by repeatedly querying the outbox table)."
      }
    },
    jp: {
        title: "データベースリスナー（CDC） vs アウトボックスポーリング",
        body: "トランザクショナルアウトボックスパターンにおいて、**CDC（変更データキャプチャ）リスナー**とアウトボックステーブルを読み取る**ポーリングサービス**のパフォーマンスと複雑さのトレードオフを比較してください。",
        solution: "**CDCリスナー**（Debeziumなど）は一般的に**より高いパフォーマンス**（低レイテンシ）と**より少ない侵入性**（テーブルではなくトランザクションログを読み取る）を備えていますが、セットアップが**より複雑**であり、データベースタイプに大きく依存します。**ポーリングサービス**は実装が**より単純**ですが、**パフォーマンスが低く**（高レイテンシ）、データベースに**より多くの負荷**をかけます（アウトボックステーブルを繰り返しクエリすることによって）。"
      },
      vi: {
        title: "Database Listener (CDC) so với Outbox Polling",
        body: "Trong Transactional Outbox Pattern, so sánh các đánh đổi về hiệu suất và độ phức tạp giữa một **CDC (Change Data Capture) listener** và một **polling service** đọc bảng outbox.",
        solution: "Một **CDC listener** (ví dụ: Debezium) nói chung **hiệu suất cao hơn** (độ trễ thấp) và **ít xâm lấn hơn** (đọc nhật ký giao dịch, không phải bảng), nhưng nó **phức tạp hơn** để thiết lập và phụ thuộc nhiều vào loại cơ sở dữ liệu. Một **polling service** **đơn giản hơn** để triển khai nhưng **hiệu suất thấp hơn** (độ trễ cao hơn) và đặt **nhiều tải hơn** lên cơ sở dữ liệu (bằng cách truy vấn bảng outbox lặp đi lặp lại)."
      }
  },
  {
    _id: "ms-m-070",
    difficulty: "middle",
    tags: ["architecture", "domain", "modeling"],
    content: {
      en: {
        title: "Microservice Sprawl (Bloat)",
        body: "What is **Microservice Sprawl (or Bloat)**, and what is the primary indicator that an organization is suffering from it?",
        solution: "Microservice Sprawl is the excessive creation of too many, too small services that offer **little to no business value** and significantly increase operational complexity. Primary Indicator: The **total cost of ownership** (operational complexity, deployment pipelines, cross-service debugging time) is growing faster than the rate of new feature delivery or overall business value."
      }
    },
    jp: {
        title: "マイクロサービスの無秩序な拡大（ブロート）",
        body: "**マイクロサービスの無秩序な拡大（またはブロート）**とは何ですか、また組織がそれに苦しんでいることを示す主要な指標は何ですか？",
        solution: "マイクロサービスの無秩序な拡大は、**ビジネス価値がほとんどない**、小さすぎるサービスが過度に作成され、運用上の複雑さを大幅に増大させることです。主要な指標：**総所有コスト**（運用上の複雑さ、デプロイメントパイプライン、クロスサービスデバッグ時間）が、新しい機能の提供速度や全体的なビジネス価値の速度よりも速く増加していることです。"
      },
      vi: {
        title: "Microservice Sprawl (Bloat)",
        body: "**Microservice Sprawl (hoặc Bloat)** là gì, và đâu là chỉ số chính cho thấy một tổ chức đang gặp phải vấn đề này?",
        solution: "Microservice Sprawl là việc tạo ra quá nhiều dịch vụ quá nhỏ, không mang lại **ít hoặc không có giá trị nghiệp vụ** và làm tăng đáng kể sự phức tạp trong vận hành. Chỉ số chính: **Tổng chi phí sở hữu** (độ phức tạp vận hành, pipeline triển khai, thời gian gỡ lỗi liên dịch vụ) đang tăng nhanh hơn tốc độ cung cấp tính năng mới hoặc giá trị nghiệp vụ tổng thể."
      }
  }
];
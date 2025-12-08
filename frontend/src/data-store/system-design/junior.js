const systemDesignJuniorQuestions = [
  {
    _id: "sd-j-001",
    difficulty: "junior",
    tags: ["load balancer", "scaling"],
    content: {
      en: {
        title: "What is a Load Balancer?",
        body: "Explain the primary function of a Load Balancer in a distributed system.",
        solution: "A Load Balancer distributes incoming network traffic across a group of backend servers to prevent any single server from becoming a bottleneck, ensuring high availability and reliability."
      },
      jp: {
        title: "ロードバランサーとは？",
        body: "分散システムにおけるロードバランサーの主な機能を説明しなさい。",
        solution: "ロードバランサーは、入ってくるネットワークトラフィックをバックエンドサーバーのグループに分散させ、特定のサーバーがボトルネックになるのを防ぎ、高い可用性と信頼性を確保します。"
      },
      vi: {
        title: "Load Balancer là gì?",
        body: "Giải thích chức năng chính của Load Balancer trong một hệ thống phân tán.",
        solution: "Load Balancer phân phối lưu lượng mạng đến trên một nhóm các máy chủ backend để ngăn bất kỳ máy chủ nào trở thành điểm nghẽn, đảm bảo tính sẵn sàng và độ tin cậy cao."
      }
    }
  },
  {
    _id: "sd-j-002",
    difficulty: "junior",
    tags: ["database", "sql", "nosql"],
    content: {
      en: {
        title: "SQL vs NoSQL: Key Difference",
        body: "What is the fundamental difference in how SQL (Relational) and NoSQL databases store data?",
        solution: "SQL databases store data in structured tables with predefined schemas and relationships (ACID properties). NoSQL databases use various models (document, key-value, etc.) and are generally schema-less and more flexible (BASE properties)."
      },
      jp: {
        title: "SQL vs NoSQL：主な違い",
        body: "SQL（リレーショナル）データベースとNoSQLデータベースがデータを保存する方法における根本的な違いは何ですか？",
        solution: "SQLデータベースは、事前定義されたスキーマとリレーションシップを持つ構造化されたテーブルにデータを保存します (ACID特性)。NoSQLデータベースは、様々なモデル（ドキュメント、キーバリューなど）を使用し、一般的にスキーマレスでより柔軟です (BASE特性)。"
      },
      vi: {
        title: "SQL và NoSQL: Khác biệt chính",
        body: "Sự khác biệt cơ bản trong cách lưu trữ dữ liệu giữa cơ sở dữ liệu SQL (Quan hệ) và NoSQL là gì?",
        solution: "Cơ sở dữ liệu SQL lưu trữ dữ liệu trong các bảng có cấu trúc với schema và quan hệ được xác định trước (thuộc tính ACID). Cơ sở dữ liệu NoSQL sử dụng nhiều mô hình khác nhau (document, key-value, v.v.) và thường không có schema, linh hoạt hơn (thuộc tính BASE)."
      }
    }
  },
  {
    _id: "sd-j-003",
    difficulty: "junior",
    tags: ["caching", "performance"],
    content: {
      en: {
        title: "Why use Caching?",
        body: "How does implementing a caching layer improve system performance?",
        solution: "Caching stores frequently accessed data closer to the user/application, reducing latency and decreasing the load on the backend database or service."
      },
      jp: {
        title: "キャッシングを使用する理由",
        body: "キャッシング層を実装することで、システムのパフォーマンスはどのように向上しますか？",
        solution: "キャッシングは、頻繁にアクセスされるデータをユーザー/アプリケーションにより近くに保存し、レイテンシを減らし、バックエンドデータベースやサービスへの負荷を軽減します。"
      },
      vi: {
        title: "Tại sao sử dụng Caching?",
        body: "Việc triển khai một lớp caching cải thiện hiệu suất hệ thống như thế nào?",
        solution: "Caching lưu trữ dữ liệu được truy cập thường xuyên gần hơn với người dùng/ứng dụng, giúp giảm độ trễ (latency) và giảm tải cho cơ sở dữ liệu hoặc dịch vụ backend."
      }
    }
  },
  {
    _id: "sd-j-004",
    difficulty: "junior",
    tags: ["microservices", "architecture"],
    content: {
      en: {
        title: "What is a Monolith?",
        body: "Briefly define the Monolithic architectural style.",
        solution: "A Monolith is a single, tightly coupled application where all components (UI, business logic, data access) are bundled into one indivisible unit."
      },
      jp: {
        title: "モノリスとは？",
        body: "モノリシックなアーキテクチャスタイルを簡潔に定義しなさい。",
        solution: "モノリスは、すべてのコンポーネント（UI、ビジネスロジック、データアクセス）が分離できない単一のユニットにまとめられた、密結合のアプリケーションです。"
      },
      vi: {
        title: "Monolith là gì?",
        body: "Định nghĩa ngắn gọn về kiến trúc Monolithic (nguyên khối).",
        solution: "Monolith là một ứng dụng đơn lẻ, gắn kết chặt chẽ, nơi tất cả các thành phần (UI, logic nghiệp vụ, truy cập dữ liệu) được đóng gói thành một đơn vị không thể chia cắt."
      }
    }
  },
  {
    _id: "sd-j-005",
    difficulty: "junior",
    tags: ["api", "rest"],
    content: {
      en: {
        title: "Define RESTful API",
        body: "What does 'REST' stand for and what is its core principle for communication?",
        solution: "REST stands for REpresentational State Transfer. Its core principle is using standard HTTP methods (GET, POST, PUT, DELETE) to manipulate resources (identified by URIs) in a stateless manner."
      },
      jp: {
        title: "RESTful APIを定義しなさい",
        body: "'REST'は何の略で、通信におけるその主要な原則は何ですか？",
        solution: "RESTはREpresentational State Transferの略です。その主要な原則は、標準的なHTTPメソッド（GET、POST、PUT、DELETE）を使用して、ステートレスな方法でリソース（URIで識別される）を操作することです。"
      },
      vi: {
        title: "Định nghĩa RESTful API",
        body: "'REST' là viết tắt của gì và nguyên tắc cốt lõi của nó trong giao tiếp là gì?",
        solution: "REST là viết tắt của REpresentational State Transfer. Nguyên tắc cốt lõi của nó là sử dụng các phương thức HTTP tiêu chuẩn (GET, POST, PUT, DELETE) để thao tác với các tài nguyên (được xác định bằng URI) theo cách thức phi trạng thái (stateless)."
      }
    }
  },
  {
    _id: "sd-j-006",
    difficulty: "junior",
    tags: ["latency", "throughput"],
    content: {
      en: {
        title: "Latency vs Throughput",
        body: "Briefly explain the difference between Latency and Throughput.",
        solution: "Latency is the time delay before a transfer of data begins following an instruction for its transfer (the time it takes for one operation). Throughput is the rate at which data is successfully transferred (the number of operations per unit of time)."
      },
      jp: {
        title: "レイテンシ vs スループット",
        body: "レイテンシとスループットの違いを簡潔に説明しなさい。",
        solution: "レイテンシは、データの転送指示から転送が始まるまでの時間遅延です（一つの操作にかかる時間）。スループットは、データが正常に転送される速度です（単位時間あたりの操作数）。"
      },
      vi: {
        title: "Latency và Throughput",
        body: "Giải thích ngắn gọn sự khác biệt giữa Latency (Độ trễ) và Throughput (Thông lượng).",
        solution: "Latency là độ trễ thời gian trước khi quá trình truyền dữ liệu bắt đầu sau lệnh truyền (thời gian cần thiết cho một thao tác). Throughput là tốc độ dữ liệu được truyền thành công (số lượng thao tác trên một đơn vị thời gian)."
      }
    }
  },
  {
    _id: "sd-j-007",
    difficulty: "junior",
    tags: ["availability", "reliability"],
    content: {
      en: {
        title: "High Availability Definition",
        body: "What does 'High Availability' (HA) mean in system design?",
        solution: "High Availability means a system is designed to operate continuously without failure for a long period, minimizing downtime and ensuring users can access the service when needed."
      },
      jp: {
        title: "高可用性の定義",
        body: "システム設計における「高可用性」（HA）とはどういう意味ですか？",
        solution: "高可用性とは、システムが長期間にわたって障害なく継続的に動作するように設計されており、ダウンタイムを最小限に抑え、ユーザーが必要なときにサービスにアクセスできるようにすることです。"
      },
      vi: {
        title: "Định nghĩa High Availability",
        body: "Trong thiết kế hệ thống, 'High Availability' (HA - Tính sẵn sàng cao) có nghĩa là gì?",
        solution: "High Availability có nghĩa là một hệ thống được thiết kế để hoạt động liên tục mà không gặp lỗi trong thời gian dài, giảm thiểu thời gian ngừng hoạt động (downtime) và đảm bảo người dùng có thể truy cập dịch vụ khi cần thiết."
      }
    }
  },
  {
    _id: "sd-j-008",
    difficulty: "junior",
    tags: ["security", "ssl", "tls"],
    content: {
      en: {
        title: "Role of SSL/TLS",
        body: "What is the main role of SSL/TLS in Web Networking?",
        solution: "SSL/TLS (Transport Layer Security, formerly Secure Sockets Layer) ensures secure, encrypted communication between a client (like a browser) and a server, protecting data integrity and confidentiality."
      },
      jp: {
        title: "SSL/TLSの役割",
        body: "WebネットワーキングにおけるSSL/TLSの主な役割は何ですか？",
        solution: "SSL/TLS（以前はSecure Sockets Layer、現在はTransport Layer Security）は、クライアント（ブラウザなど）とサーバー間の安全で暗号化された通信を保証し、データの完全性と機密性を保護します。"
      },
      vi: {
        title: "Vai trò của SSL/TLS",
        body: "Vai trò chính của SSL/TLS trong Mạng máy tính Web là gì?",
        solution: "SSL/TLS (Transport Layer Security, trước đây là Secure Sockets Layer) đảm bảo giao tiếp an toàn, được mã hóa giữa máy khách (như trình duyệt) và máy chủ, bảo vệ tính toàn vẹn và bảo mật dữ liệu."
      }
    }
  },
  {
    _id: "sd-j-009",
    difficulty: "junior",
    tags: ["scalability", "vertical", "horizontal"],
    content: {
      en: {
        title: "Horizontal vs Vertical Scaling",
        body: "What is the difference between Vertical Scaling and Horizontal Scaling?",
        solution: "Vertical Scaling (Scaling Up) means increasing the resources (CPU, RAM) of a single server. Horizontal Scaling (Scaling Out) means adding more servers/machines to the system."
      },
      jp: {
        title: "垂直スケーリング vs 水平スケーリング",
        body: "垂直スケーリングと水平スケーリングの違いは何ですか？",
        solution: "垂直スケーリング（スケールアップ）は、単一のサーバーのリソース（CPU、RAM）を増やすことです。水平スケーリング（スケールアウト）は、システムにサーバー/マシンを追加することです。"
      },
      vi: {
        title: "Scaling Ngang và Scaling Dọc",
        body: "Sự khác biệt giữa Vertical Scaling (Mở rộng theo chiều dọc) và Horizontal Scaling (Mở rộng theo chiều ngang) là gì?",
        solution: "Vertical Scaling (Mở rộng theo chiều dọc) là tăng tài nguyên (CPU, RAM) của một máy chủ duy nhất. Horizontal Scaling (Mở rộng theo chiều ngang) là thêm nhiều máy chủ/máy móc vào hệ thống."
      }
    }
  },
  {
    _id: "sd-j-010",
    difficulty: "junior",
    tags: ["cdn", "networking"],
    content: {
      en: {
        title: "What is a CDN?",
        body: "What does CDN stand for, and what kind of content does it usually handle?",
        solution: "CDN stands for Content Delivery Network. It is a geographically distributed network of proxy servers that caches and serves static content (images, videos, CSS, JS files) closer to the end-users to reduce latency."
      },
      jp: {
        title: "CDNとは？",
        body: "CDNは何の略で、通常どのような種類のコンテンツを扱いますか？",
        solution: "CDNはContent Delivery Networkの略です。これは、エンドユーザーにより近い場所で静的コンテンツ（画像、ビデオ、CSS、JSファイル）をキャッシュして提供し、レイテンシを削減するための地理的に分散されたプロキシサーバーのネットワークです。"
      },
      vi: {
        title: "CDN là gì?",
        body: "CDN là viết tắt của gì, và nó thường xử lý loại nội dung nào?",
        solution: "CDN là viết tắt của Content Delivery Network. Nó là một mạng lưới máy chủ proxy được phân tán địa lý, có chức năng lưu trữ và phục vụ nội dung tĩnh (hình ảnh, video, tệp CSS, JS) gần hơn với người dùng cuối để giảm độ trễ."
      }
    }
  },
  {
    _id: "sd-j-011",
    difficulty: "junior",
    tags: ["database", "replication"],
    content: {
      en: {
        title: "Purpose of Database Replication",
        body: "What are the two main purposes of replicating a database?",
        solution: "Replication serves two main purposes: 1. **High Availability/Fault Tolerance** (if one server fails, others take over). 2. **Scalability** (reading data from replicas to reduce the load on the primary server)."
      },
      jp: {
        title: "データベースレプリケーションの目的",
        body: "データベースをレプリケーションする主な目的を2つ挙げてください。",
        solution: "レプリケーションには主に2つの目的があります: 1. **高可用性/耐障害性**（1台のサーバーが故障しても、他のサーバーが引き継ぐ）。 2. **スケーラビリティ**（レプリカからデータを読み取り、プライマリサーバーの負荷を軽減する）。"
      },
      vi: {
        title: "Mục đích của Database Replication",
        body: "Hai mục đích chính của việc nhân rộng cơ sở dữ liệu (replication) là gì?",
        solution: "Replication phục vụ hai mục đích chính: 1. **Tính sẵn sàng cao/Khả năng chịu lỗi** (Nếu một máy chủ gặp sự cố, các máy chủ khác sẽ tiếp quản). 2. **Khả năng mở rộng** (Đọc dữ liệu từ các bản sao (replicas) để giảm tải cho máy chủ chính)."
      }
    }
  },
  {
    _id: "sd-j-012",
    difficulty: "junior",
    tags: ["architecture", "microservices"],
    content: {
      en: {
        title: "Definition of Microservices",
        body: "How does the Microservices architectural style differ from a Monolith?",
        solution: "Microservices break down an application into a collection of small, independent services, each running in its own process and communicating via lightweight mechanisms (like HTTP APIs)."
      },
      jp: {
        title: "マイクロサービスの定義",
        body: "マイクロサービスアーキテクチャスタイルは、モノリスとどのように異なりますか？",
        solution: "マイクロサービスは、アプリケーションを小さく独立したサービスの集合に分割し、それぞれが独自のプロセスで実行され、軽量なメカニズム（HTTP APIなど）を介して通信します。"
      },
      vi: {
        title: "Định nghĩa Microservices",
        body: "Kiến trúc Microservices khác với Monolith như thế nào?",
        solution: "Microservices chia ứng dụng thành một tập hợp các dịch vụ nhỏ, độc lập, mỗi dịch vụ chạy trong quy trình riêng của nó và giao tiếp thông qua các cơ chế nhẹ (như HTTP API)."
      }
    }
  },
  {
    _id: "sd-j-013",
    difficulty: "junior",
    tags: ["networking", "dns"],
    content: {
      en: {
        title: "Function of DNS",
        body: "What is the primary function of the Domain Name System (DNS)?",
        solution: "The primary function of DNS is to translate human-readable domain names (e.g., google.com) into machine-readable IP addresses (e.g., 142.250.191.14) that computers use to locate each other on the internet."
      },
      jp: {
        title: "DNSの機能",
        body: "ドメインネームシステム（DNS）の主な機能は何ですか？",
        solution: "DNSの主な機能は、人間が読めるドメイン名（例：google.com）を、インターネット上でコンピューターが互いを特定するために使用するコンピューターが読めるIPアドレス（例：142.250.191.14）に変換することです。"
      },
      vi: {
        title: "Chức năng của DNS",
        body: "Chức năng chính của Hệ thống Tên miền (DNS) là gì?",
        solution: "Chức năng chính của DNS là dịch các tên miền dễ đọc đối với con người (ví dụ: google.com) thành các địa chỉ IP mà máy tính có thể đọc được (ví dụ: 142.250.191.14), được máy tính sử dụng để định vị lẫn nhau trên internet."
      }
    }
  },
  {
    _id: "sd-j-014",
    difficulty: "junior",
    tags: ["monitoring", "logging"],
    content: {
      en: {
        title: "Importance of Logging",
        body: "Why is structured logging essential for system operations and troubleshooting?",
        solution: "Structured logging provides detailed, searchable records of system events (errors, warnings, state changes). It's essential for monitoring system health, debugging issues, and understanding user behavior."
      },
      jp: {
        title: "ロギングの重要性",
        body: "システムの運用とトラブルシューティングにとって、構造化されたロギングが不可欠なのはなぜですか？",
        solution: "構造化されたロギングは、システムイベント（エラー、警告、状態変更）の詳細で検索可能な記録を提供します。これは、システムの健全性を監視し、問題のデバッグを行い、ユーザーの行動を理解するために不可欠です。"
      },
      vi: {
        title: "Tầm quan trọng của Logging",
        body: "Tại sao việc ghi log có cấu trúc (structured logging) lại cần thiết cho hoạt động và xử lý sự cố hệ thống?",
        solution: "Logging có cấu trúc cung cấp các bản ghi chi tiết, có thể tìm kiếm được về các sự kiện của hệ thống (lỗi, cảnh báo, thay đổi trạng thái). Nó rất cần thiết để giám sát tình trạng hệ thống, gỡ lỗi các vấn đề và hiểu hành vi người dùng."
      }
    }
  },
  {
    _id: "sd-j-015",
    difficulty: "junior",
    tags: ["database", "sharding"],
    content: {
      en: {
        title: "What is Database Sharding?",
        body: "Briefly describe the concept of Database Sharding.",
        solution: "Database Sharding is a horizontal partitioning technique where a large database is split into smaller, more manageable parts called 'shards'. Each shard is stored on a separate database server."
      },
      jp: {
        title: "データベースシャーディングとは？",
        body: "データベースシャーディングの概念を簡潔に説明しなさい。",
        solution: "データベースシャーディングは、大規模なデータベースを 'シャード' と呼ばれるより小さく管理しやすい部分に分割する水平パーティショニング技術です。各シャードは別々のデータベースサーバーに保存されます。"
      },
      vi: {
        title: "Database Sharding là gì?",
        body: "Mô tả ngắn gọn khái niệm Database Sharding.",
        solution: "Database Sharding là một kỹ thuật phân vùng ngang, trong đó một cơ sở dữ liệu lớn được chia thành các phần nhỏ hơn, dễ quản lý hơn gọi là 'shards'. Mỗi shard được lưu trữ trên một máy chủ cơ sở dữ liệu riêng biệt."
      }
    }
  },
  {
    _id: "sd-j-016",
    difficulty: "junior",
    tags: ["message queue", "decoupling"],
    content: {
      en: {
        title: "Purpose of a Message Queue",
        body: "What is the main role of a Message Queue in system design?",
        solution: "A Message Queue decouples components of a system, allowing them to communicate asynchronously. It buffers tasks, manages traffic spikes, and improves reliability by ensuring messages are processed even if the consumer is temporarily unavailable."
      },
      jp: {
        title: "メッセージキューの目的",
        body: "システム設計におけるメッセージキューの主な役割は何ですか？",
        solution: "メッセージキューは、システムのコンポーネントを疎結合にし、非同期で通信できるようにします。タスクをバッファリングし、トラフィックスパイクを管理し、コンシューマが一時的に利用不能であってもメッセージが処理されることを保証することで信頼性を向上させます。"
      },
      vi: {
        title: "Mục đích của Message Queue",
        body: "Vai trò chính của Message Queue (Hàng đợi tin nhắn) trong thiết kế hệ thống là gì?",
        solution: "Message Queue làm giảm sự phụ thuộc giữa các thành phần của hệ thống, cho phép chúng giao tiếp bất đồng bộ. Nó đệm các tác vụ, quản lý lưu lượng truy cập đột biến và cải thiện độ tin cậy bằng cách đảm bảo tin nhắn được xử lý ngay cả khi bên nhận tạm thời không khả dụng."
      }
    }
  },
  {
    _id: "sd-j-017",
    difficulty: "junior",
    tags: ["system design", "requirements"],
    content: {
      en: {
        title: "Functional vs Non-functional Requirements",
        body: "What is the difference between Functional and Non-functional requirements in system design?",
        solution: "Functional requirements define what the system *does* (e.g., 'The system must allow users to upload photos'). Non-functional requirements define system qualities like performance, security, and scalability (e.g., 'The system must respond within 200ms')."
      },
      jp: {
        title: "機能要件 vs 非機能要件",
        body: "システム設計における機能要件と非機能要件の違いは何ですか？",
        solution: "機能要件はシステムが *何をするか* を定義します（例： 'システムはユーザーが写真をアップロードできるようにする必要がある'）。非機能要件は、パフォーマンス、セキュリティ、スケーラビリティなどのシステムの品質を定義します（例： 'システムは200ms以内に応答する必要がある'）。"
      },
      vi: {
        title: "Yêu cầu Chức năng và Phi chức năng",
        body: "Sự khác biệt giữa yêu cầu Chức năng (Functional) và Phi chức năng (Non-functional) trong thiết kế hệ thống là gì?",
        solution: "Yêu cầu chức năng định nghĩa hệ thống *làm gì* (ví dụ: 'Hệ thống phải cho phép người dùng tải ảnh lên'). Yêu cầu phi chức năng định nghĩa các phẩm chất của hệ thống như hiệu suất, bảo mật và khả năng mở rộng (ví dụ: 'Hệ thống phải phản hồi trong vòng 200ms')."
      }
    }
  },
  {
    _id: "sd-j-018",
    difficulty: "junior",
    tags: ["CAP theorem", "database"],
    content: {
      en: {
        title: "What does C in CAP stand for?",
        body: "What does the letter 'C' represent in the CAP theorem, and what does it mean?",
        solution: "The 'C' stands for **Consistency**. It means that every read receives the most recent write or an error. All nodes see the same data at the same time."
      },
      jp: {
        title: "CAP定理のCは何を意味しますか？",
        body: "CAP定理の文字 'C' は何を表し、それはどういう意味ですか？",
        solution: "'C' は **Consistency (一貫性)** を表します。これは、すべての読み取りが最新の書き込みまたはエラーを受け取ることを意味します。すべてのノードが同時に同じデータを見ます。"
      },
      vi: {
        title: "Chữ C trong CAP là gì?",
        body: "Chữ 'C' trong định lý CAP đại diện cho điều gì và nó có ý nghĩa gì?",
        solution: "Chữ 'C' là viết tắt của **Consistency (Tính nhất quán)**. Nó có nghĩa là mọi thao tác đọc đều nhận được dữ liệu ghi mới nhất hoặc một lỗi. Tất cả các node đều thấy cùng một dữ liệu tại cùng một thời điểm."
      }
    }
  },
  {
    _id: "sd-j-019",
    difficulty: "junior",
    tags: ["load balancer", "algorithms"],
    content: {
      en: {
        title: "Round Robin Load Balancing",
        body: "Briefly explain the Round Robin load balancing algorithm.",
        solution: "Round Robin is a simple load balancing algorithm that cycles through a list of available servers and sends a new request to the next server in the list, treating all servers equally."
      },
      jp: {
        title: "ラウンドロビン負荷分散",
        body: "ラウンドロビン負荷分散アルゴリズムを簡潔に説明しなさい。",
        solution: "ラウンドロビンはシンプルな負荷分散アルゴリズムで、利用可能なサーバーのリストを循環し、新しいリクエストをリスト内の次のサーバーに送信し、すべてのサーバーを平等に扱います。"
      },
      vi: {
        title: "Load Balancing Round Robin",
        body: "Giải thích ngắn gọn thuật toán cân bằng tải Round Robin.",
        solution: "Round Robin là một thuật toán cân bằng tải đơn giản, luân phiên qua danh sách các máy chủ có sẵn và gửi yêu cầu mới đến máy chủ tiếp theo trong danh sách, đối xử bình đẳng với tất cả các máy chủ."
      }
    }
  },
  {
    _id: "sd-j-020",
    difficulty: "junior",
    tags: ["scaling", "stateless"],
    content: {
      en: {
        title: "Importance of Stateless Services",
        body: "Why is it generally better for a web application's backend services to be stateless for scaling?",
        solution: "Stateless services do not store session data locally, meaning any request can be routed to any available server by the load balancer. This makes horizontal scaling (adding more servers) simple and efficient."
      },
      jp: {
        title: "ステートレスサービスの重要性",
        body: "ウェブアプリケーションのバックエンドサービスがスケーリングのためにステートレスである方が一般的に良いのはなぜですか？",
        solution: "ステートレスサービスはセッションデータをローカルに保存しないため、どのリクエストもロードバランサーによって利用可能な任意のサーバーにルーティングできます。これにより、水平スケーリング（サーバーの追加）がシンプルかつ効率的になります。"
      },
      vi: {
        title: "Tầm quan trọng của Dịch vụ Stateless",
        body: "Tại sao các dịch vụ backend của ứng dụng web thường nên là stateless (phi trạng thái) để phục vụ cho việc mở rộng (scaling)?",
        solution: "Dịch vụ Stateless không lưu trữ dữ liệu phiên cục bộ, điều này có nghĩa là bất kỳ yêu cầu nào cũng có thể được định tuyến đến bất kỳ máy chủ có sẵn nào bởi bộ cân bằng tải. Điều này giúp cho việc mở rộng theo chiều ngang (thêm máy chủ) trở nên đơn giản và hiệu quả."
      }
    }
  },
  {
    _id: "sd-j-021",
    difficulty: "junior",
    tags: ["database", "acid"],
    content: {
      en: {
        title: "What does A in ACID stand for?",
        body: "What does the letter 'A' represent in the ACID properties of a database, and what does it ensure?",
        solution: "The 'A' stands for **Atomicity**. It ensures that a transaction is treated as a single, indivisible unit of operations; either all of the operations in a transaction are completed, or none of them are."
      },
      jp: {
        title: "ACIDのAは何を意味しますか？",
        body: "データベースのACID特性における文字 'A' は何を表し、何を保証しますか？",
        solution: "'A' は **Atomicity (不可分性)** を表します。これは、トランザクションが一連の操作の単一の、不可分な単位として扱われることを保証します。トランザクション内のすべての操作が完了するか、またはそれらのどれも完了しないかのどちらかです。"
      },
      vi: {
        title: "Chữ A trong ACID là gì?",
        body: "Chữ 'A' trong các thuộc tính ACID của cơ sở dữ liệu đại diện cho điều gì và nó đảm bảo điều gì?",
        solution: "Chữ 'A' là viết tắt của **Atomicity (Tính nguyên tố)**. Nó đảm bảo rằng một giao dịch được coi là một đơn vị thao tác duy nhất, không thể chia cắt; hoặc tất cả các thao tác trong một giao dịch được hoàn thành, hoặc không có thao tác nào được hoàn thành."
      }
    }
  },
  {
    _id: "sd-j-022",
    difficulty: "junior",
    tags: ["system design", "trade-offs"],
    content: {
      en: {
        title: "Definition of Trade-off",
        body: "In the context of system design, what is a 'trade-off'?",
        solution: "A trade-off is a decision where improving one aspect of a system (e.g., performance) requires sacrificing or reducing another aspect (e.g., consistency, cost, or complexity). System design often involves balancing these trade-offs."
      },
      jp: {
        title: "トレードオフの定義",
        body: "システム設計の文脈で、「トレードオフ」とは何ですか？",
        solution: "トレードオフとは、システムの1つの側面（例：パフォーマンス）を改善するために、別の側面（例：一貫性、コスト、複雑さ）を犠牲にするか減らす必要がある決定のことです。システム設計には、しばしばこれらのトレードオフのバランスを取ることが含まれます。"
      },
      vi: {
        title: "Định nghĩa Trade-off",
        body: "Trong bối cảnh thiết kế hệ thống, 'trade-off' (đánh đổi) là gì?",
        solution: "Trade-off là một quyết định trong đó việc cải thiện một khía cạnh của hệ thống (ví dụ: hiệu suất) đòi hỏi phải hy sinh hoặc giảm bớt một khía cạnh khác (ví dụ: tính nhất quán, chi phí, hoặc độ phức tạp). Thiết kế hệ thống thường liên quan đến việc cân bằng những đánh đổi này."
      }
    }
  },
  {
    _id: "sd-j-023",
    difficulty: "junior",
    tags: ["networking", "proxy"],
    content: {
      en: {
        title: "What is a Reverse Proxy?",
        body: "Explain the function of a Reverse Proxy server.",
        solution: "A Reverse Proxy sits in front of one or more web servers, intercepting requests from clients. It can provide functions like load balancing, SSL termination, and caching before forwarding the request to the appropriate backend server."
      },
      jp: {
        title: "リバースプロキシとは？",
        body: "リバースプロキシサーバーの機能を説明しなさい。",
        solution: "リバースプロキシは、1つ以上のウェブサーバーの前に配置され、クライアントからのリクエストを傍受します。適切なバックエンドサーバーにリクエストを転送する前に、ロードバランシング、SSL終端、キャッシングなどの機能を提供できます。"
      },
      vi: {
        title: "Reverse Proxy là gì?",
        body: "Giải thích chức năng của một máy chủ Reverse Proxy.",
        solution: "Reverse Proxy nằm ở phía trước một hoặc nhiều máy chủ web, chặn các yêu cầu từ máy khách. Nó có thể cung cấp các chức năng như cân bằng tải, chấm dứt SSL, và caching trước khi chuyển tiếp yêu cầu đến máy chủ backend thích hợp."
      }
    }
  },
  {
    _id: "sd-j-024",
    difficulty: "junior",
    tags: ["scaling", "database"],
    content: {
      en: {
        title: "Read Replicas",
        body: "How do database read replicas help with scalability?",
        solution: "Read replicas handle read-heavy traffic by allowing the application to distribute read queries across multiple secondary database servers, reducing the load on the primary (master) server which is typically reserved for writes."
      },
      jp: {
        title: "リードレプリカ",
        body: "データベースのリードレプリカは、スケーラビリティにどのように役立ちますか？",
        solution: "リードレプリカは、アプリケーションが読み取りクエリを複数のセカンダリデータベースサーバーに分散できるようにすることで、読み取り負荷の高いトラフィックを処理し、通常書き込みのために予約されているプライマリ（マスター）サーバーへの負荷を軽減します。"
      },
      vi: {
        title: "Read Replicas",
        body: "Các bản sao chỉ đọc (read replicas) của cơ sở dữ liệu giúp ích như thế nào cho khả năng mở rộng?",
        solution: "Read replicas xử lý lưu lượng truy cập nặng về đọc bằng cách cho phép ứng dụng phân phối các truy vấn đọc trên nhiều máy chủ cơ sở dữ liệu phụ, giảm tải cho máy chủ chính (master) thường được dành cho các thao tác ghi."
      }
    }
  },
  {
    _id: "sd-j-025",
    difficulty: "junior",
    tags: ["system design", "failure"],
    content: {
      en: {
        title: "Define Fault Tolerance",
        body: "What does 'Fault Tolerance' mean for a system?",
        solution: "Fault Tolerance is the ability of a system (computer, network, database, etc.) to continue operating without interruption when one or more of its components fail."
      },
      jp: {
        title: "耐障害性の定義",
        body: "システムにとっての「耐障害性」とはどういう意味ですか？",
        solution: "耐障害性とは、システム（コンピューター、ネットワーク、データベースなど）の1つまたは複数のコンポーネントが故障しても、中断することなく動作を継続する能力です。"
      },
      vi: {
        title: "Định nghĩa Fault Tolerance",
        body: "'Fault Tolerance' (Khả năng chịu lỗi) có ý nghĩa gì đối với một hệ thống?",
        solution: "Fault Tolerance là khả năng của một hệ thống (máy tính, mạng, cơ sở dữ liệu, v.v.) tiếp tục hoạt động mà không bị gián đoạn khi một hoặc nhiều thành phần của nó bị lỗi."
      }
    }
  },
  {
    _id: "sd-j-026",
    difficulty: "junior",
    tags: ["caching", "ttl"],
    content: {
      en: {
        title: "What is TTL in Caching?",
        body: "In caching, what does TTL stand for and what is its purpose?",
        solution: "TTL stands for **Time To Live**. It is a value that determines how long a piece of data should be kept in the cache before it is considered stale and must be re-fetched or refreshed."
      },
      jp: {
        title: "キャッシングにおけるTTLとは？",
        body: "キャッシングにおいて、TTLは何の略で、その目的は何ですか？",
        solution: "TTLは **Time To Live (生存時間)** の略です。これは、データが古くなったと見なされ、再取得または更新される必要がある前に、キャッシュに保持されるべき期間を決定する値です。"
      },
      vi: {
        title: "TTL trong Caching là gì?",
        body: "Trong caching, TTL là viết tắt của gì và mục đích của nó là gì?",
        solution: "TTL là viết tắt của **Time To Live (Thời gian sống)**. Đó là một giá trị xác định khoảng thời gian một phần dữ liệu nên được giữ trong bộ nhớ đệm trước khi nó được coi là lỗi thời và phải được tìm nạp hoặc làm mới lại."
      }
    }
  },
  {
    _id: "sd-j-027",
    difficulty: "junior",
    tags: ["networking", "api gateway"],
    content: {
      en: {
        title: "Role of an API Gateway",
        body: "Describe the primary role of an API Gateway in a microservices architecture.",
        solution: "An API Gateway acts as a single entry point for all client requests. It handles tasks like request routing, composition, authentication, rate limiting, and monitoring before passing requests to the respective microservices."
      },
      jp: {
        title: "APIゲートウェイの役割",
        body: "マイクロサービスアーキテクチャにおけるAPIゲートウェイの主な役割を説明しなさい。",
        solution: "APIゲートウェイは、すべてのクライアントリクエストの単一のエントリポイントとして機能します。リクエストをそれぞれのマイクロサービスに渡す前に、リクエストのルーティング、構成、認証、レート制限、監視などのタスクを処理します。"
      },
      vi: {
        title: "Vai trò của API Gateway",
        body: "Mô tả vai trò chính của API Gateway trong kiến trúc microservices.",
        solution: "API Gateway hoạt động như một điểm truy cập duy nhất cho tất cả các yêu cầu từ máy khách. Nó xử lý các tác vụ như định tuyến yêu cầu, tổng hợp, xác thực, giới hạn tốc độ (rate limiting) và giám sát trước khi chuyển yêu cầu đến các microservice tương ứng."
      }
    }
  },
  {
    _id: "sd-j-028",
    difficulty: "junior",
    tags: ["database", "indexing"],
    content: {
      en: {
        title: "Purpose of Database Indexing",
        body: "Why are indexes used in a database?",
        solution: "Indexes are used to speed up the retrieval of records from a database table. They work like an index in a book, allowing the database system to quickly locate the data without scanning the entire table."
      },
      jp: {
        title: "データベースインデックスの目的",
        body: "データベースでインデックスが使用されるのはなぜですか？",
        solution: "インデックスは、データベーステーブルからのレコードの取得を高速化するために使用されます。これらは本の索引のように機能し、データベースシステムがテーブル全体をスキャンすることなくデータを迅速に見つけられるようにします。"
      },
      vi: {
        title: "Mục đích của Database Indexing",
        body: "Tại sao các chỉ mục (indexes) được sử dụng trong cơ sở dữ liệu?",
        solution: "Các chỉ mục được sử dụng để tăng tốc độ truy xuất các bản ghi từ một bảng cơ sở dữ liệu. Chúng hoạt động như một mục lục trong sách, cho phép hệ thống cơ sở dữ liệu nhanh chóng định vị dữ liệu mà không cần quét toàn bộ bảng."
      }
    }
  },
  {
    _id: "sd-j-029",
    difficulty: "junior",
    tags: ["networking", "http"],
    content: {
      en: {
        title: "HTTP Status Code 503",
        body: "What does an HTTP 503 Service Unavailable status code typically indicate in a system?",
        solution: "A 503 status code indicates that the server is currently unable to handle the request due to temporary overloading or maintenance. It implies the service might become available again later."
      },
      jp: {
        title: "HTTPステータスコード503",
        body: "システムにおいて、HTTP 503 Service Unavailableステータスコードは通常何を示しますか？",
        solution: "503ステータスコードは、サーバーが一時的な過負荷またはメンテナンスのために現在リクエストを処理できないことを示します。これは、サービスが後で再び利用可能になる可能性があることを意味します。"
      },
      vi: {
        title: "Mã trạng thái HTTP 503",
        body: "Mã trạng thái HTTP 503 Service Unavailable (Dịch vụ không khả dụng) thường chỉ ra điều gì trong một hệ thống?",
        solution: "Mã trạng thái 503 cho biết máy chủ hiện không thể xử lý yêu cầu do quá tải tạm thời hoặc đang bảo trì. Nó ngụ ý rằng dịch vụ có thể hoạt động trở lại sau đó."
      }
    }
  },
  {
    _id: "sd-j-030",
    difficulty: "junior",
    tags: ["caching", "consistency"],
    content: {
      en: {
        title: "Cache-Aside Pattern",
        body: "Briefly describe the Cache-Aside caching pattern.",
        solution: "In the Cache-Aside pattern, the application is responsible for managing the cache. On a read, it checks the cache first. If a miss, it fetches data from the database, returns it, and writes it to the cache. On a write, it updates the database and invalidates the corresponding cache entry."
      },
      jp: {
        title: "キャッシュアサイドパターン",
        body: "キャッシュアサイドキャッシングパターンを簡潔に説明しなさい。",
        solution: "キャッシュアサイドパターンでは、アプリケーションがキャッシュの管理を担当します。読み取り時には、まずキャッシュをチェックします。ヒットしない場合は、データベースからデータを取得し、それを返し、キャッシュに書き込みます。書き込み時には、データベースを更新し、対応するキャッシュエントリを無効にします。"
      },
      vi: {
        title: "Mô hình Cache-Aside",
        body: "Mô tả ngắn gọn mô hình caching Cache-Aside.",
        solution: "Trong mô hình Cache-Aside, ứng dụng chịu trách nhiệm quản lý bộ nhớ đệm. Khi đọc, nó kiểm tra bộ nhớ đệm trước. Nếu không có (miss), nó tìm nạp dữ liệu từ cơ sở dữ liệu, trả về và ghi vào bộ nhớ đệm. Khi ghi, nó cập nhật cơ sở dữ liệu và vô hiệu hóa mục nhập cache tương ứng."
      }
    }
  },
  {
    _id: "sd-j-031",
    difficulty: "junior",
    tags: ["rate limiting", "security"],
    content: {
      en: {
        title: "Purpose of Rate Limiting",
        body: "What is the main goal of implementing Rate Limiting in an API?",
        solution: "The main goal of Rate Limiting is to control the amount of incoming traffic/requests an API can handle over a specific period. This prevents abuse, protects against denial-of-service (DoS) attacks, and ensures fair usage among clients."
      },
      jp: {
        title: "レート制限の目的",
        body: "APIにレート制限を実装する主な目的は何ですか？",
        solution: "レート制限の主な目的は、APIが特定の期間に処理できる着信トラフィック/リクエストの量を制御することです。これにより、悪用を防ぎ、サービス拒否（DoS）攻撃から保護し、クライアント間の公平な使用を保証します。"
      },
      vi: {
        title: "Mục đích của Rate Limiting",
        body: "Mục tiêu chính của việc triển khai Rate Limiting (Giới hạn tốc độ) trong một API là gì?",
        solution: "Mục tiêu chính của Rate Limiting là kiểm soát số lượng lưu lượng truy cập/yêu cầu đến mà một API có thể xử lý trong một khoảng thời gian cụ thể. Điều này ngăn chặn việc lạm dụng, bảo vệ khỏi các cuộc tấn công từ chối dịch vụ (DoS) và đảm bảo việc sử dụng công bằng giữa các máy khách."
      }
    }
  },
  {
    _id: "sd-j-032",
    difficulty: "junior",
    tags: ["design patterns", "publisher-subscriber"],
    content: {
      en: {
        title: "Publisher/Subscriber Pattern",
        body: "Describe the core idea of the Publisher-Subscriber (Pub/Sub) pattern.",
        solution: "The Pub/Sub pattern involves publishers (senders) communicating asynchronously with subscribers (receivers) through a channel (topic), without knowing who the subscribers are. This decouples the senders and receivers."
      },
      jp: {
        title: "パブリッシャー/サブスクライバーパターン",
        body: "パブリッシャー-サブスクライバー（Pub/Sub）パターンの核となる考え方を説明しなさい。",
        solution: "Pub/Subパターンには、パブリッシャー（送信者）がサブスクライバーが誰であるかを知ることなく、チャネル（トピック）を介してサブスクライバー（受信者）と非同期に通信することが含まれます。これにより、送信者と受信者が疎結合になります。"
      },
      vi: {
        title: "Mô hình Publisher/Subscriber",
        body: "Mô tả ý tưởng cốt lõi của mô hình Publisher-Subscriber (Pub/Sub).",
        solution: "Mô hình Pub/Sub liên quan đến việc các nhà xuất bản (publishers - người gửi) giao tiếp bất đồng bộ với các người đăng ký (subscribers - người nhận) thông qua một kênh (topic), mà không cần biết người đăng ký là ai. Điều này giúp giảm sự phụ thuộc giữa người gửi và người nhận."
      }
    }
  },
  {
    _id: "sd-j-033",
    difficulty: "junior",
    tags: ["database", "nosql"],
    content: {
      en: {
        title: "Use Case for Key-Value Store",
        body: "Provide a common use case for a Key-Value NoSQL database.",
        solution: "A common use case is caching (e.g., session management, storing user profiles for quick lookups) because of its fast read/write speeds achieved by simple key-based access."
      },
      jp: {
        title: "キーバリューストアのユースケース",
        body: "キーバリューNoSQLデータベースの一般的なユースケースを挙げてください。",
        solution: "一般的なユースケースは、シンプルなキーベースのアクセスによって実現される高速な読み取り/書き込み速度のため、キャッシング（例：セッション管理、迅速な検索のためのユーザープロファイルの保存）です。"
      },
      vi: {
        title: "Trường hợp sử dụng Key-Value Store",
        body: "Đưa ra một trường hợp sử dụng phổ biến cho cơ sở dữ liệu NoSQL Key-Value.",
        solution: "Một trường hợp sử dụng phổ biến là caching (ví dụ: quản lý phiên, lưu trữ hồ sơ người dùng để tra cứu nhanh) do tốc độ đọc/ghi nhanh chóng đạt được bằng cách truy cập dựa trên khóa đơn giản."
      }
    }
  },
  {
    _id: "sd-j-034",
    difficulty: "junior",
    tags: ["system design", "idempotent"],
    content: {
      en: {
        title: "What is Idempotency?",
        body: "Define 'Idempotency' in the context of API design.",
        solution: "An operation is Idempotent if executing it multiple times produces the same result as executing it once. This is crucial for handling retries in distributed systems without causing side effects (e.g., charging a customer twice)."
      },
      jp: {
        title: "冪等性とは？",
        body: "API設計の文脈で「冪等性（Idempotency）」を定義しなさい。",
        solution: "冪等性とは、ある操作を複数回実行しても、1回実行したのと同じ結果になることです。これは、分散システムで副作用（例：顧客に二重に請求する）を引き起こすことなく再試行を処理するために重要です。"
      },
      vi: {
        title: "Idempotency là gì?",
        body: "Định nghĩa 'Idempotency' (Tính lũy đẳng) trong bối cảnh thiết kế API.",
        solution: "Một thao tác là Idempotent nếu việc thực hiện nó nhiều lần tạo ra cùng một kết quả như khi thực hiện nó một lần. Điều này rất quan trọng để xử lý việc thử lại trong các hệ thống phân tán mà không gây ra tác dụng phụ (ví dụ: tính phí khách hàng hai lần)."
      }
    }
  },
  {
    _id: "sd-j-035",
    difficulty: "junior",
    tags: ["networking", "protocol"],
    content: {
      en: {
        title: "TCP vs UDP",
        body: "What is the fundamental difference in reliability between TCP and UDP?",
        solution: "TCP (Transmission Control Protocol) is a reliable, connection-oriented protocol that guarantees delivery and order of data. UDP (User Datagram Protocol) is an unreliable, connectionless protocol that does not guarantee delivery or order, but is faster due to lower overhead."
      },
      jp: {
        title: "TCP vs UDP",
        body: "TCPとUDPの信頼性における根本的な違いは何ですか？",
        solution: "TCP（Transmission Control Protocol）は、データの配信と順序を保証する信頼性の高いコネクション指向プロトコルです。UDP（User Datagram Protocol）は、配信や順序を保証しない信頼性の低いコネクションレスプロトコルですが、オーバーヘッドが低いため高速です。"
      },
      vi: {
        title: "TCP và UDP",
        body: "Sự khác biệt cơ bản về độ tin cậy giữa TCP và UDP là gì?",
        solution: "TCP (Transmission Control Protocol) là một giao thức đáng tin cậy, hướng kết nối, đảm bảo việc gửi và thứ tự của dữ liệu. UDP (User Datagram Protocol) là một giao thức không đáng tin cậy, không kết nối, không đảm bảo việc gửi hoặc thứ tự, nhưng nhanh hơn do chi phí overhead thấp hơn."
      }
    }
  },
  {
    _id: "sd-j-036",
    difficulty: "junior",
    tags: ["database", "nosql"],
    content: {
      en: {
        title: "Eventual Consistency",
        body: "Briefly explain the concept of 'Eventual Consistency' in distributed databases.",
        solution: "Eventual Consistency means that if no new updates are made to a data item, eventually all accesses to that item will return the last updated value. There is a delay before data is consistent across all nodes."
      },
      jp: {
        title: "結果整合性",
        body: "分散データベースにおける「結果整合性（Eventual Consistency）」の概念を簡潔に説明しなさい。",
        solution: "結果整合性とは、データ項目に新しい更新が行われない場合、最終的にその項目へのすべてのアクセスが最後に更新された値を返すことを意味します。すべてのノードでデータが一貫するまでに遅延があります。"
      },
      vi: {
        title: "Eventual Consistency",
        body: "Giải thích ngắn gọn khái niệm 'Eventual Consistency' (Tính nhất quán cuối cùng) trong các cơ sở dữ liệu phân tán.",
        solution: "Eventual Consistency có nghĩa là nếu không có cập nhật mới nào được thực hiện cho một mục dữ liệu, cuối cùng tất cả các lần truy cập vào mục đó sẽ trả về giá trị được cập nhật lần cuối. Có một độ trễ trước khi dữ liệu nhất quán trên tất cả các node."
      }
    }
  },
  {
    _id: "sd-j-037",
    difficulty: "junior",
    tags: ["caching", "design"],
    content: {
      en: {
        title: "Cache Staleness Issue",
        body: "What is the primary problem associated with cache staleness?",
        solution: "The primary problem is that the application might serve **outdated data** to the user because the cached entry has not been invalidated or updated to reflect the latest changes in the persistent storage (database)."
      },
      jp: {
        title: "キャッシュの陳腐化の問題",
        body: "キャッシュの陳腐化に関連する主な問題は何ですか？",
        solution: "主な問題は、キャッシュされたエントリが永続ストレージ（データベース）の最新の変更を反映するように無効化または更新されていないため、アプリケーションがユーザーに **古いデータ** を提供する可能性があることです。"
      },
      vi: {
        title: "Vấn đề Cache Staleness",
        body: "Vấn đề chính liên quan đến Cache Staleness (Dữ liệu cache bị lỗi thời) là gì?",
        solution: "Vấn đề chính là ứng dụng có thể phục vụ **dữ liệu lỗi thời** cho người dùng vì mục nhập được lưu trong bộ nhớ đệm chưa được vô hiệu hóa hoặc cập nhật để phản ánh những thay đổi mới nhất trong bộ lưu trữ lâu dài (cơ sở dữ liệu)."
      }
    }
  },
  {
    _id: "sd-j-038",
    difficulty: "junior",
    tags: ["scalability", "queue"],
    content: {
      en: {
        title: "Handling Task Spikes",
        body: "How does a Message Queue help a system handle sudden spikes in tasks/requests?",
        solution: "The Message Queue acts as a buffer. It accepts all requests during a spike and holds them until the worker processes can handle them at a steady rate, preventing the backend services from crashing due to overload."
      },
      jp: {
        title: "タスクの急増への対処",
        body: "メッセージキューは、システムがタスク/リクエストの突然の急増にどのように対処するのに役立ちますか？",
        solution: "メッセージキューはバッファとして機能します。急増中にすべてのリクエストを受け入れ、ワーカープロセスが一定の速度でそれらを処理できるようになるまで保持し、過負荷によるバックエンドサービスのクラッシュを防ぎます。"
      },
      vi: {
        title: "Xử lý Task Spikes",
        body: "Message Queue giúp hệ thống xử lý các đợt tăng đột biến về tác vụ/yêu cầu như thế nào?",
        solution: "Message Queue hoạt động như một bộ đệm. Nó chấp nhận tất cả các yêu cầu trong thời gian tăng đột biến và giữ chúng cho đến khi các quy trình worker có thể xử lý chúng ở tốc độ ổn định, ngăn các dịch vụ backend bị sập do quá tải."
      }
    }
  },
  {
    _id: "sd-j-039",
    difficulty: "junior",
    tags: ["security", "ddos"],
    content: {
      en: {
        title: "DDoS Attack",
        body: "What is the fundamental goal of a Distributed Denial of Service (DDoS) attack?",
        solution: "The fundamental goal of a DDoS attack is to overwhelm a target server or network with a flood of malicious traffic from multiple compromised sources, making the target's resources unavailable to legitimate users."
      },
      jp: {
        title: "DDoS攻撃",
        body: "分散型サービス拒否（DDoS）攻撃の基本的な目的は何ですか？",
        solution: "DDoS攻撃の基本的な目的は、複数の侵害されたソースからの悪意のあるトラフィックの洪水でターゲットサーバーまたはネットワークを圧倒し、正当なユーザーがターゲットのリソースを利用できなくすることです。"
      },
      vi: {
        title: "Tấn công DDoS",
        body: "Mục tiêu cơ bản của một cuộc tấn công Distributed Denial of Service (DDoS - Từ chối dịch vụ phân tán) là gì?",
        solution: "Mục tiêu cơ bản của một cuộc tấn công DDoS là làm quá tải máy chủ hoặc mạng mục tiêu bằng một lượng lớn lưu lượng truy cập độc hại từ nhiều nguồn bị xâm nhập, khiến tài nguyên của mục tiêu không khả dụng đối với người dùng hợp pháp."
      }
    }
  },
  {
    _id: "sd-j-040",
    difficulty: "junior",
    tags: ["networking", "firewall"],
    content: {
      en: {
        title: "Function of a Firewall",
        body: "What is the primary role of a Firewall in system networking?",
        solution: "A Firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules. Its primary role is to establish a barrier between a trusted internal network and untrusted external networks (like the Internet)."
      },
      jp: {
        title: "ファイアウォールの機能",
        body: "システムネットワーキングにおけるファイアウォールの主な役割は何ですか？",
        solution: "ファイアウォールは、事前に決定されたセキュリティルールに基づいて、入ってくるおよび出ていくネットワークトラフィックを監視および制御します。その主な役割は、信頼できる内部ネットワークと信頼できない外部ネットワーク（インターネットなど）の間に障壁を確立することです。"
      },
      vi: {
        title: "Chức năng của Firewall",
        body: "Vai trò chính của Tường lửa (Firewall) trong mạng hệ thống là gì?",
        solution: "Tường lửa giám sát và kiểm soát lưu lượng mạng đến và đi dựa trên các quy tắc bảo mật được xác định trước. Vai trò chính của nó là thiết lập một rào cản giữa một mạng nội bộ đáng tin cậy và các mạng bên ngoài không đáng tin cậy (như Internet)."
      }
    }
  },
  {
    _id: "sd-j-041",
    difficulty: "junior",
    tags: ["architecture", "saas"],
    content: {
      en: {
        title: "SaaS Definition",
        body: "What does SaaS stand for, and what is the key characteristic of this deployment model?",
        solution: "SaaS stands for **Software as a Service**. The key characteristic is that the software is centrally hosted and managed by a third-party provider and is made available to customers over the internet, usually on a subscription basis."
      },
      jp: {
        title: "SaaSの定義",
        body: "SaaSは何の略で、このデプロイメントモデルの主要な特徴は何ですか？",
        solution: "SaaSは **Software as a Service** の略です。主要な特徴は、ソフトウェアがサードパーティプロバイダーによって一元的にホストおよび管理され、通常はサブスクリプションベースでインターネット経由で顧客に提供されることです。"
      },
      vi: {
        title: "Định nghĩa SaaS",
        body: "SaaS là viết tắt của gì, và đặc điểm chính của mô hình triển khai này là gì?",
        solution: "SaaS là viết tắt của **Software as a Service (Phần mềm dưới dạng Dịch vụ)**. Đặc điểm chính là phần mềm được lưu trữ và quản lý tập trung bởi một nhà cung cấp bên thứ ba và được cung cấp cho khách hàng qua internet, thường dựa trên cơ sở đăng ký (subscription)."
      }
    }
  },
  {
    _id: "sd-j-042",
    difficulty: "junior",
    tags: ["system design", "monitoring"],
    content: {
      en: {
        title: "Definition of Metrics",
        body: "In system monitoring, what are 'Metrics'?",
        solution: "Metrics are quantitative measures used to track the performance and health of a system or application over time (e.g., CPU utilization, request latency, error rate)."
      },
      jp: {
        title: "メトリクスの定義",
        body: "システム監視において、「メトリクス」とは何ですか？",
        solution: "メトリクスは、システムのパフォーマンスと健全性を経時的に追跡するために使用される定量的な測定値です（例：CPU使用率、リクエストレイテンシ、エラー率）。"
      },
      vi: {
        title: "Định nghĩa Metrics",
        body: "Trong giám sát hệ thống, 'Metrics' (Chỉ số) là gì?",
        solution: "Metrics là các phép đo định lượng được sử dụng để theo dõi hiệu suất và tình trạng của một hệ thống hoặc ứng dụng theo thời gian (ví dụ: mức sử dụng CPU, độ trễ yêu cầu, tỷ lệ lỗi)."
      }
    }
  },
  {
    _id: "sd-j-043",
    difficulty: "junior",
    tags: ["database", "nosql", "document"],
    content: {
      en: {
        title: "Document Database Model",
        body: "How does a Document-based NoSQL database primarily store its data?",
        solution: "A Document database (like MongoDB) stores data in flexible, semi-structured data formats, typically JSON or BSON documents. These documents can have varying structures and do not require a rigid schema."
      },
      jp: {
        title: "ドキュメントデータベースモデル",
        body: "ドキュメントベースのNoSQLデータベースは、主にどのようにデータを保存しますか？",
        solution: "ドキュメントデータベース（MongoDBなど）は、通常JSONまたはBSONドキュメントの柔軟な半構造化データ形式でデータを保存します。これらのドキュメントは、構造が異なっていてもよく、厳密なスキーマを必要としません。"
      },
      vi: {
        title: "Mô hình Document Database",
        body: "Cơ sở dữ liệu NoSQL dựa trên Document chủ yếu lưu trữ dữ liệu của nó như thế nào?",
        solution: "Cơ sở dữ liệu Document (như MongoDB) lưu trữ dữ liệu ở các định dạng dữ liệu linh hoạt, bán cấu trúc, điển hình là các tài liệu JSON hoặc BSON. Các tài liệu này có thể có cấu trúc khác nhau và không yêu cầu một schema cứng nhắc."
      }
    }
  },
  {
    _id: "sd-j-044",
    difficulty: "junior",
    tags: ["networking", "load balancer"],
    content: {
      en: {
        title: "Sticky Sessions",
        body: "What is the purpose of 'Sticky Sessions' in load balancing?",
        solution: "Sticky Sessions (Session Affinity) ensure that a client's requests are consistently routed to the *same* backend server that handled the client's first request. This is often necessary for stateful applications that store session data locally on the server."
      },
      jp: {
        title: "スティッキーセッション",
        body: "負荷分散における「スティッキーセッション」の目的は何ですか？",
        solution: "スティッキーセッション（セッションアフィニティ）は、クライアントのリクエストが、クライアントの最初のリクエストを処理した *同じ* バックエンドサーバーに一貫してルーティングされることを保証します。これは、サーバーにセッションデータをローカルに保存するステートフルなアプリケーションにとってしばしば必要です。"
      },
      vi: {
        title: "Sticky Sessions",
        body: "Mục đích của 'Sticky Sessions' (Phiên cố định) trong cân bằng tải là gì?",
        solution: "Sticky Sessions (Session Affinity) đảm bảo rằng các yêu cầu của máy khách được định tuyến nhất quán đến *cùng một* máy chủ backend đã xử lý yêu cầu đầu tiên của máy khách. Điều này thường cần thiết cho các ứng dụng có trạng thái (stateful) lưu trữ dữ liệu phiên cục bộ trên máy chủ."
      }
    }
  },
  {
    _id: "sd-j-045",
    difficulty: "junior",
    tags: ["microservices", "communication"],
    content: {
      en: {
        title: "Inter-service Communication",
        body: "Name two common methods for inter-service communication in a microservices architecture.",
        solution: "Two common methods are: 1. **Synchronous Communication** (e.g., REST API calls, gRPC) and 2. **Asynchronous Communication** (e.g., Message Queues, Event Streams like Kafka)."
      },
      jp: {
        title: "サービス間通信",
        body: "マイクロサービスアーキテクチャにおけるサービス間通信の一般的な方法を2つ挙げてください。",
        solution: "一般的な方法として、1. **同期通信**（例：REST APIコール、gRPC）と 2. **非同期通信**（例：メッセージキュー、Kafkaのようなイベントストリーム）の2つがあります。"
      },
      vi: {
        title: "Giao tiếp giữa các Service",
        body: "Nêu tên hai phương pháp phổ biến để giao tiếp giữa các service trong kiến trúc microservices.",
        solution: "Hai phương pháp phổ biến là: 1. **Giao tiếp đồng bộ** (ví dụ: REST API calls, gRPC) và 2. **Giao tiếp bất đồng bộ** (ví dụ: Message Queues, Event Streams như Kafka)."
      }
    }
  },
  {
    _id: "sd-j-046",
    difficulty: "junior",
    tags: ["scaling", "write"],
    content: {
      en: {
        title: "Write Scalability Challenge",
        body: "What is the primary challenge when trying to scale a system that has very heavy write traffic (write-heavy)?",
        solution: "The primary challenge is **data consistency** and **write contention**. In a distributed system, coordinating writes across multiple database nodes to maintain a single source of truth without significant latency or conflicts is difficult."
      },
      jp: {
        title: "書き込みスケーラビリティの課題",
        body: "書き込みトラフィックが非常に多いシステム（書き込み負荷が高い）をスケーリングしようとする際の主な課題は何ですか？",
        solution: "主な課題は **データの一貫性** と **書き込み競合** です。分散システムにおいて、遅延や競合を伴わずに単一の真実の源を維持するために、複数のデータベースノード間での書き込みを調整することは困難です。"
      },
      vi: {
        title: "Thách thức về Write Scalability",
        body: "Thách thức chính khi cố gắng mở rộng một hệ thống có lưu lượng ghi rất lớn (write-heavy) là gì?",
        solution: "Thách thức chính là **tính nhất quán của dữ liệu** và **tranh chấp ghi (write contention)**. Trong một hệ thống phân tán, việc điều phối các thao tác ghi trên nhiều node cơ sở dữ liệu để duy trì một nguồn sự thật duy nhất mà không có độ trễ hoặc xung đột đáng kể là rất khó khăn."
      }
    }
  },
  {
    _id: "sd-j-047",
    difficulty: "junior",
    tags: ["system design", "availability"],
    content: {
      en: {
        title: "Single Point of Failure",
        body: "What is a 'Single Point of Failure' (SPOF) in system design, and why is it bad?",
        solution: "An SPOF is any component whose failure would halt the entire system's operation. It's bad because it severely reduces the system's overall fault tolerance and availability."
      },
      jp: {
        title: "単一障害点",
        body: "システム設計における「単一障害点」（SPOF）とは何ですか、そしてなぜそれは悪いのですか？",
        solution: "SPOFは、その障害がシステム全体の動作を停止させるコンポーネントのことです。システムの全体的な耐障害性と可用性を著しく低下させるため、悪いとされます。"
      },
      vi: {
        title: "Single Point of Failure",
        body: "'Single Point of Failure' (SPOF - Điểm lỗi duy nhất) trong thiết kế hệ thống là gì và tại sao nó lại tồi tệ?",
        solution: "SPOF là bất kỳ thành phần nào mà sự cố của nó sẽ làm ngừng hoạt động toàn bộ hệ thống. Nó tồi tệ vì nó làm giảm nghiêm trọng khả năng chịu lỗi và tính sẵn sàng tổng thể của hệ thống."
      }
    }
  },
  {
    _id: "sd-j-048",
    difficulty: "junior",
    tags: ["security", "sanitization"],
    content: {
      en: {
        title: "Input Validation vs Sanitization",
        body: "What is the primary goal of input sanitization in web development/system design?",
        solution: "The primary goal of input sanitization is to clean up user input by removing or escaping malicious characters and scripts (e.g., HTML tags, SQL injection characters) to prevent security vulnerabilities like XSS or SQL Injection."
      },
      jp: {
        title: "入力サニタイズ",
        body: "ウェブ開発/システム設計における入力サニタイズの主な目的は何ですか？",
        solution: "入力サニタイズの主な目的は、悪意のある文字やスクリプト（例：HTMLタグ、SQLインジェクション文字）を削除またはエスケープすることでユーザー入力をクリーンアップし、XSSやSQLインジェクションなどのセキュリティ脆弱性を防ぐことです。"
      },
      vi: {
        title: "Input Sanitization",
        body: "Mục tiêu chính của việc 'Input Sanitization' (Vệ sinh đầu vào) trong phát triển web/thiết kế hệ thống là gì?",
        solution: "Mục tiêu chính của Input Sanitization là làm sạch đầu vào của người dùng bằng cách loại bỏ hoặc thoát các ký tự và tập lệnh độc hại (ví dụ: thẻ HTML, ký tự SQL injection) để ngăn chặn các lỗ hổng bảo mật như XSS hoặc SQL Injection."
      }
    }
  },
  {
    _id: "sd-j-049",
    difficulty: "junior",
    tags: ["database", "join"],
    content: {
      en: {
        title: "JOIN Penalty in Relational DBs",
        body: "What is the 'JOIN penalty' in a relational database context?",
        solution: "The JOIN penalty refers to the performance cost (time and resources) incurred when the database system has to combine data from multiple tables (performing a JOIN operation), especially as the number and size of tables increase."
      },
      jp: {
        title: "リレーショナルDBにおけるJOINペナルティ",
        body: "リレーショナルデータベースの文脈における「JOINペナルティ」とは何ですか？",
        solution: "JOINペナルティとは、データベースシステムが複数のテーブルからのデータを結合する必要があるときに発生するパフォーマンスコスト（時間とリソース）を指します。特にテーブルの数とサイズが増加するにつれて顕著になります。"
      },
      vi: {
        title: "JOIN Penalty trong CSDL Quan hệ",
        body: "'JOIN penalty' trong bối cảnh cơ sở dữ liệu quan hệ là gì?",
        solution: "JOIN penalty đề cập đến chi phí hiệu suất (thời gian và tài nguyên) phát sinh khi hệ thống cơ sở dữ liệu phải kết hợp dữ liệu từ nhiều bảng (thực hiện thao tác JOIN), đặc biệt khi số lượng và kích thước của các bảng tăng lên."
      }
    }
  },
  {
    _id: "sd-j-050",
    difficulty: "junior",
    tags: ["system design", "api"],
    content: {
      en: {
        title: "Rate Limiting Algorithm Example",
        body: "Name one simple algorithm commonly used to implement rate limiting.",
        solution: "A simple algorithm is the **Leaky Bucket** algorithm (requests are processed at a constant rate, like water leaking from a bucket) or the **Token Bucket** algorithm (clients must have a token to make a request, tokens are refilled over time)."
      },
      jp: {
        title: "レート制限アルゴリズムの例",
        body: "レート制限を実装するためによく使用される単純なアルゴリズムを1つ挙げてください。",
        solution: "単純なアルゴリズムは、**Leaky Bucket** アルゴリズム（リクエストはバケツから水が漏れるように一定の速度で処理される）または **Token Bucket** アルゴリズム（クライアントはリクエストを行うためにトークンを持っている必要があり、トークンは時間とともに補充される）です。"
      },
      vi: {
        title: "Ví dụ về Thuật toán Rate Limiting",
        body: "Nêu tên một thuật toán đơn giản thường được sử dụng để triển khai giới hạn tốc độ (rate limiting).",
        solution: "Một thuật toán đơn giản là thuật toán **Leaky Bucket** (các yêu cầu được xử lý với tốc độ không đổi, như nước rò rỉ từ xô) hoặc thuật toán **Token Bucket** (máy khách phải có một token để thực hiện yêu cầu, token được nạp lại theo thời gian)."
      }
    }
  }
];
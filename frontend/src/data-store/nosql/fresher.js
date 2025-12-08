const nosqlFresherQuestions = [
    // --- FRESHER (50 Questions) ---
    {
        _id: "nosql-f-001",
        difficulty: "fresher",
        tags: ["NoSQL", "definition", "RDBMS"],
        content: {
            en: {
                title: "NoSQL Definition",
                body: "What does the term 'NoSQL' primarily stand for?",
                solution: "It typically stands for 'Not Only SQL', indicating that these databases can handle relational data but also non-relational data, often using different data models."
            },
            jp: {
                title: "NoSQL の定義",
                body: "「NoSQL」という用語は主に何を意味しますか？",
                solution: "通常、「Not Only SQL」を意味し、これらのデータベースがリレーショナルデータだけでなく非リレーショナルデータも処理でき、多くの場合、異なるデータモデルを使用することを示します。"
            },
            vi: {
                title: "Định nghĩa NoSQL",
                body: "Thuật ngữ 'NoSQL' chủ yếu là viết tắt của từ gì?",
                solution: "Nó thường là viết tắt của 'Not Only SQL', chỉ ra rằng các cơ sở dữ liệu này có thể xử lý dữ liệu quan hệ nhưng cũng có thể xử lý dữ liệu phi quan hệ, thường sử dụng các mô hình dữ liệu khác nhau."
            }
        }
    },
    {
        _id: "nosql-f-002",
        difficulty: "fresher",
        tags: ["NoSQL", "RDBMS", "schema"],
        content: {
            en: {
                title: "Schema Flexibility",
                body: "What is a major difference in how NoSQL databases handle schema compared to traditional RDBMS?",
                solution: "NoSQL databases are often schema-less or have flexible schemas, meaning the structure of the data can vary from one record to the next without a rigid pre-defined table structure."
            },
            jp: {
                title: "スキーマの柔軟性",
                body: "NoSQL データベースがスキーマを処理する方法と従来の RDBMS の方法との大きな違いは何ですか？",
                solution: "NoSQL データベースはしばしばスキーマレスであるか、柔軟なスキーマを持ちます。つまり、厳密に事前定義されたテーブル構造なしに、データの構造がレコードごとに異なる場合があります。"
            },
            vi: {
                title: "Tính linh hoạt của Schema",
                body: "Sự khác biệt lớn trong cách cơ sở dữ liệu NoSQL xử lý schema so với RDBMS truyền thống là gì?",
                solution: "Các cơ sở dữ liệu NoSQL thường là schema-less (không có schema) hoặc có schema linh hoạt, nghĩa là cấu trúc dữ liệu có thể khác nhau giữa các bản ghi mà không cần một cấu trúc bảng cứng nhắc được định nghĩa trước."
            }
        }
    },
    {
        _id: "nosql-f-003",
        difficulty: "fresher",
        tags: ["data model", "Document", "MongoDB"],
        content: {
            en: {
                title: "Document Model",
                body: "What is the name of the NoSQL data model where data is stored in flexible, semi-structured records, typically in JSON or BSON format?",
                solution: "Document Store or Document Model."
            },
            jp: {
                title: "ドキュメントモデル",
                body: "データが柔軟な半構造化レコード（通常は JSON または BSON 形式）で保存される NoSQL データモデルの名前は何ですか？",
                solution: "ドキュメントストアまたはドキュメントモデル。"
            },
            vi: {
                title: "Mô hình Document",
                body: "Tên của mô hình dữ liệu NoSQL trong đó dữ liệu được lưu trữ trong các bản ghi bán cấu trúc, linh hoạt, thường ở định dạng JSON hoặc BSON là gì?",
                solution: "Document Store hoặc Mô hình Document."
            }
        }
    },
    {
        _id: "nosql-f-004",
        difficulty: "fresher",
        tags: ["data model", "Key-Value", "Redis"],
        content: {
            en: {
                title: "Key-Value Model",
                body: "Which NoSQL model stores data as a collection of simple key-value pairs, often used for caching and session management?",
                solution: "Key-Value Store Model."
            },
            jp: {
                title: "キーバリューモデル",
                body: "データのコレクションとして単純なキーと値のペアを保存し、しばしばキャッシュやセッション管理に使用される NoSQL モデルは何ですか？",
                solution: "キーバリューストアモデル。"
            },
            vi: {
                title: "Mô hình Key-Value",
                body: "Mô hình NoSQL nào lưu trữ dữ liệu dưới dạng tập hợp các cặp khóa-giá trị đơn giản, thường được sử dụng cho việc caching và quản lý phiên?",
                solution: "Mô hình Key-Value Store."
            }
        }
    },
    {
        _id: "nosql-f-005",
        difficulty: "fresher",
        tags: ["data model", "Column-Family", "Cassandra"],
        content: {
            en: {
                title: "Columnar Model",
                body: "Which NoSQL data model organizes data into column families, making it highly efficient for querying data by column rather than row?",
                solution: "Column-Family Store or Wide-Column Store Model."
            },
            jp: {
                title: "カラム型モデル",
                body: "データをカラムファミリーに編成し、行ではなく列でデータをクエリするのに非常に効率的な NoSQL データモデルは何ですか？",
                solution: "カラムファミリーストアまたはワイドカラムストアモデル。"
            },
            vi: {
                title: "Mô hình Cột",
                body: "Mô hình dữ liệu NoSQL nào tổ chức dữ liệu thành các 'column families', giúp việc truy vấn dữ liệu theo cột hiệu quả hơn nhiều so với theo hàng?",
                solution: "Mô hình Column-Family Store (Lưu trữ theo Họ Cột) hoặc Wide-Column Store."
            }
        }
    },
    {
        _id: "nosql-f-006",
        difficulty: "fresher",
        tags: ["data model", "Graph", "Neo4j"],
        content: {
            en: {
                title: "Graph Model",
                body: "Which NoSQL model is best suited for managing highly interconnected data, where relationships between data points are as important as the data points themselves?",
                solution: "Graph Database Model."
            }
            ,
            jp: {
                title: "グラフモデル",
                body: "データポイント間の関係がデータポイント自体と同じくらい重要である、高度に相互接続されたデータを管理するのに最適な NoSQL モデルは何ですか？",
                solution: "グラフデータベースモデル。"
            }
            ,
            vi: {
                title: "Mô hình Graph",
                body: "Mô hình NoSQL nào phù hợp nhất để quản lý dữ liệu có tính kết nối cao, trong đó các mối quan hệ giữa các điểm dữ liệu cũng quan trọng như bản thân các điểm dữ liệu đó?",
                solution: "Mô hình Graph Database (Cơ sở dữ liệu Đồ thị)."
            }
        }
    },
    {
        _id: "nosql-f-007",
        difficulty: "fresher",
        tags: ["Key-Value", "caching", "performance"],
        content: {
            en: {
                title: "Key-Value Use Case",
                body: "What common web application feature is Key-Value stores like Redis most frequently used for due to their extremely fast read/write speeds?",
                solution: "Caching data (storing frequently accessed data temporarily)."
            }
            ,
            jp: {
                title: "キーバリューの使用例",
                body: "Redis のようなキーバリューストアが、その非常に速い読み書き速度のために最も頻繁に使用される一般的な Web アプリケーションの機能は何ですか？",
                solution: "データのキャッシング（頻繁にアクセスされるデータを一時的に保存すること）。"
            }
            ,
            vi: {
                title: "Trường hợp sử dụng Key-Value",
                body: "Tính năng ứng dụng web phổ biến nào mà các Key-Value store như Redis được sử dụng thường xuyên nhất nhờ tốc độ đọc/ghi cực nhanh của chúng?",
                solution: "Caching dữ liệu (lưu trữ tạm thời dữ liệu được truy cập thường xuyên)."
            }
        }
    },
    {
        _id: "nosql-f-008",
        difficulty: "fresher",
        tags: ["scalability", "horizontal", "RDBMS"],
        content: {
            en: {
                title: "NoSQL Scalability",
                body: "NoSQL databases are often favored for their horizontal scaling capability. What does 'horizontal scaling' mean in database terms?",
                solution: "Adding more machines/servers (nodes) to a system to distribute the load, rather than upgrading the resources of a single machine (vertical scaling)."
            }
            ,
            jp: {
                title: "NoSQL のスケーラビリティ",
                body: "NoSQL データベースは、その水平スケーリング機能でしばしば好まれます。データベースの用語で「水平スケーリング」とは何を意味しますか？",
                solution: "単一のマシンのリソースをアップグレードする（垂直スケーリング）のではなく、システムにさらに多くのマシン/サーバー（ノード）を追加して負荷を分散すること。"
            }
            ,
            vi: {
                title: "Khả năng mở rộng của NoSQL",
                body: "Các cơ sở dữ liệu NoSQL thường được ưa chuộng vì khả năng mở rộng theo chiều ngang (horizontal scaling). 'Mở rộng theo chiều ngang' có nghĩa là gì trong thuật ngữ cơ sở dữ liệu?",
                solution: "Thêm nhiều máy/máy chủ (node) vào hệ thống để phân phối tải, thay vì nâng cấp tài nguyên của một máy duy nhất (mở rộng theo chiều dọc - vertical scaling)."
            }
        }
    },
    {
        _id: "nosql-f-009",
        difficulty: "fresher",
        tags: ["Document", "indexing"],
        content: {
            en: {
                title: "Document Storage Format",
                body: "MongoDB, a popular Document store, typically stores data internally using which binary serialization format?",
                solution: "BSON (Binary JSON)."
            }
            ,
            jp: {
                title: "ドキュメント保存形式",
                body: "一般的なドキュメントストアである MongoDB は、通常、内部的にどのバイナリシリアル化形式を使用してデータを保存しますか？",
                solution: "BSON (Binary JSON)。"
            }
            ,
            vi: {
                title: "Định dạng lưu trữ Document",
                body: "MongoDB, một Document store phổ biến, thường lưu trữ dữ liệu nội bộ bằng cách sử dụng định dạng tuần tự hóa nhị phân nào?",
                solution: "BSON (Binary JSON)."
            }
        }
    },
    {
        _id: "nosql-f-010",
        difficulty: "fresher",
        tags: ["ACID", "BASE", "consistency"],
        content: {
            en: {
                title: "BASE vs ACID",
                body: "While RDBMS follows the ACID properties, many NoSQL databases follow the **BASE** properties. What does the 'B' in BASE stand for?",
                solution: "Basically Available. This prioritizes availability and eventual consistency over immediate consistency."
            }
            ,
            jp: {
                title: "BASE 対 ACID",
                body: "RDBMS は ACID 特性を追求しますが、多くの NoSQL データベースは **BASE** 特性を追求します。BASE の「B」は何を意味しますか？",
                solution: "Basically Available（基本的に利用可能）。これは、即時の整合性よりも可用性と結果整合性を優先します。"
            }
            ,
            vi: {
                title: "BASE so với ACID",
                body: "Trong khi RDBMS tuân theo các thuộc tính ACID, nhiều cơ sở dữ liệu NoSQL tuân theo các thuộc tính **BASE**. Chữ 'B' trong BASE là viết tắt của từ gì?",
                solution: "Basically Available (Về cơ bản là có sẵn). Điều này ưu tiên tính sẵn sàng và tính nhất quán cuối cùng (eventual consistency) hơn tính nhất quán tức thời."
            }
        }
    },
    {
        _id: "nosql-f-011",
        difficulty: "fresher",
        tags: ["Graph", "terms", "nodes", "edges"],
        content: {
            en: {
                title: "Graph Terminology",
                body: "In a Graph database, what two terms are used to represent data points and the relationships between them?",
                solution: "Nodes (for data points/entities) and Edges or Relationships (for connections)."
            }
            ,
            jp: {
                title: "グラフの用語",
                body: "グラフデータベースでは、データポイントとそれらの間の関係を表すために使用される 2 つの用語は何ですか？",
                solution: "ノード（データポイント/エンティティ用）とエッジまたはリレーションシップ（接続用）。"
            }
            ,
            vi: {
                title: "Thuật ngữ Graph",
                body: "Trong cơ sở dữ liệu Graph, hai thuật ngữ nào được sử dụng để đại diện cho các điểm dữ liệu và mối quan hệ giữa chúng?",
                solution: "Nodes (cho các điểm dữ liệu/thực thể) và Edges hoặc Relationships (cho các kết nối)."
            }
        }
    },
    {
        _id: "nosql-f-012",
        difficulty: "fresher",
        tags: ["Document", "embedded", "normalization"],
        content: {
            en: {
                title: "Denormalization",
                body: "In Document databases, data is often stored together (denormalized). What is the main benefit of this approach over normalizing data across many tables?",
                solution: "Fewer joins are required for reading data, leading to faster query performance for many use cases."
            }
            ,
            jp: {
                title: "非正規化",
                body: "ドキュメントデータベースでは、データはしばしばまとめて保存されます（非正規化）。多くのテーブルにわたってデータを正規化するよりも、このアプローチの主な利点は何ですか？",
                solution: "データを読み取るためにより少ない JOIN が必要になり、多くのユースケースでより高速なクエリパフォーマンスにつながります。"
            }
            ,
            vi: {
                title: "Phi chuẩn hóa",
                body: "Trong các cơ sở dữ liệu Document, dữ liệu thường được lưu trữ cùng nhau (phi chuẩn hóa). Lợi ích chính của cách tiếp cận này so với việc chuẩn hóa dữ liệu trên nhiều bảng là gì?",
                solution: "Cần ít phép nối (join) hơn để đọc dữ liệu, dẫn đến hiệu suất truy vấn nhanh hơn cho nhiều trường hợp sử dụng."
            }
        }
    },
    {
        _id: "nosql-f-013",
        difficulty: "fresher",
        tags: ["NoSQL", "use case", "CMS"],
        content: {
            en: {
                title: "CMS Use Case",
                body: "Which type of NoSQL database is often a good choice for Content Management Systems (CMS) due to its ability to handle content of varying structures (e.g., articles, comments, user profiles)?",
                solution: "Document Store."
            }
            ,
            jp: {
                title: "CMS の使用例",
                body: "構造が異なるコンテンツ（記事、コメント、ユーザープロファイルなど）を処理できる能力から、コンテンツ管理システム（CMS）に適している NoSQL データベースのタイプは何ですか？",
                solution: "ドキュメントストア。"
            }
            ,
            vi: {
                title: "Trường hợp sử dụng CMS",
                body: "Loại cơ sở dữ liệu NoSQL nào thường là lựa chọn tốt cho Hệ thống Quản lý Nội dung (CMS) do khả năng xử lý nội dung có cấu trúc khác nhau (ví dụ: bài viết, bình luận, hồ sơ người dùng)?",
                solution: "Document Store."
            }
        }
    },
    {
        _id: "nosql-f-014",
        difficulty: "fresher",
        tags: ["data model", "Column-Family", "rows"],
        content: {
            en: {
                title: "Wide-Column Flexibility",
                body: "In a Wide-Column store, does every row need to have the exact same set of columns defined?",
                solution: "No. Unlike RDBMS, columns can be defined dynamically per row, allowing for very sparse data."
            }
            ,
            jp: {
                title: "ワイドカラムの柔軟性",
                body: "ワイドカラムストアでは、すべての行がまったく同じ列のセットを持つ必要がありますか？",
                solution: "いいえ。RDBMS とは異なり、列は行ごとに動的に定義でき、非常にスパースなデータを扱うことができます。"
            }
            ,
            vi: {
                title: "Tính linh hoạt của Cột rộng",
                body: "Trong một Wide-Column store, liệu mọi hàng có cần phải có cùng một tập hợp các cột được định nghĩa hay không?",
                solution: "Không. Không giống như RDBMS, các cột có thể được định nghĩa linh hoạt theo từng hàng, cho phép xử lý dữ liệu rất thưa thớt (sparse data)."
            }
        }
    },
    {
        _id: "nosql-f-015",
        difficulty: "fresher",
        tags: ["Key-Value", "simple", "query"],
        content: {
            en: {
                title: "Key-Value Querying",
                body: "How do you primarily access data in a Key-Value store?",
                solution: "By retrieving the value associated with a unique key."
            }
            ,
            jp: {
                title: "キーバリューのクエリ",
                body: "キーバリューストアでは、主にどのようにデータにアクセスしますか？",
                solution: "一意のキーに関連付けられた値を取得することによって。"
            }
            ,
            vi: {
                title: "Truy vấn Key-Value",
                body: "Bạn truy cập dữ liệu trong một Key-Value store chủ yếu bằng cách nào?",
                solution: "Bằng cách truy xuất giá trị được liên kết với một khóa duy nhất."
            }
        }
    },
    {
        _id: "nosql-f-016",
        difficulty: "fresher",
        tags: ["RDBMS", "ACID", "Atomicity"],
        content: {
            en: {
                title: "ACID Atomicity",
                body: "In the ACID acronym (RDBMS), what does 'Atomicity' mean?",
                solution: "A transaction must be treated as a single, indivisible unit; it either fully succeeds or fully fails (all or nothing)."
            }
            ,
            jp: {
                title: "ACID の原子性",
                body: "ACID 頭字語（RDBMS）において、「原子性（Atomicity）」とは何を意味しますか？",
                solution: "トランザクションは単一の不可分な単位として扱われる必要があります。それは完全に成功するか、完全に失敗するかのどちらかです（すべてかゼロか）。"
            }
            ,
            vi: {
                title: "Atomicity của ACID",
                body: "Trong từ viết tắt ACID (RDBMS), 'Atomicity' có nghĩa là gì?",
                solution: "Một giao dịch phải được coi là một đơn vị duy nhất, không thể chia cắt; nó phải thành công hoàn toàn hoặc thất bại hoàn toàn (tất cả hoặc không có gì)."
            }
        }
    },
    {
        _id: "nosql-f-017",
        difficulty: "fresher",
        tags: ["Document", "relationships", "embedding"],
        content: {
            en: {
                title: "Modeling Relationships (Document)",
                body: "What is the term for including related data directly within a document (e.g., putting an array of comments inside an 'article' document) rather than linking via IDs?",
                solution: "Embedding or Denormalization."
            }
            ,
            jp: {
                title: "関係のモデリング（ドキュメント）",
                body: "ID を介してリンクするのではなく、関連するデータをドキュメント内に直接含める（例：「記事」ドキュメント内にコメントの配列を入れる）ことを何と呼びますか？",
                solution: "埋め込み（Embedding）または非正規化（Denormalization）。"
            }
            ,
            vi: {
                title: "Mô hình hóa Mối quan hệ (Document)",
                body: "Thuật ngữ dùng để chỉ việc đưa dữ liệu liên quan trực tiếp vào bên trong một document (ví dụ: đặt một mảng các bình luận bên trong document 'bài viết') thay vì liên kết qua ID là gì?",
                solution: "Embedding (Nhúng) hoặc Denormalization (Phi chuẩn hóa)."
            }
        }
    },
    {
        _id: "nosql-f-018",
        difficulty: "fresher",
        tags: ["Graph", "Cypher", "query language"],
        content: {
            en: {
                title: "Graph Query Language",
                body: "What is the name of the popular declarative query language often used to query Graph databases like Neo4j, which uses visual ASCII art syntax?",
                solution: "Cypher."
            }
            ,
            jp: {
                title: "グラフクエリ言語",
                body: "Neo4j のようなグラフデータベースをクエリするためによく使用される、視覚的な ASCII アート構文を使用する一般的な宣言型クエリ言語の名前は何ですか？",
                solution: "Cypher。"
            }
            ,
            vi: {
                title: "Ngôn ngữ truy vấn Graph",
                body: "Tên của ngôn ngữ truy vấn khai báo phổ biến thường được sử dụng để truy vấn các cơ sở dữ liệu Graph như Neo4j, sử dụng cú pháp nghệ thuật ASCII trực quan là gì?",
                solution: "Cypher."
            }
        }
    },
    {
        _id: "nosql-f-019",
        difficulty: "fresher",
        tags: ["NoSQL", "Data Lake", "storage"],
        content: {
            en: {
                title: "Handling Unstructured Data",
                body: "Which data model or general category of NoSQL is often best suited for storing and managing unstructured data, like files, videos, or raw sensor feeds?",
                solution: "Often associated with Object Storage or Document Stores due to their flexible structure."
            }
            ,
            jp: {
                title: "非構造化データの処理",
                body: "ファイル、ビデオ、生のセンサーフィードなどの非構造化データを保存および管理するのに最も適している NoSQL のデータモデルまたは一般的なカテゴリは何ですか？",
                solution: "柔軟な構造のため、オブジェクトストレージまたはドキュメントストアに関連付けられることが多いです。"
            }
            ,
            vi: {
                title: "Xử lý Dữ liệu Phi cấu trúc",
                body: "Mô hình dữ liệu hoặc danh mục NoSQL chung nào thường phù hợp nhất để lưu trữ và quản lý dữ liệu phi cấu trúc, như tệp, video hoặc nguồn cấp dữ liệu cảm biến thô?",
                solution: "Thường được liên kết với Object Storage (Lưu trữ Đối tượng) hoặc Document Stores do cấu trúc linh hoạt của chúng."
            }
        }
    },
    {
        _id: "nosql-f-020",
        difficulty: "fresher",
        tags: ["BASE", "eventual consistency"],
        content: {
            en: {
                title: "Eventual Consistency",
                body: "In the BASE model, what does 'Eventual Consistency' mean regarding data updates across multiple servers?",
                solution: "It means that if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value (there might be a delay in synchronization)."
            }
            ,
            jp: {
                title: "結果整合性",
                body: "BASE モデルにおいて、複数のサーバー間でのデータ更新に関する「結果整合性」とは何を意味しますか？",
                solution: "特定のデータ項目に新しい更新が行われない場合、最終的にその項目へのすべてのアクセスが最後に更新された値を返すことを意味します（同期に遅延がある場合があります）。"
            }
            ,
            vi: {
                title: "Tính nhất quán cuối cùng (Eventual Consistency)",
                body: "Trong mô hình BASE, 'Eventual Consistency' có nghĩa là gì đối với việc cập nhật dữ liệu trên nhiều máy chủ?",
                solution: "Nó có nghĩa là nếu không có cập nhật mới nào được thực hiện cho một mục dữ liệu nhất định, thì cuối cùng tất cả các truy cập vào mục đó sẽ trả về giá trị được cập nhật lần cuối (có thể có sự chậm trễ trong đồng bộ hóa)."
            }
        }
    },
    {
        _id: "nosql-f-021",
        difficulty: "fresher",
        tags: ["MongoDB", "collection", "document"],
        content: {
            en: {
                title: "MongoDB Structure",
                body: "In MongoDB, what is the term for a grouping of documents, analogous to a table in RDBMS?",
                solution: "A Collection."
            }
            ,
            jp: {
                title: "MongoDB の構造",
                body: "MongoDB では、RDBMS のテーブルに類似したドキュメントのグループ化を表す用語は何ですか？",
                solution: "コレクション（Collection）。"
            }
            ,
            vi: {
                title: "Cấu trúc MongoDB",
                body: "Trong MongoDB, thuật ngữ dùng để chỉ một nhóm các document, tương tự như một bảng trong RDBMS là gì?",
                solution: "Một Collection."
            }
        }
    },
    {
        _id: "nosql-f-022",
        difficulty: "fresher",
        tags: ["RDBMS", "JOIN", "NoSQL"],
        content: {
            en: {
                title: "The Role of JOINs",
                body: "In relational databases, JOIN operations are common. Why are explicit JOINs generally avoided or less common in many NoSQL databases, especially Document and Key-Value stores?",
                solution: "Because data is often denormalized and stored together (embedded) to make retrieval faster in a single operation."
            }
            ,
            jp: {
                title: "JOIN の役割",
                body: "リレーショナルデータベースでは、JOIN 操作は一般的です。多くの NoSQL データベース、特にドキュメントストアやキーバリューストアで、明示的な JOIN が一般的に避けられるか、あまり一般的ではないのはなぜですか？",
                solution: "データがしばしば非正規化され、一緒に保存される（埋め込まれる）ため、単一の操作での取得が高速になるからです。"
            }
            ,
            vi: {
                title: "Vai trò của JOIN",
                body: "Trong các cơ sở dữ liệu quan hệ, các thao tác JOIN là phổ biến. Tại sao các thao tác JOIN rõ ràng thường được tránh hoặc ít phổ biến hơn trong nhiều cơ sở dữ liệu NoSQL, đặc biệt là Document và Key-Value stores?",
                solution: "Vì dữ liệu thường được phi chuẩn hóa và lưu trữ cùng nhau (embedded) để việc truy xuất nhanh hơn chỉ trong một thao tác duy nhất."
            }
        }
    },
    {
        _id: "nosql-f-023",
        difficulty: "fresher",
        tags: ["Graph", "use case", "social"],
        content: {
            en: {
                title: "Social Network Use Case",
                body: "Which NoSQL model is ideal for mapping and navigating complex relationships in a social network (e.g., 'Find friends of friends')?",
                solution: "Graph Database Model."
            }
            ,
            jp: {
                title: "ソーシャルネットワークの使用例",
                body: "ソーシャルネットワークにおける複雑な関係をマッピングおよびナビゲートするのに理想的な NoSQL モデルは何ですか（例：「友人の友人を見つける」）？",
                solution: "グラフデータベースモデル。"
            }
            ,
            vi: {
                title: "Trường hợp sử dụng Mạng xã hội",
                body: "Mô hình NoSQL nào là lý tưởng để ánh xạ và điều hướng các mối quan hệ phức tạp trong mạng xã hội (ví dụ: 'Tìm bạn bè của bạn bè')?",
                solution: "Mô hình Graph Database."
            }
        }
    },
    {
        _id: "nosql-f-024",
        difficulty: "fresher",
        tags: ["latency", "performance", "speed"],
        content: {
            en: {
                title: "Low Latency",
                body: "Many NoSQL databases are designed for 'low latency' access. What does 'low latency' mean for a database operation?",
                solution: "The time delay between requesting data and receiving it is very short (fast response time)."
            }
            ,
            jp: {
                title: "低レイテンシ",
                body: "多くの NoSQL データベースは「低レイテンシ」アクセス向けに設計されています。データベース操作にとって「低レイテンシ」とは何を意味しますか？",
                solution: "データを要求してから受け取るまでの時間遅延が非常に短いこと（高速な応答時間）。"
            }
            ,
            vi: {
                title: "Độ trễ thấp (Low Latency)",
                body: "Nhiều cơ sở dữ liệu NoSQL được thiết kế cho việc truy cập 'độ trễ thấp'. 'Độ trễ thấp' có nghĩa là gì đối với một thao tác cơ sở dữ liệu?",
                solution: "Khoảng thời gian chậm trễ giữa việc yêu cầu dữ liệu và nhận được nó rất ngắn (thời gian phản hồi nhanh)."
            }
        }
    },
    {
        _id: "nosql-f-025",
        difficulty: "fresher",
        tags: ["Column-Family", "Bigtable", "sharding"],
        content: {
            en: {
                title: "Founding Concept (Columnar)",
                body: "Which seminal Google paper introduced the concept of the Wide-Column Store (later implemented by systems like Cassandra and HBase)?",
                solution: "The Bigtable paper."
            }
            ,
            jp: {
                title: "創設コンセプト（カラム型）",
                body: "ワイドカラムストアの概念を導入した（後に Cassandra や HBase のようなシステムによって実装された）先駆的な Google の論文は何ですか？",
                solution: "Bigtable の論文。"
            }
            ,
            vi: {
                title: "Khái niệm nền tảng (Columnar)",
                body: "Bài báo quan trọng nào của Google đã giới thiệu khái niệm Wide-Column Store (sau này được triển khai bởi các hệ thống như Cassandra và HBase)?",
                solution: "Bài báo Bigtable."
            }
        }
    },
    {
        _id: "nosql-f-026",
        difficulty: "fresher",
        tags: ["sharding", "scalability", "horizontal"],
        content: {
            en: {
                title: "Sharding",
                body: "What is the term for the process of dividing a database into multiple smaller parts, distributing them across different machines for horizontal scaling?",
                solution: "Sharding."
            }
            ,
            jp: {
                title: "シャーディング",
                body: "水平スケーリングのために、データベースを複数の小さな部分に分割し、それらを異なるマシンに分散するプロセスを表す用語は何ですか？",
                solution: "シャーディング。"
            }
            ,
            vi: {
                title: "Sharding",
                body: "Thuật ngữ dùng để chỉ quá trình chia cơ sở dữ liệu thành nhiều phần nhỏ hơn, phân tán chúng trên các máy khác nhau để mở rộng theo chiều ngang là gì?",
                solution: "Sharding."
            }
        }
    },
    {
        _id: "nosql-f-027",
        difficulty: "fresher",
        tags: ["RDBMS", "integrity", "referential"],
        content: {
            en: {
                title: "Referential Integrity (RDBMS)",
                body: "Which database feature, guaranteed by Foreign Keys in RDBMS, is often explicitly managed by the application code in a NoSQL database?",
                solution: "Referential Integrity."
            }
            ,
            jp: {
                title: "参照整合性（RDBMS）",
                body: "RDBMS の外部キーによって保証されるどのデータベース機能が、NoSQL データベースではしばしばアプリケーションコードによって明示的に管理されますか？",
                solution: "参照整合性（Referential Integrity）。"
            }
            ,
            vi: {
                title: "Tính toàn vẹn tham chiếu (RDBMS)",
                body: "Tính năng cơ sở dữ liệu nào, được đảm bảo bởi Foreign Keys trong RDBMS, thường được quản lý một cách rõ ràng bởi mã ứng dụng trong cơ sở dữ liệu NoSQL?",
                solution: "Referential Integrity (Tính toàn vẹn tham chiếu)."
            }
        }
    },
    {
        _id: "nosql-f-028",
        difficulty: "fresher",
        tags: ["Key-Value", "TTL", "caching"],
        content: {
            en: {
                title: "Time-To-Live (TTL)",
                body: "What feature, commonly supported by Key-Value stores like Redis, allows data to automatically expire after a set duration, making them ideal for temporary caching?",
                solution: "Time-To-Live (TTL)."
            }
            ,
            jp: {
                title: "有効期限 (TTL)",
                body: "Redis のようなキーバリューストアで一般的にサポートされている、データが設定された期間後に自動的に期限切れになるようにする機能は何ですか？これは一時的なキャッシングに最適です。",
                solution: "Time-To-Live (TTL)。"
            }
            ,
            vi: {
                title: "Time-To-Live (TTL)",
                body: "Tính năng nào, thường được hỗ trợ bởi các Key-Value store như Redis, cho phép dữ liệu tự động hết hạn sau một khoảng thời gian thiết lập, khiến chúng lý tưởng cho việc caching tạm thời?",
                solution: "Time-To-Live (TTL)."
            }
        }
    },
    {
        _id: "nosql-f-029",
        difficulty: "fresher",
        tags: ["Document", "MongoDB", "query"],
        content: {
            en: {
                title: "MongoDB Queries",
                body: "What format (language) are basic read operations written in for MongoDB?",
                solution: "JSON/BSON (e.g., using a JSON object to specify query criteria)."
            }
            ,
            jp: {
                title: "MongoDB クエリ",
                body: "MongoDB の基本的な読み取り操作はどの形式（言語）で記述されますか？",
                solution: "JSON/BSON（例：クエリ条件を指定するために JSON オブジェクトを使用）。"
            }
            ,
            vi: {
                title: "Truy vấn MongoDB",
                body: "Các thao tác đọc cơ bản được viết bằng định dạng (ngôn ngữ) nào cho MongoDB?",
                solution: "JSON/BSON (ví dụ: sử dụng một đối tượng JSON để chỉ định tiêu chí truy vấn)."
            }
        }
    },
    {
        _id: "nosql-f-030",
        difficulty: "fresher",
        tags: ["Graph", "terms", "properties"],
        content: {
            en: {
                title: "Node/Edge Attributes",
                body: "In a Graph database, what is the term for the attributes or characteristics associated with a Node or an Edge (e.g., a person's name or the date a relationship started)?",
                solution: "Properties."
            }
            ,
            jp: {
                title: "ノード/エッジの属性",
                body: "グラフデータベースにおいて、ノードまたはエッジに関連付けられた属性または特性（例：人の名前や関係が始まった日付）を表す用語は何ですか？",
                solution: "プロパティ（Properties）。"
            }
            ,
            vi: {
                title: "Thuộc tính Node/Edge",
                body: "Trong cơ sở dữ liệu Graph, thuật ngữ dùng để chỉ các thuộc tính hoặc đặc điểm liên quan đến một Node hoặc một Edge (ví dụ: tên của một người hoặc ngày bắt đầu một mối quan hệ) là gì?",
                solution: "Properties (Thuộc tính)."
            }
        }
    },
    {
        _id: "nosql-f-031",
        difficulty: "fresher",
        tags: ["RDBMS", "constraints", "types"],
        content: {
            en: {
                title: "Constraint Difference",
                body: "Relational databases enforce constraints (like NOT NULL or CHECK) at the database level. Where are these validation rules typically defined and enforced in a flexible-schema NoSQL database?",
                solution: "In the application code layer."
            }
            ,
            jp: {
                title: "制約の違い",
                body: "リレーショナルデータベースは、データベースレベルで制約（NOT NULL や CHECK など）を適用します。これらの検証ルールは、柔軟なスキーマの NoSQL データベースでは通常どこで定義および適用されますか？",
                solution: "アプリケーションコード層で。"
            }
            ,
            vi: {
                title: "Sự khác biệt về Ràng buộc",
                body: "Các cơ sở dữ liệu quan hệ áp dụng các ràng buộc (như NOT NULL hoặc CHECK) ở cấp độ cơ sở dữ liệu. Các quy tắc xác thực này thường được định nghĩa và áp dụng ở đâu trong cơ sở dữ liệu NoSQL có schema linh hoạt?",
                solution: "Trong tầng mã ứng dụng (application code layer)."
            }
        }
    },
    {
        _id: "nosql-f-032",
        difficulty: "fresher",
        tags: ["Key-Value", "complex objects"],
        content: {
            en: {
                title: "Key-Value Storage Limit",
                body: "Can a Key-Value store typically store complex structures (like a document with nested arrays) as the value?",
                solution: "Yes, the value can often be any complex structure, such as a JSON string, a serialized object, or a list, as long as it's addressable by the simple key."
            }
            ,
            jp: {
                title: "キーバリューの保存制限",
                body: "キーバリューストアは、複雑な構造（ネストされた配列を持つドキュメントなど）を値として保存できますか？",
                solution: "はい、値は、単純なキーでアドレス指定できる限り、JSON 文字列、シリアル化されたオブジェクト、リストなどの複雑な構造であることがよくあります。"
            }
            ,
            vi: {
                title: "Giới hạn lưu trữ Key-Value",
                body: "Một Key-Value store có thể lưu trữ các cấu trúc phức tạp (như một document có các mảng lồng nhau) dưới dạng giá trị không?",
                solution: "Có, giá trị thường có thể là bất kỳ cấu trúc phức tạp nào, chẳng hạn như chuỗi JSON, đối tượng được tuần tự hóa hoặc danh sách, miễn là nó có thể được địa chỉ hóa bằng khóa đơn giản."
            }
        }
    },
    {
        _id: "nosql-f-033",
        difficulty: "fresher",
        tags: ["data model", "Document", "MongoDB"],
        content: {
            en: {
                title: "Document Database Example",
                body: "Name one of the most popular open-source Document store databases.",
                solution: "MongoDB (or Couchbase/CouchDB)."
            }
            ,
            jp: {
                title: "ドキュメントデータベースの例",
                body: "最も人気のあるオープンソースのドキュメントストアデータベースの 1 つを挙げてください。",
                solution: "MongoDB（または Couchbase/CouchDB）。"
            }
            ,
            vi: {
                title: "Ví dụ về Document Database",
                body: "Kể tên một trong những cơ sở dữ liệu Document store mã nguồn mở phổ biến nhất.",
                solution: "MongoDB (hoặc Couchbase/CouchDB)."
            }
        }
    },
    {
        _id: "nosql-f-034",
        difficulty: "fresher",
        tags: ["data model", "Key-Value", "Redis"],
        content: {
            en: {
                title: "Key-Value Database Example",
                body: "Name one of the most popular open-source in-memory Key-Value store databases.",
                solution: "Redis (or Memcached, Amazon DynamoDB is a managed example)."
            }
            ,
            jp: {
                title: "キーバリューデータベースの例",
                body: "最も人気のあるオープンソースのインメモリキーバリューストアデータベースの 1 つを挙げてください。",
                solution: "Redis（または Memcached、Amazon DynamoDB はマネージドな例です）。"
            }
            ,
            vi: {
                title: "Ví dụ về Key-Value Database",
                body: "Kể tên một trong những cơ sở dữ liệu Key-Value store trong bộ nhớ (in-memory) mã nguồn mở phổ biến nhất.",
                solution: "Redis (hoặc Memcached, Amazon DynamoDB là một ví dụ được quản lý)."
            }
        }
    },
    {
        _id: "nosql-f-035",
        difficulty: "fresher",
        tags: ["data model", "Graph", "Neo4j"],
        content: {
            en: {
                title: "Graph Database Example",
                body: "Name one of the most popular open-source Graph databases.",
                solution: "Neo4j (or Amazon Neptune/Cosmos DB in managed cloud)."
            }
            ,
            jp: {
                title: "グラフデータベースの例",
                body: "最も人気のあるオープンソースのグラフデータベースの 1 つを挙げてください。",
                solution: "Neo4j（またはマネージドクラウドの Amazon Neptune/Cosmos DB）。"
            }
            ,
            vi: {
                title: "Ví dụ về Graph Database",
                body: "Kể tên một trong những cơ sở dữ liệu Graph mã nguồn mở phổ biến nhất.",
                solution: "Neo4j (hoặc Amazon Neptune/Cosmos DB trong cloud được quản lý)."
            }
        }
    },
    {
        _id: "nosql-f-036",
        difficulty: "fresher",
        tags: ["data model", "Column-Family", "Cassandra"],
        content: {
            en: {
                title: "Column-Family Database Example",
                body: "Name one of the most popular open-source Column-Family databases.",
                solution: "Apache Cassandra (or HBase)."
            }
            ,
            jp: {
                title: "カラムファミリーデータベースの例",
                body: "最も人気のあるオープンソースのカラムファミリーデータベースの 1 つを挙げてください。",
                solution: "Apache Cassandra（または HBase）。"
            }
            ,
            vi: {
                title: "Ví dụ về Column-Family Database",
                body: "Kể tên một trong những cơ sở dữ liệu Column-Family mã nguồn mở phổ biến nhất.",
                solution: "Apache Cassandra (hoặc HBase)."
            }
        }
    },
    {
        _id: "nosql-f-037",
        difficulty: "fresher",
        tags: ["BASE", "consistency", "trade-off"],
        content: {
            en: {
                title: "BASE Consistency Trade-off",
                body: "NoSQL databases often make a trade-off in the CAP theorem. Which property do they often sacrifice or relax compared to traditional RDBMS to achieve higher Availability and Partition tolerance?",
                solution: "Consistency (often opting for Eventual Consistency)."
            }
            ,
            jp: {
                title: "BASE の整合性のトレードオフ",
                body: "NoSQL データベースは、CAP 定理でトレードオフを行うことがよくあります。高い可用性とパーティション耐性を達成するために、従来の RDBMS と比較して、どのプロパティをしばしば犠牲にするか、または緩和しますか？",
                solution: "整合性（しばしば結果整合性を選択します）。"
            }
            ,
            vi: {
                title: "Sự đánh đổi tính nhất quán BASE",
                body: "Các cơ sở dữ liệu NoSQL thường thực hiện một sự đánh đổi trong định lý CAP. Thuộc tính nào mà chúng thường hy sinh hoặc nới lỏng so với RDBMS truyền thống để đạt được tính Sẵn sàng (Availability) và Khả năng chịu lỗi phân vùng (Partition tolerance) cao hơn?",
                solution: "Consistency (Tính nhất quán) (thường chọn Eventual Consistency)."
            }
        }
    },
    {
        _id: "nosql-f-038",
        difficulty: "fresher",
        tags: ["Document", "indexing", "B-Tree"],
        content: {
            en: {
                title: "Document Indexing",
                body: "What is the most common type of index used by Document databases (like MongoDB) for primary key and single-field lookups?",
                solution: "B-Tree Index (similar to RDBMS)."
            }
            ,
            jp: {
                title: "ドキュメントのインデックス作成",
                body: "ドキュメントデータベース（MongoDB など）が主キーおよび単一フィールドのルックアップに最も一般的に使用するインデックスのタイプは何ですか？",
                solution: "B-Tree インデックス（RDBMS と同様）。"
            }
            ,
            vi: {
                title: "Lập chỉ mục Document",
                body: "Loại index phổ biến nhất được sử dụng bởi các cơ sở dữ liệu Document (như MongoDB) cho khóa chính và tra cứu trường đơn là gì?",
                solution: "B-Tree Index (tương tự RDBMS)."
            }
        }
    },
    {
        _id: "nosql-f-039",
        difficulty: "fresher",
        tags: ["Key-Value", "memory", "speed"],
        content: {
            en: {
                title: "In-Memory Speed",
                body: "Why are Key-Value stores like Redis generally much faster than disk-based databases?",
                solution: "Because they store the entire dataset (or the most frequently accessed data) in RAM (in-memory), avoiding slow disk I/O operations."
            }
            ,
            jp: {
                title: "インメモリの速度",
                body: "Redis のようなキーバリューストアが、ディスクベースのデータベースよりも一般的に格段に速いのはなぜですか？",
                solution: "データセット全体（または最も頻繁にアクセスされるデータ）を RAM に保存する（インメモリ）ため、低速なディスク I/O 操作を回避できるからです。"
            }
            ,
            vi: {
                title: "Tốc độ In-Memory",
                body: "Tại sao các Key-Value store như Redis thường nhanh hơn nhiều so với các cơ sở dữ liệu dựa trên đĩa?",
                solution: "Vì chúng lưu trữ toàn bộ tập dữ liệu (hoặc dữ liệu được truy cập thường xuyên nhất) trong RAM (in-memory), tránh các thao tác I/O đĩa chậm."
            }
        }
    },
    {
        _id: "nosql-f-040",
        difficulty: "fresher",
        tags: ["NoSQL", "query language", "SQL"],
        content: {
            en: {
                title: "Query Language (General)",
                body: "Do all NoSQL databases use the SQL query language?",
                solution: "No. Many use unique query languages tailored to their data model (e.g., Cypher for Graph, an API/JSON for Document/Key-Value) although some offer SQL-like interfaces."
            }
            ,
            jp: {
                title: "クエリ言語（一般）",
                body: "すべての NoSQL データベースが SQL クエリ言語を使用しますか？",
                solution: "いいえ。多くは、そのデータモデルに合わせて調整された独自のクエリ言語を使用します（例：グラフ用の Cypher、ドキュメント/キーバリュー用の API/JSON）。ただし、SQL ライクなインターフェースを提供するものもあります。"
            }
            ,
            vi: {
                title: "Ngôn ngữ Truy vấn (Tổng quát)",
                body: "Liệu tất cả các cơ sở dữ liệu NoSQL đều sử dụng ngôn ngữ truy vấn SQL không?",
                solution: "Không. Nhiều cơ sở dữ liệu sử dụng các ngôn ngữ truy vấn độc đáo được điều chỉnh cho mô hình dữ liệu của chúng (ví dụ: Cypher cho Graph, API/JSON cho Document/Key-Value) mặc dù một số cung cấp giao diện giống SQL."
            }
        }
    },
    {
        _id: "nosql-f-041",
        difficulty: "fresher",
        tags: ["ACID", "BASE", "Availability"],
        content: {
            en: {
                title: "BASE Availability",
                body: "In the BASE acronym, what does 'Available' mean?",
                solution: "The system remains operational and responsive even if some data consistency cannot be guaranteed or if some nodes fail."
            }
            ,
            jp: {
                title: "BASE の可用性",
                body: "BASE 頭字語において、「Available（可用性）」とは何を意味しますか？",
                solution: "一部のデータ整合性が保証できない場合や、一部のノードが失敗した場合でも、システムが動作し続け、応答可能であること。"
            }
            ,
            vi: {
                title: "Tính Sẵn sàng BASE",
                body: "Trong từ viết tắt BASE, 'Available' có nghĩa là gì?",
                solution: "Hệ thống vẫn hoạt động và phản hồi ngay cả khi một số tính nhất quán dữ liệu không thể được đảm bảo hoặc nếu một số node bị lỗi."
            }
        }
    },
    {
        _id: "nosql-f-042",
        difficulty: "fresher",
        tags: ["Column-Family", "rows", "keys"],
        content: {
            en: {
                title: "Row Key in Columnar",
                body: "In a Column-Family store, what is the term for the primary identifier used to look up a row?",
                solution: "Row Key (or Partition Key)."
            }
            ,
            jp: {
                title: "カラム型における行キー",
                body: "カラムファミリーストアにおいて、行を検索するために使用される主要な識別子の用語は何ですか？",
                solution: "行キー（Row Key）またはパーティションキー（Partition Key）。"
            }
            ,
            vi: {
                title: "Khóa Hàng trong Columnar",
                body: "Trong một Column-Family store, thuật ngữ dùng để chỉ định danh chính được sử dụng để tra cứu một hàng là gì?",
                solution: "Row Key (hoặc Partition Key)."
            }
        }
    },
    {
        _id: "nosql-f-043",
        difficulty: "fresher",
        tags: ["Document", "subdocument", "nesting"],
        content: {
            en: {
                title: "Nesting/Subdocuments",
                body: "Document databases allow data to be nested. What is a piece of data nested within a larger document called?",
                solution: "A subdocument."
            }
            ,
            jp: {
                title: "ネスト/サブドキュメント",
                body: "ドキュメントデータベースでは、データをネストできます。より大きなドキュメント内にネストされたデータの一部は何と呼ばれますか？",
                solution: "サブドキュメント（Subdocument）。"
            }
            ,
            vi: {
                title: "Nesting/Subdocuments",
                body: "Các cơ sở dữ liệu Document cho phép dữ liệu được lồng (nested). Một phần dữ liệu được lồng bên trong một document lớn hơn được gọi là gì?",
                solution: "Một subdocument."
            }
        }
    },
    {
        _id: "nosql-f-044",
        difficulty: "fresher",
        tags: ["Key-Value", "use case", "session"],
        content: {
            en: {
                title: "Session Management Use Case",
                body: "Key-Value stores are frequently used for storing user session data. What is the key in this scenario typically?",
                solution: "A unique session ID or user token."
            }
            ,
            jp: {
                title: "セッション管理の使用例",
                body: "キーバリューストアは、ユーザーセッションデータを保存するためによく使用されます。このシナリオでのキーは通常何ですか？",
                solution: "一意のセッション ID またはユーザー トークン。"
            }
            ,
            vi: {
                title: "Trường hợp sử dụng Quản lý Phiên",
                body: "Các Key-Value store thường được sử dụng để lưu trữ dữ liệu phiên người dùng. Khóa trong kịch bản này thường là gì?",
                solution: "Một ID phiên duy nhất hoặc user token."
            }
        }
    },
    {
        _id: "nosql-f-045",
        difficulty: "fresher",
        tags: ["Graph", "traversal", "query"],
        content: {
            en: {
                title: "Graph Traversal",
                body: "What is the specialized type of query called that explores connections by moving from node to node along edges in a Graph database?",
                solution: "Graph Traversal or Pathfinding."
            }
            ,
            jp: {
                title: "グラフの走査",
                body: "グラフデータベースで、エッジに沿ってノードからノードへ移動することで接続を探索する特殊なタイプのクエリは何と呼ばれますか？",
                solution: "グラフ走査（Graph Traversal）またはパスファインディング（Pathfinding）。"
            }
            ,
            vi: {
                title: "Duyệt Graph (Graph Traversal)",
                body: "Loại truy vấn chuyên biệt nào được gọi là khám phá các kết nối bằng cách di chuyển từ node này sang node khác dọc theo các edge trong cơ sở dữ liệu Graph?",
                solution: "Graph Traversal (Duyệt Graph) hoặc Pathfinding (Tìm đường đi)."
            }
        }
    },
    {
        _id: "nosql-f-046",
        difficulty: "fresher",
        tags: ["NoSQL", "Polyglot Persistence"],
        content: {
            en: {
                title: "Polyglot Persistence",
                body: "What is the architectural concept of using different types of databases (e.g., RDBMS, Document, Graph) for different parts of a single application based on suitability?",
                solution: "Polyglot Persistence."
            }
            ,
            jp: {
                title: "ポリグロット永続性",
                body: "単一のアプリケーションの異なる部分に対して、適合性に基づいて異なるタイプのデータベース（RDBMS、ドキュメント、グラフなど）を使用するアーキテクチャの概念は何ですか？",
                solution: "ポリグロット永続性（Polyglot Persistence）。"
            }
            ,
            vi: {
                title: "Polyglot Persistence",
                body: "Khái niệm kiến trúc nào là việc sử dụng các loại cơ sở dữ liệu khác nhau (ví dụ: RDBMS, Document, Graph) cho các phần khác nhau của một ứng dụng duy nhất dựa trên sự phù hợp?",
                solution: "Polyglot Persistence."
            }
        }
    },
    {
        _id: "nosql-f-047",
        difficulty: "fresher",
        tags: ["Document", "indexing", "complex"],
        content: {
            en: {
                title: "Indexing Embedded Fields",
                body: "Can a Document database like MongoDB create an index on a field that is nested deep inside a document (e.g., indexing on `user.address.zipcode`)?",
                solution: "Yes. This is a key feature that allows efficient querying of complex document structures."
            }
            ,
            jp: {
                title: "埋め込みフィールドのインデックス作成",
                body: "MongoDB のようなドキュメントデータベースは、ドキュメントの奥深くにネストされたフィールドにインデックスを作成できますか（例：`user.address.zipcode` にインデックスを作成）？",
                solution: "はい。これは、複雑なドキュメント構造を効率的にクエリできる重要な機能です。"
            }
            ,
            vi: {
                title: "Lập chỉ mục các Trường được nhúng",
                body: "Một cơ sở dữ liệu Document như MongoDB có thể tạo index trên một trường được lồng sâu bên trong một document không (ví dụ: lập index trên `user.address.zipcode`)?",
                solution: "Có. Đây là một tính năng chính cho phép truy vấn hiệu quả các cấu trúc document phức tạp."
            }
        }
    },
    {
        _id: "nosql-f-048",
        difficulty: "fresher",
        tags: ["CAP", "theorem", "distributed"],
        content: {
            en: {
                title: "CAP Theorem",
                body: "The CAP theorem states that a distributed data store can only guarantee two out of three properties simultaneously. Name one of the three properties.",
                solution: "Consistency, Availability, or Partition Tolerance (any one of the three)."
            }
            ,
            jp: {
                title: "CAP 定理",
                body: "CAP 定理は、分散データストアが同時に 3 つのプロパティのうち 2 つしか保証できないと述べています。3 つのプロパティのうち 1 つを挙げてください。",
                solution: "整合性（Consistency）、可用性（Availability）、またはパーティション耐性（Partition Tolerance）のいずれか 1 つ。"
            }
            ,
            vi: {
                title: "Định lý CAP",
                body: "Định lý CAP nêu rõ rằng một kho dữ liệu phân tán chỉ có thể đảm bảo đồng thời hai trong ba thuộc tính. Kể tên một trong ba thuộc tính đó.",
                solution: "Consistency (Tính nhất quán), Availability (Tính sẵn sàng), hoặc Partition Tolerance (Khả năng chịu lỗi phân vùng) (một trong ba)."
            }
        }
    },
    {
        _id: "nosql-f-049",
        difficulty: "fresher",
        tags: ["RDBMS", "vs NoSQL", "integrity"],
        content: {
            en: {
                title: "Data Integrity Responsibility",
                body: "In a Document database with a flexible schema, whose responsibility is it to ensure that all documents adhere to the necessary data types and structures?",
                solution: "The application developer/code."
            }
            ,
            jp: {
                title: "データ整合性の責任",
                body: "柔軟なスキーマを持つドキュメントデータベースにおいて、すべてのドキュメントが必要なデータ型と構造に準拠していることを保証する責任は誰にありますか？",
                solution: "アプリケーション開発者/コード。"
            }
            ,
            vi: {
                title: "Trách nhiệm về Tính toàn vẹn Dữ liệu",
                body: "Trong cơ sở dữ liệu Document có schema linh hoạt, trách nhiệm đảm bảo rằng tất cả các document tuân thủ các kiểu và cấu trúc dữ liệu cần thiết thuộc về ai?",
                solution: "Nhà phát triển/mã ứng dụng."
            }
        }
    },
    {
        _id: "nosql-f-050",
        difficulty: "fresher",
        tags: ["Key-Value", "use case", "simple"],
        content: {
            en: {
                title: "Simple Data Storage",
                body: "For simple data storage needs where you only ever need to look up an item by its ID, which NoSQL model offers the fastest and most straightforward solution?",
                solution: "Key-Value Store."
            }
            ,
            jp: {
                title: "単純なデータストレージ",
                body: "アイテムをその ID で検索するだけでよい単純なデータストレージのニーズに対して、どの NoSQL モデルが最も高速で最も簡単なソリューションを提供しますか？",
                solution: "キーバリューストア。"
            }
            ,
            vi: {
                title: "Lưu trữ Dữ liệu Đơn giản",
                body: "Đối với nhu cầu lưu trữ dữ liệu đơn giản mà bạn chỉ cần tra cứu một mục bằng ID của nó, mô hình NoSQL nào cung cấp giải pháp nhanh nhất và đơn giản nhất?",
                solution: "Key-Value Store."
            }
        }
    }
];

// Để import vào project frontend
export default nosqlFresherQuestions;
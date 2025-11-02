const translations = {
    zh: {
        title: {
            name: 'breeze - C++ / 音视频 / Godot 开发者'
        },
        nav: {
            home: '首页',
            projects: '项目',
            about: '个人',
            future: '未来',
            contact: '联系'
        },
        home: {
            name: '微风中的快乐',
            title: 'C++ / 音视频 / Godot 开发者',
            subtitle: '构建高性能、跨平台的交互体验',
            description: '专注于 C++ 系统开发、实时音视频处理与 Godot 游戏引擎的全栈工程师',
            jobSeeking: '开放新的合作与工作机会',
            viewProjects: '查看我的项目',
            contactMe: '联系我'
        },
        projects: {
            title: '我的项目',
            videoEngine: {
                title: '实时音视频处理引擎',
                description: '基于 C++ 与 WebRTC 的低延迟音视频通信框架',
                details: '使用 C++17 开发的高性能音视频处理核心，支持 H.264/VP9 编码、音频降噪、回声消除。集成 FFmpeg 与 WebRTC，适用于直播、视频会议、远程协作等场景。已在多个商业产品中稳定运行。'
            },
            godotGame: {
                title: 'Godot 3D 多人游戏原型',
                description: '基于 Godot 引擎开发的跨平台 3D 多人联机游戏 Demo',
                details: '使用 Godot 4 + GDScript/C# 开发，实现房间匹配、网络同步、物理交互与跨平台部署（Windows/macOS/Linux/Web）。后端使用自研轻量级 WebSocket 服务器（C++/asio）。项目用于验证低延迟多人游戏架构。'
            },
            mediaTool: {
                title: '音视频调试工具集',
                description: '面向开发者的音视频分析与调试工具',
                details: '一套命令行与 GUI 结合的工具集，支持 RTP/RTMP 流解析、帧级日志追踪、码率分析、设备模拟等。使用 Qt + C++ 构建界面，底层调用 FFmpeg 与 SDL，提升音视频开发效率。'
            }
        },
        about: {
            title: '关于我',
            skills: '技术专长',
            basicInfo: '基本信息',
            name: '姓名',
            nameValue: '微风中的快乐',
            location: '位置',
            locationValue: '北京，中国',
            experience: '经验',
            experienceValue: '5年',
            education: '学历',
            educationValue: '计算机科学学士',
            bio: '个人简介',
            bioText: '我是一名专注于 C++ 系统编程、实时音视频处理和 Godot 游戏开发的工程师。擅长构建高性能、低延迟的多媒体应用，对跨平台开发、网络协议、图形渲染有深入理解。热爱开源，追求代码的简洁与效率。',
            workExp: '工作经历',
            workExpList: [
                '某音视频科技公司 - 高级 C++ 工程师 (2021-至今)',
                '独立游戏工作室 - Godot 开发者 (2020-2021)',
                '某通信企业 - 音视频协议开发 (2018-2020)'
            ],
            interests: '兴趣爱好',
            interestsList: {
                coding: '系统编程',
                photography: '摄影',
                travel: '旅行',
                reading: '技术书籍',
                music: '电子音乐制作',
                sports: '骑行'
            },
            life: '生活态度',
            lifeText: '相信扎实的底层能力是创新的基石；享受从零构建系统的过程；坚持开源精神；工作之余喜欢用 Godot 做小游戏，或用 C++ 写点音频合成器。'
        },
        future: {
            title: '未来规划',
            tabs: {
                career: '技术规划',
                life: '生活规划',
                learning: '学习规划',
                interests: '兴趣规划'
            },
            career: {
                2026: {
                    title: '音视频架构师',
                    description: '深入优化自研音视频引擎，支持 4K/60fps 低延迟传输，探索 AV1 与 WebTransport 应用。'
                },
                2027: {
                    title: 'Godot 贡献者',
                    description: '为 Godot 引擎贡献 C++ 模块，特别是音视频与网络同步方向，推动中文社区发展。'
                },
                2028: {
                    title: '独立开发者',
                    description: '发布一款基于 Godot 的商业游戏，并开源配套的音视频中间件。'
                }
            },
            life: {
                2024: {
                    title: '健康作息',
                    description: '减少熬夜，每日运动，保护视力与听力（音视频开发者的职业需求 😅）。'
                },
                2025: {
                    title: '远程协作',
                    description: '建立稳定的远程工作模式，与全球开发者协作开源项目。'
                },
                2026: {
                    title: '数字游民',
                    description: '边旅行边开发，用技术支撑自由生活。'
                }
            },
            learning: {
                2024: {
                    title: 'Rust 入门',
                    description: '学习 Rust 语言，探索其在音视频与系统编程中的替代潜力。'
                },
                2025: {
                    title: 'GPU 编程',
                    description: '掌握 Vulkan 与 WebGPU，优化 Godot 中的自定义渲染管线。'
                },
                2026: {
                    title: 'AI 音频生成',
                    description: '研究 AI 驱动的音频合成与语音克隆技术，用于游戏与互动媒体。'
                }
            },
            interests: {
                2024: {
                    title: '合成器开发',
                    description: '用 C++ + JUCE 开发一款开源虚拟模拟合成器。'
                },
                2025: {
                    title: '游戏 Jam',
                    description: '参加 Global Game Jam，每年完成至少一个完整小游戏原型。'
                },
                2026: {
                    title: '技术写作',
                    description: '撰写关于 C++ 音视频开发与 Godot 实战的系列博客或电子书。'
                }
            }
        },
        contact: {
            title: '联系我',
            intro: '如果你对 C++、音视频、Godot 或开源项目感兴趣，欢迎交流！',
            email: '邮箱',
            emailValue: 'zhangsan@example.com',
            phone: '电话',
            phoneValue: '+86 138 0000 0000',
            github: 'GitHub',
            githubValue: 'github.com/zhangsan',
            wechat: '微信',
            wechatValue: 'zhangsan_dev',
            downloadPrimary: '下载简历',
            downloadOtherVersions: '下载其他语言版本',
            downloadChinese: '中文简历',
            downloadEnglish: 'English Resume',
            downloadJapanese: '日本語履歴書'
        }
    },
    en: {
        title: {
            name: 'Zhang San - C++ / Audio-Video / Godot Developer'
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            future: 'Future',
            contact: 'Contact'
        },
        home: {
            name: 'Zhang San',
            title: 'C++ / Audio-Video / Godot Developer',
            subtitle: 'Building High-Performance, Cross-Platform Interactive Experiences',
            description: 'Engineer focused on C++ systems, real-time audio/video processing, and Godot game development',
            jobSeeking: 'Open to New Opportunities & Collaborations',
            viewProjects: 'View My Projects',
            contactMe: 'Contact Me'
        },
        projects: {
            title: 'My Projects',
            videoEngine: {
                title: 'Real-Time Audio/Video Engine',
                description: 'Low-latency A/V communication framework based on C++ and WebRTC',
                details: 'High-performance C++17 core supporting H.264/VP9 encoding, audio noise suppression, and echo cancellation. Integrated with FFmpeg and WebRTC for live streaming, video conferencing, and remote collaboration. Deployed in multiple commercial products.'
            },
            godotGame: {
                title: 'Godot 3D Multiplayer Prototype',
                description: 'Cross-platform 3D multiplayer game demo built with Godot Engine',
                details: 'Developed with Godot 4 + GDScript/C#, featuring room matchmaking, network synchronization, physics interaction, and cross-platform deployment (Windows/macOS/Linux/Web). Backend powered by a lightweight C++/asio WebSocket server. Validates low-latency multiplayer architecture.'
            },
            mediaTool: {
                title: 'A/V Debugging Toolkit',
                description: 'Developer-focused tools for audio/video analysis and debugging',
                details: 'A suite of CLI and GUI tools for RTP/RTMP stream parsing, frame-level logging, bitrate analysis, and device simulation. Built with Qt + C++, leveraging FFmpeg and SDL to accelerate A/V development workflows.'
            }
        },
        about: {
            title: 'About Me',
            skills: 'Expertise',
            basicInfo: 'Basic Info',
            name: 'Name',
            nameValue: 'Zhang San',
            location: 'Location',
            locationValue: 'Beijing, China',
            experience: 'Experience',
            experienceValue: '5 Years',
            education: 'Education',
            educationValue: 'B.S. in Computer Science',
            bio: 'Biography',
            bioText: 'I am an engineer specializing in C++ systems programming, real-time audio/video processing, and Godot game development. I excel at building high-performance, low-latency multimedia applications and have deep knowledge of cross-platform development, network protocols, and graphics rendering. Passionate about open source and clean, efficient code.',
            workExp: 'Work Experience',
            workExpList: [
                'A/V Tech Company - Senior C++ Engineer (2021–Present)',
                'Indie Game Studio - Godot Developer (2020–2021)',
                'Telecom Company - A/V Protocol Developer (2018–2020)'
            ],
            interests: 'Interests',
            interestsList: {
                coding: 'Systems Programming',
                photography: 'Photography',
                travel: 'Travel',
                reading: 'Tech Books',
                music: 'Electronic Music Production',
                sports: 'Cycling'
            },
            life: 'Philosophy',
            lifeText: 'I believe solid low-level skills are the foundation of innovation. I enjoy building systems from scratch, embrace open-source values, and love creating small games in Godot or audio synthesizers in C++ during my free time.'
        },
        future: {
            title: 'Future Plans',
            tabs: {
                career: 'Career',
                life: 'Life',
                learning: 'Learning',
                interests: 'Interests'
            },
            career: {
                2024: {
                    title: 'A/V Architect',
                    description: 'Optimize my custom A/V engine for 4K/60fps low-latency streaming; explore AV1 and WebTransport.'
                },
                2025: {
                    title: 'Godot Contributor',
                    description: 'Contribute C++ modules to Godot Engine, especially in A/V and networking; grow the Chinese community.'
                },
                2026: {
                    title: 'Indie Developer',
                    description: 'Release a commercial Godot game and open-source the accompanying A/V middleware.'
                }
            },
            life: {
                2024: {
                    title: 'Healthy Routine',
                    description: 'Reduce late nights, exercise daily, protect eyes and ears (essential for A/V devs 😅).'
                },
                2025: {
                    title: 'Remote Collaboration',
                    description: 'Establish a stable remote workflow for global open-source collaboration.'
                },
                2026: {
                    title: 'Digital Nomad',
                    description: 'Code while traveling—use technology to enable a location-independent life.'
                }
            },
            learning: {
                2024: {
                    title: 'Learn Rust',
                    description: 'Explore Rust for systems and A/V programming as a potential C++ alternative.'
                },
                2025: {
                    title: 'GPU Programming',
                    description: 'Master Vulkan and WebGPU to optimize custom rendering pipelines in Godot.'
                },
                2026: {
                    title: 'AI Audio Generation',
                    description: 'Research AI-driven audio synthesis and voice cloning for games and interactive media.'
                }
            },
            interests: {
                2024: {
                    title: 'Synth Development',
                    description: 'Build an open-source virtual analog synthesizer using C++ and JUCE.'
                },
                2025: {
                    title: 'Game Jams',
                    description: 'Participate in Global Game Jam; complete at least one full prototype per year.'
                },
                2026: {
                    title: 'Technical Writing',
                    description: 'Write a blog series or e-book on C++ A/V development and Godot实战.'
                }
            }
        },
        contact: {
            title: 'Contact Me',
            intro: 'If you’re interested in C++, audio/video, Godot, or open-source projects—let’s connect!',
            email: 'Email',
            emailValue: 'zhangsan@example.com',
            phone: 'Phone',
            phoneValue: '+86 138 0000 0000',
            github: 'GitHub',
            githubValue: 'github.com/zhangsan',
            wechat: 'WeChat',
            wechatValue: 'zhangsan_dev',
            downloadPrimary: 'Download Resume',
            downloadOtherVersions: 'Choose Other Language Version',
            downloadChinese: 'Chinese Resume',
            downloadEnglish: 'English Resume',
            downloadJapanese: 'Japanese Resume'
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            projects: 'プロジェクト',
            about: '自己紹介',
            future: '将来',
            contact: '連絡'
        },
        home: {
            name: '張 三',
            title: 'C++ / 音声・映像 / Godot 開発者',
            subtitle: '高性能でクロスプラットフォームなインタラクティブ体験を構築',
            description: 'C++ システム開発、リアルタイム音声・映像処理、Godot ゲームエンジンに特化したエンジニア',
            jobSeeking: '新しい仕事・共同開発の機会を歓迎します',
            viewProjects: 'プロジェクトを見る',
            contactMe: '連絡する'
        },
        projects: {
            title: '私のプロジェクト',
            videoEngine: {
                title: 'リアルタイム音声・映像エンジン',
                description: 'C++ と WebRTC を使った低遅延 A/V 通信フレームワーク',
                details: 'C++17 で開発された高性能コア。H.264/VP9 エンコード、音声ノイズ除去、エコーキャンセルをサポート。FFmpeg と WebRTC を統合し、ライブ配信・ビデオ会議・リモートコラボレーションに適用。複数の商用製品で稼働中。'
            },
            godotGame: {
                title: 'Godot 3D マルチプレイプロトタイプ',
                description: 'Godot エンジンで開発されたクロスプラットフォーム 3D マルチプレイゲームデモ',
                details: 'Godot 4 + GDScript/C# で開発。ルームマッチング、ネットワーク同期、物理演算、クロスプラットフォーム対応（Windows/macOS/Linux/Web）を実現。バックエンドは C++/asio 製の軽量 WebSocket サーバー。低遅延マルチプレイアーキテクチャの検証用。'
            },
            mediaTool: {
                title: '音声・映像デバッグツールキット',
                description: '開発者向けの A/V 分析・デバッグツール',
                details: 'RTP/RTMP ストリーム解析、フレーム単位ログ、ビットレート分析、デバイスシミュレーションをサポートする CLI と GUI ツール群。Qt + C++ で構築し、FFmpeg と SDL を活用して A/V 開発効率を向上。'
            }
        },
        about: {
            title: '自己紹介',
            skills: '専門分野',
            basicInfo: '基本情報',
            name: '名前',
            nameValue: '張 三',
            location: '場所',
            locationValue: '北京、中国',
            experience: '経験',
            experienceValue: '5年',
            education: '学歴',
            educationValue: 'コンピュータサイエンス学士',
            bio: 'プロフィール',
            bioText: 'C++ システムプログラミング、リアルタイム音声・映像処理、Godot ゲーム開発に特化したエンジニアです。高性能・低遅延のマルチメディアアプリケーション構築に強みを持ち、クロスプラットフォーム開発・ネットワークプロトコル・グラフィックスレンダリングに深い理解があります。オープンソースを愛し、コードの簡潔さと効率を重視します。',
            workExp: '職歴',
            workExpList: [
                '音声・映像テック企業 - シニア C++ エンジニア (2021–現在)',
                'インディーゲームスタジオ - Godot 開発者 (2020–2021)',
                '通信企業 - 音声・映像プロトコル開発 (2018–2020)'
            ],
            interests: '趣味',
            interestsList: {
                coding: 'システムプログラミング',
                photography: '写真',
                travel: '旅行',
                reading: '技術書',
                music: '電子音楽制作',
                sports: 'サイクリング'
            },
            life: '人生観',
            lifeText: '確かな低レイヤーのスキルがイノベーションの基盤だと信じています。ゼロからシステムを構築するプロセスを楽しみ、オープンソース精神を大切にしています。余暇には Godot で小さなゲームを作ったり、C++ でオーディオシンセサイザーを書いています。'
        },
        future: {
            title: '将来の計画',
            tabs: {
                career: 'キャリア',
                life: '生活',
                learning: '学習',
                interests: '趣味'
            },
            career: {
                2026: {
                    title: 'A/V アーキテクト',
                    description: '自作 A/V エンジンを 4K/60fps 低遅延に対応させ、AV1 や WebTransport の活用を検討。'
                },
                2027: {
                    title: 'Godot コントリビューター',
                    description: 'Godot エンジンに C++ モジュール（特に A/V とネットワーク）を貢献し、日本語・中国語コミュニティを支援。'
                },
                2028: {
                    title: 'インディーデベロッパー',
                    description: 'Godot 製の商用ゲームをリリースし、付随する A/V ミドルウェアをオープンソース化。'
                }
            },
            life: {
                2024: {
                    title: '健康的な生活',
                    description: '夜更かしを減らし、毎日運動。目と耳を大切に（A/V 開発者の必須条件 😅）。'
                },
                2025: {
                    title: 'リモートコラボレーション',
                    description: 'グローバルなオープンソース開発に適したリモートワーク体制を確立。'
                },
                2026: {
                    title: 'デジタルノマド',
                    description: '旅をしながら開発。技術で場所に縛られない生活を実現。'
                }
            },
            learning: {
                2024: {
                    title: 'Rust 学習',
                    description: 'Rust を学び、C++ の代替としての可能性を検証。'
                },
                2025: {
                    title: 'GPU プログラミング',
                    description: 'Vulkan と WebGPU を習得し、Godot のカスタムレンダリングパイプラインを最適化。'
                },
                2026: {
                    title: 'AI 音声生成',
                    description: 'AI による音声合成・ボイスクローン技術を研究し、ゲームやインタラクティブメディアに応用。'
                }
            },
            interests: {
                2024: {
                    title: 'シンセサイザー開発',
                    description: 'C++ と JUCE を使ってオープンソースのバーチャルアナログシンセを制作。'
                },
                2025: {
                    title: 'ゲームジャム参加',
                    description: 'Global Game Jam に参加し、年1本以上の完成度の高いプロトタイプを作成。'
                },
                2026: {
                    title: '技術執筆',
                    description: 'C++ 音声・映像開発と Godot 実践に関するブログシリーズまたは電子書籍を執筆。'
                }
            }
        },
        contact: {
            title: '連絡先',
            intro: 'C++、音声・映像、Godot、オープンソースに興味がある方は、ぜひご連絡ください！',
            email: 'メール',
            emailValue: 'zhangsan@example.com',
            phone: '電話',
            phoneValue: '+86 138 0000 0000',
            github: 'GitHub',
            githubValue: 'github.com/zhangsan',
            wechat: 'WeChat',
            wechatValue: 'zhangsan_dev',
            downloadPrimary: '履歴書ダウンロード',
            downloadOtherVersions: '他の言語版をダウンロード',
            downloadChinese: '中国語履歴書',
            downloadEnglish: '英語履歴書',
            downloadJapanese: '日本語履歴書'
        }
    }
};

window.translations = translations;
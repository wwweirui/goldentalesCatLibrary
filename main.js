// 猫咪数据
const catsData = {
    xiaohui: {
        name: '小灰',
        breed: '英国短毛猫',
        age: '2岁',
        gender: '公猫',
        weight: '4.5kg',
        color: '蓝灰色',
        neutered: '已绝育',
        image: 'resources/cat1-main.jpg',
        description: '小灰是我们猫舍的第一只英国短毛猫，从小就展现出典型的英短特征：圆脸、短腿、性格温和。他是个真正的小绅士，从不调皮捣蛋，总是安静地陪伴在家人身边。',
        personality: {
            tags: ['温顺', '安静', '友好', '独立'],
            traits: [
                '喜欢安静的陪伴，不喜欢被抱太久',
                '对小孩子和其他宠物很友好',
                '不太喜欢剧烈运动，更适合室内生活',
                '有固定的作息习惯，很有时间观念'
            ],
            ratings: {
                affection: 85,
                activity: 40,
                independence: 75,
                intelligence: 80
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '已完成' },
                { name: '狂犬疫苗', status: '已完成' },
                { name: '年度加强', status: '即将到期' }
            ],
            checkups: [
                { name: '体重检查', status: '正常' },
                { name: '牙齿检查', status: '良好' },
                { name: '血液检查', status: '正常' }
            ]
        },
        timeline: [
            { date: '2023-03-15', event: '出生', description: '小灰来到这个世界' },
            { date: '2023-05-20', event: '第一次疫苗', description: '完成了三联疫苗的第一针' },
            { date: '2023-08-10', event: '绝育手术', description: '健康地完成了绝育手术' },
            { date: '2023-12-01', event: '第一次洗澡', description: '勇敢地接受了第一次洗澡' },
            { date: '2024-03-15', event: '一岁生日', description: '庆祝了一岁生日' }
        ]
    },
    xiaoxue: {
        name: '小雪',
        breed: '布偶猫',
        age: '1.5岁',
        gender: '母猫',
        weight: '4.2kg',
        color: '重点色',
        neutered: '已绝育',
        image: 'resources/cat2-main.jpg',
        description: '小雪是典型的布偶猫，拥有天使般的甜美性格。她的蓝眼睛像宝石一样闪闪发光，总是用温柔的眼神看着我们。',
        personality: {
            tags: ['甜美', '温柔', '粘人', '优雅'],
            traits: [
                '非常喜欢被抱和抚摸',
                '对人极其友好，包括陌生人',
                '喜欢跟随主人到处走',
                '声音轻柔，很少大声叫唤'
            ],
            ratings: {
                affection: 95,
                activity: 60,
                independence: 30,
                intelligence: 85
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '已完成' },
                { name: '狂犬疫苗', status: '已完成' },
                { name: '年度加强', status: '已完成' }
            ],
            checkups: [
                { name: '体重检查', status: '正常' },
                { name: '眼睛检查', status: '优秀' },
                { name: '心脏检查', status: '正常' }
            ]
        },
        timeline: [
            { date: '2023-06-10', event: '出生', description: '小雪出生在一个温暖的夏天' },
            { date: '2023-08-15', event: '来到新家', description: '加入了我们的大家庭' },
            { date: '2023-10-30', event: '第一次美容', description: '接受了专业的美容护理' },
            { date: '2024-01-20', event: '绝育手术', description: '顺利完成了绝育手术' },
            { date: '2024-06-10', event: '一岁生日', description: '度过了一个特别的一岁生日' }
        ]
    },
    dazhuang: {
        name: '大壮',
        breed: '缅因猫',
        age: '3岁',
        gender: '公猫',
        weight: '8.5kg',
        color: '棕虎斑',
        neutered: '已绝育',
        image: 'resources/cat3-main.jpg',
        description: '大壮是只体型巨大的缅因猫，但性格却异常温和。他喜欢玩水，特别聪明，是我们猫舍的"温柔巨人"。',
        personality: {
            tags: ['温和', '聪明', '爱玩', '巨大'],
            traits: [
                '尽管体型巨大但非常温柔',
                '喜欢玩水，经常自己开水龙头',
                '智商很高，能学会简单的指令',
                '对其他猫咪和小动物都很友好'
            ],
            ratings: {
                affection: 90,
                activity: 75,
                independence: 60,
                intelligence: 95
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '已完成' },
                { name: '狂犬疫苗', status: '已完成' },
                { name: '年度加强', status: '已完成' }
            ],
            checkups: [
                { name: '体重检查', status: '优秀' },
                { name: '关节检查', status: '正常' },
                { name: '心脏检查', status: '正常' }
            ]
        },
        timeline: [
            { date: '2022-05-01', event: '出生', description: '大壮出生在春天' },
            { date: '2022-07-15', event: '快速成长', description: '体重开始快速增长' },
            { date: '2022-11-20', event: '学会开水龙头', description: '展现了惊人的智力' },
            { date: '2023-05-01', event: '一岁生日', description: '体重达到了6公斤' },
            { date: '2024-05-01', event: '二岁生日', description: '正式成为8.5公斤的巨人' }
        ]
    },
    gongzhu: {
        name: '公主',
        breed: '波斯猫',
        age: '2.5岁',
        gender: '母猫',
        weight: '3.8kg',
        color: '白色',
        neutered: '已绝育',
        image: 'resources/cat4-main.jpg',
        description: '公主名副其实，拥有高贵优雅的波斯猫血统。她的长毛需要精心护理，但绝对值得，因为她就像个真正的小公主。',
        personality: {
            tags: ['高贵', '优雅', '安静', '精致'],
            traits: [
                '举止优雅，像个真正的小公主',
                '喜欢安静的环境，不喜欢吵闹',
                '对自己的外表很在意，经常梳理毛发',
                '对食物比较挑剔，有自己的偏好'
            ],
            ratings: {
                affection: 70,
                activity: 30,
                independence: 80,
                intelligence: 75
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '已完成' },
                { name: '狂犬疫苗', status: '已完成' },
                { name: '年度加强', status: '已完成' }
            ],
            checkups: [
                { name: '体重检查', status: '正常' },
                { name: '毛发检查', status: '优秀' },
                { name: '眼睛检查', status: '正常' }
            ]
        },
        timeline: [
            { date: '2022-08-20', event: '出生', description: '公主出生在夏末' },
            { date: '2022-10-15', event: '第一次美容', description: '接受了专业的美容护理' },
            { date: '2023-02-28', event: '绝育手术', description: '顺利完成了绝育手术' },
            { date: '2023-08-20', event: '一岁生日', description: '度过了一个优雅的一岁生日' },
            { date: '2024-08-20', event: '二岁生日', description: '成为了真正的猫公主' }
        ]
    },
    doudou: {
        name: '豆豆',
        breed: '苏格兰折耳猫',
        age: '1岁',
        gender: '母猫',
        weight: '3.5kg',
        color: '灰色白色',
        neutered: '已绝育',
        image: 'resources/cat5-main.jpg',
        description: '豆豆的折耳特别明显，像个小精灵。她活泼好动，喜欢探索家里的每个角落，是我们家的小探险家。',
        personality: {
            tags: ['活泼', '好奇', '精灵', '探索'],
            traits: [
                '对一切都充满好奇心',
                '喜欢探索家里的每个角落',
                '折耳让她看起来像个小精灵',
                '精力充沛，总是充满活力'
            ],
            ratings: {
                affection: 85,
                activity: 90,
                independence: 40,
                intelligence: 80
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '已完成' },
                { name: '狂犬疫苗', status: '已完成' },
                { name: '年度加强', status: '即将到期' }
            ],
            checkups: [
                { name: '体重检查', status: '正常' },
                { name: '耳朵检查', status: '正常' },
                { name: '关节检查', status: '正常' }
            ]
        },
        timeline: [
            { date: '2023-09-05', event: '出生', description: '豆豆出生在初秋' },
            { date: '2023-11-10', event: '第一次探索', description: '开始探索家里的每个角落' },
            { date: '2024-01-15', event: '绝育手术', description: '顺利完成了绝育手术' },
            { date: '2024-05-20', event: '学会新技能', description: '学会了打开抽屉' },
            { date: '2024-09-05', event: '一岁生日', description: '成为了家里的小精灵' }
        ]
    },
    baobao: {
        name: '豹豹',
        breed: '孟加拉猫',
        age: '8个月',
        gender: '公猫',
        weight: '4.0kg',
        color: '豹纹',
        neutered: '未绝育',
        image: 'resources/cat6-main.jpg',
        description: '豹豹身上有明显豹纹，充满野性美。他精力旺盛，需要大量运动和互动，是我们家的小猎豹。',
        personality: {
            tags: ['野性', '精力旺盛', '聪明', '活跃'],
            traits: [
                '身上有美丽的豹纹图案',
                '精力极其旺盛，需要大量运动',
                '非常聪明，学习能力强',
                '喜欢高处，经常跳到最高的地方'
            ],
            ratings: {
                affection: 75,
                activity: 95,
                independence: 50,
                intelligence: 90
            }
        },
        health: {
            vaccines: [
                { name: '三联疫苗', status: '进行中' },
                { name: '狂犬疫苗', status: '待接种' },
                { name: '年度加强', status: '待进行' }
            ],
            checkups: [
                { name: '体重检查', status: '正常' },
                { name: '肌肉检查', status: '优秀' },
                { name: '活力检查', status: '极高' }
            ]
        },
        timeline: [
            { date: '2024-04-12', event: '出生', description: '豹豹出生在春天' },
            { date: '2024-06-15', event: '第一次疫苗', description: '开始了疫苗接种计划' },
            { date: '2024-08-20', event: '学会指令', description: '学会了第一个指令' },
            { date: '2024-10-10', event: '达到4kg', description: '体重达到了4公斤' },
            { date: '2024-12-12', event: '8个月大', description: '成为了活力十足的小豹子' }
        ]
    }
};

// 故事数据 - 按猫咪分类组织
const storiesData = {
    xiaohui: [
        {
            id: 1,
            title: '小灰的诞生',
            cat: 'xiaohui',
            category: 'birth',
            image: 'resources/cat1-main.jpg',
            date: '2023-03-15',
            summary: '2023年3月15日，小灰来到了这个世界。他是妈妈的第一胎，也是最安静的一只小猫。',
            content: '小灰出生的那天是个温暖的春日早晨。他的妈妈是只优秀的英国短毛猫，生产过程非常顺利。刚出生的小灰只有巴掌大小，毛色就已经显现出淡淡的蓝灰色。与其他兄弟姐妹相比，他总是最安静的那个，不吵不闹，静静地躺在妈妈身边吃奶。我们给他取名"小灰"，既因为他的毛色，也希望他能像灰色一样温和沉稳。从出生的第一天起，他就展现出了英国短毛猫的典型特征：圆脸、短腿，还有那副天生的"绅士"模样。小灰的成长过程很顺利，体重增长正常，健康状况良好。他最喜欢做的事情就是晒太阳，经常能看到他独自躺在窗边的阳光下，一脸享受的表情。'
        },
        {
            id: 2,
            title: '小灰的第一次洗澡',
            cat: 'xiaohui',
            category: 'milestone',
            image: 'resources/cat1-main.jpg',
            date: '2023-12-01',
            summary: '小灰第一次洗澡的经历展现了他的绅士风度，整个过程安静配合。',
            content: '作为一只典型的英国短毛猫，小灰平时就很喜欢干净。当我们要给他第一次洗澡时，他表现得异常冷静。我们准备了温水和猫咪专用洗发水，小灰似乎明白这是为了他的健康。整个洗澡过程中，他没有发出任何抗议的声音，只是偶尔用那双大眼睛看着我们，仿佛在问"还要多久"。洗完后，他安静地让我们用毛巾擦干，然后自己走到阳光下开始梳理毛发。这种配合的态度让我们深感欣慰，也证明了小灰确实是个真正的小绅士。'
        }
    ],
    xiaoxue: [
        {
            id: 3,
            title: '小雪的洗澡大作战',
            cat: 'xiaoxue',
            category: 'funny',
            image: 'resources/cat2-main.jpg',
            date: '2023-08-20',
            summary: '布偶猫小雪第一次洗澡的经历，简直是一场精彩的家庭喜剧。',
            content: '作为一只典型的布偶猫，小雪平时温顺得像个小天使，但第一次洗澡时却展现出了完全不同的一面。那天我们准备了温暖的洗澡水，还特地买了猫咪专用的洗发水。刚开始小雪还很配合，但当她意识到这不是普通的玩耍时，情况发生了变化。小雪开始发出抗议的叫声，然后用她沾满泡沫的小爪子到处挥舞。整个浴室瞬间变成了战场：泡沫飞得到处都是，小雪的毛都竖了起来，看起来像个毛茸茸的球。最搞笑的是，当她终于从浴缸里逃出来时，全身湿漉漉的她在地板上留下了一串小脚印，然后迅速钻到了沙发底下，怎么叫都不出来。不过经过几次适应后，小雪现在已经很享受洗澡的过程了，甚至会主动跳进浴缸里玩水。这个转变让我们深感欣慰，也证明了耐心和爱心是最好的教育方法。'
        },
        {
            id: 4,
            title: '小雪的温柔陪伴',
            cat: 'xiaoxue',
            category: 'milestone',
            image: 'resources/cat2-main.jpg',
            date: '2024-01-10',
            summary: '小雪展现了她作为布偶猫的温柔本性，成为了家里的小护士。',
            content: '小雪的温柔性格在她长大后更加明显。每当我们感到疲惫或心情不好时，她总能察觉到，然后静静地来到我们身边，用她柔软的身体轻轻蹭着我们的腿。她的蓝眼睛里似乎有着治愈的力量，看着她的眼神，所有的烦恼都会暂时消失。有一次家人生病卧床，小雪几乎整天都守在床边，偶尔会用她的小爪子轻轻碰触病人的手，仿佛在传达她的关心。这种贴心的行为让我们深深感动，也更加确信布偶猫真的是"小狗猫"的称号名副其实。'
        }
    ],
    dazhuang: [
        {
            id: 5,
            title: '大壮的体重突破',
            cat: 'dazhuang',
            category: 'milestone',
            image: 'resources/cat3-main.jpg',
            date: '2023-11-10',
            summary: '缅因猫大壮在8个月大时体重达到了8公斤，正式成为我们家的小巨人。',
            content: '大壮从来到我们家的第一天起就展现出了惊人的生长速度。作为缅因猫，他天生就比其他猫咪大很多，但他的成长速度还是让我们感到惊讶。在8个月大的时候，大壮的体重终于突破了8公斤大关。这意味着他已经超过了大多数成年猫的体重，而他还是个孩子！为了庆祝这个重要的里程碑，我们特地为他准备了一个特别的称重仪式。当数字显示8.2公斤时，我们都为他的健康成长感到骄傲。大壮虽然体型巨大，但性格却异常温和。他最喜欢的事情就是躺在我们的腿上（虽然他已经快要把我们的腿压麻了），或者安静地趴在窗边看着外面的风景。现在的大壮已经成为我们猫舍的"门面担当"，很多来访的客人都被他巨大的体型和温柔的性格所折服。'
        },
        {
            id: 6,
            title: '大壮的玩水天赋',
            cat: 'dazhuang',
            category: 'funny',
            image: 'resources/cat3-main.jpg',
            date: '2024-06-15',
            summary: '大壮展现了他作为缅因猫的独特天赋 - 对水的热爱。',
            content: '缅因猫以其对水的喜爱而闻名，大壮也不例外。我们发现他对水龙头特别感兴趣，每次听到水流声都会跑过去观察。更令人惊讶的是，他竟然学会了如何用自己的爪子打开水龙头！第一次发现这个技能时，我们回到家发现厨房的水在流，而大壮正坐在水槽边，一脸得意地看着我们。从那以后，我们不得不把所有的水龙头都拧紧。但大壮对水的热爱并没有减少，他喜欢在浅水盆里玩水，甚至在我们洗澡时会好奇地在浴缸边徘徊。这种独特的性格让大壮更加特别，也让我们对缅因猫的品种特性有了更深的了解。'
        }
    ],
    gongzhu: [
        {
            id: 7,
            title: '公主的花园奇遇',
            cat: 'gongzhu',
            category: 'adventure',
            image: 'resources/cat4-main.jpg',
            date: '2024-04-05',
            summary: '高贵的波斯猫公主第一次到花园探险，遇到了意想不到的小伙伴。',
            content: '公主虽然是只室内猫，但我们一直希望她能有机会接触大自然。于是在一个阳光明媚的周末，我们决定带她去后花园转转。刚开始公主显得很谨慎，她小心翼翼地探出头，用鼻子嗅着陌生的空气。她的长毛在微风中轻轻飘动，看起来就像个真正的公主在视察她的领地。但没过多久，她就展现出了好奇心旺盛的一面。她开始探索花园的每个角落，用爪子轻轻拨弄花草，追逐飞舞的蝴蝶。最有趣的是，她遇到了一只小蝴蝶。这只蝴蝶似乎对公主很感兴趣，一直在她周围飞舞。公主试图用爪子抓住它，但蝴蝶总是灵巧地躲开。最后，公主似乎明白了这只蝴蝶是想和她做朋友，不再追逐，而是静静地观察它飞舞。这次花园探险让公主变得更加活泼开朗，也让我们看到了她不同于室内生活时的另一面。'
        },
        {
            id: 8,
            title: '公主的美容时光',
            cat: 'gongzhu',
            category: 'milestone',
            image: 'resources/cat4-main.jpg',
            date: '2024-07-20',
            summary: '公主展现了她对美容护理的享受，完全体现了波斯猫的爱美天性。',
            content: '作为一只波斯猫，公主的长毛需要定期护理。我们担心她不喜欢梳毛，但事实证明我们的担心是多余的。从第一次梳毛开始，公主就表现出了极大的享受。她会安静地躺在我们腿上，闭着眼睛，偶尔发出满足的呼噜声。我们为她准备了专门的梳子和美容用品，每次梳毛时间都成了我们和她亲密互动的美好时光。公主似乎很明白美丽需要维护，她会主动配合我们的护理工作，甚至在梳毛结束后还会在我们面前转个圈，好像在展示自己的美丽。这种爱美天性让公主更加可爱，也让我们更加珍惜与她的相处时光。'
        }
    ],
    doudou: [
        {
            id: 9,
            title: '豆豆的捕猎初体验',
            cat: 'doudou',
            category: 'funny',
            image: 'resources/cat5-main.jpg',
            date: '2024-02-18',
            summary: '苏格兰折耳猫豆豆展现了天生的捕猎本能，但她的方式却让人忍俊不禁。',
            content: '豆豆虽然是只室内猫，但她身上依然保留着猫咪天生的捕猎本能。这天，我们给她买了一个新的电动老鼠玩具，想看看她的反应。当电动老鼠开始在地板上移动时，豆豆的反应让我们大吃一惊。她立刻进入了"狩猎模式"：身体压低，尾巴轻轻摆动，眼睛死死盯着目标。但接下来的发展却出乎意料。就在她准备扑上去的时候，电动老鼠突然转向，豆豆愣了一下，然后...她自己也跟着转了个圈，好像在说"等等，我还没准备好呢！"最终，豆豆成功"捕获"了这只电动老鼠，但她并没有像我们预期的那样撕咬它，而是轻轻地用爪子按住它，然后抬头看着我们，一脸"看我多厉害"的表情。从那以后，豆豆就成了这个电动老鼠的"专业捕手"，每次玩这个游戏都充满了欢乐和惊喜。'
        },
        {
            id: 10,
            title: '豆豆的探险日记',
            cat: 'doudou',
            category: 'adventure',
            image: 'resources/cat5-main.jpg',
            date: '2024-05-10',
            summary: '豆豆展现了她作为探险家的天赋，发现了家里所有隐藏的角落。',
            content: '豆豆的好奇心似乎没有止境。她花了整整一个月的时间，把家里的每个角落都探索了一遍。从最高的书架到最低的床底，从衣柜的深处到厨房的橱柜，没有她没去过的地方。最让我们惊讶的是，她竟然找到了一个我们从来不知道的小空间 - 沙发后面的缝隙。现在那里已经成了她的秘密基地，她经常会在那里待上几个小时，然后突然出现在我们面前，好像在说"你们永远猜不到我刚才在哪里"。豆豆的探索精神让我们的生活充满了惊喜，也让我们重新认识了我们的家。'
        }
    ],
    baobao: [
        {
            id: 11,
            title: '豹豹的训练突破',
            cat: 'baobao',
            category: 'milestone',
            image: 'resources/cat6-main.jpg',
            date: '2024-06-22',
            summary: '孟加拉猫豹豹成功学会了第一个指令，证明了他不仅外表野性，头脑也很聪明。',
            content: '孟加拉猫以其野性美和活跃的性格而闻名，豹豹也不例外。他精力旺盛，总是充满活力，但我们发现他也同样聪明好学。我们决定尝试训练豹豹一些基本的指令，没想到他的学习能力超出了我们的预期。在短短的几天内，他就学会了"坐下"这个指令。训练过程充满了乐趣，豹豹似乎很享受这种互动，每次成功完成指令后都会得到奖励，这让他更加积极地参与训练。现在豹豹已经能够熟练地执行几个简单的指令，包括"坐下"、"握手"和"过来"。这些训练不仅锻炼了他的智力，也增进了我们之间的感情。豹豹的成功证明了一个道理：每一只猫咪都有自己的潜力，只要有足够的耐心和正确的方法，就能发现他们身上的闪光点。'
        },
        {
            id: 12,
            title: '豹豹的高处冒险',
            cat: 'baobao',
            category: 'adventure',
            image: 'resources/cat6-main.jpg',
            date: '2024-09-15',
            summary: '豹豹展现了他作为孟加拉猫的本能 - 喜欢高处，经常跳到最高的地方。',
            content: '孟加拉猫天生喜欢高处，豹豹完美地继承了这一特性。他特别喜欢跳到家里最高的地方 - 书架顶层、冰箱顶部、甚至是我们都不敢相信他能到达的地方。有一次，我们发现他坐在天花板的吊灯上（当然我们立即把他抱下来了）。豹豹的跳跃能力令人惊叹，他可以从地面直接跳到2米高的书架上，动作轻盈得像只真正的豹子。为了满足他对高处的热爱，我们为他准备了多个猫爬架和跳台。现在豹豹有了自己的"领地"，他经常会在高处巡视他的"王国"，那种威严的姿态让我们深深感受到了孟加拉猫的野性之美。'
        }
    ]
};

// 照片数据
const photosData = [
    { id: 1, cat: 'xiaohui', image: 'resources/cat1-main.jpg', title: '小灰的优雅时刻', description: '英国短毛猫的绅士风度' },
    { id: 2, cat: 'xiaoxue', image: 'resources/cat2-main.jpg', title: '小雪的甜美睡姿', description: '布偶猫的温柔天使' },
    { id: 3, cat: 'dazhuang', image: 'resources/cat3-main.jpg', title: '大壮的威严姿态', description: '缅因猫的王者风范' },
    { id: 4, cat: 'gongzhu', image: 'resources/cat4-main.jpg', title: '公主的高贵气质', description: '波斯猫的皇室风范' },
    { id: 5, cat: 'doudou', image: 'resources/cat5-main.jpg', title: '豆豆的可爱表情', description: '苏格兰折耳猫的萌态' },
    { id: 6, cat: 'baobao', image: 'resources/cat6-main.jpg', title: '豹豹的野性魅力', description: '孟加拉猫的豹纹之美' },
    // 添加更多照片数据
    { id: 7, cat: 'xiaohui', image: 'resources/cat1-main.jpg', title: '小灰的日常1', description: '安静的午后时光' },
    { id: 8, cat: 'xiaohui', image: 'resources/cat1-main.jpg', title: '小灰的日常2', description: '阳光下的午睡' },
    { id: 9, cat: 'xiaoxue', image: 'resources/cat2-main.jpg', title: '小雪的日常1', description: '温柔的眼神' },
    { id: 10, cat: 'xiaoxue', image: 'resources/cat2-main.jpg', title: '小雪的日常2', description: '美丽的蓝眼睛' },
    { id: 11, cat: 'dazhuang', image: 'resources/cat3-main.jpg', title: '大壮的日常1', description: '巨大的体型展示' },
    { id: 12, cat: 'dazhuang', image: 'resources/cat3-main.jpg', title: '大壮的日常2', description: '温柔巨人的一面' },
    { id: 13, cat: 'gongzhu', image: 'resources/cat4-main.jpg', title: '公主的日常1', description: '高贵优雅的瞬间' },
    { id: 14, cat: 'gongzhu', image: 'resources/cat4-main.jpg', title: '公主的日常2', description: '长毛的美丽' },
    { id: 15, cat: 'doudou', image: 'resources/cat5-main.jpg', title: '豆豆的日常1', description: '折耳的可爱' },
    { id: 16, cat: 'doudou', image: 'resources/cat5-main.jpg', title: '豆豆的日常2', description: '精灵般的表情' },
    { id: 17, cat: 'baobao', image: 'resources/cat6-main.jpg', title: '豹豹的日常1', description: '豹纹的魅力' },
    { id: 18, cat: 'baobao', image: 'resources/cat6-main.jpg', title: '豹豹的日常2', description: '野性的美' }
];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 初始化移动菜单
    initMobileMenu();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 根据当前页面初始化特定功能
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initIndexPage();
            break;
        case 'profiles':
            initProfilesPage();
            break;
        case 'stories':
            initStoriesPage();
            break;
        case 'gallery':
            initGalleryPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('profiles')) return 'profiles';
    if (path.includes('stories')) return 'stories';
    if (path.includes('gallery')) return 'gallery';
    return 'index';
}

// 移动菜单初始化
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 滚动动画初始化
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 首页初始化
function initIndexPage() {
    // 筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const catCards = document.querySelectorAll('.cat-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选卡片
            catCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        translateY: 30,
                        duration: 300,
                        easing: 'easeInQuart',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// 档案页面初始化
function initProfilesPage() {
    // 猫咪选择器
    const catSelectors = document.querySelectorAll('.cat-selector');
    
    catSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            const catId = this.dataset.cat;
            
            // 更新选择器状态
            catSelectors.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // 更新猫咪信息
            updateCatProfile(catId);
        });
    });
    
    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // 初始化第一个猫咪的信息
    updateCatProfile('xiaohui');
}

function updateCatProfile(catId) {
    const cat = catsData[catId];
    if (!cat) return;
    
    // 更新基本信息
    document.getElementById('cat-name').textContent = cat.name;
    document.getElementById('cat-breed').textContent = cat.breed;
    document.getElementById('cat-age').textContent = cat.age;
    document.getElementById('cat-gender').textContent = cat.gender;
    document.getElementById('cat-weight').textContent = cat.weight;
    document.getElementById('cat-color').textContent = cat.color;
    document.getElementById('cat-neutered').textContent = cat.neutered;
    document.getElementById('cat-description').textContent = cat.description;
    document.getElementById('cat-main-image').src = cat.image;
    
    // 更新性格标签
    const tagsContainer = document.getElementById('personality-tags');
    tagsContainer.innerHTML = '';
    cat.personality.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'bg-soft-coral/20 text-soft-coral px-3 py-1 rounded-full text-sm font-medium';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });
    
    // 更新行为特点
    const traitsList = document.getElementById('behavior-traits');
    traitsList.innerHTML = '';
    cat.personality.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = `• ${trait}`;
        traitsList.appendChild(li);
    });
    
    // 更新成长时间线
    updateTimeline(cat.timeline);
    
    // 更新成长图表
    updateGrowthChart();
}

function updateTimeline(timeline) {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    
    timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item flex items-start space-x-4';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="flex-shrink-0 w-4 h-4 bg-soft-coral rounded-full mt-2"></div>
            <div class="flex-grow">
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-semibold text-deep-gray">${item.event}</h4>
                        <span class="text-sm text-deep-gray/60">${item.date}</span>
                    </div>
                    <p class="text-deep-gray/80">${item.description}</p>
                </div>
            </div>
        `;
        
        container.appendChild(timelineItem);
        
        // 添加动画
        setTimeout(() => {
            timelineItem.classList.add('visible');
        }, index * 200);
    });
}

function updateGrowthChart() {
    const chartContainer = document.getElementById('growth-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    const option = {
        title: {
            text: '体重成长曲线',
            textStyle: {
                color: '#4A4A4A',
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['2个月', '4个月', '6个月', '8个月', '10个月', '12个月'],
            axisLine: {
                lineStyle: {
                    color: '#E8A87C'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '体重(kg)',
            axisLine: {
                lineStyle: {
                    color: '#E8A87C'
                }
            }
        },
        series: [{
            data: [1.2, 2.1, 3.2, 3.8, 4.2, 4.5],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#E8A87C',
                width: 3
            },
            itemStyle: {
                color: '#E8A87C'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(232, 168, 124, 0.3)'
                    }, {
                        offset: 1, color: 'rgba(232, 168, 124, 0.1)'
                    }]
                }
            }
        }]
    };
    
    chart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 故事页面初始化
function initStoriesPage() {
    // 猫咪选择器
    const catSelectors = document.querySelectorAll('.cat-selector');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // 初始化故事网格
    updateStoriesGrid('all', 'all');
    
    // 猫咪选择器事件
    catSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            const catId = this.dataset.cat;
            
            // 更新选择器状态
            catSelectors.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // 获取当前选中的类型过滤器
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            
            // 更新故事网格
            updateStoriesGrid(catId, activeFilter);
        });
    });
    
    // 类型筛选器事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 获取当前选中的猫咪
            const activeCat = document.querySelector('.cat-selector.active').dataset.cat;
            
            // 更新故事网格
            updateStoriesGrid(activeCat, filter);
        });
    });
    
    // 阅读更多功能
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('read-more-btn')) {
            const storyCard = e.target.closest('.story-card');
            const storyContent = storyCard.querySelector('.story-content');
            
            if (storyContent.classList.contains('expanded')) {
                storyContent.classList.remove('expanded');
                e.target.textContent = '阅读更多 →';
            } else {
                storyContent.classList.add('expanded');
                e.target.textContent = '收起 ←';
            }
        }
    });
}

function updateStoriesGrid(catId, filter) {
    const storiesGrid = document.getElementById('stories-grid');
    if (!storiesGrid) return;
    
    storiesGrid.innerHTML = '';
    
    // 获取要显示的故事
    let storiesToShow = [];
    
    if (catId === 'all') {
        // 显示所有猫咪的故事
        Object.values(storiesData).forEach(catStories => {
            storiesToShow = storiesToShow.concat(catStories);
        });
    } else {
        // 显示特定猫咪的故事
        storiesToShow = storiesData[catId] || [];
    }
    
    // 按类型筛选
    if (filter !== 'all') {
        storiesToShow = storiesToShow.filter(story => story.category === filter);
    }
    
    // 按日期排序（最新的在前）
    storiesToShow.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 创建故事卡片
    storiesToShow.forEach((story, index) => {
        const catInfo = catsData[story.cat];
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in';
        storyCard.dataset.category = story.category;
        storyCard.dataset.cat = story.cat;
        
        const categoryColors = {
            birth: 'bg-soft-coral/20 text-soft-coral',
            funny: 'bg-mint-green/20 text-mint-green',
            milestone: 'bg-yellow-100 text-yellow-600',
            adventure: 'bg-purple-100 text-purple-600'
        };
        
        storyCard.innerHTML = `
            <div class="aspect-video overflow-hidden">
                <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-xl font-display font-bold text-deep-gray">${story.title}</h3>
                    <span class="${categoryColors[story.category]} px-3 py-1 rounded-full text-sm font-medium">
                        ${getCategoryName(story.category)}
                    </span>
                </div>
                <p class="text-deep-gray/70 mb-4">${story.summary}</p>
                <div class="story-content">
                    <div class="prose prose-sm text-deep-gray/80 mb-4">
                        ${story.content.split('\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2 text-sm text-deep-gray/60">
                        <span>🐱 ${catInfo.name}</span>
                        <span>📅 ${story.date}</span>
                    </div>
                    <button class="read-more-btn text-soft-coral hover:text-soft-coral/80 font-medium transition-colors">
                        阅读更多 →
                    </button>
                </div>
            </div>
        `;
        
        storiesGrid.appendChild(storyCard);
        
        // 添加动画
        anime({
            targets: storyCard,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: index * 100,
            easing: 'easeOutQuart'
        });
    });
    
    // 如果没有故事，显示提示
    if (storiesToShow.length === 0) {
        const noStoriesMessage = document.createElement('div');
        noStoriesMessage.className = 'col-span-full text-center py-12 fade-in';
        noStoriesMessage.innerHTML = `
            <div class="text-6xl mb-4">🐱</div>
            <h3 class="text-2xl font-display font-bold text-deep-gray mb-4">暂无相关故事</h3>
            <p class="text-deep-gray/70">请尝试选择其他猫咪或故事类型</p>
        `;
        storiesGrid.appendChild(noStoriesMessage);
    }
}

function getCategoryName(category) {
    const categoryNames = {
        birth: '出生成长',
        funny: '有趣日常',
        milestone: '重要时刻',
        adventure: '冒险经历'
    };
    return categoryNames[category] || category;
}

// 画廊页面初始化
function initGalleryPage() {
    // 初始化轮播
    if (document.getElementById('featured-gallery')) {
        new Splide('#featured-gallery', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 4000,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                }
            }
        }).mount();
    }
    
    // 筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photosGrid = document.getElementById('photos-grid');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新照片网格
            updatePhotosGrid(filter);
        });
    });
    
    // 初始化照片网格
    updatePhotosGrid('all');
    
    // 模态框功能
    initPhotoModal();
}

function updatePhotosGrid(filter) {
    const photosGrid = document.getElementById('photos-grid');
    if (!photosGrid) return;
    
    photosGrid.innerHTML = '';
    
    const filteredPhotos = filter === 'all' 
        ? photosData 
        : photosData.filter(photo => photo.cat === filter);
    
    filteredPhotos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item bg-white rounded-lg overflow-hidden shadow-lg';
        photoItem.innerHTML = `
            <div class="aspect-square overflow-hidden">
                <img src="${photo.image}" alt="${photo.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-3">
                <h3 class="font-semibold text-sm text-deep-gray mb-1">${photo.title}</h3>
                <p class="text-xs text-deep-gray/70">${photo.description}</p>
            </div>
        `;
        
        photoItem.addEventListener('click', function() {
            openPhotoModal(photo);
        });
        
        photosGrid.appendChild(photoItem);
        
        // 添加动画
        anime({
            targets: photoItem,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 600,
            delay: index * 100,
            easing: 'easeOutQuart'
        });
    });
}

function initPhotoModal() {
    const modal = document.getElementById('photo-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openPhotoModal(photo) {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.querySelector('#modal-caption h3');
    const modalDesc = document.querySelector('#modal-caption p');
    
    modal.style.display = 'block';
    modalImg.src = photo.image;
    modalTitle.textContent = photo.title;
    modalDesc.textContent = photo.description;
}

// 滚动到猫咪区域
function scrollToCats() {
    const catsSection = document.querySelector('#cats-grid').parentElement;
    if (catsSection) {
        catsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 窗口大小改变时的处理
window.addEventListener('resize', debounce(function() {
    // 重新初始化需要响应式调整的功能
    if (typeof echarts !== 'undefined') {
        echarts.getInstanceByDom(document.getElementById('growth-chart'))?.resize();
    }
}, 250));
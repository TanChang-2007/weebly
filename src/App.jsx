import { useEffect } from 'react'
import doraemon10 from './doraemon (2).png'
import doraemon2 from './doraemon3.png'
import daxiong from './daxiong.png'
import jingxiang from './jingxiang.png'
import doraemon1 from './doraemon1.png'
import xiaofu from './xiaofu.png'
import panghu from './panghu.png'
import ahboy from './ahboy.png'
import nobi from './nobita.png'
import jingxiang1 from './jingxiang2.png'
import doraemon3 from './Doraemon5.png'
import xiaofu2 from './xiaofu2.png'
import panghu2 from './panghu2.png'
import ahboy2 from './ahboy2.png'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import 'animate.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



function Home() {
  return (
    <div className='w-full max-h-fit bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto'>
      <div className=' font-mono flex justify-end text-xl px-3'>V1.1.2</div>
      <div className='flex flex-col ml-8 mr-8 justify-center items-center'>
        <div className='text-3xl sm:text-4xl md:text-5xl  p-9 animate__animated animate__fadeInDown'>《哆啦A梦》</div>
        <div className='flex flex-row items-center'>
          <img src={doraemon10} className=" w-2/6 shadow-xl m-2 animate__animated animate__fadeInRightBig" />
          <p className='text-sm sm:text-lg md:text-2xl animate__animated animate__fadeInRight'>《哆啦A梦》为日本漫画家藤子·F·不二雄笔下著名的儿童、科幻类型日本漫画，自1969年12月开始连载。本作主要叙述一只来自22世纪的猫型机器人——哆啦A梦，受原本主人野比世修托付，回到现代，帮助世修的高祖父野比大雄的故事。</p>
        </div>
        <div>
          <div className='text-5xl md:flex flex justify-center pt-24 animate__animated animate__fadeInUpBig'>故事背景</div>
          <img src={doraemon2} className=" shadow-xl float-right w-3/12 ml-3 animate__animated animate__fadeInLeftBig" />
          <p className=' pt-8 text-2xl pb-4 animate__animated animate__fadeInLeft'>
            主角——野比大雄是家中独子，住在日本东京都练马区月见台芒原）的小学生。他和来自未来22世纪机器猫哆啦A梦共同生活。大雄虽然是身边围绕着父母、老师、同学的普通小学生，但是对于运动和念书都很不擅长，学业成绩极差，平均每五次考试就有一次是零分，时常遭到同学欺侮。此外运气也不好，经常遇到各种“灾难”，连猜拳都经常会输（除了和只会出石头的哆啦A梦猜拳能赢之外）。
            由于大雄此种特性，也影响到了未来子孙的生活和表现，为了让情况有所改善，其玄孙野比世修从未来的22世纪带了哆啦A梦来帮助大雄改变命运，利用哆啦A梦许多未来世界的秘密道具协助大雄，故事就此展开。
          </p>
        </div>
      </div>
      
      <div className='flex flex-col pt-40'>
        <div className='flex flex-row justify-evenly'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/alpha"><button><img data-aos="fadeIn" src={daxiong} className="animate__animated animate__fadeInLeft" /></button></Link></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/beta"><button><img src={jingxiang} className="animate__animated animate__fadeInDown" /></button></Link></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/gamma"><button><img src={doraemon1} className="animate__animated animate__fadeInRight" /></button></Link></motion.button>
        </div>
        <div className='flex flex-row justify-evenly pt-20 pb-20'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/delta"><button><img src={xiaofu} className="animate__animated animate__fadeInLeft" /></button></Link></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/zeta"><button><img src={panghu} className="animate__animated animate__fadeInUp" /></button></Link></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><Link to="/eta"><button><img src={ahboy} className="animate__animated animate__fadeInRight" /></button></Link></motion.button>
        </div>
      </div>
        <div className=' flex w-full h-fit bg-white bg-fixed'>
          <div className='flex flex-col gap-3 pb-2 text-xl'>
            <p className=' text-black font-mono pl-10 pt-5'>This Website is made by Chang from MRGA</p>
            <div className='flex flex-row gap-3'><p className=' text-black  font-mono pl-10'>If you have any fantastic ideas you can share with me!!</p><Icon className='text-black' icon="bx:wink-smile" width="24" height="24" /></div>
            <p className='text-black font-mono pl-10'>You can find me on these social media</p>
            <a href='https://www.instagram.com/aikchangtan.0609/'><div className='flex flex-row pl-10 gap-3'><Icon icon="akar-icons:instagram-fill" color="#fb3958" width="24" height="30" /><p className='text-black'>aikchangtan.0609</p></div></a>
            <a href='https://www.facebook.com/profile.php?id=100045748002108'><div className='flex flex-row pl-10 gap-3'><Icon icon="bi:messenger" color="#0ea5e9" width="24" height="30" /><div className='text-black'>陈益昌</div></div></a>
            <a href='https://github.com/TanChang-2007'><div className='flex flex-row font-mono pl-10 gap-3'><Icon icon="ant-design:github-filled" width="24" height="25" />TanChang</div></a>
          </div>
        </div>
    </div>
  );
}

function Alpha() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 animate__animated animate__slideInLeft' src={nobi} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__slideInRight'>野比大野比（野比のび太，野比大雄）是由藤尾藤子創作的哆啦A夢動畫和漫畫系列中的虛構人物，藤本浩和元尾我子的筆名。在動畫的一些英文當地語系化中，Nobita被稱為Sidney，Specky和Nobi Nobi Nobi，通常被描繪成東京練馬區的一名學術小學生，也是Nobisuke和Tamako Nobi的唯一孩子，他永遠由該系列的標題角色照顧，這是一隻由Nobita的後代送回過去的機器貓。
          與哆啦A夢一樣，大雄被認為是最受歡迎和廣泛認可的漫畫人物之一，因為該系列的受歡迎程度超出了其本土日本。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl '>特性</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>野比大野比（野比のび太，野比大雄）是由藤尾藤子創作的哆啦A夢動畫和漫畫系列中的虛構人物，藤本浩和元尾我子的筆名。在動畫的一些英文當地語系化中，Nobita被稱為Sidney，Specky和Nobi Nobi Nobi，通常被描繪成東京練馬區的一名學術小學生，也是Nobisuke和Tamako Nobi的唯一孩子，他永遠由該系列的標題角色照顧，這是一隻由Nobita的後代送回過去的機器貓。
        與哆啦A夢一樣，大雄被認為是最受歡迎和廣泛認可的漫畫人物之一，因為該系列的受歡迎程度超出了其本土日本。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>心地本为善良，并乐于助人，且对动植物和玩具都很有同情心（也有例外），也曾愿意放弃自己的礼物，换取别人快乐[12]，有时更会请求哆啦A梦用道具帮助他人。
        爱好大自然，关爱动物和植物。虽然经常被狗咬，但仍很爱狗。因此虽然他妈妈不容许他养宠物，但经常把受伤的动物带回家照顾。对漫画很有眼光，凡是被他说有趣的作品，日后都会成名。尽管自己的画技不佳。在大长篇中的紧要关头，经常能有很勇敢、突出的表现，此情况以后期作品为甚。有时也会尝试发奋图强，尝试自己去面对困难。但通常只能维持很短的时间。择善固执，尤其是大长篇的表现更是明显。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>
        头脑不好，缺乏常识、考试零分是家常便饭只有在三次算术测验中得了100分，甚至只要拿十分就相当满足，得30分就能让妈妈相当高兴，但在妈妈心情不好时考50分她反而觉得很平常。与得85分就被妈妈骂的静香有着鲜明对比，而平均每五次考试就有一次是0分，曾经庆祝自己十次考试才考一次0分，也算有进步。预先藏起来的零分考卷会因为后来发生的巧合而经常被妈妈发现。连自己名字也会写错对自己的要求低。大雄曾经希望比他还要差的多目同学与他一起差下去，最终多目同学因希望追求进步而没有与大雄一起参与。《来了个比大雄还要差的人》容易被胖虎和小夫的谎言受骗,贪玩的小夫和胖虎的谎言被大雄的谎言受骗。
      </p>
    </div>
  );
}

function Beta() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 rounded-xl animate__animated animate__slideInLeft' src={jingxiang1} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__slideInRight'>源静香通称静香，旧译陈静香、静怡、静儿、静子、宜静、静静、小静等，是藤子·F·不二雄漫画和动画作品《哆啦A梦》中的女主角。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' text-5xl'>兴趣</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>
        做饼干和蛋糕等。最喜欢的食物是烤蕃薯（但为此感到很尴尬，因为吃过之后很容易会放屁，是日本女孩普遍有的状况，也非常怕别人看见），其次是奶酪蛋糕和寿司。爬树（后因顾虑形象而放弃）。洗澡。静香洗澡是该作品当中经常出现的著名场景（美版有穿泳衣），原著总共出现过42次洗澡。许多故事的主题也与她的洗澡有关。被看到洗澡时的反应通常是泼水和大叫，但若是发现大雄看自己洗澡照片会拳脚相向。大长篇里也“几乎总是”以哪里能洗澡为第一优先，在大富翁电玩中的静香甚至必须因为洗澡而停止行动。基本上每次大雄使用任意门去静香家都去到静香家浴室。保养，曾做过所谓的“面部美容操”。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>
        擅长弹钢琴（但其实是妈妈要求她学的，她自己并不喜欢学）。漂亮、心地善良，并且文静而有礼貌，从幼稚园时即常为大雄抱不平（当时大雄就常被胖虎和小夫欺负），也因为大雄亦有善良这点而认定他。学业成绩不错，却不如出木杉。在作品中常见有不懂的问题时会向出木杉请教，却很少碰到出木杉向她请教。家中要求很高，考试就算考85分仍会被妈妈骂。运动神经不错，喜欢滑雪等运动。个性独立坚强，曾在穿越到阿拉伯世界被卖为奴隶后宁受鞭打也不向奴隶主屈服。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10animate__animated animate__slideInUp'>
        小提琴技巧差却喜欢演奏给别人听，甚至比胖虎歌喉更具破坏力；但早期的设定是拉得不错。也许是因为受到妈妈影响，静香母亲小时候很喜欢拉小提琴。有洁癖，一天平均洗三次澡。性格有些任性，甚至时常弄不清当下情况有时候容易生气有时候会诬赖别人。大雄跟他分享道具，结果自己把道具弄出问题就怪罪大雄
      </p>
    </div>
  );
}

function Gamma() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 w-80 h-50 animate__animated animate__bounceInRight' src={doraemon3} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__bounceInRight'>哆啦A梦为了帮助大雄，经常从他的四次元口袋里拿出来自未来世界的道具，而“法宝”在香港和台湾等地是通用语。“ 法宝”这个用语，早在香港1973年连载当初已经出现，到今天的主题曲歌词、漫画、电视动画及电影也普遍使用“法寶”；台湾动画版也使用“法寶”，早期电影版亦曾译为“工具”，台湾水田版动画则译“秘密道具”。各种道具的创意和科幻想像成为哆啦A梦的特色之一。截至2004年5月为止，最权威的统计是漫画版的哆啦A梦共有1963个道具（横山泰行教授统计），但若含动画版出现的道具则总数超过2200个。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__bounceInUp'>
        <div className=' font-bold text-5xl'>性格</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__bounceInUp'>基本还算温和的性格。但是由于它的职务是看管小孩，因此变得有些好管闲事。
        尽管它自己经常劝告大雄慎用道具，但因为它本人的过失导致事态扩大的情况也不在少数。当惊慌的时候就会完全失去理智，经常拿错道具。有时也会不考虑别人的感受，做出惹怒对方的事情。当大雄不争气的时候，也经常会训斥大雄。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__bounceInUp'>
        <div className=' font-bold text-5xl'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-3xl tracking-wider pb-10 animate__animated animate__bounceInUp'>
        心肠好，乐于助人
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__bounceInUp'>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-2xl tracking-wider pb-10 animate__animated animate__bounceInUp'>
        心肠软。每次野比遇到困难，他总会帮野比。但有时会用愚蠢的方法来帮助野比。当它吃不到铜锣烧或人们叫他狸猫时，脾气会非常暴躁
      </p>
    </div>
  );
}

function Delta() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 animate__animated animate__lightSpeedInRight' src={xiaofu2} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__lightSpeedInRight'>旧译阿福、骨川阿福、王小夫，在大雄、胖虎和静香四人中最年长也最矮。他在四人中家境最富有（父亲是公司社长），最爱称赞自己。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl'>性格</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>用家庭财力来搜集自己喜欢的东西，让别人非常嫉妒。而导致大雄去请求哆啦A梦拿出道具。很臭美，可以持续照镜子30分钟”。经常以胖虎参谋的角色来欺负大雄有时也用哆啦A梦的道具来恶作剧。亦经常识破大雄的恶作剧与道具的秘密，经常与胖虎或自己从大雄手上抢夺或偷取哆啦A梦的道具使用，不过却会自食其果。嘴巴非常善于奉承，有为了得到好处或推卸责任说谎的习惯，经常旅行，又喜欢吹嘘炫耀有写日记习惯，但是都是写自己很漂亮等的话。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp'>
        <div className=' font-bold text-5xl animate__animated animate__slideInUp'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>
        有责任心,善良正直
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__slideInUp '>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__slideInUp'>
        经常欺负大雄, 性子懦弱, 胆小怕事, 丢三落四
      </p>
    </div>
  );
}

function Zeta() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 animate__animated animate__fadeInRightBig' src={panghu2} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__fadeInRightBig'>刚田武为本名，其绰号为日版对巨人的片假名读法，旧译技安、武胖虎、武技安。中文版早期译名“技安”即出自这个绰号的音译，而现今中文翻译使用的“胖虎”
          與哆啦A夢一樣，大雄被認為是最受歡迎和廣泛認可的漫畫人物之一，因為該系列的受歡迎程度超出了其本土日本。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>特性</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>野比大野比（野比のび太，野比大雄）是由藤尾藤子創作的哆啦A夢動畫和漫畫系列中的虛構人物，藤本浩和元尾我子的筆名。在動畫的一些英文當地語系化中，Nobita被稱為Sidney，Specky和Nobi Nobi Nobi，通常被描繪成東京練馬區的一名學術小學生，也是Nobisuke和Tamako Nobi的唯一孩子，他永遠由該系列的標題角色照顧，這是一隻由Nobita的後代送回過去的機器貓。
        與哆啦A夢一樣，大雄被認為是最受歡迎和廣泛認可的漫畫人物之一，因為該系列的受歡迎程度超出了其本土日本。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>
        疼爱自己亲妹妹和家人（包括其母），不放过欺负的人。有责任感，会为了照顾生病的母亲而推辞喜欢的活动。偶尔会展现勇气的一面，而在欺负人的同时也以社区孩子们的老大自居，会在大家遇上坏人或紧急情形时挺身而出。虽然经常欺负大雄，但有时看见大雄的勇气和坚持亦会欣赏他而停止。力气超大。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>
        经常欺负大雄和小夫。时常“借”了别人的东西却不归还，然后到最后那些东西也“自动变成”他自己的。如果有人声明归还会对自己饲养的狗“酷哥提出无理要求，甚至因它不能完成这些要求而遗弃它。总是跟小夫一同以“今天人手不够，特别让你加入”为理由“强迫”大雄加入棒球队打球赛，如果拒绝或就算已说明有重大事务，在身也会被视为“不接受两人好意”而强行拉他入队或狠狠揍一顿。有时候与小夫欺骗大雄一些谎言，并要求大雄对他们的谎言作出愚蠢的行动。有时会向别人分享自己学到的知识，当有人说明事实时，反应几乎总是以“这是刻意让我丢脸的奇耻大辱”为由要揍那个人，甚至时常把别人的话“自行曲解”成针对自己。不聪明，学业成绩属于班级中后段。唱歌能力极差，可以说是五音不全。料理能力也很差，却也喜欢料理。
      </p>
    </div>
  );
}

function Eta() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-300 via-fuchsia-100 to-pink-300 overflow-auto '>
      <Link to="/"> <button className=' m-7'><Icon icon="line-md:arrow-left-circle" width="50" height="50" /></button></Link>
      <div className='flex flex-row'><img className='pl-20 m-1 animate__animated animate__fadeInRightBig' src={ahboy2} />
        <div className='pl-3 text-2xl pr-10 pt-10 animate__animated animate__fadeInRight'>
          小杉出生于4月14日。是大雄班级里的班长、资优生，考试经常名列前茅，通常是全班第一名。
        </div>
      </div>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>特性</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>各方面的完美，个性谦和、待人和善与正直，头脑聪明，知识丰富好学，体育也擅长。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>优点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>他不但读书了得，性格善良，也是一个运动健将。因此，他在人际关系、学业成绩、体育、甚至演戏方面也是一等一的天才高手，更深得女同学的欢迎。 可是他却因为特别出众而经常招来大雄、小夫、胖虎等男同学的妒忌。
      </p>
      <div className='m-10 pl-10 flex border-b-2 pb-2 animate__animated animate__fadeInUp'>
        <div className=' font-bold text-5xl'>缺点</div>
      </div>
      <p className='pl-10 pr-10 text-xl tracking-wider pb-10 animate__animated animate__fadeInUp'>
        几乎没有
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="alpha" element={<Alpha />} />
          <Route path="beta" element={<Beta />} />
          <Route path="gamma" element={<Gamma />} />
          <Route path="delta" element={<Delta />} />
          <Route path="zeta" element={<Zeta />} />
          <Route path="eta" element={<Eta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
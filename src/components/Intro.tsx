import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Intro = () => {
  return <Tabs
      defaultValue="English"
      values={[
          { label: 'English', value: 'English' },
          { label: '中文', value: '中文' },
          { label: '粵語', value: '粵語' },
      ]}
      className="w-full"
  >
      <TabItem value="English">
          <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
              <li>This is a personal space for my thoughts, creations, code, and moments of daily life.</li>
              <li>I am a tranny girl, and my pronoun is she/her.</li>
              <li>I am an independent iOS developer also.</li>
          </ul>
      </TabItem>

      <TabItem value="中文">
          <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
              <li>这是我的个人网站，主要分享我的技术项目、文章观点与生活点滴。</li>
              <li>我是跨性别女生，请使用「她」来指代我。</li>
              <li>同时，我也是一位 iOS 独立开发者。</li>
          </ul>
      </TabItem>

      <TabItem value="粵語">
          <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
              <li>呢度係我嘅個人網站，記錄住我嘅思想、創作、程式同日常生活。</li>
              <li>我係跨性別女仔，當我係女仔就得啦。</li>
              <li>同時，我都係一位 iOS 獨立開發者。</li>
          </ul>
      </TabItem>
  </Tabs>;
};
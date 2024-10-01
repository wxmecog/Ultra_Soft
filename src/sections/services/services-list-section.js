

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { MotionViewport } from 'src/components/animate';
import ComponentBlock from 'src/components/component-block/component-block';



// ----------------------------------------------------------------------

const serviceList = [
  {
    title: 'Website Development',
    descriptions: [
      'Our web development process begins with a deep understanding of your business goals and target audience. We then design a custom website that reflects your brand identity and effectively communicates your message. From intuitive navigation to visually engaging layouts, we ensure that your website not only looks great but also delivers a seamless user experience.',
      'We focus on clean and optimized code, ensuring that your website loads quickly and performs efficiently. Our development team follows industry standards and adheres to SEO best practices, enabling your website to rank higher in search engine results and attract organic traffic.',
      'Throughout the development process, we prioritize collaboration and communication, keeping you involved and informed at every stage. We encourage your feedback and input to ensure that the final product aligns with your vision.',
    ],
    svg: 'website',
  },
  {
    title: 'App Development',
    descriptions: [
      'Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, we have the expertise to turn your vision into reality. We leverage the latest technologies, industry best practices, and a user-centric approach to deliver high-quality mobile applications that meet your specific requirements.',
      `Our app development process begins with a thorough understanding of your goals, target audience, and market landscape. We collaborate closely with you to define the app's functionality, features, and design aesthetics. Our team brings your ideas to life through sleek designs, seamless navigation, and a focus on delivering an exceptional user experience.`,
      `We meticulously develop and test your app, ensuring optimal performance, compatibility, and security across various devices and platforms. Our developers follow coding standards and leverage modern frameworks and libraries to deliver robust, scalable, and future-ready mobile applications.`,
    ],
    svg: 'app',
  },
  {
    title: 'e-Commerce Development',
    descriptions: [
      'We specialize in creating powerful and seamless ecommerce solutions that empower businesses to thrive in the online marketplace. With our expertise in ecommerce development, we build custom platforms that are visually stunning, user-friendly, and optimized for driving sales and maximizing conversions.',
      `From intuitive product catalogs and secure payment gateways to inventory management and seamless customer experiences, our ecommerce solutions are tailored to meet your specific business goals and exceed customer expectations. Trust us to unlock the potential of ecommerce and help you establish a strong online presence that drives growth and success.`,
    ],
    svg: 'ecommerce',
  },
  {
    title: 'Database Development',
    descriptions: [
      'At Ultra Software labs, we have extensive expertise in database development, enabling businesses to efficiently manage and leverage their data for optimal performance and decision-making. Our team of skilled database developers designs and builds robust and scalable database solutions tailored to your specific requirements.',
      `Whether it's designing a relational database, implementing data warehousing solutions, or optimizing existing databases, we ensure data integrity, security, and accessibility. With our deep understanding of database technologies and best practices, we provide comprehensive solutions that enhance data management, improve data-driven insights, and support the growth and success of your business. Trust us to develop a robust database infrastructure that empowers you to harness the full potential of your data assets.`,
    ],
    svg: 'database',
  },
  {
    title: 'DIGITAL MARKETING',
    descriptions: [
      'Our digital marketing services encompass a wide range of disciplines, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and more. We combine these strategies to create a comprehensive and integrated approach that maximizes your online presence and drives tangible business growth.',
      `We begin by conducting thorough research and analysis to gain insights into your industry, competitors, and target audience. This information forms the foundation of our strategies, enabling us to identify the most effective channels and tactics to reach your audience and achieve your marketing objectives.`,
      `Our team of experts then executes the strategies with precision, leveraging industry best practices and the latest tools and technologies. We continuously monitor campaign performance, analyze data, and make data-driven optimizations to ensure that your marketing efforts yield the best possible return on investment (ROI).`,
    ],
    svg: 'marketing',
  },
  {
    title: 'SEO & CONTENT WRITING',
    descriptions: [
      `Search engine optimization (SEO) is essential for improving your website's visibility and driving targeted organic traffic. Our SEO specialists conduct in-depth keyword research, analyze your website's performance, and optimize various on-page and off-page elements to enhance your search engine rankings. We stay up-to-date with the latest SEO trends and algorithms to ensure that your website remains competitive and visible in search engine results.`,
      `Content writing plays a crucial role in SEO success. Our talented content writers create compelling, informative, and keyword-rich content that resonates with your target audience. Whether it's website copy, blog posts, articles, or social media content, we craft high-quality content that engages readers and encourages them to take action. Our content writing services are tailored to your industry and target audience, helping you establish thought leadership and drive meaningful interactions with your customers.`,
    ],
    svg: 'seo',
  },
  {
    title: 'Social Media & Reputation Management',
    descriptions: [
      `Social media has become an essential platform for businesses to connect with their customers and showcase their brand personality. Our social media experts create tailored strategies that align with your business goals, target audience, and industry. We handle everything from social media account setup and content creation to community management and paid advertising. By leveraging popular social media platforms, we help you reach and engage your audience, drive website traffic, and foster brand loyalty.`,
      `Online reputation management is crucial in today's digital landscape. We understand the importance of maintaining a positive brand image and managing your online reputation effectively. Our reputation management specialists monitor online conversations, reviews, and mentions of your brand across various platforms. We address customer feedback promptly, manage negative reviews and comments, and work proactively to enhance your brand's online reputation.`,
    ],
    svg: 'social',
  },
]

export default function ServiceListSection() {
  return (
    <Container 
      component={MotionViewport} 
      sx={{ 
        textAlign: 'left', 
        pb: { xs: 10, md: 15 },
        pt: { xs: 4, md: 6 },
        px: `0px !important`,

      }}
    > 
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          mx: {xl: -4, md:4,  xs: 2 },
        }}
      >
        {serviceList.map((item)=> (
          <ComponentBlock 
            sx={{ p: 4 }}
            index={item.title} 
          >
            <Grid 
              container
              sx={{ 
                alignItems: 'center',
              }}
              spacing={2}
            > 
              <Grid xs={12} md={4}>
                <Box
                  component='img'
                  src={`/assets/services/${item?.svg}.svg`}
                  sx={{
                    width: 380, 
                    height: 380,
                  }}
                />
              </Grid>
              <Grid xs={12} md={8}>
                <Stack
                  sx={{
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Typography 
                    sx={{ 
                      textTransform: "uppercase", 
                      fontSize: 32, 
                      lineHeight: 1.1, 
                      fontWeight: 400, 
                      fontFamily: 'Whyte Inktrap, sans-serif !important',
                      color: 'text.primary' 
                    }}>
                    {item.title}
                  </Typography>
                  {item.descriptions?.map((description, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 16,
                        lineHeight: 2,
                      }}
                    >
                      {description}
                    </Typography>
                    ))}
                </Stack>
              </Grid>
            </Grid>
          </ComponentBlock>
        ))}

      </Stack>
    </Container>
  );
}

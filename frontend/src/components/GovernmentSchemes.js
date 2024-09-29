import React from 'react';
import { motion } from 'framer-motion';

// Scheme data with sample images and descriptions
const schemes = [
  {
    name: 'National Pension System (NPS)',
    age: '18-65 years',
    eligibility: 'Any Indian citizen, resident or non-resident',
    description: 'A pension scheme that allows you to accumulate a corpus for your retirement.',
    imageUrl: 'https://acko-cms.ackoassets.com/NPS_National_Pension_Scheme_6a1197ed98.png',
    link: 'https://www.npscra.nsdl.co.in/'
  },
  {
    name: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
    age: '10 years and above',
    eligibility: 'Any Indian citizen without a bank account',
    description: 'A scheme to provide financial services to the underserved and unbanked population.',
    imageUrl: 'https://www.india.gov.in/sites/upload_files/npi/files/spotlights/jan-dhan-yojna-inner-new.jpg',
    link: 'https://pmjdy.gov.in/'
  },
  {
    name: 'Equity Linked Savings Scheme (ELSS)',
    age: 'No specific age limit',
    eligibility: 'Any Indian resident individual or Hindu Undivided Family (HUF)',
    description: 'A tax-saving mutual fund scheme that offers potential for high returns.',
    imageUrl: 'https://d3ce1o48hc5oli.cloudfront.net/s3fs-public/2024-02/shutterstock_2176156733.jpg?VersionId=JYUYYTlPrFqbEqWr5hvtf.fXL06CbyxS',
    link: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1'
  },
  {
    name: 'Sovereign Gold Bond Scheme',
    age: 'No specific age limit',
    eligibility: 'Resident individuals, HUFs, trusts, universities, charitable institutions',
    description: 'A scheme for investing in gold without physical possession.',
    imageUrl: 'https://m.economictimes.com/thumb/msid-101078502,width-1200,height-900,resizemode-4,imgsize-62486/sovereign-gold-bond-scheme-2023-24-1st-tranche-opens-for-subscription-from-monday-8-reasons-to-buy.jpg',
    link: 'https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=45171'
  },
  {
    name: 'Pradhan Mantri Mudra Yojana (PMMY)',
    age: '18 years and above',
    eligibility: 'Any Indian citizen with a business plan for non-farm income generating activities',
    description: 'A scheme to provide loans to small businesses and entrepreneurs.',
    imageUrl: 'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/08/01134348/Pradhan-Mantri-Mudra-Yojana-1.jpg',
    link: 'https://www.mudra.org.in/'
  },
  {
    name: 'Atal Pension Yojana (APY)',
    age: '18-40 years',
    eligibility: 'Any Indian citizen, primarily targeted at unorganized sector workers',
    description: 'A pension scheme aimed at providing a fixed monthly pension post-retirement.',
    imageUrl: 'https://atalpensionyojanachart.com/wp-content/uploads/2023/07/Atal-Pension-Yojana-Chart-%E0%A4%85%E0%A4%9F%E0%A4%B2-%E0%A4%AA%E0%A5%87%E0%A4%82%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F-PDF-2023.png',
    link: 'https://www.pfrda.org.in/APY'
  },
  {
    name: 'Sukanya Samriddhi Yojana',
    age: 'Account can be opened for a girl child from birth until she turns 10',
    eligibility: 'Parents or legal guardians of girl children',
    description: 'A savings scheme for the education and marriage of a girl child.',
    imageUrl: 'https://static.toiimg.com/thumb/msid-63693387,width-1280,height-720,resizemode-4/63693387.jpg',
    link: 'https://www.nsiindia.gov.in/(S(3czuo355wn5zoafru3gb4h21))/InternalPage.aspx?Id_Pk=89'
  },
  {
    name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    age: '18-70 years',
    eligibility: 'Any Indian citizen with a bank account',
    description: 'A low-cost accident insurance scheme providing coverage against death or disability.',
    imageUrl: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/9b8ecca6-aca4-4d1a-90a4-7749d9afba45/Personal/Insure/Social%20Security%20Schemes/pradhan_mantri_suraksha/pradhan_suraksha_bima_yojana_banner1.png',
    link: 'https://www.myscheme.gov.in/schemes/pmsby'
  },
  {
    name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    age: '18-50 years',
    eligibility: 'Any Indian citizen with a bank account',
    description: 'A life insurance scheme providing coverage against death for a nominal premium.',
    imageUrl: 'https://i0.wp.com/iasnext.com/wp-content/uploads/2024/02/Pradhan-Mantri-Jeevan-Jyoti.webp',
    link: 'https://www.myscheme.gov.in/schemes/pmjjby'
  },
  {
    name: 'Stand-Up India Scheme',
    age: 'Above 18 years',
    eligibility: 'SC/ST and women entrepreneurs',
    description: 'A scheme to provide financial support for setting up greenfield enterprises.',
    imageUrl: 'https://tatsatchronicle.com/wp-content/uploads/2021/07/startup-india-standup-india.jpg',
    link: 'https://www.standupmitra.in/'
  },
  {
    name: 'Pradhan Mantri Vaya Vandana Yojana (PMVVY)',
    age: '60 years and above',
    eligibility: 'Senior citizens of India',
    description: 'A pension scheme providing monthly pension to senior citizens.',
    imageUrl: 'https://www.basunivesh.com/wp-content/uploads/2020/05/Pradhan-Mantri-Vaya-Vandana-Yojana-PMVVY-2020-2023.jpg',
    link: 'https://web.umang.gov.in/landing/department/pmvvy.html'
  },
  {
    name: 'Kisan Vikas Patra (KVP)',
    age: 'No specific age limit (minors can invest through guardians)',
    eligibility: 'Any Indian resident individual',
    description: 'A savings scheme with a fixed maturity period offering guaranteed returns.',
    imageUrl: 'https://images.moneycontrol.com/static-hindinews/2022/02/kisanVikas775-770x430.jpg',
    link: 'https://www.nsiindia.gov.in/(S(mggr1555ty4vk45520fco4ql))/InternalPage.aspx?Id_Pk=56'
  }
];

const GovernmentSchemes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Government Schemes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schemes.map((scheme, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={scheme.imageUrl} alt={scheme.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-bold text-blue-500 mb-2">{scheme.name}</h2>
            <p className="text-gray-400 mb-2"><strong>Age:</strong> {scheme.age}</p>
            <p className="text-gray-400 mb-2"><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p className="text-gray-300 mb-4">{scheme.description}</p>
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-400 hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSchemes;

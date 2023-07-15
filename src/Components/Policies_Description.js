import { Box } from '@mui/system';
import React from 'react';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


//........Declaring Government Policies................
const items=[
  {
    id:'1',
    heading:'1. Ayushman Bharat Yojana:',
    content:'Ayushman Bharat is a universal health insurance scheme of the Ministry of Health and Family Welfare, Government of India. PMJAY was launched to provide free healthcare services to more than 40% population of the country. The scheme offers a health cover of Rs 5 Lakh.In this scheme, it covers medicines, diagnostic expenses, medical treatment, and pre-hospitalization costs. The poorest families of India can benefit from this healthcare scheme',
  },
  {
    id:'2',
    heading:'2. Pradhan Mantri Suraksha Bima Yojana:',
    content:'Pradhan Mantri Suraksha Bima Yojana aims to provide accident insurance cover to the people of India. People in the age group of 18 years to 70 years who have an account in a bank can avail benefit from this scheme.This policy provides an annual cover of Rs 2 lakh for total disability and death cover and Rs 1 lakh for partial disability. The policy premium gets automatically debited from the policyholder’s bank account.',
  },
  {
    id:'3',
    heading:'3. Aam Aadmi Bima Yojana (AABY):',
    content:'This is one of the latest National Health Insurance schemes having been established in the year 2007, October. It basically covers individuals from the age of 18 years-59 years.  AABY insurance scheme is tailored for all those citizens living in the upcountry and in the rural areas.It also covers the landless citizens who are tenants living both in urban and rural areas. It also includes giving scholarships to underprivileged children.Basically, the head of the family or the earning member is the one protected by this scheme. The premium of 200 rupees per annum is shared equally by the state and the central government. Upon a natural death, the family is compensated at 30000 rupees. However, upon death caused by a permanent disability, the family is compensated at 75,000 rupees.,'
  },
  {
    id:'4',
    heading:'4. Central Government Health Scheme (CGHS):',
    content:'This scheme was started in the year 1954 and provides comprehensive health care facilities for central government officials and pensioners residing in cities. Operations of this scheme take place in cities such as Kolkata, Mumbai, Lucknow, Delphi, Nagpur, and Pune.The people covered by this scheme are required to be residing in India. This is a National Health Company Online Renewal program that includes the privilege of health education to the beneficiaries.This scheme has the following main components: All dispensary related services including domiciliary care. In addition, the beneficiaries of this scheme have the privilege of being hospitalized each and every time they fall ill.On the other hand, whenever you have an X-ray or laboratory examination requirements, they would be provided free under this particular scheme. The most important advantage of this National Health Insurance scheme is that it provides free specialists consultations both at hospital level and dispensaries.',
  },
  {
    id:'5',
    heading:'5. Employment State Insurance Scheme:',
    content:'This is a multidimensional National Health insurance scheme due to the fact that it provides social security as well as socio-economic protection to all workers in India. In addition, it provides the same privileges those who depend on workers protected under this scheme.This insurance scheme commences upon the first day of insurable employment to each and every worker. They are provided with full medical care insurance for themselves and their families as well. On the other hand, those covered under this scheme (which is basically workers) are also entitled to a wide range of cash benefits. They include cash in times of physical distress such as sickness or even when one might become disabled may it be temporal or permanent.In addition, for any woman who would lose the capacity to earn or dependents of persons injured during occupational accidents, they are entitled to a monthly pension commonly referred to as dependents benefits.This scheme is not applicable to each and every person or company. It is only applicable to all permanent factories employing more than ten employees. Recently, the scheme has been extended to various businesses including shops, restaurants, road and motor transports and newspaper entities that employ more than 20 people.',
  },
  {
    id:'6',
    heading:'6. Janshree Bima Yojana:',
    content:'Janshree Bima Yojana is designed for individuals in the poor category who are within the age group of 18-59 years. The scheme includes special features like Women SHG Groups and Shiksha Sahyog Yojana.  At present there are 45 occupational groups under this scheme.',
  },
  {
    id:'7',
    heading:'7. Chief Minister’s Comprehensive Insurance Scheme:',
    content:'Chief Minister’s Comprehensive Insurance Scheme is a Tamil Nadu state government scheme. It was launched in association with the United India Insurance Company Ltd. It is a family floater policy that was designed to provide quality health care services to people. This scheme covers more than a thousand medical procedures.In this policy, you can claim for hospitalization expenses up to Rs 5 lakh. The beneficiary can select from both private and government hospitals under this scheme. Tamil Nadu residents with an annual income of lesser than Rs 75000 per year are eligible to enroll under this scheme.',
  },
  {
    id:'8',
    heading:'8. Universal Health Insurance Scheme (UHIS):',
    content:'This type of scheme was implemented to help the families who live below the poverty line. It covers the medical expenses of each and every member of the family. In case of death due to an accident, there is a cover that is provided.The main drivers of the Universal Health Insurance Scheme are basically the four public sector general insurance companies who have been doing this with an aim of improving healthcare to the underprivileged and especially the economically disabled citizen in India.Once a family member is hospitalized, this scheme may facilitate the medical expenses of up to 30,000 rupees. However, when the earning head of the family is admitted to the hospital, the Universal health insurance scheme compensates a total of 50 rupees daily for a maximum of 15 days.We can therefore say that this insurance scheme is designed for families below the poverty line.',
  },
  {
    id:'9',
    heading:'9. West Bengal Health Scheme:',
    content:'The Government of West Bengal launched this scheme for its employees in the year 2008. It is also available for the pensioners. This coverage is provided on both individual and family floater basis up to a sum insured of Rs 1 lakh. The policy covers OPD treatment and medical surgeries as per the policy terms and conditions.',
  },
  {
    id:'10',
    heading:'10. Yeshasvini Health Insurance Scheme:',
    content:'The Karnataka State Government promotes the Yeshasvini Health Insurance Scheme. This scheme is useful for peasants and farmers and who are associated with a co-operative society. This health insurance scheme covers more than 800 medical procedures such as Neurology, Orthopaedic, Angioplasty, etc.Co-operative societies help the farmers to get enrolled in the Yeshasvini Health Insurance Scheme. The beneficiaries can avail of health care services through network hospitals, and coverage benefits are extendible to the beneficiary’s family members.',
  },
  {
    id:'11',
    heading:'11. Mahatma Jyotiba Phule Jan Arogya Yojana:',
    content:'The Government of Maharashtra introduced this health insurance policy for the benefit of people in the state around. The scheme is going to be helpful for below the poverty line and was targeted at the farmers in Maharashtra.The policy offers a family health cover of up to Rs 1.5 lakh for specified illnesses. The best part about this policy is that there is no waiting period, and it is claimable after the first day itself, unless it is specifically mentioned in the policy terms.',
  },
  {
    id:'12',
    heading:'12. Mukhyamantri Amrutam Yojana:',
    content:'Mukhyamantri Amrutam Yojana was initiated by the Gujarat government in the year 2012 for the benefit of the poor people living in Gujarat. People who are in the lower middle-income group and below the poverty line are eligible to enroll under the scheme.It is family floater health insurance policy that provides coverage up to Rs 3 lakh per family. The policyholder can avail of medical treatment from private and government hospitals, as well as trust-run hospitals.',
  },
  {
    id:'13',
    heading:'13. Karunya Health Scheme:',
    content:'In 2012, the Kerala Government had launched this scheme to provide health cover for listed chronic illnesses. It is a Critical Illness plan for the poor and covers major diseases such as Kidney, Cancer, cardiovascular illnesses, etc.People who are below the poverty line can enroll themselves in this scheme. The beneficiary needs to provide a copy of the Income Certificate and Aadhaar Card for the same.',
  },
  {
    id:'14',
    heading:'14. Telangana State Government Employees and Journalists Health Scheme:',
    content:'Telangana Government launched this scheme for its journalists and employees. It is beneficial for the employed, retired, and pensioners. In this scheme, the beneficiary can avail of cashless treatment in the hospitals that are registered.  The beneficiaries do not have to rush to arrange funds for emergency medical expenses.',
  },
  {
    id:'15',
    heading:'15. Dr YSR Aarogyasri Health Care Trust:',
    content:'Four health welfare schemes were launched by the Andhra Pradesh Government along with the Dr YSR Aarogyasri Trust. These schemes offer medical cover to different people and help them at the time of a medical emergency.  The schemes are given below: (1) Dr YSR Aarogyasri scheme for the welfare of the poor.(2)Arogya Raksha scheme is for Above the Poverty Line (APL).(3)Working Journalist Health Scheme that provides cashless treatment cover for specified procedures.(4)Employee Health Scheme provides health cover to the state government employees.',
  },
]



export default function Example() {
    return (
<>
{/* ............................................................................................................  */}
{/* ........................... this contain shows in large screen devices........................... */}
{/* ............................................................................................................ */}
{/* .............Accordion box start.......... */}
    <Box 
        sx={{
            width:'75vw',
            ml:'11%',
            pt:'2%',

            display:{xs:'none',md:'block'},
        }}>
            <Accordion allowZeroExpanded>
            {items.map((item) => (
                <AccordionItem key={item.id}>
                    <AccordionItemHeading style={{ textAlign:'justify'}}>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel style={{ textAlign:'justify'}}>
                    {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </Box>
                
{/* ............................................................................................................  */}
{/* ........................... this contain shows in mobile devices........................... */}
{/* ............................................................................................................ */}
{/* .............Accordion box start.......... */}
        <Box 
        sx={{
            width:'75vw',
            ml:'8%',
            pt:'5%',
            display:{xs:'block',md:'none'},
            }}>
                <Accordion allowZeroExpanded>
            {items.map((item) => (
                <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
        </Box>
  {/* .............Accordion box End.......... */}
</>

);
}

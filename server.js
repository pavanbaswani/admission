const cool = require('cool-ascii-faces')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express() 
const port = process.env.PORT||5000 
app.use(bodyParser.json()) 

app.get('/',function(req,res){
	res.send("Hello world")
})

app.post('/', (req, res) => {
  console.log(req.body)

var obj = req.body
var intent= obj["nlp"]["intents"][0]["slug"]
console.log(intent)
if(intent==="admission-info"){
  res.send({
    /*replies: [{
      type: 'text',
      content: 'Roger that',
    }],*/
    replies: [
    {
      type:'text',
      content:'Admission to the first year of 6-year integrated engineering programme in the University will be granted only after satisfactory verification and scrutiny of the details mentioned in the application and the original certificates/documents submitted by the candidate at the Certificate verification and Admission centre. Mere selection for certficate verification /documents will not guarantee admission to the candidate.',
    },
    {
      type: 'quickReplies',
      content: {
      title: 'What are you looking for:?',
      buttons: [
	        {
	          title: 'Appply for admissions',
	          value: 'Apply for admissions',
	        },
	        {
	          title: 'Admission Procedure',
	          value: 'Admission procedure',
	        },
	        {
	          title: 'Eligibility for Admissions',
	          value: 'Eligibility for admissions',
	        },
	        {
	          title: 'Other state Admissions',
	          value: 'other state admissions'
	        }
        ]
      }
    }], 
  conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "apply-for-admissions"){
  res.send({

    replies:[{
      type:'text',
      content:'a) The candidates should apply through APOnline services only.\nb) Application Fee: Rs. 150.00 (for OC and BC candidates) Rs. 100.00 (for SC and ST candidates)\nc) The application fee should be paid in cash at APOnline service center, for which the center will issue a receipt.\nd) An additional amount of Rs. 25.00 per application should be paid as service charges to the APOnline Centre.\ne) If any candidate applies more than once, then the latest application will be considered for the selection process.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "admission-procedure"){
  res.send({

    replies:[{
      type:'text',
      content:'a) Admissions to the first year of Integrated B.TechProgram (2018-19) will be based on merit in the Grade Point Average (GPA) and Grade obtained in each subject and by following the statutory reservations of the State..\nb)Admission to 85% of total available seats shall be reserved for ‘local candidates’(Andhra Pradesh) and the remaining 15% of the seats are open to the students of Andhra Pradesh and Telangana states as specified in the Presidential Order 371 Article D in consonance to Section 95 of the A.P. Reorganization Act, 2014.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "admission-eligibility"){
  res.send({

    replies:[{
      type:'text',
      content:'a)Candidates should have passed SSC (10th class) or any other equivalent examination recognized by the Governments of Andhra Pradesh &Telangana State, and conducted in 2018.\nb)Candidates should not have completed 18 years of age as on 31.12.2018, (21 years in case ofstudents belonging to SC and ST categories).\nc)International students shall be of Indian Nationality / Persons of Indian Origin (PIO)/Overseas Citizen of India (OCI) Card Holders.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "other-state-admissions"){
  res.send({

    replies:[{
      type:'text',
      content:'a)Supernumerary seats to the extent of 5% are available to students belonging to States other than Andhra Pradesh & Telangana State including the children of Indians working in Gulf Countries / International and NRI students\nb)The tuition fee for students from other states and children of Indians working in Gulf Countries is Rs 1,36,000/- per annum. The tuition fee for International/NRI students is Rs 3,00,000/- per annum.\nc)Applicants from the States other than Andhra Pradesh & Telangana, children of Indians working in Gulf Countries, International and NRI students seeking admission at RGUKT shall apply through RGUKT website only.\nA seperate linkGUKT website only. A separate link is provided for the purpose at the institute website.\nd)The application fee for students from a State other than AP&Telangana is Rs.150/-\nThe application fee for children of Indians working in Gulf Countries,Internation and NRI is US$:25.00.\ne)Applicants who are children of Indians working in Gulf Countries, International and NRI students should pay the application fee through a Demand Draft drawn  favour of  Convener,\nUG Admissions– 18,\nRGUKT,\nBank Account Number:150810100040801,\nIFSC Code:ANDB0001508,\nBank Name: Andhra Bank,\nBranch Name: Acharya Nagarjuna University ',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "rgukt_images"){
  res.send({

    replies:[{
      type:'text',
      content:'Here you can see the images of IIIT college, RGUKT-Nuzvid.\n',
    }/*,
    {
    type: 'carousel',
	  content: [
	    {
	      title: 'CARD_1_TITLE',
	      imageUrl: 'https://getmyuni.azureedge.net/college-image/big/rajiv-gandhi-university-of-knowledge-technologies-rgukt-nuzvid.jpg',
	      buttons: [
	        {
	          title: 'BUTTON_1_TITLE',
	          type: 'BUTTON_1_TYPE',
	          value: 'BUTTON_1_VALUE'
	        }
	      ]
	    }
	  ]
	}*/],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "contact-us"){
  res.send({

    replies:[{
      type:'text',
      content:'Helpline Numbers & e-mail address:\nE-mail: admissions@rguktn.ac.in',
    },
    {
	  type: 'card',
	  content: [{
		    title: 'Primary Contact',
		    subtitle: 'Contact-1',
		    imageUrl: 'https://getmyuni.azureedge.net/college-image/big/rajiv-gandhi-university-of-knowledge-technologies-rgukt-nuzvid.jpg',
		    buttons: [
		      {
		        title: 'Office',
		        type: 'Phonenumber',
		        value: '8333981196'
		      }
		    ]
		  },
		  {
		  	title: 'Secondary Contact',
		    subtitle: 'Contact-2',
		    imageUrl: 'https://getmyuni.azureedge.net/college-image/big/rajiv-gandhi-university-of-knowledge-technologies-rgukt-nuzvid.jpg',
		    buttons: [
		      {
		        title: 'Director',
		        type: 'Phonenumber',
		        value: '9951537952'
		      }
		    ]
		  }
	  	]
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "annual-fee"){
  res.send({

    replies:[{
      type:'text',
      content:'a)The tuition fee for the candidates who studied in Schools situated in  Andra Pradesh & Telangana states is Rs.36,00/- per annum(for PUC1 &PUC2) and Rs 40,000/- per annum(for four years Engineering)\nb)Every student has to pay a registration fee of Rs.1,000/-(Rs.500/- for SC/ST candidates) and a refundable caution deposit of Rs.2,000/-(by all),that is a total of Rs.3,000/-(Rs.2,500/- in case of SC/ST candidates) at the time of admission.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "certificate-verification"){
  res.send({

    replies:[{
      type:'text',
      content:'The applicants should submit a print out copy of the application along with the following documents at the time of certificate verification and Admission. The proforma for the certificates mentioned below...\n\n1)The receipt issued by the AP Online services\n2)Hall Ticket of X standard (10th Class)\n3)GPA of 10th class Public Examination, i.e., SSC/CBSE/ICSE/NIOS.\n4)Residence certificate by those claiming Local category\n5)Residence certificate / service certificate of parents by those claiming Non-Local category\n6)Proof of caste / community certificate (SC/ST/BC) in the prescribed proforma by those claiming reservation under any of these categories\n7)Physically Handicapped (PH) certificate in the prescibed proforma by those claiming reservation under this category\n8)Children of Armed Forces (CAP) certificate in the prescribed proforma by those claiming reservation under this category\n9)NCC, Sports and games certificates by those claiming reservation under this category\n10)Note: If a candidate fails to submit any of the relevant certificates, he/she shall not be considered for admission.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "intimation-to-selected-students"){
  res.send({

    replies:[{
      type:'text',
      content:'The list of provisionally selected candidates for counseling will be displayed on the University website www.rgukt.in\n\nThe candidates will also be informed by post,Email and SMS message,whichever possible, to the address/mobile number written in the application form.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "selection-method"){
  res.send({

    replies:[{
      type:'text',
      content:'1)Admissions will be based on merit in the Grade Point Average (GPA) and Grade obtained in each subject, and as per the provisions of Presidential Order, 1974.\n\n2)Latest application will be considered in case of multiple applications.\n\n3)Last date for sending the hard copy of SSC grade card/marks memo after revaluation / recounting: 11.06.2018, 5:00 PM\n\n4)In case of a tie in GPA score, it will be resolved by adopting the following options in that sequence:\ni. Higher grade in Mathematics,\nii. Higher grade in General Science,\niii. Higher grade in English,\niv. Higher grade in Social Studies,\nv. Higher grade in 1st Language,\nvi. Older candidate as per the Date of Birth,\nvii. Lowest random number obtained from the hall ticket number.\n\nIf the tie is resolved with any of the check in the chronological order mentioned above, the next option(s) will not be checked.\n\nThe procedure of resolving by random number is as follows: For SSC, NIOS & OSSC applicants The random number will be obtained as the reminder of {253 x [first 5 digits of the hall ticket number] divided by the last 5 digits of the hall ticket number}.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "rules-of-reservation"){
  res.send({

    replies:[{
      type:'text',
      content:' Admission to 85% of total available seats shall be reserved for ‘local candidates’(Andhra Pradesh) and the remaining 15% of the seats are open to the students of Andhra Pradesh and Telangana states as specified in the Presidential Order 371 Article D in consonance to Section 95 of the A.P. Reorganization Act, 2014.\n\nThe rules of reservation for different categories are as under in both local and unreserved categories, subject to any changes and amendments made by the Government of Andhra Pradesh. i. SC - 15%, ST - 6%, BC-A - 7%, BC-B - 10%, BC-C - 1%, BC-D - 7%, BC-E - 4%, Physically Handicapped (PH) - 3%, Children of Armed Personnel (CAP) - 2%, NCC -1% and Sports - 0.5%.\n\nA horizontal reservation of 33 1/3 % of seats in favor of women candidates in each category (OC/SC/ST/BC/Special Categories) shall be ensured, wherever women candidates are available. iv. In case of PH candidates, certificates issued by the State Medical Board alone are acceptable. For Sports and CAP categories, certificates issued by the respective District Boards are acceptable. These reservations are applicable at state-level.\n\nGames & Sports only will be considered under Sports & Games category in respect of GO.MS.NO.10 Dated: 15-7-2008 of Youth advancement Tourism & Culture (Sports) Department.',
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}
else if(intent === "other-category-certificate-stack"){
  res.send({

    replies:[{
      type:'text',
      content:'List of certificates enclosed:\n\n a) Hall ticket of 10th class or its equivalent\nb) Certificate showing the GPA of 10th class public examination, like SSC / CBSE / ICSE / NIOS.\nc) NCC certificate by those claiming reservation under this category (for details see Annexure – VII).\nd) Sports certificate(s) at the level of inter-district and above by those claiming reservation under\n\nPost to the following address:\n\nThe Convener, UG Admissions-2018,\n Rajiv Gandhi Universityof Knowledge Technologies,\n Flat Number 202,\n Second floor,\n NRI Block(C),\n Sri Mahendra Enclave,\n Tadepalli,\n Guntur District – 522501,\n Andhra Pradesh,\n India.'
    }],
    conversation: {
    memory: { key: 'value' }
  }
  })
}


})

app.post('/errors', (req, res) => {
  console.log(req.body) 
  res.send() 
}) 
//cool faces
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/cool', (req, res) => res.send(cool()))

app.listen(port, () => { 
  console.log('Server is running on port 5000') 
})
/* DULS LibBot — Intelligent Library Assistant
   Delhi University Library System
   Created by Snehasish Paul */
(function () {
  'use strict';

  var KB = {
    timings: '<b>Library Hours</b><br>Major libraries (CRL, CSL, RTL, Arts, South Campus): <b>Mon\u2013Sat, 9:00 AM \u2013 8:00 PM</b><br>Departmental libraries: <b>Mon\u2013Fri, 9:30 AM \u2013 5:30 PM</b><br>The library is open round the year except on Republic Day, Holi, Independence Day, and Gandhi Jayanti. Hours may be extended during exams.',
    opac: 'Search our catalogue at <a href="http://opac.duls.du.ac.in/" target="_blank" rel="noopener">DULS Web OPAC</a>. You can search by keyword, title, author, subject, ISBN, ISSN, series, call number, or accession number across all 34 libraries. Filter results by item type: general books, textbooks, periodicals, rare books, manuscripts, maps, eBooks, and more.',
    eresources: 'DULS subscribes to <b>50+ databases</b> including JSTOR, Scopus, Web of Science, Cambridge University Press, Wiley, SAGE, Taylor &amp; Francis, Project MUSE, Oxford University Press, ACS Publications, Adam Matthew Digital Archives, Gale Archives, Drama Online (Bloomsbury), Sage Research Methods, and South Asia Archive. Access: <a href="https://duls.du.ac.in/duls/e-resources" target="_blank" rel="noopener">E\u2011Resources Portal</a>',
    ebooks: 'DULS provides access to <b>3,67,274+ e\u2011books</b> across all disciplines. Browse at <a href="https://eb.du.ac.in/web/book-details/index" target="_blank" rel="noopener">DU E\u2011Books</a>. Publishers include Cambridge, Wiley, SAGE, Taylor &amp; Francis, Bloomsbury, Springer, and Indian publishers like Bhasha Prakashan and Art &amp; Science Academic Publications.',
    elibrary: '<b>DU eLibrary</b> is a federated single\u2011window search platform for all DULS digital resources, launched December 2021 by VC Prof. Yogesh Singh. It provides anywhere, anytime access to subscribed content plus ~1.4 million open educational resources.<br><a href="https://duelibrary.in/" target="_blank" rel="noopener">duelibrary.in</a> | <a href="https://play.google.com/store/apps/details?id=com.refread.du" target="_blank" rel="noopener">Google Play</a> | <a href="https://apps.apple.com/in/app/du-elibrary/id1584093384" target="_blank" rel="noopener">App Store</a>',
    membership: '<b>How to get DULS Membership</b><br>Eligible: enrolled students (PG, M.Phil., Ph.D.), faculty, non\u2011teaching staff, and approved outsiders.<br><b>Security deposit:</b> Rs. 500 (refundable) for PG/M.Phil./Ph.D.; Rs. 250 for UG students<br><b>Process:</b> Get the application form from the Central Library, get it recommended by your HoD/Principal, submit it to the respective library.<br>Download the registration process: <a href="https://duls.du.ac.in/duls/sites/default/files/2025-08/New_Member_Registration.pdf" target="_blank" rel="noopener">Membership Registration PDF</a>',
    borrowing: '<b>Borrowing Limits</b><br>\u2022 University teaching staff: <b>10 books for 30 days</b><br>\u2022 College teaching staff: <b>6 books for 30 days</b><br>\u2022 Ph.D. students: <b>6 books for 30 days</b><br>\u2022 M.Phil. students: <b>5 books for 30 days</b> (max 2 textbooks)<br>\u2022 Masters/PG students: <b>4 books for 30 days</b> (max 2 textbooks)<br>\u2022 Diploma/Certificate students: <b>2 books for 15 days</b><br>\u2022 Non\u2011teaching staff: <b>4 books for 15 days</b><br>\u2022 Outsiders/retired: <b>Consultation only</b> or 2 books for 15 days (retired)',
    overdue: '<b>Overdue Charges</b><br>General books: <b>Rs. 1 per day per volume</b><br>Textbooks: Rs. 1 per day per volume<br>Fines are deposited in the conscience box at the circulation counter. No receipts are issued.<br>The University Librarian can suspend defaulters from library use pending clearance of liabilities.',
    lostbook: '<b>Lost or Damaged Books</b><br>Report the loss immediately in writing to the University Librarian.<br>Borrowers must pay at rates fixed by the Library or replace the book.<br>If your membership card is lost, a non\u2011refundable deposit of <b>Rs. 100</b> is required for a duplicate card.',
    ill: '<b>Inter\u2011Library Loan (ILL)</b><br>ILL supplements DULS stock by borrowing from other libraries. Available to teachers, research scholars, and Masters\u2019 students.<br><b>Process:</b> First search DULS OPAC and e\u2011resources. If unavailable, fill an ILL request form at the Reference Desk in the Central Library.<br>ILL books must be used within the Central Library only and cannot be taken out.<br>More: <a href="https://duls.du.ac.in/duls/ill" target="_blank" rel="noopener">ILL Service</a>',
    plagiarism: '<b>Plagiarism Detection</b><br>The Central Library is a hub for plagiarism verification and control. Services are available for research scholars, faculty, and students to check thesis/dissertation originality.<br>Access: <a href="https://duls.du.ac.in/duls/plagiarism" target="_blank" rel="noopener">Research Support</a>',
    shodhsarthi: '<b>ShodhSarthi</b> is DULS\u2019s comprehensive research support platform. It provides structured guidance, resources, and training across the entire research lifecycle \u2014 from literature review to publication.<br>Visit: <a href="https://duls.du.ac.in/rss/" target="_blank" rel="noopener">ShodhSarthi Portal</a>',
    contact: '<b>Contact DULS</b><br>\ud83c\udfe2 Delhi University Library System, University of Delhi, Delhi \u2013 110007<br>\ud83d\udcde +91\u201111\u201127666428 / 27667848<br>\ud83d\udce7 <a href="mailto:librarian@du.ac.in">librarian@du.ac.in</a><br>\ud83c\udf10 <a href="https://duls.du.ac.in/duls/" target="_blank" rel="noopener">duls.du.ac.in</a>',
    librarian: '<b>Dr. Rajesh Singh</b> is the University Librarian and Head of DULS since 2020.<br>\u2022 ILA\u2011Kaula Best Librarian Award (2024)<br>\u2022 Best University Librarian Award, Bangkok (2022)<br>\u2022 Indo\u2011Russian Library Cooperation contributor<br>\u2022 ORCID Global Participation Fund awardee (2026, with Dr. Nitin Paliwal \u2014 USD 16,500)<br>Contact: <a href="mailto:librarian@du.ac.in">librarian@du.ac.in</a> | +91\u201111\u201127666428',
    libraries: 'DULS consists of <b>34 libraries</b> in two campuses:<br><b>Major:</b> Central Reference Library (CRL), Central Science Library (CSL), Arts Library, Ratan Tata Library (RTL), South Campus Library<br><b>Law:</b> Faculty of Law, Integrated Law Centre, Law Centre\u2011I, Law Centre\u2011II<br><b>Special:</b> Braille Library<br><b>Faculty:</b> FMS Library<br><b>Departmental:</b> Botany, Chemistry, Geology, Physics, Zoology, Mathematics, Education, Music, Social Work, East Asian Studies, Slavonic Studies, African Studies, English, Hindi, History, and more.',
    stats: '<b>DULS Collections</b><br>\u2022 17,35,082 Books<br>\u2022 3,67,274 E\u2011Books<br>\u2022 531 Print Journals &amp; Magazines<br>\u2022 13,117 E\u2011Journals (ONOS &amp; self\u2011subscribed)<br>\u2022 50 Databases<br>\u2022 44 Digital Archives<br>\u2022 28,776 Theses<br>\u2022 22,152 Dissertations<br>\u2022 4,27,509 Bound Periodicals<br>\u2022 981 Manuscripts &amp; Rare Books',
    irins: 'Track University of Delhi\u2019s research output on IRINS: <a href="https://du.irins.org/" target="_blank" rel="noopener">du.irins.org</a><br><b>73,504 publications on Scopus</b> (2001\u2013Aug 2026)<br><b>32,209 publications on Web of Science</b> (2001\u20132026)',
    rules: '<b>General Library Rules</b><br>\u2022 Silence must be maintained at all times<br>\u2022 Mobile phone use is prohibited in reading areas<br>\u2022 Smoking, eating and drinking are not allowed<br>\u2022 Deposit personal belongings at the property counter<br>\u2022 Do not deface, mark, or mutilate library materials<br>\u2022 Use of personal laptops is permitted with written request<br>\u2022 Damage or theft will be referred to disciplinary authorities<br>Full rules: <a href="https://duls.du.ac.in/duls/regulations" target="_blank" rel="noopener">Library Regulations</a>',
    events: 'Check upcoming events (ACS, JSTOR, MUSE, Wiley workshops): <a href="https://duls.du.ac.in/duls/node/110" target="_blank" rel="noopener">DULS Events</a><br>Register for notifications: <a href="https://forms.gle/dprQcJbEsRKz5Cxd8" target="_blank" rel="noopener">Event Registration Form</a>',
    feedback: 'Submit feedback and suggestions: <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7Tbmp4pK9Q1dme5_O0KOAq7drOnBZT3K0l6i1VnDc3GkGYQ/viewform" target="_blank" rel="noopener">Feedback Form</a>',
    dupress: '<b>Delhi University Press Online</b> publishes and indexes DU journals to enhance their global visibility and academic impact. Visit: <a href="http://dup.du.ac.in/" target="_blank" rel="noopener">dup.du.ac.in</a>',
    openaccess: 'Free open access e\u2011resources available to all: <a href="https://duls.du.ac.in/duls/oer" target="_blank" rel="noopener">Open Access Resources</a>. Includes ~1.4 million OER through DU eLibrary.',
    newspaper: 'Read e\u2011newspapers from around the world via PressReader: <a href="https://www.pressreader.com/catalog" target="_blank" rel="noopener">PressReader Catalogue</a>',
    dashboard: 'View DU\u2019s realtime research analytics: <a href="http://rd.duls.du.ac.in/dashboard.py/" target="_blank" rel="noopener">Research Dashboard</a>',
    history: '<b>DULS History</b><br>\u2022 <b>1922:</b> Founded with 1,380 gift books and 86 periodicals<br>\u2022 <b>1924:</b> Faculty of Law Library established<br>\u2022 <b>1933:</b> Shifted to Old Vice\u2011Regal Lodge Ballroom<br>\u2022 <b>1942:</b> Prof. S. Das Gupta appointed first Librarian<br>\u2022 <b>1947:</b> Central Institute of Education Library started<br>\u2022 <b>1948:</b> MEL Dept. Library started<br>\u2022 <b>1949:</b> Ratan Tata Library established<br>\u2022 <b>1958:</b> Central Library Building inaugurated by President Dr. S. Radhakrishnan<br>\u2022 <b>1965:</b> Dr. Carl M. White survey of DU libraries<br>\u2022 <b>1974:</b> DULS formally constituted<br>\u2022 <b>1995:</b> UGC Rs. 1 Crore grant for computerisation<br>\u2022 <b>2005:</b> Web\u2011based services launched<br>\u2022 <b>2021:</b> DU eLibrary platform launched<br>\u2022 <b>2026:</b> ORCID grant (USD 16,500) awarded',
    social: 'Follow DULS on social media:<br><a href="https://www.instagram.com/dulibraries" target="_blank" rel="noopener">Instagram</a> | <a href="https://www.facebook.com/librariesdu/" target="_blank" rel="noopener">Facebook</a> | <a href="https://youtube.com/@dulibraries" target="_blank" rel="noopener">YouTube</a> | <a href="https://x.com/dulibraries" target="_blank" rel="noopener">X (Twitter)</a>',
    clearance: '<b>Library Clearance / No Dues</b><br>Mandatory before taking university exams, submitting theses, or leaving the university.<br><b>Process:</b> Get clearance from your respective library first, then approach the Central Library for the final clearance certificate.<br>Research students must submit the clearance to Board of Research Studies before thesis acceptance.<br>No clearance is issued to non\u2011members.',
    renewal: '<b>Membership Renewal</b><br>\u2022 Masters students: valid 16 July \u2013 30 April each session<br>\u2022 M.Phil./Ph.D./Post\u2011doctoral: valid one academic session (July\u2013June), renew annually<br>\u2022 Teachers: valid one session, renew annually<br>\u2022 Non\u2011teaching staff: valid one session, renew annually',
    research_floor: '<b>Research Floor Facilities</b><br>\u2022 Bonafide Ph.D. students get allotted seats and lockers<br>\u2022 M.Phil. students have a specified area<br>\u2022 Visiting researchers need University Librarian permission<br>\u2022 Controlled stack of research books maintained<br>\u2022 Theses/dissertations can be consulted only at the designated place \u2014 no photocopying or scanning of printed theses<br>\u2022 No food, beverages, or non\u2011study activities on the research floor',
    textbook: '<b>Textbook Collection</b><br>Available in different libraries covering prescribed, recommended, and allied readings.<br>\u2022 Heavy demand: preference to Masters and M.Phil. students<br>\u2022 Some copies kept for consultation only<br>\u2022 Overdue: <b>Rs. 1 per day per volume</b> (via conscience box)<br>\u2022 Reservation facility available',
    reservation: '<b>Book Reservation</b><br>Teachers and research scholars can reserve books not on shelves using prescribed reservation cards at the Reference Desk, or electronically via email. The library will notify you when the book becomes available.',
    theses: '<b>Theses &amp; Dissertations</b><br>DULS holds <b>28,776 theses</b> and <b>22,152 dissertations</b>. Around 8,000 Ph.D. theses and 14,000 rare books have been digitised.<br>The Central Library publishes <i>Doctoral Research</i> \u2014 abstracts of theses \u2014 and organises an exhibition of theses on the eve of the Annual Convocation.',
    rareBooks: '<b>Rare Books &amp; Manuscripts</b><br>DULS houses <b>981 manuscripts and rare books</b>. Around 14,000 rare books have been digitised. These are for consultation only within the library and cannot be borrowed.',
    infra: '<b>Physical Infrastructure</b><br>\u2022 Total library area: 1,86,773 sq ft<br>\u2022 Reading room area: 50,000 sq ft<br>\u2022 Stack rooms carpet area: 1,00,000 sq ft<br>\u2022 Reading seats: 2,000+<br>\u2022 Central Library Building: 300 ft \u00d7 200 ft, 38 ft high<br>\u2022 Main Hall: 300\u2019 \u00d7 35\u2019<br>\u2022 CSL: 22,500 sq ft, 185 seats<br>\u2022 South Campus: 4,100 sq mt, 285 seats<br>\u2022 RTL: 150 \u00d7 130 sq mt, 250 seats',
    koha: '<b>Integrated Library Management System</b><br>DULS uses the Koha open\u2011source ILMS for streamlined library operations, cataloguing, circulation, and OPAC services across all 34 libraries.',
    cambridge: '<b>Cambridge Aspire</b> provides 1,350+ digital textbooks for undergraduate learning. Now accessible through DULS: <a href="https://www.cambridge.org/highereducation/" target="_blank" rel="noopener">Cambridge Aspire</a>',
    nikkei: '<b>Nikkei Asia</b> is now available on trial access through DULS: <a href="https://asia.nikkei.com/" target="_blank" rel="noopener">Nikkei Asia</a>',
    jstor: '<b>JSTOR</b> is a major subscribed database providing access to academic journals, books, and primary sources across disciplines. Accessible on campus or via DU eLibrary.',
    scopus: '<b>Scopus</b> is subscribed by DULS \u2014 the largest abstract and citation database of peer\u2011reviewed literature. DU has 73,504 publications indexed on Scopus (2001\u2013Aug 2026).',
    wos: '<b>Web of Science</b> is subscribed by DULS. DU has 32,209 publications indexed (2001\u20132026). Use it for citation analysis, h\u2011index, and impact factor research.',
    outsider: '<b>For Outside Users</b><br>Outsiders not connected to DU can access the library with written recommendation confirming their academic need.<br>Monthly subscription: <b>Rs. 100</b> | Quarterly: <b>Rs. 200</b><br>Outsiders get <b>consultation facility only</b> (no borrowing). Contact the University Librarian for permission.',
    holidays: '<b>Library Holidays</b><br>DULS is open round the year except on:<br>\u2022 Republic Day (26 January)<br>\u2022 Holi<br>\u2022 Independence Day (15 August)<br>\u2022 Gandhi Jayanti (2 October)<br>All other changes in timings are notified on library notice boards.',
    photocopying: '<b>Photocopying</b><br>Photocopying is available through commercial vendors in the vicinity of each library, subject to Copyright provisions. Photocopying or scanning of printed theses/dissertations is <b>not permissible</b>.',
    laptop: '<b>Laptop Usage</b><br>Personal laptops and electronic storage media can be used inside the library with a <b>written request</b> to the library administration. The library is not responsible for damage to equipment from power fluctuations.',
    smoking: 'Smoking is strictly <b>not allowed</b> inside any DULS library. Eating and drinking are also prohibited in reading and study areas.',
    belongings: 'You must deposit personal belongings including personal books at the <b>property counter</b> against a token before entering the reading areas. The library reserves the right to check deposited items. If you lose the token, claim your items with proper identification and a written request.',
    accessibility: '<b>Accessibility</b><br>The <b>Braille Library</b> in the Central Library Complex provides specialised resources for visually impaired students including Braille books, audio books, and assistive technologies. Additional support is available through the DU\u2011NTPC Centre for other disabilities.',
    deputy_librarians: '<b>Deputy Librarians</b><br>\u2022 Dr. Angom Jeevan Singh \u2014 RTL (In\u2011charge)<br>\u2022 Dr. Ashis Biswas \u2014 Administration<br>\u2022 Dr. Lohrii Kaini Mahemei \u2014 CSL (In\u2011charge)<br>\u2022 Dr. Nitin Paliwal \u2014 Digital Resources (In\u2011charge)<br>\u2022 Dr. Shiva Parihar \u2014 Law Faculty Library (In\u2011charge)<br>\u2022 Dr. Somesh Vishwakarma \u2014 CRL &amp; Arts Library (In\u2011charge)',
    website: 'The official DULS website: <a href="https://duls.du.ac.in/duls/" target="_blank" rel="noopener">duls.du.ac.in</a><br>University of Delhi: <a href="https://www.du.ac.in/" target="_blank" rel="noopener">du.ac.in</a>'
  };

  var intents = [
    {keys:['timing','hour','open','close','when','schedule','time','kab','samay','kitne baje'],a:KB.timings},
    {keys:['opac','catalogue','catalog','search book','find book','khoj'],a:KB.opac},
    {keys:['e-resource','eresource','database','subscri','electronic resource'],a:KB.eresources},
    {keys:['ebook','e-book','digital book','online book','kitab'],a:KB.ebooks},
    {keys:['elibrary','e-library','app','mobile','phone','download','play store','app store'],a:KB.elibrary},
    {keys:['member','register','registration','join','enrol','card','id card','sadasyata','how to join','how do i join','how to become'],a:KB.membership},
    {keys:['borrow','issue','kitni kitab','how many book','loan period','kitab lena','check out','checkout','lending'],a:KB.borrowing},
    {keys:['overdue','fine','late','penalty','jurmana','delay charge'],a:KB.overdue},
    {keys:['lost book','lost card','damage','missing','kho gaya','replacement'],a:KB.lostbook},
    {keys:['inter-library','ill','interlibrary','borrow from another','loan from other'],a:KB.ill},
    {keys:['plagiar','turnitin','similarity','integrity','originality','copy check'],a:KB.plagiarism},
    {keys:['shodh','research guide','research lifecycle','shodhsarthi','research support'],a:KB.shodhsarthi},
    {keys:['contact','phone','email','address','reach','location','pata','kahan hai'],a:KB.contact},
    {keys:['librarian','dr rajesh','rajesh singh','head duls','chief'],a:KB.librarian},
    {keys:['deputy librarian','dl ','deputy head'],a:KB.deputy_librarians},
    {keys:['how many librar','34 librar','list of librar','which librar','all librar','branches','shakha'],a:KB.libraries},
    {keys:['stat','how many book','collection','number','total','count','figure','size','kitni kitab hai','kitna'],a:KB.stats},
    {keys:['irins','research output','publication','scopus output','wos output','scholarly','paper count'],a:KB.irins},
    {keys:['rule','regulation','policy','niyam','dos and don','conduct','discipline'],a:KB.rules},
    {keys:['event','webinar','workshop','seminar','upcoming','programme','karyakram'],a:KB.events},
    {keys:['feedback','suggest','complaint','improve','suzhav','shikayat'],a:KB.feedback},
    {keys:['press','journal publish','du press','dup','university press'],a:KB.dupress},
    {keys:['open access','free resource','oer','muft','free book'],a:KB.openaccess},
    {keys:['newspaper','press reader','news','e-newspaper','akhbar','samachar'],a:KB.newspaper},
    {keys:['dashboard','visuali','analytics','real-time'],a:KB.dashboard},
    {keys:['history','establish','1922','when was','founded','origin','itihas','radhakrishnan','ranganathan','carl white'],a:KB.history},
    {keys:['social','instagram','facebook','twitter','youtube','follow'],a:KB.social},
    {keys:['clearance','no dues','leaving','exam','certificate'],a:KB.clearance},
    {keys:['renew','validity','expir','extend','renewal'],a:KB.renewal},
    {keys:['research floor','phd seat','research room','locker','scholar seat'],a:KB.research_floor},
    {keys:['textbook','text book','prescribed','recommended reading','course book'],a:KB.textbook},
    {keys:['reserv','hold','book not available','book on loan','reserve a book'],a:KB.reservation},
    {keys:['thes','dissertation','doctoral','phd submit','thesis check'],a:KB.theses},
    {keys:['rare book','manuscript','ancient','digitised','heritage','pracheen'],a:KB.rareBooks},
    {keys:['infra','building','area','sq ft','floor plan','seat','space','reading room'],a:KB.infra},
    {keys:['koha','ilms','library software','management system','automat'],a:KB.koha},
    {keys:['cambridge','aspire','textbook digital'],a:KB.cambridge},
    {keys:['nikkei','asia','japanese','japan news'],a:KB.nikkei},
    {keys:['jstor','archive','back issue'],a:KB.jstor},
    {keys:['scopus','elsevier','citation','abstract database'],a:KB.scopus},
    {keys:['web of science','wos','clarivate','impact factor','h-index','journal rank'],a:KB.wos},
    {keys:['outsider','external','visitor','bahiri','non-du','guest','outside user','not student'],a:KB.outsider},
    {keys:['holiday','chutti','closed day','sunday','leave day'],a:KB.holidays},
    {keys:['photocopy','xerox','scan','print','copy'],a:KB.photocopying},
    {keys:['laptop','computer','plug','charge','wifi','internet','electronic'],a:KB.laptop},
    {keys:['smok','cigarette','eat','drink','food','canteen','chai','coffee'],a:KB.smoking},
    {keys:['bag','belong','property counter','locker','personal item','saman','deposit'],a:KB.belongings},
    {keys:['disab','blind','visually impaired','braille','accessible','divyang','handicap','special need'],a:KB.accessibility},
    {keys:['website','web','url','link','online'],a:KB.website},
    {keys:['hi','hello','hey','namaste','good morning','good afternoon','good evening','namaskar'],a:'Namaste! I am <b>DULS LibBot</b>, the virtual library assistant for the Delhi University Library System. How may I help you today?'},
    {keys:['thank','thanks','dhanyavaad','shukriya','appreciated'],a:'You are welcome! Feel free to ask anything else about DULS. Happy reading!'},
    {keys:['bye','goodbye','see you','alvida','phir milenge'],a:'Goodbye! Visit the library soon. Knowledge awaits!'},
    {keys:['who made','who built','who created','who designed','developer','creator'],a:'This website was designed and developed by <b>Snehasish Paul</b>.'},
  ];

  function findAnswer(q) {
    var lower = q.toLowerCase().trim();
    for (var i = 0; i < intents.length; i++) {
      for (var j = 0; j < intents[i].keys.length; j++) {
        if (lower.indexOf(intents[i].keys[j]) !== -1) return intents[i].a;
      }
    }
    return 'I could not find an exact answer. Here are some things I can help with:<br><br>\u2022 <b>Timings</b> \u2014 library opening hours<br>\u2022 <b>Membership</b> \u2014 how to join, fees, renewal<br>\u2022 <b>Borrowing</b> \u2014 limits, overdue, lost books<br>\u2022 <b>E\u2011Resources</b> \u2014 databases, e\u2011books, JSTOR, Scopus<br>\u2022 <b>Research</b> \u2014 ShodhSarthi, plagiarism, theses<br>\u2022 <b>Rules</b> \u2014 regulations, conduct, clearance<br>\u2022 <b>Contact</b> \u2014 phone, email, address<br><br>Or contact DULS directly: <a href="mailto:librarian@du.ac.in">librarian@du.ac.in</a> | +91\u201111\u201127666428';
  }

  function createBot() {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; link.href = 'libbot.css';
    document.head.appendChild(link);

    var fab = document.createElement('button');
    fab.className = 'libbot-fab';
    fab.setAttribute('aria-label', 'Open DULS LibBot');
    fab.innerHTML = '<span class="libbot-badge"></span><svg class="icon-chat" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg><svg class="icon-close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
    document.body.appendChild(fab);

    var win = document.createElement('div');
    win.className = 'libbot-window';
    win.style.display = 'none';
    win.innerHTML = '<div class="libbot-header"><div class="libbot-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></div><div class="libbot-header-info"><h4>DULS LibBot</h4><p><span class="libbot-status-dot"></span> Online \u00b7 Delhi University Library System</p></div><div class="libbot-header-actions"><button class="libbot-header-btn" id="libbot-clear" title="Clear chat"><i class="fas fa-redo"></i></button><button class="libbot-header-btn" id="libbot-minimize" title="Minimize"><i class="fas fa-minus"></i></button></div></div><div class="libbot-messages" id="libbot-msgs"></div><div class="libbot-input-area"><input class="libbot-input" id="libbot-inp" type="text" placeholder="Ask about timings, borrowing, OPAC, membership..." autocomplete="off"><button class="libbot-send" id="libbot-sendbtn" title="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></div><div class="libbot-footer">Delhi University Library System \u00b7 Est. 1922</div>';
    document.body.appendChild(win);

    var msgs = document.getElementById('libbot-msgs');
    var inp = document.getElementById('libbot-inp');
    var sendBtn = document.getElementById('libbot-sendbtn');
    var isOpen = false;

    function toggle() {
      isOpen = !isOpen;
      fab.classList.toggle('open', isOpen);
      win.classList.toggle('visible', isOpen);
      win.style.display = isOpen ? 'flex' : 'none';
      if (isOpen) setTimeout(function(){ inp.focus(); }, 100);
    }
    fab.addEventListener('click', toggle);
    document.getElementById('libbot-minimize').addEventListener('click', toggle);

    function addMsg(html, sender) {
      var div = document.createElement('div');
      div.className = 'libbot-msg ' + sender;
      var avIcon = sender === 'bot'
        ? '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'
        : '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
      div.innerHTML = '<div class="libbot-msg-avatar">' + avIcon + '</div><div class="libbot-bubble">' + html + '</div>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function addTyping() {
      var div = document.createElement('div');
      div.className = 'libbot-msg bot'; div.id = 'libbot-typing';
      div.innerHTML = '<div class="libbot-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></div><div class="libbot-bubble"><div class="libbot-typing"><span></span><span></span><span></span></div></div>';
      msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
    }
    function removeTyping() { var t = document.getElementById('libbot-typing'); if (t) t.remove(); }

    function addQuickActions() {
      var actions = [
        {icon:'fa-clock',label:'Timings',q:'What are the library timings?'},
        {icon:'fa-search',label:'Search OPAC',q:'How to search OPAC?'},
        {icon:'fa-database',label:'E-Resources',q:'What e-resources are available?'},
        {icon:'fa-id-card',label:'Membership',q:'How to get membership?'},
        {icon:'fa-book',label:'Borrowing',q:'How many books can I borrow?'},
        {icon:'fa-coins',label:'Fines',q:'What are the overdue charges?'},
        {icon:'fa-flask',label:'ShodhSarthi',q:'What is ShodhSarthi?'},
        {icon:'fa-phone',label:'Contact',q:'Contact details?'},
        {icon:'fa-chart-bar',label:'Collections',q:'How many books does DULS have?'},
        {icon:'fa-calendar',label:'Events',q:'Any upcoming events?'},
        {icon:'fa-scroll',label:'Rules',q:'What are the library rules?'},
        {icon:'fa-history',label:'History',q:'Tell me the history of DULS'},
      ];
      var wrap = document.createElement('div');
      wrap.className = 'libbot-quick';
      actions.forEach(function(a) {
        var chip = document.createElement('span');
        chip.className = 'libbot-chip';
        chip.innerHTML = '<i class="fas ' + a.icon + '"></i>' + a.label;
        chip.addEventListener('click', function(){ handleSend(a.q); });
        wrap.appendChild(chip);
      });
      var container = document.createElement('div');
      container.className = 'libbot-msg bot';
      container.style.maxWidth = '100%';
      container.innerHTML = '<div class="libbot-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>';
      var bubble = document.createElement('div');
      bubble.className = 'libbot-bubble';
      bubble.style.padding = '10px 12px';
      bubble.appendChild(wrap);
      container.appendChild(bubble);
      msgs.appendChild(container);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function handleSend(text) {
      var q = (text || inp.value).trim();
      if (!q) return;
      inp.value = '';
      addMsg(q, 'user');
      addTyping();
      var delay = 350 + Math.random() * 500;
      setTimeout(function(){ removeTyping(); addMsg(findAnswer(q), 'bot'); }, delay);
    }

    sendBtn.addEventListener('click', function(){ handleSend(); });
    inp.addEventListener('keydown', function(e){ if (e.key === 'Enter'){ e.preventDefault(); handleSend(); }});

    document.getElementById('libbot-clear').addEventListener('click', function(){
      msgs.innerHTML = ''; greet();
    });

    function greet() {
      addMsg('Namaste! I am <b>DULS LibBot</b>, the virtual library assistant for the <b>Delhi University Library System</b>.<br><br>I can answer questions about timings, membership, borrowing rules, e\u2011resources, research support, clearance, and much more. Choose a topic below or type your question.', 'bot');
      setTimeout(addQuickActions, 200);
    }
    greet();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBot);
  } else {
    createBot();
  }
})();

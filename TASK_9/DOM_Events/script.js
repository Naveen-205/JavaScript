const btn1 = document.getElementById("btn1");

const products = document.getElementById("products");
products.style.display = "none";

btn1.addEventListener("click", () => {
    btn1.style.display = "none";
    products.style.display = "block";
});

const teaBtn = document.getElementById("teaBtn");
const teaItems = document.getElementById("teaItems");

teaItems.style.display = "none";

teaBtn.addEventListener("click", () => {
    teaBtn.style.display = "none";
    teaItems.style.display = "block";
})



/* normal tea */
const normaltea = document.getElementById("normaltea");
const NThead = document.getElementById("NThead");
const NTpay = document.getElementById("NTpay");
const NTget = document.getElementById("NTget");

normaltea.style.display = "none";

NTbtn.addEventListener("click", () => {
    normaltea.style.display = "block";
    NThead.textContent = "Normal Tea Ordered Successfully...";
    blacktea.style.display = "none";
})

NTget.style.display = "none";

NTpay.addEventListener("click", () => {
    NTpay.style.display = "none";
    NTget.style.display = "block";
})


/* black tea */
const blacktea = document.getElementById("blacktea");
const BThead = document.getElementById("BThead");
const BTpay = document.getElementById("BTpay");
const BTget = document.getElementById("BTget");

blacktea.style.display = "none";

BTbtn.addEventListener("click", () => {
    normaltea.style.display = "none";
    blacktea.style.display = "block";
    BThead.textContent = "Black Tea Ordered Successfully...";
    lemontea.style.display = "none";
})

BTget.style.display = "none";

BTpay.addEventListener("click", () => {
    BTpay.style.display = "none";
    BTget.style.display = "block";
})


/* lemon tea */
const lemontea = document.getElementById("lemontea");
const LThead = document.getElementById("LThead");
const LTpay = document.getElementById("LTpay");
const LTget = document.getElementById("LTget");

lemontea.style.display = "none";

LTbtn.addEventListener("click", () => {
    blacktea.style.display = "none";
    lemontea.style.display = "block";
    LThead.textContent = "Lemon Tea Ordered Successfully...";
    gingertea.style.display = "none";
})

LTget.style.display = "none";

LTpay.addEventListener("click", () => {
    LTpay.style.display = "none";
    LTget.style.display = "block";
})


/* ginger tea */
const gingertea = document.getElementById("gingertea");
const GThead = document.getElementById("GThead");
const GTpay = document.getElementById("GTpay");
const GTget = document.getElementById("GTget");

gingertea.style.display = "none";

GTbtn.addEventListener("click", () => {
    lemontea.style.display = "none";
    gingertea.style.display = "block";
    GThead.textContent = "Ginger Tea Ordered Successfully...";
    chocolatetea.style.display = "none";
})

GTget.style.display = "none";

GTpay.addEventListener("click", () => {
    GTpay.style.display = "none";
    GTget.style.display = "block";
})


/* chocolate tea */
const chocolatetea = document.getElementById("chocolatetea");
const CThead = document.getElementById("CThead");
const CTpay = document.getElementById("CTpay");
const CTget = document.getElementById("CTget");

chocolatetea.style.display = "none";

CTbtn.addEventListener("click", () => {
    gingertea.style.display = "none";
    chocolatetea.style.display = "block";
    CThead.textContent = "Chocolate Tea Ordered Successfully...";
    masalatea.style.display = "none";
})

CTget.style.display = "none";

CTpay.addEventListener("click", () => {
    CTpay.style.display = "none";
    CTget.style.display = "block";
})


/* masala tea */
const masalatea = document.getElementById("masalatea");
const MThead = document.getElementById("MThead");
const MTpay = document.getElementById("MTpay");
const MTget = document.getElementById("MTget");

masalatea.style.display = "none";

MTbtn.addEventListener("click", () => {
    chocolatetea.style.display = "none";
    masalatea.style.display = "block";
    MThead.textContent = "Masala Tea Ordered Successfully...";
})

MTget.style.display = "none";

MTpay.addEventListener("click", () => {
    MTpay.style.display = "none";
    MTget.style.display = "block";
})


const coffeeBtn = document.getElementById("coffeeBtn");
const coffeeItems = document.getElementById("coffeeItems");

coffeeItems.style.display = "none";

coffeeBtn.addEventListener("click", () => {
    coffeeBtn.style.display = "none";
    coffeeItems.style.display = "block";
});

/* normal coffee */
const normalcoffee = document.getElementById("normalcoffee");
const NChead = document.getElementById("NChead");
const NCpay = document.getElementById("NCpay");
const NCget = document.getElementById("NCget");

normalcoffee.style.display = "none";

NCbtn.addEventListener("click", () => {
    normalcoffee.style.display = "block";
    NChead.textContent = "Normal Coffee Ordered Successfully...";
    blackcoffee.style.display = "none";
});

NCget.style.display = "none";

NCpay.addEventListener("click", () => {
    NCpay.style.display = "none";
    NCget.style.display = "block";
});


/* black coffee */
const blackcoffee = document.getElementById("blackcoffee");
const BChead = document.getElementById("BChead");
const BCpay = document.getElementById("BCpay");
const BCget = document.getElementById("BCget");

blackcoffee.style.display = "none";

BCbtn.addEventListener("click", () => {
    normalcoffee.style.display = "none";
    blackcoffee.style.display = "block";
    BChead.textContent = "Black Coffee Ordered Successfully...";
    coldcoffee.style.display = "none";
});

BCget.style.display = "none";

BCpay.addEventListener("click", () => {
    BCpay.style.display = "none";
    BCget.style.display = "block";
});


/* cold coffee */
const coldcoffee = document.getElementById("coldcoffee");
const CChead = document.getElementById("CChead");
const CCpay = document.getElementById("CCpay");
const CCget = document.getElementById("CCget");

coldcoffee.style.display = "none";

CCbtn.addEventListener("click", () => {
    blackcoffee.style.display = "none";
    coldcoffee.style.display = "block";
    CChead.textContent = "Cold Coffee Ordered Successfully...";
    instantcoffee.style.display = "none";
});

CCget.style.display = "none";

CCpay.addEventListener("click", () => {
    CCpay.style.display = "none";
    CCget.style.display = "block";
});


/* instant coffee */
const instantcoffee = document.getElementById("instantcoffee");
const IChead = document.getElementById("IChead");
const ICpay = document.getElementById("ICpay");
const ICget = document.getElementById("ICget");

instantcoffee.style.display = "none";

ICbtn.addEventListener("click", () => {
    coldcoffee.style.display = "none";
    instantcoffee.style.display = "block";
    IChead.textContent = "Instant Coffee Ordered Successfully...";
    sugarlesscoffee.style.display = "none";
});

ICget.style.display = "none";

ICpay.addEventListener("click", () => {
    ICpay.style.display = "none";
    ICget.style.display = "block";
});


/* sugarless coffee */
const sugarlesscoffee = document.getElementById("sugarlesscoffee");
const SChead = document.getElementById("SChead");
const SCpay = document.getElementById("SCpay");
const SCget = document.getElementById("SCget");

sugarlesscoffee.style.display = "none";

SCbtn.addEventListener("click", () => {
    instantcoffee.style.display = "none";
    sugarlesscoffee.style.display = "block";
    SChead.textContent = "Sugarless Coffee Ordered Successfully...";
    filtercoffee.style.display = "none";
});

SCget.style.display = "none";

SCpay.addEventListener("click", () => {
    SCpay.style.display = "none";
    SCget.style.display = "block";
});


/* filter coffee */
const filtercoffee = document.getElementById("filtercoffee");
const FChead = document.getElementById("FChead");
const FCpay = document.getElementById("FCpay");
const FCget = document.getElementById("FCget");

filtercoffee.style.display = "none";

FCbtn.addEventListener("click", () => {
    sugarlesscoffee.style.display = "none";
    filtercoffee.style.display = "block";
    FChead.textContent = "Filter Coffee Ordered Successfully...";
});

FCget.style.display = "none";

FCpay.addEventListener("click", () => {
    FCpay.style.display = "none";
    FCget.style.display = "block";
});


const milkBtn = document.getElementById("milkBtn");
const milkItems = document.getElementById("milkItems");

milkItems.style.display = "none";

milkBtn.addEventListener("click", () => {
    milkBtn.style.display = "none";
    milkItems.style.display = "block";
});


/* plain milk */
const plainmilk = document.getElementById("plainmilk");
const PMhead = document.getElementById("PMhead");
const PMpay = document.getElementById("PMpay");
const PMget = document.getElementById("PMget");

plainmilk.style.display = "none";

PMbtn.addEventListener("click", () => {
    plainmilk.style.display = "block";
    PMhead.textContent = "Plain Milk Ordered Successfully...";
    boiledmilk.style.display = "none";
});

PMget.style.display = "none";

PMpay.addEventListener("click", () => {
    PMpay.style.display = "none";
    PMget.style.display = "block";
});


/* boiled milk */
const boiledmilk = document.getElementById("boiledmilk");
const BMhead = document.getElementById("BMhead");
const BMpay = document.getElementById("BMpay");
const BMget = document.getElementById("BMget");

boiledmilk.style.display = "none";

BMbtn.addEventListener("click", () => {
    plainmilk.style.display = "none";
    boiledmilk.style.display = "block";
    BMhead.textContent = "Boiled Milk Ordered Successfully...";
    coldmilk.style.display = "none";
});

BMget.style.display = "none";

BMpay.addEventListener("click", () => {
    BMpay.style.display = "none";
    BMget.style.display = "block";
});


/* cold milk */
const coldmilk = document.getElementById("coldmilk");
const CMhead = document.getElementById("CMhead");
const CMpay = document.getElementById("CMpay");
const CMget = document.getElementById("CMget");

coldmilk.style.display = "none";

CMbtn.addEventListener("click", () => {
    boiledmilk.style.display = "none";
    coldmilk.style.display = "block";
    CMhead.textContent = "Cold Milk Ordered Successfully...";
    strawberrymilk.style.display = "none";
});

CMget.style.display = "none";

CMpay.addEventListener("click", () => {
    CMpay.style.display = "none";
    CMget.style.display = "block";
});


/* strawberry milk */
const strawberrymilk = document.getElementById("strawberrymilk");
const SMhead = document.getElementById("SMhead");
const SMpay = document.getElementById("SMpay");
const SMget = document.getElementById("SMget");

strawberrymilk.style.display = "none";

SMbtn.addEventListener("click", () => {
    coldmilk.style.display = "none";
    strawberrymilk.style.display = "block";
    SMhead.textContent = "Strawberry Milk Ordered Successfully...";
    chocolatemilk.style.display = "none";
});

SMget.style.display = "none";

SMpay.addEventListener("click", () => {
    SMpay.style.display = "none";
    SMget.style.display = "block";
});


/* chocolate milk */
const chocolatemilk = document.getElementById("chocolatemilk");
const CHMhead = document.getElementById("CHMhead");
const CHMpay = document.getElementById("CHMpay");
const CHMget = document.getElementById("CHMget");

chocolatemilk.style.display = "none";

CHMbtn.addEventListener("click", () => {
    strawberrymilk.style.display = "none";
    chocolatemilk.style.display = "block";
    CHMhead.textContent = "Chocolate Milk Ordered Successfully...";
    almondmilk.style.display = "none";
});

CHMget.style.display = "none";

CHMpay.addEventListener("click", () => {
    CHMpay.style.display = "none";
    CHMget.style.display = "block";
});


/* almond milk */
const almondmilk = document.getElementById("almondmilk");
const AMhead = document.getElementById("AMhead");
const AMpay = document.getElementById("AMpay");
const AMget = document.getElementById("AMget");

almondmilk.style.display = "none";

AMbtn.addEventListener("click", () => {
    chocolatemilk.style.display = "none";
    almondmilk.style.display = "block";
    AMhead.textContent = "Almond Milk Ordered Successfully...";
});

AMget.style.display = "none";

AMpay.addEventListener("click", () => {
    AMpay.style.display = "none";
    AMget.style.display = "block";
});


const biscutBtn = document.getElementById("biscutBtn");
const biscutItems = document.getElementById("biscutItems");

biscutItems.style.display = "none";

biscutBtn.addEventListener("click", () => {
    biscutBtn.style.display = "none";
    biscutItems.style.display = "block";
});


/* parle-g */
const parleg = document.getElementById("parleg");
const PBhead = document.getElementById("PBhead");
const PBpay = document.getElementById("PBpay");
const PBget = document.getElementById("PBget");

parleg.style.display = "none";

PBbtn.addEventListener("click", () => {
    parleg.style.display = "block";
    PBhead.textContent = "Parle-G Ordered Successfully...";
    mariegold.style.display = "none";
});

PBget.style.display = "none";

PBpay.addEventListener("click", () => {
    PBpay.style.display = "none";
    PBget.style.display = "block";
});


/* marie gold */
const mariegold = document.getElementById("mariegold");
const MBhead = document.getElementById("MBhead");
const MBpay = document.getElementById("MBpay");
const MBget = document.getElementById("MBget");

mariegold.style.display = "none";

MBbtn.addEventListener("click", () => {
    parleg.style.display = "none";
    mariegold.style.display = "block";
    MBhead.textContent = "Marie Gold Ordered Successfully...";
    oreo.style.display = "none";
});

MBget.style.display = "none";

MBpay.addEventListener("click", () => {
    MBpay.style.display = "none";
    MBget.style.display = "block";
});


/* oreo */
const oreo = document.getElementById("oreo");
const OBhead = document.getElementById("OBhead");
const OBpay = document.getElementById("OBpay");
const OBget = document.getElementById("OBget");

oreo.style.display = "none";

OBbtn.addEventListener("click", () => {
    mariegold.style.display = "none";
    oreo.style.display = "block";
    OBhead.textContent = "Oreo Ordered Successfully...";
    hideandseek.style.display = "none";
});

OBget.style.display = "none";

OBpay.addEventListener("click", () => {
    OBpay.style.display = "none";
    OBget.style.display = "block";
});


/* hide & seek */
const hideandseek = document.getElementById("hideandseek");
const HBhead = document.getElementById("HBhead");
const HBpay = document.getElementById("HBpay");
const HBget = document.getElementById("HBget");

hideandseek.style.display = "none";

HBbtn.addEventListener("click", () => {
    oreo.style.display = "none";
    hideandseek.style.display = "block";
    HBhead.textContent = "Hide & Seek Ordered Successfully...";
    goodday.style.display = "none";
});

HBget.style.display = "none";

HBpay.addEventListener("click", () => {
    HBpay.style.display = "none";
    HBget.style.display = "block";
});


/* good day */
const goodday = document.getElementById("goodday");
const GBhead = document.getElementById("GBhead");
const GBpay = document.getElementById("GBpay");
const GBget = document.getElementById("GBget");

goodday.style.display = "none";

GBbtn.addEventListener("click", () => {
    hideandseek.style.display = "none";
    goodday.style.display = "block";
    GBhead.textContent = "Good Day Ordered Successfully...";
    bourbon.style.display = "none";
});

GBget.style.display = "none";

GBpay.addEventListener("click", () => {
    GBpay.style.display = "none";
    GBget.style.display = "block";
});


/* bourbon */
const bourbon = document.getElementById("bourbon");
const BBhead = document.getElementById("BBhead");
const BBpay = document.getElementById("BBpay");
const BBget = document.getElementById("BBget");

bourbon.style.display = "none";

BBbtn.addEventListener("click", () => {
    goodday.style.display = "none";
    bourbon.style.display = "block";
    BBhead.textContent = "Bourbon Ordered Successfully...";
});

BBget.style.display = "none";

BBpay.addEventListener("click", () => {
    BBpay.style.display = "none";
    BBget.style.display = "block";
});


const juiceBtn = document.getElementById("juiceBtn");
const juiceItems = document.getElementById("juiceItems");

juiceItems.style.display = "none";

juiceBtn.addEventListener("click", () => {
    juiceBtn.style.display = "none";
    juiceItems.style.display = "block";
});


/* orange juice */
const orangejuice = document.getElementById("orangejuice");
const OJhead = document.getElementById("OJhead");
const OJpay = document.getElementById("OJpay");
const OJget = document.getElementById("OJget");

orangejuice.style.display = "none";

OJbtn.addEventListener("click", () => {
    orangejuice.style.display = "block";
    OJhead.textContent = "Orange Juice Ordered Successfully...";
    mangojuice.style.display = "none";
});

OJget.style.display = "none";

OJpay.addEventListener("click", () => {
    OJpay.style.display = "none";
    OJget.style.display = "block";
});


/* mango juice */
const mangojuice = document.getElementById("mangojuice");
const MJhead = document.getElementById("MJhead");
const MJpay = document.getElementById("MJpay");
const MJget = document.getElementById("MJget");

mangojuice.style.display = "none";

MJbtn.addEventListener("click", () => {
    orangejuice.style.display = "none";
    mangojuice.style.display = "block";
    MJhead.textContent = "Mango Juice Ordered Successfully...";
    applejuice.style.display = "none";
});

MJget.style.display = "none";

MJpay.addEventListener("click", () => {
    MJpay.style.display = "none";
    MJget.style.display = "block";
});


/* apple juice */
const applejuice = document.getElementById("applejuice");
const AJhead = document.getElementById("AJhead");
const AJpay = document.getElementById("AJpay");
const AJget = document.getElementById("AJget");

applejuice.style.display = "none";

AJbtn.addEventListener("click", () => {
    mangojuice.style.display = "none";
    applejuice.style.display = "block";
    AJhead.textContent = "Apple Juice Ordered Successfully...";
    grapejuice.style.display = "none";
});

AJget.style.display = "none";

AJpay.addEventListener("click", () => {
    AJpay.style.display = "none";
    AJget.style.display = "block";
});


/* grape juice */
const grapejuice = document.getElementById("grapejuice");
const GJhead = document.getElementById("GJhead");
const GJpay = document.getElementById("GJpay");
const GJget = document.getElementById("GJget");

grapejuice.style.display = "none";

GJbtn.addEventListener("click", () => {
    applejuice.style.display = "none";
    grapejuice.style.display = "block";
    GJhead.textContent = "Grape Juice Ordered Successfully...";
    pineapplejuice.style.display = "none";
});

GJget.style.display = "none";

GJpay.addEventListener("click", () => {
    GJpay.style.display = "none";
    GJget.style.display = "block";
});


/* pineapple juice */
const pineapplejuice = document.getElementById("pineapplejuice");
const PJhead = document.getElementById("PJhead");
const PJpay = document.getElementById("PJpay");
const PJget = document.getElementById("PJget");

pineapplejuice.style.display = "none";

PJbtn.addEventListener("click", () => {
    grapejuice.style.display = "none";
    pineapplejuice.style.display = "block";
    PJhead.textContent = "Pineapple Juice Ordered Successfully...";
    watermelonjuice.style.display = "none";
});

PJget.style.display = "none";

PJpay.addEventListener("click", () => {
    PJpay.style.display = "none";
    PJget.style.display = "block";
});


/* watermelon juice */
const watermelonjuice = document.getElementById("watermelonjuice");
const WJhead = document.getElementById("WJhead");
const WJpay = document.getElementById("WJpay");
const WJget = document.getElementById("WJget");

watermelonjuice.style.display = "none";

WJbtn.addEventListener("click", () => {
    pineapplejuice.style.display = "none";
    watermelonjuice.style.display = "block";
    WJhead.textContent = "Watermelon Juice Ordered Successfully...";
});

WJget.style.display = "none";

WJpay.addEventListener("click", () => {
    WJpay.style.display = "none";
    WJget.style.display = "block";
});

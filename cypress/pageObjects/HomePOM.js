const Testdata=require('../fixtures/Testdata.json');
class HomePOM
{

constructor()
{
  this.GlobalTimeout=30000;
}

getApplicationURL()
{
  if(Testdata.env='Dev')
  {
    return  cy.visit("https://www.amazon.in/")
  }
  else if(Testdata.env='QA')
  {
    return  cy.visit("https://www.amazon.in/")
  }
  else if(Testdata.env='Staging')
  {
    return  cy.visit("https://www.amazon.in/")
  }
  else if(Testdata.env='Production')
  {
    return  cy.visit("https://www.amazon.in/")
  }
}

getSearchBox()
{
    if(Testdata.env='QA')
    {
     return cy.get('#twotabsearchtextbox',{timeout:this.GlobalTimeout})
    }
    else if(Testdata.env='Production')
    {
     return cy.get("input[id='twotabsearchtextbox']",{timeout:this.GlobalTimeout})
    }
}

getBestSellerMenuLink()
{
  return cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]',{timeout:this.GlobalTimeout})
  cy.wait(10000)
}
getAccountLink()
{
    return cy.get("span[class='nav-line-2']")
}
getBestSellerSearchHeader()
{
  return cy.get('#zg_banner_text')
}
getListOfProducts()
{
  return cy.get("div[class='a-section a-spacing-mini _cDEzb_noop_3Xbw5']")
}
generateRandomString(length)
{
  var randomString="";
  var alpha="ABCDEFGHIJKLMNOPUVWXYZabcdefghijklmnopqrstuvwxyz"
  var alphabetsLength=alpha.length;
  for(let i=0;i<length;i++){
    randomString +=alpha.charAt(Math.floor(Math.random()*alphabetsLength))
  }
  return randomString;
}
getUserInfo()
{
  var randomPhoneNumber="";
  var phonenumber="0123456789";
  var digitsLength=phonenumber.length;
  for(let i=0;i<10;i++){
    randomPhoneNumber +=phonenumber.charAt(Math.floor(Math.random()*digitsLength))
  }
  var firstname="";
  var lastname="";
  var email="";
  var addressline1="";
  var zipcode="";
  var city="";
  var Leadenquirydata="";
  var childrenfirstname="";
  var childrenlastname="";
  var childrenDOB="";
  var date= new Date();
  var d=date.getDate();
  var m=date.getMonth();
  var y=date.getFullYear();
  var currentDate=(m<=9 ? '0' + m : m) +'/'+(d<=9 ? '0' + d : d) + '/'+y;
  firstname = this.generateRandomString(6)
  lastname = this.generateRandomString(5)
  phonenumber = randomPhoneNumber;
  email=firstname+"."+lastname+"@gmail.com";
  addressline1="Street1"+this.generateRandomString(4);
  zipcode="48088"
  city=this.generateRandomString(5)+"city";
 // state=alpha.charAt(Math.floor(Math.random()*alpha.length))+"state";
  Leadenquirydata=currentDate;
  childrenfirstname=this.generateRandomString(6);
  childrenlastname = this.generateRandomString(4);
  childrenDOB=(m<=9 ? '0' + m : m) +'/'+(d<=9 ? '0' + d : d)+'/'+(Number(y)-2);
  return[firstname,lastname,phonenumber,email,addressline1,zipcode,city,Leadenquirydata,childrenfirstname,childrenlastname,childrenDOB]
}

}
export default HomePOM;
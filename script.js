const resultel =document.getElementById('result')
const lengthel =document.getElementById('length')
const uppercaseel =document.getElementById('uppercase')
const lowercaseel =document.getElementById('lowercase')
const clipboardel =document.getElementById('clipboard')
const symbolsel =document.getElementById('symbols')
const generateel =document.getElementById('generate')
const numbersel =document.getElementById('numbers')


const randomfunc =
{
      lower:getrandomlower,
      upper:getrandomupper,
      number:getrandomnumber,
      symbol:getrandomsymbol
}

generateel.addEventListener('click', ()=>
{
      const length = +lengthel.value
      const haslower = lowercaseel.checked
      const hasupper = uppercaseel.checked
      const hasnumber = numbersel.checked
      const hassymbol = symbolsel.checked
      resultel.innerText= generatepassword(haslower,hasupper,hasnumber,hassymbol,length)
})

clipboardel.addEventListener('click', ()=>
{
      const textarea =document.createElement('textarea')
      const password =resultel.innerText

      if(!password) {return}

      textarea.value=password
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
      alert('Password copied')
})

function generatepassword(lower,upper,number,symbol,length)
{
      let generatedpassword=''
      const typescount = lower + upper + symbol + number
      const typesarr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
      console.log(typesarr)

      if(typescount === 0)
      {
            alert('Atleast select one of them.')
            return ''
      }

      for(let i= 0 ; i <  length ; i += typescount)
      {
            typesarr.forEach(type => {
                  const funcname= Object.keys(type)[0]
                   generatedpassword += randomfunc[funcname]()
            })
      }

      
 

      const finalpassword =generatedpassword.slice(0,length)
       
      return finalpassword
}

function getrandomlower()
{
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}
function getrandomupper()
{
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}
function getrandomnumber()
{
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}

function getrandomsymbol()
{

      const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
}
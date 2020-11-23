const {process01,process02} = require('./processes')

async function main(){
  try{
    console.time('total running time')
    const value1 = process01()
    const value2 = process02()

    console.log('process 01 returned: ', value1)
    console.log('process 02 returned: ', value2)

    console.log()

    console.timeEnd('total running time')

  }catch(err){
    console.error(err)
  }
}

main();
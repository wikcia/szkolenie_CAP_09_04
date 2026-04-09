const cds = require('@sap/cds')
const { SELECT } = require('@sap/cds/lib/ql/cds-ql')

module.exports = class WatherService extends cds.ApplicationService {
  init() {

    const { Voivodeships, Cities, Temperatures, Sources } = cds.entities('WatherService')


    this.before('READ', Voivodeships, async (req) => {
      console.log('Before read')
    })

    // this.on ('READ', Voivodeships, async (req, next) => {
    //   console.log('On read')
    //   const data = await next();
    //   data.pop()
    //   // const voivodeships2 = SELECT.from(Voivodeships).columns('ID')
    //   // return voivodeships2
    //   return next()
    // })

    this.after('READ', Voivodeships, async (voivodeships, req) => {
      console.log('After read')
    })


    return super.init()
  }
}

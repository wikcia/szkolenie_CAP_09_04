using {wa_tutorial} from '../db/schema';

// @path:'/test'
service WatherService {
    entity Voivodeships as projection on wa_tutorial.Voivodeships;
    // entity Voivodeships2 as
    //     select from wa_tutorial.Voivodeships {
    //         ID,
    //         capital
    //     };
    entity Cities        as projection on wa_tutorial.Cities;
    entity Temperatures  as projection on wa_tutorial.Temperatures;
    entity Sources       as projection on wa_tutorial.Sources;
}

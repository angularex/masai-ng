let Component = function(config : any){
    return function(TargetClass : any){
        let tc = new TargetClass();
        return class{
            title : string = tc.title;
            power : number = config.power;
            selector : string = config.selector;
            template : string = config.template;
        }
    }
};

@Component({
    power : 10,
    selector : "app-root",
    template  : `
        <div>
            <h2>{{ title }}</h2>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <h3>Power is : {{ power }}</h3>
        </div>
    `
})
class MyComp{
    title : string = "Welcome to your life";
}
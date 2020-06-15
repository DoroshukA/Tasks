// let regexp = new RegExp("pattern", "flags");
// let regexp1 = /pattern/flags;

// let str = "Data transfer started!";
// let regExp = /Data/;
// let result=regExp.exec(str);
// console.log(result);

// let str = "Data transfer started!";
// let regExp = /data/i;
// let result=regExp.exec(str);
// console.log(result);

// let str = "Data transfer data started!";
// let regExp = /data/i;
// let result=regExp.exec(str);
// console.log(result);

// str = "Session complete";
// result = regExp.exec(str);
// console.log(result);

// let str = "Data transfer started!";
// let regExp = /Data/;
// let result=regExp.test(str);
// console.log(result);

// str = "Session complete";
// result = regExp.test(str);
// console.log(result);

// let regExp = /[sk]/;
// let str1 = "test message";
// let str2 = "another data";
// console.log(regExp.test(str1));
// console.log(regExp.test(str2));

// let regExp1 = /[a-d]/;
// let str1 = "test message";
// let str2 = "some text";
// console.log(regExp1.test(str1));
// console.log(regExp1.test(str2));

// let regExp2 = /[6-9]/;
// let pin1 = "2145";
// let pin2 = "5248";
// console.log(regExp2.test(pin1));
// console.log(regExp2.test(pin2));

// /[A-E0-3]/.test('DC7748');
// /[s-z0-9]/.test('@code1');

// String.method_name(RegExp);

// let str = "some text here!";
// let re = /tex/;
// let result = str.search(re);
// console.log(result);

// let re = /;/;
// let nameList = "Igor;Ostap;Viktor;Iryna";
// console.log(nameList.split(re));

// let str = "John came home and did homework";
// let re = /home/g;
// let result = str.match(re);
// console.log(result);

// console.log("My home is a good home!".replace('home', 'car'));
// console.log("My home is a good home!".replace(/home/, 'car'));
// console.log("My home is a good home!".replace(/home/g, 'car'));

// let str = "+38(050)-47-45-600";

// console.log( str.match(/\d+/g) );

// console.log( "1000 10 1".match(/\d0*/g) );

// console.log( "100 10 1".match(/10?/g) );

// console.log("My vacation is not 2, but 22 days".match(/\d{2,3}/g) );

// console.log( /^\d{4}\w{1,3}$/.test('1000PRO') );

// console.log( "Paragraph 2.3".match(/\d\.\d/) );
// console.log( "Paragraph 223".match(/\d\.\d/) );

// let re1 = /(ha)+/gi;
// let re2 = /ha+/gi;
// let str = "Hahaaaha";
// console.log(str.match(re1));
// console.log(str.match(re2));

// let re = /html|css|java(script)?/gi;
// let str = "Java first appered, then HTML, then JavaScript";
// console.log( str.match(re) );

// let str = `1) Lviv
// 2) Rivne 
// 3) Ternopil` ;
// console.log( str.match(/^\d/mg) );


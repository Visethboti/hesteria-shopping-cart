var mongoose = require('mongoose');
var Product = require('../models/product');

// this js file is to input all these into the database
// it will be run manually not with the entire app.js
mongoose.connect('mongodb://localhost:27017/shoppingDB', {useNewUrlParser: true});

var products = [
    new Product({
        imagePath: 'https://www.laptoparena.net/images/Gigabyte_AERO_15_af6b13.jpg',
        title: 'Gigabyte Aero 15x',
        description: 'The Best laptop !!!',
        price: 1499
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,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',
        title: 'AOC C32G1',
        description: '31.5 Inch FHD Curved Monitor with 144 refresh rate',
        price: 310
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXFxcVFxcXFRgYFhcVFxgYGBcYFxcYHSggGB0lGxgaITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRk3LSstKzcrKysrKysrKy0rLSsrKys3KysrKysrKysrKysrKysrKys3KysrKysrKysrK//AABEIAJkBSQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBwECCAb/xABOEAABAwEDBggICA4BBQEAAAABAAIDEQQhMQUSQVFhkQYHEyJxgbHwMlJUcpOhwdEUFnSSsrPT4QgjJDM0QmJzgoOiw9LxF0NEU2Nko//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvFCEIBCEIBCEIBCEIBCEIK2438uWizOswglfHniXOzTStOTpuziq7+PNu8rl+cF7Pj28Kx9E/wDaVVBjSSSB1hVHo/jzbfK5fnBZ+PNs8rl+evOci3xRuWfg7fFHqQeh+PNt8rl+ej482zyuT568/wAg3xRuQIG+KNyD0Hx4tnlcnzysfHe2eWS/PK8/yDfFG5ZMDdQ3IJ7472zyyX0hQeG9s8sl9IVA8i3xQsfBW6huQT3x3tflk3pCg8N7X5ZL6V3vUB8HbqCPg7dQ3IJ/462vyyb0rvesfHS1+WTeld71Aizt1BHIN1DcgnPjna/LJvSu96wOGlr8sm9K/wB6hDA3UNyDA3xRuQTfxztflk3pn+9anhla/LJ/TP8A8lDGFuoblgwt1BBM/HG1+WT+nf8A5IHC+1nC1zn+fJ/koYRDUNy1c0A3Clx9iC8+JrKUs9kndNI+RzbS5oL3OcQ3kYDQFxrSriesr3yrbiI/QrR8rd9RZ1ZKihCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIKm49sbJ/O/tKqo9KtXj4P6H/P8A7SqqM499SqN6rNViiKoNiiqwUIMlYJWCV6HIPBSa0EGmY06SDU7Q3E+pBANB7hKQxOcaNBJ1C87lZNiyFk+zir/x7hWoFHioxGIjB0UcaqVbwjZGM2KzsYBreBhX9VoAGGhxQVYMjz0ryEvo307E2nsr23OaW9Ip6irdPCqXxYOtr9Ff/bsG9D+EbyKPgjfjUBzo9ehwfq9aCnHCn+lrVWhlDJ9gnrWIwOwzg0NFddWVb1uAXj8t8Fnxc6MiRhvBGNOq53SNyDzwKKrVZQbla1QSsVQZScnsPsW5SUns9yC6OIb9CtHyt31FnVlKteIX9BtHyt31FnVlKKEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgqXj5/7P+f/AGlVDDj0q1+Pr/s/539pVPH39SqFWrYlaLYFBkLR8lNpOAWJZQ0EnvsTGAOkddibyTgAg9fkGzRtOc8h78c0UJFL7h7TcvSWnKhILXENbpjrQEV/XJvdgbiANmlePydIIhQCpOOippTA9Juvx21Kk9qJxN1/hNdXqIKCYlypquNKYitKEa/VtTeTKMnjEacR04V2rz1pywBUMvxvq6nSa44bFGS5Qkd+tQam3DRhp9aD1jrc/wAf+kn6PuW0eUHA0FOp1D81wBXi/hMn/kf893vSrbZJ4xPTf2oPcw5WIN9esUOHRsG5PorW01zTm1N4GB6RShuFK0rQUqF4Wy5X0OFBsGjo+5SEc11Wm7YAdmIHsRSnCEsFS7mvriASCen333HGihILSDdp7VMzTNkaWvaHVuv/ANXUv0/d5q2WUxOuJpi06eg0ur0IiTKwkbNPnN26en70qg2KSefatqpOQ99yC6uIX9BtHyt31FnVlqs+IQ/kVo+Vu+ogVmKKEIQgEIQgEIQgEIQgEIQgEIQgFDcKeEUdii5R/Ocbo4waF7vY0aTo2kgGZVEcNMt/C7U94NY2ExxasxpvcPONXdGbqQJ8IOMG1vJc+0ci0+CyIZvrFXu0VvpsChIuGriaG1y1259OvmppJDm2kOkzmtzRmnnA5t4JaRfe4EVG1OcvZQHJOY1zpOUbybWyFzqvc6lQ13ijnA6CAqj0Fm4RWqMhwnkcMbpHC7YBzD/E1ysnghwuFof8HkNXlnKRvoG8ozSHNFzZGmoIFxzSRcFUETM1rW+K0DcKJxkXKBhtlkfqmY0+bJJmO9TnIOhkIQoqpePzwbH0zdkaqWNytrj9HNsfnTdkaqRiqFgVtVaBD3gAk4AV6ggjsqWirs3V2lSOTG5jQdLhed9w2XDcFB2cZzxnaSSfWfYp+N40OGn9Xbpp3vQOQQbub1g+ugr6j742222pzWE0wJDnX4aK4XJS22mjKA43XClAMadm9RoCDdYPfesDv6lguQYHfct2uSQ9y2agVqtoLQWHWNI3Yaj7ykSVglBNB4IqDdrN430qOsjRdq1tUWc0gtFNbTXrG5M7BPTm12ioqNo9u/YnLtdLtbDd1goqIs0mY6/XQqVUblFl4N94vJ1/6ondkkzmDduu9iIXKTk7+pb1SUh77kF1cQZ/I7T8qP1ECs5VhxBfodp+VH6mFWeooXiuHHDA2dxgi8MMDnvuJbnXNa0G7OONSLgRjo9qudctZSM1qtTya5076eY1zms/pDdyBS2cILQ+pfM+mouLgPnVPfQoiPLsjr2OmcNbA6leopSWPOaW4VBG8USWSbQ10bRJjGxsRaHEFpj5ouBFxAzuknaqiZyFw6tcTqxzueGmjopauadhDr29LSOvBXVwT4SRW6HlWc1w5skZNSx2qulpxDtOwggc7ixOdM+WFjnRsAEpF+Y15pHnGpxcKA6c3QvR8B8ufA7YyQupE/8AFy33Zjjc8+aedXVna0V0AhCFAIQhAIQhB5fjIy18GsT800kl/Es1jOBznDVRgcQddFSUVKL1fG3lQT2s2YOIbAzNqP8AySZr36PEzW10Gu1V+7KLYm5grK8ddPOcBeaXVpfiaEqonp7Tyga2VkcmYM1nKRMeWtrWgLhWlb6aydZSTbNHXObFEwjAsja36IUJBlaU3mIkaM0A+vOUpk7KTJLsCMQbiK4VB14VFRtrcgducojK1r5Mh+lma7ra7OTqzWAtkc8yZ1S49N7szEVbRpoRUio1AKF4Svuk3bgEHWiEnZnVY062g7wlFFVNx++DY/Om7I1UkRx6VbfH74Fj86bsjVRR6VULVTXKb6Ru6hvITiqZZWPM6x7UCOSRUk34Uu2ke5SzXnW75vWonJThQ11j2p6HDuT37EGluJLrybgMR1ptRPZW1Jxx0Gurfjt6Tim72dyEDZ7lgd7lmRl+hSYyc2pvuq6m2hcKC/G6l/8AsIvvpSje+9TMWSWnAurjX51QcRo26Fq7JzRiSfCxa3EEjRQ1uroxGOkIVxQ1L2iChIBBAOIO098VqyNBmE0cDf0jvtT2Rw00rtBafvTTN2ezvh3xTiR3ONKi/Qdu0e5A3yiObXaTWtbjd7ljJT+a4be0fcs2/wDNm7QNGmtdCQySfC6vagkyUlItik5EF18QJ/I7T8pP1MKtBVd+D/8Aodp+Un6mFWiorWV9ATqBO5cpZDnLgCcS0Hr0rqfKLqRSHUx5/pK5M4Pv8Dop2oPRh19FvGQ0khrSTjnMa6tPOB3plJY857XF5aGkEAXX1GdgOcS0UvI6xct7ZbmsIbeXHBoFSammGgbSRsrQ0qJH4c/NLA7NYby1oDWk4VIaACdqYTUAvpRMpLZP/wCJo2Ozq9l3rWhtoeM14dGXXVDrjsa+l1cLxp0oOheLfLXwmwxlxrJF+JfrJYBmuOurC011kr1CpXikys2C1/B7wydgbecJYwXNpszc9u2jVdSihCEIBNsp21sEMkzzRkbHSO6Ggk9icqvOOzLHI2EQg3zvANDQ8nHR7t5DG/xIKSyplN8sjjWkkjnSSOr4OeS40399DeKJoFBoxpU1OupA1Y9mCSslM0vJGc4muk00AXXJy2/9YnqoB1n3Ko3boOB3u6G0HZvW8kbnXtH44XsNxL9bHAXEZtem4HRTSnT1XXay499iWssma4EUuIN2sGoFcXHvcipWxWkSMa8YEA/dXSRgdoK8pluWudtLjvqpnJkobE+ngtL83VSrnD1ELz2Ujceg9iI7BycfxUfmM+iE4TbJn5mL92z6ITlRVS8f3gWPzpuxiqKMq3uP7wLJ503YxVDGqjeqaZTFYzsp2p2ElOzOBGsFBGZNfTOFdGvqT3O771F2Z+a7VoPfpUkzageEi43GoBxodOnTh/vEpvadTuogjvcVvZjXm3VvIBwOFaHXd17kobN+zT+KnfA+tFMnxnSD1074paxNINRdjq1evVvTuGy10NHXU98e4TxmR3G9hadlL9A1iuI9XSgUgfjUndr6tiTtNMa6jhtvw737tDk+cf8ATPU4jC443dmCVGTH/r1bsJBOi65EQs7b9fRjidBuOIWjW98FLTWUVuofUcRgde7FN32fp9ujfhtRTVgv0jq6dQ7Fo2/UOq7XoTiVuaMbzUC6+mmvZTadV6DTtRDXKJow7ToN12xa5KFxO3v2pHKclTTrNNqeWFlGDbfvw9SBwtJFutHoLq/B+P5JaflP9mJWkqs/B+/RbV8p/sxq01FNspisMo/9b/olciZHkpmnURuuXX1t/Nv813YVxxYjd1BB6202jMYXHQDsqdAroqbq6K1UfFVox/GO50hIzSCQOY3UG7McMAAs5TkrFGdDnNztWvtCzJXbj5wqb6V7O5VQiWbPX93q9S1c0ULSLtIv9g9i3psHVdjs79a0I2U9nq9yKVybb3wytLXVdG5skTtZYc5oOnEeorqfJVvbPDHOzwZGNeOhwrQ7RguTrQLs4VJbeDopp6tPUFenEflnlbG+Am+F2c2+/k5auGOp4kGwAKCx0IQgFQPHDbDasoPhaebBEYwNHKCN9pfQ7cxjP4Fe9utTYo3yvNGRsc9x1NaC4ncFzZkjKYdahaZ7g6cSzX1AZM50Ut+prZyf4UEK00oM7Vg0DQnDIXGhIcdVbq+09WtOrfY3RF0Dy7lIXOjfSjallwI2EUcDpDgUpZrYC0AjnAU0E02+8qocOtMIsoZSPlKmudEKk1xBxPUdF6hp5aMJJwBpoN+Hgnm9OzSVm0OGcSDjqxrqzjcBfoW2ToTK7OIpE01F3huwrfeQO+mgYERjswBxdeesg9igLdp6CvTZadcBrNd3+15i14O6Cg7EyZ+Zi/ds+iE5TXJR/ERfu2fRCdKKqbj98CyedL2MVQNVwcfn5uyedL9FiqBiqNkOQsFBD5QhzXV139envtS1nkqnVphDm03JpZY7iNIQO2O1EqWscmfdza7SRjXAHr7m6GYOlKtcRfeOtB6izxkY5ve9SUbR+zTq6Ojs09CgLDlsC6QV/aAv66ezWp2zWmN/guaeg34UFRjoGOpAo8V0X0PrFca10a9HQtHsF9506OjVh9yeRgEXGvWD2E+N24pvLa4m1LpBdq5xpza3NJOG0aeoplPZyRjXp9/VTFRVqizBfUbK37NF9df+06t2Xmi6MZxwziCKXEXb9f3+etFpc81ca99CIxNKSdOoYXCuzem80nc4YVW7rvZRIW2KjKE3nHtp7+rrBjGzPfs9imQE1sUGaKnE96J2Agyk5Eok3oLo/B+/RbV8o/sxq1FVf4P36LavlA+qjVqKKStQ5jvNPYuNrGcOgLsubwT0HsXGdlwHQOxB6COLlLOWi8itOkGoHWDTrWkJq0EAXjQaE67umu5LZAfc4bQd93sWMpWYxkyNFYyavbTwSdPRcqiUktcTrLyZoXimaOTaDWuOeG1OmtSa1UO6AjR9y2s7mm8G7HXTReDeO+KdS2kUoKVN3cU76kEbI243VuPe8e1e84spzYsqcgT+Le+Sz36ntZNCTrNS1v8AGvK5OyeZXMgb4czhGKaA7wnHY1tXHUGlP8s5QDrTJaYTcZ3TRH9lhayE9YhDuhwQdLITXJdtbPDFMzwZGNkHQ4AjtTpRXh+OPKnI5NewGjp3NhHQauf/AENcOtUGwZrq1DgReCBShFC2oNaEEgi6/XcVYvHxlXOtUFmBuijMjtRdK6grtDY/61WzSqJaW3tkY0ShznsaGMnYW8tmNFGRzxvLWzhouD2ua6gFdSZWoV5sbHHa9rWeoOO+pSsNilObSN5zgCCGktINL86lKDOFTWgrfRO47BNnFvJSVbWozTdm51b/AOB3TmmlUQxsmTKkGR1f2Rhv9gp1pxZhKxxDyCDquDaVGawYObSlCNAGBJC2EqKoG2VH1I82u8/coG0NqD1qYtzucdgA3Ae1RcgQda8HZM6yWd2uGI72NKkVA8A5s/Jtid/80G8RtB7FPKKqfj8/N2Tz5fosVPtVw8fn5uyefL9Fqp5qqN0FYWUGhCazw6RcR607K1IQN4ZgbjcUsRr3pGWEHp1pIvc3G8a9m1AuUB3frSTZQdNPX2o6wgcC0O0uO87FqZCcTXpNVq1h1t3oLf2m+v2AhBvXv1rZjK7fdtPvSLpGDST00HUQCa7wk3Tudc3DcB9+3FA4ltDWYGp1+6vb3KEcZJzndQ1LMUFLzeUuAgyAtkALNEAVo9brVyC5vwf/ANGtXygfVRq1FVnED+jWr9+PqmK01FI2x9I3nU1x3Arjiz+COgdi6z4a2rksn2uTxbPMR05jqetcoRNQS2RyQ/YWmm2h0evcpa0RyuIDCBSprrNCA119A2uJ1E4kNCiMnF1GOc+5snJtYReA9jTnY1oajQRdo0zufmgkmgF5JuAA0kqoaWrI7a50RzDqIq0+71jYtIIJASHtbTW29x2c4gAbKaFIwyBzWkVvFRUFtRWlQCK0rpUTla1HlOT5Qxta3Oc5vhkmtGtOjDFBItcQ1zWN5JrwWSPL+UnkiOMTXBoZDGf1s0FzqAEkJDMBN5oKXANFLs0AA4gBrSAML+tOspzxNa0QNe9jQA57iS550uJwFdQAptUbJODK1me2NpDSXOaXeGaCjQRovxQXfxP5Q5Sw8kTV0EjmX45rjyjernFo81e5VP8AFRauRtz4RnclPGS0uIqZIjnAUAAva6Q3eIrgUVy5w9yjy+UbXJW7lnRt82L8UKbDmV61DMevWcNeCZs1plD60e98jHaHNc4mo6K0I0HqXk5Gxi7OcqiXs2XJGtzeaSKZji1vMoC24Uv5ri2/AEjBLjhDPzSZKltM0lraimbgaVvzW110Xn6x+OdyM9njncgko3pZsguGu5Q4kb4/qW8bxUc9ArKaknWSd6YSKUdGo60RFpvFEHRnE3bOUyTANMZkiP8ADI7N/pLV7ZU/+DzlGsdrs/ivjmH8xpY7dyTfnK4FFVRx+fm7J58v0WqnWlXHx+D8VZfPk+i1U61p1FVGwQEBp1Hcs5p1epBgrUrchakIEytCEqQtCgRfCDiEn8FGgketOFhA3NmPjer70Cy63HsS9UBBoyBo0b0qAgLYBAALYBAbsW4YdR3FBhC3EZ1HcVnkXeK7cUCdFhyWELvFduK1fGRiCBtB9qC4+IMfk1p/fj6tqtJVdxCD8mtP74fVtVoqK8Nx0W3k8kzDTI6OIbc57S4fMa5c4Rq6vwh7bSGyQeNI+X0bMwfWlU1Z4HONwKqHMDXOziZKCJmcwO/XIcBybKmgIqDQa8FPzw8pGW1pnNuOrSCoeNtAWmtDoqQA6o51MCaVHWl4srhgDbrrtyBzwfilBLZWDmmokqS51RTN80C/Xh1JcMMjyNpaAx2aBmv5pupUg9tUozhNTQNycy8NpHCjnFw1EkjcSgjuDuXnlvwUNzuUNK6gcS7YBeTsS3CbIDw1k0bHZoAZgbwMM04Ei+4bdS1jy+1pLmxsaTiWsaCekgJwzLzn82ppWtK3V10QS/BDL8zXWV8n/TmaL25ruTua4ur+y5ww0LolUJwS4OSWyUNFzAQZHaGt1V8Y4AewFX1RRTDLmRYbXEYp2ZzTgcHNPjNdiD/o1CoXhrxTW2zuMlmBtUOPNFJmjU6P9fpbuC6KQg4vtdnliNJY3xnU9jmH+oBN+W2rtO0+CVXuVPCPSg5v5basifar4lWGqinbHlVtRnm4UrtovQwZRbNcyzySjDmROf8ARBVr5D/Ot6VY8eCgqLiYyFLHap7QbNLBGYuT/GtczOcXhwzWuvuDTfT9YK30IQV5xxZCtNqjs4s8LpS17y4NLRQFooTnEaVWbeA2VBcLHL8+P/NdHoQc4/EjKnkcvz4/81kcCMqeSS/Pj/zXRqEHOR4D5U8jk+fF/mtfiNlXyOT58X2i6PQg5w+ImVPI5PSRfaLQ8AsqeRSekh+0XSSEHNh4AZU8ik9JD9osf8e5V8if6SH7RdKIQc1f8eZV8if6SD7RZHF1lXyJ/pYPtF0ohBzcOLvKvkbvSwfaLYcXeVfI3elg+0XR6EHOY4usq+Ru9NB9os/8c5V8kPprP9oui0IOdRxcZV8kPprP9os/8cZV8kPprP8AaLolCDnf/jnKvkh9NB9oj/jjKnkn/wC0H2i6IQg8HxScHrRY4Z2WmPk3PlDmjOY6rcxorzHEYhe8QhBWHHBwbntElmnis77Q2NsjHNYW1aXFpBzSRnVocNSrq1Q2mK51gtLAP/nkpvDaLpRCDkLKVtLXHmuZU1o9pab9hUTyw1jeuz5UkEHHEVXeCCegV7E6Zk+c4QzHoieexq7CjSiDkiycF7fIaMsVpP8AIkA+c4AetWHwN4oLS5wktjhAzHk2kPlPSRVjN7ugK9EIGmS8mxWeMRQsDGDQNJ0kk3uO0p2hCD//2Q==',
        title: 'Logitech z623',
        description: '2.1 400 Watt Speaker',
        price: 249
    }),
    new Product({
        imagePath: 'https://i.ebayimg.com/images/g/T~gAAOSwA31e6wk6/s-l400.jpg',
        title: 'Cooler Master R9NBSE42KGP',
        description: '100mm Fan Cooling Pad',
        price: 20
    })
];

// We use this in order to prevent the mongoose.disconnect to execute before all products are saved
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
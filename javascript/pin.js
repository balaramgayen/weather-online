'use strict'
/* preloder */
document.body.onload = function () {

	setTimeout(function () {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 3000);
}
/* preloder */

$(document).ready(function(){
    
    $('.sidenav').sidenav();

    $('.tabs').tabs();

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?zip=700144,IN&units=metric&appid=96252dec9c05de24a0b216615e8d7777",
        success: function (data) {
            
            $('#temp').text(Math.round(data.main.temp));
            $('#city').text(data.name);
            $('#city2').text(data.name);
            $('#about').text(data.weather[0].description);
            $('#real').text(Math.round(data.main.feels_like));
            $('#max').text(Math.round(data.main.temp_max));
            $('#min').text(Math.round(data.main.temp_min));
            $('#visibility').text((data.visibility)/10000);
            $('#pressure').text(data.main.pressure);
            $('#humidity').text(data.main.humidity);
            $('#wind').text(Math.round(data.wind.speed));

            let image = data.weather[0].icon;
            let url = "http://openweathermap.org/img/wn/" + image + "@2x.png";
            $('#wimage').attr("src",url);

        },error: function (data) {
            console.log("some error occoured");
        }
    })

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast?zip=700144,IN&units=metric&appid=96252dec9c05de24a0b216615e8d7777",
        success: function (data) {

            // frist day forecast
            let date = data.list[0].dt_txt;
            let pdate = date.substring(0,10)
            let d = new Date(pdate);
            let a = String(d);
            let res = a.substring(0,3);
            $('#fristDate').text(res)
            $('#date').text(`${res} ${pdate}`);
            
            $('#fristMaxTemp').text(Math.round(data.list[0].main.temp_max));
            $('#fristMinTemp').text(Math.round(data.list[0].main.temp_min));
            $('#fristDescription').text(data.list[0].weather[0].main);
            $('#fristHumidity').text(data.list[0].main.humidity);

            let image = data.list[0].weather[0].icon;
            let url = "http://openweathermap.org/img/wn/" + image + "@2x.png";
            $('#fristImage').attr("src",url);


            //second day forecast
            let sdate = data.list[8].dt_txt;
            let spdate = sdate.substring(0,10)
            let sd = new Date(spdate);
            let sa = String(sd);
            let sres = sa.substring(0,3);
            $('#SecondDate').text(sres);
            
            $('#secondMaxTemp').text(Math.round(data.list[8].main.temp_max));
            $('#secondMinTemp').text(Math.round(data.list[8].main.temp_min));
            $('#secondDescription').text(data.list[8].weather[0].main);
            $('#secondHumidity').text(data.list[8].main.humidity);

            let simage = data.list[8].weather[0].icon;
            let surl = "http://openweathermap.org/img/wn/" + simage + "@2x.png";
            $('#secondImage').attr("src",surl);


            // third day forecast
            let tdate = data.list[16].dt_txt;
            let tpdate = tdate.substring(0,10)
            let td = new Date(tpdate);
            let ta = String(td);
            let tres = ta.substring(0,3);
            $('#thirdDate').text(tres)
            
            $('#thirdMaxTemp').text(Math.round(data.list[16].main.temp_max));
            $('#thirdMinTemp').text(Math.round(data.list[16].main.temp_min));
            $('#thirdDescription').text(data.list[16].weather[0].main);
            $('#thirdHumidity').text(data.list[16].main.humidity);

            let timage = data.list[16].weather[0].icon;
            let turl = "http://openweathermap.org/img/wn/" + timage + "@2x.png";
            $('#thirdImage').attr("src",turl);


            // fourth day forecast
            let fdate = data.list[24].dt_txt;
            let fpdate = fdate.substring(0,10)
            let fd = new Date(fpdate);
            let fa = String(fd);
            let fres = fa.substring(0,3);
            $('#fourthDate').text(fres)
            
            $('#fourthMaxTemp').text(Math.round(data.list[24].main.temp_max));
            $('#fourthMinTemp').text(Math.round(data.list[24].main.temp_min));
            $('#fourthDescription').text(data.list[24].weather[0].main);
            $('#fourthHumidity').text(data.list[24].main.humidity);

            let fimage = data.list[24].weather[0].icon;
            let furl = "http://openweathermap.org/img/wn/" + fimage + "@2x.png";
            $('#fourthImage').attr("src",furl);


            //fifth day forecast
            let fidate = data.list[32].dt_txt;
            let fipdate = fidate.substring(0,10)
            let fid = new Date(fipdate);
            let fia = String(fid);
            let fires = fia.substring(0,3);
            $('#fifthDate').text(fires)
            
            $('#fifthMaxTemp').text(Math.round(data.list[32].main.temp_max));
            $('#fifthMinTemp').text(Math.round(data.list[32].main.temp_min));
            $('#fifthDescription').text(data.list[32].weather[0].main);
            $('#fifthHumidity').text(data.list[32].main.humidity);

            let fiimage = data.list[32].weather[0].icon;
            let fiurl = "http://openweathermap.org/img/wn/" + fiimage + "@2x.png";
            $('#fifthImage').attr("src",fiurl);

            
        },
        error: function (err) {
            console.log("some error occoured");
        }
    })


    

    $('#search').click(function(){
        let text = $('#text').val();

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?zip=" + text + ",IN&units=metric&appid=96252dec9c05de24a0b216615e8d7777",
            success: function (data) {
                
                $('#temp').text(Math.round(data.main.temp));
                $('#city').text(data.name);
                $('#city2').text(data.name);
                $('#about').text(data.weather[0].description);
                $('#real').text(Math.round(data.main.feels_like));
                $('#max').text(Math.round(data.main.temp_max));
                $('#min').text(Math.round(data.main.temp_min));
                $('#visibility').text((data.visibility)/10000);
                $('#pressure').text(data.main.pressure);
                $('#humidity').text(data.main.humidity);
                $('#wind').text(Math.round(data.wind.speed));
    
                let image = data.weather[0].icon;
                let url = "http://openweathermap.org/img/wn/" + image + "@2x.png";
                $('#wimage').attr("src",url);


                $('#text').val("");
    
            },error: function (data) {
                alert("Please enter any proper Indian PIN code NO. e.g. 743338, 743347, etc");
            }
        })
    
        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/forecast?zip=" + text + ",IN&units=metric&appid=96252dec9c05de24a0b216615e8d7777",
            success: function (data) {
    
                // frist day forecast
                let date = data.list[0].dt_txt;
                let pdate = date.substring(0,10)
                let d = new Date(pdate);
                let a = String(d);
                let res = a.substring(0,3);
                $('#fristDate').text(res)
                $('#date').text(`${res} ${pdate}`);
                
                $('#fristMaxTemp').text(Math.round(data.list[0].main.temp_max));
                $('#fristMinTemp').text(Math.round(data.list[0].main.temp_min));
                $('#fristDescription').text(data.list[0].weather[0].main);
                $('#fristHumidity').text(data.list[0].main.humidity);
    
                let image = data.list[0].weather[0].icon;
                let url = "http://openweathermap.org/img/wn/" + image + "@2x.png";
                $('#fristImage').attr("src",url);
    
    
                //second day forecast
                let sdate = data.list[8].dt_txt;
                let spdate = sdate.substring(0,10)
                let sd = new Date(spdate);
                let sa = String(sd);
                let sres = sa.substring(0,3);
                $('#SecondDate').text(sres);
                
                $('#secondMaxTemp').text(Math.round(data.list[8].main.temp_max));
                $('#secondMinTemp').text(Math.round(data.list[8].main.temp_min));
                $('#secondDescription').text(data.list[8].weather[0].main);
                $('#secondHumidity').text(data.list[8].main.humidity);
    
                let simage = data.list[8].weather[0].icon;
                let surl = "http://openweathermap.org/img/wn/" + simage + "@2x.png";
                $('#secondImage').attr("src",surl);
    
    
                // third day forecast
                let tdate = data.list[16].dt_txt;
                let tpdate = tdate.substring(0,10)
                let td = new Date(tpdate);
                let ta = String(td);
                let tres = ta.substring(0,3);
                $('#thirdDate').text(tres)
                
                $('#thirdMaxTemp').text(Math.round(data.list[16].main.temp_max));
                $('#thirdMinTemp').text(Math.round(data.list[16].main.temp_min));
                $('#thirdDescription').text(data.list[16].weather[0].main);
                $('#thirdHumidity').text(data.list[16].main.humidity);
    
                let timage = data.list[16].weather[0].icon;
                let turl = "http://openweathermap.org/img/wn/" + timage + "@2x.png";
                $('#thirdImage').attr("src",turl);
    
    
                // fourth day forecast
                let fdate = data.list[24].dt_txt;
                let fpdate = fdate.substring(0,10)
                let fd = new Date(fpdate);
                let fa = String(fd);
                let fres = fa.substring(0,3);
                $('#fourthDate').text(fres)
                
                $('#fourthMaxTemp').text(Math.round(data.list[24].main.temp_max));
                $('#fourthMinTemp').text(Math.round(data.list[24].main.temp_min));
                $('#fourthDescription').text(data.list[24].weather[0].main);
                $('#fourthHumidity').text(data.list[24].main.humidity);
    
                let fimage = data.list[24].weather[0].icon;
                let furl = "http://openweathermap.org/img/wn/" + fimage + "@2x.png";
                $('#fourthImage').attr("src",furl);
    
    
                //fifth day forecast
                let fidate = data.list[32].dt_txt;
                let fipdate = fidate.substring(0,10)
                let fid = new Date(fipdate);
                let fia = String(fid);
                let fires = fia.substring(0,3);
                $('#fifthDate').text(fires)
                
                $('#fifthMaxTemp').text(Math.round(data.list[32].main.temp_max));
                $('#fifthMinTemp').text(Math.round(data.list[32].main.temp_min));
                $('#fifthDescription').text(data.list[32].weather[0].main);
                $('#fifthHumidity').text(data.list[32].main.humidity);
    
                let fiimage = data.list[32].weather[0].icon;
                let fiurl = "http://openweathermap.org/img/wn/" + fiimage + "@2x.png";
                $('#fifthImage').attr("src",fiurl);
    
                
            },
            error: function (err) {
                console.log("some error occoured");
            }
        })

    });

    // let dateObj = new Date();
    // let month = dateObj.getUTCMonth() + 1; //months from 1-12
    // let day = dateObj.getUTCDate();
    // let year = dateObj.getUTCFullYear();

    // let newdate = day + "/" + month + "/" + year;
    // $('#date').text(newdate);
});


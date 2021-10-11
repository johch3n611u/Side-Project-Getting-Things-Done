// 將login.html的通過JQuery ajax加載出來，然後放到template裡面，然後需要的function，也在這裡都準備好，我這裡沒有後端服務，所以ajax驗證用戶名密碼就不寫了，成功後，我就直接跳轉到user頁面，原文網址：https://kknews.cc/code/pexegmz.html
    const Login = async function () {
        // 可以請求一個html文件，既然存放模板還是html文件存放比較好
        return await $.get("./Components/login/login.html").then(function (res) {
            return {
                template: res,
                setup(props, context) {
                    const login = function (){
                        console.log(router);
                        router.push('/VueSample/MutiPage/Table');
                    }
                    return {
                        login
                    }
                }
            }
        });
    };
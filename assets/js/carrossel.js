var posicao = 1;
        
        // 01 fruta
        var f01 = document.getElementById('f01')
        var f02 = document.getElementById('f02')
        var f03 = document.getElementById('f03')
        
        // 02 legume
        var l01 = document.getElementById('l01')
        var l02 = document.getElementById('l02')
        var l03 = document.getElementById('l03')
        
        // 03 verdura
        var v01 = document.getElementById('v01')
        var v02 = document.getElementById('v02')
        var v03 = document.getElementById('v03')
        
        function proximaExibicao(){

            if (posicao == 1) {
                f01.style.display = "none";
                f02.style.display = "none";
                f03.style.display = "none";
                
                l01.style.display = 'block';
                l02.style.display = 'block';
                l03.style.display = 'block';

                posicao = posicao + 1
            } else if (posicao == 2) {
                l01.style.display = 'none';
                l02.style.display = 'none';
                l03.style.display = 'none';

                v01.style.display = 'block';
                v02.style.display = 'block';
                v03.style.display = 'block';

                posicao = posicao + 1
            } else if (posicao == 3) {
                v01.style.display = 'none';
                v02.style.display = 'none';
                v03.style.display = 'none';

                f01.style.display = 'block';
                f02.style.display = 'block';
                f03.style.display = 'block';

                posicao = 1
            }
        }


        function anteriorExibicao() {
            if (posicao == 1) {
                f01.style.display = "none";
                f02.style.display = "none";
                f03.style.display = "none";
                
                v01.style.display = 'block';
                v02.style.display = 'block';
                v03.style.display = 'block';

                posicao = 3
            } else if (posicao == 2) {
                l01.style.display = 'none';
                l02.style.display = 'none';
                l03.style.display = 'none';

                f01.style.display = 'block';
                f02.style.display = 'block';
                f03.style.display = 'block';

                posicao = 1
            } else if (posicao == 3) {
                v01.style.display = 'none';
                v02.style.display = 'none';
                v03.style.display = 'none';

                l01.style.display = 'block';
                l02.style.display = 'block';
                l03.style.display = 'block';

                posicao = 2
            }
        }
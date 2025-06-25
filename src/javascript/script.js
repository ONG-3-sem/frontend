$(document).ready(function () {
    // Botão do menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Scroll ativo na navegação
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Scroll Reveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    });

    // --- Comentários ---
    const formComentario = $('#comment-form');
    const listaComentarios = $('#comentarios-lista');

    function carregarComentarios() {
        const comentariosSalvos = JSON.parse(localStorage.getItem('comentarios')) || [];

        listaComentarios.empty(); // Limpa lista atual

        comentariosSalvos.forEach((comentario) => {
            const item = `
                <div class="comentario-item">
                    <p class="nome"><strong>${comentario.nome}</strong></p>
                    <p>${comentario.texto}</p>
                </div>
            `;
            listaComentarios.append(item);
        });
    }

    formComentario.on('submit', function (e) {
        e.preventDefault();

        const nome = $('#nome-comentario').val().trim();
        const texto = $('#comentario').val().trim();

        if (nome && texto) {
            const novoComentario = { nome, texto };

            // Salvar no localStorage
            const comentariosSalvos = JSON.parse(localStorage.getItem('comentarios')) || [];
            comentariosSalvos.push(novoComentario);
            localStorage.setItem('comentarios', JSON.stringify(comentariosSalvos));

            // Recarrega comentários
            carregarComentarios();

            // Limpa formulário
            $('#nome-comentario').val('');
            $('#comentario').val('');
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    carregarComentarios(); // Carrega ao abrir a página
});

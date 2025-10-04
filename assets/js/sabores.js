// Este código será executado quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', () => {

    // Encontra todos os checkboxes de sabores na página
    const checkboxes = document.querySelectorAll('.sabor-item input[type="checkbox"]');

    // Define o número máximo de sabores que podem ser escolhidos
    // Por enquanto, vamos deixar um limite de 4 como exemplo.
    // No futuro, este valor virá da página de tamanho da pizza.
    const maximoSabores = 4;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            // Conta quantos checkboxes estão marcados
            const selecionados = document.querySelectorAll('.sabor-item input[type="checkbox"]:checked').length;

            // Se o número de selecionados exceder o máximo...
            if (selecionados > maximoSabores) {
                alert(`Você pode escolher no máximo ${maximoSabores} sabores.`);
                // Desmarca a última opção que o usuário clicou
                checkbox.checked = false;
            }
        });
    });

});
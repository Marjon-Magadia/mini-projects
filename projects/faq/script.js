
const faqs = [
    {
        "title": "Why shouldn't we trust Atoms?",
        "answer": "They make up everything",
    },
    {
        "title": "What is your mode of Payment?",
        "answer": "Cash, GCash, Paymay, Debit and Credit Card",
    },
    {
        "title": "Is there a physical store of your store?",
        "answer": "As of now, there's none. But we are considering this.",
    },
];
getAllFAQ();

function getAllFAQ() {
    var data = "";
    faqs.forEach(faq => {
        data += `<div class="faq">
        <h3 class="faq-title">
            ${faq.title}
        </h3>
        <p class="faq-text">
            ${faq.answer}
        </p>
        <button class="faq-toggle" id="faq-toogle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
        </button>
    </div>`
    });

    document.getElementById("faq-container").innerHTML = data;


    const toggles = document.querySelectorAll('.faq-toggle')

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active')
        })
    })
}
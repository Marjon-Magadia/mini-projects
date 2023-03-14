const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const randomBtn = document.getElementById('random');
const showResult = document.getElementById('result-container')

randomBtn.addEventListener('click', () => {
    textarea.value = '';
    randomSelect();
})

const result = [];
var rank = 1;

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect();
    }
    // randomSelect();
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}
function randomSelect() {
    const times = 30

    textarea.disabled = true;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
            displayResult(randomTag.innerHTML, rank++);
            tagsEl.removeChild(randomTag);
            if (tagsEl.childElementCount > 0) {
                randomSelect();
            } else {
                textarea.disabled = false;
                for (let index = 0; index < result.length; index++) {

                    textarea.value += result[index].tag;
                    if (index != result.length - 1) {
                        textarea.value += ',';
                    }
                }
                result.splice(0, result.length);
                rank = 1;
                createTags(textarea.value);
            }
            // if(tagsEl.childElementCount <= 1){
            //     randomBtn.disabled = true;
            //     const tag = document.querySelectorAll('.tag');
            //     displayResult(tag[0].innerHTML,rank++);
            //     tagsEl.removeChild(tag[0]);
            //     // randomBtn.innerHTML = "TRY AGAIN";
            // }

        }, 100)


    }, times * 100)
}



function displayResult(tag, rank) {
    var data = ""
    showResult.innerHTML = "";
    result.push(
        {
            "tag": tag,
            "rank": rank
        }
    );
    result.forEach(value => {
        data += `<div class="result-ranking">
        <span>${value.rank}</span>
        <span> ${value.tag} </span>
    </div>`;
    });
    showResult.innerHTML += data;
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]

}
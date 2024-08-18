
let allCounters = document.querySelectorAll('.counter');

const ovserver = new IntersectionObserver((entries)=>
{
    entries.forEach(el=>
    {
        if(el.isIntersecting)
        {
            let tag = el.target;
            let counter_number = +tag.getAttribute('counter');
            let counter_up = 0;
            tag.innerText = counter_up;
            function increment()
            {
                counter_up += 1;
                tag.innerText = counter_up;
                if(counter_up < counter_number)
                {
                    setTimeout(increment , 15);
                }
            }
            increment();
            ovserver.unobserve(tag);
        }
    }
    )
});

allCounters.forEach(el=>
    {
        ovserver.observe(el);
    }
);
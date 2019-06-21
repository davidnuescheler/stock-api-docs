const manifest=require('./manifest.json')

function toMd (pages, padding) {
    pages.forEach( p => { 
        console.log(`${padding}- [${p.title}](/${p.path})`);
        if (p.pages) toMd (p.pages, padding+'  ');
    });
}

toMd (manifest.pages, '');
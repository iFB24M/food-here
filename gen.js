const fs = require('fs');

const type = process.argv[2];
const name = process.argv[3];
const path = 'src/' + process.argv[4];

if (path && type && name) {
	if (type === 'component') {
		if (!fs.existsSync(`${path}/${name}`)) fs.mkdir(`${path}/${name}`, (cb) => console.log(cb));

		fs.open(`${path}/${name}/${name}.component.tsx`, 'w', (cb) => console.log(cb));
		fs.open(`${path}/${name}/${name}.module.scss`, 'w', (cb) => console.log(cb));
		fs.writeFileSync(`${path}/${name}/${name}.component.tsx`, `import React from 'react';\nimport styles from './${name}.module.scss';\n\nexport const ${name} = () => {\n\treturn (<></>);\n};`);
		fs.writeFileSync(`${path}/${name}/${name}.module.scss`, '');
	}
	if (type === 'props') {
		if (!fs.existsSync(`${path}/${name}`)) fs.mkdir(`${path}/${name}`, (cb) => console.log(cb));

		fs.writeFileSync(`${path}/${name}/${name}.props.ts`, `import { HTMLAttributes } from 'react';\n\nexport interface ${name}Props extends HTMLAttributes<HTMLDivElement> {}`);

	}
}
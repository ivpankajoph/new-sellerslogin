const fs = require('fs');
const file = 'c:/oph work/new-sellerslogin/src/app/vendor/registration/business-details/page.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

const before = lines.slice(0, 2645);
const after = lines.slice(2944);

const inserted = `                <div className="md:col-span-2">
                  <TextField
                    label="Have a GST number? Please enter"
                    value={form.gst_number}
                    onChange={(value) => updateTextField("gst_number", value.toUpperCase())}
                    error={errors.gst_number}
                    placeholder="Example: 22AAAAA0000A1Z5"
                  />
                </div>

              </div>
            </div>
          ) : null}`;

const newContent = before.join('\n') + '\n' + inserted + '\n' + after.join('\n');
fs.writeFileSync(file, newContent);
console.log("Done");

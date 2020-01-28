# jobcan_do_it
register command for working start/end time on jobcan web site

## Installation
```bash
npm install -g jobcan_do_it
```

## Setup
```bash
jobcan credentials edit
# then please input your email, company_id and password

# you can show credentials
jobcan credentials show
```

## Working Start and End
```bash
jobcan start

jobcan end
```

```bash
# you can debug with -d (or --debug) option
jobcan start -d
# then excecute browser without headless mode
```

```bash
# you can dry run with --dry-run option
jobcan start --dry-run
# then excecute browser without headless mode and not working start actually
```

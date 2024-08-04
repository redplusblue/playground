#### Operating System Used: Kali GNU/Linux Rolling (2024.1)

| Tool        | Description                                                     | Example                                      |
| ----------- | --------------------------------------------------------------- | -------------------------------------------- |
| `dig`       | DNS lookup utility                                              | `dig +short <domain>`                        |
| `whois`     | Domain information lookup tool                                  | `whois <domain>`                             |
| `nmap`      | Network exploration tool and security / port scanner            | `nmap -sV -sC -p- -T4 -oN nmap.txt`          |
| `nikto`     | Web server scanner                                              | `nikto -h http://<URL>`                      |
| `holehe`    | Takes email address and checks against a lot of online services | `holehe <email>`                             |
| `ssh-audit` | Checks SSH server configuration and prints out security issues  | `ssh-audit.py <IP>`                          |
| `hydra`     | Password bruteforcing / cracking tool                           | `hydra -l <username> -P <wordlist> <IP> ssh` |
| `stubby`    | DNS-over-TLS client                                             | `stubby -C stubby.yml`                       |

Invoke-WebRequest https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.6.2-windows-x86_64.zip -OutFile elastic.zip
Expand-Archive -Path elasticsearch-8.6.2-windows-x86_64.zip
rm elasticsearch-8.6.2-windows-x86_64
mv elasticsearch-8.6.2 elasticsearch
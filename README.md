# cloudninja-dynamodb
Repo criado para ser usado no curso preparatório para AWS Certified Developer Associate


	sudo su
	yum update -y
	yum install git -y
	yum install nodejs npm —-enablerepo=epel -y
	git clone https://github.com/jonathanbaraldi/cloudninja-dynamodb.git
	cd cloudninja-dynamodb

	npm install aws-sdk
	
	node CreateTable.js


===========================
2 - Carregar as tabelas
Rodar na linha de comando.

	aws configure

		us-east-1

	aws dynamodb batch-write-item --request-items file://ProductCatalog.json

	aws dynamodb batch-write-item --request-items file://Forum.json

	aws dynamodb batch-write-item --request-items file://Thread.json

	aws dynamodb batch-write-item --request-items file://Reply.json
